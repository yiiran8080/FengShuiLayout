import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const links = {
    product: [
      { name: '功能特点', href: '#' },
      { name: '价格方案', href: '#' },
      { name: '使用教程', href: '#' },
      { name: '常见问题', href: '#' }
    ],
    company: [
      { name: '关于我们', href: '#' },
      { name: '联系我们', href: '#' },
      { name: '加入我们', href: '#' },
      { name: '用户协议', href: '#' }
    ],
    social: [
      { name: '微信', href: '#', icon: '/images/hero/empty.png' },
      { name: '微博', href: '#', icon: '/images/hero/empty.png' },
      { name: '抖音', href: '#', icon: '/images/hero/empty.png' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link href="/" className="text-2xl font-bold text-white">
              HarmoniQ
            </Link>
            <p className="mt-4 text-sm">
              专业的智能风水布局分析平台，帮助您打造完美居所
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-white font-semibold mb-4">产品</h3>
            <ul className="space-y-2">
              {links.product.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-white font-semibold mb-4">公司</h3>
            <ul className="space-y-2">
              {links.company.map((link) => (
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
            <h3 className="text-white font-semibold mb-4">关注我们</h3>
            <div className="flex space-x-4">
              {links.social.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={24}
                    height={24}
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© 2024 HarmoniQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 