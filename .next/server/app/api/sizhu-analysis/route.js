(()=>{var e={};e.id=592,e.ids=[592],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},42689:(e,t,s)=>{"use strict";s.r(t),s.d(t,{patchFetch:()=>m,routeModule:()=>u,serverHooks:()=>h,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>g});var o={};s.r(o),s.d(o,{POST:()=>p});var r=s(96559),n=s(48088),i=s(37719),a=s(32190);let l=process.env.DEEPSEEK_API_KEY,c={年柱:"童年",月柱:"青年",日柱:"中年",時柱:"晚年"};async function p(e){try{let t;let{userInfo:s,pillarType:o,pillarData:r}=await e.json();if(console.log("\uD83C\uDFAF Sizhu Analysis API called with:",{pillarType:o,userInfo:s?"present":"missing",pillarDataKeys:Object.keys(r||{})}),!s||!o||!r)return console.log("❌ Missing required data"),a.NextResponse.json({error:"Missing required data"},{status:400});let n=c[o],i=new Date().getFullYear(),p=new Date(s.birthDateTime).getFullYear(),u="";console.log("\uD83D\uDD0D Raw pillar data:",JSON.stringify(r,null,2));let d=Object.entries(r);if(d.length>0){for(let[e,t]of(console.log("\uD83D\uDCCB Pillar entries found:",d.length),d)){console.log("\uD83D\uDD0E Checking key:",e,"value:","string"==typeof t?t.substring(0,100):t);let s=e.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/);if(s){u=s[0],console.log("✅ Found 干支 in key:",u);break}if("string"==typeof t){let e=t.match(/[甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥]/);if(e){u=e[0],console.log("✅ Found 干支 in value:",u);break}}}if(!u&&d.length>=2){console.log("\uD83D\uDD27 Trying to construct 干支 from separate entries...");let e=d.find(([e])=>e.includes("天干")),t=d.find(([e])=>e.includes("地支"));if(e&&t){let s=e[0].match(/[甲乙丙丁戊己庚辛壬癸]/)?.[0]||e[1].match(/[甲乙丙丁戊己庚辛壬癸]/)?.[0]||"",o=t[0].match(/[子丑寅卯辰巳午未申酉戌亥]/)?.[0]||t[1].match(/[子丑寅卯辰巳午未申酉戌亥]/)?.[0]||"";u=s+o,console.log("\uD83D\uDD27 Constructed 干支:",u,"from",s,"+",o)}}}!u&&(console.log("⚠️ Could not extract 干支, using example for",o),u=({年柱:"甲申",月柱:"丁巳",日柱:"丁酉",時柱:"庚子"})[o]||"甲子"),console.log("\uD83C\uDFAF Final 干支 combination:",u);let g=`你是一位專業的八字命理師，請根據用戶的${o}${u}組合生成白話直斷分析。

用戶信息：
- 性別：${s.gender}
- 出生年份：${p}年
- 當前年齡：${i-p}歲
- ${o}：${u}
- 人生階段：${n}

請按照以下格式生成分析，參考這個範例風格：

年柱甲申：竞争与规则并存的童年
白话解释：你小时候的环境（家庭或学校）存在明显的竞争压力，比如兄弟姐妹比较成绩，或父母用严格标准要求你。同时生活中规则感很强，例如必须按时回家、作业错一题罚抄十遍等。
举例：就像玩游戏时，别人轻松过关，你却总被要求"先写完数学题才能玩"，这种约束让你早早就学会在压力下找方法。
智慧如地下暗流：指你天生会暗中观察、动脑筋解决问题。比如被父母禁止看电视，你会偷偷用电脑查资料完成作业来争取自由时间——这种"钻空子"不是叛逆，而是懂得灵活应对规则。

請返回JSON格式：
{
  "pillarCombination": "${u}",
  "lifeStage": "${n}",
  "analysis": {
    "title": "${o}${u}：[關鍵詞描述]的${n}",
    "whiteExplanation": {
      "description": "白話解釋：[100-150字的生活場景說明，描述這個人生階段的整體環境和特點，要具體提到家庭、學校或工作環境的真實情況]",
      "example": "舉例：就像[具體生活場景例子，要生動有趣，讓人有共鳴感]，這種[環境特點]讓你[學會了什麼能力或特質]。"
    },
    "wisdomFlow": {
      "concept": "[命理概念]如地下暗流/[其他比喻]的[特質]",
      "description": "指你[天賦特質或能力描述]。比如[具體例子說明如何運用這種智慧]——這種[行為特點]不是[負面誤解]，而是[正面解釋：智慧靈活應對的能力]。"
    }
  }
}

分析要求：
1. 必須基於${u}的真實命理特性（天干地支的五行生克關係）
2. ${n}階段的特點要符合人生發展規律
3. 内容生活化，用現代人能理解的場景和例子
4. 語言親切自然，避免過於玄奧的術語
5. 每個例子都要具體可感，讓人產生共鳴
6. 智慧流的部分要體現命理的深層智慧，但用比喻方式表達
7. 返回標準JSON格式，不要包含markdown標記`,h=`請為這個用戶生成${o}（${n}階段）的白話直斷分析。`;console.log("\uD83E\uDD16 Calling DeepSeek API with:",{pillarType:o,lifeStage:n,tianganDizhi:u});let m=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:g},{role:"user",content:h}],max_tokens:2e3,temperature:.7})});if(console.log("\uD83D\uDCE1 DeepSeek API response status:",m.status),!m.ok){let e=await m.text();throw console.log("❌ DeepSeek API error:",m.status,e),Error(`DeepSeek API error: ${m.status} - ${e}`)}let y=await m.json(),f=y.choices?.[0]?.message?.content;if(!f)throw console.log("❌ No content received from AI"),Error("No content received from AI");console.log("\uD83C\uDFAF AI Content received (first 300 chars):",f.substring(0,300));try{let e=f.replace(/```json\n?|```\n?/g,"").trim();t=JSON.parse(e),console.log("✅ Successfully parsed AI response")}catch(s){console.error("❌ JSON parsing failed:",s.message),console.log("\uD83D\uDD0D Raw AI content that failed to parse:",f);let e={甲申:"竞争与规则并存",丁巳:"才华耀眼但容易三分热度",丁酉:"能力与压力互相成就",庚子:"权威与责任并重"}[u]||"成长与探索";t={pillarCombination:u,lifeStage:n,analysis:{title:`${o}${u}：${e}的${n}`,whiteExplanation:{description:"白話解釋：這個階段的環境充滿了挑戰與機遇，你在家庭和學校中學會了適應各種要求和期待，培養出獨特的應對方式。",example:"舉例：就像面對規則時，你會找到巧妙的方法來平衡個人意願和外界期望，這種智慧讓你在壓力中仍能保持自己的特色。"},wisdomFlow:{concept:"智慧如地下暗流的積累",description:"指你在生活中逐漸培養出獨特的處事智慧。比如學會在看似限制的環境中找到發展空間——這種能力不是妥協，而是智慧的靈活運用。"}}}}return console.log("\uD83C\uDF89 Returning analysis for",o,"with title:",t.analysis.title),a.NextResponse.json({success:!0,analysis:t})}catch(o){console.error("❌ Error in sizhu-analysis API:",o.message),console.error("\uD83D\uDD0D Full error:",o);let e=c[pillarType]||"人生階段",t={年柱:"甲申",月柱:"丁巳",日柱:"丁酉",時柱:"庚子"}[pillarType]||"甲子",s={甲申:"竞争与规则并存",丁巳:"才华耀眼但容易三分热度",丁酉:"能力与压力互相成就",庚子:"权威与责任并重"}[t]||"成长与探索";return a.NextResponse.json({success:!0,analysis:{pillarCombination:t,lifeStage:e,analysis:{title:`${pillarType}${t}：${s}的${e}`,whiteExplanation:{description:`白話解釋：在${e}階段，你的環境特色讓你培養出獨特的適應能力。無論是家庭教育還是學校經歷，都在無形中塑造了你的性格特質。`,example:`舉例：就像在成長過程中學會觀察環境變化並靈活應對，這種經歷讓你具備了在複雜情況下保持平衡的智慧。`},wisdomFlow:{concept:`${t}智慧的深層體現`,description:`指你天生具備的洞察力和應變能力。比如能在限制中找到機會，在壓力中保持創新——這種特質不是偶然，而是${t}組合賦予你的獨特天賦。`}}}})}}let u=new r.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/sizhu-analysis/route",pathname:"/api/sizhu-analysis",filename:"route",bundlePath:"app/api/sizhu-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/sizhu-analysis/route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:d,workUnitAsyncStorage:g,serverHooks:h}=u;function m(){return(0,i.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:g})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[7719,580],()=>s(42689));module.exports=o})();