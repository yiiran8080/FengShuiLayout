(()=>{var e={};e.id=1355,e.ids=[1355],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},72327:(e,n,t)=>{"use strict";t.r(n),t.d(n,{patchFetch:()=>$,routeModule:()=>c,serverHooks:()=>g,workAsyncStorage:()=>p,workUnitAsyncStorage:()=>u});var r={};t.r(r),t.d(r,{POST:()=>i});var s=t(96559),o=t(48088),a=t(37719);async function i(e){try{let{user1Info:n,user2Info:t,currentYear:r,concern:s="感情"}=await e.json();if(!n||!t)return Response.json({error:"Missing couple information"},{status:400});let{birthday:o,gender:a,name:i}=n,{birthday:c,gender:p,name:u}=t,g=`你是專業的八字命理分析師。請根據夫妻雙方的八字信息進行夫妻感情關鍵季節分析：

夫妻八字信息：
- ${i}生日：${o}，性別：${a}
- ${u}生日：${c}，性別：${p}
- 分析年份：${r}
- 關注領域：夫妻${s}

請針對夫妻雙方的具體八字合盤和夫妻${s}關注領域，提供個人化的夫妻關鍵季節分析。**每個季節的內容長度要均衡，每季節約100字左右**：

【夫妻關鍵季節分析】

#### **春季（寅卯辰月，木旺）**：
根據夫妻雙方八字合盤分析春季木旺對夫妻${s}的具體影響。需包含：
- 雙方八字中木的作用如何影響夫妻關係
- 對夫妻${s}的正面影響和潛在風險
- 具體夫妻相處建議（2-3條具體行動建議）
- 春季夫妻互動重點和注意事項
**內容長度：約100字**

#### **夏季（巳午未月，火土極旺）**：
分析火土極旺期對夫妻${s}的影響。需包含：
- 火旺對夫妻雙方八字的影響和夫妻關係變化
- 夫妻${s}方面的危險期預警
- 夫妻防護措施和化解方法（2-3條具體措施）
- 夏季夫妻衝突預防和情緒管理建議
**內容長度：約100字**

#### **秋季（申酉戌月，金旺）**：
分析金旺期對夫妻關係的影響。需包含：
- 金旺對夫妻雙方的影響和相處模式
- 秋季夫妻關係的機遇和挑戰
- 夫妻關係調和建議（2-3條具體建議）
- 秋季夫妻共同成長和感情鞏固方法
**內容長度：約100字**

#### **冬季（亥子丑月，水旺）**：
分析水旺調候期對夫妻關係的作用。需包含：
- 水旺的調候作用對夫妻${s}的幫助
- 冬季夫妻關係修復的機遇
- 夫妻感情修復和規劃建議（2-3條具體建議）
- 冬季夫妻深度溝通和來年準備工作
**內容長度：約100字**

參考格式和風格：

夫妻感情示例：
春季（寅卯辰月，木旺）：木主生發，夫妻感情萌芽期。${i}的印星得助，利於理解包容；${u}的比劫旺盛，需注意情緒表達。夫妻宜：多戶外活動增進感情、開放溝通表達想法、共同制定年度計劃。辰月濕土調和，適合深入了解彼此內心。

夏季（巳午未月，火土極旺）：夫妻感情考驗期！火旺易引發爭執，雙方情緒激動。務必：控制脾氣避免激烈爭吵、給彼此適當空間冷靜、重大決定延後討論、多關注對方優點。未月土旺加劇，特別注意家庭經濟壓力對感情的影響。

秋季（申酉戌月，金旺）：夫妻感情收穫期。申月（金水）：最佳溝通窗口，利於深度交流、化解誤會、重建信任。酉月（純金）：感情鞏固期，適合做重要承諾、規劃未來、增進親密度。戌月（土金）：注意家庭責任分工，避免因瑣事影響感情。

冬季（亥子丑月，水旺）：夫妻感情深化期！水主情感深度，最利修復感情裂痕、增進理解。亥子月調候最佳：加強情感交流（深夜談心、分享內心）、培養共同興趣愛好、規劃未來藍圖、修復過往傷害。丑月土庫收藏，適合總結感情經驗、制定長期感情目標、為來年感情發展奠定基礎。

夫妻婚姻示例：
春季（寅卯辰月，木旺）：婚姻新生期，木氣生發利於婚姻關係更新。雙方印星互助，利於相互支持、共同成長。建議：重新審視婚姻目標、增加夫妻共同活動、改善溝通方式。辰月適合處理婚姻中的實際問題。

夏季（巳午未月，火土極旺）：婚姻危機期！火旺沖克，易發生婚姻衝突。務必：避免提及敏感話題、暫緩重大婚姻決定、尋求專業婚姻諮詢、加強家庭責任感。未月注意經濟壓力對婚姻的影響。

要求：
1. 必須基於夫妻雙方具體八字合盤進行個人化分析，體現夫妻八字的相互作用
2. 針對夫妻${s}領域提供專業且具體的季節性建議
3. 每個季節必須包含標準格式：#### **季節名（地支月份，五行旺相）**：
4. **四個季節的內容長度要均衡**，每季節約100字左右，包含：
   - 具體的夫妻八字合盤分析要點
   - 夫妻關係影響的重點說明
   - 具體可執行的夫妻相處建議（2-3條）
   - 該季節的特殊注意事項
5. 內容要具體實用，包含具體的夫妻互動指導
6. 語言專業but易懂，體現八字合盤命理的專業性
7. 重點突出夫妻關係危險期的防護措施和有利期的把握方法
8. 提供具體實例和操作建議，避免空泛的概念性描述
9. **確保四個季節的內容都完整且長度相近，平衡詳細程度**
10. 分析中要體現${i}和${u}的個性化特點和相處模式
11. 每季節控制在80-120字範圍內，保持內容密度一致

請確保每個季節的夫妻分析都足夠詳細深入，為夫妻雙方提供真正有價值的個人化感情經營指導。`,$=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:g}],stream:!1,max_tokens:6e3,temperature:.6})});if(!$.ok)return console.error("DeepSeek API Error:",$.status,$.statusText),Response.json({error:"AI analysis service unavailable"},{status:500});let m=await $.json(),d=m.choices?.[0]?.message?.content;if(!d)return Response.json({error:"No couple season analysis generated"},{status:500});let f=function(e,n,t,r){try{let s=[{name:"春季",period:"寅卯辰月，木旺",icon:"\uD83C\uDF38",color:"bg-green-500",keyPoints:["感情萌芽","寅卯辰月","木旺生發"]},{name:"夏季",period:"巳午未月，火土極旺",icon:"☀️",color:"bg-red-500",keyPoints:["情感考驗","巳午未月","火旺沖克"]},{name:"秋季",period:"申酉戌月，金旺",icon:"\uD83C\uDF42",color:"bg-yellow-500",keyPoints:["感情收穫","申酉戌月","金旺調和"]},{name:"冬季",period:"亥子丑月，水旺",icon:"❄️",color:"bg-blue-500",keyPoints:["感情修復","亥子丑月","水旺調候"]}];return s.forEach(s=>{let o="";for(let n of[RegExp(`【${s.name}[^】]*】[：:]?\\s*([\\s\\S]*?)(?=【|####|$)`,"g"),RegExp(`\\*\\*${s.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=\\*\\*|####|$)`,"g"),RegExp(`####\\s*\\*\\*${s.name}[^*]*\\*\\*[：:]?\\s*([\\s\\S]*?)(?=####|$)`,"g"),RegExp(`${s.name}（[^）]*）[：:]?\\s*([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)（|####|$)`,"g"),RegExp(`${s.name}[^\\n]*[：:]([\\s\\S]*?)(?=(?:春季|夏季|秋季|冬季)|###|$)`,"g")]){let t;for(n.lastIndex=0;null!==(t=n.exec(e));)if(t[1]){let e=t[1].trim();if(e.length>50){o=e;break}}if(o)break}if(!o||o.length<50)for(let n of[RegExp(`${s.name}[^\\n]*\\n([\\s\\S]{50,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,"g"),RegExp(`${s.name}[^。]*。([\\s\\S]{30,400}?)(?=(?:春季|夏季|秋季|冬季)|$)`,"g")]){let t;for(n.lastIndex=0;null!==(t=n.exec(e));)if(t[1]&&t[1].trim().length>30){o=t[1].trim();break}if(o)break}if(o&&o.length>20){if((o=o.replace(/^[：:]\s*/,"").replace(/^[。．]\s*/,"").replace(/【[^】]*】/g,"").replace(/\*\*/g,"").replace(/####/g,"").replace(/^\s*[-•]\s*/gm,"").replace(/\s*。\s*(?=。)/g,"").replace(/\n\s*\n/g,"\n").trim()).length<200){let e=l(s.name,n,t,r);o.length<150&&e.length>100&&(o=o+" "+e)}s.content=o}else s.content=l(s.name,n,t,r)}),{seasons:s,fullContent:e,title:`夫妻關鍵季節&注意事項 (${n}指南)`}}catch(e){return console.error("Couple season content parsing error:",e),function(e,n,t){let r=n.name||"男方",s=t.name||"女方";return{seasons:[{name:"春季",period:"寅卯辰月，木旺",icon:"\uD83C\uDF38",color:"bg-green-500",content:l("春季",e,n,t),keyPoints:["感情萌芽","寅卯辰月","木旺生發"]},{name:"夏季",period:"巳午未月，火土極旺",icon:"☀️",color:"bg-red-500",content:l("夏季",e,n,t),keyPoints:["情感考驗","巳午未月","火旺沖克"]},{name:"秋季",period:"申酉戌月，金旺",icon:"\uD83C\uDF42",color:"bg-yellow-500",content:l("秋季",e,n,t),keyPoints:["感情收穫","申酉戌月","金旺調和"]},{name:"冬季",period:"亥子丑月，水旺",icon:"❄️",color:"bg-blue-500",content:l("冬季",e,n,t),keyPoints:["感情修復","亥子丑月","水旺調候"]}],title:`夫妻關鍵季節&注意事項 (${e}指南)`,fullContent:`${r}與${s}的夫妻季節分析基礎版本。`}}(n,t,r)}}(d,s,n,t);return Response.json({success:!0,analysis:{concern:s,content:d,parsed:f,timestamp:new Date().toISOString()}})}catch(e){return console.error("Couple Season Analysis Error:",e),Response.json({error:"Couple season analysis generation failed"},{status:500})}}function l(e,n,t,r){let s=t.name||"男方",o=r.name||"女方",a={感情:{春季:`${s}與${o}在春季木旺期間，感情迎來新的萌芽機會。木主生發，利於雙方開放溝通、增進理解。建議：1）多進行戶外活動增進感情，2）共同制定年度感情目標，3）辰月適合深入了解彼此內心世界。春季宜主動表達關愛，為全年感情發展奠定基礎。`,夏季:`${s}與${o}在夏季需特別注意情緒管理。火旺易引發爭執，雙方應保持理性。建議：1）控制脾氣避免激烈爭吵，2）給彼此適當空間冷靜思考，3）重大決定延後到秋季討論。未月注意家庭經濟壓力對感情的影響，多關注對方優點維護感情穩定。`,秋季:`${s}與${o}迎來感情收穫期。金氣收斂利於感情關係穩定發展。建議：1）申月適合深度交流化解前期誤會，2）酉月感情鞏固可做重要承諾規劃未來，3）戌月注意家庭責任分工避免摩擦。秋季是感情關係成熟和收穫的最佳時機，把握機會鞏固感情基礎。`,冬季:`${s}與${o}進入感情深化黃金期！水旺調候最利修復感情裂痕。建議：1）亥子月加強情感交流培養共同興趣，2）共同規劃未來藍圖制定長期目標，3）丑月總結感情經驗為來年發展做準備。冬季深度溝通效果最佳，是修復關係和增進理解的關鍵時期。`},婚姻:{春季:`${s}與${o}迎來婚姻新生期，木氣生發利於婚姻關係更新發展。建議：1）重新審視婚姻目標調整相處模式，2）增加夫妻共同活動增進親密度，3）改善溝通方式提升理解品質。辰月適合處理婚姻中的實際問題，為全年婚姻和諧奠定基礎。`,夏季:`${s}與${o}面臨婚姻考驗期。火旺沖克易發生衝突，需要謹慎應對。建議：1）避免討論敏感話題減少爭執，2）暫緩重大婚姻決定等待理性時機，3）加強家庭責任感共同面對挑戰。未月特別注意經濟壓力對婚姻和諧的影響，多展現關愛支持。`,秋季:`${s}與${o}進入婚姻穩定期。金氣收斂有助婚姻關係成熟發展。建議：1）申月利於解決婚姻中的實際問題，2）酉月適合鞏固夫妻關係做出長期承諾，3）戌月注意家務分工維護家庭和諧。秋季是婚姻關係鞏固和升華的最佳時機。`,冬季:`${s}與${o}迎來婚姻修復最佳期！水旺調候利於重建和諧夫妻關係。建議：1）制定夫妻溝通規則改善互動品質，2）重新分配家庭責任實現公平合理，3）規劃婚姻長期目標加強親密關係。丑月總結婚姻經驗制定來年發展計劃，為婚姻長久幸福做準備。`}};return a[n]?.[e]||`${s}與${o}在${e}期間請根據雙方具體情況謹慎分析夫妻關係發展。建議加強溝通理解，共同面對季節性的關係挑戰，把握有利時機促進感情發展。`}let c=new s.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/couple-season-analysis/route",pathname:"/api/couple-season-analysis",filename:"route",bundlePath:"app/api/couple-season-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/couple-season-analysis/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:p,workUnitAsyncStorage:u,serverHooks:g}=c;function $(){return(0,a.patchFetch)({workAsyncStorage:p,workUnitAsyncStorage:u})}},78335:()=>{},96487:()=>{},96559:(e,n,t)=>{"use strict";e.exports=t(44870)}};var n=require("../../../webpack-runtime.js");n.C(e);var t=e=>n(n.s=e),r=n.X(0,[7719],()=>t(72327));module.exports=r})();