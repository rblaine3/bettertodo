import { NextResponse } from 'next/server';
import { ChatOpenAI } from "@langchain/openai";
import { z } from "zod";

const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  deadline: z.string().optional(),
  priority: z.enum(['low', 'medium', 'high']).optional(),
});

const tasksResponseSchema = z.object({
  tasks: z.array(taskSchema),
});

const SYSTEM_PROMPT = `You are a task parsing assistant. Your job is to take user input (either text or transcribed audio) and break it down into a list of distinct tasks. For each task:

1. Create a clear, concise title
2. Extract or infer a description if possible
3. Identify any mentioned deadlines or time constraints
4. Infer a priority level (low, medium, high) based on language and context

IMPORTANT DATE RULES:
- Today's date and time will be provided in the user message
- All dates MUST be in the future relative to today
- For relative dates like "tomorrow" or "next week", convert them to actual dates
- For time of day, use business hours (9:00-18:00)
- If no specific time is mentioned, default to:
  * 10:00 for morning tasks
  * 14:00 for afternoon tasks
  * 16:00 for end-of-day tasks
- All dates should be within the next 30 days unless explicitly stated otherwise

Format your response as a JSON array of tasks, where each task has:
- id: a unique string
- title: the task title
- description: additional details (optional)
- deadline: ISO date string if mentioned (optional)
- priority: "low", "medium", or "high" (optional)

Example for today's date 2024-12-29:
Input: "I need to finish the presentation by next Friday, and don't forget to call mom tomorrow"

Output:
{
  "tasks": [
    {
      "id": "t1",
      "title": "Finish presentation",
      "description": "Complete and finalize presentation",
      "deadline": "2025-01-03T16:00:00-05:00",
      "priority": "high"
    },
    {
      "id": "t2",
      "title": "Call mom",
      "deadline": "2024-12-30T10:00:00-05:00",
      "priority": "medium"
    }
  ]
}`;

async function transcribeAudio(audioBlob: Blob): Promise<string> {
  try {
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');
    formData.append('model', 'whisper-1');

    const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to transcribe audio');
    }

    const data = await response.json();
    return data.text;
  } catch (error) {
    console.error('Transcription error:', error);
    throw new Error('Failed to transcribe audio');
  }
}

async function parseTasks(input: string) {
  const model = new ChatOpenAI({
    modelName: "gpt-4",
    temperature: 0.7,
  });

  // Get current date and time
  const now = new Date();
  const currentDate = now.toISOString().split('T')[0];
  const currentTime = now.toTimeString().split(' ')[0].slice(0, 5);
  const timeZone = now.toString().match(/\(([^)]+)\)$/)?.[1] || 'Local';
  const offset = now.getTimezoneOffset();
  const tzOffset = `${offset <= 0 ? '+' : '-'}${String(Math.abs(Math.floor(offset / 60))).padStart(2, '0')}:${String(Math.abs(offset % 60)).padStart(2, '0')}`;

  const response = await model.invoke([
    { role: "system", content: SYSTEM_PROMPT },
    { 
      role: "user", 
      content: `CURRENT DATE AND TIME:
Today's date: ${currentDate}
Current time: ${currentTime}
Time zone: ${timeZone}
UTC offset: ${tzOffset}

USER INPUT:
${input}`
    }
  ]);

  try {
    const parsed = JSON.parse(response.content);
    const result = tasksResponseSchema.parse(parsed);

    // Validate and adjust dates if needed
    result.tasks = result.tasks.map(task => {
      if (task.deadline) {
        const deadlineDate = new Date(task.deadline);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // If date is in the past, set it to tomorrow
        if (deadlineDate < today) {
          const tomorrow = new Date(today);
          tomorrow.setDate(tomorrow.getDate() + 1);
          tomorrow.setHours(14, 0, 0, 0); // Default to 2 PM
          task.deadline = tomorrow.toISOString();
        }
      }
      return task;
    });

    return result;
  } catch (error) {
    console.error('Error parsing GPT response:', error);
    throw new Error('Failed to parse tasks from input');
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    let input: string;

    // Handle both text and audio input
    const text = formData.get('text');
    const audio = formData.get('audio');

    if (text && typeof text === 'string') {
      input = text;
    } else if (audio && audio instanceof Blob) {
      input = await transcribeAudio(audio);
    } else {
      return NextResponse.json(
        { error: 'Invalid input: must provide either text or audio' },
        { status: 400 }
      );
    }

    const result = await parseTasks(input);
    return NextResponse.json(result);
  } catch (error: any) {
    console.error('Task parsing error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process input' },
      { status: 500 }
    );
  }
}
