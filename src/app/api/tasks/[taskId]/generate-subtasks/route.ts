import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const SYSTEM_PROMPT = `You are a task breakdown assistant. Given a task title and description, break it down into logical subtasks.
Each subtask should include:
1. A clear, actionable title
2. A suggested due date (YYYY-MM-DD format)
3. A suggested due time (HH:mm format, optional)

IMPORTANT DATE RULES:
- Today's date is provided in the user message - DO NOT use any date before this
- All suggested dates MUST be between today and the next 30 days
- If a task seems urgent, schedule it within the next 7 days
- If a task is less urgent, schedule it within 8-30 days
- Times should be between 9:00 and 18:00 in the provided timezone

Format your response as a JSON array of objects with the following structure:
[{
  "title": "string",
  "dueDate": "YYYY-MM-DD",
  "dueTime": "HH:mm" (optional)
}]

Example response for today's date 2024-12-29:
[{
  "title": "Research existing solutions",
  "dueDate": "2024-12-30",
  "dueTime": "14:00"
},
{
  "title": "Create project timeline",
  "dueDate": "2024-12-31",
  "dueTime": "11:00"
}]`;

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    
    // Get the task
    const task = await Task.findById(params.taskId);
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }

    // Get current date and format it
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    const currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
    const timeZone = now.toString().match(/\(([^)]+)\)$/)?.[1] || 'Local';

    // Generate completion
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { 
          role: "user", 
          content: `CURRENT DATE AND TIME:
Today's date: ${currentDate}
Current time: ${currentTime}
Time zone: ${timeZone}

TASK DETAILS:
Title: ${task.title}
Description: ${task.description || 'No description provided'}`
        }
      ],
      temperature: 0.7,
    });

    // Parse the response
    const suggestedSubtasks = JSON.parse(completion.choices[0].message.content || '[]');

    // Validate dates are in the future
    const formattedSubtasks = suggestedSubtasks.map((subtask: any) => {
      const subtaskDate = new Date(subtask.dueDate);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      // If date is in the past, set it to tomorrow
      if (subtaskDate < today) {
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        subtask.dueDate = tomorrow.toISOString().split('T')[0];
      }

      return {
        title: subtask.title,
        status: 'not_started',
        dueDate: subtask.dueDate,
        dueTime: subtask.dueTime,
        createdAt: new Date()
      };
    });

    // Create subtasks with not_started status
    // Update the task with new subtasks using findByIdAndUpdate
    const updatedTask = await Task.findByIdAndUpdate(
      params.taskId,
      { $set: { subTasks: formattedSubtasks } },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return NextResponse.json({ error: 'Failed to update task' }, { status: 404 });
    }

    return NextResponse.json(updatedTask);
  } catch (error: any) {
    console.error('Error generating subtasks:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate subtasks' },
      { status: 500 }
    );
  }
}
