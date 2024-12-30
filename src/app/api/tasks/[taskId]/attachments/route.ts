import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Task from '@/models/Task';

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    // TODO: Implement file upload to cloud storage (e.g., S3)
    // For now, we'll just store the file name
    const attachment = {
      fileName: file.name,
      fileUrl: '/placeholder-url', // Replace with actual upload URL
      fileType: file.type,
      createdAt: new Date()
    };

    const task = await Task.findByIdAndUpdate(
      params.taskId,
      { $push: { attachments: attachment } },
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
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to upload file' },
      { status: 500 }
    );
  }
}
