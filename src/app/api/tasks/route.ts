import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

export async function GET() {
  try {
    await dbConnect();
    const tasks = await Task.find({})
      .sort({ createdAt: -1 })
      .select('title description status priority dueDate dueTime notes subTasks');
    return NextResponse.json(tasks);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    const task = await Task.create(body);
    return NextResponse.json(task, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const body = await req.json();
    const { id, ...updates } = body;
    
    await dbConnect();
    const task = await Task.findByIdAndUpdate(id, updates, { new: true });
    
    if (!task) {
      return NextResponse.json({ error: 'Task not found' }, { status: 404 });
    }
    
    return NextResponse.json(task);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}
