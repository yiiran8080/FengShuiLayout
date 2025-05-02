import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
export default function Footer() {
  const links = {
    contact: [
      { name: '联系我们', href: '#' },
    ],
    law: [

      { name: '隐私政策', href: '#' },
      { name: '用户条款', href: '#' }
    ],
    social: [
      { icon: '/images/footer/Facebook.png' },
      { icon: '/images/footer/Instagram.png' },
    ]
  };

  return (
    <footer className="bg-[#073228] text-gray-300 px-5 md:px-0">
      <div className="container mx-auto px-4 pt-12 pb-5">
        <div className="flex items-start justify-between flex-wrap gap-5">


          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">咨询</h3>
            <ul className="space-y-2">
              {links.contact.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Social links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl min-w-30">关注我们</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">法律信息</h3>
            <ul className="space-y-2">
              {links.law.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


        </div>
        <Separator className='mt-7.5 mb-2.5 md:mb-5' />
        <div className="border-t border-gray-800  text-sm text-center">
          <p>© 2025 HarmoniQ. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  );
} 