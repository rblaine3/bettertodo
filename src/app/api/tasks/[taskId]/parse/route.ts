import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { title } = await req.json();

    const prompt = `Break down this task into 3-7 logical subtasks. Return ONLY the titles of the subtasks as a JSON array of strings. The subtasks should be specific, actionable items that help complete the main task. Example: ["Research existing solutions", "Create initial design mockup", "Implement core functionality"]

Task: ${title}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.8,
      max_tokens: 300,
    });

    const content = completion.choices[0].message.content;
    let subtasks: string[] = [];
    
    try {
      subtasks = JSON.parse(content || '[]');
    } catch (e) {
      // If parsing fails, try to extract strings from the response
      const matches = content?.match(/"([^"]+)"/g) || [];
      subtasks = matches.map(m => m.replace(/"/g, ''));
    }

    // Ensure we have at least 3 subtasks
    if (subtasks.length < 3) {
      throw new Error('Not enough subtasks generated');
    }

    return NextResponse.json({ subtasks });
  } catch (error) {
    console.error('Error parsing task:', error);
    return NextResponse.json(
      { error: 'Failed to parse task' },
      { status: 500 }
    );
  }
}
