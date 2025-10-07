"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ReportHistoryPage = () => {
	const { data: session, status } = useSession();
	const router = useRouter();
	const [reports, setReports] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [pagination, setPagination] = useState({
		currentPage: 1,
		totalPages: 1,
		totalCount: 0,
		hasNextPage: false,
		hasPrevPage: false,
	});

	// Couple reports state
	const [coupleReports, setCoupleReports] = useState([]);
	const [coupleLoading, setCoupleLoading] = useState(true);
	const [coupleError, setCoupleError] = useState(null);
	const [couplePagination, setCouplePagination] = useState({
		currentPage: 1,
		totalPages: 1,
		totalCount: 0,
		hasNextPage: false,
		hasPrevPage: false,
	});

	// Life reports state
	const [lifeReports, setLifeReports] = useState([]);
	const [lifeLoading, setLifeLoading] = useState(true);
	const [lifeError, setLifeError] = useState(null);
	const [lifePagination, setLifePagination] = useState({
		currentPage: 1,
		totalPages: 1,
		totalCount: 0,
		hasNextPage: false,
		hasPrevPage: false,
	});

	useEffect(() => {
		if (status === "loading") return;
		if (status === "unauthenticated") {
			// Check if user has session storage data
			const storedEmail = localStorage.getItem("userEmail");
			if (!storedEmail) {
				router.push("/zh-TW/auth/login");
				return;
			}
		}
		fetchReports();
		fetchCoupleReports();
		fetchLifeReports();
	}, [session, status]);

	const fetchReports = async (page = 1) => {
		try {
			setLoading(true);
			let userEmail = session?.user?.email;
			let userId = session?.user?.id || session?.user?.userId;

			// Fallback to localStorage if not authenticated
			if (!userEmail && !userId) {
				userEmail = localStorage.getItem("userEmail");
				userId = localStorage.getItem("userId");
			}

			if (!userEmail && !userId) {
				setError("無法獲取用戶信息，請先登錄");
				return;
			}

			const queryParams = new URLSearchParams({
				...(userEmail && { userEmail }),
				...(userId && { userId }),
				page: page.toString(),
				limit: "12",
			});

			const response = await fetch(`/api/reports/history?${queryParams}`);
			const data = await response.json();

			if (data.status === 0) {
				setReports(data.data.reports);
				setPagination(data.data.pagination);
				setError(null);
			} else {
				setError(data.error || "獲取報告失敗");
			}
		} catch (err) {
			console.error("Fetch reports error:", err);
			setError("網絡錯誤，請稍後再試");
		} finally {
			setLoading(false);
		}
	};

	const fetchCoupleReports = async (page = 1) => {
		try {
			setCoupleLoading(true);
			let userEmail = session?.user?.email;
			let userId = session?.user?.id || session?.user?.userId;

			// Fallback to localStorage if not authenticated
			if (!userEmail && !userId) {
				userEmail = localStorage.getItem("userEmail");
				userId = localStorage.getItem("userId");
			}

			if (!userEmail && !userId) {
				setCoupleError("無法獲取用戶信息，請先登錄");
				return;
			}

			const params = new URLSearchParams({
				limit: "12",
				page: page.toString(),
			});

			if (userEmail) params.append("userEmail", userEmail);
			if (userId) params.append("userId", userId);

			const response = await fetch(
				`/api/reports/couple-history?${params}`
			);
			const data = await response.json();

			if (data.status === 0) {
				setCoupleReports(data.data.reports);
				setCouplePagination(data.data.pagination);
				setCoupleError(null);
			} else {
				setCoupleError(data.error || "獲取合盤報告失敗");
			}
		} catch (err) {
			console.error("Error fetching couple reports:", err);
			setCoupleError("網絡錯誤，請稍後再試");
		} finally {
			setCoupleLoading(false);
		}
	};

	const fetchLifeReports = async (page = 1) => {
		try {
			setLifeLoading(true);

			// 🔍 DEBUG: Log session data to understand the structure
			console.log("🔍 Session data for life reports:", {
				fullSession: session,
				userEmail: session?.user?.email,
				userId: session?.user?.id,
				userUserId: session?.user?.userId,
				allUserProps: session?.user ? Object.keys(session.user) : null,
			});

			let userEmail = session?.user?.email;
			let userId = session?.user?.id || session?.user?.userId;

			// Fallback to localStorage if not authenticated
			if (!userEmail && !userId) {
				userEmail = localStorage.getItem("userEmail");
				userId = localStorage.getItem("userId");
				console.log("🔍 Using localStorage fallback:", {
					userEmail,
					userId,
				});
			}

			if (!userEmail && !userId) {
				setLifeError("無法獲取用戶信息，請先登錄");
				return;
			}

			console.log("🔍 Final parameters for life reports API:", {
				userEmail,
				userId,
			});

			const params = new URLSearchParams({
				limit: "12",
				page: page.toString(),
			});

			// Try multiple session properties to find the correct user identifier
			const possibleEmails = [
				session?.user?.email,
				session?.user?.userEmail,
				userEmail,
				localStorage.getItem("userEmail"),
			].filter(Boolean);

			const possibleUserIds = [
				session?.user?.userId,
				session?.user?.id,
				userId,
				localStorage.getItem("userId"),
			].filter(Boolean);

			console.log("🔍 All possible identifiers:", {
				possibleEmails,
				possibleUserIds,
			});

			// Use the first available email or userId
			if (possibleEmails.length > 0) {
				params.append("userEmail", possibleEmails[0]);
			}
			if (possibleUserIds.length > 0) {
				params.append("userId", possibleUserIds[0]);
			}

			const response = await fetch(`/api/reports/life-history?${params}`);
			const data = await response.json();

			if (data.status === 0) {
				setLifeReports(data.data.reports);
				setLifePagination(data.data.pagination);
				setLifeError(null);
			} else {
				setLifeError(data.error || "獲取人生報告失敗");
			}
		} catch (err) {
			console.error("Error fetching life reports:", err);
			setLifeError("網絡錯誤，請稍後再試");
		} finally {
			setLifeLoading(false);
		}
	};

	const formatDate = (dateString) => {
		if (!dateString) return "未知";
		const date = new Date(dateString);
		return date.toLocaleDateString("zh-TW", {
			year: "numeric",
			month: "2-digit",
			day: "2-digit",
		});
	};

	const formatBirthday = (birthday) => {
		if (!birthday) return "未知";
		return birthday.replace(/-/g, "/");
	};

	const getReportTypeLabel = (type) => {
		switch (type) {
			case "fortune":
				return "命理測算";
			case "couple":
				return "合婚分析";
			case "bazhai":
				return "八宅風水";
			default:
				return "命理測算";
		}
	};

	const getConcernLabel = (concern) => {
		const concernMap = {
			事業: "事業",
			感情: "感情",
			財運: "財運",
			健康: "健康",
			學業: "學業",
		};
		return concernMap[concern] || concern || "一般";
	};

	const getGenderLabel = (gender) => {
		return gender === "male" ? "男" : gender === "female" ? "女" : "未知";
	};

	const handlePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= pagination.totalPages) {
			fetchReports(newPage);
		}
	};

	const handleCouplePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= couplePagination.totalPages) {
			fetchCoupleReports(newPage);
		}
	};

	const handleLifePageChange = (newPage) => {
		if (newPage >= 1 && newPage <= lifePagination.totalPages) {
			fetchLifeReports(newPage);
		}
	};

	if (loading && reports.length === 0) {
		return (
			<div className="flex items-center justify-center min-h-screen bg-gray-50">
				<div className="text-center">
					<div className="w-12 h-12 mx-auto mb-4 border-b-2 border-blue-600 rounded-full animate-spin"></div>
					<p className="text-gray-600">載入中...</p>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen py-8 bg-gray-50">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-8 text-center">
					<h1 className="mb-2 text-3xl font-bold text-gray-900">
						報告歷史
					</h1>
					<p className="text-gray-600">查看您的所有報告記錄</p>
				</div>

				{/* 合盤報告 Section */}
				<div className="mb-12">
					<h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b-2 border-blue-600">
						合盤報告
					</h2>

					{coupleLoading ? (
						<div className="py-8 text-center">
							<div className="w-8 h-8 mx-auto border-b-2 border-blue-600 rounded-full animate-spin"></div>
							<p className="mt-2 text-gray-600">
								載入合盤報告中...
							</p>
						</div>
					) : coupleError ? (
						<div className="py-8 text-center">
							<div className="p-4 border border-red-200 rounded-md bg-red-50">
								<p className="text-red-600">{coupleError}</p>
							</div>
						</div>
					) : coupleReports.length === 0 ? (
						<div className="py-8 text-center">
							<div className="p-8 border border-gray-200 rounded-md bg-gray-50">
								<p className="text-lg text-gray-500">
									尚無合盤報告記錄
								</p>
								<p className="mt-2 text-sm text-gray-400">
									完成合盤分析後，報告將顯示在這裡
								</p>
							</div>
						</div>
					) : (
						<>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{coupleReports.map((report) => (
									<div
										key={report.sessionId}
										className="overflow-hidden transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg"
									>
										<div className="relative h-48 bg-gradient-to-br from-purple-400 to-pink-500">
											<div className="absolute inset-0 flex items-center justify-center">
												<div className="text-center text-white">
													<svg
														className="w-12 h-12 mx-auto mb-2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
														/>
													</svg>
													<p className="text-sm font-medium">
														合盤分析
													</p>
												</div>
											</div>
										</div>
										<div className="p-4">
											<div className="flex items-start justify-between mb-2">
												<h3 className="text-lg font-semibold text-gray-900">
													合盤分析
												</h3>
												{report.reportGenerated && (
													<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
														已生成
													</span>
												)}
											</div>
											<div className="mb-3 space-y-1 text-sm text-gray-600">
												<p>
													<span className="font-medium">
														對象一:
													</span>{" "}
													{
														report.userInputs
															?.birthday
													}{" "}
													({report.userInputs?.gender}
													)
												</p>
												<p>
													<span className="font-medium">
														對象二:
													</span>{" "}
													{
														report.userInputs
															?.birthday2
													}{" "}
													(
													{report.userInputs?.gender2}
													)
												</p>
												{report.userInputs?.problem && (
													<p>
														<span className="font-medium">
															問題:
														</span>{" "}
														{
															report.userInputs
																.problem
														}
													</p>
												)}
												{report.componentCount && (
													<p>
														<span className="font-medium">
															組件數量:
														</span>{" "}
														{report.componentCount}
													</p>
												)}
											</div>
											<div className="mb-3 space-y-1 text-xs text-gray-500">
												<p>
													生成時間:{" "}
													{formatDate(
														report.reportGeneratedAt
													)}
												</p>
											</div>
											<div className="flex items-center justify-between">
												{report.reportGenerated && (
													<Link
														href={`/zh-TW/couple-report?sessionId=${report.sessionId}`}
														className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-purple-600 border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
													>
														查看報告
													</Link>
												)}
											</div>
										</div>
									</div>
								))}
							</div>

							{couplePagination.totalPages > 1 && (
								<div className="flex items-center justify-center mt-8 space-x-2">
									<button
										onClick={() =>
											handleCouplePageChange(
												couplePagination.currentPage - 1
											)
										}
										disabled={!couplePagination.hasPrevPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										上一頁
									</button>
									<span className="px-3 py-2 text-sm font-medium text-gray-700">
										{couplePagination.currentPage} /{" "}
										{couplePagination.totalPages}
									</span>
									<button
										onClick={() =>
											handleCouplePageChange(
												couplePagination.currentPage + 1
											)
										}
										disabled={!couplePagination.hasNextPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										下一頁
									</button>
								</div>
							)}
						</>
					)}
				</div>

				{/* 人生報告 Section */}
				<div className="mb-12">
					<h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b-2 border-green-600">
						人生報告
					</h2>

					{lifeLoading ? (
						<div className="py-8 text-center">
							<div className="w-8 h-8 mx-auto border-b-2 border-green-600 rounded-full animate-spin"></div>
							<p className="mt-2 text-gray-600">
								載入人生報告中...
							</p>
						</div>
					) : lifeError ? (
						<div className="py-8 text-center">
							<div className="p-4 border border-red-200 rounded-md bg-red-50">
								<p className="text-red-600">{lifeError}</p>
							</div>
						</div>
					) : lifeReports.length === 0 ? (
						<div className="py-8 text-center">
							<div className="p-8 border border-gray-200 rounded-md bg-gray-50">
								<p className="text-lg text-gray-500">
									尚無人生報告記錄
								</p>
								<p className="mt-2 text-sm text-gray-400">
									完成人生分析後，報告將顯示在這裡
								</p>
							</div>
						</div>
					) : (
						<>
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{lifeReports.map((report) => (
									<div
										key={report._id}
										className="overflow-hidden transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg"
									>
										<div className="relative h-48 bg-gradient-to-br from-green-400 to-teal-500">
											<div className="absolute inset-0 flex items-center justify-center">
												<div className="text-center text-white">
													<svg
														className="w-12 h-12 mx-auto mb-2"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth={2}
															d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
														/>
													</svg>
													<p className="text-sm font-medium">
														人生分析
													</p>
												</div>
											</div>
										</div>
										<div className="p-4">
											<div className="flex items-start justify-between mb-2">
												<h3 className="text-lg font-semibold text-gray-900">
													人生分析報告
												</h3>
												{report.reportGenerated && (
													<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
														已生成
													</span>
												)}
											</div>
											<div className="mb-3 space-y-1 text-sm text-gray-600">
												<p>
													<span className="font-medium">
														生日:
													</span>{" "}
													{report.userInputs?.birthday
														? formatBirthday(
																report
																	.userInputs
																	.birthday
															)
														: "未知"}
												</p>
												<p>
													<span className="font-medium">
														性別:
													</span>{" "}
													{getGenderLabel(
														report.userInputs
															?.gender
													)}
												</p>
												<p>
													<span className="font-medium">
														語言:
													</span>{" "}
													{report.language === "zh"
														? "簡體中文"
														: "繁體中文"}
												</p>
												{report.fortuneCount > 0 && (
													<p>
														<span className="font-medium">
															運勢分析:
														</span>{" "}
														{report.fortuneCount}
														/4 項完成
													</p>
												)}
											</div>
											<div className="mb-3 space-y-1 text-xs text-gray-500">
												<p>
													生成時間:{" "}
													{formatDate(
														report.reportGeneratedAt ||
															report.updatedAt
													)}
												</p>
												{report.hasAIContent && (
													<span className="inline-flex items-center px-2 py-1 text-xs font-medium text-blue-800 bg-blue-100 rounded-full">
														含AI分析
													</span>
												)}
											</div>
											<div className="flex items-center justify-between">
												{report.reportGenerated && (
													<Link
														href={`/zh-TW/report?sessionId=${report.sessionId}&birthDateTime=${report.userInputs?.birthday || ""}&gender=${report.userInputs?.gender || ""}&showHistorical=true`}
														className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
													>
														查看報告
													</Link>
												)}
											</div>
										</div>
									</div>
								))}
							</div>

							{lifePagination.totalPages > 1 && (
								<div className="flex items-center justify-center mt-8 space-x-2">
									<button
										onClick={() =>
											handleLifePageChange(
												lifePagination.currentPage - 1
											)
										}
										disabled={!lifePagination.hasPrevPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										上一頁
									</button>
									<span className="px-3 py-2 text-sm font-medium text-gray-700">
										{lifePagination.currentPage} /{" "}
										{lifePagination.totalPages}
									</span>
									<button
										onClick={() =>
											handleLifePageChange(
												lifePagination.currentPage + 1
											)
										}
										disabled={!lifePagination.hasNextPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										下一頁
									</button>
								</div>
							)}
						</>
					)}
				</div>

				{/* 個人流年報告 Section */}
				<div className="mb-8">
					<h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b-2 border-blue-600">
						個人流年報告
					</h2>
				</div>

				{/* Error State */}
				{error && (
					<div className="p-4 mb-6 border border-red-200 rounded-lg bg-red-50">
						<div className="flex">
							<div className="flex-shrink-0">
								<svg
									className="w-5 h-5 text-red-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									/>
								</svg>
							</div>
							<div className="ml-3">
								<p className="text-sm text-red-800">{error}</p>
							</div>
						</div>
					</div>
				)}

				{/* Reports Grid */}
				{reports.length === 0 ? (
					<div className="py-12 text-center">
						<div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full">
							<svg
								className="w-12 h-12 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								/>
							</svg>
						</div>
						<h3 className="mb-2 text-lg font-medium text-gray-900">
							暫無報告記錄
						</h3>
						<p className="mb-4 text-gray-500">
							您還沒有生成任何命理報告
						</p>
						<Link
							href="/zh-TW/fortune-entry"
							className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700"
						>
							開始測算
						</Link>
					</div>
				) : (
					<>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
							{reports.map((report, index) => (
								<div
									key={report.sessionId}
									className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-200 ${
										index === 0
											? "ring-2 ring-blue-500 ring-offset-2"
											: ""
									}`}
								>
									{/* Report Image */}
									<div className="relative h-48 overflow-hidden bg-gradient-to-br from-amber-700 via-orange-800 to-amber-900">
										{/* Background Pattern */}
										<div className="absolute inset-0 opacity-20">
											<div
												className="w-full h-full bg-center bg-cover"
												style={{
													backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
												}}
											></div>
										</div>

										{/* Hourglass Icon */}
										<div className="absolute inset-0 flex items-center justify-center">
											<div className="text-center text-white">
												<div className="flex items-center justify-center w-20 h-20 mx-auto mb-3 transform rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-orange-500 rotate-3">
													<svg
														className="w-10 h-10 text-amber-900"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M6 2h12v6l-4 4 4 4v6H6v-6l4-4-4-4V2zm2 2v4l4 4-4 4v4h8v-4l-4-4 4-4V4H8z" />
													</svg>
												</div>
												<h3 className="mb-1 text-lg font-bold">
													{getReportTypeLabel(
														report.reportType
													)}
												</h3>
												<p className="text-sm font-medium opacity-90">
													{getConcernLabel(
														report.userInputs
															?.concern
													)}
													分析
												</p>
											</div>
										</div>

										{/* Corner decoration */}
										<div className="absolute top-0 right-0 w-16 h-16 transform translate-x-8 -translate-y-8 bg-yellow-400 rounded-full opacity-20"></div>
										<div className="absolute bottom-0 left-0 w-12 h-12 transform -translate-x-6 translate-y-6 bg-orange-300 rounded-full opacity-20"></div>
									</div>{" "}
									{/* Report Info */}
									<div className="p-4">
										<div className="space-y-3">
											{/* Birthday and Gender */}
											<div className="text-center">
												<h4 className="mb-1 text-lg font-semibold text-gray-900">
													命主：
												</h4>
												<p className="font-medium text-gray-700">
													{formatBirthday(
														report.userInputs
															?.birthday
													)}
												</p>
												<p className="text-sm text-gray-600">
													{getGenderLabel(
														report.userInputs
															?.gender
													)}
												</p>
											</div>

											{/* Generation Date */}
											<div className="pt-2 text-center border-t border-gray-100">
												<p className="mb-1 text-xs text-gray-500">
													生成日期
												</p>
												<p className="text-sm font-medium text-gray-700">
													{formatDate(
														report.reportGeneratedAt ||
															report.createdAt
													)}
												</p>
											</div>

											{/* Status Badge */}
											<div className="text-center">
												<span
													className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
														report.reportGenerated
															? "bg-green-100 text-green-800"
															: "bg-yellow-100 text-yellow-800"
													}`}
												>
													{report.reportGenerated
														? "✓ 已完成"
														: "⏳ 生成中"}
												</span>
											</div>
										</div>

										{/* Action Button */}
										<div className="mt-4">
											<Link
												href={`/zh-TW/feng-shui-report?sessionId=${
													report.sessionId
												}&birthday=${report.userInputs?.birthday || ""}&gender=${
													report.userInputs?.gender ||
													""
												}&concern=${report.userInputs?.concern || ""}&problem=${
													report.userInputs
														?.problem || ""
												}&showHistorical=true`}
												className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
											>
												查看報告
											</Link>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Pagination */}
						{pagination.totalPages > 1 && (
							<div className="flex items-center justify-between mt-8">
								<div className="flex items-center text-sm text-gray-700">
									<span>
										顯示第{" "}
										{(pagination.currentPage - 1) * 12 + 1}{" "}
										至{" "}
										{Math.min(
											pagination.currentPage * 12,
											pagination.totalCount
										)}{" "}
										項，共 {pagination.totalCount} 項
									</span>
								</div>
								<div className="flex items-center space-x-2">
									<button
										onClick={() =>
											handlePageChange(
												pagination.currentPage - 1
											)
										}
										disabled={!pagination.hasPrevPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										上一頁
									</button>
									<span className="px-3 py-2 text-sm font-medium text-gray-700">
										{pagination.currentPage} /{" "}
										{pagination.totalPages}
									</span>
									<button
										onClick={() =>
											handlePageChange(
												pagination.currentPage + 1
											)
										}
										disabled={!pagination.hasNextPage}
										className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
									>
										下一頁
									</button>
								</div>
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default ReportHistoryPage;
