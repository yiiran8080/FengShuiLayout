'use client'
import Navbar from '@/components/Navbar';
import { useRef, useState, useEffect, Suspense, use } from 'react';
import { useSearchParams, useParams, useRouter, } from 'next/navigation';
import useMobile from '@/app/hooks/useMobile';
import useReportDoc from '@/app/hooks/useReportDoc';
import Image from 'next/image';
import RoomSection from '@/components/RoomSection';
import { useTranslations } from 'next-intl';
import UnlockButton from '@/components/UnlockButton';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'react-toastify';
const sections = [
    {
        title: '第一章：个人命理基础分析',
        children: [
            { title: '年柱', },
            { title: '月柱', },
            { title: '日柱', },
            { title: '时柱', },
        ],
    },
    {
        title: '第二章：流年运程基础分析',
        children: [
            { title: '整体运势', color: '#088C6E', bgColor: '#F7FAF9' },
            { title: '健康运势', color: '#00A637', bgColor: '#F5FAF7' },
            { title: '事业运势', color: '#0A58A6', bgColor: '#F5F8FA' },
            { title: '感情运势', color: '#E52E5C', bgColor: '#FAF5F6' },
            { title: '财运运势', color: '#D9B815', bgColor: '#FCFBF5' },
            { title: '总结', color: '#066952', bgColor: '#F7FAF9' },
        ],
    },
    {
        title: '第三章：家居风水基础分析'
    }
];
const anchorList = [
    {
        id: 'section-0',
        title: '第一章：个人命理基础分析',
        isMain: true,
    },
    {
        id: 'section-0-0',
        title: '年柱',
        isMain: false,
    },
    {
        id: 'section-0-1',
        title: '月柱'
    },
    { id: 'section-0-2', title: '日柱' },
    { id: 'section-0-3', title: '时柱' },

    {
        id: 'section-1',
        title: '第二章：流年运程基础分析',
        isMain: true,
    },
    { id: 'section-1-0', title: '整体运势' },
    { id: 'section-1-1', title: '健康运势' },
    { id: 'section-1-2', title: '事业运势' },
    { id: 'section-1-3', title: '感情运势' },
    { id: 'section-1-4', title: '财运运势' },
    { id: 'section-1-5', title: '总结' },
    {
        id: 'section-2',
        title: '第三章：流年运程基础分析',
        isMain: true,
    },
]

const wuxingColorMap = {
    '金': '#CCBB00',
    '木': '#00991B',
    '水': '#0088CC',
    '火': '#E52918',
    '土': '#BF8F00',
}

