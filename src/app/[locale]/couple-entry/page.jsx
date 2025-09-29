"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { use } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/home/Footer";

export default function CoupleEntryPage({ params }) {
	const { locale } = use(params);
	const t = useTranslations("coupleEntry");
	const searchParams = useSearchParams();
	const router = useRouter();
	const sessionId = searchParams.get("session_id");
	const specificProblem = searchParams.get("specificProblem") || "";
	const fromChat = searchParams.get("fromChat") === "true";

	const [step, setStep] = useState(1); // 1: Gender & Birthday, 2: Problem
	const [formData, setFormData] = useState({
		gender1: "male",
		gender2: "female",
		birthday1: "",
		birthday2: "",
		problem: "",
	});
	const [isVerifying, setIsVerifying] = useState(true);
	const [paymentVerified, setPaymentVerified] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");

	// Pre-fill specific problem from chat context
	useEffect(() => {
		if (fromChat && specificProblem) {
			setFormData((prev) => ({
				...prev,
				problem: specificProblem,
			}));
			console.log(
				"💬 Pre-filled couple problem from chat:",
				specificProblem
			);
		}
	}, [fromChat, specificProblem]);

	// Verify payment on component mount
	useEffect(() => {
		const verifyPayment = async () => {
			if (!sessionId) {
				setError(t("invalidSession"));
				setIsVerifying(false);
				return;
			}

			try {
				const response = await fetch("/api/verify-couple-payment", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ sessionId }),
				});

				const data = await response.json();
				if (data.status === 0) {
					setPaymentVerified(true);
				} else {
					setError(t("paymentFailed"));
				}
			} catch (err) {
				setError(t("verificationError"));
			} finally {
				setIsVerifying(false);
			}
		};

		verifyPayment();
	}, [sessionId]);

	const handleNextStep = () => {
		if (
			!formData.gender1 ||
			!formData.birthday1 ||
			!formData.gender2 ||
			!formData.birthday2
		) {
			setError(t("fillBothPersonsData"));
			return;
		}
		setError("");
		setStep(2);
	};

	const handlePrevStep = () => {
		setStep(1);
		setError("");
	};

	const handleNoSpecificProblem = () => {
		const generalProblem = t("generalCoupleAnalysis");

		setFormData((prev) => ({
			...prev,
			problem: generalProblem,
		}));

		setIsSubmitting(true);

		// Auto submit after setting general problem
		setTimeout(() => {
			// Redirect to couple report with parameters
			const reportParams = new URLSearchParams({
				birthday: formData.birthday1,
				birthday2: formData.birthday2,
				gender: formData.gender1,
				gender2: formData.gender2,
				problem: generalProblem,
			});

			window.location.href = `/couple-report?${reportParams.toString()}`;
		}, 100);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (step === 1) {
			handleNextStep();
			return;
		}

		if (!formData.problem.trim()) {
			setError(t("enterSpecificQuestion"));
			return;
		}

		setIsSubmitting(true);

		try {
			// Redirect to couple report with parameters
			const reportParams = new URLSearchParams({
				birthday: formData.birthday1,
				birthday2: formData.birthday2,
				gender: formData.gender1,
				gender2: formData.gender2,
				problem: formData.problem,
			});

			window.location.href = `/couple-report?${reportParams.toString()}`;
		} catch (err) {
			setError(t("submitError"));
			setIsSubmitting(false);
		}
	};

	if (isVerifying) {
		return (
			<div className="min-h-screen bg-[#EFEFEF] flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"></div>
					<p className="text-lg text-gray-600">
						{t("verifyingPayment")}
					</p>
				</div>
			</div>
		);
	}

	if (!paymentVerified) {
		return (
			<div className="min-h-screen bg-[#EFEFEF]">
				<Navbar />
				<div className="container px-4 py-20 mx-auto">
					<div className="max-w-md p-8 mx-auto text-center bg-white rounded-lg shadow-lg">
						<div className="mb-4 text-6xl text-red-500">❌</div>
						<h1 className="mb-4 text-2xl font-bold text-gray-800">
							{t("paymentVerificationFailed")}
						</h1>
						<p className="mb-6 text-gray-600">{error}</p>
						<button
							onClick={() => router.push("/price")}
							className="px-6 py-3 text-white bg-[#A3B116] rounded-lg hover:bg-[#8B9914]"
						>
							{t("returnToPricing")}
						</button>
					</div>
				</div>
				<Footer />
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-[#EFEFEF]">
			<Navbar />
			<div className="container px-4 py-20 mx-auto">
				<div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
					<div className="mb-8 text-center">
						<p className="text-gray-600">{t("fillDataPrompt")}</p>
					</div>

					{/* Progress Steps */}
					<div className="flex items-center mb-8">
						<div
							className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 1 ? "bg-[#A3B116] text-white" : "bg-gray-200 text-gray-600"} text-sm font-medium`}
						>
							1
						</div>
						<div
							className={`flex-1 h-1 mx-2 ${step >= 2 ? "bg-[#A3B116]" : "bg-gray-200"}`}
						></div>
						<div
							className={`flex items-center justify-center w-8 h-8 rounded-full ${step >= 2 ? "bg-[#A3B116] text-white" : "bg-gray-200 text-gray-600"} text-sm font-medium`}
						>
							2
						</div>
					</div>

					<h2 className="mb-6 text-xl font-bold text-gray-800">
						{step === 1
							? t("basicInfo")
							: t("relationshipQuestion")}
					</h2>

					<form onSubmit={handleSubmit} className="space-y-6">
						{step === 1 && (
							<>
								{/* Person 1 Section */}
								<div className="p-4 rounded-lg bg-gray-50">
									<h3 className="mb-4 text-lg font-medium text-gray-800">
										{t("firstPersonData")}
									</h3>

									{/* Person 1 Gender */}
									<div className="mb-4">
										<label className="block mb-3 text-sm font-medium text-gray-700">
											{t("gender")}{" "}
											<span className="text-red-500">
												{t("required")}
											</span>
										</label>
										<div className="flex justify-center gap-4">
											<div
												onClick={() =>
													setFormData((prev) => ({
														...prev,
														gender1: "male",
													}))
												}
												className={`flex flex-col items-center p-4 cursor-pointer transition-all ${
													formData.gender1 === "male"
														? "border-[#A3B116] bg-[#A3B116]/10"
														: "border-gray-200 hover:border-gray-300"
												}`}
											>
												<img
													src="/images/hero/male.png"
													alt="Male"
													className="mb-2 w-30 h-30"
												/>
												<span className="text-sm font-medium text-gray-700">
													{t("male")}
												</span>
											</div>
											<div
												onClick={() =>
													setFormData((prev) => ({
														...prev,
														gender1: "female",
													}))
												}
												className={`flex flex-col items-center p-4 cursor-pointer transition-all  ${
													formData.gender1 ===
													"female"
														? "border-[#A3B116] bg-[#A3B116]/10"
														: "border-gray-200 hover:border-gray-300"
												}`}
											>
												<img
													src="/images/hero/female.png"
													alt="Female"
													className="mb-2 w-30 h-30"
												/>
												<span className="text-sm font-medium text-gray-700">
													{t("female")}
												</span>
											</div>
										</div>
									</div>

									{/* Person 1 Birthday */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-700">
											{t("birthDate")}{" "}
											<span className="text-red-500">
												{t("required")}
											</span>
										</label>
										<input
											type="date"
											value={formData.birthday1}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													birthday1: e.target.value,
												}))
											}
											required
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3B116]"
										/>
									</div>
								</div>

								{/* Person 2 Section */}
								<div className="p-4 rounded-lg bg-gray-50">
									<h3 className="mb-4 text-lg font-medium text-gray-800">
										{t("secondPersonData")}
									</h3>

									{/* Person 2 Gender */}
									<div className="mb-4">
										<label className="block mb-3 text-sm font-medium text-gray-700">
											{t("gender")}{" "}
											<span className="text-red-500">
												{t("required")}
											</span>
										</label>
										<div className="flex justify-center gap-4">
											<div
												onClick={() =>
													setFormData((prev) => ({
														...prev,
														gender2: "male",
													}))
												}
												className={`flex flex-col items-center p-4 cursor-pointer transition-all border rounded-lg ${
													formData.gender2 === "male"
														? "border-[#A3B116] bg-[#A3B116]/10"
														: "border-gray-200 hover:border-gray-300"
												}`}
											>
												<img
													src="/images/hero/male.png"
													alt="Male"
													className="mb-2 w-30 h-30"
												/>
												<span className="text-sm font-medium text-gray-700">
													{t("male")}
												</span>
											</div>
											<div
												onClick={() =>
													setFormData((prev) => ({
														...prev,
														gender2: "female",
													}))
												}
												className={`flex flex-col items-center p-4 cursor-pointer transition-all border rounded-lg ${
													formData.gender2 ===
													"female"
														? "border-[#A3B116] bg-[#A3B116]/10"
														: "border-gray-200 hover:border-gray-300"
												}`}
											>
												<img
													src="/images/hero/female.png"
													alt="Female"
													className="mb-2 w-30 h-30"
												/>
												<span className="text-sm font-medium text-gray-700">
													{t("female")}
												</span>
											</div>
										</div>
									</div>

									{/* Person 2 Birthday */}
									<div>
										<label className="block mb-2 text-sm font-medium text-gray-700">
											{t("birthDate")}{" "}
											<span className="text-red-500">
												{t("required")}
											</span>
										</label>
										<input
											type="date"
											value={formData.birthday2}
											onChange={(e) =>
												setFormData((prev) => ({
													...prev,
													birthday2: e.target.value,
												}))
											}
											required
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3B116]"
										/>
									</div>
								</div>
							</>
						)}

						{step === 2 && (
							<>
								{/* Problem/Question Field */}
								<div>
									<label className="block mb-2 text-sm font-medium text-gray-700">
										{t("specificRelationshipQuestion")}
									</label>
									<textarea
										name="problem"
										value={formData.problem}
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												problem: e.target.value,
											}))
										}
										placeholder={t(
											"relationshipQuestionPlaceholder"
										)}
										rows="4"
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A3B116] resize-none"
									/>
									<p className="mt-1 text-xs text-gray-500">
										{t("detailedDescriptionHelp")}
									</p>
								</div>

								{/* Summary */}
								<div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
									<h3 className="mb-2 text-sm font-medium text-gray-700">
										{t("confirmData")}
									</h3>
									<p className="text-sm text-gray-600">
										{t("firstPerson")}:{" "}
										{formData.gender1 === "male"
											? t("male")
											: t("female")}{" "}
										- {formData.birthday1}
									</p>
									<p className="text-sm text-gray-600">
										{t("secondPerson")}:{" "}
										{formData.gender2 === "male"
											? t("male")
											: t("female")}{" "}
										- {formData.birthday2}
									</p>
								</div>
							</>
						)}

						{error && (
							<div className="p-4 border border-red-200 rounded-lg bg-red-50">
								<p className="text-sm text-red-600">{error}</p>
							</div>
						)}

						{/* Action Buttons */}
						{step === 2 && (
							<div className="pt-4 space-y-3">
								{/* No specific problem button */}
								<button
									type="button"
									onClick={handleNoSpecificProblem}
									disabled={
										formData.problem.trim() !== "" ||
										isSubmitting
									}
									className="w-full px-4 py-2 text-gray-700 transition-colors bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{t("noSpecificProblem")}
								</button>
							</div>
						)}

						<div className="flex gap-3 pt-4">
							{step === 2 && (
								<button
									type="button"
									onClick={handlePrevStep}
									className="flex-1 px-4 py-2 text-gray-700 transition-colors border border-gray-300 rounded-md hover:bg-gray-50"
								>
									{t("previousStep")}
								</button>
							)}
							<button
								type="submit"
								disabled={isSubmitting}
								className="flex-1 bg-[#A3B116] text-white py-3 px-4 rounded-md font-semibold hover:bg-[#8B9914] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<div className="flex items-center justify-center">
										<div className="w-5 h-5 mr-2 border-b-2 border-white rounded-full animate-spin"></div>
										{step === 1
											? t("nextStep")
											: t("generatingReport")}
									</div>
								) : step === 1 ? (
									t("nextStep")
								) : (
									t("generateReport")
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</div>
	);
}
