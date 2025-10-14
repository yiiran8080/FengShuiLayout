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
			image: "/images/demo/couple.png",
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
		{
			id: "couple",
			name: t("tags.couple.name"),
			image: "/images/demo/couple2.png",
			description: t("tags.couple.description"),
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
		<section className="w-full mb-15 p-2 sm:mb-16 md:mb-23 lg:mb-27 xl:mb-32 bg-[#EFEFEF] overflow-hidden">
			<div className="px-3 mx-auto sm:px-4 md:px-6 lg:px-8 max-w-7xl">
				{/* Title - Responsive sizing */}
				<div className="mb-8 sm:mb-10 md:mb-12 text-start">
					<h2
						className="font-bold text-[#635D3B] mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
						style={{
							fontFamily: "Noto Serif TC, serif",
						}}
					>
						{t("title")}
					</h2>
				</div>
				{/* Draggable Tags - Auto-scroll on desktop, drag on mobile */}
				<div className="mb-8 overflow-hidden sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
					<div
						ref={scrollContainerRef}
						className="flex pb-3 pl-5 space-x-4 overflow-x-auto sm:pb-4 sm:space-x-6 scrollbar-hide sm:pl-10 md:pl-20 lg:pl-25"
						style={{
							scrollbarWidth: "none",
							msOverflowStyle: "none",
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
										className="object-cover h-56 w-44 sm:w-48 sm:h-60 md:w-56 md:h-72 lg:w-60 lg:h-75"
										draggable={false}
									/>
								</div>
							</div>
						))}
					</div>
				</div>
				{/* Demo Preview Section - Horizontal Layout on All Devices */}
				<Link href="/price" className="block w-full px-2 sm:px-4">
					<div className="relative flex flex-row items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 w-full max-w-[60%] xs:max-w-[55%] sm:max-w-[55%] md:max-w-[50%] lg:max-w-[50%] xl:max-w-[50%] 2xl:max-w-[65%] min-h-[140px] xs:min-h-[160px] sm:min-h-[200px] md:min-h-[200px] lg:min-h-[220px] xl:min-h-[200px] bg-white rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.15)] mx-auto cursor-pointer hover:shadow-[0_8px_16px_rgba(0,0,0,0.25)] hover:-translate-y-2 active:scale-[0.98] transition-all duration-300 ease-out">
						{/* Left side - Text content */}
						<div className="relative z-10 flex items-center justify-center flex-1">
							<div className="text-left">
								<h3 className="leading-none select-none">
									{/* 立即 - Smaller text */}
									<span
										className="block font-bold text-[#7c8806] mb-1 sm:mb-1"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize: "clamp(20px, 5vw, 64px)",
											lineHeight: "0.9",
										}}
									>
										立即
									</span>
									{/* 測算 - Larger text */}
									<span
										className="block font-bold text-[#7c8806]"
										style={{
											fontFamily:
												"Noto Sans HK, sans-serif",
											fontSize: "clamp(32px, 7vw, 128px)",
											lineHeight: "0.8",
										}}
									>
										測算
									</span>
								</h3>
							</div>
						</div>

						{/* Right side - 風水妹 character */}
						<div className="relative z-10 flex items-center justify-center">
							<div className="relative flex items-center justify-center">
								{/* Main character image - Optimized for horizontal layout */}
								<img
									src="/images/風水妹/風水妹3.png"
									alt="風水妹 Character"
									className="h-auto select-none drop-shadow-2xl"
									style={{
										width: "clamp(70px, 12vw, 200px)",
										maxWidth: "200px",
										minWidth: "70px",
									}}
									draggable={false}
								/>
							</div>
						</div>

						{/* Optional: Subtle background gradient */}
						<div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#7c8806]/5 pointer-events-none"></div>
					</div>
				</Link>
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
