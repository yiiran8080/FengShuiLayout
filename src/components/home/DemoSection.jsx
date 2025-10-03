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

				{/* Demo Preview Section - Responsive layout */}
				{isClient && isMobile ? (
					/* Mobile Layout - Original desktop layout moved to mobile only */
					<div className="relative flex justify-center w-full">
						{/* Center Image with overlapping elements */}
						<div className="relative w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl">
							<img
								src="/images/demo/Demo.png"
								alt={t("demoAltText")}
								className="w-full h-auto ml-8 max-w-none sm:ml-4 md:ml-5 lg:ml-8 xl:ml-10"
							/>

							{/* Green Button - Responsive positioning */}
							<div className="absolute bottom-4 left-[-45px] sm:bottom-6 sm:left-[-15px] md:bottom-8 md:left-[-20px] lg:bottom-10 lg:left-[-35px] xl:bottom-12 xl:left-[-80px]">
								<Link
									href="/demo"
									className="bg-[#A3B116] text-white rounded-full font-bold hover:bg-[#8B9914] transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-sm sm:text-base md:text-lg"
								>
									<span>{t("previewButton")}</span>
								</Link>
							</div>
						</div>
					</div>
				) : (
					/* Desktop Layout - New design with 風水妹 character - Responsive */
					<Link href="/price" className="block">
						<div className="relative flex flex-col sm:flex-row items-center justify-center p-3 sm:p-4 md:p-6 w-full sm:w-[85%] md:w-[75%] lg:w-[65%] xl:w-[60%] min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_4px_4px_rgba(0,0,0,0.3)] mx-auto cursor-pointer hover:shadow-[0_6px_6px_rgba(0,0,0,0.35)] transition-shadow duration-300">
							{/* Left side - Text content */}
							<div className="relative z-10 flex justify-center flex-1 w-full px-4 sm:max-w-md sm:px-6 md:px-8 lg:px-12">
								<div className="text-center sm:text-left">
									<h3 className="mb-2 leading-tight sm:mb-4 md:mb-6">
										<span
											className="block font-bold text-[#7c8806] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[64px]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											立即
										</span>
										<span
											className="block font-bold text-[#7c8806] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[128px]"
											style={{
												fontFamily:
													"Noto Sans HK, sans-serif",
											}}
										>
											測算
										</span>
									</h3>
								</div>
							</div>

							{/* Right side - 風水妹 character */}
							<div className="relative z-10 flex items-center justify-center flex-1 mt-2 sm:mt-0">
								<div className="relative">
									{/* Main character image - Responsive sizing */}
									<img
										src="/images/風水妹/風水妹.png"
										alt="風水妹 Character"
										className="w-24 h-auto sm:w-32 md:w-36 lg:w-40 xl:w-[200px] drop-shadow-2xl"
									/>
								</div>
							</div>
						</div>
					</Link>
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
