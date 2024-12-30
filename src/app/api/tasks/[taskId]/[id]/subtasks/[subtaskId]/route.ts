import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function PATCH(
  req: Request,
  { params }: { params: { id: string; subtaskId: string } }
) {
  try {
    await dbConnect();
    const updates = await req.json();
    
    const task = await Task.findOneAndUpdate(
      { 
        _id: params.id,
        'subTasks._id': params.subtaskId 
      },
      { 
        $set: {
          'subTasks.$.completed': updates.completed
        }
      },
      { new: true }
    );

    if (!task) {
      return NextResponse.json(
        { error: 'Task or subtask not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error: any) {
    console.error('Error updating subtask:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to update subtask' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string; subtaskId: string } }
) {
  try {
    await dbConnect();
    
    const task = await Task.findByIdAndUpdate(
      params.id,
      { 
        $pull: { 
          subTasks: { _id: params.subtaskId }
        }
      },
      { new: true }
    );

    if (!task) {
      return NextResponse.json(
        { error: 'Task or subtask not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(task);
  } catch (error: any) {
    console.error('Error deleting subtask:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to delete subtask' },
      { status: 500 }
    );
  }
}
