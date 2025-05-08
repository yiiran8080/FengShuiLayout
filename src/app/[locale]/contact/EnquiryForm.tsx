"use client";
import React, { useState } from "react";
import { Send, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const EnquiryForm = () => {
  const t = useTranslations("home.contact");
  let arr = Array.from(new Array(5));
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    otherCategory: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push("/");
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block font-lora text-sm font-medium text-brown mb-2"
          >
            {t("name.label")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t("name.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-lora text-sm font-medium text-brown mb-2"
          >
            {t("email.label")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder={t("email.placeholder")}
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block font-lora text-sm font-medium text-brown mb-2"
          >
            {t("category.label")}
          </label>
          <div className="relative">
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
            >
              <option value="">{t("category.placeholder")}</option>
              {arr.map((i, index) => (
                <option key={index} value={t(`category.option${index + 1}`)}>
                  {t(`category.option${index + 1}`)}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {formData.category === "Other" && (
          <div>
            <input
              type="text"
              name="otherCategory"
              value={formData.otherCategory}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder={t("category.otherPlaceholder")}
            />
          </div>
        )}

        <div>
          <label
            htmlFor="message"
            className="block font-lora text-sm font-medium text-brown mb-2"
          >
            {t("message.label")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary focus:border-primary resize-none"
            placeholder={t("message.placeholder")}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default EnquiryForm;
