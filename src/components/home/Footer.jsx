import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations("home.footer");
  const links = {
    contact: [
      { name: t('contact'), href: '/contact' },
    ],
    law: [

      { name: t('privacy'), href: '/privacy' },
      { name: t('terms'), href: '/terms' }
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
            <h3 className="text-white font-semibold mb-4 text-xl">{t('consult')}</h3>
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
            <h3 className="text-white font-semibold mb-4 text-xl min-w-30">{t('focus')}</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <Image
                  src={social.icon}
                  alt=''
                  width={40}
                  height={40}
                />
              ))}
            </div>
          </div>
          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">{t('law')}</h3>
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
          <p>© 2025 HarmoniQ. {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
} 