"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useMobile } from "../../hooks/useMobile";

export default function DemoSection() {
	const t = useTranslations("home.demo");
	const scrollContainerRef = useRef(null);
	const isMobile = useMobile();
	const [isClient, setIsClient] = useState(false);
	const [isAutoScrolling, setIsAutoScrolling] = useState(false);
	const autoScrollRef = useRef(null);

	// Auto-scroll configuration (desktop only)
	const scrollConfig = {
		speed: {
			desktop: 2, // pixels per frame on desktop only
		},
		edgeThreshold: 100, // pixels from edge to trigger scroll
		smoothness: 1, // multiplier for speed (1 = normal, 0.5 = half speed, 2 = double speed)
	};

	// Mobile drag state
	const [isDragging, setIsDragging] = useState(false);
	const [dragStart, setDragStart] = useState({ x: 0, scrollLeft: 0 });
	const [hasDragged, setHasDragged] = useState(false); // Track if user actually dragged

	useEffect(() => {
		setIsClient(true);
	}, []);

	const tags = [
		{
			id: "fengshui",
			name: t("tags.fengshui.name"),
			image: "/images/demo/fengshui.png",
			description: t("tags.fengshui.description"),
		},
		{
			id: "life",
			name: t("tags.life.name"),
			image: "/images/demo/life.png",
			description: t("tags.life.description"),
		},
		{
			id: "relationship",
			name: t("tags.relationship.name"),
			image: "/images/demo/relationship.png",
			description: t("tags.relationship.description"),
		},
		{
			id: "career",
			name: t("tags.career.name"),
			image: "/images/demo/career.png",
			description: t("tags.career.description"),
		},
		{
			id: "health",
			name: t("tags.health.name"),
			image: "/images/demo/health.png",
			description: t("tags.health.description"),
		},
		{
			id: "wealth",
			name: t("tags.wealth.name"),
			image: "/images/demo/wealth.png",
			description: t("tags.wealth.description"),
		},
	];

	const startAutoScroll = (direction) => {
		if (isAutoScrolling || isMobile) return; // Skip auto-scroll on mobile

		setIsAutoScrolling(true);
		const scrollSpeed =
			scrollConfig.speed.desktop * scrollConfig.smoothness;

		const scroll = () => {
			if (!scrollContainerRef.current) return;

			const container = scrollContainerRef.current;
			const currentScroll = container.scrollLeft;
			const maxScroll = container.scrollWidth - container.clientWidth;

			if (direction === "left" && currentScroll > 0) {
				container.scrollLeft = Math.max(0, currentScroll - scrollSpeed);
				autoScrollRef.current = requestAnimationFrame(scroll);
			} else if (direction === "right" && currentScroll < maxScroll) {
				container.scrollLeft = Math.min(
					maxScroll,
					currentScroll + scrollSpeed
				);
				autoScrollRef.current = requestAnimationFrame(scroll);
			} else {
				stopAutoScroll();
			}
		};

		autoScrollRef.current = requestAnimationFrame(scroll);
	};

	const stopAutoScroll = () => {
		setIsAutoScrolling(false);
		if (autoScrollRef.current) {
			cancelAnimationFrame(autoScrollRef.current);
			autoScrollRef.current = null;
		}
	};

	// Combined mouse move handler for both desktop and mobile
	const handleContainerMouseMove = (e) => {
		if (isMobile) {
			handleMouseMoveOnMobile(e);
		} else {
			handleMouseMove(e);
		}
	};

	const handleMouseMove = (e) => {
		if (!scrollContainerRef.current || isMobile) return; // Skip auto-scroll on mobile

		const container = scrollContainerRef.current;
		const rect = container.getBoundingClientRect();
		const mouseX = e.clientX - rect.left;
		const containerWidth = rect.width;
		const edgeThreshold = scrollConfig.edgeThreshold; // Use config value

		// Stop any existing auto-scroll
		stopAutoScroll();

		// Check if mouse is near left edge
		if (mouseX < edgeThreshold && container.scrollLeft > 0) {
			startAutoScroll("left");
		}
		// Check if mouse is near right edge
		else if (mouseX > containerWidth - edgeThreshold) {
			const maxScroll = container.scrollWidth - container.clientWidth;
			if (container.scrollLeft < maxScroll) {
				startAutoScroll("right");
			}
		}
	};

	const handleImageClick = (e, tagId) => {
		// Prevent navigation only if user actually dragged on mobile
		if (isMobile && hasDragged) {
			e.preventDefault();
			return;
		}

		// Navigate to the demo page
		window.location.href = `/demo?category=${tagId}`;
	};

	// Mobile drag handlers
	const handleMouseDown = (e) => {
		if (!isMobile || !scrollContainerRef.current) return;

		setIsDragging(true);
		setHasDragged(false); // Reset drag state
		setDragStart({
			x: e.pageX - scrollContainerRef.current.offsetLeft,
			scrollLeft: scrollContainerRef.current.scrollLeft,
		});
	};

	const handleMouseMoveOnMobile = (e) => {
		if (!isMobile || !isDragging || !scrollContainerRef.current) return;

		e.preventDefault();
		const x = e.pageX - scrollContainerRef.current.offsetLeft;
		const walk = (x - dragStart.x) * 2; // Scroll speed multiplier

		// Check if user has moved enough to be considered dragging
		if (Math.abs(walk) > 5) {
			setHasDragged(true);
		}

		scrollContainerRef.current.scrollLeft = dragStart.scrollLeft - walk;
	};

	const handleMouseUp = () => {
		if (!isMobile) return;

		setIsDragging(false);
		// Reset drag state after a short delay to allow click events
		setTimeout(() => setHasDragged(false), 100);
	};

	// Touch handlers for mobile
	const handleTouchStart = (e) => {
		if (!isMobile || !scrollContainerRef.current) return;

		setIsDragging(true);
		setHasDragged(false); // Reset drag state
		const touch = e.touches[0];
		setDragStart({
			x: touch.pageX - scrollContainerRef.current.offsetLeft,
			scrollLeft: scrollContainerRef.current.scrollLeft,
		});
	};

	const handleTouchMove = (e) => {
		if (!isMobile || !isDragging || !scrollContainerRef.current) return;

		e.preventDefault();
		const touch = e.touches[0];
		const x = touch.pageX - scrollContainerRef.current.offsetLeft;
		const walk = (x - dragStart.x) * 2; // Scroll speed multiplier

		// Check if user has moved enough to be considered dragging
		if (Math.abs(walk) > 5) {
			setHasDragged(true);
		}

		scrollContainerRef.current.scrollLeft = dragStart.scrollLeft - walk;
	};

	const handleTouchEnd = () => {
		if (!isMobile) return;

		setIsDragging(false);
		// Reset drag state after a short delay to allow click events
		setTimeout(() => setHasDragged(false), 100);
	};

	return (
		<section className="w-full mb-16 sm:mb-20 md:mb-24 lg:mb-30 bg-[#EFEFEF] overflow-hidden">
			<div className="px-3 mx-auto sm:px-4 md:px-6 lg:px-8 max-w-7xl">
				{/* Title - Responsive sizing */}
				<div className="mb-8 sm:mb-10 md:mb-12 text-start">
					<h2
						className="font-bold text-[#635D3B] mb-3 sm:mb-4"
						style={{
							fontFamily: "Noto Serif TC, serif",
							fontSize:
								isClient && isMobile
									? "clamp(2rem, 8vw, 3rem)"
									: "clamp(3rem, 5vw, 6rem)",
						}}
					>
						{t("title")}
					</h2>
				</div>

				{/* Draggable Tags - Auto-scroll on desktop, drag on mobile */}
				<div className="mb-12 overflow-hidden sm:mb-14 md:mb-16">
					<div
						ref={scrollContainerRef}
						className="flex pb-3 space-x-4 overflow-x-auto sm:pb-4 sm:space-x-6 scrollbar-hide"
						style={{
							scrollbarWidth: "none",
							msOverflowStyle: "none",
							width: "calc(100%)",
							paddingLeft:
								isClient && isMobile ? "20px" : "100px",
							cursor: isMobile
								? isDragging
									? "grabbing"
									: "grab"
								: "default",
						}}
						// Combined mouse move handler
						onMouseMove={handleContainerMouseMove}
						onMouseLeave={
							!isMobile ? stopAutoScroll : handleMouseUp
						}
						// Mobile-specific drag events
						onMouseDown={isMobile ? handleMouseDown : undefined}
						onMouseUp={isMobile ? handleMouseUp : undefined}
						// Touch events for mobile
						onTouchStart={isMobile ? handleTouchStart : undefined}
						onTouchMove={isMobile ? handleTouchMove : undefined}
						onTouchEnd={isMobile ? handleTouchEnd : undefined}
					>
						{tags.map((tag) => (
							<div
								key={tag.id}
								className="relative flex-shrink-0 group"
							>
								{/* Image Container - Clickable with auto-scroll on desktop, draggable on mobile */}
								<div
									className="relative overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105"
									onClick={(e) => handleImageClick(e, tag.id)}
									style={{
										userSelect: "none", // Prevent text selection during drag
									}}
								>
									<img
										src={tag.image}
										alt={tag.name}
										className="object-cover"
										style={{
											width:
												isClient && isMobile
													? "180px"
													: "240px",
											height:
												isClient && isMobile
													? "225px"
													: "300px",
										}}
										draggable={false}
									/>

									{/* Start Button - Responsive positioning and sizing */}
									<div
										className={`absolute ${isClient && isMobile ? "bottom-2 right-2" : "bottom-4 right-4"}`}
									>
										<Link
											href={`/demo?category=${tag.id}`}
											className={`flex items-center space-x-1 font-bold text-gray-800 transition-colors duration-300 bg-white rounded-lg hover:bg-gray-100 ${
												isClient && isMobile
													? "px-2 py-1 text-xs"
													: "px-4 py-1 text-sm"
											}`}
											onClick={(e) => {
												// Prevent event bubbling to parent click handler
												e.stopPropagation();
											}}
										>
											<span>{t("startButton")}</span>
											<svg
												className={
													isClient && isMobile
														? "w-3 h-3"
														: "w-4 h-4"
												}
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</Link>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Demo Preview Section - Responsive layout */}
				{isClient && isMobile ? (
					/* Mobile Layout - Stacked design */
					<div className="flex flex-col items-center w-full space-y-6">
						{/* Main Image */}
						<div className="relative w-full max-w-md">
							<img
								src="/images/demo/Demo.png"
								alt={t("demoAltText")}
								className="w-full h-auto shadow-lg rounded-xl"
							/>
						</div>

						{/* Content Section */}
						<div className="px-4 text-center">
							<h3
								className="text-2xl font-bold text-[#5E5A43] mb-4"
								style={{
									fontFamily: "Noto Serif TC",
								}}
							>
								{t("previewTitle")}
							</h3>

							<div className="space-y-3 text-[#5E5A43] mb-6">
								<p
									className="text-base font-bold leading-relaxed"
									style={{
										fontFamily: "Noto Serif TC",
									}}
								>
									{t("previewDescription1")}
								</p>
								<p
									className="text-base font-bold leading-relaxed"
									style={{
										fontFamily: "Noto Serif TC",
									}}
								>
									{t("previewDescription2")}
								</p>
							</div>

							{/* Preview Button */}
							<Link
								href="/demo"
								className="bg-[#A3B116] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#8B9914] transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg"
							>
								<span>{t("previewButton")}</span>
							</Link>
						</div>
					</div>
				) : (
					/* Desktop Layout - Keep MacBook Air 13" appearance but make responsive */
					<div className="relative flex justify-center w-full">
						{/* Center Image with overlapping elements */}
						<div className="relative max-w-4xl">
							<img
								src="/images/demo/Demo.png"
								alt={t("demoAltText")}
								className="w-full h-auto shadow-lg rounded-xl"
							/>

							{/* Green Button - Responsive positioning */}
							<div className="absolute bottom-4 md:bottom-6 left-[-40px] md:left-[-70px]">
								<Link
									href="/demo"
									className="bg-[#A3B116] text-white rounded-full font-bold hover:bg-[#8B9914] transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg"
									style={{
										padding:
											"clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 48px)",
										fontSize: "clamp(14px, 1.2vw, 18px)",
									}}
								>
									<span>{t("previewButton")}</span>
								</Link>
							</div>
						</div>

						{/* Right Side - Content overlapping right side of image */}
						<div className="absolute right-[-30px] md:right-[-50px] max-w-xs md:max-w-md pl-4 md:pl-8 transform -translate-y-1/2 top-[70%]">
							<div className="p-4 md:p-8">
								<h3
									className="font-bold text-[#5E5A43] mb-4 md:mb-6"
									style={{
										fontFamily: "Noto Serif TC",
										WebkitTextStroke: "0.5px #5E5A43",
										color: "#5E5A43",
										textShadow:
											"2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
										fontSize: "clamp(24px, 3vw, 48px)",
									}}
								>
									{t("previewTitle")}
								</h3>

								<div className="space-y-3 md:space-y-4 text-[#5E5A43]">
									<p
										className="font-bold leading-relaxed"
										style={{
											fontFamily: "Noto Serif TC",
											WebkitTextStroke: "0.5px #5E5A43",
											color: "#5E5A43",
											textShadow:
												"2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
											fontSize:
												"clamp(14px, 1.5vw, 20px)",
										}}
									>
										{t("previewDescription1")}
									</p>
									<p
										className="font-bold leading-relaxed"
										style={{
											fontFamily: "Noto Serif TC",
											WebkitTextStroke: "0.5px #5E5A43",
											color: "#5E5A43",
											textShadow:
												"2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
											fontSize:
												"clamp(14px, 1.5vw, 20px)",
										}}
									>
										{t("previewDescription2")}
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Hide scrollbar styles */}
			<style jsx>{`
				.scrollbar-hide::-webkit-scrollbar {
					display: none;
				}
			`}</style>
		</section>
	);
}
