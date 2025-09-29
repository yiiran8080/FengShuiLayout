(()=>{var e={};e.id=7848,e.ids=[7848],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},46739:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>y,routeModule:()=>d,serverHooks:()=>x,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>h});var s={};r.r(s),r.d(s,{POST:()=>l});var n=r(96559),o=r(48088),a=r(37719),i=r(32190);let c=process.env.DEEPSEEK_API_KEY||process.env.API_KEY;async function u(e,t={}){try{let r=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:"deepseek-chat",messages:e,temperature:t.temperature||.7,max_tokens:t.max_tokens||1e3,stream:!1})});if(!r.ok)throw Error(`DeepSeek API error: ${r.status}`);return(await r.json()).choices[0].message.content}catch(e){throw console.error("DeepSeek API call failed:",e),e}}async function p(e){let{problem:t,concern:r,name:s,birthday:n}=e,o=`你是一位資深的命理師，專精八字、風水和人生指導，擁有30年的實戰經驗。
	
請根據用戶的具體問題和關注領域，提供個人化、實用的建議和解答。

要求：
1. 回答必須使用繁體中文
2. 語氣溫和、專業、具有同理心
3. 提供具體可行的建議，避免空泛的說辭
4. 結合命理智慧與現實考量
5. 回答格式為JSON，包含title和content兩個字段
6. title應該是簡潔的標題（10字以內）
7. content應該是詳細的建議內容（150-300字）

回答格式範例：
{
  "title": "健康管理要點",
  "content": "基於您的問題..."
}`,a=`用戶資訊：
姓名：${s}
生日：${n}
關注領域：${r}
具體問題：${t}

請針對這個具體問題，結合用戶的關注領域，提供個人化的專業建議。重點關注實用性和可操作性。`;try{let e;let t=await u([{role:"system",content:o},{role:"user",content:a}],{temperature:.7,max_tokens:1e3});try{let s=t.match(/\{[\s\S]*\}/);e=s?JSON.parse(s[0]):{title:`${r}指導建議`,content:t.trim()}}catch(s){console.error("Failed to parse AI response:",s),e={title:`${r}指導建議`,content:t.trim()}}return e}catch(e){return console.error("AI generation failed:",e),({健康:{title:"健康管理要點",content:"建議定期健康檢查，保持規律作息與適度運動。注重飲食均衡，避免過度勞累。如有身體不適應及時就醫，以專業醫療建議為主。"},財運:{title:"理財策略重點",content:"建議採取穩健投資策略，避免高風險投機。重視現金流管理，建立緊急基金。投資前需充分了解風險，分散投資組合。"},感情:{title:"情感經營要點",content:"注重溝通技巧的提升，學會換位思考與包容。建立健康的相處模式，給彼此適當空間。遇到衝突時保持冷靜，尋求雙贏解決方案。"},事業:{title:"職涯發展建議",content:"專注提升核心競爭力，持續學習新技能。建立良好人際關係網絡，把握合適機會但避免過度冒進。制定明確職涯規劃。"}})[r]||{title:"綜合指導原則",content:"建議採取務實穩健的態度面對問題，充分收集資訊後再做決策。保持積極心態，但也要有合理預期。"}}}async function l(e){try{let{userInfo:t}=await e.json();if(!t||!t.problem||!t.concern)return i.NextResponse.json({error:"缺少必要的用戶資訊"},{status:400});let r=await p(t);return i.NextResponse.json({success:!0,solution:r})}catch(e){return console.error("Question Focus Analysis API Error:",e),i.NextResponse.json({error:"分析服務暫時不可用，請稍後再試",fallback:!0},{status:500})}}let d=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/question-focus-analysis/route",pathname:"/api/question-focus-analysis",filename:"route",bundlePath:"app/api/question-focus-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/question-focus-analysis/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:m,workUnitAsyncStorage:h,serverHooks:x}=d;function y(){return(0,a.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:h})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7719,580],()=>r(46739));module.exports=s})();