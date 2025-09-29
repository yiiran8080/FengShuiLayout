(()=>{var e={};e.id=6690,e.ids=[6690],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},42363:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>g,routeModule:()=>h,serverHooks:()=>d,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>$});var s={};t.r(s),t.d(s,{POST:()=>p});var a=t(96559),n=t(48088),o=t(37719),i=t(32190);let c=process.env.DEEPSEEK_API_KEY||process.env.API_KEY;async function u(e,r={}){try{let t=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:"deepseek-chat",messages:e,temperature:r.temperature||.7,max_tokens:r.max_tokens||2e3,stream:!1})});if(!t.ok)throw Error(`DeepSeek API error: ${t.status}`);return(await t.json()).choices[0].message.content}catch(e){throw console.error("DeepSeek API call failed:",e),Error("AI分析服務暫時不可用，請稍後再試")}}function l(e){return{stem:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"][(e-4)%10],branch:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"][(e-4)%12]}}async function p(e){try{let{userInfo:r,currentYear:t=2025}=await e.json();if(!r)return i.NextResponse.json({error:"用戶信息缺失"},{status:400});let s=r.concern||"事業",a=r.problem||"",n=r.birthDateTime||"",o=r.gender||"male",c=function(e){if(!e)return null;try{let r=new Date(e),t=r.getFullYear(),s=r.getMonth()+1,a=r.getDate(),n=r.getHours(),o=l(t),i=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],c=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],u=i[(s-1)%10],p=c[(s-1)%12],h=i[(a-1)%10],m=c[(a-1)%12],$=i[Math.floor(n/2)%10],d=c[Math.floor(n/2)%12];return{year:`${o.stem}${o.branch}`,month:`${u}${p}`,day:`${h}${m}`,hour:`${$}${d}`}}catch(e){return console.error("BaZi calculation error:",e),null}}(n),p=l(t),h=`你是一位資深八字命理師，精通干支作用與流年互動分析。請根據用戶的八字和關注領域提供專業的流年干支作用分析。

分析要求：
1. 必須基於實際的干支五行生克制化原理
2. 針對用戶具體關注的${s}領域提供針對性分析
3. 結合流年${t}年（${p.stem}${p.branch}）的特性
4. 提供具體的實際表現和建議

請以專業但易懂的方式回應，使用繁體中文。`,m=`請分析以下信息：

客戶資料：
- 出生時間：${n}
- 性別：${"male"===o?"男性":"女性"}
- 八字：${c?`${c.year} ${c.month} ${c.day} ${c.hour}`:"需要進一步計算"}
- 關注領域：${s}
- 具體問題：${a||"整體運勢"}
- 當前年份：${t}年（${p.stem}${p.branch}）

**重要格式要求**：請嚴格按照以下markdown格式回應：

### 1. 【流年干支作用】
分析${t}年${p.stem}${p.branch}對原局的整體作用...

### 2. 【天干${p.stem}效應】
天干${p.stem}為**正官**（示例）
1. **職權提升**：具體分析...
2. **合庚減洩**：具體分析...
3. **官星透出**：具體分析...

### 3. 【地支${p.branch}效應】
地支${p.branch}為**偏印**（示例）
1. **學習能力**：具體分析...
2. **創意思維**：具體分析...
3. **人際變化**：具體分析...

### 4. 【實際表現】
在${s}領域的具體表現：
- 具體會在哪些時間點或情況下出現變化
- 實際的影響程度和表現形式
- 可能遇到的具體情況或挑戰

### 5. 【注意事項】
**風險提醒**：
針對${s}領域可能出現的具體風險，包括：
- 時間節點上的注意事項
- 可能遇到的困難或障礙
- 需要避免的行為或決策

**建議指引**：
針對${s}領域的具體建議：
- 最佳行動時機和策略
- 如何化解不利因素
- 具體的改善方法和步驟

**總結要點**：
結合八字和流年特點，總結${s}在${t}年的整體運勢走向，提供核心建議和關鍵提醒。

請確保每個部分都針對${s}領域提供具體、實用的內容，避免使用通用的建議。`;console.log("\uD83D\uDE80 Calling DeepSeek API for GanZhi analysis...");let $=await u([{role:"system",content:h},{role:"user",content:m}],{max_tokens:2e3,temperature:.7});return console.log("✅ AI GanZhi analysis completed"),i.NextResponse.json({success:!0,analysis:$,baZi:c,yearGanZhi:p,userInfo:{concern:s,problem:a,birthday:n,gender:o}})}catch(e){return console.error("\uD83D\uDCA5 GanZhi Analysis API Error:",e),i.NextResponse.json({success:!1,error:"生成干支分析時發生錯誤",message:e.message},{status:500})}}let h=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/ganzhi-analysis/route",pathname:"/api/ganzhi-analysis",filename:"route",bundlePath:"app/api/ganzhi-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/ganzhi-analysis/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:m,workUnitAsyncStorage:$,serverHooks:d}=h;function g(){return(0,o.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:$})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),s=r.X(0,[7719,580],()=>t(42363));module.exports=s})();