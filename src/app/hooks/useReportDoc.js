'use client'
import { useEffect, useState } from "react";
import { get } from "@/lib/ajax";

export default function useReportDoc(locale) {
    const [loading, setLoading] = useState(false);
    const [reportDocData, setReportDocData] = useState(null);
    useEffect(() => {
        const loadDesign = async () => {
            setLoading(true);
            const { status, data } = await get(`/api/reportDoc/${locale == 'zh-CN' ? 'zh' : 'tw'}`)
            if (status == 0) {
                setReportDocData(data);
            }
            setLoading(false);

        }
        loadDesign();
    }, [locale])
    return { loading, reportDocData };
}
