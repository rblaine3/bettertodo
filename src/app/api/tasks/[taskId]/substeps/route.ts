import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Substeps from '@/models/Substeps';
import Task from '@/models/Task';
import { ObjectId } from 'mongodb';

export async function POST(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    await dbConnect();
    const data = await req.json();
    const { steps } = data;
    
    let substeps = await Substeps.findOne({ taskId: params.taskId });
    if (!substeps) {
      substeps = await Substeps.create({
        taskId: new ObjectId(params.taskId),
        userId: new ObjectId(), // TODO: Replace with actual user ID
        steps: [],
      });
    }

    const newSteps = steps.map((step: any, index: number) => ({
      id: new ObjectId().toString(),
      title: step.title,
      description: step.description,
      status: 'pending',
      order: substeps.steps.length + index,
    }));

    substeps.steps.push(...newSteps);
    await substeps.save();

    await Task.findByIdAndUpdate(params.taskId, {
      substepsId: substeps._id,
      updatedAt: new Date(),
    });

    return NextResponse.json(substeps);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