export default function ReportPage({ searchParams }) {
    const isMobile = useMobile();
    const router = useRouter();
    const t = useTranslations('report');
    const locale = useParams().locale;
    const { birthDateTime } = use(searchParams);
    const sectionRefs = useRef(anchorList.map(() => null));
    const [activeIndex, setActiveIndex] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const hideMenuTimer = useRef(null);
    const { loading, reportDocData } = useReportDoc(locale, birthDateTime);


    // 滚动监听，高亮当前章节
    useEffect(() => {
        const handleScroll = () => {
            const offsets = sectionRefs.current.map(ref => ref ? ref.getBoundingClientRect().top : Infinity);
            const index = offsets.findIndex(offset => offset > 80); // 80为Navbar高度
            setActiveIndex(index === -1 ? anchorList.length - 1 : Math.max(0, index - 1));
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 目录失焦自动隐藏
    useEffect(() => {
        const handleClick = (e) => {
            if (!e.target.closest('.report-menu') && !e.target.closest('.progress-indicator')) {
                setShowMenu(false);
            }
        };
        window.addEventListener('mousedown', handleClick);
        return () => window.removeEventListener('mousedown', handleClick);
    }, []);


    // 进度指示器hover/点击显示目录
    const handleProgressEnter = () => {
        clearTimeout(hideMenuTimer.current);
        setShowMenu(true);
    };
    // const handleProgressLeave = () => {
    //     hideMenuTimer.current = setTimeout(() => setShowMenu(false), 200);
    // };

    // 目录点击跳转
    const handleAnchorClick = (idx) => {
        sectionRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // setShowMenu(false);
    };
    if (loading) {
        return <div className="space-y-8 mt-25">
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[70%]" />
            <Skeleton className="h-4 w-[80%]" />
            <Skeleton className="h-4 w-[70%]" />
        </div>
    }

    if (!reportDocData) {
        toast.error(t('error'));
        router.push('/design');
        return;
    }
    //console.log('reportDocData:', reportDocData);

    return (
        <Suspense fallback={<div>loading...</div>}>
            <div className="relative min-h-screen bg-white">
                <Navbar from='report' />
                {/* 右侧进度指示器+目录 */}
                <div className="fixed right-4 top-32 z-40">
                    {/* 进度指示器 */}
                    <div
                        className="progress-indicator flex flex-col items-center gap-2 cursor-pointer select-none"
                        onMouseEnter={handleProgressEnter}
                        // onMouseLeave={handleProgressLeave}
                        onClick={handleProgressEnter}
                    >
                        {anchorList.map((item, idx) => (
                            <div
                                key={item.id}
                                className={`transition-all duration-200 ${item.isMain ? 'w-5 h-5' : 'w-2 h-2'} rounded-full  bg-[#E7F2EE] ${activeIndex === idx ? 'bg-[#20B580]' : ''}`}
                                style={{ margin: item.isMain ? '8px 0' : '3px 0' }}
                            />
                        ))}
                    </div>
                    {/* 目录结构 */}
                    {showMenu && (
                        <div
                            className="absolute top-0 right-0 report-menu w-56 bg-white shadow-lg rounded-lg py-4 px-4 text-sm max-h-[70vh] overflow-y-auto"
                            tabIndex={-1}
                        >
                            {sections.map((section, i) => (
                                <div key={section.title}>
                                    <div
                                        className={`text-sm mb-1 cursor-pointer ${activeIndex === anchorList.findIndex(a => a.id === `section-${i}`) ? 'text-[#20B580]' : ''}`}
                                        onClick={() => handleAnchorClick(anchorList.findIndex(a => a.id === `section-${i}`))}
                                    >
                                        {section.title}
                                    </div>
                                    {section.children?.map((child, j) => (
                                        <div
                                            key={child.title}
                                            className={`text-sm pl-4 py-1 cursor-pointer ${activeIndex === anchorList.findIndex(a => a.id === `section-${i}-${j}`) ? 'text-[#20B580]' : 'text-gray-700'}`}
                                            onClick={() => handleAnchorClick(anchorList.findIndex(a => a.id === `section-${i}-${j}`))}
                                        >
                                            {child.title}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                {/* 正文内容 */}
                <div className="max-w-250 mx-auto  md:px-5">
                    {/* 第一章 四柱*/}
                    <div key='section-0'>
                        <h1
                            ref={el => sectionRefs.current[0] = el}
                            className="md:text-[40px] text-[28px] text-center font-bold my-10 md:mt-30 md:px-0 px-5 text-[#073E31]"
                            id={`section-0`}
                        >
                            {sections[0].title}
                        </h1>
                        <p className='font-bold leading-8 tracking-normal text-justify px-5 md:px-0'>
                            <span className='text-[#073E31]'>风水命理</span>，作为一门古老的智慧学问，其核心在于探讨天地能量与个人气场之间的微妙关系，旨在通过调整环境与个人的能量场，达到和谐共生的状态。
                            在这第一章，我们会简单探讨用户命理的基础，从阴阳五行的基本概念出发，逐步理解自身与环境的关系，
                            <span className='text-[#073E31]'>从而做出更为明智的选择，提升生活的品质与幸福感</span>。
                            <br />
                            风水命理并非迷信，而是一种科学与艺术的结合。它要求我们以开放的心态去接纳自然的力量，并通过细致的观察与分析，找到最适合自己的生活方式。
                        </p>


                        {/* 年柱 */}
                        <section className='md:rounded-[26px] rounded-none bg-[#F7FAF9] p-8 md:mt-18 mt-10'>
                            <h2
                                id={`section-0-1`}
                                ref={el => sectionRefs.current[1] = el}
                                className='text-[28px] color-[#073E31] font-bold mb-3'>年柱</h2>
                            <p className='leading-8 text-justify'>
                                年柱的天干代表外在的表现和性格特质，地支则代表内在的潜力和环境影响。年柱不仅反映个人的基本性格和命运走向，还与家庭背景、祖先遗传等因素有关。
                                通过分析年柱，可以初步了解一个人的基本命格和未来发展趋势。
                            </p>
                            {

                                // result.bazi.year
                                Object.entries(reportDocData.nianzhuData).map(([key, value], index) => {


                                    return <div key={index} className={`relative mt-8 flex flex-col  items-start gap-12 md:gap-0 mx-auto ${index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <section className={`${index !== 2 && 'max-w-125'} flex-grow`}>
                                            <p className={`leading-8 text-xl font-bold text-[#073E31]`} style={{ color: wuxingColorMap[key.slice(-1)] }}>
                                                {key}

                                            </p>
                                            <p className='leading-8 text-justify'>
                                                {value}
                                            </p>
                                        </section>
                                        {
                                            index !== 2 && <div className={`relative ${index == 0 ? 'md:-right-20' : 'md:-left-20'}`}>
                                                <Image
                                                    className='w-105 h-75'

                                                    src={`/images/report/${key.slice(-1)}.png`}
                                                    alt={key}
                                                    width={420}
                                                    height={320}

                                                />
                                            </div>
                                        }

                                    </div>



                                })



                            }
                        </section>
                        {/* 月柱 */}
                        <section className='md:rounded-[26px] rounded-none bg-[#F7FAF9] p-8 md:mt-18 mt-10'>
                            <h2
                                id={`section-0-2`}
                                ref={el => sectionRefs.current[2] = el}
                                className='text-[28px] color-[#073E31] font-bold mb-3'>月柱</h2>
                            <p className='leading-8 text-justify'>
                                月柱的天干代表个人的情感表达和社交能力，地支则反映内在的情绪状态和潜在的影响力。月柱不仅揭示个人的情感特质和人际关系模式，还与个人的心理健康和情感稳定性有关。
                                通过分析月柱，可以深入了解一个人的情感世界和社交互动方式。
                            </p>
                            {

                                // result.bazi.year
                                Object.entries(reportDocData.yuezhuData).map(([key, value], index) => {


                                    return <div key={index} className={`relative mt-8 flex flex-col  items-start gap-12 md:gap-0 mx-auto ${index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <section className={`${index !== 2 && 'max-w-125'} flex-grow`}>
                                            <p className={`leading-8 text-xl font-bold text-[#073E31]`} style={{ color: wuxingColorMap[key.slice(-1)] }}>
                                                {key}

                                            </p>
                                            <p className='leading-8 text-justify'>
                                                {value}
                                            </p>
                                        </section>
                                        {
                                            index !== 2 && <div className={`relative ${index == 0 ? 'md:-right-20' : 'md:-left-20'}`}>
                                                <Image
                                                    className='w-105 h-75'

                                                    src={`/images/report/${key.slice(-1)}.png`}
                                                    alt={key}
                                                    width={420}
                                                    height={320}

                                                />
                                            </div>
                                        }

                                    </div>



                                })



                            }
                        </section>
                        {/* 日柱 */}
                        <section className='md:rounded-[26px] rounded-none bg-[#F7FAF9] p-8 md:mt-18 mt-10'>
                            <h2
                                id={`section-0-3`}
                                ref={el => sectionRefs.current[3] = el}
                                className='text-[28px] color-[#073E31] font-bold mb-3'>日柱</h2>
                            <p className='leading-8 text-justify'>
                                日柱的天干代表个人的核心性格和行为模式，地支则反映个人的内在情感和生活环境。日柱不仅揭示个人的主要性格特质，还与个人的健康状况、情感生活以及日常行为模式密切相关。
                                通过分析日柱，可以深入了解一个人的内在动机和行为倾向。
                            </p>
                            {

                                // result.bazi.year
                                Object.entries(reportDocData.rizhuData).map(([key, value], index) => {


                                    return <div key={index} className={`relative mt-8 flex flex-col  items-start gap-12 md:gap-0 mx-auto ${index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <section className={`${index !== 2 && 'max-w-125'} flex-grow`}>
                                            <p className={`leading-8 text-xl font-bold text-[#073E31]`} style={{ color: wuxingColorMap[key.slice(-1)] }}>
                                                {key}

                                            </p>
                                            <p className='leading-8 text-justify'>
                                                {value}
                                            </p>
                                        </section>
                                        {
                                            index !== 2 && <div className={`relative ${index == 0 ? 'md:-right-20' : 'md:-left-20'}`}>
                                                <Image
                                                    className='w-105 h-75'

                                                    src={`/images/report/${key.slice(-1)}.png`}
                                                    alt={key}
                                                    width={420}
                                                    height={320}

                                                />
                                            </div>
                                        }

                                    </div>



                                })



                            }
                        </section>
                        {/* 时柱 */}
                        <section className='md:rounded-[26px] rounded-none bg-[#F7FAF9] p-8 md:mt-18 mt-10'>
                            <h2
                                id={`section-0-4`}
                                ref={el => sectionRefs.current[4] = el}
                                className='text-[28px] color-[#073E31] font-bold mb-3'>时柱</h2>
                            <p className='leading-8 text-justify'>
                                时柱的天干代表个人在社会中的表现和晚年运势，地支则反映个人的内在情感和家庭生活。时柱不仅揭示个人的社交能力和晚年生活质量，还与子女、下属的关系密切相关。
                                通过分析时柱，可以深入了解一个人在社会中的角色和晚年的生活状态。
                            </p>
                            {

                                // result.bazi.year
                                Object.entries(reportDocData.shizhuData).map(([key, value], index) => {


                                    return <div key={index} className={`relative mt-8 flex flex-col  items-start gap-12 md:gap-0 mx-auto ${index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                        <section className={`${index !== 2 && 'max-w-125'} flex-grow`}>
                                            <p className={`leading-8 text-xl font-bold text-[#073E31]`} style={{ color: wuxingColorMap[key.slice(-1)] }}>
                                                {key}

                                            </p>
                                            <p className='leading-8 text-justify'>
                                                {value}
                                            </p>
                                        </section>
                                        {
                                            index !== 2 && <div className={`relative ${index == 0 ? 'md:-right-20' : 'md:-left-20'}`}>
                                                <Image
                                                    className='w-105 h-75'

                                                    src={`/images/report/${key.slice(-1)}.png`}
                                                    alt={key}
                                                    width={420}
                                                    height={320}

                                                />
                                            </div>
                                        }

                                    </div>



                                })



                            }
                        </section>
                        <div className='md:flex mt-10 items-center px-6 md:p-0'>
                            <p><span className='text-[#FF531A]'>*</span>第四章的进阶分析会加入 <span className='font-bold'>命宫分析</span>,同时包括<span className='font-bold'>幸运数字，幸运颜色。</span></p>
                            <UnlockButton className='bg-[#096E56] text-white md:ml-2 w-full md:w-auto mt-5 md:mt-0 block md:inline text-center' />
                        </div>

                    </div>
                    {/* 第二章 流年运程解析 */}
                    <div key='section-1'>
                        <h1
                            ref={el => sectionRefs.current[5] = el}
                            className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
                            id={`section-1`}
                        >
                            {sections[1].title}
                        </h1>
                        <p className='font-bold leading-8 tracking-normal text-justify px-5 md:px-0'>
                            <span className='text-[#073E31]'>命运</span>，如同浩瀚星河，看似遥不可及，却又与我们息息相关。古人云：“一命二运三风水”，道出了命运与环境的紧密联系。然而，命运并非一成不变，它如同一幅未完成的画卷，等待我们用智慧和行动去描绘。
                        </p>

                        {
                            reportDocData.yunchengData.map((item, index) => {
                                return <section
                                    style={{ backgroundColor: sections[1].children[index].bgColor, }}
                                    className='md:rounded-[26px] rounded-none md:p-8 p-5 md:mt-10 mt-10'>
                                    <div className='flex justify-between items-center'>
                                        <p
                                            ref={el => sectionRefs.current[6 + index] = el}
                                            id={`section-1-${index}`}
                                            className={`leading-8 text-xl font-bold flex items-center`}
                                            style={{ color: sections[1].children[index].color }}>

                                            {
                                                index < 5 && <Image src={`/images/report/icon${index}.png`} width={24} height={24} alt='' className='mr-1' />
                                            }
                                            {sections[1].children[index].title}
                                        </p>
                                        {
                                            index < 5 && <p className={`leading-8 flex items-end`} style={{ color: sections[1].children[index].color }}>

                                                <span className='font-bold text-xl'>{item.zhishu?.split('/')[0]}</span>
                                                <span className='text-sm'>/10</span>
                                            </p>
                                        }

                                    </div>
                                    <p className='leading-8 text-justify'>{item.content}</p>
                                </section>
                            })
                        }
                        <div className='md:flex mt-10 items-center px-6 md:p-0'>
                            <p><span className='text-[#FF531A]'>*</span>第四章的进阶分析会加入 <span className='font-bold'>命宫分析</span>,同时包括<span className='font-bold'>幸运数字，幸运颜色。</span></p>
                            <UnlockButton className='bg-[#096E56] text-white md:ml-2 w-full md:w-auto mt-5 md:mt-0 block md:inline text-center' />
                        </div>
                    </div>
                    {/* 第三章 家居风水解析 */}
                    <div key='section-2'>
                        <h1
                            ref={el => sectionRefs.current[12] = el}
                            className="md:text-[40px] text-[28px] text-center font-bold md:mt-18 mt-10 mb-10 md:px-0 px-5 text-[#073E31]"
                            id={`section-2`}
                        >
                            {sections[2].title}
                        </h1>
                        <p className='font-bold leading-8 tracking-normal text-justify px-5 md:px-0'>
                            <span className='text-[#073E31]'>风水</span>，这门源自古老东方的智慧，千百年来一直引领着人们追求与自然和谐共处之道。它并非迷信，而是古人对自然环境的深刻观察与经验总结，蕴含着对宇宙规律的敬畏与顺应。
                            <br />
                            在风水学中，九宫飞星图是根据每年的飞星位置来判断吉凶方位的工具。 <span className='text-[#073E31]'>2025年是蛇年</span>，飞星的位置会对每个房间的风水产生不同的影响。以下将根据房间的排序，逐一分析其风水影响，并提供相应的建议。
                        </p>

                        <RoomSection jiajuDataString={JSON.stringify(reportDocData.jiajuData)} />
                    </div>
                </div>
            </div>
        </Suspense>

    );
}