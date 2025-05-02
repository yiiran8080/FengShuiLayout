import { getBirthDate } from '@/lib/utils';
import { calendar } from '@/lib/calendar';
import { WanNianLi } from '@/lib/wuxing';
import getLunisolar from '@/lib/nayin';
import { getDesignData } from './action'
import Report from "@/components/Report"
export default async function ReportPage({ params, searchParams }) {
    const { locale } = await params;
    const { birthDateTime } = await searchParams;
    if (!birthDateTime) return "数据错误，请重新生成报告。"
    const { year, month, day, hour } = getBirthDate(birthDateTime);
    const designData = await getDesignData();
    let lunar = calendar.solar2lunar(Number(year), Number(month), Number(day));
    lunar.hour = Number(hour);

    let result = WanNianLi.getResult(lunar);
    let nayin = getLunisolar(birthDateTime);
    console.log('result', result, nayin)



    // var msg = msg1 = '';
    // [].forEach.call(Object.keys(result.wuxingResult), function (value, index) {
    //   if (result.wuxingResult[value] === 0) {
    //     msg += '<em>' + value + ': ' + result.wuxingResult[value] + '</em>' + ', ';
    //     !msg1 && (msg1 = '<br/>五行缺：');
    //     msg1 += value + ', ';
    //   } else {
    //     msg += value + ': ' + result.wuxingResult[value] + ', ';
    //   }
    // });
    // msg = msg.slice(0, msg.length - 2);
    // if (msg1.length > 2) {
    //   msg1 = msg1.slice(0, msg1.length - 2);
    // }
    // console.log(msg, msg1)
    return <Report locale={locale} result={result} nayin={nayin} designJsonData={JSON.stringify(designData)} />
}