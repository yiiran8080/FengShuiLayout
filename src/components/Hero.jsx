'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from "next-intl";
import useMobile from '../app/hooks/useMobile';
export default function Hero() {
  const t = useTranslations("home.hero");
  const isMobile = useMobile();
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/heroback.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10 -top-20 md:pl-50">
        <div className="max-w-3xl text-white flex flex-col items-center md:block">
          <h1 className="md:text-[52px] text-4xl font-bold mb-16 mt-20 md:mt-0 leading-tight flex flex-col items-center md:items-start">
            <span>{t("title")}</span>
            {
              isMobile ? <>
                <span>{t("title2").split('，')[0]}</span>
                <span>{t("title2").split('，')[1]}</span>
              </> : <span>{t("title2")}</span>
            }

          </h1>
          <p className="md:text-xl text-lg mb-4 font-bold">
            {t("subtitle")}
          </p>
          <Link
            href="/design"
            className="inline-flex font-bold pl-10 pr-6 py-3 bg-button-gradient text-white rounded-full md:text-2xl text-xl hover:bg-primary/90 transition-colors items-center gap-2"
          >
            {t("cta")}
            <Image src="/images/hero/star.png" alt="arrow" width={24} height={24} />
          </Link>
        </div>
      </div>
    </section>
  )
} 