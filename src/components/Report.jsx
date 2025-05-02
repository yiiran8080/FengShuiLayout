'use client'
import Navbar from '@/components/Navbar';
import { useRef, useState, useEffect } from 'react';
import useMobile from '@/app/hooks/useMobile';
import { nianzhuData, nianzhuData as nianzhuTw } from '@/lib/nianzhu_tw';
import Image from 'next/image';
import RoomSection from './RoomSection';
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
            { title: '整体运势', },
            { title: '健康运势', },
            { title: '事业运势', },
            { title: '感情运势', },
            { title: '财运运势', },
            { title: '总结' },
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

const nianzhuClassMap = {
    '金': '#CCBB00',
    '木': '#00991B',
    '水': '#0088CC',
    '火': '#E52918',
    '土': '#BF8F00',
}
export default function ReportPage({ locale, result, nayin, designJsonData }) {
    const isMobile = useMobile();
    const sectionRefs = useRef(anchorList.map(() => null));
    const [activeIndex, setActiveIndex] = useState(0);
    const [showMenu, setShowMenu] = useState(false);
    const hideMenuTimer = useRef(null);
    console.log(result);
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
    if (!result?.bazi || !designJsonData) return "数据错误，请重新生成报告。"
    return (
        <div className="relative min-h-screen bg-white">
            <Navbar from='report' />
            {/* 右侧进度指示器+目录 */}
            <div className="absolute right-4 top-32 z-40">
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
                    <section className='md:rounded-[26px] rounded-none bg-[#F7FAF9] p-8 mt-16'>
                        <h2
                            id={`section-0-1=0`}
                            ref={el => sectionRefs.current[1] = el}
                            className='text-[28px] color-[#073E31] font-bold mb-3'>年柱</h2>
                        <p className='leading-8 text-justify'>
                            年柱的天干代表外在的表现和性格特质，地支则代表内在的潜力和环境影响。年柱不仅反映个人的基本性格和命运走向，还与家庭背景、祖先遗传等因素有关。
                            通过分析年柱，可以初步了解一个人的基本命格和未来发展趋势。
                        </p>
                        {

                            // result.bazi.year
                            Object.entries(nianzhuData['甲子'][0]).map(([key, value], index) => {


                                return <div key={index} className={`relative mt-8 flex flex-col  items-start gap-12 md:gap-0 mx-auto ${index == 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                                    <section className={`${index !== 2 && 'max-w-125'} flex-grow`}>
                                        <p className={`leading-8 text-xl font-bold text-[#073E31]`} style={{ color: nianzhuClassMap[key.slice(-1)] }}>
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

                    {/* {section.children.map((child, j) => (
                        <div key={child.title}>
                            <h3
                                ref={el => sectionRefs.current[anchorList.findIndex(a => a.id === `section-${i}-${j}`)] = el}
                                className="text-lg font-semibold mt-8 mb-2 text-[#20B580]"
                                id={`section-${i}-${j}`}
                            >
                                {child.title}
                            </h3>
                            <p className="text-gray-800 mb-8 leading-relaxed">
                                {child.content}
                            </p>
                        </div>
                    ))} */}
                </div>
                {/* 第三章 家居风水解析 */}
                <div key='section-2'>
                    <h1
                        ref={el => sectionRefs.current[12] = el}
                        className="md:text-[40px] text-[28px] text-center font-bold mt-16 mb-10 md:px-0 px-5 text-[#073E31]"
                        id={`section-2`}
                    >
                        {sections[2].title}
                    </h1>
                    <p className='font-bold leading-8 tracking-normal text-justify px-5 md:px-0'>
                        <span className='text-[#073E31]'>风水</span>，这门源自古老东方的智慧，千百年来一直引领着人们追求与自然和谐共处之道。它并非迷信，而是古人对自然环境的深刻观察与经验总结，蕴含着对宇宙规律的敬畏与顺应。


                        <br />
                        在风水学中，九宫飞星图是根据每年的飞星位置来判断吉凶方位的工具。 <span className='text-[#073E31]'>2025年是蛇年</span>，飞星的位置会对每个房间的风水产生不同的影响。以下将根据房间的排序，逐一分析其风水影响，并提供相应的建议。
                    </p>

                    <RoomSection designJsonData={designJsonData} />
                </div>
            </div>
        </div>
    );
}