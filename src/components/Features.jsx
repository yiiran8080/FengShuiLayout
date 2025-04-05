import Image from 'next/image';

export default function Features() {
  const features = [
    {
      title: "智能布局分析",
      description: "基于深度学习算法，为您提供专业的风水布局建议",
      icon: "/images/empty.png"
    },
    {
      title: "实时3D预览",
      description: "直观展示家居布局效果，帮助您更好地理解和规划空间",
      icon: "/images/empty.png"
    },
    {
      title: "个性化报告",
      description: "根据您的具体情况，生成详细的风水分析报告",
      icon: "/images/empty.png"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            特色功能
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            运用现代科技，传承传统智慧，为您打造完美居所
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative w-16 h-16 mb-6 mx-auto">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 