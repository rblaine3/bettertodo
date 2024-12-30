import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function GET() {
  try {
    await dbConnect();
    const testTask = await Task.findOne();
    return NextResponse.json({ 
      message: 'Database connected successfully!',
      task: testTask || 'No tasks found'
    });
  } catch (error) {
    console.error('Database connection error:', error);
    return NextResponse.json({ error: 'Failed to connect to database' }, { status: 500 });
  }
}
