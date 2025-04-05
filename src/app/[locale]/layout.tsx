import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "zh-CN" }, { locale: "zh-TW" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
