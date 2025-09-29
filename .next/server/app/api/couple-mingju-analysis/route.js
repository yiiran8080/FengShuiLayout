(()=>{var e={};e.id=598,e.ids=[598],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19752:(e,r,s)=>{"use strict";s.r(r),s.d(r,{patchFetch:()=>m,routeModule:()=>p,serverHooks:()=>d,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>c});var t={};s.r(t),s.d(t,{POST:()=>u});var o=s(96559),n=s(48088),a=s(37719),i=s(32190);async function u(e){try{let{user1Birthday:r,user2Birthday:s,user1Name:t,user2Name:o,concern:n,problem:a,currentYear:u,analysisType:p,prompt:l}=await e.json();if(console.log("\uD83D\uDD2E Couple MingJu Analysis API called with:",{user1Birthday:r,user2Birthday:s,user1Name:t,user2Name:o,concern:n,analysisType:p,currentYear:u}),!r||!s||!p||!l)return i.NextResponse.json({error:"Missing required parameters"},{status:400});let c=`你是專業的八字合盤命理大師，精通夫妻配對分析、五行調和、與合盤命理學。請根據提供的雙方生辰八字，提供準確、具體、實用的夫妻合盤分析。

重要要求：
1. 必須使用繁體中文回應
2. 提供具體而非模糊的分析結果
3. 基於真實的八字合盤理論
4. 避免使用"可能"、"或許"等不確定詞彙
5. 確保分析內容實用且有指導意義
6. 嚴格按照指定的格式輸出

分析對象：
男方：${t}，生辰：${r}
女方：${o}，生辰：${s}
關注領域：${n}
分析年份：${u}`,d=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:c},{role:"user",content:l}],max_tokens:2e3,temperature:.7,stream:!1})});if(!d.ok){let e=await d.text();throw console.error("❌ DeepSeek API error:",d.status,e),Error(`DeepSeek API error: ${d.status}`)}let m=await d.json();console.log("\uD83E\uDD16 DeepSeek API response received");let g=m.choices?.[0]?.message?.content;if(!g||0===g.trim().length)throw Error("Empty response from AI");return console.log("✅ Couple MingJu analysis generated successfully"),i.NextResponse.json({success:!0,analysis:g.trim(),metadata:{user1Name:t,user2Name:o,concern:n,analysisType:p,currentYear:u,timestamp:new Date().toISOString()}})}catch(a){var r,s,t,o;console.error("❌ Couple MingJu Analysis API error:",a);let n=(r=e.body?.analysisType||"配對特性",s=e.body?.concern||"感情",t=e.body?.user1Name||"男方",o=e.body?.user2Name||"女方","配對特性"===r?`${t}與${o}的八字配對分析：

根據雙方生辰八字，此配對展現出獨特的五行互動格局。雙方在性格特質上既有互補優勢，也存在需要調和的差異。

配對優勢：
• 五行互補：雙方的日干五行形成良性互動，有助於相互支持
• 性格平衡：在處事方式上能夠互相補足，形成穩定的配對基礎

需要注意：
• 溝通調和：不同的表達方式可能需要更多理解和包容
• 節奏協調：在生活步調上需要找到平衡點

調和建議：
建議雙方多關注對方的五行特質，在日常相處中運用相生原理，避免相剋情況。通過適當的風水調節和時機把握，可以增進感情和諧，建立長久穩定的關係。

此配對具有良好的發展潛力，關鍵在於雙方的理解與配合。`:"middle"===r?JSON.stringify({合盤核心:{主要内容:`${t}與${o}的八字合盤顯示良好的配對基礎`,状态列表:["配對強弱：雙方日干形成穩定的相互關係","感情互動：在情感表達上有互補特質","吸引力源：基於五行相生的天然吸引力"],结论:"整體配對評價為良好，具有發展潛力"},發展分析:{主要分析:"雙方的命格配置較為和諧，男方的理性與女方的感性形成良好互補，關係發展呈現穩定上升趨勢。",关键问题:{问题1:{名称:"溝通方式差異",解释:"雙方在表達情感的方式上有所不同，需要多一些耐心和理解。"},问题2:{名称:"生活節奏調和",解释:"在日常生活安排上需要找到雙方都舒適的平衡點。"}}},配對優勢:{互动列表:[{方面:"情感交流",特點:"建議多用行動表達關愛，減少語言上的誤解"},{方面:"生活規劃",特點:"在重大決定上多商量，發揮各自的優勢特質"},{方面:"相處模式",特點:"保持適當的個人空間，同時增進共同興趣"}],格局核心:"互補配對，和諧發展"}},null,2):"right"===r?JSON.stringify({调候核心:{五行调节:`${t}需要調和火土之氣，${o}適合平衡金水能量`,调候重点:"重點在於雙方的五行平衡，建議在季節轉換時特別注意關係調節"},实用建议:{日常调和:["多在自然環境中相處，增進五行和諧","選擇適合的顏色和飾品輔助調候","注意飲食搭配，避免五行相剋的食物組合"],时机把握:["在吉利的時辰進行重要決定和溝通","利用流年大運的有利時機推進關係發展"]},长期策略:{感情发展:"建議循序漸進，在穩固關係基礎的同時，規劃未來的共同目標和發展方向。",关键节点:"特別注意農曆的重要節氣，這些時間點對關係發展有重要影響。"}},null,2):`分析中...請稍候，正在為您生成專業的夫妻合盤${s}分析報告。`);return i.NextResponse.json({success:!1,analysis:n,error:a.message,fallback:!0})}}let p=new o.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/couple-mingju-analysis/route",pathname:"/api/couple-mingju-analysis",filename:"route",bundlePath:"app/api/couple-mingju-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/couple-mingju-analysis/route.js",nextConfigOutput:"",userland:t}),{workAsyncStorage:l,workUnitAsyncStorage:c,serverHooks:d}=p;function m(){return(0,a.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:c})}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var s=e=>r(r.s=e),t=r.X(0,[7719,580],()=>s(19752));module.exports=t})();