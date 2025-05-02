import { takeSound } from '@lunisolar/plugin-takesound'
import lunisolar from 'lunisolar'
import moment from 'moment';

lunisolar.extend(takeSound)

/**
  加载takeSound插件后，
  SB对象（天干地支对象）会添加一个takeSound属性，
 */
export default function getLunisolar(birthDateTime) {
  const lsr = lunisolar(moment(birthDateTime).format('YYYY-MM-DD'));
  return lsr.char8.year.takeSound;
}

//console.log(lsr.char8.year.takeSound)  // 金箔金 （取得年干支的纳音）
//lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
// ...
//console.log(lsr.char8.day.takeSound) // 大海水 （取得日干支的纳音）
//lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）
