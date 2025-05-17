'use client';
import { Link } from '@/i18n/navigation';
import LanguageToggle from './LanguageToggle';
import useMobile from '../app/hooks/useMobile';
import MenuBar from './MenuBar';
import { Separator } from "@/components/ui/separator"
import { useTranslations } from "next-intl";
import UnlockButton from "./UnlockButton";

export default function Navbar({ from }) {
  const t = useTranslations('Navigation');
  const isMobile = useMobile();
  return (
    <nav className="bg-[#066952] h-16 hidden-on-print">
      <div className="px-4 h-full">
        <div className="md:max-w-[80%] mx-auto flex items-center justify-center md:justify-between h-full">
          <div className='flex items-center gap-6'>
            {

              (!isMobile || from !== 'report') && <Link href="/" className="text-2xl font-bold text-white">
                HarmoniQ
              </Link>
            }

            {
              from == 'report' && <>
                <Separator orientation='vertical' className='h-6 hidden md:block' />
                <span className='md:text-xl font-bold text-white'>{t('yourReport')}</span>
              </>
            }
          </div>

          {
            isMobile ? <MenuBar className='text-white absolute right-6 top-6' /> :

              <div className="flex items-center space-x-6">
                <LanguageToggle />
                {
                  from == 'report' && <UnlockButton />
                }
              </div>
          }

        </div>
      </div>
    </nav>
  );
}