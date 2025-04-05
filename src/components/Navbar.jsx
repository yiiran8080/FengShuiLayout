import Link from 'next/link';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {


  return (
    <nav className="bg-[#0B4D3F] h-16">
      <div className="max-w-[1200px] mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-white">
            HarmoniQ
          </Link>

          <div className="flex items-center space-x-4">
            <LanguageToggle />

          </div>
        </div>
      </div>
    </nav>
  );
}