(()=>{var e={};e.id=9184,e.ids=[9184],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},45928:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>d,routeModule:()=>c,serverHooks:()=>g,workAsyncStorage:()=>p,workUnitAsyncStorage:()=>u});var n={};t.r(n),t.d(n,{POST:()=>i});var s=t(96559),o=t(48088),a=t(37719);async function i(e){try{let{userInfo:r}=await e.json();if(!r)return Response.json({error:"Missing user information"},{status:400});let{concern:t,birthday:n,gender:s,time:o}=r,a=`你是專業的八字命理分析師。請根據用戶的八字信息進行個人化的關鍵季節分析：

用戶八字信息：
- 生日：${n}
- 性別：${s}
- 時間：${o}
- 關注領域：${t}

請針對用戶的具體八字和${t}關注領域，提供個人化的關鍵季節分析：

【關鍵季節分析】

#### **春季（寅卯辰月，木旺）**：
根據用戶八字分析春季木旺對其${t}的具體影響。需包含：
- 八字中木的作用（印星、比劫、食傷等）
- 對${t}的正面影響和風險
- 具體建議和注意事項（至少3條具體行動建議）
- 辰月的特殊性分析

#### **夏季（巳午未月，火土極旺）**：
分析火土極旺期對用戶${t}的影響。需包含：
- 火旺對用戶八字的沖克情況
- ${t}方面的危險和機遇
- 極致防護措施（至少3條具體措施）
- 未月土旺的特殊影響

#### **秋季（申酉戌月，金旺）**：
分析金旺期的影響，分月詳述：
- 申月（金水）的影響和建議
- 酉月（純金）的最佳時機
- 戌月（土金）的注意事項
- 對${t}的具體操作指導（至少3條建議）

#### **冬季（亥子丑月，水旺）**：
**重點分析**水旺調候期的作用，需詳細說明：
- 亥子月水旺的調候作用對${t}的具體幫助
- 丑月土金庫的特殊性和機遇
- 對${t}的修復和規劃建議（至少3條具體建議）
- 來年準備工作的具體指導
- 調候對整體命局的改善作用

參考格式和風格：

財運示例：
春季（寅卯辰月，木旺）：印星旺，利學習、考證、維繫客戶/上司關係以保職位（護正財）。但木生火，野心易膨脹，嚴禁投資、合夥。辰月濕土稍緩燥。

夏季（巳午未月，火土極旺）：凶險巔峰期！巳午月（火）應流年劫財，破財風險最高！務必：極度節儉、只做必要支出、全力保工作、杜絕任何投機/合夥/借貸。未月（土）未戌刑加劇，注意公司/平台內部問題或壓力。

健康示例：
夏季（巳午未月，火土極旺）：生死攸關期！巳午月（火）應流年凶煞，務必：絕對避免：暴曬、高溫作業、劇烈運動、情緒激動、熬夜、辛辣油膩飲食。嚴格執行：防暑降溫（空調、陰涼）、大量補充水分電解質（淡鹽水、清湯）、清淡飲食（粥、瓜果）、保證充足睡眠、隨身攜帶急救藥（如降壓、救心）。

秋季（申酉戌月，金旺）：相對緩和期（金氣壓火）。申月（金水）：最佳調理窗口，利於滋陰潤燥（銀耳、百合）、修復夏季損傷、系統治療慢性病。酉月（純金）：繼續鞏固，重點保養肺與大腸（呼吸、皮膚、排便）。戌月（土金）：金氣漸弱，後半月運支戌土引動未戌刑，注意脾胃保養，防舊病復發。

冬季（亥子丑月，水旺）示例：
亥子月（水旺）：救命調候期！水制火潤燥，最利修復元氣、恢復健康。具體措施：溫補腎陰（黑豆、黑芝麻、山藥）、加強保暖（尤其腰腎）、早睡晚起養精神、溫和運動（太極、散步）。子月調候最佳，心神漸穩、體力恢復。丑月（土庫）：鞏固調候成果，土潤金生、金水相生，利於制定來年健康規劃，可考慮系統體檢、治療根本問題。

工作/事業冬季示例：
亥子月（水旺）：智慧調候期，水為傷官主創新思維，利於深度學習、策略規劃、創新方案研發。具體建議：參加培訓課程提升專業能力、研究市場趨勢制定來年計劃、與同行深度交流拓展視野、整理工作經驗形成知識體系。丑月（土庫）：收藏階段，土印生金，利於知識沉澱、經驗總結、制定長期職業規劃。

要求：
1. 必須基於用戶具體八字進行個人化分析，不可泛泛而談
2. ${"工作"===t?"請按事業運勢分析，":""}針對${t}領域提供專業且具體的季節性建議
3. 每個季節必須包含標準格式：#### **季節名（地支月份，五行旺相）**：
4. **特別強調冬季分析必須詳細完整**，至少100字，包含：
   - 具體的八字分析原理
   - 詳細的影響說明
   - 具體可執行的建議措施（至少3條）
   - 月份細分的特殊注意事項
   - 來年準備的具體指導
5. 內容要具體實用，包含具體的行動指導
6. 語言專業但易懂，體現八字命理的專業性
7. 重點突出危險期的防護措施和有利期的把握方法
8. 秋季和冬季需要分月細述（如申月、酉月、戌月的不同特點）
9. 提供具體實例和操作建議，避免空泛的概念性描述
10. **確保四個季節的內容都完整且詳細，特別是冬季部分**

請確保每個季節的分析都足夠詳細深入，為用戶提供真正有價值的個人化指導。`,i=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:a}],stream:!1,max_tokens:6e3,temperature:.6})});if(!i.ok)return console.error("DeepSeek API Error:",i.status,i.statusText),Response.json({error:"AI analysis service unavailable"},{status:500});let c=await i.json(),p=c.choices?.[0]?.message?.content;if(!p)return Response.json({error:"No analysis generated"},{status:500});let u=function(e,r){try{let t=[{name:"春季",period:"寅卯辰月，木旺",icon:"\uD83C\uDF38",color:"bg-green-500",keyPoints:["印星助學","寅卯辰月","木旺"]},{name:"夏季",period:"巳午未月，火土極旺",icon:"☀️",color:"bg-red-500",keyPoints:["極端防護","巳午未月","火旺"]},{name:"秋季",period:"申酉戌月，金旺",icon:"\uD83C\uDF42",color:"bg-yellow-500",keyPoints:["黃金收穫","申酉戌月","金旺"]},{name:"冬季",period:"亥子丑月，水旺",icon:"❄️",color:"bg-blue-500",keyPoints:["黃金修復期","亥子丑月","水旺"]}];return t.forEach(t=>{let n="";for(let r of[RegExp(`【${t.name}[^】]*】[：:]?\\s*([\\s\\S]*?)(?=【|####|$)`,"g"),RegExp(`\\*\\*${t.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=\\*\\*|####|$)`,"g"),RegExp(`####\\s*\\*\\*${t.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=####|$)`,"g"),RegExp(`${t.name}（[^）]*）[：:]?\\s*([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)（|####|$)`,"g"),RegExp(`${t.name}[^\\n]*[：:]([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)|###|$)`,"g")]){let t;for(r.lastIndex=0;null!==(t=r.exec(e));)if(t[1]){let e=t[1].trim();if(e.length>50){n=e;break}}if(n)break}if(!n||n.length<50)for(let r of[RegExp(`${t.name}[^\\n]*\\n([\\s\\S]{50,500}?)(?=(?:春季|夏季|秋季|冬季)|$)`,"g"),RegExp(`${t.name}[^。]*。([\\s\\S]{30,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,"g")]){let t;for(r.lastIndex=0;null!==(t=r.exec(e));)if(t[1]&&t[1].trim().length>30){n=t[1].trim();break}if(n)break}if(n&&n.length>20){if((n=n.replace(/^[：:]\s*/,"").replace(/^[。．]\s*/,"").replace(/【[^】]*】/g,"").replace(/\*\*/g,"").replace(/####/g,"").replace(/^\s*[-•]\s*/gm,"").replace(/\s*。\s*(?=。)/g,"").replace(/\n\s*\n/g,"\n").trim()).length>1e3){let e=n.split(/[。！？]/),r="";for(let t of e)if(r.length+t.length<800)r+=t+"。";else break;n=r||n.substring(0,800)+"..."}t.content=n}else t.content=l(t.name,r)}),{seasons:t,fullContent:e,title:`關鍵季節&注意事項 (${r}指南)`}}catch(e){var t;return console.error("Season content parsing error:",e),t=r,{seasons:[{name:"春季",period:"寅卯辰月，木旺",icon:"\uD83C\uDF38",color:"bg-green-500",content:l("春季",t),keyPoints:["印星助學","寅卯辰月","木旺"]},{name:"夏季",period:"巳午未月，火土極旺",icon:"☀️",color:"bg-red-500",content:l("夏季",t),keyPoints:["極端防護","巳午未月","火旺"]},{name:"秋季",period:"申酉戌月，金旺",icon:"\uD83C\uDF42",color:"bg-yellow-500",content:l("秋季",t),keyPoints:["黃金收穫","申酉戌月","金旺"]},{name:"冬季",period:"亥子丑月，水旺",icon:"❄️",color:"bg-blue-500",content:l("冬季",t),keyPoints:["黃金修復期","亥子丑月","水旺"]}],title:`關鍵季節&注意事項 (${t}指南)`,fullContent:"使用基礎季節分析。"}}}(p,t);return Response.json({success:!0,analysis:{concern:t,content:p,parsed:u,timestamp:new Date().toISOString()}})}catch(e){return console.error("Season Analysis Error:",e),Response.json({error:"Analysis generation failed"},{status:500})}}function l(e,r){return({財運:{春季:"印星旺，利學習、考證、維繫客戶/上司關係以保職位（護正財）。但木生火，野心易膨脹，嚴禁投資、合夥。辰月濕土稍緩燥。",夏季:"凶險巔峰期！巳午月（火）應流年劫財，破財風險最高！務必：極度節儉、只做必要支出、全力保工作、杜絕任何投機/合夥/借貸。",秋季:"一年中相對最利於財務操作的窗口（金氣壓火）。申月短暫緩解，酉月護財最佳，戌月謹慎處理財務。",冬季:"調候關鍵期，大局趨穩。利於覆盤、制定保守財務計畫、修復信用、低調儲蓄。子月最佳調候月，壓力緩解。"},健康:{春季:"木主肝膽，春季養肝正當時。適合戶外運動、早起鍛煉。注意情緒調節，避免肝氣鬱結。飲食宜清淡，多吃綠色蔬菜。",夏季:"生死攸關期！務必絕對避免：暴曬、高溫作業、劇烈運動、情緒激動、熬夜、辛辣油膩飲食。嚴格執行防暑降溫。",秋季:"相對緩和期（金氣壓火）。申月最佳調理窗口，利於滋陰潤燥。酉月繼續鞏固，重點保養肺與大腸。戌月注意脾胃保養。",冬季:"救命調候期！水旺制火潤燥。亥子月滋補腎陰最佳時機，穩固心神，修復元氣。"},事業:{春季:"印星助力，利於學習提升、建立專業形象、維護職場關係。木氣生發，適合制定年度計劃，但忌急躁冒進。",夏季:"火氣過旺易衝動，職場中需格外謹慎。避免與同事發生衝突，控制情緒表達。此期間不宜跳槽或重大職業變動。",秋季:"金氣收斂，適合總結工作成果，整理職業規劃。可考慮技能提升、資格認證。是展示專業能力的好時機。",冬季:"水主智慧，適合深度學習、研究規劃。可制定來年職業發展計劃，建立長期目標。是積蓄能量的重要時期。"},感情:{春季:"木氣生發，感情萌芽的好時機。單身者易遇良緣，有伴者關係升溫。但需注意不要過於理想化，保持現實期待。",夏季:"火氣旺盛易衝動，感情中容易發生爭執。需控制脾氣，避免因小事傷害感情。此期間不宜做重大感情決定。",秋季:"金氣收斂，適合深化感情關係。可考慮訂婚、結婚等重要決定。是檢視感情關係、做出承諾的好時機。",冬季:"水主情感深度，適合培養感情深度。可透過深度溝通增進理解，規劃未來。是修復關係、重建信任的時期。"}})[r]?.[e]||`${e}期間請根據個人情況謹慎分析。`}let c=new s.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/season-analysis/route",pathname:"/api/season-analysis",filename:"route",bundlePath:"app/api/season-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/season-analysis/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:p,workUnitAsyncStorage:u,serverHooks:g}=c;function d(){return(0,a.patchFetch)({workAsyncStorage:p,workUnitAsyncStorage:u})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{},96559:(e,r,t)=>{"use strict";e.exports=t(44870)}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[7719],()=>t(45928));module.exports=n})();