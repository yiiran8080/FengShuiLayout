'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
export default function LanguageToggle({className}) {
  const pathname = usePathname();

  return (
          <DropdownMenu>
              <DropdownMenuTrigger asChild className={cn("flex items-center space-x-1 text-white hover:opacity-80", className)}>
                <div>简体中文 <ChevronDownIcon className="w-4 h-4" /></div>
               
              </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white rounded-lg shadow-lg p-1 min-w-[120px]">
                  <DropdownMenuItem className="focus:bg-inherit">
                    <Link
                      href={pathname}
                      locale="zh-CN"
                      className="px-4 py-2 text-sm  hover:text-primary rounded text-foreground"
                    >
                      简体中文
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="focus:bg-inherit">
                    <Link
                      href={pathname}
                      locale="zh-TW"
                      className="px-4 py-2 text-sm hover:text-primary rounded text-foreground"
                    >
                      繁體中文
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
            
            </DropdownMenu>
  )

  }