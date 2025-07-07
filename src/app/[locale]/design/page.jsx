"use client";
import {
	DndContext,
	DragOverlay,
	TouchSensor, // 添加触摸传感器
	MouseSensor,
	useSensor,
	useSensors,
	pointerWithin,
	closestCorners,
} from "@dnd-kit/core";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { redirect } from "next/navigation";
import { use, useState, useRef, useEffect, Suspense } from "react";
import {
	ITEM_TYPES,
	ROOM_TYPES,
	FURNITURE_TYPES,
	FURNITURE_TYPES_LABEL_CN,
	FURNITURE_TYPES_LABEL_TW,
	ROOM_TYPES_LABEL_CN,
	ROOM_TYPES_LABEL_TW,
} from "@/types/room";
import { Canvas } from "@/components/Canvas";
import NavbarDesign from "@/components/NavbarDesign";
import NavbarDesignMobile from "@/components/NavbarDesignMobile";
import Image from "next/image";
import useMobile from "../../hooks/useMobile";
import DragBarPC from "@/components/dragBarComp/DragBarPC";
import DragBarMobile from "@/components/dragBarComp/DragBarMobile";
import { get, post, patch } from "@/lib/ajax";
import getRoomDirection from "./getRoomDirection";
import { useSession } from "next-auth/react";
import UserInfoDialog from "@/components/UserInfoDialog";
import { AntdSpin } from "antd-spin";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import DemoOverlay from "@/components/DemoOverlay"; // Add this import
import {
	LAYOUT1_ZH,
	LAYOUT1_TW,
	LAYOUT2_ZH,
	LAYOUT2_TW,
	LAYOUT3_ZH,
	LAYOUT3_TW,
	LAYOUT4_TW,
	LAYOUT4_ZH,
	LAYOUT5_TW,
	LAYOUT5_ZH,
	LAYOUT6_TW,
	LAYOUT6_ZH,
	LAYOUT7_TW, // 新增
	LAYOUT7_ZH, // 新增
} from "@/types/layout";

const ROOM_COLORS = {
	[ROOM_TYPES.LIVING_ROOM]: "#F0DF9C", // 客厅
	[ROOM_TYPES.DINING_ROOM]: "#F5D4BC", // 饭厅
	[ROOM_TYPES.STORAGE_ROOM]: "#ADC0BC", // 储物室
	[ROOM_TYPES.STUDY_ROOM]: "#B0B8C9", // 书房
	[ROOM_TYPES.BEDROOM]: "#F5B8B8", // 睡房
	[ROOM_TYPES.BATHROOM]: "#C1D7E2", // 浴室
	[ROOM_TYPES.KITCHEN]: "#EDE0C6", // 厨房
	[ROOM_TYPES.BALCONY]: "#D0DCAA", // 阳台
	[ROOM_TYPES.GARDEN]: "#AACDBC", // 花园
	[ROOM_TYPES.GARAGE]: "#C7C7DD", // 车库
	[ROOM_TYPES.CORRIDOR]: "#CDCDCD", // 走廊
};

// REPLACE the AccessControlWrapper with this clean version:

