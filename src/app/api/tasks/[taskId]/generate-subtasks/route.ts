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

Format your response as a JSON array of objects with the following structure:
[{
  "title": "string",
  "dueDate": "YYYY-MM-DD",
  "dueTime": "HH:mm" (optional)
}]

Guidelines:
- Keep titles concise but descriptive
- Suggest realistic timeframes
- Order subtasks logically
- Include 3-7 subtasks depending on complexity
- All dates should be in the future
- Times should be during working hours (9 AM - 6 PM)`;

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

    // Generate completion
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { 
          role: "user", 
          content: `Task Title: ${task.title}\nDescription: ${task.description || 'No description provided'}`
        }
      ],
      temperature: 0.7,
    });

    // Parse the response
    const suggestedSubtasks = JSON.parse(completion.choices[0].message.content || '[]');

    // Create subtasks with not_started status
    const formattedSubtasks = suggestedSubtasks.map((subtask: any) => ({
      title: subtask.title,
      status: 'not_started',
      dueDate: subtask.dueDate,
      dueTime: subtask.dueTime,
      createdAt: new Date()
    }));

    // Update the task with new subtasks
    task.subTasks = formattedSubtasks;
    await task.save();

    return NextResponse.json(task);
  } catch (error: any) {
    console.error('Error generating subtasks:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to generate subtasks' },
      { status: 500 }
    );
  }
}
