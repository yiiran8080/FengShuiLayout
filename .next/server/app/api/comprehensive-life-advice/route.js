(()=>{var e={};e.id=774,e.ids=[774],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},26178:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>l,serverHooks:()=>m,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>u});var s={};t.r(s),t.d(s,{POST:()=>p});var o=t(96559),n=t(48088),a=t(37719),i=t(32190);let c=process.env.DEEPSEEK_API_KEY;async function p(e){try{let r;let t=await e.text();if(!t)return console.error("Empty request body received"),i.NextResponse.json({error:"Empty request body"},{status:400});try{r=JSON.parse(t)}catch(e){return console.error("JSON parse error:",e.message,"Body:",t),i.NextResponse.json({error:"Invalid JSON in request body"},{status:400})}let{userInfo:s,wuxingData:o}=r;if(!s||!o)return i.NextResponse.json({error:"Missing required parameters: userInfo or wuxingData"},{status:400});let n=`你是資深的八字命理師，需要根據用戶的完整命理信息，提供綜合調理與人生建議的詳細分析。

用戶信息：
- 姓名：${s.name}
- 性別：${"male"===s.gender?"男":"女"}
- 出生日期：${s.birthDate}
- 出生時間：${s.birthTime}
- 出生地點：${s.location}
- 五行數據：${JSON.stringify(o)}

請按以下四個部分提供綜合建議：

**1. 五行調和**
- 明確首選/次要用神（例：「以X為樞要，Y為輔佐」）
- 分項說明：
  ① 補[元素]：（至少3項具體方法，如方位/色彩/器物/時辰禁忌）
  ② 固[元素]：（至少2項生活化建議，含飲食/材質/作息指引）
  ③ 避[元素]：（明確禁忌組合，如「忌X色疊加Y材質」+關鍵時段提醒）
- 需包含「元素互動關係」解釋（例：「A生B以制C」）

**2. 身心養護**
- 運動：列出2種契合用神的運動類型（註明最佳時段/環境，如「申時林間習練」）
- 靜修：設計1項日課（含具體操作如「按壓X穴位」或「焚Y香靜坐」）
- 情緒：針對命局最弱十神提出調解法（例：「透過Z藝涵養[十神]之氣」）

**3. 事業方向**（分大運階段論述）
- 近期（20-30歲）：核心格局、推薦2個行業方向、預警1項職場風險
- 中期（30-40歲）：格局轉化關鍵、轉型策略、決策輔助建議
- 遠期（40歲後）：運勢特質、知識沉澱形式、養生事業活動

**4. 人際調衡要點**
根據命理分析分三個main point：
- [合作]：（例：「技術入股須公證專利權屬」）
- [領導]：（如「庚金透干時以剛中帶韌化解爭執」）
- [情感]：（如「宜[X]旺於月令者」）（說明方位/法器/材質）

行文規範：
① 術語系統：嚴格採用「十神（正官/食神等）+五行+干支」表述
② 數據錨點：所有建議需關聯命理參數
③ 實操導向：每條建議須可執行

返回格式必須是純JSON，包含以下結構：
{
    "wuxingHarmony": {
        "primaryGod": "首選用神",
        "secondaryGod": "次要用神",
        "summary": {
            "supplement": ["補充方法1", "補充方法2", "補充方法3"],
            "strengthen": ["固化方法1", "固化方法2"],
            "avoid": ["禁忌1", "禁忌2", "禁忌3"]
        },
        "detailed": "元素互動關係詳細解釋"
    },
    "healthWellness": {
        "exercise": ["運動方式1", "運動方式2"],
        "emotion": "情緒調解法",
        "detailed": "詳細養生指導"
    },
    "careerDirection": {
        "nearTerm": {
            "ageRange": "20-30歲",
            "pattern": "核心格局",
            "industries": ["行業1", "行業2"],
            "risk": "職場風險預警"
        },
        "midTerm": {
            "ageRange": "30-40歲", 
            "transformation": "格局轉化關鍵",
            "strategy": "轉型策略",
            "decision": "決策輔助建議"
        },
        "longTerm": {
            "ageRange": "40歲後",
            "fortune": "運勢特質",
            "knowledge": "知識沉澱形式",
            "wellness": "養生事業活動"
        }
    },
    "interpersonalBalance": {
        "cooperation": "合作要點",
        "leadership": "領導要點", 
        "emotional": "情感要點"
    }
}`;try{let e;let r=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:n}],temperature:.7,max_tokens:2e3})});if(!r.ok)throw Error(`DeepSeek API error: ${r.status}`);let t=await r.json(),s=t.choices[0]?.message?.content;if(!s)throw Error("No content received from DeepSeek API");let o=s;s.includes("```json")?o=s.replace(/```json\s*/g,"").replace(/\s*```/g,""):s.includes("```")&&(o=s.replace(/```\s*/g,"").replace(/\s*```/g,""));try{e=JSON.parse(o)}catch(e){throw console.error("Error parsing AI response:",e),console.error("Raw content:",s),console.error("Cleaned content:",o),Error("Invalid JSON response from AI")}for(let r of["wuxingHarmony","healthWellness","careerDirection","interpersonalBalance"])if(!e[r])throw Error(`Missing required field: ${r}`);return i.NextResponse.json({success:!0,analysis:e})}catch(e){return console.error("AI API Error:",e),i.NextResponse.json({success:!0,analysis:{wuxingHarmony:{primaryGod:"以木為樞要",secondaryGod:"土為輔佐",summary:{supplement:["日常著青碧服飾，東方青氣引動甲木根基","居室增置綠植意象，晨起面東而立調息","引少陽升發之氣，木方有運用神"],strengthen:["土性承載，建議多用陶器、棕黃織物及方形陳設","飲食偏重小米、南瓜等甘味食材，以回中宮脾胃之氣"],avoid:["慎避金火過盛之境，避免穿著白色、赤色服飾及金屬配飾","午時（11-13時）烈日曝曬需謹慎","忌金色疊加紅色材質的組合使用"]},detailed:"以木為樞要，土為輔佐，水為潤導。木為首選用神，當以東方青氣引動甲木根基，日常著青碧服飾、居室增置綠植盆景，晨起面東而立調息，引少陽升發之氣。土性承載，建議多用陶器、棕黃織物及方形陳設，飲食側重小米、南瓜等甘味食材，以固中宮脾胃之氣。慎避金火過盛之境，避免穿著白色、赤色服飾及金屬配飾，尤忌午時（11-13時）烈日曝曬。水星暗藏可微量補益，可於家中北位放置墨玉貔貅，既潤局中燥火，亦助官殺流通。"},healthWellness:{exercise:["晨間（卯時）進行快走或跑步，利用木旺時段生火","午時（11-13點）進行瑜伽或太極，強化火元素"],emotion:"透過書法或繪畫涵養正官之氣，穩定情緒",detailed:"動則循木土之性，宜行疏泄導引之術。早上可以練習太極或八段錦，這能舒展身心，幫助疏通經絡；在下午的時候可以去公園散步，接觸大地的能量，增強脾胃。靜修時可以選擇水木相生的方法，晚上點燃柏香靜坐，幫助舒緩心情；睡覺前可以用手掌按壓心臟和腎臟的穴位，促進能量流通。情緒上要避免因金和火的衝突而生氣，遇到問題時要學會柔韌應對，可以透過書法或茶道來放鬆心情。"},careerDirection:{nearTerm:{ageRange:"20-30歲",pattern:"食神生財格漸顯，創意表達能力突出",industries:["文化創意產業","教育培訓行業"],risk:"逢金旺年份須防契約糾紛，重大決策前宜諮詢水木屬性人士"},midTerm:{ageRange:"30-40歲",transformation:"傷官化土生財，轉向管理和整合型工作",strategy:"創建平台整合創意資源，發揮協調統籌能力",decision:"重大投資前諮詢木火屬性人士，避開金旺時段做決策"},longTerm:{ageRange:"40歲後",fortune:"食神吐秀，財庫大開，智慧與財富並進",knowledge:"編纂行業標準典籍，建立專業知識體系",wellness:"參觀文化產業園既養木氣亦啟發靈感"}},interpersonalBalance:{cooperation:"技術入股須公證專利權屬，合作協議需明確權責邊界",leadership:"庚金透干時以剛中帶韌化解爭執，決策前廣納眾議",emotional:"宜選擇水木旺於月令者為伴，坎位置黑曜石化解沖剋"}}})}}catch(e){return console.error("API Error:",e),i.NextResponse.json({error:"Internal server error"},{status:500})}}let l=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/comprehensive-life-advice/route",pathname:"/api/comprehensive-life-advice",filename:"route",bundlePath:"app/api/comprehensive-life-advice/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/comprehensive-life-advice/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:d,workUnitAsyncStorage:u,serverHooks:m}=l;function g(){return(0,a.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:u})}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[7719,580],()=>t(26178));module.exports=s})();