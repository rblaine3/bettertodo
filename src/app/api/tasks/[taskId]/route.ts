import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

export async function GET(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    const task = await Task.findById(params.taskId);
    
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch task' }, { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const body = await req.json();
    await dbConnect();
    
    const task = await Task.findByIdAndUpdate(
      params.taskId,
      { ...body, updatedAt: new Date() },
      { new: true }
    );
    
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    const task = await Task.findByIdAndDelete(params.taskId);
    
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Task deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}
