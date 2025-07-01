"use server";
import dbConnect from "@/lib/mongoose";
import ReportDoc from "@/models/ReportDoc";
import ReportUserDoc from "@/models/ReportUserDoc";
import { getUserInfo } from "@/lib/session";

function fixId(doc) {
	if (!doc) return doc;
	return { ...doc, _id: doc._id?.toString() };
}

export async function getReportDocData() {
	await dbConnect();
	const twDataRaw = await ReportDoc.findOne({ language: "tw" })
		.select("-__v")
		.lean();
	const zhDataRaw = await ReportDoc.findOne({ language: "zh" })
		.select("-__v")
		.lean();
	const twData = fixId(twDataRaw);
	const zhData = fixId(zhDataRaw);
	return {
		twData,
		zhData,
	};
}
export async function getUserReportDocData(locale: string) {
	const userInfo = await getUserInfo();
	if (!userInfo || !userInfo.userId) return;
	await dbConnect();
	const userDocData = await ReportUserDoc.findOne({
		language: locale == "zh-CN" ? "zh" : "tw",
		userId: userInfo.userId,
		isDelete: 0,
	}).select("-__v");

	return userDocData;
}
