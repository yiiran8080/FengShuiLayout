import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';

export async function GET() {
    try {
        await dbConnect();

        const projects = await Project.find({})
            .sort({ createdAt: -1 })
            .limit(20);

        return NextResponse.json({ success: true, data: projects });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch projects' },
            { status: 500 }
        );
    }
}

export async function POST(request) {
    try {
        const body = await request.json();

        await dbConnect();

        const project = await Project.create({
            ...body,
            updatedAt: new Date(),
        });

        return NextResponse.json(
            { success: true, data: project },
            { status: 201 }
        );
    } catch (error) {
        console.error('Error creating project:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to create project' },
            { status: 500 }
        );
    }
} 