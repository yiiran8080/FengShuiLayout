// 健康检查端点
export async function GET() {
	return Response.json({
		status: "ok",
		timestamp: new Date().toISOString(),
		service: "feng-shui-chat",
	});
}
