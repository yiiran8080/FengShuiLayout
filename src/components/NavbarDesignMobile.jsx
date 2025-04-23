
import { Save, UserPen, Menu, CircleHelp, X } from 'lucide-react';
import Undo from './canvasComp/Undo';
import { useState } from 'react';
import MenuBar from './MenuBar';
import Avatar from "@/components/Avatar";
export default function NavbarDesignMobile({ onSaveProject, history, historyIndex, handleUndo, handleRedo, onUserOpen }) {
  const [showTip, setShowTip] = useState(false);
  return (
    <div className='fixed top-0 left-0 right-0 z-50'>
      <nav className="bg-white h-16 border-b-gray-100 border-b-2 ">
        <div className="mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <div className="flex items-center space-x-4 text-foreground  gap-3">
              <Undo history={history} historyIndex={historyIndex} handleUndo={handleUndo} handleRedo={handleRedo} />
              <span className='flex items-center gap-1 cursor-pointer' onClick={onSaveProject}><Save className="w-4 h-4" /> </span>
            </div>

            <div className="flex items-center space-x-4 text-foreground  gap-3">
              <span className='flex items-center gap-1 cursor-pointer'><CircleHelp className="w-4 h-4" onClick={() => setShowTip(true)} /></span>
              <span className='flex items-center gap-1 cursor-pointer' ><UserPen className="w-4 h-4" onClick={() => onUserOpen(true)} /> </span>
              <MenuBar className="text-foreground" />
              <Avatar />
            </div>
          </div>
        </div>
      </nav>
      {
        showTip && (
          <div className='h-8 w-full bg-[#E5F4FF] px-6 py-3 flex justify-between items-center'>
            <span className='text-[12px] text-foreground flex items-center gap-1'>
              <CircleHelp className="w-4 h-4 text-[#888]" />
              至少需要设置1个房间、1扇门和1扇窗才可测算
            </span>
            <X className='w-4 h-4 text-[#888]' onClick={() => setShowTip(false)} />
          </div>
        )
      }
    </div>

  );
}