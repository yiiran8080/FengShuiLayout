(()=>{var e={};e.id=3618,e.ids=[3618],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},47749:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>p,serverHooks:()=>u,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>d});var s={};r.r(s),r.d(s,{POST:()=>c});var o=r(96559),i=r(48088),n=r(37719),a=r(32190);async function c(e){try{let t;let r=await e.json();console.log("\uD83C\uDFAF Targeted Suggestions API - Received request:",r);let{femaleUser:s,maleUser:o,femaleBazi:i,maleBazi:n,femalePillars:c,malePillars:p}=r;if(!s||!o)return a.NextResponse.json({error:"Missing required user data for targeted suggestions"},{status:400});let l=i?Object.entries(i).map(([e,t])=>`${e}: ${t}`).join(", "):"未提供",d=n?Object.entries(n).map(([e,t])=>`${e}: ${t}`).join(", "):"未提供",u=c?c.map(e=>`${e.heavenlyStem}${e.earthlyBranch}`).join(" "):"未提供",g=p?p.map(e=>`${e.heavenlyStem}${e.earthlyBranch}`).join(" "):"未提供",m=`作為專業的八字命理師，請分析這對情侶的八字配置，提供針對性建議破除"克"的焦慮。

**情侶資訊：**
- 女方：${s.name}，生日：${s.birthday}
- 男方：${o.name}，生日：${o.birthday}

**八字資訊：**
- 女方八字：${l}
- 女方四柱：${u}
- 男方八字：${d}  
- 男方四柱：${g}

請先分析他們的八字特點，然後提供具體建議：

**分析要求：**
1. 識別雙方日主元素和主要五行配置
2. 找出可能的相克或不和諧點
3. 確定需要增強或調和的元素
4. 提供具體的化解方法

**回應格式要求：**
請以JSON格式回應，包含以下結構：

{
  "elementBalance": {
    "title": "增強[具體缺失元素]平衡（[具體元素][具體作用]）",
    "description": "提供實用方法（如[具體佩戴建議]，或[具體環境佈置]）",
    "methods": [
      {
        "icon": "[emoji]",
        "title": "[具體方法名稱]",
        "description": "[詳細操作步驟和原理解釋]"
      }
    ]
  },
  "communicationTransformation": {
    "title": "轉化溝通模式",
    "description": "當[具體過旺元素]過旺時，用[具體元素]方式疏導（如[具體活動建議]，[具體效果]）",
    "methods": [具體方法數組]
  },
  "anchorRitual": {
    "title": "心錨儀式",
    "description": "推薦每日行動，如[具體身體動作]默念肯定語（如"[根據八字定制肯定語]"），強化[具體改善目標]",
    "methods": [具體儀式數組]
  },
  "energyValidationCase": {
    "title": "能量印證案例",
    "description": "分享類似[他們具體配置]案例",
    "caseStudy": {
      "configuration": "[與他們相似的具體配置]",
      "initialChallenge": "[具體挑戰描述]",
      "adjustmentProcess": "[具體調整方法]",
      "positiveOutcome": "[具體成功結果]",
      "keyInsight": "[關鍵洞察]"
    }
  }
}

**重要：**
- 所有標題和描述必須基於他們的實際八字配置
- 不要使用通用模板，要根據具體元素組合提供建議
- 例如：如果女方缺木，男方火旺，標題應該是"增強木元素平衡（木元素疏通火土對沖）"
- 肯定語要根據他們的日主和用神來定制
- 所有建議要可操作且有八字理論依據`;console.log("\uD83E\uDD16 Sending prompt to DeepSeek API:",m.substring(0,200)+"...");let h=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是一位專業的八字命理師，專精於情侶配對分析和風水調和建議。請提供實用、具體的針對性建議。"},{role:"user",content:m}],temperature:.7,max_tokens:2e3})});if(!h.ok)throw console.error("DeepSeek API error:",await h.text()),Error(`DeepSeek API error: ${h.status}`);let y=await h.json();console.log("\uD83E\uDD16 DeepSeek API response received");let j=y.choices[0].message.content;console.log("\uD83D\uDD0D Raw AI response:",j);try{j=j.replace(/```json\n?/g,"").replace(/```\n?/g,""),t=JSON.parse(j)}catch(e){console.error("Failed to parse AI response as JSON:",e),t={elementBalance:{title:"增強木元素平衡（木元素疏通土壅化解相克）",description:"提供實用方法（如佩戴綠幽靈手鏈調和土重，或在東方放置綠色植物增強木氣）",methods:[{icon:"\uD83C\uDF3F",title:"佩戴綠幽靈手鏈",description:"選擇天然綠幽靈水晶，補充命中木元素不足，化解土重困頓，建議戴在左手以接收木氣能量，每日晨起佩戴。"},{icon:"\uD83E\uDEB4",title:"東方綠植佈置",description:"在居家東方位置（木位）放置常綠植物如富貴竹或綠蘿，增強木元素流動，每週澆水時默念'木生火旺，化解土克'。"}]},communicationTransformation:{title:"轉化溝通模式",description:"當火土能量過旺時，用水木方式疏導（如共同泡茶品茗，以水潤燥平和心境）",methods:[{icon:"�",title:"共同品茗儀式",description:"每週至少兩次一起泡茶品茗，選擇綠茶或烏龍茶（木火屬性），在泡茶過程中練習耐心聆聽，用茶香調和急躁情緒。"},{icon:"\uD83D\uDCA7",title:"水元素調和活動",description:"定期到海邊或湖邊散步，讓水元素平衡內在火氣，在水邊時練習深呼吸，釋放心中的對立情緒。"}]},anchorRitual:{title:"心錨儀式",description:"推薦每日行動，如雙手按心輪默念肯定語（如'木火通明，水土相濟'），強化五行平衡意識",methods:[{icon:"\uD83D\uDE4F",title:"晨起五行冥想",description:"每日清晨面向東方，雙手按心輪位置，緩慢深呼吸，默念'木火通明，水土相濟，五行和諧'三遍，建立內在平衡感。"},{icon:"\uD83C\uDF05",title:"夕陽感恩儀式",description:"黃昏時面向西方，雙手按小腹，默念'感恩差異，化克為生，相愛相容'，強化對伴侶五行特質的理解與接納。"}]},energyValidationCase:{title:"能量印證案例",description:"分享類似木不足火土旺配置案例，經過木元素調和後轉化為正面成果",caseStudy:{configuration:"女方戊土日主土重 / 男方丙火日主火旺",initialChallenge:"初期因土重火旺導致固執與急躁並存，女方過於堅持己見，男方容易暴躁，加上缺木疏通，能量堵塞產生頻繁爭吵。",adjustmentProcess:"透過增加木元素調和：居家東方放置大型綠植、雙方佩戴木質飾品、每週進行園藝活動，並在溝通前先深呼吸默念'木生火旺，火生土和'以提醒自己保持疏通心態。",positiveOutcome:"三個月後，木元素的疏通作用開始顯現，女方土重轉為穩重可靠，男方火旺轉為行動力強，木生火、火生土的良性循環使他們的合作更有成效，共同投資的項目獲得成功。",keyInsight:"缺失元素的補充比壓制過旺元素更有效，木元素如橋樑般連接了土火能量。"}}}}return console.log("✅ Targeted Suggestions generation completed successfully"),a.NextResponse.json(t)}catch(e){return console.error("❌ Targeted Suggestions API error:",e),a.NextResponse.json({error:"Internal server error",details:e.message},{status:500})}}let p=new o.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/targeted-suggestions/route",pathname:"/api/targeted-suggestions",filename:"route",bundlePath:"app/api/targeted-suggestions/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/targeted-suggestions/route.js",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:d,serverHooks:u}=p;function g(){return(0,n.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:d})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[7719,580],()=>r(47749));module.exports=s})();