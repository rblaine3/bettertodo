import { NextResponse } from 'next/server';
import OpenAI from 'openai';

/**
 * OpenAI client for processing text and voice inputs
 */
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Process text or voice input to create structured task data
 */
export async function POST(req: Request) {
  try {
    console.log('Received parse request');
    const formData = await req.formData();
    console.log('Form data entries:', Array.from(formData.entries()));
    let userInput = '';

    // Handle voice or text input
    const audioFile = formData.get('audio') as File;
    const textInput = formData.get('text') as string;
    console.log('Inputs received:', { hasAudio: !!audioFile, textInput });

    if (audioFile) {
      // Transcribe voice input
      console.log('Processing audio file...');
      const transcription = await openai.audio.transcriptions.create({
        file: audioFile,
        model: 'whisper-1',
      });
      userInput = transcription.text;
      console.log('Transcribed audio:', userInput);
    } else if (textInput) {
      userInput = textInput;
      console.log('Processing text input:', userInput);
    } else {
      console.log('No input found in request');
      throw new Error('No input provided');
    }

    // Parse task details using GPT
    console.log('Sending request to GPT...');
    const prompt = `Extract task details from this input. Return a JSON array of task objects. Each task should contain:
- title (required): A clear, concise task title
- notes (optional): Additional details or notes about the task
- priority (optional): "low", "medium", or "high"
- dueDate (optional): Date in YYYY-MM-DD format
- dueTime (optional): Time in HH:mm format (24-hour)

If multiple tasks are mentioned, create multiple task objects. If a task has a dependency or is related to another task, include it in the notes.

Example input: "Buy groceries tomorrow morning and call mom in the evening"
Example response: [
  {
    "title": "Buy groceries",
    "notes": "Morning shopping task",
    "priority": "medium",
    "dueDate": "2024-12-31",
    "dueTime": "09:00"
  },
  {
    "title": "Call mom",
    "notes": "Evening call",
    "priority": "medium",
    "dueDate": "2024-12-31",
    "dueTime": "18:00"
  }
]

Input: ${userInput}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500,
    });

    const content = completion.choices[0].message.content;
    console.log('GPT response:', content);

    // Parse and validate the response
    let tasks = [];
    try {
      tasks = JSON.parse(content || '[]');
      console.log('Parsed GPT response:', tasks);
      
      // Validate the response format
      if (!Array.isArray(tasks) || tasks.length === 0) {
        console.log('Invalid response format');
        throw new Error('Invalid response format');
      }

      // Add unique IDs and ensure required fields
      tasks = tasks.map(task => ({
        id: Math.random().toString(36).substr(2, 9),
        title: task.title || 'Untitled Task',
        notes: task.notes || '',
        priority: task.priority || 'medium',
        dueDate: task.dueDate || null,
        dueTime: task.dueTime || null
      }));
      console.log('Processed tasks:', tasks);
    } catch (error) {
      console.error('Error parsing GPT response:', error);
      throw new Error('Failed to parse task details');
    }

    return NextResponse.json({ 
      success: true,
      tasks,
      rawInput: userInput 
    });
  } catch (error: any) {
    console.error('Error processing input:', error);
    return NextResponse.json({
      success: false,
      error: error.message || 'Failed to process input'
    }, { 
      status: 500 
    });
  }
}
