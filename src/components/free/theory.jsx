"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";

export default function Theory({ bgColor }) {
	const t = useTranslations("theory");
	const { scaleRatio, isMobileLayout } = useResponsiveScale();

	if (isMobileLayout) {
		// Mobile layout - completely different structure
		return (
			<section
				className="flex flex-col items-center justify-center p-6"
				style={{
					width: "100%",
					background: "rgba(232, 226, 218, 0.25)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					borderRadius: "20px",
					overflow: "hidden",
				}}
			>
				{/* Mobile Title */}
				<div className="w-full mb-6 text-center">
					<h2
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontWeight: 900,
							fontSize: "28px",
							color: "#E8E2DA",
							fontStyle: "normal",
							letterSpacing: "0.03em",
							lineHeight: "1.2",
							marginBottom: "8px",
						}}
					>
						{t("title1")}
					</h2>
					<h2
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontWeight: 900,
							fontSize: "28px",
							color: "#E8E2DA",
							fontStyle: "normal",
							letterSpacing: "0.03em",
							lineHeight: "1.2",
						}}
					>
						{t("title2")}
					</h2>
				</div>

				{/* Mobile Description */}
				<div className="w-full mb-6">
					<p
						style={{
							fontFamily: "ABeeZee, sans-serif",
							fontWeight: 400,
							fontSize: "16px",
							color: "#E8E2DA",
							fontStyle: "normal",
							textAlign: "center",
							lineHeight: "1.4",
						}}
					>
						{t("description")}
					</p>
				</div>

				{/* Mobile Button */}
				{/* <button
					style={{
						width: "120px",
						height: "120px",
						backgroundColor: "#E8E2DA",
						borderRadius: "1000px",
						border: "none",
						marginBottom: "24px",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						cursor: "pointer",
					}}
				>
					<span
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontWeight: 800,
							fontStyle: "normal",
							fontSize: "16px",
							color: "#000",
							letterSpacing: "0.03em",
							textAlign: "center",
						}}
					>
						閱讀更多
					</span>
				</button>
 */}
				{/* Mobile Cards - 2x2 Grid */}
				<div className="grid w-full grid-cols-2 gap-4">
					{/* Card 1 */}
					<div
						className="flex flex-col items-center p-4 rounded-lg"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div
							style={{
								background: "#E8E2DA",
								borderRadius: "8px",
								padding: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "32px",
								height: "32px",
								marginBottom: "8px",
							}}
						>
							<Image
								src="/images/report/theory-1.png"
								alt=""
								width={24}
								height={24}
								className="object-contain"
							/>
						</div>
						<h3
							style={{
								fontFamily: "DM Sans, sans-serif",
								fontWeight: 600,
								fontSize: "14px",
								color: "#374A37",
								margin: "0 0 8px 0",
								textAlign: "center",
							}}
						>
							{t("cards.imageRecognition.title")}
						</h3>
						<p
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								fontSize: "11px",
								color: "#374A37",
								textAlign: "center",
								lineHeight: "1.3",
							}}
						>
							{t("cards.imageRecognition.description")}
						</p>
					</div>

					{/* Card 2 */}
					<div
						className="flex flex-col items-center p-4 rounded-lg"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div
							style={{
								background: "#E8E2DA",
								borderRadius: "8px",
								padding: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "32px",
								height: "32px",
								marginBottom: "8px",
							}}
						>
							<Image
								src="/images/report/theory-2.png"
								alt=""
								width={24}
								height={24}
								className="object-contain"
							/>
						</div>
						<h3
							style={{
								fontFamily: "DM Sans, sans-serif",
								fontWeight: 600,
								fontSize: "14px",
								color: "#374A37",
								margin: "0 0 8px 0",
								textAlign: "center",
							}}
						>
							{t("cards.knowledgeBase.title")}
						</h3>
						<p
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								fontSize: "11px",
								color: "#374A37",
								textAlign: "center",
								lineHeight: "1.3",
							}}
						>
							{t("cards.knowledgeBase.description")}
						</p>
					</div>

					{/* Card 3 */}
					<div
						className="flex flex-col items-center p-4 rounded-lg"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div
							style={{
								background: "#E8E2DA",
								borderRadius: "8px",
								padding: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "32px",
								height: "32px",
								marginBottom: "8px",
							}}
						>
							<Image
								src="/images/report/theory-3.png"
								alt=""
								width={24}
								height={24}
								className="object-contain"
							/>
						</div>
						<h3
							style={{
								fontFamily: "DM Sans, sans-serif",
								fontWeight: 600,
								fontSize: "14px",
								color: "#374A37",
								margin: "0 0 8px 0",
								textAlign: "center",
							}}
						>
							{t("cards.energyFlow.title")}
						</h3>
						<p
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								fontSize: "11px",
								color: "#374A37",
								textAlign: "center",
								lineHeight: "1.3",
							}}
						>
							{t("cards.energyFlow.description")}
						</p>
					</div>

					{/* Card 4 */}
					<div
						className="flex flex-col items-center p-4 rounded-lg"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div
							style={{
								background: "#E8E2DA",
								borderRadius: "8px",
								padding: "8px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								width: "32px",
								height: "32px",
								marginBottom: "8px",
							}}
						>
							<Image
								src="/images/report/theory-4.png"
								alt=""
								width={24}
								height={24}
								className="object-contain"
							/>
						</div>
						<h3
							style={{
								fontFamily: "DM Sans, sans-serif",
								fontWeight: 600,
								fontSize: "14px",
								color: "#374A37",
								margin: "0 0 8px 0",
								textAlign: "center",
							}}
						>
							{t("cards.personalizedAdvice.title")}
						</h3>
						<p
							style={{
								fontFamily: "Noto Sans HK, sans-serif",
								fontWeight: 400,
								fontSize: "11px",
								color: "#374A37",
								textAlign: "center",
								lineHeight: "1.3",
							}}
						>
							{t("cards.personalizedAdvice.description")}
						</p>
					</div>
				</div>
			</section>
		);
	}

	// Desktop layout - original MacBook Air 13" dimensions, scaled by parent container
	return (
		<section
			className="flex items-center justify-center"
			style={{
				position: "relative",
				width: "1487px", // Original MacBook Air 13" width
				height: "1085px", // Original MacBook Air 13" height
			}}
		>
			{/* Blurred, transparent background */}
			<div
				className="relative flex flex-col items-center justify-center"
				style={{
					width: "1487px", // Original dimensions
					height: "855px",
					background: "rgba(232, 226, 218, 0.25)",
					backdropFilter: "blur(10px)",
					WebkitBackdropFilter: "blur(10px)",
					borderRadius: "40px 0 0 40px", // Only left corners rounded
					overflow: "hidden",
				}}
			>
				{/* Title and Description Row */}
				<div className="flex flex-row w-full px-20 pb-10">
					{/* Title - left side (35%) */}
					<div
						className="flex flex-col items-start"
						style={{ width: "35%" }}
					>
						<h2
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 900,
								fontSize: "40px", // Original size
								color: "#E8E2DA",
								fontStyle: "normal",
								letterSpacing: "0.03em",
								lineHeight: "1.2",
							}}
						>
							{t("title1")}
						</h2>
						<h2
							style={{
								fontFamily: "Noto Serif TC, serif",
								fontWeight: 900,
								fontSize: "40px", // Original size
								color: "#E8E2DA",
								fontStyle: "normal",
								letterSpacing: "0.03em",
								lineHeight: "1.2",
							}}
						>
							{t("title2")}
						</h2>

						{/* Round button under title */}
						{/* <button
							style={{
								width: "186px", // Original size
								height: "186px",
								backgroundColor: "#E8E2DA",
								borderRadius: "1000px",
								border: "none",
								marginTop: "32px",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								cursor: "pointer",
							}}
						>
							<span
								style={{
									fontFamily: "Noto Serif TC, serif",
									fontWeight: 800,
									fontStyle: "normal",
									fontSize: "32px", // Original size
									color: "#000",
									letterSpacing: "0.03em",
								}}
							>
								閱讀更多
							</span>
						</button> */}
					</div>

					{/* Description - right side (65%) */}
					<div
						className="flex flex-col items-start ml-10"
						style={{ width: "65%" }}
					>
						<div
							style={{
								width: "390px", // Original dimensions
								height: "125px",
								display: "flex",
								flexDirection: "column",
								justifyContent: "flex-start",
							}}
						>
							<p
								style={{
									fontFamily: "ABeeZee, sans-serif",
									fontWeight: 400,
									fontSize: "20px", // Original size
									color: "#E8E2DA",
									fontStyle: "normal",
								}}
							>
								{t("description")}
							</p>
						</div>

						{/* Line under description */}
						<div
							style={{
								width: "983px", // Original width
								height: "2px",
								backgroundColor: "#888365",
								marginTop: "16px",
							}}
						></div>
					</div>
				</div>

				{/* Rectangle behind cards */}
				<div
					style={{
						position: "absolute",
						left: "58%",
						transform: "translateX(-50%)",
						bottom: "170px",
						width: "1242px", // Original width
						height: "182px", // Original height
						background: "#A3B116",
						zIndex: 0,
					}}
				></div>

				{/* Cards Section */}
				<section
					className="flex flex-col items-stretch justify-center w-full gap-4 px-16 text-left md:flex-row sm:gap-6 md:gap-8"
					style={{ position: "relative", zIndex: 1 }}
				>
					{/* Card 1 */}
					<div
						className="w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
							<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
								<div
									style={{
										background: "#E8E2DA",
										borderRadius: "8px",
										padding: "8px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "40px", // Original size
										height: "40px",
									}}
								>
									<Image
										className="w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain"
										loading="lazy"
										width={40}
										height={40.9}
										sizes="100vw"
										alt=""
										src="/images/report/theory-1.png"
									/>
								</div>
								<div className="flex flex-row items-center justify-center">
									<h3
										style={{
											fontFamily: "DM Sans, sans-serif",
											fontWeight: 600,
											fontSize: "24px", // Original size
											color: "#374A37",
											margin: 0,
										}}
									>
										{t("cards.imageRecognition.title")}
									</h3>
								</div>
							</div>
							<div
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontWeight: 400,
									fontSize: "13px", // Original size
									color: "#374A37",
									marginTop: "8px",
								}}
							>
								{t("cards.imageRecognition.description")}
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div
						className="w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
							<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
								<div
									style={{
										background: "#E8E2DA",
										borderRadius: "8px",
										padding: "8px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "40px",
										height: "40px",
									}}
								>
									<Image
										className="w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain"
										loading="lazy"
										width={40}
										height={40.9}
										sizes="100vw"
										alt=""
										src="/images/report/theory-2.png"
									/>
								</div>
								<div className="flex flex-row items-center justify-center">
									<h3
										style={{
											fontFamily: "DM Sans, sans-serif",
											fontWeight: 600,
											fontSize: "24px",
											color: "#374A37",
											margin: 0,
										}}
									>
										{t("cards.knowledgeBase.title")}
									</h3>
								</div>
							</div>
							<div
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontWeight: 400,
									fontSize: "13px",
									color: "#374A37",
									marginTop: "8px",
								}}
							>
								{t("cards.knowledgeBase.description")}
							</div>
						</div>
					</div>

					{/* Card 3 */}
					<div
						className="w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
							<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
								<div
									style={{
										background: "#E8E2DA",
										borderRadius: "8px",
										padding: "8px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "40px",
										height: "40px",
									}}
								>
									<Image
										className="w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain"
										loading="lazy"
										width={40}
										height={40.9}
										sizes="100vw"
										alt=""
										src="/images/report/theory-3.png"
									/>
								</div>
								<div className="flex flex-row items-center justify-center">
									<h3
										style={{
											fontFamily: "DM Sans, sans-serif",
											fontWeight: 600,
											fontSize: "24px",
											color: "#374A37",
											margin: 0,
										}}
									>
										{t("cards.energyFlow.title")}
									</h3>
								</div>
							</div>
							<div
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontWeight: 400,
									fontSize: "13px",
									color: "#374A37",
									marginTop: "8px",
								}}
							>
								{t("cards.energyFlow.description")}
							</div>
						</div>
					</div>

					{/* Card 4 */}
					<div
						className="w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center p-4 sm:p-6"
						style={{
							background: "#F5F5F5",
							border: "1px solid #25826c",
						}}
					>
						<div className="w-full md:w-60 h-[170px] sm:h-[180px] md:h-[209px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]">
							<div className="w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6">
								<div
									style={{
										background: "#E8E2DA",
										borderRadius: "8px",
										padding: "8px",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
										width: "40px",
										height: "40px",
									}}
								>
									<Image
										className="w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain"
										loading="lazy"
										width={40}
										height={40.9}
										sizes="100vw"
										alt=""
										src="/images/report/theory-4.png"
									/>
								</div>
								<div className="flex flex-row items-center justify-center">
									<h3
										style={{
											fontFamily: "DM Sans, sans-serif",
											fontWeight: 600,
											fontSize: "24px",
											color: "#374A37",
											margin: 0,
										}}
									>
										{t("cards.personalizedAdvice.title")}
									</h3>
								</div>
							</div>
							<div
								style={{
									fontFamily: "Noto Sans HK, sans-serif",
									fontWeight: 400,
									fontSize: "13px",
									color: "#374A37",
									marginTop: "8px",
								}}
							>
								{t("cards.personalizedAdvice.description")}
							</div>
						</div>
					</div>
				</section>
			</div>
		</section>
	);
}
