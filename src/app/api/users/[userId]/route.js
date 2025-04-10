import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import User from '@/models/User';
import { getUserInfo } from "@/lib/session";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../../auth/[...nextauth]/route';
import { genSuccessData, genUnAuthData } from "../../utils/gen-res-data";
// Get user by ID
//用谷歌邮箱做用户唯一id
export async function GET(request, { params }) {
    const { userId } = await params;
    try {
        await dbConnect();
        const user = await User.findOne({ userId }).select('-__v');

        // if (!user) {
        //     return NextResponse.json(
        //         { message: 'User not found' },
        //         { status: 404 }
        //     );
        // }

        return NextResponse.json(genSuccessData(user || {}));
    } catch (error) {
        console.error('Error fetching user:', error);
        return NextResponse.json(
            { message: 'Failed to fetch user', error: error.message },
            { status: 500 }
        );
    }
}

// Update user by ID
export async function PUT(request, { params }) {
    try {
        const { userId } = params;
        const data = await request.json();

        // Authenticate the request (in real app, ensure only the user or admin can update)
        // const session = await getServerSession(authOptions);
        // if (!session || (session.user.id !== userId && !session.user.isAdmin)) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        // }

        await dbConnect();

        // Find the user
        const user = await User.findOne({ userId });
        if (!user) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        // Update allowed fields only
        const allowedFields = ['gender', 'birthYear', 'birthMonth', 'birthDay', 'birthHour'];
        allowedFields.forEach(field => {
            if (data[field] !== undefined) {
                user[field] = data[field];
            }
        });

        user.updatedAt = new Date();
        await user.save();

        return NextResponse.json({
            message: 'User updated successfully',
            user
        });
    } catch (error) {
        console.error('Error updating user:', error);
        return NextResponse.json(
            { message: 'Failed to update user', error: error.message },
            { status: 500 }
        );
    }
}

// Delete user by ID
export async function DELETE(request, { params }) {
    try {
        const { userId } = params;

        // Authenticate the request (in real app, ensure only the user or admin can delete)
        // const session = await getServerSession(authOptions);
        // if (!session || (session.user.id !== userId && !session.user.isAdmin)) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        // }

        await dbConnect();

        // Delete the user
        const result = await User.deleteOne({ userId });

        if (result.deletedCount === 0) {
            return NextResponse.json(
                { message: 'User not found' },
                { status: 404 }
            );
        }

        return NextResponse.json({
            message: 'User deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.json(
            { message: 'Failed to delete user', error: error.message },
            { status: 500 }
        );
    }
} 