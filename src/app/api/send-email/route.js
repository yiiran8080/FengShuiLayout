import { NextResponse } from "next/server";
import { Resend } from "resend";
import { genSuccessData, genUnAuthData, genErrorData } from "../utils/gen-res-data";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const body = await request.json();
        console.log('body', body.content);
        const res = await resend.emails.send({
            from: 'mr.jon@harmoniqfengshui.com',
            to: 'mr.jon@harmoniqfengshui.com',
            subject: 'harmoniqfengshui 用户留言',
            html: body.content
        });
        console.log('email res', res);
        return NextResponse.json(genSuccessData(res?.data));
    } catch (e) {
        console.error('send mail error', e);
        return NextResponse.json(genErrorData('send mail error:' + e));
    }


}