import Link from 'next/link';
import { useTranslations } from "next-intl";
export default function () {
    const t = useTranslations('Navigation');
    return <Link href="/" className="font-bold text-[#066952] rounded-[20px] bg-[#A7F7D3] px-4 py-1">
        {t('unlock')}
    </Link>
}