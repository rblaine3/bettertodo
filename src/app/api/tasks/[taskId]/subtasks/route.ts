import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const body = await req.json();
    await dbConnect();
    
    const task = await Task.findById(params.taskId);
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    task.subTasks.push({
      ...body,
      createdAt: new Date()
    });
    
    await task.save();
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create subtask' }, { status: 500 });
  }
}
