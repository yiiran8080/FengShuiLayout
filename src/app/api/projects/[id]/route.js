import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';
import Room from '@/models/Room';
import Furniture from '@/models/Furniture';
import mongoose from 'mongoose';

// Helper to validate MongoDB ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

export async function GET(request, { params }) {
    try {
        const { id } = params;

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                { success: false, message: 'Invalid project ID' },
                { status: 400 }
            );
        }

        await dbConnect();

        const project = await Project.findById(id);

        if (!project) {
            return NextResponse.json(
                { success: false, message: 'Project not found' },
                { status: 404 }
            );
        }

        // Get related rooms and furniture
        const rooms = await Room.find({ projectId: id });
        const furniture = await Furniture.find({ projectId: id });

        return NextResponse.json({
            success: true,
            data: {
                project,
                rooms,
                furniture
            }
        });
    } catch (error) {
        console.error('Error fetching project:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to fetch project' },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const body = await request.json();

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                { success: false, message: 'Invalid project ID' },
                { status: 400 }
            );
        }

        await dbConnect();

        const updatedProject = await Project.findByIdAndUpdate(
            id,
            {
                ...body,
                updatedAt: new Date()
            },
            { new: true, runValidators: true }
        );

        if (!updatedProject) {
            return NextResponse.json(
                { success: false, message: 'Project not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: updatedProject });
    } catch (error) {
        console.error('Error updating project:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to update project' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;

        if (!isValidObjectId(id)) {
            return NextResponse.json(
                { success: false, message: 'Invalid project ID' },
                { status: 400 }
            );
        }

        await dbConnect();

        const deletedProject = await Project.findByIdAndDelete(id);

        if (!deletedProject) {
            return NextResponse.json(
                { success: false, message: 'Project not found' },
                { status: 404 }
            );
        }

        // Delete related rooms and furniture
        await Room.deleteMany({ projectId: id });
        await Furniture.deleteMany({ projectId: id });

        return NextResponse.json({
            success: true,
            message: 'Project deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting project:', error);
        return NextResponse.json(
            { success: false, message: 'Failed to delete project' },
            { status: 500 }
        );
    }
} 