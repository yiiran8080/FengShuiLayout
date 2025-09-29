import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import AuthProvider from "@/components/AuthProvider";
import PageTracker from "@/components/PageTracker";
import { setRequestLocale } from "next-intl/server";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImageProvider } from "@/context/ImageContext";
import { UserProvider } from "@/context/UserContext";
import { event } from "@/components/GoogleAnalytics";

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

	return (
		<>
			<PageTracker />
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
					<ImageProvider>
						<NextIntlClientProvider locale={locale}>
							{children}
						</NextIntlClientProvider>
					</ImageProvider>
				</UserProvider>
			</AuthProvider>
		</>
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
