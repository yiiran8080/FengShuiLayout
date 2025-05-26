'use client';
import { useEffect, useState } from "react";
import emitter from '@/lib/emitter';
import { EVENT_KEY_GEN_REPORT } from "@/types/constants";
import { post } from '@/lib/ajax';
import { useTranslations } from 'next-intl';
import { toast } from 'react-toastify';
import { AntdSpin } from "antd-spin";
import { getSystemPrompt, getUserData } from "./utils"
import { Line } from '@rc-component/progress';
import getWuxingData from '@/lib/nayin';
export default function ({ userInfo, mingLiDataString, onSaveData }) {
    const t = useTranslations('report.pro');
    const t2 = useTranslations("toast");
    const [mingLiData, setMingLiData] = useState({ mingpan: '' });
    const [activeKey, setActiveKey] = useState('mingpan');
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
        if (mingLiDataString) {
            const mingLiData = JSON.parse(mingLiDataString);
            setMingLiData(mingLiData);
        }
    }, [mingLiDataString])

    const handleClick = (key) => {
        setActiveKey(key);
    }
    const onGenerate = (userInfo, _wuxingData) => {
        toast.info(t2('generating'));
        console.log('mingli gen')
        setProgress(0)
        let userData = getUserData(userInfo, _wuxingData || wuxingData);
        const promises = [
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('mingpan')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('minggong')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('liuqin')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('shiye')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('jiankang')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('ganqing')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('renji')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('juece')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('gexing')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('yunshi')
                }),
            post('/api/generateCode',
                {
                    user: userData,
                    system: getSystemPrompt('kaiyun')
                }),
        ]
        setLoading(true);
        createProgressivePromiseAll(promises).then(results => {
            setLoading(false);
            console.log('res 命理进阶', results)
            setMingLiData(mingLiData => ({
                ...mingLiData,
                mingpan: results[0].data,
                minggong: results[1].data,
                liuqin: results[2].data,
                shiye: results[3].data,
                jiankang: results[4].data,
                ganqing: results[5].data,
                renji: results[6].data,
                juece: results[7].data,
                gexing: results[8].data,
                yunshi: results[9].data,
                kaiyun: results[10].data,
            }));
            //onSaveData({mingLiData});
        }).catch(e => {
            setLoading(false);
            toast.error('个人命理进阶分析生成错误，请稍后刷新此页面重试。' + e.message, { autoClose: false })
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

            <div className="mx-auto p-4 w-[952px] h-[608px]">


                <div className="grid grid-cols-4 grid-rows-4 h-full border-4 border-[#6CA698] rounded-2xl">
                    {/* 第一行 */}
                    <div className="p-2  bg-[#F7FAF9] rounded-t-xl rounded-r-none  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'mingpan' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="w-full h-full font-bold text-xl cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('mingpan')}
                        >
                            {t('mingpan')}
                        </div>
                    </div>
                    <div className="p-2  bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'minggong' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('minggong')}
                        >
                            {t('minggong')}
                        </div></div>
                    <div className="p-2  bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'gexing' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('gexing')}
                        >
                            {t('gexing')}
                        </div>
                    </div>
                    <div className="p-2 bg-[#F7FAF9] rounded-t-xl rounded-l-none  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'yunshi' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full  cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('yunshi')}
                        >
                            {t('yunshi')}
                        </div>
                    </div>
                    {/* 第二行 */}
                    <div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'liuqin' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('liuqin')}
                        >
                            {t('liuqin')}
                        </div>
                    </div>
                    {/* 中间合并区域 */}
                    <div
                        className="text-sm whitespace-pre-wrap text-white overflow-y-auto col-span-2 row-span-2 border border-gray-300  p-4 flex justify-center bg-[#066952CC]"
                    >
                        {mingLiData[activeKey]}
                    </div>
                    <div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'shiye' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('shiye')}
                        >
                            {t('shiye')}
                        </div>
                    </div>
                    {/* 第三行 */}
                    <div className="p-2 bg-[#F7FAF9]  border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'ganqing' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('ganqing')}
                        >
                            {t('ganqing')}
                        </div>
                    </div>
                    {/* 中间区域已在上方定义 */}
                    <div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'jiankang' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('jiankang')}
                        >
                            {t('jiankang')}
                        </div>
                    </div>
                    {/* 第四行 */}
                    <div className="p-2 bg-[#F7FAF9] rounded-b-xl border-2 border-[#6CA698] flex items-center justify-center" style={{ borderBottomRightRadius: 0 }}>
                        <div
                            style={activeKey === 'renji' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}

                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('renji')}
                        >
                            {t('renji')}
                        </div>
                    </div>
                    <div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'juece' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('juece')}
                        >
                            {t('juece')}
                        </div>
                    </div>
                    <div className="p-2  bg-[#F7FAF9]   border-2 border-[#6CA698] flex items-center justify-center">
                        <div
                            style={activeKey === 'kaiyun' ? { backgroundColor: '#066952CC', color: '#fff' } : { backgroundColor: '#F7FAF9' }}
                            className="font-bold text-xl w-full h-full cursor-pointer hover:bg-gray-100 flex items-center justify-center"
                            onClick={() => handleClick('kaiyun')}
                        >
                            {t('kaiyun')}
                        </div>
                    </div>
                    <div style={{ borderBottomLeftRadius: 0 }} className="bg-[#F7FAF9] font-bold text-xl border-2 border-[#6CA698] rounded-b-xl rounded-l-none "></div>
                </div>
            </div>
        </AntdSpin>
    </div>
}