(()=>{var e={};e.id=8409,e.ids=[8409],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},54419:(e,t,n)=>{"use strict";n.r(t),n.d(t,{patchFetch:()=>p,routeModule:()=>c,serverHooks:()=>d,workAsyncStorage:()=>g,workUnitAsyncStorage:()=>u});var o={};n.r(o),n.d(o,{POST:()=>i});var s=n(96559),r=n(48088),l=n(37719);async function i(e){try{let{userInfo:t}=await e.json();if(!t)return Response.json({error:"Missing user information"},{status:400});let{concern:n,birthday:o,gender:s,time:r}=t,l=`你是專業的八字命理分析師。請用繁體中文回答，根據以下信息進行精準的吉凶分析：

用戶信息：
- 生日：${o}
- 性別：${s}
- 時間：${r}
- 關注領域：${n}

請按照以下格式提供 ${n} 的吉凶分析：

【3個吉象與3個凶象】

【3個吉象（被動防護，需極致保守方能顯現）】：
請提供3個具體的吉象，每個必須包含：
- 標題（必須是有意義的四字詞語，如：貴人暗助、厚積薄發、穩中得財、暗中得助、技能避險、根基穩固）
- 詳細內容（150-200字，完整描述）

重要：標題必須是經典的四字成語或風水術語，絕對不可以是句子的前四個字！

吉象四字詞語示例：
- 貴人暗助（有長輩或專業人士的幫助）
- 厚積薄發（通過長期積累獲得收益）
- 穩中得財（保守策略下的財富增長）
- 暗中得助（意外的幫助或機會）
- 技能避險（專業技能帶來的保護）
- 根基穩固（基礎牢固，穩定發展）

格式如下：
① [有意義的四字詞語]：[詳細內容...]
② [有意義的四字詞語]：[詳細內容...]  
③ [有意義的四字詞語]：[詳細內容...]

【3個凶象（主導致命，強力影響）】：
請提供3個具體的凶象，每個必須包含：
- 標題（必須是有意義的四字詞語，如：比劫奪財、小人妨害、決策失誤、官非口舌、刑沖動盪、破財損耗）
- 詳細內容（150-200字，完整描述）

凶象四字詞語示例：
- 比劫奪財（競爭者搶奪利益）
- 小人妨害（有人從中作梗）
- 決策失誤（判斷錯誤導致損失）
- 官非口舌（法律糾紛或爭執）
- 刑沖動盪（環境變化帶來不穩定）
- 破財損耗（意外支出或投資虧損）

格式如下：
① [有意義的四字詞語]：[詳細內容...]
② [有意義的四字詞語]：[詳細內容...]
③ [有意義的四字詞語]：[詳細內容...]

【關鍵季節&注意事項】：
- 最危險的時期
- 相對安全的時期  
- 具體的預防措施

嚴格要求：
1. 基於真實的八字分析，${"工作"===n?"請按事業運勢分析":""}
2. 針對 ${n} 領域提供專業且具體的建議
3. 每個標題必須是有意義的四字詞語，絕對不可以是文章前四個字！
4. 標題必須是成語、專業術語或有完整意義的詞組
5. 語言要專業但易懂，避免過於深奧的術語
6. 總字數控制在800-1000字內

請務必確保每個標題都是完整有意義的四字詞語，而不是句子片段！`,i=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"user",content:l}],stream:!1,max_tokens:2500,temperature:.6})});if(!i.ok)return console.error("DeepSeek API Error:",i.status,i.statusText),Response.json({error:"AI analysis service unavailable"},{status:500});let c=await i.json(),g=c.choices?.[0]?.message?.content;if(!g)return Response.json({error:"No analysis generated"},{status:500});let u=function(e){try{console.log("\uD83D\uDD0D Parsing AI content, length:",e.length),console.log("\uD83D\uDCC4 Content preview:",e.substring(0,500));let t="";for(let n of[/【3個吉象[^】]*】([\s\S]*?)(?=【3個凶象|【關鍵季節|$)/,/【\d+个吉象[^】]*】([\s\S]*?)(?=【\d+个凶象|【關鍵季節|$)/,/吉象[^】]*】([\s\S]*?)(?=凶象|【關鍵季節|$)/,/①\s*\*\*([^*]+)\*\*[：:]([\s\S]*?)(?=②|【|$)/]){let o=e.match(n);if(o){t=o[0],console.log("✅ Found jixiang content with pattern");break}}let n="";for(let t of[/【3個凶象[^】]*】([\s\S]*?)(?=【關鍵季節|$)/,/【\d+个凶象[^】]*】([\s\S]*?)(?=【關鍵季節|$)/,/凶象[^】]*】([\s\S]*?)(?=【關鍵季節|$)/]){let o=e.match(t);if(o){n=o[0],console.log("✅ Found xiongxiang content with pattern");break}}if(!t&&!n){console.log("\uD83D\uDD04 Trying to extract items directly from full content");let t=function(e){let t=[];for(let n of(console.log("\uD83D\uDD0D Extracting numbered items from content"),[/[①②③④⑤⑥]\s*\*\*([^*]+)\*\*[：:]\s*([^①②③④⑤⑥]*?)(?=[①②③④⑤⑥]|【|$)/gs,/[①②③④⑤⑥]\s*([^：\n*]{2,8})[：:]\s*([^①②③④⑤⑥]*?)(?=[①②③④⑤⑥]|【|$)/gs,/\d+[\.、]\s*\*\*([^*]+)\*\*[：:]\s*([^0-9\.].*?)(?=\d+[\.、]|【|$)/gs,/\d+[\.、]\s*([^：\n]{2,8})[：:]\s*([^0-9\.].*?)(?=\d+[\.、]|【|$)/gs,/\*\*([贵人暗助|厚积薄发|稳中得财|技能避险|根基稳固|印星护持|比劫夺财|小人妨害|决策失误|官非口舌|刑冲动荡|破财损耗|暗中得助|细水长流|稳中求进][^*]*)\*\*[：:]\s*([^*]{50,}?)(?=\*\*[贵人暗助|厚积薄发|稳中得财|技能避险|根基稳固|印星护持|比劫夺财|小人妨害|决策失误|官非口舌|刑冲动荡|破财损耗|暗中得助|细水长流|稳中求进]|【|$)/gs])){let o;for(console.log(`🔍 Trying pattern: ${n.toString().substring(0,50)}...`);null!==(o=n.exec(e))&&t.length<6;){let e=o[1]?.trim(),n=o[2]?.trim();if(console.log(`📝 Found match - Title: "${e}", Description length: ${n?.length}`),e&&n&&n.length>30){let o=e.replace(/\*\*/g,"").replace(/【|】/g,"").trim();if(o.length>8){let e=o.match(/[\u4e00-\u9fff]{4}/);o=e?e[0]:o.substring(0,4)}let s=n.replace(/\*\*/g,"").replace(/[\r\n]+/g," ").trim();console.log(`✅ Adding item: "${o}" - ${s.substring(0,100)}...`),t.push({title:o,content:s})}}if(t.length>=6){console.log(`✅ Found enough items (${t.length}), stopping extraction`);break}}return console.log(`📊 Total extracted items: ${t.length}`),t}(e);if(t.length>=3){console.log(`✅ Extracted ${t.length} items from full content`);let n=Math.ceil(t.length/2),o=t.slice(0,n),s=t.slice(n);return{jixiang:o.length>0?o:[{title:"印星護持",content:"通過提升個人資質、信用、專業形象獲得保護，利於穩定收入來源。建議投資學習、考證提升競爭力，靠專業能力和口碑獲得機會。"},{title:"技能避險",content:"在保守前提下，依靠核心專業技能獲得相對可控的報酬，避免冒險創新。專注本職工作，穩扎穩打是最安全的策略。"},{title:"根基穩固",content:"若已有良好基礎，在謹慎策略下可能維持現狀。避免大幅變動和擴張行為，以守為攻，保護現有成果。"}],xiongxiang:s.length>0?s:[{title:"比劫奪財",content:"競爭激烈導致利益受損，收入可能銳減，意外支出增加。需防範合作風險、同行競爭，以及被騙被盜的可能性。"},{title:"刑沖動盪",content:"流年刑沖造成不穩定因素劇增，容易出現意外變故、收入中斷、合作破裂等問題。根基動搖，需格外謹慎。"},{title:"五行失衡",content:"命局配置不當導致該領域問題叢生，風險投資極易虧損，任何冒險行為都可能帶來嚴重後果。"}],seasonInfo:"【關鍵季節】請根據個人八字具體分析關鍵時期。",fullContent:e}}}let o=e.match(/【關鍵季節[^】]*】[\s\S]*$/),s=o?o[0]:"";console.log("\uD83C\uDFAD Jixiang content found:",!!t),console.log("⚡ Xiongxiang content found:",!!n);let r=t?a(t,"吉象"):[];console.log("✅ Extracted jixiang items:",r.length);let l=n?a(n,"凶象"):[];if(console.log("❌ Extracted xiongxiang items:",l.length),0===r.length&&0===l.length&&(console.log("⚠️ No content extracted, checking if AI response was truncated"),!e.trim().slice(-1).match(/[。！？】}]/)))return console.log("� Response seems truncated, returning error instead of fallback"),{error:"AI response was truncated, please try again",jixiang:[],xiongxiang:[],seasonInfo:"",fullContent:e};return{jixiang:r.length>0?r:[],xiongxiang:l.length>0?l:[],seasonInfo:s||"【關鍵季節】請根據個人八字具體分析關鍵時期。",fullContent:e}}catch(t){return console.error("Content parsing error:",t),{error:"Content parsing failed",jixiang:[],xiongxiang:[],seasonInfo:"",fullContent:e}}}(g);return Response.json({success:!0,analysis:{concern:n,content:g,parsed:u,timestamp:new Date().toISOString()}})}catch(e){return console.error("JiXiong Analysis Error:",e),Response.json({error:"Analysis generation failed"},{status:500})}}function a(e,t){let n=[];console.log(`🔍 Extracting ${t} items from content length:`,e.length);let o=e=>{for(let t of["貴人暗助","厚積薄發","穩中得財","印星護持","技能避險","根基穩固","財源廣進","事業有成","步步高升","福星高照","龍鳳呈祥","金玉滿堂","比劫奪財","小人妨害","決策失誤","官非口舌","刑沖動盪","五行失衡","破財損耗","是非纏身","競爭激烈","變動頻繁","壓力沉重","阻礙重重","暗中得助","無心插柳","細水長流","積少成多","謹慎有餘","保守得益","默默耕耘","潛龍在淵","厚德載物","溫和致遠","韜光養晦","靜水流深"])if(e.includes(t))return console.log(`✅ Found idiom: ${t}`),t;for(let t of e.match(/[\u4e00-\u9fff]{4}/g)||[])if(!/^[命局中雖此在因若當的是有為但和與或者其實際上因為所以然而]./.test(t)&&/[助發財星技根源進成升照祥滿劫害誤非沖衡耗身爭變壓礙]/.test(t))return console.log(`✅ Found meaningful phrase: ${t}`),t;return null},s=(e,t,n)=>n?e.includes("印星")||e.includes("貴人")?"貴人暗助":e.includes("積累")||e.includes("細流")?"厚積薄發":e.includes("保守")||e.includes("穩健")?"穩中得財":e.includes("技能")||e.includes("專業")?"技能避險":e.includes("根基")||e.includes("基礎")?"根基穩固":e.includes("隱藏")||e.includes("無心")?"暗中得助":["貴人暗助","厚積薄發","穩中得財","潛力顯現","保守得益","謹慎有餘"][t]||"福星高照":e.includes("比劫")||e.includes("競爭")?"比劫奪財":e.includes("小人")||e.includes("妨害")?"小人妨害":e.includes("決策")||e.includes("失誤")?"決策失誤":e.includes("官非")||e.includes("口舌")?"官非口舌":e.includes("刑沖")||e.includes("動盪")?"刑沖動盪":e.includes("風險")||e.includes("虧損")?"破財損耗":["比劫奪財","小人妨害","決策失誤","阻礙重重","壓力沉重","謹防損失"][t]||"阻礙重重";if(!e||e.length<50){console.log(`⚠️ Content too short for ${t}, using contextual titles`);for(let e=0;e<3;e++){let o=s("",e,"吉象"===t),r="吉象"===t?"此為有利因素，建議在適當時機謹慎把握，以穩健方式促進發展。":"此為不利因素，需要特別注意防範相關風險，謹慎應對挑戰。";n.push({title:o,content:r})}return n}for(let r of[()=>{for(let r of(console.log(`🔍 Trying numbered format extraction for ${t}`),[/[①②③]\s*([^：\n]{2,8})[：:]\s*([^①②③]{30,}?)(?=[①②③]|【|$)/gs,/\d+[\.、]\s*([^：\n]{2,8})[：:]\s*([^0-9]{30,}?)(?=\d+[\.、]|【|$)/gs])){let l;for(;null!==(l=r.exec(e))&&n.length<3;){let e=l[1]?.trim(),r=l[2]?.trim();if(e&&r){console.log(`📝 Found numbered item: ${e}`);let l=o(e+r);!l&&((l=e.replace(/\*\*/g,"").replace(/【|】/g,"").trim()).length<2||/^[命局中雖此在因若當的是有為但和與或者其實際上因為所以然而]/.test(l))&&(l=s(r,n.length,"吉象"===t)),n.push({title:l,content:r.replace(/\*\*/g,"").replace(/---.*$/gs,"").replace(/###.*$/gs,"").trim()})}}if(n.length>=3)break}},()=>{if(n.length<3){let r;console.log(`🔍 Trying colon format extraction for ${t}`);let l=/([^：\n。]{2,8})[：:]\s*([^：\n]{50,}?)(?=\n[^：\n。]{2,8}[：:]|\n\n|【|$)/gs;for(;null!==(r=l.exec(e))&&n.length<3;){let e=r[1]?.trim(),l=r[2]?.trim();if(e&&l){console.log(`📝 Found colon item: ${e}`);let r=o(e+l);!r&&((r=e.replace(/\*\*/g,"").replace(/【|】/g,"").trim()).length<2||/^[命局中雖此在因若當的是有為但和與或者其實際上因為所以然而]/.test(r))&&(r=s(l,n.length,"吉象"===t)),n.push({title:r,content:l.replace(/\*\*/g,"").trim()})}}}}])n.length<3&&r();for(;n.length<3;){console.log(`⚠️ Creating fallback item ${n.length+1} for ${t}`);let e=s("",n.length,"吉象"===t),o="吉象"===t?"此為有利因素，建議在適當時機謹慎把握，以穩健方式促進發展。根據個人八字特點，此象需要耐心等待時機成熟。":"此為不利因素，需要特別注意防範相關風險，謹慎應對挑戰。建議提前做好準備，化解不利影響。";n.push({title:e,content:o})}return console.log(`✅ Final ${t} items:`,n.length),n.slice(0,3)}let c=new s.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/jixiong-analysis/route",pathname:"/api/jixiong-analysis",filename:"route",bundlePath:"app/api/jixiong-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/jixiong-analysis/route.js",nextConfigOutput:"",userland:o}),{workAsyncStorage:g,workUnitAsyncStorage:u,serverHooks:d}=c;function p(){return(0,l.patchFetch)({workAsyncStorage:g,workUnitAsyncStorage:u})}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{},96559:(e,t,n)=>{"use strict";e.exports=n(44870)}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[7719],()=>n(54419));module.exports=o})();