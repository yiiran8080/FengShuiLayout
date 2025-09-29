(()=>{var e={};e.id=9101,e.ids=[9101],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},93260:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>l,serverHooks:()=>d,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>g});var o={};t.r(o),t.d(o,{POST:()=>p});var s=t(96559),a=t(48088),n=t(37719),i=t(32190);let c=process.env.DEEPSEEK_API_KEY;async function p(e){try{let r;let{specificProblem:t}=await e.json();if(!t)return i.NextResponse.json({error:"缺少具體問題描述"},{status:400});console.log("\uD83D\uDD0D 分析問題類別:",t),console.log("\uD83D\uDCCF 問題長度:",t?.length),console.log("\uD83D\uDCCA 問題類型:",typeof t);let o=`你是一位專業的八字命理問題分類專家。請分析以下感情問題並分類到對應類別：

問題：${t}

請判斷此問題屬於以下哪一個類別，並返回JSON格式：

1. 命盤衝突類 (mingpan_conflict)
- 核心意圖：診斷雙方屬性衝突並提供轉化方案
- 語言特徵：相沖/相剋/合不合/能否結婚/八字不合/五行相剋
- 模型辨識關鍵：問題是否聚焦雙方能量互動？是否需解釋五行生剋或生肖配對？

2. 感情降溫類 (emotion_cooling)
- 核心意圖：解決現存負面狀態或惡化趨勢
- 語言特徵：怎麼辦/如何化解/爭吵/降溫/感情變淡/冷戰/疏離
- 模型辨識關鍵：問題是否描述已發生的困境？是否需風水調整或能量干預？

3. 特殊情境類 (special_situation)
- 核心意圖：非常規條件下的關係維持策略
- 語言特徵：遠距/異國/分隔/特殊情況/異地戀/工作分離
- 模型辨識關鍵：問題是否涉及空間阻隔或非傳統關係？

4. 禁忌破解類 (taboo_breaking)
- 核心意圖：顛覆負面命理標籤的認知重建
- 語言特徵：剋夫/剋妻/命格不好/注定/破解/不吉利/命犯
- 模型辨識關鍵：問題是否包含宿命論論斷？是否需解構認知？

請返回JSON格式：
{
  "category": "分類代碼",
  "categoryName": "分類名稱",
  "confidence": 0.9,
  "reason": "分類原因說明",
  "keyFeatures": ["關鍵特徵1", "關鍵特徵2"]
}`,s=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是專業的命理問題分類專家，請精確分析並返回JSON格式結果。"},{role:"user",content:o}],temperature:.3,max_tokens:500})});if(!s.ok)throw Error(`DeepSeek API error: ${s.status}`);let a=(await s.json()).choices[0].message.content;console.log("\uD83E\uDD16 AI分類結果:",a);try{let e=a.match(/\{[\s\S]*\}/);if(e)r=JSON.parse(e[0]);else throw Error("No JSON found in response")}catch(e){console.error("JSON解析錯誤:",e),r={category:"emotion_cooling",categoryName:"感情降溫類",confidence:.7,reason:"AI解析失敗，使用默認分類",keyFeatures:["解析失敗"]}}return console.log("\uD83D\uDCCA 最終分類結果:",r),i.NextResponse.json({success:!0,categorization:r,originalProblem:t})}catch(e){return console.error("❌ 問題分類失敗:",e),i.NextResponse.json({error:"問題分類失敗",details:e.message,categorization:{category:"emotion_cooling",categoryName:"感情降溫類",confidence:.5,reason:"系統錯誤，使用默認分類",keyFeatures:["系統錯誤"]}},{status:500})}}let l=new s.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/analyze-problem-category/route",pathname:"/api/analyze-problem-category",filename:"route",bundlePath:"app/api/analyze-problem-category/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/analyze-problem-category/route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:u,workUnitAsyncStorage:g,serverHooks:d}=l;function m(){return(0,n.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:g})}},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),o=r.X(0,[7719,580],()=>t(93260));module.exports=o})();