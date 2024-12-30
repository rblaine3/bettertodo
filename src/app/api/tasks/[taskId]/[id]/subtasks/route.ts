import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { title } = await req.json();
    
    const task = await Task.findByIdAndUpdate(
      params.id,
      { 
        $push: { 
          subTasks: { 
            title,
            completed: false,
            createdAt: new Date()
          } 
        } 
      },
      { new: true }
    );

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error: any) {
    console.error('Error adding subtask:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add subtask' },
      { status: 500 }
    );
  }
}
