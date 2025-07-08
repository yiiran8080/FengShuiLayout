"use client";
import { useState, useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";
import UploadPic from "@/components/uploadpic";
import { getReportDocData } from "./action";
import { FreeChapter3 } from "@/components/report/FreeChapter3";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/Navbar";
import DonutChart from "@/components/DonutChart";
import { FreeChapter6 } from "@/components/report/FreeChapter6";

export default function FreeReportPage() {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const roomType = searchParams.get("roomType");
	const direction = searchParams.get("direction");

	// Extract locale from pathname, e.g. "/zh-TW/freereport"
	const locale = pathname.split("/")[1];

	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (!roomType || !direction) return;
		setLoading(true);
		setError(null);

		getReportDocData()
			.then((result) => setData(result))
			.catch(() => setError("Failed to fetch data"))
			.finally(() => setLoading(false));
	}, [roomType, direction]);

	return (
		<div
			className="flex flex-col min-h-screen bg-white"
			style={{ fontFamily: '"Noto Serif TC", serif' }}
		>
			<Navbar />
			<div className="flex flex-col flex-1 w-full gap-2 px-2 py-2 mx-0 sm:gap-4 sm:px-4 sm:py-4 sm:mx-2 md:mx-5 md:flex-row lg:gap-6 lg:px-6">
				{/* Left: FreeChapter3 */}
				<div className="flex items-start justify-center w-full mb-4 md:w-2/5 md:mb-0">
					{roomType && direction && data && (
						<FreeChapter3
							roomType={roomType}
							direction={direction}
							data={data}
						/>
					)}
				</div>
				{/* Right: FreeChapter6 */}
				<div className="flex items-start justify-center w-full md:w-3/5">
					<FreeChapter6 locale={locale} />
				</div>
			</div>
			<Footer />
		</div>
	);
}