function AccessControlWrapper({ children, locale }) {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [hasAccess, setHasAccess] = useState(false);
	const [loading, setLoading] = useState(true);
	const t = useTranslations("design");

	// 1. Initial access check (KEEP THIS ONE)
	useEffect(() => {
		const checkAccess = async () => {
			if (status === "loading") return;

			if (!session?.user?.userId) {
				router.push(
					`/${locale}/auth/login?callbackUrl=/${locale}/design`
				);
				return;
			}

			try {
				const { status: apiStatus, data: userInfo } = await get(
					`/api/users/${session.user.userId}`
				);

				console.log("🔍 FULL USER INFO:", {
					userId: session.user.userId,
					isLock: userInfo?.isLock,
					genStatus: userInfo?.genStatus,
					createdAt: userInfo?.createdAt,
					updatedAt: userInfo?.updatedAt,
				});

				if (apiStatus === 0) {
					if (userInfo.isLock) {
						router.push(`/${locale}/price?redirect=design`);
						return;
					} else {
						setHasAccess(true);
					}
				} else {
					router.push(`/${locale}/auth/login`);
					return;
				}
			} catch (error) {
				console.error("Access check error:", error);
				router.push(`/${locale}/price`);
				return;
			} finally {
				setLoading(false);
			}
		};

		checkAccess();
	}, [session, status, router, locale]);

	// 2. Poll for webhook database updates (KEEP THIS ONE)
	useEffect(() => {
		const userId = session?.user?.userId;
		if (!userId || hasAccess) return;

		console.log("🔍 Design page: Starting webhook polling...");

		const pollInterval = setInterval(async () => {
			try {
				const { status: apiStatus, data: userInfo } = await get(
					`/api/users/${userId}`
				);

				console.log(
					"🔍 Polling check - User lock status:",
					userInfo?.isLock
				);

				if (apiStatus === 0 && !userInfo.isLock) {
					console.log("🎉 Design page: Webhook unlock detected!");
					setHasAccess(true);
					setLoading(false);
					clearInterval(pollInterval);
				}
			} catch (error) {
				console.error("Design polling error:", error);
			}
		}, 2000);

		return () => {
			console.log("🛑 Design page: Stopping webhook polling");
			clearInterval(pollInterval);
		};
	}, [session?.user?.userId, hasAccess]);

	// 3. Handle payment success URL parameters (KEEP THIS ONE)
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const paymentStatus = urlParams.get("payment");
		const sessionId = urlParams.get("session_id");

		if (paymentStatus === "success" && sessionId && !hasAccess) {
			console.log("💳 Design page: Payment success URL detected");
			setLoading(true);

			const recheckAccess = async () => {
				const userId = session?.user?.userId;
				if (userId) {
					try {
						// Wait for webhook to process
						await new Promise((resolve) =>
							setTimeout(resolve, 1000)
						);

						const { status: apiStatus, data: userInfo } = await get(
							`/api/users/${userId}`
						);

						console.log(
							"💳 URL recheck - User lock status:",
							userInfo?.isLock
						);

						if (apiStatus === 0 && !userInfo.isLock) {
							setHasAccess(true);
						}
					} catch (error) {
						console.error("Payment recheck error:", error);
					} finally {
						setLoading(false);
						// Clean up URL
						window.history.replaceState(
							{},
							document.title,
							window.location.pathname
						);
					}
				}
			};

			recheckAccess();
		}
	}, [session?.user?.userId, hasAccess]);

	if (loading) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<div className="w-32 h-32 mx-auto border-b-2 border-green-500 rounded-full animate-spin"></div>
					<p className="mt-4 text-lg">{t("verifyingAccess")}</p>
				</div>
			</div>
		);
	}

	if (!hasAccess) {
		return (
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center">
					<p className="text-lg">{t("redirecting")}</p>
				</div>
			</div>
		);
	}

	return children;
}

