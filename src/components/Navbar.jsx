'use client';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import useMobile from '../app/hooks/useMobile';
import MenuBar from './MenuBar';
export default function Navbar() {

  const isMobile = useMobile();
  return (
    <nav className="bg-[#066952] h-16">
      <div className="px-4 h-full">
        <div className="md:max-w-[80%] mx-auto flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-white">
            HarmoniQ
          </Link>
          {
            isMobile ? <MenuBar className='text-white' /> : <div className="flex items-center space-x-4">
              <LanguageToggle />

            </div>
          }

        </div>
      </div>
    </nav>
  );
}