(()=>{var e={};e.id=5645,e.ids=[5645],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},16538:(e,t,n)=>{"use strict";n.r(t),n.d(t,{patchFetch:()=>y,routeModule:()=>d,serverHooks:()=>g,workAsyncStorage:()=>u,workUnitAsyncStorage:()=>p});var r={};n.r(r),n.d(r,{POST:()=>h});var a=n(96559),o=n(48088),s=n(37719),i=n(32190),l=n(74474);let m=new Map,c=new Map;async function h(e){let t=Math.random().toString(36).substring(2,15),n=null,r=null,a=null;try{let o;let{userInfo:s}=await e.json();if(!s)return i.NextResponse.json({error:"Missing user information"},{status:400});if(n=function(e){if(!e?.birthDateTime)return null;let t=new Date(e.birthDateTime);return`wuxing_${t.getFullYear()}_${t.getMonth()}_${t.getDate()}_${t.getHours()}_${e.gender||""}`}(s),console.log(`[${t}] Cache key: ${n}`),n&&m.has(n)){console.log(`[${t}] 🎯 RETURNING CACHED RESULT for ${n}`);let e=m.get(n);return i.NextResponse.json({...e,cached:!0,requestId:t,originalRequestId:e.requestId})}if(n&&c.has(n)){console.log(`[${t}] 🚨 REQUEST ALREADY PENDING for ${n}, waiting...`);try{let e=await c.get(n);return console.log(`[${t}] ✅ Got result from pending request`),i.NextResponse.json({...e,waitedForResult:!0,requestId:t,originalRequestId:e.requestId})}catch(e){console.log(`[${t}] ⚠️ Pending request failed, proceeding with new request`),c.delete(n)}}if(n){let e=new Promise((e,t)=>{r=e,a=t});c.set(n,e),console.log(`[${t}] 🔄 Created pending request for ${n}`)}let h=(e=>{if(!e?.birthDateTime)return{};let t=(0,l.Ay)(e.birthDateTime,e.gender),n=t.dayStem,r=t.dayStemWuxing,a=["木","火","土","金","水"],o=a.indexOf(r),s={正印:a[(o+4)%5],財星:a[(o+2)%5],官殺:a[(o+3)%5],劫比:r,食傷:a[(o+1)%5]};return{dayStem:n,dayStemElement:r,tenGodsElements:s,wuxingData:t}})(s),{tenGodsElements:d,wuxingData:u}=h;if(!process.env.API_KEY)return console.error(`[${t}] API_KEY environment variable is not set`),i.NextResponse.json({error:"API configuration error"},{status:500});let p=`
根據用戶八字信息，提供十神分析：

用戶信息：
- 性別: ${s.gender}
- 出生: ${new Date(s.birthDateTime).getFullYear()}年${new Date(s.birthDateTime).getMonth()+1}月${new Date(s.birthDateTime).getDate()}日 ${new Date(s.birthDateTime).getHours()}時
- 日主：${h.dayStem}${h.dayStemElement}

十神元素：正印${d.正印}、財星${d.財星}、官殺${d.官殺}、劫比${d.劫比}、食傷${d.食傷}

請返回簡潔的JSON格式分析：

{
  "tenGodsAnalysis": {
    "正印": {
      "name": "正印",
      "element": "${d.正印}",
      "meaning": "主學業、貴人、長輩緣",
      "expression": "個性化描述（80字以內）",
      "realManifestation": ["表現1（30字以內）", "表現2（30字以內）"],
      "warnings": {
        "title": "注意事項",
        "items": ["注意1（20字以內）", "注意2（20字以內）"]
      },
      "coreConflicts": {
        "title": "核心議題",
        "conflicts": [
          {
            "title": "主要挑戰",
            "color": "red",
            "description": "簡要描述（60字以內）",
            "example": "具體例子（40字以內）"
          },
          {
            "title": "發展機會",
            "color": "purple", 
            "description": "簡要描述（60字以內）",
            "example": "具體例子（40字以內）"
          },
          {
            "title": "平衡之道",
            "color": "green",
            "description": "簡要描述（60字以內）",
            "example": "具體例子（40字以內）"
          }
        ]
      }
    },
    "財星": {
      "name": "財星",
      "element": "${d.財星}",
      "meaning": "主財富、物質、配偶",
      "expression": "個性化描述（80字以內）",
      "realManifestation": ["表現1", "表現2"],
      "warnings": {"title": "注意事項", "items": ["注意1", "注意2"]},
      "coreConflicts": {
        "title": "核心議題",
        "conflicts": [
          {"title": "主要挑戰", "color": "red", "description": "簡要描述", "example": "例子"},
          {"title": "發展機會", "color": "purple", "description": "簡要描述", "example": "例子"},
          {"title": "平衡之道", "color": "green", "description": "簡要描述", "example": "例子"}
        ]
      }
    },
    "官殺": {
      "name": "官殺",
      "element": "${d.官殺}",
      "meaning": "主事業、權威、責任",
      "expression": "個性化描述（80字以內）",
      "realManifestation": ["表現1", "表現2"],
      "warnings": {"title": "注意事項", "items": ["注意1", "注意2"]},
      "coreConflicts": {
        "title": "核心議題",
        "conflicts": [
          {"title": "主要挑戰", "color": "red", "description": "簡要描述", "example": "例子"},
          {"title": "發展機會", "color": "purple", "description": "簡要描述", "example": "例子"},
          {"title": "平衡之道", "color": "green", "description": "簡要描述", "example": "例子"}
        ]
      }
    },
    "劫比": {
      "name": "劫比",
      "element": "${d.劫比}",
      "meaning": "主朋友、競爭、協作",
      "expression": "個性化描述（80字以內）",
      "realManifestation": ["表現1", "表現2"],
      "warnings": {"title": "注意事項", "items": ["注意1", "注意2"]},
      "coreConflicts": {
        "title": "核心議題",
        "conflicts": [
          {"title": "主要挑戰", "color": "red", "description": "簡要描述", "example": "例子"},
          {"title": "發展機會", "color": "purple", "description": "簡要描述", "example": "例子"},
          {"title": "平衡之道", "color": "green", "description": "簡要描述", "example": "例子"}
        ]
      }
    },
    "食傷": {
      "name": "食傷",
      "element": "${d.食傷}",
      "meaning": "主創意、表達、子女",
      "expression": "個性化描述（80字以內）",
      "realManifestation": ["表現1", "表現2"],
      "warnings": {"title": "注意事項", "items": ["注意1", "注意2"]},
      "coreConflicts": {
        "title": "核心議題",
        "conflicts": [
          {"title": "主要挑戰", "color": "red", "description": "簡要描述", "example": "例子"},
          {"title": "發展機會", "color": "purple", "description": "簡要描述", "example": "例子"},
          {"title": "平衡之道", "color": "green", "description": "簡要描述", "example": "例子"}
        ]
      }
    }
  },
  "lifeAdvice": {
    "tips": [
      {
        "title": "建議1標題",
        "content": "簡潔建議內容（60字以內）",
        "example": "應用例子（30字以內）"
      },
      {
        "title": "建議2標題",
        "content": "簡潔建議內容（60字以內）",
        "example": "應用例子（30字以內）"
      },
      {
        "title": "建議3標題",
        "content": "簡潔建議內容（60字以內）",
        "example": "應用例子（30字以內）"
      }
    ]
  }
}

要求：
1. 返回純JSON，無markdown標記
2. 內容簡潔實用，避免冗長描述
3. 每個十神必須有3個conflicts
4. 生活建議要實用具體
`,g=new AbortController,y=setTimeout(()=>g.abort(),6e4),S=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是命理分析師。返回簡潔的JSON格式分析，避免冗長描述。重點是準確性和實用性。"},{role:"user",content:p}],temperature:.3,max_tokens:3e3,response_format:{type:"json_object"}}),signal:g.signal});if(clearTimeout(y),!S.ok){let e=await S.text();return console.error(`[${t}] DeepSeek API Error:`,S.status,S.statusText,e),i.NextResponse.json({error:"Failed to get AI analysis",details:e},{status:500})}let x=await S.json(),f=x.choices?.[0]?.message?.content;if(!f)return console.error(`[${t}] No content received from DeepSeek API`),i.NextResponse.json({error:"No analysis content received"},{status:500});(f=f.trim()).startsWith("```json")?f=f.replace(/^```json\s*/,"").replace(/\s*```$/,""):f.startsWith("```")&&(f=f.replace(/^```\s*/,"").replace(/\s*```$/,""));try{o=JSON.parse(f)}catch(e){return console.error(`[${t}] JSON parse error:`,e),i.NextResponse.json({analysis:function(e){let t=(e,t)=>({name:e,element:t,meaning:({正印:"主學業、貴人、長輩緣",財星:"主財富、物質、配偶",官殺:"主事業、權威、責任",劫比:"主朋友、競爭、協作",食傷:"主創意、表達、子女"})[e]||"主要特質",expression:`${e}(${t})在您的命格中展現獨特特質`,realManifestation:["正在分析","個人化分析準備中"],warnings:{title:`${e}需要注意的方面`,items:["平衡發展","適度調節"]},coreConflicts:{title:`${e}的核心議題`,conflicts:[{title:"平衡挑戰",color:"red",description:"需要在不同需求間找到平衡",example:"日常決策中的選擇困境"},{title:"發展機會",color:"purple",description:"善用天賦特質創造機會",example:"發揮個人優勢獲得成長"},{title:"整合智慧",color:"green",description:"結合理性與感性做出決定",example:"在變化中保持內在穩定"}]}});return{tenGodsAnalysis:{正印:t("正印",e.正印),財星:t("財星",e.財星),官殺:t("官殺",e.官殺),劫比:t("劫比",e.劫比),食傷:t("食傷",e.食傷)},lifeAdvice:{tips:[{title:"平衡發展",content:"保持生活各方面的平衡，避免過度偏重某一領域",example:"工作與生活的時間分配"},{title:"順應天性",content:"了解並發揮自己的天賦特質，順勢而為",example:"在適合的環境中展現才能"},{title:"持續學習",content:"保持開放心態，從經驗中學習成長",example:"從挫折中汲取智慧"}]}}}(d),aiGenerated:!1,contentType:"fallback-data"},{status:200})}if(!o.tenGodsAnalysis)return console.error(`[${t}] Invalid analysis structure:`,o),i.NextResponse.json({error:"Invalid analysis structure"},{status:500});let $={success:!0,analysis:o,aiGenerated:!0,contentType:"ai-generated",timestamp:new Date().toISOString(),requestId:t};return n&&(m.set(n,$),console.log(`[${t}] ✅ CACHED result for ${n}`),r&&(r($),c.delete(n),console.log(`[${t}] ✅ Resolved pending promise for ${n}`))),i.NextResponse.json($)}catch(e){return console.error(`[${t||"unknown"}] Wuxing Analysis API Error:`,e),n&&c.has(n)&&(a&&a(e),c.delete(n),console.log(`[${t}] 🚨 Cleaned up pending request on error`)),i.NextResponse.json({error:"Internal server error",details:e.message},{status:500})}}let d=new a.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/wuxing-analysis/route",pathname:"/api/wuxing-analysis",filename:"route",bundlePath:"app/api/wuxing-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/wuxing-analysis/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:u,workUnitAsyncStorage:p,serverHooks:g}=d;function y(){return(0,s.patchFetch)({workAsyncStorage:u,workUnitAsyncStorage:p})}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74474:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>x});var r=n(44794),a=n(42457),o=n(81540),s=n(14250),i=n(96002),l=n.n(i),m=n(22246);s.A.extend(r.t).extend(a.sM).extend(o.z0);let c=(0,s.A)(l()().format("YYYY-MM-DD")).char8.year.toString(),{LYGanzhiMap:h,LYzhiMap:d,LYStarMap:u,LYSihuaMap:p,spouseStarMap:g,spouseSihuaMap:y}=function(){let e=l()().format("YYYY"),t={},n={},r={},a={},o={},s={};for(let i=1;i<=12;i++){let l=e+"-"+(i<10?"0"+i:""+i)+"-15",c=m.astro.bySolar(l,0,"男",!0,"zh-CN").horoscope(l);n[i]=c.monthly.earthlyBranch,t[i]=c.monthly.heavenlyStem+c.monthly.earthlyBranch,r[i]=c.palace("命宫","monthly").majorStars.map(e=>e.name).toString(),o[i]=c.palace("夫妻","monthly").majorStars.map(e=>e.name).toString(),a[i]=c.palace("命宫","monthly").mutagedPlaces().map(e=>e.name).toString(),s[i]=c.palace("夫妻","monthly").mutagedPlaces().map(e=>e.name).toString()}return{LYGanzhiMap:t,LYzhiMap:n,LYStarMap:r,LYSihuaMap:a,spouseStarMap:o,spouseSihuaMap:s}}();(function(){let e=l()().format("YYYY-MM-DD");(0,s.A)(e).char8.month.toString()})(),function(){let e=l()().format("YYYY-MM-DD");m.astro.bySolar(e,0,"男",!0,"zh-CN").horoscope(e,0).palace("夫妻","yearly").majorStars.map(e=>e.name).toString()}();let S={};function x(e,t){var n;let r=l()(e).format("YYYY-MM-DD HH:mm:ss");if(console.log("birthStr",r),S[r+"-"+t])return S[r+"-"+t];let a=Math.floor(l()(e).hour()/2),o=l()(e).format("YYYY-MM-DD"),i=m.astro.bySolar(o,a,"female"==t?"女":"男",!0,"zh-CN"),h=i.palace("命宫"),d=i.palace("身宫"),u=i.palace("迁移").majorStars.map(e=>e.name).toString(),p=i.horoscope(o,a),g=(0,s.A)(r),y=function(e,t,n,r,a,o,s,i){let l={金:0,木:0,水:0,火:0,土:0},m=[e,t,n,r,a,o,s,i];m.forEach(e=>{["金","木","水","火","土"].includes(e)&&l[e]++});let c=m.length;return`金:${(l.金/c*100).toFixed(2)}%，木:${(l.木/c*100).toFixed(2)}%，水:${(l.水/c*100).toFixed(2)}%，火:${(l.火/c*100).toFixed(2)}%，土:${(l.土/c*100).toFixed(2)}%`}(g.char8.year.stem.e5.name,g.char8.year.branch.e5.name,g.char8.month.stem.e5.name,g.char8.month.branch.e5.name,g.char8.day.stem.e5.name,g.char8.day.branch.e5.name,g.char8.hour.stem.e5.name,g.char8.hour.branch.e5.name),x=g.char8.day.branch.hiddenStems.map(e=>e.name).toString(),$=g.char8.year.branch.hiddenStems,b=g.char8.month.branch.hiddenStems,w=g.char8.day.branch.hiddenStems,T=g.char8.hour.branch.hiddenStems,v=g.char8ex(+("female"!==t)),D=v.year,N=v.month,Y=v.day,j=v.hour,M={nayin:g.char8.year.takeSound,wuxingJu:(n=g.char8.year.takeSoundE5.toString(),`${n}${f[n]}局`),year:g.char8.year.toString(),month:g.char8.month.toString(),day:g.char8.day.toString(),hour:g.char8.hour.toString(),wuxingScale:y,rizhiCanggan:x,mingPalace:`{主星：${h.majorStars.map(e=>e.name).toString()},主星亮度：${h.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${h.minorStars.map(e=>e.name).toString()}, 四化：${h.mutagedPlaces().map(e=>e.name).toString()}}`,bodyPalace:`{主星：${d.majorStars.map(e=>e.name).toString()},主星亮度：${d.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${d.minorStars.map(e=>e.name).toString()}, 四化：${d.mutagedPlaces().map(e=>e.name).toString()}}`,qianyiPalace:u,dayunGanzhi:p.decadal.heavenlyStem+p.decadal.earthlyBranch,liunianGanzhi:c,yearStemTenGod:D.stemTenGod.name,yearBranchTenGod:D.branchTenGod.map(e=>e.name).toString(),monthStemTenGod:N.stemTenGod.name,monthBranchTenGod:N.branchTenGod.map(e=>e.name).toString(),dayStemTenGod:Y.stemTenGod.name,dayBranchTenGod:Y.branchTenGod.map(e=>e.name).toString(),hourStemTenGod:j.stemTenGod.name,hourBranchTenGod:j.branchTenGod.map(e=>e.name).toString(),yearGods:D.gods.map(e=>e.name).toString(),monthGods:N.gods.map(e=>e.name).toString(),dayGods:Y.gods.map(e=>e.name).toString(),yearStem:g.char8.year.stem.name,yearStemWuxing:g.char8.year.stem.e5.name,yearBranch:g.char8.year.branch.name,yearBranchWuxing:g.char8.year.branch.e5.name,monthStem:g.char8.month.stem.name,monthStemWuxing:g.char8.month.stem.e5.name,monthBranch:g.char8.month.branch.name,monthBranchWuxing:g.char8.month.branch.e5.name,dayStem:g.char8.day.stem.name,dayStemWuxing:g.char8.day.stem.e5.name,dayBranch:g.char8.day.branch.name,dayBranchWuxing:g.char8.day.branch.e5.name,hourStem:g.char8.hour.stem.name,hourStemWuxing:g.char8.hour.stem.e5.name,hourBranch:g.char8.hour.branch.name,hourBranchWuxing:g.char8.hour.branch.e5.name,yearNayin:g.char8.year.takeSound,monthNayin:g.char8.month.takeSound,dayNayin:g.char8.day.takeSound,hourNayin:g.char8.hour.takeSound,yearNayinWuxing:g.char8.year.takeSoundE5.toString(),monthNayinWuxing:g.char8.month.takeSoundE5.toString(),dayNayinWuxing:g.char8.day.takeSoundE5.toString(),hourNayinWuxing:g.char8.hour.takeSoundE5.toString(),yearBranchHiddenStems:$.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),monthBranchHiddenStems:b.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),dayBranchHiddenStems:w.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),hourBranchHiddenStems:T.map(e=>({stem:e.name,element:e.e5.name,strength:e.value}))};return S[r+"-"+t]=M,console.log("result",M),M}let f={水:"二",木:"三",金:"四",土:"五",火:"六"}},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[7719,580,6219],()=>n(16538));module.exports=r})();