function ModuleWizard({ open, onClose, onSelectModule }) {
	const [step, setStep] = useState(1);
	const [roomCount, setRoomCount] = useState(null);
	const [bathroomCount, setBathroomCount] = useState(null);
	const [hasBalcony, setHasBalcony] = useState(null);
	const isMobile = useMobile();
	const t = useTranslations("design");

	const reset = () => {
		setStep(1);
		setRoomCount(null);
		setBathroomCount(null);
		setHasBalcony(null);
	};

	const handleClose = () => {
		reset();
		onClose();
	};

	const handleRoomSelect = (count) => {
		setRoomCount(count);
		if (count === 3) {
			setStep(2); // Go to bathroom question for 3 rooms
		} else {
			setStep(3); // Go to balcony question for 1 or 2 rooms
		}
	};

	const handleBathroomSelect = (count) => {
		setBathroomCount(count);
		// NEW LOGIC: For 3 rooms, if 2 bathrooms, go to balcony question
		if (count === 2) {
			setStep(3); // Go to balcony question
		} else {
			// If 1 bathroom with 3 rooms, select module 2
			onSelectModule("2");
			handleClose();
		}
	};

	const handleBalconySelect = (has) => {
		setHasBalcony(has);

		// NEW LOGIC: Handle the updated logic based on conversation summary
		if (roomCount === 3 && bathroomCount === 2) {
			// For 3 rooms + 2 bathrooms
			if (has === "yes") {
				onSelectModule("4"); // Module 4 if has balcony
			} else {
				onSelectModule("7"); // Module 7 if no balcony
			}
		} else if (roomCount === 1) {
			if (has === "yes") {
				onSelectModule("3");
			} else {
				onSelectModule("7");
			}
		} else if (roomCount === 2) {
			if (has === "yes") {
				onSelectModule("1");
			} else {
				onSelectModule("5");
			}
		}
		handleClose();
	};

	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
			<div className="bg-white rounded-lg shadow-lg sm:max-w-[432px] w-full mx-4 max-h-[90vh] overflow-y-auto">
				{/* Progress indicator */}
				<div className="flex items-center justify-center pt-6 pb-4">
					<div className="flex space-x-2">
						{[1, 2, 3].map((stepNum) => (
							<div
								key={stepNum}
								className={`w-3 h-3 rounded-full transition-colors ${
									stepNum <= step
										? "bg-[#13ab87]"
										: stepNum === 2 && roomCount !== 3
											? "bg-gray-300"
											: "bg-gray-300"
								}`}
							/>
						))}
					</div>
				</div>

				{/* Header section */}
				<div className="px-6 pb-4">
					<div className="mb-4 text-lg font-bold text-center md:text-xl md:text-left">
						{t("wizardTitle")}
					</div>
					<div className="py-4 text-sm text-left text-gray-600 md:text-base">
						{t("wizardSubtitle")}
					</div>
				</div>

				{/* Separator */}
				<div className="border-t border-gray-200 md:hidden"></div>

				{/* Content section */}
				<div className="p-6 pt-4">
					<div className="grid gap-4 pb-4">
						{step === 1 && (
							<>
								<div className="mb-4 text-lg font-bold text-center">
									{t("wizardStep1Title")}
								</div>
								<div className="grid gap-3">
									{[
										{ count: 1, label: t("oneRoom") },
										{ count: 2, label: t("twoRooms") },
										{ count: 3, label: t("threeRooms") },
									].map(({ count, label }) => (
										<button
											key={count}
											className="w-full py-4 bg-[#13ab87] hover:bg-[#0f9674] text-white font-bold rounded-[100px] text-base transition-colors"
											onClick={() =>
												handleRoomSelect(count)
											}
										>
											{label}
										</button>
									))}
								</div>
							</>
						)}

						{step === 2 && (
							<>
								<div className="mb-4 text-lg font-bold text-center">
									{t("wizardStep2Title")}
								</div>
								<div className="grid gap-3">
									{[
										{ count: 1, label: t("oneBathroom") },
										{ count: 2, label: t("twoBathrooms") },
									].map(({ count, label }) => (
										<button
											key={count}
											className="w-full py-4 bg-[#13ab87] hover:bg-[#0f9674] text-white font-bold rounded-[100px] text-base transition-colors"
											onClick={() =>
												handleBathroomSelect(count)
											}
										>
											{label}
										</button>
									))}
								</div>
							</>
						)}

						{step === 3 && (
							<>
								<div className="mb-4 text-lg font-bold text-center">
									{t("wizardStep3Title")}
								</div>
								<div className="grid gap-3">
									{[
										{
											value: "yes",
											label: t("hasBalcony"),
										},
										{ value: "no", label: t("noBalcony") },
									].map(({ value, label }) => (
										<button
											key={value}
											className="w-full py-4 bg-[#13ab87] hover:bg-[#0f9674] text-white font-bold rounded-[100px] text-base transition-colors"
											onClick={() =>
												handleBalconySelect(value)
											}
										>
											{label}
										</button>
									))}
								</div>
							</>
						)}

						{/* Cancel button */}
						{isMobile ? (
							<div className="flex justify-around">
								<button
									onClick={handleClose}
									className="px-10 text-foreground rounded-[100px] bg-white font-bold mt-10 hover:bg-gray-50 transition-colors"
								>
									{t("cancel")}
								</button>
							</div>
						) : (
							<button
								onClick={handleClose}
								className="w-full text-foreground rounded-[100px] bg-white font-bold mt-10 hover:bg-gray-50 transition-colors"
							>
								{t("cancel")}
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default function DesignPage({ params }) {
	const _params = use(params);
	const locale = _params.locale;
	const t = useTranslations("design");
	const t2 = useTranslations("toast");
	const ROOM_TYPES_LABEL =
		locale === "zh-TW" ? ROOM_TYPES_LABEL_TW : ROOM_TYPES_LABEL_CN;
	const FURNITURE_TYPES_LABEL =
		locale === "zh-TW"
			? FURNITURE_TYPES_LABEL_TW
			: FURNITURE_TYPES_LABEL_CN;
	const LAYOUT1 = locale === "zh-TW" ? LAYOUT1_TW : LAYOUT1_ZH;
	const LAYOUT2 = locale === "zh-TW" ? LAYOUT2_TW : LAYOUT2_ZH;
	const LAYOUT3 = locale === "zh-TW" ? LAYOUT3_TW : LAYOUT3_ZH;
	const LAYOUT4 = locale === "zh-TW" ? LAYOUT4_TW : LAYOUT4_ZH;
	const LAYOUT5 = locale === "zh-TW" ? LAYOUT5_TW : LAYOUT5_ZH;
	const LAYOUT6 = locale === "zh-TW" ? LAYOUT6_TW : LAYOUT6_ZH;
	const LAYOUT7 = locale === "zh-TW" ? LAYOUT7_TW : LAYOUT7_ZH; // 新增

	const furnitureItems = [
		{
			id: "door-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.DOOR,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.DOOR],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/door.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/door-gr.png",
				size: { width: 40, height: 40 },
			},
		},
		{
			id: "window-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.WINDOW,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.WINDOW],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/window.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/window-gr.png",
				size: { width: 8, height: 56 },
			},
		},
		{
			id: "table-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.TABLE,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.TABLE],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/table.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/table-gr.png",
				size: { width: 44, height: 120 },
			},
		},
		{
			id: "chair-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.CHAIR,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.CHAIR],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/chair.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/chair-gr.png",
				size: { width: 28, height: 35 },
			},
		},
		{
			id: "sofa-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.SOFA,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.SOFA],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/sofa.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/sofa-gr.png",
				size: { width: 67, height: 123 },
			},
		},
		{
			id: "bed-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.BED,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.BED],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bed.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bed-gr.png",
				size: { width: 89, height: 128 },
			},
		},
		{
			id: "lamp-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.LAMP,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.LAMP],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/lamp.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/lamp-gr.png",
				size: { width: 70, height: 128 },
			},
		},
		{
			id: "tv-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.TV,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.TV],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/tv.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/tv-gr.png",
				size: { width: 134, height: 32 },
			},
		},
		{
			id: "bookshelf-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.BOOKSHELF,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.BOOKSHELF],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bookshelf.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bookshelf-gr.png",
				size: { width: 44, height: 44 },
			},
		},
		{
			id: "wardrobe-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.WARDROBE,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.WARDROBE],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/wardrobe.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/wardrobe-gr.png",
				size: { width: 40, height: 129 },
			},
		},
		{
			id: "plant-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.PLANT,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.PLANT],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/plant.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/plant-gr.png",
				size: { width: 36, height: 36 },
			},
		},
		{
			id: "fridge-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.FRIDGE,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.FRIDGE],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/fridge.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/fridge-gr.png",
				size: { width: 40, height: 43 },
			},
		},
		{
			id: "stove-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.STOVE,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.STOVE],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/stove.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/stove-gr.png",
				size: { width: 62, height: 32 },
			},
		},
		{
			id: "sink-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.SINK,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.SINK],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/sink.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/sink-gr.png",
				size: { width: 60, height: 40 },
			},
		},
		{
			id: "washbasin-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.WASHBASIN,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.WASHBASIN],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/washbasin.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/washbasin-gr.png",
				size: { width: 50, height: 50 },
			},
		},
		{
			id: "toilet-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.TOILET,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.TOILET],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/toilet.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/toilet-gr.png",
				size: { width: 40, height: 60 },
			},
		},
		{
			id: "shower-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.SHOWER,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.SHOWER],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/shower.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/shower-gr.png",
				size: { width: 80, height: 80 },
			},
		},
		{
			id: "bathtub-template",
			type: ITEM_TYPES.FURNITURE,
			data: {
				cateType: ITEM_TYPES.FURNITURE,
				type: FURNITURE_TYPES.BATHTUB,
				label: FURNITURE_TYPES_LABEL[FURNITURE_TYPES.BATHTUB],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bathtub.png",
				activeIcon:
					"https://d3cbeloe0vn1bb.cloudfront.net/images/fur-icon/bathtub-gr.png",
				size: { width: 120, height: 60 },
			},
		},
	];
	const sensors = useSensors(
		useSensor(TouchSensor, {
			tolerance: 50,
		}),
		useSensor(MouseSensor, {
			// 鼠标传感器配置
			activationConstraint: {
				distance: 10, // 激活所需的移动距离
			},
		})
	);
	const router = useRouter();
	const [active, setActive] = useState(null);
	const [isOverCanvas, setIsOverCanvas] = useState(false);
	const [sidebarWidth, setSidebarWidth] = useState(0);
	const [showTab, setShowTab] = useState(false);
	const [history, setHistory] = useState([[]]);
	const [historyIndex, setHistoryIndex] = useState(0);
	const [showUserInfoDialog, setShowUserInfoDialog] = useState(false);
	const [userInfo, setuserInfo] = useState({});
	const [loading, setLoading] = useState(false);
	const canvasRef = useRef(null);
	const sidebarRef = useRef(null);
	const isMobile = useMobile();
	const draggingItemSize = isMobile ? 48 : 56;
	const defaultRoomSize = isMobile
		? { width: 200, height: 200 }
		: { width: 300, height: 300 };
	const [alertOpen, setAlertOpen] = useState(false);
	const [moduleAlertOpen, setModuleAlertOpen] = useState(false);
	const [wizardOpen, setWizardOpen] = useState(false); // <-- Add this line
	const [showDemo, setShowDemo] = useState(false); // Add demo state
	// const defaultFurSize = { width: draggingItemSize, height: 32 }

	const roomItems = [
		{
			id: "living-room",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.LIVING_ROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.LIVING_ROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/living_room.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "dining-room",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.DINING_ROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.DINING_ROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/dining_room.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "storage-room",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.STORAGE_ROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.STORAGE_ROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/storage_room.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "study-room",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.STUDY_ROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.STUDY_ROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/study_room.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "bedroom",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.BEDROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.BEDROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/bedroom.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "bathroom",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.BATHROOM,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.BATHROOM],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/bathroom.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "kitchen",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.KITCHEN,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.KITCHEN],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/kitchen.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "balcony",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.BALCONY,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.BALCONY],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/balcony.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "garden",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.GARDEN,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.GARDEN],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/garden.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "garage",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.GARAGE,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.GARAGE],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/garage.png",
				size: defaultRoomSize,
			},
		},
		{
			id: "corridor",
			type: ITEM_TYPES.ROOM,
			data: {
				cateType: ITEM_TYPES.ROOM,
				type: ROOM_TYPES.CORRIDOR,
				label: ROOM_TYPES_LABEL[ROOM_TYPES.CORRIDOR],
				icon: "https://d3cbeloe0vn1bb.cloudfront.net/images/room-icon/corridor.png",
				size: defaultRoomSize,
			},
		},
	];
	const { data: session } = useSession();

	// 添加useEffect监听侧边栏宽度
	useEffect(() => {
		const updateWidth = () => {
			if (sidebarRef.current) {
				setSidebarWidth(sidebarRef.current.offsetWidth);
			}
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);

	// 加载设计数据  TODO
	useEffect(() => {
		//toast.error("查询错误:")
		const loadDesign = async () => {
			//const userId = 'yunyanyr@gmail.com';
			const userId = session?.user?.userId;
			if (!userId) {
				return;
			}

			//console.log('session', session?.user?.userId)
			try {
				setLoading(true);
				const {
					status: status0,
					message: message0,
					data: userInfo,
				} = await get(`/api/users/${userId}`);
				const {
					status: status1,
					message: message1,
					data: designData,
				} = await get(`/api/design/${userId}`);
				// console.log('designData', status0, message0)
				if (status0 !== 0) {
					toast.error("查询用户错误:" + message0);
					return;
				}
				if (status1 !== 0) {
					toast.error("查询布局错误:" + message1);
					return;
				}
				// console.log('data', userInfo, localItems)
				setuserInfo(userInfo);
				setShowUserInfoDialog(true);
				const {
					localItems = [],
					scale = 100,
					canvasPosition = { x: 0, y: 0 },
					compassRotation = 0,
				} = designData;
				let newItems = localItems.map((item) => {
					return {
						...item,
						type: item._type,
						data: {
							...item.data,
							type: item.data._type,
						},
					};
				});
				canvasRef.current?.setLocalItems(newItems);
				canvasRef.current?.setPosition(canvasPosition);
				canvasRef.current?.setCompassRotation(compassRotation);
				canvasRef.current?.setScale(scale);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				toast.error("加载布局错误:" + error);
				console.error("Error loading design:", error);
			}
		};
		loadDesign();
	}, [session?.user?.userId]);

	// ADD THIS NEW useEffect FOR PAYMENT SUCCESS HANDLING
	useEffect(() => {
		// Handle payment success redirect
		const urlParams = new URLSearchParams(window.location.search);
		const paymentStatus = urlParams.get("payment");
		const sessionId = urlParams.get("session_id");

		if (paymentStatus === "success" && sessionId) {
			toast.success("Payment successful! Welcome to the design tool!");
			// Clean up URL
			window.history.replaceState(
				{},
				document.title,
				window.location.pathname
			);
		}
	}, []);

	const handleDragStart = (event) => {
		const { active } = event;
		setActive(active);
		setIsOverCanvas(false);
	};
	const initOverCanvas = (event, roomDragStart) => {
		const { over } = event;
		const isOverCanvasArea = over?.id === "canvas";

		setIsOverCanvas(isOverCanvasArea);
		if (isOverCanvasArea) {
			const localItems = canvasRef.current.getLocalItems();
			const label = `${active.data.current.label}${localItems.filter((item) => item.data.type === active.data.current.type).length + 1}`;
			const newItem = {
				id: `${active.data.current.type}-${localItems.filter((item) => item.data.type === active.data.current.type).length + 1}`,
				type: active.data.current.cateType,
				data: {
					...active.data.current,
					label:
						active.data.current.cateType === ITEM_TYPES.ROOM
							? label
							: "",
				},
				size: active.data.current.size,
				activeIcon: active.data.current.activeIcon,
			};

			canvasRef.current.setIsRoomDragging(true);
			canvasRef.current.setRoomDragStart(roomDragStart);
			canvasRef.current.setDraggedRoom(newItem);
		} else {
			canvasRef.current.setIsRoomDragging(false);
		}
	};
	const handleDragMove = (event) => {
		if (!isMobile) return;
		// console.log('y', event.delta.y);
		if (event.delta.y < -120) {
			initOverCanvas(event, { x: 0, y: 50 });
		}
	};
	const handleDragOver = (event) => {
		if (isMobile) return;
		initOverCanvas(event, { x: sidebarWidth, y: draggingItemSize });
	};

	// 保存设计数据 TODO
	const onSaveProject = async () => {
		if (!session?.user?.userId) {
			redirect("/auth/login");
		}

		try {
			setLoading(true);
			const designData = getRoomDirection({
				localItems: canvasRef.current.getLocalItems(),
				canvasPosition: canvasRef.current.getPosition(),
				compassRotation: canvasRef.current.getCompassRotation(),
				scale: canvasRef.current.getScale(),
			});
			const { status } = await post(
				`/api/design/${session.user.userId}`,
				designData
			);
			if (status == 0) {
				toast.success(t2("saveSuccess"));
			}
		} catch (error) {
			toast.error(t2("saveFailed") + error);
			console.error("Error saving design:", error);
		} finally {
			setLoading(false);
		}
	};
	const onGenReport = async () => {
		if (!session?.user?.userId) {
			redirect("/auth/login");
		}
		let userId = session.user.userId;
		const items = canvasRef.current.getLocalItems();

		let doorFlag = false,
			windowFlag = false;
		items.forEach((item) => {
			if (item.data.type === "door") {
				doorFlag = true;
			}
			if (item.data.type === "window") {
				windowFlag = true;
			}
		});
		if (!doorFlag || !windowFlag) {
			toast.error(t("warning"), {
				autoClose: false,
				style: {
					width: 400,
				},
			});
			return;
		}
		try {
			const { status, data } = await get(
				`/api/reportUserDoc/${userId}/${locale == "zh-CN" ? "zh" : "tw"}`
			);
			if (data) {
				setAlertOpen(true);
			} else {
				await onSaveProject();
				router.push(`/report`);
			}
		} catch (e) {}
	};

	const onCoverReport = async () => {
		if (!session?.user?.userId) {
			redirect("/auth/login");
		}
		let userId = session.user.userId;
		await onSaveProject();
		//删除原报告
		try {
			setAlertOpen(false);
			setLoading(true);
			//将付款状态重置为未付款,进阶报告生成状态重置为未生成
			const { status: status0 } = await post(
				`/api/users/${session.user.userId}`,
				{
					isLock: true,
					genStatus: "none",
				}
			);
			const { status } = await patch(`/api/reportUserDoc/${userId}`, {
				isDelete: 1,
			});
			setLoading(false);
			if (status0 == 0 && status == 0) {
				router.push(`/report`);
			}
		} catch (e) {}
	};
	const onReadReport = () => {
		setAlertOpen(false);
		router.push(`/report`);
		//window.location.herf = `/report`
	};
	const onShowTab = () => {
		setShowTab(true);
	};
	// 处理撤销
	const handleUndo = () => {
		if (historyIndex > 0) {
			canvasRef.current?.setActiveRoom(null);
			setHistoryIndex((prev) => prev - 1);
			canvasRef.current?.setLocalItems(history[historyIndex - 1]);
		}
	};

	// 处理重做
	const handleRedo = () => {
		if (historyIndex < history.length - 1) {
			canvasRef.current?.setActiveRoom(null);
			setHistoryIndex((prev) => prev + 1);
			canvasRef.current?.setLocalItems(history[historyIndex + 1]);
		}
	};

	// 处理用户信息提交 TODO
	const handleUserInfoSubmit = async (userInfo) => {
		if (!session?.user?.userId) {
			redirect("/auth/login");
		}
		setLoading(true);
		setuserInfo(userInfo);

		try {
			const { status } = await post(`/api/users/${session.user.userId}`, {
				gender: userInfo.gender,
				birthDateTime: userInfo.birthDateTime.toISOString(),
			});
			if (status == 0) {
				toast.success(t2("saveSuccess"));
				setShowUserInfoDialog(false);
			}
		} catch (error) {
			toast.error(t2("saveFailed") + error);
			console.error("Error saving user info:", error);
		} finally {
			setLoading(false);
		}
	};
	const onModuleClick = (moduleId) => {
		setModuleAlertOpen(true);
	};
	const onCoverDesign = (moduleId = "1") => {
		// 支持多模组
		if (moduleId === "2") {
			canvasRef.current?.setLocalItems(LAYOUT2.localItems);
			canvasRef.current?.setPosition(LAYOUT2.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT2.compassRotation);
			canvasRef.current?.setScale(LAYOUT2.scale);
		} else if (moduleId === "3") {
			canvasRef.current?.setLocalItems(LAYOUT3.localItems);
			canvasRef.current?.setPosition(LAYOUT3.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT3.compassRotation);
			canvasRef.current?.setScale(LAYOUT3.scale);
		} else if (moduleId === "4") {
			canvasRef.current?.setLocalItems(LAYOUT4.localItems);
			canvasRef.current?.setPosition(LAYOUT4.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT4.compassRotation);
			canvasRef.current?.setScale(LAYOUT4.scale);
		} else if (moduleId === "5") {
			canvasRef.current?.setLocalItems(LAYOUT5.localItems);
			canvasRef.current?.setPosition(LAYOUT5.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT5.compassRotation);
			canvasRef.current?.setScale(LAYOUT5.scale);
		} else if (moduleId === "6") {
			canvasRef.current?.setLocalItems(LAYOUT6.localItems);
			canvasRef.current?.setPosition(LAYOUT6.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT6.compassRotation);
			canvasRef.current?.setScale(LAYOUT6.scale);
		} else if (moduleId === "7") {
			// 新增
			canvasRef.current?.setLocalItems(LAYOUT7.localItems);
			canvasRef.current?.setPosition(LAYOUT7.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT7.compassRotation);
			canvasRef.current?.setScale(LAYOUT7.scale);
		} else {
			canvasRef.current?.setLocalItems(LAYOUT1.localItems);
			canvasRef.current?.setPosition(LAYOUT1.canvasPosition);
			canvasRef.current?.setCompassRotation(LAYOUT1.compassRotation);
			canvasRef.current?.setScale(LAYOUT1.scale);
		}
		setModuleAlertOpen(false);
	};

	// ADD THIS REF:
	const demoActionsRef = useRef(new Set());

	// ADD THIS NEW FUNCTION to control showTab based on tutorial steps:
	const handleShowTabControl = (step) => {
		// Keep items tab open during steps 1 and 2 (room/furniture drag) on mobile
		if (isMobile) {
			if (step === 1 || step === 2) {
				// DRAG_ROOM (1) and DRAG_FURNITURE (2)
				setShowTab(true);
			}
			// Close tab when tutorial is finished, cancelled, or on intro
			else if (step === 10 || step === 0) {
				// COMPLETE (10) or INTRO (0)
				setShowTab(false);
			}
			// For other steps (3-9), leave tab state as is (user can control it)
		}
	};

	// ADD THESE THREE FUNCTIONS HERE:
	const handleStartDemo = () => {
		// Clear canvas for clean demo experience
		if (canvasRef.current) {
			canvasRef.current.setLocalItems([]);
			canvasRef.current.setPosition({ x: 0, y: 0 });
			canvasRef.current.setScale(isMobile ? 30 : 60);
			canvasRef.current.setCompassRotation(0);
		}
		demoActionsRef.current.clear();
		setShowDemo(true);
		// Close tab initially on mobile (step 0 - INTRO)
		if (isMobile) {
			setShowTab(false);
		}
	};

	const handleCloseDemo = () => {
		setShowDemo(false);
		// Close tab when demo is closed on mobile
		if (isMobile) {
			setShowTab(false);
		}
	};

	const handleDemoStep = (step) => {
		// Optional: Add specific handling for each demo step
		console.log("Demo step:", step);
	};

	// ADD THIS NEW FUNCTION:
	const handleDemoAction = (action, item) => {
		if (!showDemo) return;

		// Notify the demo overlay of user actions
		switch (action) {
			case "rotate":
				// Mark rotation as completed
				demoActionsRef.current.add("item-rotated");
				break;
			case "delete":
				// Mark deletion as completed
				demoActionsRef.current.add("item-deleted");
				break;
			case "compass-clicked": // ADD THIS CASE
				// Mark compass clicked as completed
				demoActionsRef.current.add("compass-clicked");
				break;
			case "model-shown": // ADD THIS CASE
				// Mark model dialog shown as completed
				demoActionsRef.current.add("model-shown");
				break;
		}
	};

	// WRAP THE RETURN STATEMENT WITH AccessControlWrapper
	return (
		<AccessControlWrapper locale={locale}>
			<Suspense fallback={<div>loading...</div>}>
				<>
					<AntdSpin
						fullscreen={true}
						spinning={loading}
						tip={t2("loading2")}
						className="bg-[#fff9]"
					/>

					<UserInfoDialog
						open={showUserInfoDialog}
						onUserOpen={setShowUserInfoDialog}
						onSubmit={handleUserInfoSubmit}
						userInfo={userInfo}
					/>
					{isMobile ? (
						<NavbarDesignMobile
							onSaveProject={onSaveProject}
							history={history}
							historyIndex={historyIndex}
							handleUndo={handleUndo}
							handleRedo={handleRedo}
							onUserOpen={setShowUserInfoDialog}
						/>
					) : (
						<NavbarDesign
							onSaveProject={onSaveProject}
							onGenReport={onGenReport}
							onUserOpen={setShowUserInfoDialog}
						/>
					)}
					<div className="pt-16">
						<DndContext
							sensors={sensors}
							onDragStart={handleDragStart}
							onDragOver={handleDragOver}
							onDragMove={handleDragMove}
						>
							<div className="min-h-[calc(100vh-64px)] bg-gray-50">
								<div
									className="container p-0"
									style={{ maxWidth: "100%" }}
								>
									<div className="flex h-[calc(100vh-64px)]">
										{isMobile ? (
											<DragBarMobile
												showTab={showTab}
												setShowTab={setShowTab}
												roomItems={roomItems}
												furnitureItems={furnitureItems}
												isOverCanvas={isOverCanvas}
												draggingItemSize={
													draggingItemSize
												}
											/>
										) : (
											<DragBarPC
												sidebarRef={sidebarRef}
												roomItems={roomItems}
												furnitureItems={furnitureItems}
												isOverCanvas={isOverCanvas}
												draggingItemSize={
													draggingItemSize
												}
											/>
										)}
										{/* Canvas */}
										<div
											className="relative flex-1 overflow-auto canvas-items canvas-controls"
											id="canvas-drop-area"
										>
											{/* Enhanced module section with demo button */}
											<div className="absolute px-3 py-2 text-sm border-gray-300 border-dashed shadow-sm top-2 left-2 z-9 border-1 rounded-xl bg-secondary">
												<div className="mb-2 font-medium text-center text-gray-600 ">
													{t("module")}
												</div>
												<div className="flex flex-col gap-2">
													<button
														onClick={() => {
															setWizardOpen(true);
															// Trigger demo action when smart selection is opened
															if (showDemo) {
																handleDemoAction(
																	"model-shown"
																);
															}
														}}
														className="px-3 py-1.5 text-white cursor-pointer bg-primary rounded-lg hover:bg-primary/90 transition-colors text-xs generate-btn"
													>
														{t("smartSelection")}
													</button>
													{/* Add demo button */}
													<button
														onClick={
															handleStartDemo
														}
														className="px-3 py-1.5 text-white cursor-pointer bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors text-xs"
													>
														{t(
															"demo.startTutorial"
														)}
													</button>
												</div>
											</div>

											<Canvas
												ref={canvasRef}
												locale={locale}
												history={history}
												historyIndex={historyIndex}
												setHistory={setHistory}
												setHistoryIndex={
													setHistoryIndex
												}
												handleUndo={handleUndo}
												handleRedo={handleRedo}
												onGenReport={onGenReport}
												showTab={showTab}
												onShowTab={onShowTab}
												onDemoAction={handleDemoAction} // ADD THIS LINE
											/>
										</div>
									</div>
								</div>
							</div>
							<DragOverlay>
								{active?.id &&
									isOverCanvas &&
									(active.data.current.cateType ===
									ITEM_TYPES.ROOM ? (
										// 房间在画布上的样式
										<div
											className="flex flex-col items-center justify-center rounded-lg bg-white/80"
											style={{
												transform: isMobile
													? "translateY(78px)"
													: "translateY(0)",
												width: defaultRoomSize.width,
												height: defaultRoomSize.height,
												border: "8px solid",
												borderColor:
													ROOM_COLORS[
														roomItems.find(
															(item) =>
																item.id ===
																active.id
														)?.data.type
													],
												borderRadius: "8px",
											}}
										>
											<div className="flex flex-col items-center">
												<Image
													className="bg-[#EFF7F4] rounded-lg"
													src={
														active.data.current.icon
													}
													alt="Room"
													width={draggingItemSize}
													height={draggingItemSize}
												/>

												<span className="mt-1 text-sm text-gray-600">
													{active.data.current.label +
														(canvasRef.current
															.getLocalItems()
															.filter(
																(item) =>
																	item.data
																		.type ===
																	active.data
																		.current
																		.type
															).length +
															1)}
												</span>
											</div>
										</div>
									) : (
										// 家具在画布上的样式
										<Image
											// className='bg-[#EFF7F4] rounded-lg'
											src={active.data.current.activeIcon}
											alt="Furniture"
											width={
												active.data.current.size.width
											}
											height={
												active.data.current.size.height
											}
										/>
									))}
							</DragOverlay>
						</DndContext>
					</div>

					<AlertDialog open={alertOpen} onOpenChange={setAlertOpen}>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									{t("hasReportAlert")}
								</AlertDialogTitle>
								<AlertDialogDescription>
									{t("description")}
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									{t("cancel")}
								</AlertDialogCancel>
								<AlertDialogAction onClick={onReadReport}>
									{t("readReport")}
								</AlertDialogAction>
								<AlertDialogAction onClick={onCoverReport}>
									{t("coverReport")}
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>

					<AlertDialog
						open={moduleAlertOpen}
						onOpenChange={setModuleAlertOpen}
					>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>
									{t("useModuleAlert")}
								</AlertDialogTitle>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>
									{t("cancel")}
								</AlertDialogCancel>
								<AlertDialogAction
									onClick={() => onCoverDesign("1")}
								>
									{t("ok")}
									{t("module1")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("2")}
								>
									{t("ok")}
									{t("module2")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("3")}
								>
									{t("ok")}
									{t("module3")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("4")}
								>
									{t("ok")}
									{t("module4")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("5")}
								>
									{t("ok")}
									{t("module5")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("6")}
								>
									{t("ok")}
									{t("module6")}
								</AlertDialogAction>
								<AlertDialogAction
									onClick={() => onCoverDesign("7")}
								>
									{t("ok")}
									{t("module7")}
								</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>
					<ModuleWizard
						open={wizardOpen}
						onClose={() => setWizardOpen(false)}
						onSelectModule={(moduleId) => {
							onCoverDesign(moduleId);
							setWizardOpen(false);
						}}
					/>

					{/* Demo Overlay - ADD THIS */}
					<DemoOverlay
						isActive={showDemo}
						onClose={handleCloseDemo}
						onStep={handleDemoStep}
						onShowTabControl={handleShowTabControl} // ADD THIS PROP
						canvasRef={canvasRef}
						isMobile={isMobile}
						demoActions={demoActionsRef.current}
					/>

					<ToastContainer />
				</>
			</Suspense>
		</AccessControlWrapper>
	);
}
