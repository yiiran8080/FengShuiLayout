import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import ReportDoc from "@/models/ReportDoc";
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../../auth/[...nextauth]/route';
import {
	genSuccessData,
	genUnAuthData,
	genErrorData,
} from "../../utils/gen-res-data";
export async function GET(request, { params }) {
	const { language } = await params;
	try {
		await dbConnect();
		const docData = await ReportDoc.findOne({ language }).select("-__v");
		return NextResponse.json(genSuccessData(docData));
	} catch (error) {return NextResponse.json(genErrorData("Failed to fetch doc"));
	}
}
