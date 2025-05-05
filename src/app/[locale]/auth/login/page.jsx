'use client'

import { useState, use } from 'react';
import { signIn } from 'next-auth/react';
//import { signIn } from "@/auth";
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from 'react-toastify';
export default function LoginPage({ searchParams }) {
    const router = useRouter();
    const params = use(searchParams);
    console.log('searchParams', params);
    const [isLoading, setIsLoading] = useState(false);

    const handleSignIn = async (provider) => {
        setIsLoading(true);
        toast.info('正在跳转，请稍候...', { autoClose: 5000 });
        try {
            // provider, { callbackUrl: '/' }
            await signIn(provider, { callbackUrl: searchParams?.callbackUrl || '/' });
            setIsLoading(false);

        } catch (error) {
            console.error(`Error signing in with ${provider}:`, error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="flex flex-col items-center bg-secondary md:bg-gray-50 justify-center px-6 py-12  mx-auto">
                <div className="w-full p-10 space-y-8 bg-secondary md:w-100 md:shadow-lg md:h-auto h-screen">
                    <div className="flex flex-col items-center ">
                        <h1 className="text-5xl font-bold text-primary">HarmoniQ</h1>
                        <p className="mt-16 text-[#086E56] text-sm text-center">
                            要使用HarmoniQ服務，您必須登錄現有帳戶或使用以下選項創建一個帳戶。
                        </p>
                    </div>

                    <div className="mt-8 space-y-4">
                        <button
                            onClick={() => handleSignIn('google')}
                            disabled={isLoading}
                            className={`"cursor-pointer flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2" ${isLoading ? 'bg-muted' : 'bg-button-primary'}`}
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                                />
                            </svg>
                            Sign in with Google
                            <ClipLoader
                                color={'#666'}
                                loading={isLoading}
                                cssOverride={{ position: 'fixed' }}
                                size={30}
                                aria-label="loading..."
                                data-testid="loader"
                            />
                        </button>

                        <button
                            onClick={() => handleSignIn('apple')}
                            disabled={isLoading}
                            className={`cursor-pointer flex items-center justify-center w-full px-4 py-3 font-medium text-white transition-colors rounded-full  focus:outline-none focus:ring-2 focus:ring-offset-2 ${isLoading ? 'bg-muted' : 'bg-[#25826D]'}`}
                        >
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M16.36 0c.93 0 2.09.21 3.01 1.17-2.34.65-3.86 2.83-3.86 5.21 0 2.76 2.08 5.63 4.49 5.63.43 0 1.23-.09 1.49-.54-.35-.06-.72-.39-.72-1.03 0-.51.35-1.02.93-1.19-.03-.49-.15-.93-.3-1.37C20.73 5.84 18.89 4 16.36 4c-2.89 0-4.21 2.24-4.21 4.24 0 1.12.45 2.07 1.21 2.77-.35.79-1.09 2.75-1.09 3.92 0 .78.36 1.21.72 1.5-2.32-.11-5.32-1.3-5.32-6.46 0-3.5 2.82-6.93 8.69-6.93m-3.49 9.61c0-1.78 1.25-2.62 2.43-2.62 1.33 0 2.43.9 2.43 2.62 0 .31-.05.52-.12.73h-4.62c-.07-.21-.12-.42-.12-.73M12 21.57c.42 0 .75-.05 1.06-.16-.47-.28-1.02-.8-1.02-1.81 0-1.06.86-2.93 1.16-3.55-.55-.84-1.23-1.71-1.23-3.1 0-.82.2-1.32.46-1.73C8.89 11.52 7 13.14 7 16.14c0 3.72 2.54 5.43 5 5.43"></path>
                            </svg>
                            Sign in with Apple
                        </button>
                    </div>

                    <div className="mt-4 text-center text-sm text-gray-400">
                        使用HarmoniQ服務即表示您同意我們會對收集的數據進行分析。
                    </div>
                </div>
            </div>
        </div>
    );
} 