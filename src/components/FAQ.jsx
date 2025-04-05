'use client'
import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "如何开始使用风水布局服务？",
      answer: '只需点击"免费开始测算"按钮，通过简单的拖拽操作设计您的房间布局，系统会自动为您生成专业的风水分析报告。'
    },
    {
      question: "需要提供哪些信息？",
      answer: "基本的房间布局、门窗位置、主要家具的摆放位置。如果您希望获得更准确的分析，也可以提供房屋朝向和个人生辰八字信息。"
    },
    {
      question: "分析报告包含哪些内容？",
      answer: "报告包括整体布局评估、各个房间的吉凶分析、家具摆放建议、气场流动分析，以及具体的改善方案。"
    },
    {
      question: "如何保证分析的准确性？",
      answer: "我们的系统基于传统风水理论和现代数据分析，结合了大量实际案例，并由专业风水师团队进行验证。"
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">常见问题</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            解答您关心的问题，帮助您更好地了解我们的服务
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4"
            >
              <button
                className="w-full flex items-center justify-between p-4 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-left font-medium">{faq.question}</span>
                <span className="ml-4 text-primary">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white border border-gray-200 rounded-b-lg">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 