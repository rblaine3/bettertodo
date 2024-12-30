import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

export async function PATCH(
  req: Request,
  { params }: { params: { taskId: string; subtaskId: string } }
) {
  try {
    const body = await req.json();
    await dbConnect();
    
    const task = await Task.findById(params.taskId);
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    const subtask = task.subTasks.id(params.subtaskId);
    if (!subtask) {
      return NextResponse.json({ error: 'Subtask not found' }, { status: 404 });
    }
    
    // Update the subtask with new values
    Object.assign(subtask, body);
    
    await task.save();
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update subtask' }, { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string; subtaskId: string } }
) {
  try {
    await dbConnect();
    
    const task = await Task.findById(params.taskId);
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    const subtaskIndex = task.subTasks.findIndex(
      (st: any) => st._id.toString() === params.subtaskId
    );
    
    if (subtaskIndex === -1) {
      return NextResponse.json({ error: 'Subtask not found' }, { status: 404 });
    }
    
    task.subTasks.splice(subtaskIndex, 1);
    await task.save();
    
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete subtask' }, { status: 500 });
  }
}
