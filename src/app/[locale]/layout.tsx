import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Inter, Lora } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import "../globals.css";
import { setRequestLocale } from "next-intl/server";
const lora = Lora({ subsets: ["latin", "symbols"] });

export function generateStaticParams() {
  return [{ locale: "zh-CN" }, { locale: "zh-TW" }];
}

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
    <html lang={locale}>
      <body className={lora.className}>
        <AuthProvider>
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
