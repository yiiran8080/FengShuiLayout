(()=>{var e={};e.id=2218,e.ids=[2218],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},95563:(e,t,s)=>{"use strict";s.r(t),s.d(t,{patchFetch:()=>g,routeModule:()=>d,serverHooks:()=>v,workAsyncStorage:()=>y,workUnitAsyncStorage:()=>f});var i={};s.r(i),s.d(i,{POST:()=>c});var a=s(96559),n=s(48088),r=s(37719),o=s(32190);let l=process.env.DEEPSEEK_API_KEY,p=(e,t,s="未知")=>e&&e[t]||s,m=e=>e&&Array.isArray(e)?{year:e[0]||{heavenly:"甲",earthly:"子"},month:e[1]||{heavenly:"乙",earthly:"丑"},day:e[2]||{heavenly:"丙",earthly:"寅"},hour:e[3]||{heavenly:"丁",earthly:"卯"}}:{year:{heavenly:"甲",earthly:"子"},month:{heavenly:"乙",earthly:"丑"},day:{heavenly:"丙",earthly:"寅"},hour:{heavenly:"丁",earthly:"卯"}},u=e=>{console.log("\uD83D\uDCCB Parsing key analysis response:",e);try{let t=e.replace(/```json\n?/g,"").replace(/```\n?/g,"").trim().match(/\{[\s\S]*\}/);if(t)try{let e=JSON.parse(t[0]);if(e.fiveElementsCompatibility&&e.fiveElementsCompatibility.female&&e.fiveElementsCompatibility.male){let t=e.fiveElementsCompatibility.female.description,s=e.fiveElementsCompatibility.male.description;if(t&&t.length>50&&s&&s.length>50)return console.log("✅ Successfully parsed JSON response with valid content"),{...e,fiveElementsCompatibility:{...e.fiveElementsCompatibility,icons:{female:"\uD83C\uDF0A",male:"\uD83D\uDCA7",compatibility:"⚖️"}}}}}catch(e){console.log("❌ JSON parsing failed, falling back to structured fallback:",e.message)}let s=e.split("\n").filter(e=>e.trim()),i={fiveElementsCompatibility:{female:{dayMaster:"",description:""},male:{dayMaster:"",description:""},overallEnergy:"",complementarity:"",essence:"能量互補而非不平衡",icons:{female:"\uD83C\uDF0A",male:"\uD83D\uDCA7",compatibility:"⚖️"}},spouseStarStatus:{userStatus:"",partnerConfiguration:"",analysis:"",recommendation:""},attentionNeededConfigurations:{potentialIssues:[],description:"易放大矛盾，但視為可調整的能量點",adjustmentApproach:"通過五行調和平衡能量流動"}},a="";for(let e of s){let t=e.trim();if(!(!t||t.includes("```"))){if(t.includes("五行互補性")){a="fiveElements";continue}if(t.includes("夫星狀態")||t.includes("妻星狀態")){a="spouseStar";continue}if(t.includes("需注意的配置")){a="attention";continue}if("fiveElements"===a){if(t.includes("用戶日主")||t.includes("女方")){let e=t.match(/([甲乙丙丁戊己庚辛壬癸][水火木金土])/);e&&(i.fiveElementsCompatibility.female.dayMaster=e[1]);let s=t.match(/[：:]\s*(.+)/);s&&(i.fiveElementsCompatibility.female.description=s[1])}else if(t.includes("伴侶日主")||t.includes("男方")){let e=t.match(/([甲乙丙丁戊己庚辛壬癸][水火木金土])/);e&&(i.fiveElementsCompatibility.male.dayMaster=e[1]);let s=t.match(/[：:]\s*(.+)/);s&&(i.fiveElementsCompatibility.male.description=s[1])}else t.includes("整體能量")?i.fiveElementsCompatibility.overallEnergy=t.replace(/整體能量[：:]?\s*/,""):(t.includes("互補")||t.includes("調和"))&&(i.fiveElementsCompatibility.complementarity=t)}else"spouseStar"===a?t.includes("正官")||t.includes("配偶")?i.spouseStarStatus.userStatus=t:t.includes("日支")||t.includes("相刑")?i.spouseStarStatus.partnerConfiguration=t:(t.includes("根基")||t.includes("摩擦"))&&(i.spouseStarStatus.analysis=t):"attention"===a&&(t.includes("食神")||t.includes("劫財")||t.includes("制殺"))&&i.attentionNeededConfigurations.potentialIssues.push(t)}}return i.fiveElementsCompatibility.female.dayMaster||(i.fiveElementsCompatibility.female.dayMaster="壬水",i.fiveElementsCompatibility.female.description="月柱戊貴-食神制殺"),i.fiveElementsCompatibility.male.dayMaster||(i.fiveElementsCompatibility.male.dayMaster="癸水",i.fiveElementsCompatibility.male.description="時柱壬子-水勁財旺"),i.fiveElementsCompatibility.overallEnergy||(i.fiveElementsCompatibility.overallEnergy="火土強 vs. 金水旺"),i.fiveElementsCompatibility.complementarity||(i.fiveElementsCompatibility.complementarity="金水調和火土，形成流通"),i.spouseStarStatus.userStatus||(i.spouseStarStatus.userStatus="正官戊土坐寅木長生位",i.spouseStarStatus.partnerConfiguration="日支未土與用戶戌土相刑",i.spouseStarStatus.analysis="配偶根基穩固，但可能引發摩擦，可通過調和緩解"),0===i.attentionNeededConfigurations.potentialIssues.length&&(i.attentionNeededConfigurations.potentialIssues=["食神制殺導致要求過高","劫財旺影響金錢觀念","水過旺容易情緒波動"]),console.log("\uD83D\uDCCA Final parsed key analysis result:",i),i}catch(e){return console.error("❌ Error parsing key analysis response:",e),{fiveElementsCompatibility:{female:{dayMaster:"壬水",description:"月柱戊貴-食神制殺"},male:{dayMaster:"癸水",description:"時柱壬子-水勁財旺"},overallEnergy:"火土強 vs. 金水旺",complementarity:"金水調和火土，形成流通",essence:"能量互補而非不平衡",icons:{female:"\uD83C\uDF0A",male:"\uD83D\uDCA7",compatibility:"⚖️"}},spouseStarStatus:{userStatus:"正官戊土坐寅木長生位",partnerConfiguration:"日支未土與用戶戌土相刑",analysis:"配偶根基穩固，但可能引發摩擦，可通過調和緩解",recommendation:"加強土元素穩定性，減少相刑影響"},attentionNeededConfigurations:{potentialIssues:["食神制殺導致要求過高","劫財旺影響金錢觀念","水過旺容易情緒波動"],description:"易放大矛盾，但視為可調整的能量點",adjustmentApproach:"通過五行調和平衡能量流動"}}}};async function c(e){try{let t=await e.json();console.log("\uD83D\uDD0D Key Analysis API - Received request:",t);let{femaleUser:s,maleUser:i,femaleBazi:a,maleBazi:n,femalePillars:r,malePillars:c}=t;if(!s||!i)return o.NextResponse.json({error:"Missing user data"},{status:400});let d=s.birthday&&s.gender,y=i.birthday&&i.gender;if(!d||!y)return o.NextResponse.json({error:"Missing birthday or gender information"},{status:400});let f=p(a,"name","female"),v=p(n,"name","male"),g=m(r),h=m(c);console.log("\uD83D\uDCCA BaZi Data:",{femaleBaziInfo:f,maleBaziInfo:v,femalePillarsInfo:g,malePillarsInfo:h});let S=`你是專業的八字命理師，請為這對情侶提供關鍵分析。

**情侶資料：**
女方：${s.name}
- 出生日期：${s.birthday}
- 性別：${s.gender}
- 八字資料：${a?"已提供詳細八字":"基於出生日期進行分析"}

男方：${i.name}  
- 出生日期：${i.birthday}
- 性別：${i.gender}
- 八字資料：${n?"已提供詳細八字":"基於出生日期進行分析"}

請以JSON格式回應，提供完整的關鍵分析：

{
  "fiveElementsCompatibility": {
    "female": {
      "dayMaster": "[女方日主如壬水]",
      "description": "[完整的女方八字特質分析，包含優缺點和建議，至少150字]"
    },
    "male": {
      "dayMaster": "[男方日主如癸水]", 
      "description": "[完整的男方八字特質分析，包含優缺點和建議，至少150字]"
    },
    "overallEnergy": "[整體能量描述如火土強 vs. 金水旺]",
    "complementarity": "[具體的互補分析，解釋如何相互平衡，至少100字]",
    "essence": "能量互補而非不平衡"
  },
  "spouseStarStatus": {
    "userStatus": "[女方夫星完整分析，包含正官配置和影響，至少100字]",
    "partnerConfiguration": "[男方妻星完整分析，包含配置和可能問題，至少100字]", 
    "analysis": "[整體夫妻星配置分析，包含互動關係和建議，至少150字]",
    "recommendation": "[具體調和建議]"
  },
  "attentionNeededConfigurations": {
    "potentialIssues": ["具體問題1", "具體問題2", "具體問題3"],
    "description": "[問題的整體描述和影響]",
    "adjustmentApproach": "[具體的調整方法和步驟]"
  }
}

**重要要求：**
- 基於提供的出生日期和性別信息進行專業分析
- 即使沒有完整八字，也要根據生日推算基本五行特質
- 所有description字段必須是完整的段落，不能有"無法分析"或"資料缺失"
- 每個分析要具體實用，提供有價值的關係建議
- 強調互補性和解決方案，而非負面描述
- 用專業但易懂的語言，避免過於技術性的術語
- 確保所有內容完整且有意義，不能出現"需要更多資料"的說法

請基於他們的出生信息，提供專業的關鍵分析，重點關注性格特質、關係互補性和實用建議。`;console.log("\uD83D\uDCE4 Sending prompt to DeepSeek:",S);let E=await fetch("https://api.deepseek.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${l}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是專業的八字命理師，擅長分析八字配對和五行互補關係，提供準確的關鍵分析。"},{role:"user",content:S}],max_tokens:2e3,temperature:.7})});if(!E.ok)throw console.error("❌ DeepSeek API error:",E.status,E.statusText),Error(`DeepSeek API error: ${E.status}`);let C=await E.json();console.log("✅ DeepSeek API response:",C);let b=C.choices?.[0]?.message?.content||"";console.log("\uD83E\uDD16 AI Response:",b);let k=u(b);return console.log("\uD83D\uDCCB Parsed key analysis result:",k),o.NextResponse.json(k)}catch(e){return console.error("❌ Key Analysis API error:",e),o.NextResponse.json({fiveElementsCompatibility:{female:{dayMaster:"壬水",description:"您的八字以壬水日主為命格基礎，具有靈活變通的特質，善於適應環境變化。壬水如江河般寬廣包容，在感情中能夠體諒伴侶的不同想法。不過，您的八字中若缺少木元素疏通，可能在表達情感時顯得過於直接或理性化，建議透過增加綠色植物、參與自然活動等方式來補充木氣，有助於提升溫柔體貼的一面。您的感性需要透過藝術創作或音樂來喚醒，這樣能讓伴侶感受到更多情感層次。"},male:{dayMaster:"癸水",description:"您以癸水日主為命格核心，天性溫和內斂，富有同情心和包容力。癸水如甘露般細膩溫潤，在感情中總是默默付出，善於感受伴侶的情緒變化。您的八字若木氣充足，能有效疏通感情中的僵局，為關係帶來創造力與靈活性。在感情中您扮演調和者角色，善於化解矛盾。建議保持這種平衡特質，同時在關鍵時刻展現更多主導力和決斷力，讓伴侶感受到您的堅定支持與可靠感。"},overallEnergy:"火土強勢 vs. 金水流通",complementarity:"你們的五行配置呈現出動態平衡的特質，男方金水可調和女方火土的燥熱，女方火土可穩定男方金水的浮動性。這種互補關係如同水潤大地、大地承載江河，形成自然和諧的能量循環。你們的差異正是關係的優勢所在。",essence:"能量互補而非不平衡",icons:{female:"\uD83C\uDF0A",male:"\uD83D\uDCA7",compatibility:"⚖️"}},spouseStarStatus:{userStatus:"女方夫星配置中，若正官為戊土且坐長生位（如戊寅日），象徵配偶具有成長性與責任感，能在事業與家庭間找到平衡點。這種配置顯示您的伴侶具有長期發展潛力，且能在關係中承擔應有責任。若逢天乙貴人星，更強化婚姻穩定性，代表伴侶能在關鍵時刻提供智慧指導和情感支持。",partnerConfiguration:"男方妻星配置中，若正財星與日支形成特殊組合，可能在價值觀與金錢使用上需要更多溝通協調，特別是對於生活品質標準的不同看法。不過這種差異可以透過互相理解和溝通來化解，甚至轉化為互補優勢，建立更豐富的生活模式。",analysis:"整體而言，你們的夫妻星配置顯示雙方都具備長期承諾的特質，能夠在關係中形成良好的互補效應。需要注意的是在價值觀磨合期要保持耐心，透過五行調和的方式來緩解潛在摩擦。建議你們可以共同參與一些土元素相關的活動，或在居家環境中加入適當的金屬元素裝飾，有助於平衡能量場。",recommendation:"建議加強土元素穩定性，在家中西南方位放置陶瓷擺件或暖色調裝飾，同時可透過佩戴金屬飾品來調和能量，創造更和諧的關係氛圍。"},attentionNeededConfigurations:{potentialIssues:["過度理性化可能影響情感表達的溫度","價值觀差異需要更多溝通協調","能量流動需要適當的疏通管道"],description:"這些配置特點容易被誤解為問題，但實際上它們是可以調整和優化的能量點，透過正確的方法可以轉化為關係優勢。",adjustmentApproach:"透過五行調和平衡能量流動，增加木元素疏通（如綠色植物、自然活動），加強土元素穩定（如陶瓷用品、溫暖色調），建立規律的溝通習慣來優化關係動態。"}})}}let d=new a.AppRouteRouteModule({definition:{kind:n.RouteKind.APP_ROUTE,page:"/api/key-analysis/route",pathname:"/api/key-analysis",filename:"route",bundlePath:"app/api/key-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/key-analysis/route.js",nextConfigOutput:"",userland:i}),{workAsyncStorage:y,workUnitAsyncStorage:f,serverHooks:v}=d;function g(){return(0,r.patchFetch)({workAsyncStorage:y,workUnitAsyncStorage:f})}},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),i=t.X(0,[7719,580],()=>s(95563));module.exports=i})();