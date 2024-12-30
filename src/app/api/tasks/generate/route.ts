import { NextResponse } from 'next/server';
import { generateTaskSuggestions } from '@/lib/gpt';

export async function POST(request: Request) {
  try {
    const { userInput } = await request.json();

    if (!userInput) {
      return NextResponse.json(
        { error: 'User input is required' },
        { status: 400 }
      );
    }

    const suggestions = await generateTaskSuggestions(userInput);
    
    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('Error in task generation:', error);
    return NextResponse.json(
      { error: 'Failed to generate tasks' },
      { status: 500 }
    );
  }
}
