export default function Services() {
	const services = [
		{
			title: "准确度高 用户称心满意",
			description:
				"配合每户八字，输出适合九宫飞星调整，家居方位考虑五行分析，并参考10万案例，用户信息保护隐私",
			icon: "🎯",
		},
		{
			title: "24-7自助定制化服务",
			description:
				"同时在线，1分钟即可免费获取专业风水报告，只需输入基础信息即可得到个人风水建议，快捷简单方便",
			icon: "⏰",
		},
		{
			title: "市场一折价格 退款保障",
			description:
				"新一代HKD288，并提供退款保证承诺，包括所有功能套餐，参加期间follow Instagram得到额外超值折扣等惊喜方案 HKD18优惠，2025年6月30日前购买更享受退款保障",
			icon: "💰",
		},
	];

	return (
		<section className="py-20 bg-white">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
					{services.map((service, index) => (
						<div
							key={index}
							className="flex flex-col items-center p-6 text-center"
						>
							<div className="mb-4 text-4xl">{service.icon}</div>
							<h3 className="mb-4 text-xl font-semibold text-primary">
								{service.title}
							</h3>
							<p className="leading-relaxed text-gray-600">
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
