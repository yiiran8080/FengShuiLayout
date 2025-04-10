import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Project from '@/models/Project';
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../../../auth/[...nextauth]/route';

// Get projects for a specific user
export async function GET(request, { params }) {
    try {
        const { userId } = params;

        // In a real app, authenticate the request
        // const session = await getServerSession(authOptions);
        // if (!session || (session.user.id !== userId && !session.user.isAdmin)) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        // }

        await dbConnect();

        // Find all projects for this user
        const projects = await Project.find({ owner: userId })
            .select('-__v')
            .sort({ updatedAt: -1 });

        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error fetching user projects:', error);
        return NextResponse.json(
            { message: 'Failed to fetch user projects', error: error.message },
            { status: 500 }
        );
    }
} 