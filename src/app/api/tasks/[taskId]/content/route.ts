import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import TaskContent from '@/models/TaskContent';
import Task from '@/models/Task';
import { ObjectId } from 'mongodb';

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    const data = await req.json();
    const { notes, attachments } = data;
    
    let content = await TaskContent.findOne({ taskId: params.taskId });
    if (!content) {
      content = await TaskContent.create({
        taskId: new ObjectId(params.taskId),
        userId: new ObjectId(), // TODO: Replace with actual user ID
        notes: [],
        attachments: [],
      });
    }

    if (notes) {
      const newNotes = notes.map((note: string) => ({
        id: new ObjectId().toString(),
        content: note,
        createdAt: new Date(),
        updatedAt: new Date(),
      }));
      content.notes.push(...newNotes);
    }

    if (attachments) {
      const newAttachments = attachments.map((attachment: any) => ({
        id: new ObjectId().toString(),
        ...attachment,
        createdAt: new Date(),
      }));
      content.attachments.push(...newAttachments);
    }

    await content.save();

    await Task.findByIdAndUpdate(params.taskId, {
      contentId: content._id,
      updatedAt: new Date(),
    });

    return NextResponse.json(content);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
