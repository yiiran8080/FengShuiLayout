import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/heroback.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            打造和谐风水布局
            <br />
            融合自然之力，优化气场流动
          </h1>
          <p className="text-xl mb-8 opacity-90">
            新年新气象，一步实现365天好运
          </p>
          <Link 
            href="/design"
            className="inline-flex px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors items-center gap-2"
          >
            免费开始测算
            <span className="text-xl">✨</span>
          </Link>
        </div>
      </div>
    </section>
  )
} 