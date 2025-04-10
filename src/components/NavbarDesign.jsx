'use client';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { Save } from 'lucide-react';
import Undo from './canvasComp/Undo';
import useMobile from '../app/hooks/useMobile';
export default function NavbarDesign({ onSaveProject }) {
  const { isMobile } = useMobile();
  return (
    <nav className="bg-white h-16 border-b-gray-100 border-b-2 fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/" className="text-2xl font-bold text-primary">
            HarmoniQ
          </Link>

          <div className="flex items-center space-x-4 text-foreground  gap-3">
            <LanguageToggle className="text-foreground" />
            <span className='flex items-center gap-1 cursor-pointer' onClick={onSaveProject}><Save className="w-4 h-4" />保存 </span>
            <span className='flex items-center gap-1 cursor-pointer' ><Save className="w-4 h-4" />个人资料 </span>
            <Link
              href="/design"
              className="inline-flex px-4 py-1 bg-button-gradient text-white rounded-full hover:bg-primary/90 transition-colors items-center gap-2"
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