'use client'
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react'
import { handleSignOut } from "../app/actions";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { toast } from 'react-toastify';
export default function MenuBar({ className, isOpen, setIsOpen }) {
    const t = useTranslations("home.hero");
    const pathname = usePathname();

    const { data: session } = useSession();
    const isLogined = session?.user?.userId;
    const onLoginClick = async () => {
        setIsOpen(false);
        toast.info('正在跳转，请稍候...', { autoClose: 2000 });
        if (isLogined) {
            await handleSignOut()
        }
    }

    return <div className={cn("absolute top-0 right-0 w-full md:w-80 md:shadow-lg bg-white z-20 transition-transform duration-300 ease-in-out",
        isOpen ? 'translate-y-0' : '-translate-y-100'
    )}>
        <div className='flex justify-between items-center py-4.5 px-4 '>
            <span className='text-[#066952] text-xl font-bold'>HarmoniQ</span>
            <X className='w-4 h-4 cursor-pointer' onClick={() => setIsOpen(false)} />
        </div>

        <Link
            className='block text-base focus:bg-secondary focus:text-primary py-3.5 px-4'
            href={pathname.indexOf("/design") < 0 && pathname.indexOf("/login") < 0 ? "/design" : "/"}

        >
            {pathname.indexOf("/design") < 0 && pathname.indexOf("/login") < 0 ? t("cta") : t("home")}
        </Link>
        <Select>
            <SelectTrigger className="w-full text-base border-none py-4 mt-1 data-[state=open]:mb-22 px-4 shadow-none data-[state=open]:bg-secondary data-[state=open]:text-primary">
                {t('locale')}
            </SelectTrigger>
            <SelectContent className='border-none shadow-none'>
                <Link
                    href={`/${pathname.split('/').slice(2).join('/')}`}
                    locale="zh-CN"
                    className={`block px-4 py-2 text-sm  rounded ${pathname.startsWith('/zh-CN') ? 'bg-[#13AB87] text-white' : 'text-[#888]'}`}
                >
                    简体中文
                </Link>
                <Link
                    href={`/${pathname.split('/').slice(2).join('/')}`}
                    locale="zh-TW"
                    className={`block px-4 py-2 text-sm  rounded ${pathname.startsWith('/zh-TW') ? 'bg-[#13AB87] text-white' : 'text-[#888]'}`}
                >
                    繁體中文
                </Link>
            </SelectContent>
        </Select>
        {
            pathname.indexOf("/login") < 0 && <Link
                className='block text-base focus:bg-secondary focus:text-primary py-3.5 px-4'
                href={"/auth/login"}
                onClick={onLoginClick}

            >
                {isLogined ? t("logout") : t("login")}
            </Link>

        }



    </div>

}