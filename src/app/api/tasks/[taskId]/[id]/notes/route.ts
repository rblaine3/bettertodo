import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await dbConnect();
    const { content } = await req.json();
    
    const task = await Task.findByIdAndUpdate(
      params.id,
      { 
        $push: { 
          notes: { 
            content,
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
    console.error('Error adding note:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to add note' },
      { status: 500 }
    );
  }
}
