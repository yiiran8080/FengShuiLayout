import Image from 'next/image';

export default function Contact() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6">联系我们</h2>
            <p className="text-lg text-gray-600 mb-8">
              如果您有任何问题或建议，欢迎随时与我们联系。我们的专业团队将为您提供最好的服务。
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/empty.png"
                    alt="Email"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium">电子邮件</h3>
                  <p className="text-gray-600">support@harmoniq.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/empty.png"
                    alt="WeChat"
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <h3 className="font-medium">微信公众号</h3>
                  <p className="text-gray-600">HarmoniQ风水</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">您的姓名</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="请输入您的姓名"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">联系方式</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="请输入您的邮箱或手机号"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">留言内容</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary h-32"
                  placeholder="请输入您的留言"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                提交留言
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
} 