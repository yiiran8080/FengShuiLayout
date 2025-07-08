import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
export default function Footer() {
    const t = useTranslations("home.footer");
    const links = {
        contact: [
            { name: t("contact"), href: "/customer/contact" },
            { name: t("address"), href: "/customer/contact" },
            { name: t("email"), href: "/customer/contact" },
        ],
        law: [
            { name: t("privacy"), href: "/customer/privacy" },
            { name: t("terms"), href: "/customer/terms" },
        ],
        social: [
            {
                icon: "/images/footer/Facebook.png",
                href: "https://www.facebook.com/profile.php?id=61571723604958",
            },
            {
                icon: "/images/footer/Instagram.png",
                href: "https://www.instagram.com/harmoniq.fengshui/",
            },
        ],
    };

    return (
        <footer className="bg-[#004F44] text-gray-300 px-5 md:px-0" style={{ fontFamily: "Noto Serif TC, serif" }}>
            <div className="container px-4 mx-auto py-25">
                <div className="justify-center item-center text-[50px] font-bold text-white text-center mb-10">
                    <h1
                        className="text-white"
                        style={{
                            fontFamily: "Noto Serif TC, serif",
                            fontWeight: 400,
                            fontSize: "46px",
                        }}
                    >
                        {t("title")}
                    </h1>
                    <p
                        className="mt-2 text-white"
                        style={{
                            fontFamily: "Noto Serif TC, serif",
                            fontWeight: 400,
                            fontSize: "24px",
                        }}
                    >
                        {t("subtitle")}
                    </p>
                    {/* Link Button */}
                    <Link
                        href="/price"
                        className="inline-flex items-center justify-center mt-10 transition-colors hover:bg-gray-50"
                        style={{
                            width: "172px",
                            height: "50px",
                            borderRadius: "20px",
                            backgroundColor: "white",
                            border: "1px solid #ccc",
                            color: "#25826C",
                            textDecoration: "none",
                            fontSize: "18px",
                            fontFamily: "Noto Serif TC, serif",
                        }}
                    >
                        {t("button")}
                    </Link>
                </div>
                <div className="flex flex-wrap items-start justify-between gap-5">
                    {/* Left side: Product links and Company links grouped together */}
                    <div className="flex gap-12">
                        {/* Product links */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: "Noto Serif TC, serif" }}>
                                {t("consult")}
                            </h3>
                            <ul className="space-y-2">
                                {links.contact.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-xl transition-colors hover:text-white"
                                            style={{ fontFamily: "Noto Serif TC, serif" }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Company links */}
                        <div>
                            <h3 className="mb-4 text-xl font-semibold text-white" style={{ fontFamily: "Noto Serif TC, serif" }}>
                                {t("law")}
                            </h3>
                            <ul className="space-y-2">
                                {links.law.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
											className="text-xl transition-colors hover:text-white"
                                            style={{ fontFamily: "Noto Serif TC, serif" }}
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Right side: Social links */}
                    <div>
                        <h3 className="mb-4 text-xl font-semibold text-white min-w-30" style={{ fontFamily: "Noto Serif TC, serif" }}>
                            {t("focus")}
                        </h3>
                        <div className="flex space-x-4">
                            {links.social.map((social) =>
                                social.href ? (
                                    <a
                                        key={social.icon}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="transition-opacity hover:opacity-80"
                                    >
                                        <Image
                                            src={social.icon}
                                            alt=""
                                            width={30}
                                            height={30}
                                        />
                                    </a>
                                ) : (
                                    <Image
                                        key={social.icon}
                                        src={social.icon}
                                        alt=""
                                        width={30}
                                        height={30}
                                    />
                                )
                            )}
                        </div>
                    </div>
                </div>
                <Separator className="mt-7.5" />
                <div className="mt-5 font-semibold text-center border-t border-[#004F44] md:mt-10" style={{ fontFamily: "Noto Serif TC, serif" }}>
                    <p>© 2025 HarmoniQ. {t("copyright")}</p>
                </div>
            </div>
        </footer>
    );
}
