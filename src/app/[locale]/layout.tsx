import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Inter, Lora } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PageTracker from "@/components/PageTracker";
import AutoButtonTracker from "@/components/AutoButtonTracker"; // Add this import
import "../globals.css";
import { setRequestLocale } from "next-intl/server";
import { ToastContainer, toast } from "react-toastify";
const lora = Lora({ subsets: ["latin", "symbols"] });
import { ImageProvider } from "@/context/ImageContext";
import { event } from "@/components/GoogleAnalytics";
import { UserProvider } from "@/context/UserContext";

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	setRequestLocale(locale);
	console.log("locale", locale);
	return (
		<html lang={locale}>
			<head>
				<GoogleAnalytics />
			</head>
			<body className={lora.className}>
				<PageTracker />
				<AutoButtonTracker /> {/* Add this component */}
				<ToastContainer
					position="top-center"
					autoClose={1000}
					hideProgressBar={true}
					newestOnTop={false}
					closeOnClick={false}
					rtl={false}
					pauseOnFocusLoss
					pauseOnHover
					theme="light"
					className={"text:sm"}
				/>
				<AuthProvider>
					<UserProvider>
						{" "}
						{/* Add UserProvider wrapper */}
						<ImageProvider>
							<NextIntlClientProvider locale={locale}>
								{children}
							</NextIntlClientProvider>
						</ImageProvider>
					</UserProvider>
				</AuthProvider>
			</body>
		</html>
	);
}

export const useAnalytics = () => {
	const trackEvent = (
		action: string,
		category: string,
		label?: string,
		value?: number
	) => {
		event({ action, category, label, value });
	};

	// Predefined tracking functions for common events
	const trackButtonClick = (buttonName: string) => {
		trackEvent("click", "Button", buttonName);
	};

	const trackFormSubmission = (formName: string) => {
		trackEvent("submit", "Form", formName);
	};

	const trackPageView = (pageName: string) => {
		trackEvent("page_view", "Navigation", pageName);
	};

	const trackFengShuiAnalysis = (analysisType: string) => {
		trackEvent("analysis_complete", "FengShui", analysisType);
	};

	return {
		trackEvent,
		trackButtonClick,
		trackFormSubmission,
		trackPageView,
		trackFengShuiAnalysis,
	};
};
