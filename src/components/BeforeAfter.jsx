import Image from 'next/image';

export default function BeforeAfter() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            前后对比
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            通过专业的风水布局优化，为您的居所带来显著改变
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/before.png"
              alt="优化前的布局"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h3 className="text-lg font-semibold">优化前</h3>
              <p className="text-sm">传统布局，气场不畅</p>
            </div>
          </div>
          
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/empty.png"
              alt="优化后的布局"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4">
              <h3 className="text-lg font-semibold">优化后</h3>
              <p className="text-sm">科学布局，提升运势</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 