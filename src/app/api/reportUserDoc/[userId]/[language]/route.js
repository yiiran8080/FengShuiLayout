import { NextResponse } from 'next/server';
import { getUserInfo } from '@/lib/session';
import dbConnect from '@/lib/mongoose';
import ReportUserDoc from '@/models/ReportUserDoc';
import { genSuccessData, genUnAuthData, genErrorData } from "../../../utils/gen-res-data";

export async function GET(request, { params }) {
    const { userId, language } = await params;
    try {
        await dbConnect();
        const userDoc = await ReportUserDoc.findOne({ userId, language, isDelete: 0 }).select('-__v');
        return NextResponse.json(genSuccessData(userDoc))
    } catch (error) {
        console.error('Error fetching userDoc:', error);
        return NextResponse.json(genErrorData('Error fetching userDoc'));
    }
}

//TODO 创建用户报告
export async function POST(request, { params }) {
    const { userId, language } = await params;
    try {
        const userInfo = await getUserInfo();
        if (userInfo == null) return Response.json(genUnAuthData());

        const body = await request.json();
        await dbConnect();

        //let design = await Design.findOne({ userId });

        await ReportUserDoc.create({
            userId,
            language,
            ...body,
        });
        return NextResponse.json(genSuccessData())
    } catch (error) {
        console.error('Error create reportUserDoc:', error);
        return NextResponse.json(genErrorData('Internal Server Error'));
    }
}
