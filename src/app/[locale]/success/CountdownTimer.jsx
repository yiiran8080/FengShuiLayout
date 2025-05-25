'use client';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useTranslations } from "next-intl";
const CountdownTimer = ({ time, status }) => {
    const [countdown, setCountdown] = useState(time);
    const t = useTranslations('toast');
    useEffect(() => {
        if (countdown > 0) {
            const interval = setInterval(() => {
                setCountdown(countdown => countdown - 1);
            }, 1000);

            // 清除计时器，在组件卸载时
            return () => clearInterval(interval);
        } else {
            redirect('/report'); // 倒计时结束后跳转到报告页
        }
    }, [countdown]);
    // console.log(status);
    return (
        <div className='text-center text-4xl mt-10'>
            {
                status == 'open' && <p>{t('open')}</p>
            }
            {
                status == 'complete' && <p>支付成功！</p>
            }
            <p className='mt-5'>
                <span className='font-bold text-red-600'>{countdown}</span>
                {t('redirect')}
            </p>

        </div>
    );
};

export default CountdownTimer;