'use client';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import {Save} from 'lucide-react';
export default function Navbar() {


  return (
    <nav className="bg-white h-16 border-b-gray-100 border-b-2">
      <div className="mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-primary">
            HarmoniQ
          </Link>

          <div className="flex items-center space-x-4 text-foreground  gap-3">
            <LanguageToggle className="text-foreground" />
            <span className='flex flex-grow items-center gap-1'><Save className="w-4 h-4" />保存 </span>
             <Link 
            href="/design"
            className="inline-flex px-4 py-1 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors items-center gap-2"
          >
            开始测算
            <span className="text-lg">✨</span>
          </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}