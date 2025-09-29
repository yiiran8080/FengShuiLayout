(()=>{var e={};e.id=7988,e.ids=[7988],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},13966:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>b,routeModule:()=>d,serverHooks:()=>f,workAsyncStorage:()=>h,workUnitAsyncStorage:()=>y});var n={};r.r(n),r.d(n,{POST:()=>g});var a=r(96559),i=r(48088),o=r(37719),s=r(32190);let l=process.env.API_KEY,m={1:{trigram:"坎",group:"東四命",element:"水",direction:"north",name:"坎卦"},2:{trigram:"坤",group:"西四命",element:"土",direction:"southWest",name:"坤卦"},3:{trigram:"震",group:"東四命",element:"木",direction:"east",name:"震卦"},4:{trigram:"巽",group:"東四命",element:"木",direction:"southEast",name:"巽卦"},6:{trigram:"乾",group:"西四命",element:"金",direction:"northWest",name:"乾卦"},7:{trigram:"兌",group:"西四命",element:"金",direction:"west",name:"兌卦"},8:{trigram:"艮",group:"西四命",element:"土",direction:"northEast",name:"艮卦"},9:{trigram:"離",group:"東四命",element:"火",direction:"south",name:"離卦"}},c={east:{trigram:"震宮",element:"木",star2025:"九紫右弼星",description:"吉",angle:90,wuxing:"火",energy:"陽"},southEast:{trigram:"巽宮",element:"木",star2025:"一白貪狼星",description:"吉",angle:135,wuxing:"水",energy:"陽"},south:{trigram:"離宮",element:"火",star2025:"二黑巨門星",description:"凶",angle:180,wuxing:"土",energy:"陰"},southWest:{trigram:"坤宮",element:"土",star2025:"八白左輔星",description:"吉",angle:225,wuxing:"土",energy:"陰"},west:{trigram:"兌宮",element:"金",star2025:"三碧祿存星",description:"凶",angle:270,wuxing:"金",energy:"陰"},northWest:{trigram:"乾宮",element:"金",star2025:"六白武曲星",description:"吉",angle:315,wuxing:"金",energy:"陽"},north:{trigram:"坎宮",element:"水",star2025:"七赤破軍星",description:"中性",angle:0,wuxing:"水",energy:"陽"},northEast:{trigram:"艮卦",element:"土",star2025:"五黃廉貞星",description:"凶",angle:45,wuxing:"土",energy:"陽"}},u={東四命:{大吉:["east","south","north","southEast"],大凶:["west","northWest","southWest","northEast"]},西四命:{大吉:["west","northWest","southWest","northEast"],大凶:["east","south","north","southEast"]}};async function $(e){try{let t=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是一位專業的風水師，精通八宅風水和玄空飛星學說。請根據用戶提供的信息，生成專業、實用的風水分析建議。回答必須使用繁體中文，並嚴格按照要求的格式輸出。"},{role:"user",content:e}],temperature:.3,max_tokens:4e3})});if(!t.ok)throw Error(`DeepSeek API error: ${t.status}`);let r=await t.json(),n=r.choices?.[0]?.message?.content;if(!n)throw Error("No content from DeepSeek API");return n}catch(e){throw e}}function p(e){return["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"][(e-1900)%12]}async function g(e){try{let t;let{rooms:r,userProfile:n,designSummary:a}=await e.json();if(!r||!n)return s.NextResponse.json({error:"Missing rooms or userProfile data"},{status:400});if(!l)return s.NextResponse.json({error:"AI service not configured"},{status:500});try{t=n.mingGuaInfo&&n.mingGuaInfo.name?n.mingGuaInfo:function(e,t){let r,n;let a=parseInt(e);if(isNaN(a)||a<1900||a>2100)throw Error("Invalid birth year");let i=!1;if("male"===t||"男"===t)i=!0;else if("female"===t||"女"===t)i=!1;else throw Error(`Unknown gender format: ${t}`);5===(n=i?0==(r=(100-a%100)%9)?9:r:0==(r=(a%100-4)%9)?9:r)&&(n=i?2:8);let o=m[n];return{mingGuaNumber:n,...o}}(n.birthYear,n.gender)}catch(e){return s.NextResponse.json({error:"Failed to calculate Ming Gua: "+e.message},{status:500})}let i=[],o=r.filter(e=>e&&e.direction&&(e.roomType||e.data?._type||e.type)).map(async e=>{let r,a;if("center"===e.direction)r={direction:"center",flyingStar:"五黃",element:"土",starType:"凶",description:"中宮位，房屋的心臟地帶"},a="中性";else{if(!(r=c[e.direction]))return null;a=function(e,t){let r=u[e]?.大吉||[],n=u[e]?.大凶||[];return r.includes(t)?"大吉":n.includes(t)?"大凶":"中性"}(t.group,e.direction)}let i="center"===e.direction||"大吉"===a,o=e.roomType||e.data?._type||e.data?.type||e.type;o=({living_room:"客廳",bedroom:"臥室",dining_room:"餐廳",kitchen:"廚房",bathroom:"浴室",study_room:"書房",storage_room:"儲物房",balcony:"陽台",garden:"花園",garage:"車庫",corridor:"走廊",room:"房間"})[o]||o||"房間";let s={roomId:e.id,direction:e.direction,roomType:o,fengShuiData:r,bazhaiFortune:a},l=function(e,t,r){let n=e.direction,a=e.roomType;e.fengShuiData;let i=e.bazhaiFortune,o={east:{flyingStar:"九紫右弼星",element:"火",starType:"吉",bazhaiName:"五鬼"},southEast:{flyingStar:"一白貪狼星",element:"水",starType:"吉",bazhaiName:"禍害"},south:{flyingStar:"二黑巨門星",element:"土",starType:"凶",bazhaiName:"六煞"},southWest:{flyingStar:"八白左輔星",element:"土",starType:"吉",bazhaiName:"伏位"},west:{flyingStar:"七赤破軍星",element:"金",starType:"凶",bazhaiName:"延年"},northWest:{flyingStar:"三碧祿存星",element:"木",starType:"凶",bazhaiName:"天醫"},north:{flyingStar:"四綠文曲星",element:"木",starType:"吉",bazhaiName:"絕命"},northEast:{flyingStar:"五黃廉貞星",element:"土",starType:"凶",bazhaiName:"生氣"},center:{flyingStar:"六白武曲星",element:"金",starType:"吉",bazhaiName:"中宮"}}[n];o.starType;let s={臥室:{mainFurniture:["床","衣櫃","梳妝台","床頭櫃","衣帽架"],activities:["睡眠","休息","更衣"],placement:"床頭擺放",colors:"床品顏色",taboos:"睡眠禁忌",forbidden:["沙發","茶几","餐桌","爐灶","馬桶","洗手盆","電視櫃"],specificNote:"這是臥室，絕對不可提及客廳家具如沙發、茶几、電視櫃等"},客廳:{mainFurniture:["沙發","茶几","電視櫃","書櫃","展示櫃"],activities:["聚會","休閒","接待客人"],placement:"沙發擺放",colors:"裝潢色調",taboos:"聚會禁忌",forbidden:["床","馬桶","洗手盆","爐灶","浴缸","衣櫃"],specificNote:"這是客廳，應專注於會客、娛樂相關的家具配置"},廚房:{mainFurniture:["爐灶","冰箱","水槽","櫥櫃","餐具櫃","工作台"],activities:["烹飪","食物處理","儲存食物"],placement:"爐灶位置",colors:"廚具色彩",taboos:"烹飪禁忌",forbidden:["床","沙發","茶几","馬桶","洗手盆","電視櫃","書櫃"],specificNote:"這是廚房，絕對不可提及客廳家具如沙發、茶几、電視櫃、書櫃等"},浴室:{mainFurniture:["馬桶","洗手盆","浴缸","鏡子","收納櫃","毛巾架"],activities:["洗浴","如廁","梳洗"],placement:"衛浴設備",colors:"瓷磚顏色",taboos:"洗浴禁忌",forbidden:["床","沙發","茶几","爐灶","餐桌","衣櫃","電視櫃","書櫃"],specificNote:"這是浴室，只能提及衛浴相關設備"},書房:{mainFurniture:["書桌","椅子","書櫃","檯燈","文件櫃"],activities:["學習","工作","閱讀"],placement:"書桌朝向",colors:"書房色調",taboos:"學習禁忌",forbidden:["床","沙發","茶几","馬桶","洗手盆","爐灶","餐桌"],specificNote:"這是書房，應專注於學習工作相關的家具配置"},餐廳:{mainFurniture:["餐桌","餐椅","餐櫃","酒櫃","侍餐台"],activities:["用餐","聚餐","家庭聚會"],placement:"餐桌擺放",colors:"餐廳色調",taboos:"用餐禁忌",forbidden:["床","馬桶","洗手盆","浴缸","沙發","茶几"],specificNote:"這是餐廳，應專注於用餐相關的家具配置"},陽台:{mainFurniture:["植物盆栽","花架","遮陽傘","休閒椅","收納櫃"],activities:["休閒","觀景","晾曬","園藝"],placement:"植物擺放",colors:"陽台色調",taboos:"陽台禁忌",forbidden:["床","沙發","茶几","電視櫃","書櫃","馬桶","洗手盆","爐灶","餐桌"],specificNote:"這是陽台，主要以植物盆栽和簡單休閒設施為主，不可提及室內家具如沙發、茶几、電視櫃等"}},l=s[a]||s["客廳"],m=l.mainFurniture.join("、"),c=l.forbidden.join("、"),u=r.element,$=r.group,p=o.bazhaiName,g="吉"===o.starType;return 1996==t.birthYear&&"male"===t.gender&&r.name,`
你是一位專業風水師，請根據以下信息生成專業的${a}風水分析報告。

【嚴重警告】：${l.specificNote}

【命卦確認】：
⚠️ 命主命卦為：${r.name}（${u}元素，${$}）
⚠️ 必須在所有個人化建議中使用此命卦，絕不可使用其他命卦！
⚠️ 禁止使用坤卦、艮卦等其他命卦，只能使用：${r.name}

【房間限制】：
• 房間類型：${a}
• 只能提及這些家具：${m}
• 絕對禁止提及：${c}
• 如果提及禁用家具，分析將被拒絕

基礎信息：
• 房間編號：${e.roomId||`${a}-${n}`} （確保每個房間分析的獨特性）
• 房間方位：${n}
• 命主信息：${t.birthYear}年出生${"male"===t.gender?"男":"女"}性
• 命卦：${r.name}（${$}，${u}）
• 八宅位置：${p}（${"大吉"===i?"吉位":"凶位"}）
• 2025年飛星：${o.flyingStar}（${o.element}，${o.starType}星）
• 主要活動：${l.activities.join("、")}

【絕對要求】：
1. 每個建議必須檢查是否適合${a}
2. 只能提及${a}相關的${m}
3. 絕不可提及${c}
4. 所有建議必須符合${a}的實際功能
5. 在生成前必須再次確認房間類型為${a}
6. 針對房間編號${e.roomId||""}，提供該特定房間的獨特分析（即使同類型房間也需不同建議）

請按以下嚴格的JSON格式輸出：

{
  "yearSummary": "${a}位於${n}方，2025年飛星${o.flyingStar}屬${o.element}（${o.starType}星），八宅位置為${p}。對${$}的${r.name}卦命主在${a}中進行${l.activities.join("、")}活動的具體影響分析，包含星宿能量、方位特性、對命主的個人化影響，約120-150字",
  
  "recommendations": {
    "furniture": [
      "針對${m.split("、")[0]}的${a}專屬擺放建議，考慮${n}方位風水",
      "針對${m.split("、")[1]||m.split("、")[0]}的${a}配置建議，結合${p}位置特性", 
      "針對${m.split("、")[2]||m.split("、")[0]}的${a}朝向建議，配合${o.element}元素",
      "其他${m}在${a}中的專業風水擺放要點"
    ],
    "colors": [
      "適合${a}的主色調建議，基於${o.element}元素五行相生",
      "適合${a}的輔助色彩，考慮${u}命卦元素平衡", 
      "${a}中應避免的顏色及風水原因，特別是與${o.flyingStar}相克色彩",
      "${a}的季節性色彩調整，配合2025年流年特點"
    ],
    "habits": [
      "針對${r.name}卦命主在${a}中${l.activities.join("、")}的個人化行為建議",
      "結合${a}功能的具體生活指導，配合${p}位置影響",
      "考慮${o.flyingStar}能量的${a}使用習慣建議", 
      "配合${$}特質的${a}日常作息建議"
    ],
    "items": [
      "適合${a}的風水物品，針對${g?"吉星":"凶星"}位置的專業建議",
      "配合${o.flyingStar}的${a}調理擺設",
      "增強${u}元素的${a}專用物品推薦",
      "針對${a}特定功能的實用風水用品"
    ]
  },
  
  "comprehensiveAdvice": {
    "overall": "${a}整體格局分析：詳述此${a}在整個住宅中的風水角色，${o.flyingStar}對${a}空間氣場的影響，以及與其他房間的風水互動。分析${p}位置對${a}功能的影響，提供針對性優化建議。120-150字",
    
    "timing": "${a}最佳使用時間：根據${o.flyingStar}時辰特性，詳細說明${a}進行${l.activities.join("、")}的最佳時段。結合${r.name}卦命主個人節律，推薦${a}的日常使用安排。包含適合和需要避免的具體時間。120-150字",
    
    "seasonal": "${a}季節性注意：分析${o.element}元素四季變化，詳述${a}在春夏秋冬各季節的風水要點。包含${a}的季節性調整、針對${o.flyingStar}的季節化解或強化措施。120-150字",
    
    "personal": "${a}個人化建議：⚠️必須使用命卦${r.name}（${u}元素），絕不可使用其他命卦！深度結合${r.name}卦（${u}元素）特質，提供專屬於命主的${a}風水建議。分析個人五行與${o.element}在${a}中的相互作用，推薦個性化的空間布局和專屬風水用品。120-150字",
    
    "maintenance": "${a}維護建議：提供${a}的長期風水維護指南，包含定期清潔、能量更新、擺設調整的具體方法。詳述如何保持${o.flyingStar}在${a}中的正面能量，避免負面影響。提供${a}的日常和年度維護步驟。120-150字"
  }
}

【最終檢查清單】：
✓ 確認房間類型：${a}
✓ 只提及允許家具：${m}  
✓ 絕不提及禁用家具：${c}
✓ 所有建議符合${a}實際功能
✓ JSON格式完全正確
✓ 使用繁體中文和專業風水術語
`}(s,n,t),m=await $(l);return{roomId:e.id,roomType:o,direction:e.direction,fengShuiData:r,bazhaiFortune:a,mingGuaCompatibility:i,aiAnalysis:m,position:e.position,size:e.size,timestamp:new Date().toISOString()}}),g=await Promise.all(o);if(i.push(...g.filter(e=>null!==e)),0===i.length)return s.NextResponse.json({error:"No valid rooms found for analysis"},{status:400});let d=function(e,t,r){let n=e.filter(e=>"大吉"===e.bazhaiFortune),a=e.filter(e=>"大凶"===e.bazhaiFortune),i=e.map(e=>e.direction).join("、"),o=e.map(e=>e.roomType).join("、"),s=r.element,l=t.birthYear,m="male"===t.gender?"男":"女",c=2025-parseInt(l);return`
你是一位資深風水師，請根據以下整體住宅信息生成專業的八宅綜合分析報告。

基礎住宅信息：
• 命主：${l}年出生${m}性（${c}歲）
• 命卦：${r.name}（${r.group}，${r.element}）
• 涉及房間：${o}
• 覆蓋方位：${i}
• 吉位房間：${n.length}個
• 凶位房間：${a.length}個
• 分析年份：2025年（乙巳蛇年）

【要求】：請生成完整的綜合風水分析，包含：

請按以下JSON格式輸出：

{
  "overallAnalysis": "全屋風水綜合分析：基於${r.name}卦命主的整體住宅風水評估，結合2025年飛星布局，詳述住宅的總體風水格局、能量流向、以及對居住者的綜合影響。分析吉凶房間的分佈平衡，提出整體優化策略。200-250字",
  
  "personalMingGuaAnalysis": "個人命卦深度分析：詳述${r.name}卦（${r.group}，${r.element}）的五行特質、個性特點、運勢傾向。分析命主與當前住宅的匹配度，以及2025年的個人運勢趨勢。結合年齡（${c}歲）和性別（${m}性）的生命階段特點，提供個性化的風水調整建議。200-250字",
  
  "annualForecast": "2025年運勢預測：基於命主${r.name}卦與2025年玄空飛星的互動，詳細預測各方面運勢發展。包含事業、財運、健康、感情等方面的具體走向，指出需要特別注意的月份和方位，提供全年的風水調整時機建議。分析流年對住宅各房間的影響變化。200-250字",
  
  "recommendations": {
    "layout": "空間布局優化建議：基於八宅理論和飛星布局，提供具體的房間功能調整、家具重新配置、空間動線優化等建議",
    "colors": "整體色彩搭配方案：結合命主${s}元素和各房間的飛星特性，提供全屋色彩協調方案",
    "timing": "重要活動時機選擇：提供搬遷、裝修、重大決策等重要活動的最佳時機建議",
    "remedies": "化煞增運措施：針對凶位房間的具體化解方法，以及吉位房間的能量強化建議"
  },
  
  "monthlyGuidance": {
    "spring": "春季風水要點（2-4月）：詳述春季的風水調整重點，包含季節轉換時的注意事項",
    "summer": "夏季風水要點（5-7月）：夏季的風水維護和能量調節建議", 
    "autumn": "秋季風水要點（8-10月）：秋季的風水布局調整和運勢提升方法",
    "winter": "冬季風水要點（11月-1月）：冬季的風水保養和來年準備建議"
  }
}

【輸出要求】：
- 嚴格按照JSON格式輸出，確保可被程式正確解析
- 內容專業實用，避免空泛理論
- 使用繁體中文和傳統風水術語
- 每個建議都要具體可執行
- 結合現代生活實際情況
`}(i,n,t),h=await $(d);console.log("About to generate yearly advice for gender:",n.gender);let y=function(e,t){let r=new Date().getFullYear(),n=r-parseInt(e.birthYear),a="male"===e.gender?"男":"female"===e.gender?"女":e.gender;return console.log("Yearly Advice - User Profile:",e),console.log("Yearly Advice - Detected Gender:",a),`你是一位資深的風水大師，請根據以下信息為用戶生成${r}年度的個人化風水建議：

**重要提醒：用戶為${a}性，所有分析和建議都必須基於${a}性的特質和需求，請勿混淆性別！**

【用戶基本資料】：
- 出生年份：${e.birthYear}年
- 性別：${a}性 (重要！請確認這是${a}性用戶)
- 年齡：${n}歲
- 命卦：${t.name}（${t.group}，五行屬${t.element}）
- 生肖：${p(e.birthYear)}

【分析要求】：
請提供專業、實用的年度風水建議，內容要結合用戶的個人命卦特質和${r}年的流年運勢。
**所有建議都必須適用於${a}性用戶，包括但不限於：服裝顏色建議、飾品選擇、房間布局偏好等。**

請嚴格按照以下JSON格式輸出：

{
  "currentYear": "${r}年度重點提醒：結合${a}性用戶命卦${t.name}和流年特點，分析本年度的整體運勢趨勢，重點提醒需要注意的方位和時機，提供具體的風水調整建議。內容要實用具體，避免空泛理論。120-150字",
  
  "nineStarCycle": "下元九運影響分析：詳述2024-2043年九運期間對${a}性${t.name}卦命主的影響，分析九紫火星當運對${t.element}元素命主的具體影響，提供這個20年週期內的風水策略建議。120-150字",
  
  "personalizedAdvice": "個人化年度建議：基於${n}歲${a}性${t.name}卦命主的特質，結合生命階段和運勢週期，提供本年度的個人化風水實踐建議。包含適合${a}性的居家布局、重要決策時機、季節性調整等具體可行的建議。120-150字"
}

【輸出要求】：
- 嚴格按照JSON格式輸出，確保可被程式正確解析
- 使用繁體中文和傳統風水術語
- 內容要專業準確，結合用戶的具體命卦特質
- 建議要實用可執行，避免抽象理論
- 每個建議控制在120-150字之間
- **請確保性別資訊正確：用戶為${a}性，所有建議都要符合${a}性的需求和特質**
- 如果是男性：重點關注事業運、財運、健康等方面的風水建議
- 如果是女性：可以關注人際關係、家庭和諧、美容健康等方面
`}(n,t);console.log("Yearly advice prompt includes gender:",y.includes(n.gender));let f=await $(y);console.log("AI yearly advice response preview:",f.substring(0,200));let b=null;try{b=JSON.parse(f)}catch(e){console.error("Failed to parse yearly advice:",e),b={currentYear:"正在為您量身定制年度風水建議...",nineStarCycle:"正在分析九運週期對您的影響...",personalizedAdvice:"正在生成個人化建議..."}}console.log("About to generate comprehensive advice for gender:",n.gender);let v=function(e,t,r){let n=new Date().getFullYear(),a=n-parseInt(t.birthYear),i="male"===t.gender?"男":"female"===t.gender?"女":t.gender;console.log("Comprehensive Advice - User Profile:",t),console.log("Comprehensive Advice - Detected Gender:",i);let o=e.filter(e=>e.fengShuiAnalysis?.starType==="吉"||"吉"===e.bazhaiFortuneResult),s=e.filter(e=>e.fengShuiAnalysis?.starType==="凶"||"凶"===e.bazhaiFortuneResult),l=e.map(e=>({type:e.roomType||e.type,direction:e.direction,fortune:e.bazhaiFortuneResult,element:e.fengShuiAnalysis?.element,star:e.fengShuiAnalysis?.flyingStar}));return`你是一位資深的風水大師，請根據以下完整的房屋風水分析，為用戶生成專業的綜合建議：

【用戶基本資料】：
- 命卦：${r.name}（${r.group}，五行屬${r.element}）
- 年齡：${a}歲，性別：${i}性
- 生肖：${p(t.birthYear)}

【房屋風水分析】：
- 總房間數：${e.length}間
- 吉位房間數：${o.length}間
- 凶位房間數：${s.length}間

【各房間詳情】：
${l.map(e=>`- ${e.type}：位於${e.direction}方，${e.fortune}位，${e.element}元素，${e.star}星`).join("\n")}

【分析要求】：
請提供專業、全面的風水綜合建議，內容要實用具體，避免空泛理論。
**重要提醒：用戶為${i}性，請確保所有建議都符合${i}性的特質和需求。**

請嚴格按照以下格式輸出純文字內容（不要JSON格式）：

【${n}年度風水總結】
根據您的${r.name}卦命格特性與居住空間的完整分析... (分析整體格局優勢與挑戰，150-200字)

【整體居住策略】
建議您以個人命卦為核心，結合房屋各區域的風水特性... (提供具體的布局調整策略，150-200字)

【生活習慣調整】
配合各房間的風水特性調整日常作息... (給出實用的生活建議，100-150字)

【長期發展建議】
風水布局需要時間發酵，建議您耐心執行各項建議... (提供長期規劃和維護建議，100-150字)

【輸出要求】：
- 使用繁體中文和傳統風水術語
- 內容要專業準確，結合用戶的具體命卦和房屋情況
- 建議要實用可執行，避免抽象理論
- 總字數控制在500-700字之間
- 輸出純文字，不要使用JSON或其他格式
- **請務必確保所有內容都適用於${i}性用戶**
`}(i,n,t);console.log("Comprehensive advice prompt includes gender:",v.includes(n.gender));let S=await $(v);return console.log("AI comprehensive advice response preview:",S.substring(0,200)),s.NextResponse.json({success:!0,data:{roomAnalyses:i,overallAnalysis:h,yearlyAdvice:b,comprehensiveAdvice:S,mingGuaInfo:t,userProfile:n,designSummary:a||{compassRotation:0},analysisDate:new Date().toISOString(),apiVersion:"2.0.0"}})}catch(e){return console.error("API Error:",e.message),s.NextResponse.json({error:"Analysis failed",details:e.message},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/bazhai-analysis/route",pathname:"/api/bazhai-analysis",filename:"route",bundlePath:"app/api/bazhai-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/bazhai-analysis/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:h,workUnitAsyncStorage:y,serverHooks:f}=d;function b(){return(0,o.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:y})}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[7719,580],()=>r(13966));module.exports=n})();