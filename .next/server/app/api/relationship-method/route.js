(()=>{var e={};e.id=5202,e.ids=[5202],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},82531:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>v,routeModule:()=>u,serverHooks:()=>m,workAsyncStorage:()=>g,workUnitAsyncStorage:()=>y});var i={};r.r(i),r.d(i,{POST:()=>h});var n=r(96559),a=r(48088),s=r(37719),l=r(32190);let o=process.env.DEEPSEEK_API_KEY,p=(e,t,r="未知")=>e&&e[t]||r,d=e=>e&&Array.isArray(e)?{year:e[0]||{heavenly:"甲",earthly:"子"},month:e[1]||{heavenly:"乙",earthly:"丑"},day:e[2]||{heavenly:"丙",earthly:"寅"},hour:e[3]||{heavenly:"丁",earthly:"卯"}}:{year:{heavenly:"甲",earthly:"子"},month:{heavenly:"乙",earthly:"丑"},day:{heavenly:"丙",earthly:"寅"},hour:{heavenly:"丁",earthly:"卯"}},c=e=>{console.log("\uD83D\uDCCB Parsing relationship method response:",e);try{let t=e.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim().match(/\{[\s\S]*\}/);if(t)try{let e=JSON.parse(t[0]);if(e.dailyRituals&&Array.isArray(e.dailyRituals)){let t=e.dailyRituals.filter(e=>e.title&&e.steps&&Array.isArray(e.steps)&&e.principle);if(t.length>0)return console.log("✅ Successfully parsed JSON response with",t.length,"rituals"),{dailyRituals:t.map(e=>({...e,gradient:e.gradient||"linear-gradient(135deg, #C74772 0%, #D09900 100%)"})),communicationAdvice:e.communicationAdvice||"建議增加共同活動時間，調整溝通表達方式，建立規律的情感交流儀式。"}}}catch(e){console.log("❌ JSON parsing failed, falling back to text parsing:",e.message)}let r=[],i=e.split("\n").filter(e=>e.trim()),n=null,a=[],s="";for(let e of i){let t=e.trim();if(!(!t||t.includes("```")||t.startsWith("#"))){if(t.includes("▸")&&!t.includes("步驟")&&!t.includes("原理")){n&&r.push({title:n,steps:[...a],principle:s,gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"}),n=t.replace(/[▸*\-]/g,"").trim(),a=[],s="";continue}if(/^[①②③\d+]/.test(t)||t.includes("步驟")){let e=t.replace(/^[①②③\d+][\.)]\s*/,"").replace(/步驟[:：]/g,"").trim();e&&!e.includes("原理")&&a.push(e);continue}if(t.includes("原理")||t.includes("八字")||t.includes("五行")||t.includes("金生水")){s=t.replace(/原理[:：]/g,"").replace(/解釋[:：]/g,"").trim();continue}n&&t.length>10&&(!s&&(t.includes("能量")||t.includes("循環")||t.includes("調和"))?s=t:a.length<3&&a.push(t))}}n&&r.push({title:n,steps:[...a],principle:s,gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"});let l="基於八字分析，建議增加共同活動，調整表達方式為正向溝通模式，建立規律儀式來促進能量流動。重點在於打破沉寂模式，重建互動默契。",o=e.match(/(?:一般溝通建議|溝通建議)[:：]?\s*([^]*?)(?=\n\n|\n$|$)/i);o&&(l=o[1].trim());let p={dailyRituals:r.length>0?r:[{title:"晨光同頻儀式",steps:["每日清晨面向東方，一起深呼吸3分鐘","輪流分享夢境或當日期待，各限時2分鐘","雙手相握默念正向話語，開啟美好一天"],principle:"利用晨光木氣上升，透過金生水能量循環，調和八字中的沉寂氣場",gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"}],communicationAdvice:l};return console.log("\uD83D\uDCCA Final parsed relationship method result:",p),p}catch(e){return console.error("❌ Error parsing relationship method response:",e),{dailyRituals:[{title:"基礎能量同調儀式",steps:["每日選定時間一起深呼吸調息","分享當日感受與期待","以正向話語結束互動"],principle:"透過規律儀式調和能量，針對八字特質進行關係優化",gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"}],communicationAdvice:"建議增加共同活動時間，調整溝通表達方式，建立規律的情感交流儀式，重點在於打破沉悶模式，重建關係活力。"}}};async function h(e){try{let t=await e.json();console.log("\uD83D\uDCAB Relationship Method API - Received request:",t);let{femaleUser:r,maleUser:i,femaleBazi:n,maleBazi:a,femalePillars:s,malePillars:h}=t;if(!r||!i)return l.NextResponse.json({error:"Missing user data"},{status:400});let u=p(n,"name","female"),g=p(a,"name","male"),y=d(s),m=d(h);console.log("\uD83D\uDCCA BaZi Data:",{femaleBaziInfo:u,maleBaziInfo:g,femalePillarsInfo:y,malePillarsInfo:m});let v=`你是專業的命理感情顧問，請為這對情侶設計具體的相處心法。

**情侶資料：**
女方：${r.name}
- 天干地支：年柱 ${y.year.heavenly}${y.year.earthly}、月柱 ${y.month.heavenly}${y.month.earthly}、日柱 ${y.day.heavenly}${y.day.earthly}、時柱 ${y.hour.heavenly}${y.hour.earthly}

男方：${i.name}  
- 天干地支：年柱 ${m.year.heavenly}${m.year.earthly}、月柱 ${m.month.heavenly}${m.month.earthly}、日柱 ${m.day.heavenly}${m.day.earthly}、時柱 ${m.hour.heavenly}${m.hour.earthly}

請以JSON格式回應，包含恰好3個日常儀式：

{
  "dailyRituals": [
    {
      "title": "晨光同頻儀式",
      "steps": [
        "每日清晨面向東方，一起深呼吸3分鐘",
        "輪流分享夢境或當日期待，各限時2分鐘", 
        "雙手相握默念正向話語，開啟美好一天"
      ],
      "principle": "利用晨光木氣上升，透過金生水能量循環，調和八字中的沉寂氣場",
      "gradient": "linear-gradient(135deg, #C74772 0%, #D09900 100%)"
    },
    {
      "title": "午後能量平衡法",
      "steps": [
        "步驟1",
        "步驟2", 
        "步驟3"
      ],
      "principle": "午後原理解釋",
      "gradient": "linear-gradient(135deg, #C74772 0%, #D09900 100%)"
    },
    {
      "title": "夜晚和諧儀式", 
      "steps": [
        "步驟1",
        "步驟2",
        "步驟3"
      ],
      "principle": "夜晚原理解釋",
      "gradient": "linear-gradient(135deg, #C74772 0%, #D09900 100%)"
    }
  ],
  "communicationAdvice": "溝通建議內容"
}

**重要要求：**
- 必須包含恰好3個儀式（早上、下午、晚上各一個）
- 每個儀式的steps陣列必須包含3個具體步驟
- 所有儀式要自然不尷尬，適合日常實踐
- principle要結合五行生剋與八字分析
- 針對他們的八字特質個性化設計

請分析他們的八字配置，提供針對性的相處心法。`;console.log("\uD83D\uDCE4 Sending prompt to DeepSeek:",v);let f=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${o}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是專業的命理感情顧問，擅長將八字分析與日常相處技巧結合，提供實用的關係改善建議。"},{role:"user",content:v}],max_tokens:2e3,temperature:.7})});if(!f.ok)throw console.error("❌ DeepSeek API error:",f.status,f.statusText),Error(`DeepSeek API error: ${f.status}`);let x=await f.json();console.log("✅ DeepSeek API response:",x);let A=x.choices?.[0]?.message?.content||"";console.log("\uD83E\uDD16 AI Response:",A);let $=c(A);return console.log("\uD83D\uDCCB Parsed relationship method result:",$),l.NextResponse.json($)}catch(e){return console.error("❌ Relationship Method API error:",e),l.NextResponse.json({dailyRituals:[{title:"晨光能量同頻儀式",steps:["每日清晨6:30-7:00，面向東方站立3分鐘，深呼吸調息","輪流分享昨夜夢境或今日期待，時間各限2分鐘","以雙手交握結束，默念「木氣生發，愛意流轉」三次"],principle:"利用晨光木氣上升時刻，透過金生水→水生木的能量循環，調和八字中的沉寂氣場，重啟一日活力",gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"},{title:"午後土金平衡茶禪",steps:["下午3-4點選用陶瓷茶具（土），沖泡白茶或烏龍（金氣茶品）","無言靜坐品茶5分鐘，感受彼此存在能量","輪流說出對方今日一個優點，用「我感謝你...」開頭"],principle:"午後土金時段最適合穩定關係能量，透過土生金→金生水循環，化解過度理性的溝通模式",gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"},{title:"夜晚水火調和儀式",steps:["睡前點燃紅色蠟燭（火元素），旁邊放置水晶球（水元素）","相視而坐，輪流說出今日最困擾與最開心的事各一件","以溫暖擁抱結束，心中默念「水火既濟，情深意長」"],principle:"夜晚水氣旺盛配合火光，形成水火既濟卦象，專門針對八字能量沉寂核心進行深度調和",gradient:"linear-gradient(135deg, #C74772 0%, #D09900 100%)"}],communicationAdvice:"基於八字分析，建議增加「元素感受日」活動（每週選一天專注體驗某種五行元素），調整表達方式為「先讚美後建議」模式，建立每晚「感恩三件事」分享習慣。重點是透過規律儀式打破能量沉寂，用溫和方式重建情感連結，讓關係在穩定中逐步升溫。"})}}let u=new n.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/relationship-method/route",pathname:"/api/relationship-method",filename:"route",bundlePath:"app/api/relationship-method/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/relationship-method/route.js",nextConfigOutput:"",userland:i}),{workAsyncStorage:g,workUnitAsyncStorage:y,serverHooks:m}=u;function v(){return(0,s.patchFetch)({workAsyncStorage:g,workUnitAsyncStorage:y})}},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[7719,580],()=>r(82531));module.exports=i})();