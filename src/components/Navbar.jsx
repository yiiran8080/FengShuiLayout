"use client";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { useRouter, usePathname } from "@/i18n/navigation";
import LanguageToggle from "./LanguageToggle";
import useMobile from "../app/hooks/useMobile";
import { useSession } from "next-auth/react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
import UnlockButton from "./UnlockButton";
import Avatar from "./Avatar";

export default function Navbar({ from }) {
    const t = useTranslations("Navigation");
    const t2 = useTranslations("home.hero");
    const router = useRouter();
    const pathname = usePathname();

    const isMobile = useMobile();
    const { data: session } = useSession();
    const isLogined = session?.user?.userId;

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navigateToSection = (sectionId) => {
        // If we're on the home page, just scroll
        if (pathname === "/" || pathname === "") {
            scrollToSection(sectionId);
        } else {
            // If we're on another page, navigate to home page with hash
            router.push(`/#${sectionId}`);
        }
    };

    // Handle scrolling when coming from another page with hash
    useEffect(() => {
        if (typeof window !== "undefined") {
            const hash = window.location.hash.replace("#", "");
            if (hash) {
                // Small delay to ensure the page has loaded
                setTimeout(() => {
                    scrollToSection(hash);
                }, 100);
            }
        }
    }, [pathname]);

    return (
        <nav className="bg-[#004F44] h-16 hidden-on-print" style={{ fontFamily: "Noto Serif TC, serif" }}>
            <div className="h-full px-4">
                <div className="md:max-w-[80%] mx-auto flex items-center justify-between h-full">
                    <div className="flex items-center gap-6">
                        {(!isMobile || from !== "report") && (
                            <Link
                                href="/"
                                className="text-2xl font-bold text-white"
                                style={{ fontFamily: "Noto Serif TC, serif" }}
                            >
                                HarmoniQ
                            </Link>
                        )}

                        {/* Navigation Links */}
                        {!isMobile && from !== "report" && (
                            <div className="flex items-center gap-6 ml-6">
                                <button
                                    onClick={() => navigateToSection("hero")}
                                    className="text-white transition-colors cursor-pointer hover:text-gray-200"
                                    style={{ fontFamily: "Noto Serif TC, serif" }}
                                >
                                    {t("about")}
                                </button>
                                <button
                                    onClick={() => navigateToSection("share")}
                                    className="text-white transition-colors cursor-pointer hover:text-gray-200"
                                    style={{ fontFamily: "Noto Serif TC, serif" }}
                                >
                                    {t("process")}
                                </button>
                                <button
                                    onClick={() => navigateToSection("theory")}
                                    className="text-white transition-colors cursor-pointer hover:text-gray-200"
                                    style={{ fontFamily: "Noto Serif TC, serif" }}
                                >
                                    {t("theory")}
                                </button>
                                <Link
                                    href="/price"
                                    className="text-white transition-colors hover:text-gray-200"
                                    style={{ fontFamily: "Noto Serif TC, serif" }}
                                >
                                    {t("pricing")}
                                </Link>
                                <button
                                    onClick={() => navigateToSection("faq")}
                                    className="text-white transition-colors cursor-pointer hover:text-gray-200"
                                    style={{ fontFamily: "Noto Serif TC, serif" }}
                                >
                                    {t("faq")}
                                </button>
                            </div>
                        )}

                        {from == "report" && (
                            <>
                                <Separator
                                    orientation="vertical"
                                    className="hidden h-6 md:block"
                                />
                                <span className="font-bold text-white md:text-xl" style={{ fontFamily: "Noto Serif TC, serif" }}>
                                    {t("yourReport")}
                                </span>
                            </>
                        )}
                    </div>

                    <div className="flex items-center md:space-x-6">
                        {!isMobile && <LanguageToggle />}
                        {from == "report" && <UnlockButton />}
                        {isLogined && from !== "login" ? (
                            <Avatar />
                        ) : (
                            <Link
                                className="block text-base focus:text-primary text-[white]"
                                href={"/auth/login"}
                                style={{ fontFamily: "Noto Serif TC, serif" }}
                            >
                                {t2("login")}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
