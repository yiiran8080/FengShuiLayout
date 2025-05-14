import { Link } from '@/i18n/navigation';
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
export default function ({ className }) {
    const t = useTranslations('Navigation');
    return <Link href="/" className={cn("font-bold text-[#066952] rounded-[20px] bg-[#A7F7D3] px-4 py-1", className)}>
        {t('unlock')}
    </Link>
}