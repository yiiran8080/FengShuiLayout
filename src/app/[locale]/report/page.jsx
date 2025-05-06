import { Suspense } from 'react'
import Report from "@/components/Report"
import { Skeleton } from '@/components/ui/skeleton';
import { getReportDocData, getUserReportDocData } from "./action"
import { get, post } from "@/lib/ajax";
export default async function ReportPage({ params, searchParams }) {
    //const zhDataPromise = get(`/api/reportDoc/zh`, { isCached: true })


    const { locale } = await params;
    const { birthDateTime } = await searchParams;
    // const userData = await getUserReportDocData(locale);
    // let dataPromise;
    // if(userData){

    // }
    // const dataPromise = getReportDocData();
    //
    //const twDataPromise = get(`/api/reportDoc/tw`, { isCached: true })
    const Loading = <div className="space-y-8 mt-25">
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[70%]" />
        <Skeleton className="h-4 w-[80%]" />
        <Skeleton className="h-4 w-[70%]" />
    </div>
    return (
        <Suspense fallback={Loading}>
            <Report
                //dataPromise={dataPromise}
                //userDataPromise={userDataPromise}
                birthDateTime={birthDateTime}
                locale={locale}
            />
        </Suspense>
    )

}

