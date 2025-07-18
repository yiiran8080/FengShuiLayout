import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true, // 忽略 eslint 检查
	},
	typescript: {
		ignoreBuildErrors: true, // 忽略 TypeScript 检查
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d3cbeloe0vn1bb.cloudfront.net",
				pathname: "/**",
			},
		],
	},
	reactStrictMode: false,

	// 添加重定向規則
	async redirects() {
		return [
			{
				source: "/zh-TW/price",
				destination: "/zh-TW",
				permanent: false, // 使用 307 臨時重定向
			},
			{
				source: "/zh-CN/price",
				destination: "/zh-CN",
				permanent: false,
			},
		];
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
