"use server";
import dbConnect from "@/lib/mongoose";
import Design from "@/models/Design";
import { getUserInfo } from "@/lib/session";

export async function getDesignData() {
  const userInfo = await getUserInfo();
  if (!userInfo || !userInfo.userId) return;

  await dbConnect();
  const design = await Design.findOne({ userId: userInfo.userId }).select(
    "-__v"
  );
  return design;
}
