import { useTranslations } from "next-intl";
export default function () {
    const t = useTranslations("home.contact");
    return <div className="md:px-4 px-8 pt-10 bg-secondary min-h-screen">
        <h1 className="text-2xl font-bold text-primary mb-5 text-center">HarmoniQ</h1>
        <p className="max-w-4xl mx-auto whitespace-pre-wrap">
            {t('content')}
        </p>

    </div>
}