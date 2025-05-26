'use client';
import { useEffect, useState } from "react";
import emitter from '@/lib/emitter';
import { EVENT_KEY_GEN_REPORT } from "@/types/constants";
import { post } from '@/lib/ajax';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import { AntdSpin } from "antd-spin";
import { getLiuNianPrompt, getLiuNianUserData, getLiuNianAssistant } from "./utils"
import { LYzhiMap } from '@/lib/nayin'
import { Line } from '@rc-component/progress';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator";
import getWuxingData from '@/lib/nayin';
const monthMap = {
    1: '正月',
    2: '二月',
    3: '三月',
    4: '四月',
    5: '五月',
    6: '六月',
    7: '七月',
    8: '八月',
    9: '九月',
    10: '十月',
    11: '十一月',
    12: '十二月'
}
export default function ({ userInfo = {}, liuNianDataString, onSaveData }) {
    const t = useTranslations('report.pro');
    const t2 = useTranslations("toast");
    const [liuNianData, setLiuNianData] = useState([]);
    // {
    //     "健康防护": "流月丁丑与日柱庚寅产生冲 → 对应脏腑：肝胆；神煞丧门触发 → 重点预防：消化系统疾病。🔥 增强建议：卧室东方放置绿色靠垫（补木气）；每日丑时饮用菊花枸杞茶。",
    //         "感情人际": "流月夫妻宫：天同+田宅化禄 → 关系趋势：家庭和谐增进感情；日支寅与月支辰相冲 → 相处模式变化需更多包容。💡 行动策略：约会首选西方的中式餐厅；佩戴银饰增强吸引力。",
    //             "事业动能": "流月官禄宫：天同遇财帛化禄 → 突破点：财务规划领域；八字用神火与月令丁丑关系 → 行动节奏建议激进；⚠️ 风险预警：避开丁丑日（流日丁丑冲年柱丙子）签约；✅ 办公风水：在办公桌南方贴红色便利贴提升效率。",
    //                 "财富走势": "[财星定位]：偏财位：九宫西北方飞八白左辅星 → 投资建议：房地产利；日主庚克月干丁 → 求财难易度评估：中等。🤑 催财秘法：钱包内放6枚铜质硬币；每周五整理西北方杂物保持气流通畅。",
    //                     "本月四大开运法": "1. **色彩激活**：多穿红色衣物（喜火穿红色）；2. **方位佈局**：在南方放置水晶（例：南方放水晶）；3. **时间择吉**：重要事项优先选上午巳时；4. **行为修正**：减少熬夜（例：水弱者忌熬夜）。"
    // }
    // const [activeKey, setActiveKey] = useState('mingpan');
    const [loading, setLoading] = useState(false);
    const [wuxingData, setWuxingData] = useState({})
    const [progress, setProgress] = useState(5);

    useEffect(() => {
        if (userInfo && !userInfo.isLock && userInfo.genStatus === 'waiting') {
            const wuxingData = getWuxingData(userInfo.birthDateTime, userInfo.gender);
            setWuxingData(wuxingData);
            onGenerate(userInfo, wuxingData)
        }
    }, [userInfo]);

    useEffect(() => {
        if (liuNianDataString) {
            const liuNianData = JSON.parse(liuNianDataString);
            setLiuNianData(liuNianData);
        }
    }, [liuNianDataString])

    // const handleClick = (key) => {
    //     setActiveKey(key);
    // }
    const onGenerate = (userInfo, _wuxingData) => {
        console.log('liunian gen')
        setProgress(0)
        const systemPrompt = getLiuNianPrompt();
        const assistant = getLiuNianAssistant();
        const promises = Array.from({ length: 12 }).map((_, index) => post('/api/generateCode',
            {
                user: getLiuNianUserData(index + 1, userInfo, _wuxingData || wuxingData),
                system: systemPrompt,
                assistant,
                jsonResult: true
            }))
        setLoading(true);


        createProgressivePromiseAll(promises).then(results => {
            setLoading(false);
            let newResults = results.map((item) => (JSON.parse(item.data)));
            setLiuNianData(newResults);
            console.log('res 流年进阶', newResults)
            //onSaveData({liuNianData});
        }).catch(e => {
            setLoading(false);
            toast.error('流年运程进阶分析生成错误，请稍后刷新此页面重试。' + e.message, { autoClose: false })
        });


    }

    function createProgressivePromiseAll(promises) {
        const results = [];
        let completed = 0;
        const total = promises.length;

        return new Promise((resolve, reject) => {
            promises.forEach((promise, index) => {
                promise.then(result => {
                    if (result.status !== 0) {
                        throw new Error(result.message);
                    }
                    results[index] = result;
                    completed++;
                    const progress = completed / total;
                    setProgress(progress * 100);
                    //console.log(`Progress: ${progress * 100}%`); // 更新进度条
                    if (completed === total) {
                        resolve(results);
                    }
                }).catch(reject); // 如果任何一个promise失败，则立即拒绝主promise
            });
        });
    }


    return <div className="relative">
        {loading && <div className="absolute z-12 w-[500px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "><Line percent={progress} strokeWidth={2} strokeColor='#2db7f5' railWidth={2} /> </div>}
        <AntdSpin size={'large'} spinning={loading} tip={t2('generating')} className='bg-[#fff9]' >
            <button onClick={() => { onGenerate(userInfo) }}>重新生成</button>
            <p className='max-w-250 mx-auto md:mb-20 mb-10 md:px-0 px-5 font-bold leading-8 tracking-normal text-justify'>
                <span className='text-sm leading-8'>命主八字</span>
                <br />
                <span className='text-[#073E31] font-bold'> {`${wuxingData.year}年、${wuxingData.month}月、${wuxingData.day}日、${wuxingData.hour}${t('hour')}`}</span>
            </p>
            <Carousel className="w-full">
                <CarouselContent className="-ml-1">
                    {liuNianData.length > 0 && Array.from({ length: 12 }).map((_, index) => {
                        const itemEntries = Object.entries(liuNianData[index]);
                        let upperList = itemEntries.slice(0, 4);
                        let lowerList = itemEntries.slice(4);
                        return (
                            <CarouselItem key={index} className="ml-10 md:basis-170 h-139">
                                <div className="rounded-[8px]" style={{ boxShadow: '0px 0px 15px 0px' }}>
                                    <div className="w-full h-12 bg-[#0E8C6F] rounded-t-[8px] relative py-4">
                                        <div className="h-5 w-full" style={{ background: "url('/images/report/month/huawen.png') repeat" }}></div>
                                    </div>
                                    <div className="p-5 flex ">
                                        <div className="rounded-[8px] border-2 border-[#0E8C6F] min-w-74.5 h-117 mr-5 flex flex-col items-center">
                                            <div className="mt-12 mb-3 text-[40px] font-[900] text-[#0E8C6F]">{monthMap[index + 1]}</div>
                                            <div className="mb-12 text-sm px-6.5 py-1.5 bg-[#0E8C6F] text-white rounded-sm" >{LYzhiMap[index + 1]}月</div>
                                            <Image width={208} height={208} src={`/images/report/month/${2}.png`} tip={[index + 1] + '月'} />
                                        </div>
                                        <div className="grow overflow-hidden">
                                            <ScrollArea className="h-117 w-full">
                                                {

                                                    upperList.map(([key, value], _index) => <div key={_index} className='flex mb-1 items-start'>
                                                        <div className="text-sm whitespace-nowrap p-1.5 bg-[#0E8C6F] text-white rounded-sm mr-2 mt-2 w-28" >{key}</div>
                                                        <span className="text-sm leading-8 whitespace-pre-wrap">{value}</span>
                                                    </div>)
                                                }
                                                <Separator className="my-5" />
                                                {lowerList.map(([key, value], _index) => <div key={_index} >
                                                    <div className="text-sm whitespace-nowrap p-1.5 bg-[#0E8C6F] text-white rounded-sm mr-2 mb-3 max-w-28" >{key}</div>
                                                    <div className="text-sm whitespace-pre-wrap leading-8" >{value}</div>
                                                </div>


                                                )}
                                            </ScrollArea>

                                        </div>
                                    </div>

                                </div>
                            </CarouselItem>
                        )
                    })}
                </CarouselContent>
            </Carousel>

        </AntdSpin>
    </div>
}