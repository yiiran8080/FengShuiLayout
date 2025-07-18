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

	// 添加重定向規則 - 只對來自 Facebook 的訪問重定向
	async redirects() {
		return [
			{
				source: "/zh-TW/price",
				destination: "/zh-TW",
				permanent: false,
				has: [
					{
						type: "header",
						key: "user-agent",
						value: ".*facebookexternalhit.*", // Facebook 爬蟲
					},
				],
			},
			{
				source: "/zh-CN/price",
				destination: "/zh-CN",
				permanent: false,
				has: [
					{
						type: "header",
						key: "user-agent",
						value: ".*facebookexternalhit.*", // Facebook 爬蟲
					},
				],
			},
		];
	},
	// experimental: {
	//   turbo: {
	//     resolveAlias: {
	//       html2canvas: "html2canvas-pro",
	//     },
	//   },
	// },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
