'use client';
import { Link } from '@/i18n/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations } from "next-intl";
export default function LanguageToggle({ className, trigger }) {
  const pathname = usePathname();
  const searchParams = useSearchParams().get('birthDateTime');
  let href = `/${pathname.split('/').slice(2).join('/')}`;
  let newHref = searchParams ? `${href}?birthDateTime=${searchParams}` : href;
  // console.log(pathname, useSearchParams().get('birthDateTime'));
  // const t = useTranslations("Navigation");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={cn("cursor-pointer flex items-center space-x-1 text-white hover:opacity-80", className)}>
        <div>{
          trigger ? trigger : pathname.startsWith('/zh-CN') ? '简体中文' : '繁體中文'
        } <ChevronDownIcon className="w-4 h-4" /></div>

      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white rounded-lg shadow-lg p-1 min-w-[120px]">
        <DropdownMenuItem className="focus:bg-inherit">
          <Link
            href={newHref}
            locale="zh-CN"
            className="px-4 py-2 text-sm  hover:text-primary rounded text-foreground"
          >
            简体中文
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-inherit">
          <Link
            href={newHref}
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