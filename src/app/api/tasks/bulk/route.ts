import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function POST(req: Request) {
  try {
    await dbConnect();
    const { tasks } = await req.json();

    if (!Array.isArray(tasks)) {
      return NextResponse.json(
        { error: 'Tasks must be an array' },
        { status: 400 }
      );
    }

    // Create all tasks in a single transaction
    const createdTasks = await Task.create(
      tasks.map(task => ({
        title: task.title,
        description: task.description || '',
        status: 'pending',
        priority: task.priority || 'medium',
        dueDate: task.deadline ? new Date(task.deadline) : undefined,
        tags: []
      }))
    );

    return NextResponse.json({ 
      tasks: createdTasks,
      message: 'Tasks created successfully'
    });
  } catch (error: any) {
    console.error('Bulk task creation error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create tasks' },
      { status: 500 }
    );
  }
}
