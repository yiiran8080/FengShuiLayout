'use client'
import { useEffect, useState, useRef } from "react";
import { get, post } from "@/lib/ajax";
import { useSession } from 'next-auth/react'
import _ from 'lodash';
import { getBirthDate } from '@/lib/utils';
import { calendar } from '@/lib/calendar';
import { WanNianLi } from '@/lib/wuxing';
import getLunisolar from '@/lib/nayin';
// 根据userId查询，如果查询到了，拿数据。否则生成随机数后，把结果存储到该userId下。

export default function useReportDoc(locale, birthDateTime) {
    const renderRef = useRef(true)
    const [loading, setLoading] = useState(true);
    const [reportDocData, setReportDocData] = useState(null);
    const { data: session } = useSession();

    useEffect(() => {
        console.log('renderRef.current', renderRef.current)
        // if (renderRef.current) {
        //     renderRef.current = false
        //     return
        // }
        const loadDesign = async () => {
            console.log('loadDesign', session?.user?.userId, locale)
            const userId = session?.user?.userId;
            if (userId && locale) {
                console.log('查询用户已有报告')
                setLoading(true);
                const { status, data } = await get(`/api/reportUserDoc/${userId}/${locale == 'zh-CN' ? 'zh' : 'tw'}`)
                if (data) {
                    console.log('已有报告')
                    //找到了用户已有报告
                    setReportDocData(data);
                } else {
                    if (!birthDateTime) {
                        setLoading(false);
                        return;
                    }
                    console.log('生成随机报告')
                    //找原始数据集
                    const { data: zhData } = await get(`/api/reportDoc/zh`, { isCached: true })
                    const { data: twData } = await get(`/api/reportDoc/tw`, { isCached: true })
                    if (zhData && twData) {
                        const { wuxingResult, nayin } = getWuxingData(birthDateTime);
                        const random = Math.floor(Math.random() * 3);
                        const jiajuRandom = Math.floor(Math.random() * 5);
                        let zhReportData = {
                            nianzhuData: zhData.nianzhuData[wuxingResult.bazi.year][random],
                            yuezhuData: zhData.yuezhuData[wuxingResult.bazi.month][random],
                            rizhuData: zhData.rizhuData[wuxingResult.bazi.date][random],
                            shizhuData: zhData.shizhuData[wuxingResult.bazi.hour][random],
                            yunchengData: zhData.yunchengData[nayin][random],
                            jiajuData: getJiajuData(zhData.jiajuData, jiajuRandom)
                        }
                        let twReportData = {
                            nianzhuData: twData.nianzhuData[wuxingResult.bazi.year][random],
                            yuezhuData: twData.yuezhuData[wuxingResult.bazi.month][random],
                            rizhuData: twData.rizhuData[wuxingResult.bazi.date][random],
                            shizhuData: twData.shizhuData[wuxingResult.bazi.hour][random],
                            yunchengData: twData.yunchengData[nayin][random],
                            jiajuData: getJiajuData(twData.jiajuData, jiajuRandom)
                        }
                        const data = locale == 'zh-CN' ? zhReportData : twReportData;
                        setReportDocData(data);
                        //存储这个用户生成的免费报告，同时存储简体和繁体。
                        post(`/api/reportUserDoc/${userId}/zh`, zhReportData);
                        post(`/api/reportUserDoc/${userId}/tw`, twReportData);
                    }
                }
                setLoading(false);
            }
        }
        loadDesign();

    }, [locale, session?.user?.userId, birthDateTime])

    const getWuxingData = (birthDateTime) => {
        const { year, month, day, hour } = getBirthDate(birthDateTime);

        let lunar = calendar.solar2lunar(Number(year), Number(month), Number(day));
        lunar.hour = Number(hour);

        let result = WanNianLi.getResult(lunar);
        let nayin = getLunisolar(birthDateTime);
        console.log('WUXING result', result, nayin)
        return { wuxingResult: result, nayin };

    }
    const getJiajuData = (_jiajuData, random) => {
        if (_jiajuData) {
            let jiajuData = _.cloneDeep(_jiajuData);
            for (let key in jiajuData) {
                let room = jiajuData[key];
                for (let direction in room) {
                    room[direction] = room[direction][random]
                }
            }
            return jiajuData;
        }
    }
    return { loading, reportDocData, };
}
