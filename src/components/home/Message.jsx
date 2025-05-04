'use client'
import Image from 'next/image';
import { useTranslations } from "next-intl";
import Link from 'next/link';
import useMobile from '@/app/hooks/useMobile';
export default function Share() {
    const t = useTranslations("home.message");
    const isMobile = useMobile();

    return (
        <section className="pt-14 md:pb-15 pb-8 relative overflow-hidden">
            <div className="container mx-auto md:px-4 px-8 ">

                <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto">
                    <div className='flex items-center md:max-w-154'>
                        <div className='mr-3 w-1/2'>
                            <Image
                                src='/images/hero/jiyu1.png'
                                alt=''
                                width={303}
                                height={379}
                                className="object-contain mb-5"
                            />

                            <Image
                                src='/images/hero/jiyu2.png'
                                alt=''
                                width={303}
                                height={379}
                                className="object-contain"
                            />


                        </div>
                        <div className='relative  w-1/2'>
                            <Image
                                src='/images/hero/jiyu3.png'
                                alt=''
                                width={303}
                                height={379}
                                className="object-contain"
                            />
                            <div className='rounded-[50px] md:rounded-[100px]  absolute md:bottom-7.5 bottom-4 -right-7 md:py-2.5 md:px-7.5 py-1 px-3.5 bg-[#20B580] text-white md:text-3xl shadow-xl'>Andrew</div>

                        </div>
                    </div>



                    <div className='flex-grow flex flex-col gap-6 items-center md:items-start'>
                        <h3 className="text-hero md:text-5xl text-[28px] font-bold">
                            {t("title")}
                        </h3>
                        <p className="whitespace-pre-wrap text-secondary-foreground md:text-xl max-w-90">
                            {t("description")}
                        </p>

                    </div>




                </div>

            </div>
        </section>
    );
} 