(()=>{var e={};e.id=6875,e.ids=[6875],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},40149:(e,r,t)=>{"use strict";t.r(r),t.d(r,{patchFetch:()=>m,routeModule:()=>p,serverHooks:()=>g,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>h});var n={};t.r(n),t.d(n,{POST:()=>u});var o=t(96559),s=t(48088),i=t(37719),a=t(32190),l=t(51367);let c=process.env.DEEPSEEK_API_KEY;async function u(e){let r=Math.random().toString(36).substring(2,15),t=null,n=null,o=null;try{let s;let i=await e.text();if(!i)return console.error("Empty request body received"),a.NextResponse.json({error:"Empty request body"},{status:400});try{s=JSON.parse(i)}catch(e){return console.error("JSON parse error:",e.message,"Body:",i),a.NextResponse.json({error:"Invalid JSON in request body"},{status:400})}let{pillar:u,userInfo:p}=s;if(!u||!p)return a.NextResponse.json({error:"Missing required parameters: pillar or userInfo"},{status:400});t=(0,l.hz)("comprehensive-advice",p,{pillar:u}),console.log(`[${r}] Cache key: ${t}`);let d=(0,l.I7)(t,r);if(d)return a.NextResponse.json(d);let h=await (0,l.Xu)(t,r);if(h)return a.NextResponse.json(h);let g=(0,l.NG)(t,r);n=g.resolvePending,o=g.rejectPending;let m=`你是資深的八字命理師，需要根據用戶的${u}信息，提供綜合調理與人生建議。

用戶信息：
- 姓名：${p.name}
- 性別：${"male"===p.gender?"男":"女"}
- 出生日期：${p.birthDate}
- 出生時間：${p.birthTime}
- 出生地點：${p.location}
- ${u}：${u}相關的命理信息

請從以下角度提供綜合人生建議：

1. **事業發展建議**
   - 適合的事業方向和發展策略
   - 事業發展的關鍵時機和注意事項

2. **健康養生要點**
   - 根據命理特質的養生建議
   - 預防疾病和保持健康的方法

3. **財運管理智慧**
   - 理財和投資的建議
   - 增強財運的方法

4. **感情關係指引**
   - 感情發展的建議和注意事項
   - 維繫良好感情關係的要點

5. **人生規劃方向**
   - 人生不同階段的重點規劃
   - 實現人生目標的策略

請以專業、關懷的語調提供建議，每個要點都要實用且具有指導意義。
返回格式必須是純JSON，包含以下結構：
{
    "careerDevelopment": "事業發展建議",
    "healthWellness": "健康養生要點",
    "wealthManagement": "財運管理智慧",
    "relationshipGuidance": "感情關係指引",
    "lifeDirection": "人生規劃方向"
}`;try{let e;let o=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${c}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:m}],temperature:.7,max_tokens:1200})});if(!o.ok)throw Error(`DeepSeek API error: ${o.status}`);let s=await o.json(),i=s.choices[0]?.message?.content;if(!i)throw Error("No content received from DeepSeek API");let u=i;i.includes("```json")?u=i.replace(/```json\s*/g,"").replace(/\s*```/g,""):i.includes("```")&&(u=i.replace(/```\s*/g,"").replace(/\s*```/g,""));try{e=JSON.parse(u)}catch(e){throw console.error("Error parsing AI response:",e),console.error("Raw content:",i),console.error("Cleaned content:",u),Error("Invalid JSON response from AI")}for(let r of["careerDevelopment","healthWellness","wealthManagement","relationshipGuidance","lifeDirection"])if(!e[r])throw Error(`Missing required field: ${r}`);let p={success:!0,analysis:e,requestId:r,aiGenerated:!0,timestamp:new Date().toISOString()};return(0,l.e0)(t,p,r),(0,l.dV)(t,p,r,n),a.NextResponse.json(p)}catch(r){console.error("AI API Error:",r);let e={年柱:{careerDevelopment:"年柱代表早期發展基礎，建議選擇能發揮創意和熱情的工作。適合從基層做起，紮實累積經驗。重視學習機會，為未來發展奠定基礎。",healthWellness:"注意心血管和神經系統的健康。保持規律的作息時間，多做戶外運動。年輕時養成良好的飲食習慣，避免過度熬夜和壓力。",wealthManagement:"理財觀念需要從年輕時培養，建議採用穩健的投資策略。避免高風險投資，重視儲蓄習慣的建立。學會記帳和預算管理。",relationshipGuidance:"感情方面較為純真，容易全心投入。建議保持理性，不要過於急躁。學會觀察對方的真實性格，建立穩固的感情基礎。",lifeDirection:"人生規劃應該注重基礎建設，包括教育、技能和人際關係。設定清晰的短期和長期目標，保持學習的心態，為未來發展做好準備。"},月柱:{careerDevelopment:"月柱影響事業發展的中期階段，適合團隊合作和管理職位。善於溝通協調，可以考慮人力資源、公關或諮詢類工作。",healthWellness:"注意消化系統和免疫系統的保養。保持均衡的飲食，適度運動。情緒管理很重要，學會釋放壓力，保持心理健康。",wealthManagement:"財運較為穩定，適合長期投資。可以考慮定期定額投資，分散風險。避免跟風投資，要有自己的判斷和策略。",relationshipGuidance:"感情發展較為順利，善於維繫關係。建議在感情中保持獨立性，不要過度依賴對方。重視精神層面的交流。",lifeDirection:"人生中期是關鍵發展階段，要在事業和家庭之間找到平衡。建議制定明確的發展計劃，同時留意健康和人際關係的維護。"},日柱:{careerDevelopment:"日柱代表核心能力，適合獨當一面的工作。具有領導潛質，可以考慮創業或高階主管職位。重視專業能力的提升。",healthWellness:"身體素質較好，但要注意過度勞累。定期體檢，預防職業病。保持工作與生活的平衡，避免過度透支健康。",wealthManagement:"具有良好的理財能力，可以嘗試多元化投資。但要避免過度自信，保持謹慎的態度。建議尋求專業的財務諮詢。",relationshipGuidance:"在感情中較為主導，但要學會傾聽和包容。避免過度控制，給對方適當的空間。重視溝通的品質。",lifeDirection:"人生目標較為明確，執行力強。建議在追求成功的同時，也要關注內心的平衡和精神層面的成長。"},時柱:{careerDevelopment:"時柱代表晚年發展，適合傳承和指導性質的工作。可以考慮顧問、教育或公益事業。重視經驗的傳承和智慧的分享。",healthWellness:"注意骨骼和關節的保養，適合低強度的運動如太極、散步。保持規律的生活作息，重視精神健康和社交活動。",wealthManagement:"財務管理趨於保守，重視資產的保值。建議選擇穩健的投資工具，為子女和晚年生活做好規劃。",relationshipGuidance:"感情較為成熟穩重，重視家庭和諧。建議多花時間陪伴家人，經營跨代關係。保持開放的心態接受新觀念。",lifeDirection:"人生晚期重視精神滿足和社會貢獻。建議發揮自己的經驗和智慧，幫助他人成長。保持學習的心態，享受人生的每個階段。"}};return a.NextResponse.json({success:!0,analysis:e[u]||e["日柱"]})}}catch(e){return console.error("API Error:",e),(0,l.ME)(t,e,r,o),a.NextResponse.json({error:"Internal server error"},{status:500})}}let p=new o.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/comprehensive-advice/route",pathname:"/api/comprehensive-advice",filename:"route",bundlePath:"app/api/comprehensive-advice/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/comprehensive-advice/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:d,workUnitAsyncStorage:h,serverHooks:g}=p;function m(){return(0,i.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:h})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},51367:(e,r,t)=>{"use strict";t.d(r,{I7:()=>l,ME:()=>h,NG:()=>u,Xu:()=>c,dV:()=>d,e0:()=>p,hz:()=>i});let n=new Map,o=new Map,s={TTL:36e5,MAX_SIZE:1e3};function i(e,r,t={}){if(!r?.birthDateTime)return null;let n=new Date(r.birthDateTime),o=`${e}_${n.getFullYear()}_${n.getMonth()}_${n.getDate()}_${n.getHours()}_${r.gender||""}`,s=Object.keys(t).sort();return o+(s.length>0?"_"+s.map(e=>`${e}:${t[e]}`).join("_"):"")}function a(e){return Date.now()-e.timestamp>s.TTL}function l(e,r){if(!e||!n.has(e))return null;let t=n.get(e);return a(t)?(n.delete(e),console.log(`[${r}] 🗑️ Removed expired cache for ${e}`),null):(console.log(`[${r}] 🎯 RETURNING CACHED RESULT for ${e}`),{...t.data,cached:!0,requestId:r,originalRequestId:t.originalRequestId,cacheAge:Date.now()-t.timestamp})}async function c(e,r){if(!e||!o.has(e))return null;console.log(`[${r}] 🚨 REQUEST ALREADY PENDING for ${e}, waiting...`);try{let t=await o.get(e);return console.log(`[${r}] ✅ Got result from pending request`),{...t,waitedForResult:!0,requestId:r,originalRequestId:t.requestId}}catch(t){return console.log(`[${r}] ⚠️ Pending request failed, proceeding with new request`),o.delete(e),null}}function u(e,r){let t,n;if(!e)return{resolvePending:null,rejectPending:null};let s=new Promise((e,r)=>{t=e,n=r});return o.set(e,s),console.log(`[${r}] 🔄 Created pending request for ${e}`),{resolvePending:t,rejectPending:n}}function p(e,r,t){if(!e)return;n.size>.8*s.MAX_SIZE&&function(){for(let[e,r]of n.entries())a(r)&&n.delete(e);n.size>s.MAX_SIZE&&Array.from(n.entries()).sort((e,r)=>e[1].timestamp-r[1].timestamp).slice(0,n.size-s.MAX_SIZE).forEach(([e])=>n.delete(e))}();let o={data:r,timestamp:Date.now(),originalRequestId:r.requestId||t};n.set(e,o),console.log(`[${t}] ✅ CACHED result for ${e}`)}function d(e,r,t,n){e&&n&&(n(r),o.delete(e),console.log(`[${t}] ✅ Resolved pending promise for ${e}`))}function h(e,r,t,n){e&&n&&(n(r),o.delete(e),console.log(`[${t}] 🚨 Rejected pending promise for ${e}`))}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var r=require("../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[7719,580],()=>t(40149));module.exports=n})();