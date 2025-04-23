import { useSession } from 'next-auth/react'
export default function () {
    const { data: session } = useSession();
    // session?.user?.name 
    return session?.user?.name && <div className="w-8 h-8 bg-[#6a84f8] rounded-full text-center">
        <span className='text-white font-bold text-xl'>{session?.user?.name.slice(0, 1).toUpperCase()}</span>
    </div>
}