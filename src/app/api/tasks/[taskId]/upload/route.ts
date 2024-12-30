import { NextResponse } from 'next/server';
import { generateUploadUrl, getFileUrl } from '@/lib/s3';
import dbConnect from '@/lib/mongoose';
import Task from '@/lib/models/Task';

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { fileName, fileType, fileSize } = await req.json();

    // Generate pre-signed URL for S3 upload
    const { url, fields, key } = await generateUploadUrl(fileName, fileType);

    // Add attachment record to task
    await dbConnect();
    const task = await Task.findByIdAndUpdate(
      params.taskId,
      {
        $push: {
          attachments: {
            fileName,
            fileUrl: getFileUrl(key),
            fileSize,
            fileType,
          },
        },
      },
      { new: true }
    );

    if (!task) {
      return NextResponse.json(
        { error: 'Task not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      uploadUrl: url,
      uploadFields: fields,
      attachment: task.attachments[task.attachments.length - 1],
    });
  } catch (error) {
    console.error('Error handling file upload:', error);
    return NextResponse.json(
      { error: 'Failed to process file upload' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { attachmentId } = await req.json();

    await dbConnect();
    const task = await Task.findByIdAndUpdate(
      params.taskId,
      {
        $pull: {
          attachments: { _id: attachmentId },
        },
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
  } catch (error) {
    console.error('Error deleting attachment:', error);
    return NextResponse.json(
      { error: 'Failed to delete attachment' },
      { status: 500 }
    );
  }
}
