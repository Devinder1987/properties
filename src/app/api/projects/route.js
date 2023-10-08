import connectMongoDB from '../utils/mongodb';
import Project from '../utils/projectSchema';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const reqData = await request.json();
  const reqDatawithDate = reqData.map((item) => ({
    ...item,
    createdAt: new Date(),
    updatedAt: new Date(),
  }));
  await connectMongoDB();
  await Project.insertMany(reqDatawithDate);
  return NextResponse.json({ message: 'Project Created' }, { status: 201 });
}

export async function GET(request) {
  const id = request.nextUrl.searchParams.get('id') || null;
  let projects;
  await connectMongoDB();
  if (id) {
    projects = await Project.findById(id);
  } else {
    projects = await Project.find();
  }
  return NextResponse.json({ projects });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id');
  await connectMongoDB();
  await Project.findByIdAndDelete(id);
  return NextResponse.json({ message: 'Project deleted' }, { status: 200 });
}

export async function PUT(request) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    const updatedData = await request.json();
    updatedData.updatedAt = new Date();
    await connectMongoDB();
    // Use findByIdAndUpdate to update the project by its ID
    const updatedProject = await Project.findByIdAndUpdate(
      id,
      updatedData,
      { new: true } // This option returns the updated document
    );
    if (!updatedProject) {
      return NextResponse.json(
        { message: 'Project not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Project updated', data: updatedProject },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: 'Error updating project', error },
      { status: 500 }
    );
  }
}
