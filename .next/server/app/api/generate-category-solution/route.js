(()=>{var e={};e.id=4520,e.ids=[4520],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},43104:(e,a,t)=>{"use strict";t.r(a),t.d(a,{patchFetch:()=>$,routeModule:()=>l,serverHooks:()=>g,workAsyncStorage:()=>d,workUnitAsyncStorage:()=>y});var r={};t.r(r),t.d(r,{POST:()=>c});var n=t(96559),o=t(48088),m=t(37719),i=t(32190),s=t(74474);let h=process.env.DEEPSEEK_API_KEY;async function c(e){try{let{category:a,specificProblem:t,user1:r,user2:n}=await e.json();if(!a||!t)return i.NextResponse.json({error:"缺少分類或問題描述"},{status:400});if(console.log(`🎯 生成${a}類別的解決方案`),!h)return console.error("❌ DEEPSEEK_API_KEY environment variable is not set"),u(a,t,r,n);let o=function(e,a,t,r){let n=t?.birthDateTime||"2000年2月14日12:03",o=r?.birthDateTime||"1999年8月23日00:30",m=null,i=null;try{let e=n.includes(":")?n:`${n} 12:00`,a=o.includes(":")?o:`${o} 12:00`;m=(0,s.Ay)(e,t?.gender||"female"),i=(0,s.Ay)(a,r?.gender||"male"),console.log("✅ Calculated correct BaZi data:"),console.log("女方八字:",m?.year,m?.month,m?.day,m?.hour),console.log("男方八字:",i?.year,i?.month,i?.day,i?.hour)}catch(e){console.error("❌ Failed to calculate BaZi data:",e)}let h=`
輸入：  
- 女方出生：${n}
- 男方出生：${o}
- 具體問題：${a}

**重要：請使用以下精確計算的八字資料，不要自行推算：**
- 女方正確八字：${m?`${m.year} ${m.month} ${m.day} ${m.hour}`:"請根據出生日期推算"}
- 男方正確八字：${i?`${i.year} ${i.month} ${i.day} ${i.hour}`:"請根據出生日期推算"}`;switch(e){case"emotion_cooling":return`你是一位專業的八字命理專家，專門分析情侶或夫妻的八字合盤，聚焦情感關係問題（如溝通障礙、冷戰、熱情消退）。現在，請根據以下輸入生成一份完整的分析報告。

**格式要求：**
報告必須使用繁體中文和白話文（簡單通俗，像朋友聊天一樣解釋，避免生澀術語），並嚴格按照以下6個編號結構，不要添加任何其他部分或標題：

### 1. **女方**
命局：${m?.nayin||"楊柳木"}（日主${m?.dayStem||"戊"}${m?.dayStemWuxing||"土"}生於${m?.monthBranch||"寅"}月）
八字：${m?`${m.year} ${m.month} ${m.day} ${m.hour}`:"[請使用提供的正確八字]"}
（簡要格局描述，如日主${m?.dayStem||"[日主]"}${m?.dayStemWuxing||"[五行]"}、生月特點、整體能量象徵，100-150字）

### 2. **男方**
命局：${i?.nayin||"井泉水"}（日主${i?.dayStem||"庚"}${i?.dayStemWuxing||"金"}生於${i?.monthBranch||"寅"}月）
八字：${i?`${i.year} ${i.month} ${i.day} ${i.hour}`:"[請使用提供的正確八字]"}
（簡要格局描述，如日主${i?.dayStem||"[日主]"}${i?.dayStemWuxing||"[五行]"}、生月特點、整體能量象徵，100-150字）

### 3. **關鍵合盤徵象**
描述主要的八字合盤沖突或互動，用繁體中文解釋情感循環問題。（150-200字）

### 4. **📊 盤面診斷**
- **女方命局**：詳細分析格局、問題徵象、流年影響
- **男方命局**：詳細分析格局、問題徵象、感情模式  
- **關鍵合盤徵象**：聚焦合盤衝突，解釋情感循環問題
（總共400-600字）

### 5. **🚨 風水急救**
❗ 72小時內行動方案：
✦ [具體風水建議1]：[行動步驟]，原理為[八字元素解釋]
✦ [具體風水建議2]：[行動步驟]，原理為[八字元素解釋]  
✦ [具體風水建議3]：[行動步驟]，原理為[八字元素解釋]
✦ [具體風水建議4]：[行動步驟]，原理為[八字元素解釋]
（200-300字）

### 6. **💕 重啟默契**
▸ 破冰儀式建議（針對能量沉寂核心）：
① [儀式名稱1]：[具體步驟]，原理為[八字元素解釋]
② [儀式名稱2]：[具體步驟]，原理為[八字元素解釋]
③ [儀式名稱3]：[具體步驟]，原理為[八字元素解釋]

**日常溝通建議：**
[一般溝通技巧建議]
（300-400字）

**嚴格禁止：**
- 絕對不要包含「星盤指引」、「遷移宮聯動」、「夫妻宮信號」等星盤相關內容
- 不要添加編號1-6以外的任何其他段落或標題
- 不要重複相同的盤面診斷內容
- 不要使用簡體中文
- 必須使用提供的正確八字資料，不要自行推算八字
- 命局描述必須使用提供的納音和日主月令信息，不要虛構如「王水生黃月」等不存在的術語
- 嚴格按照「納音（日主X生於X月）」格式填寫命局信息

${h}`;case"mingpan_conflict":return`你是一位專業的八字命理專家，專門分析情侶或夫妻的八字合盤，聚焦五行沖剋問題。現在，請根據以下輸入生成一份完整的分析報告。報告必須使用白話文（簡單通俗，像朋友聊天一樣解釋，避免生澀術語），並標註字數需求：總報告1200-1500字；雙方八字介紹各100-150字；沖克本質400-600字；風水轉化200-300字；相處心法300-400字。結構嚴格遵循以下格式：

1. **您的八字（女，[女方出生年月日時]）**  
   八字：[女方八字組合]  
   （簡要格局描述，如日主壬水、生月特點、整體能量象徵）

2. **伴侶八字（男，[男方出生年月日時]）**  
   八字：[男方八字組合]  
   （簡要格局描述，如日主壬水、生月特點、整體能量象徵）

3. **沖克本質**  
   - **您的命局（[日主生月]）**：描述格局、沖剋表現（如火旺金弱導致過度理性）、五行失衡原因、對感情的具體影響。
   - **伴侶命局（[日主生月]）**：描述格局、沖剋表現（如土多水濁導致情緒壓抑）、元素衝突點、性格傾向分析。
   - **關鍵合盤沖剋**：詳細分析主要沖剋組合（如寅申沖、子午沖），解釋能量對抗模式，提供化解思路。

4. **風水轉化**  
   行動方案：  
   用✦標記列出3-4個具體風水建議，每項包括行動步驟、五行轉化原理（如用水調和火金相剋），強調化解沖剋的實用方法。

5. **相處心法**  
   ▸ 關係升級提示：  
   用①②③標記列出3個日常相處技巧，每項包括具體做法、五行調和原理。  
   結尾加溝通建議，強調如何將五行差異轉為互補優勢。

生成報告時，重點分析五行沖剋問題，提供實用化解方案。確保內容專業、實用。

${h}`;case"special_situation":return`你是一位專業的八字命理專家，專門分析特殊情境下的感情問題（如異地戀、特殊工作環境等）。現在，請根據以下輸入生成一份完整的分析報告。報告必須使用白話文，並標註字數需求：總報告1200-1500字；雙方八字介紹各100-150字；星盤指引400-600字；風水急救200-300字；維繫心法300-400字。結構嚴格遵循以下格式：

1. **您的八字（女，[女方出生年月日時]）**  
   八字：[女方八字組合]  
   （簡要格局描述，關注遷移宮、夫妻宮特點）

2. **伴侶八字（男，[男方出生年月日時]）**  
   八字：[男方八字組合]  
   （簡要格局描述，關注遷移宮、夫妻宮特點）

3. **星盤指引**  
   - **遷移宮聯動**：分析雙方時柱互動，描述能量互補與衝突，解釋對特殊情境的影響，給出時間和空間調整建議。
   - **夫妻宮信號**：分析日支、月支互動，描述情感需求差異，聚焦距離或環境對情感交流的影響，提供改善方式。  
   - **關鍵法則**：總結星盤吸引力與挑戰，提供特殊情境下的相處策略和時間選擇建議。

4. **風水轉化**  
   行動方案：  
   用✦標記列出3-4個適合特殊情境的風水建議，重點關注遠距離能量連結和環境調整。

5. **維繫心法**  
   ▸ 特殊情境維繫策略：  
   用①②③標記列出3個針對特殊情況的維繫方法，強調能量同步和情感連結。  
   結尾加適合特殊情境的溝通建議。

${h}`;case"taboo_breaking":return`你是一位專業的命理能量顧問，專門以正向、科學化的方式解答用戶的高敏禁忌問題（如"克夫"、"刑剋"或其他五行不平衡導致的迷思）。你的回應必須嚴格遵循以下結構格式，語言溫和、鼓勵，避免使用負面詞彙如"詛咒"或"宿命"，改以"能量不平衡"或"需微調"來描述。目的是幫助用戶破除心魔，轉化為積極行動。基於五行互補原理，強調能量流通與互補。

**格式要求：**
報告必須使用繁體中文和白話文（簡單通俗，像朋友聊天一樣解釋，避免生澀術語），並嚴格按照以下6個編號結構：

### 1. **女方**
命局：${m?.nayin||"楊柳木"}（日主${m?.dayStem||"戊"}${m?.dayStemWuxing||"土"}生於${m?.monthBranch||"寅"}月）
八字：${m?`${m.year} ${m.month} ${m.day} ${m.hour}`:"[請使用提供的正確八字]"}
（簡要格局描述，強調正面能量象徵，100-150字）

### 2. **男方**
命局：${i?.nayin||"井泉水"}（日主${i?.dayStem||"庚"}${i?.dayStemWuxing||"金"}生於${i?.monthBranch||"寅"}月）
八字：${i?`${i.year} ${i.month} ${i.day} ${i.hour}`:"[請使用提供的正確八字]"}
（簡要格局描述，強調正面能量象徵，100-150字）

### 3. **關鍵分析**
##### 五行互補性
描述雙方日主和整體能量，強調互補性而非不平衡。

##### 配偶星狀態
分析八字中的夫妻星配置，強調穩固根基。

##### 需注意的配置
分析潛在調整點，視為可調整的能量點。

### 4. **📊 盤面診斷**
- **女方命局**：詳細分析格局特點，強調正面能量
- **男方命局**：詳細分析格局特點，強調互補優勢
- **關鍵合盤徵象**：解釋八字配合的積極面向
（總共400-600字）

### 5. **🚨 風水急救**
❗ 72小時內行動方案：
##### 針對性建議（破除「${a}」的焦慮）
1. **能量平衡方法**：[具體風水建議]，原理為[八字元素解釋]
2. **溝通模式調整**：[具體行動步驟]，原理為[八字元素解釋]
3. **心錨儀式**：[具體儀式步驟]，原理為[八字元素解釋]

##### 能量印證案例
分享正面轉化案例，強調差異轉為創造力。

### 6. **💕 重啟默契**
▸ 破冰儀式建議（針對能量重新平衡）：
① **能量同步儀式**：[具體步驟]，原理為[八字元素解釋]
② **互補能量啟動**：[具體步驟]，原理為[八字元素解釋]
③ **正向標籤重塑**：[具體步驟]，原理為[八字元素解釋]

**日常溝通建議：**
[針對破除禁忌標籤的溝通技巧建議]

結語：總結所謂"禁忌"實為能量未通之象，差異是陰陽相生的序章。

**嚴格禁止：**
- 不要使用負面詞彙如"詛咒"或"宿命"
- 必須使用提供的正確八字資料，不要自行推算八字
- 確保回應積極、溫和、有說服力

${h}`;default:return null}}(a,t,r,n);if(!o)return i.NextResponse.json({error:"未知的問題類別"},{status:400});let m=new AbortController,c=setTimeout(()=>{m.abort()},3e4);try{let e=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${h}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:"你是專業的八字命理專家，請根據指定格式生成詳細的分析報告。"},{role:"user",content:o}],temperature:.7,max_tokens:2e3}),signal:m.signal});if(clearTimeout(c),!e.ok){let a=await e.text();throw console.error("❌ DeepSeek API error response:",a),Error(`DeepSeek API error: ${e.status} - ${a}`)}let r=(await e.json()).choices[0].message.content;return console.log(`📝 ${a}解決方案生成完成`),i.NextResponse.json({success:!0,category:a,solution:r,specificProblem:t})}catch(e){if(clearTimeout(c),"AbortError"===e.name)return console.error("❌ DeepSeek API request timed out after 30 seconds"),u(a,t,r,n,"API請求超時，使用本地分析");return console.error("❌ DeepSeek API request failed:",e),u(a,t,r,n,"API請求失敗，使用本地分析")}}catch(e){return console.error("❌ 解決方案生成失敗:",e),u(category,specificProblem,user1,user2,"系統錯誤，使用本地分析")}}function u(e,a,t,r,n="API暫時不可用"){let o=t?.birthDateTime||"2000年2月14日12:03",m=r?.birthDateTime||"1999年8月23日00:30",h=null,c=null;try{let e=o.includes(":")?o:`${o} 12:00`,a=m.includes(":")?m:`${m} 12:00`;h=(0,s.Ay)(e,t?.gender||"female"),c=(0,s.Ay)(a,r?.gender||"male")}catch(e){console.error("❌ Failed to calculate BaZi in fallback:",e)}console.log(`🔄 生成${e}類別的本地解決方案`);let l="";switch(e){case"emotion_cooling":let d=h?`${h.year} ${h.month} ${h.day} ${h.hour}`:"壬午 壬寅 戊申 戊午",y=c?`${c.year} ${c.month} ${c.day} ${c.hour}`:"乙酉 戊寅 庚申 壬午";l=`### 1. **女方**
命局：${h?.nayin||"楊柳木"}（日主${h?.dayStem||"戊"}${h?.dayStemWuxing||"土"}生於${h?.monthBranch||"寅"}月）
八字：${d}
（簡要格局描述：您的日主為${h?.dayStem||"戊"}${h?.dayStemWuxing||"土"}，生於${h?.monthBranch||"寅"}月，${h?.monthBranchWuxing||"木"}氣當令而${h?.dayStemWuxing||"土"}虛，需${h?.hourBranchWuxing||"火"}來暖局生${h?.dayStemWuxing||"土"}。整體能量顯示外柔內剛，表面隨和但內心對感情有較高期待，容易因細節不滿而積累壓力。）

### 2. **男方**
命局：${c?.nayin||"井泉水"}（日主${c?.dayStem||"庚"}${c?.dayStemWuxing||"金"}生於${c?.monthBranch||"寅"}月）
八字：${y}
（簡要格局描述：他的日主為${c?.dayStem||"庚"}${c?.dayStemWuxing||"金"}，生於${c?.monthBranch||"寅"}月，${c?.monthBranchWuxing||"木"}旺${c?.dayStemWuxing||"金"}衰，性格內斂而務實。他屬於理性務實型，感情中習慣用行動代替言語，但缺乏情感表達的細膩度。）

### 3. **關鍵合盤徵象**
雙方八字中存在五行互動，需要通過相互理解和調節來達到和諧。建議多溝通，了解彼此的需求和表達方式。

### 4. **📊 盤面診斷**
由於${n}，提供基於傳統命理的基本分析。建議雙方在感情中保持耐心和理解，通過實際行動表達關愛。

### 5. **🚨 風水急救**  
❗ 72小時內行動方案：
✦ 在臥室東南角（木位）放置綠色植物，增強木能量流動
✦ 使用成對的裝飾品，象徵關係和諧
✦ 保持居住環境整潔明亮，促進正面能量
✦ 定期更換床單為暖色調，增強溫暖感

### 6. **💕 重啟默契**
▸ 破冰儀式建議：
① 每週安排一次無壓力的共同活動，如散步或看電影
② 建立日常感謝習慣，每天分享一件感謝對方的事
③ 創造專屬的溝通時間，放下手機專心交流

**日常溝通建議：**
建議雙方保持開放和耐心的對話，尊重彼此的個性差異，建立共同的目標和興趣。定期安排約會時間，記住對方的小細節，培養感恩的習慣。`;break;case"mingpan_conflict":l=`### 1. **您的八字（女，${o.split(" ")[0]}）**  
八字：己土 丙火 辛金 甲木  
您的命格屬於「金火相戰」格局，日主辛金遇丙火相克，容易在感情中表現得理性過度，對細節過分挑剔，但內心其實渴望溫暖。

### 2. **伴侶八字（男，${m.split(" ")[0]}）**  
八字：甲木 戊土 丙火 壬水  
他的命格為「水火既濟」，但土多水濁，容易情緒壓抑，在衝突時選擇逃避而非面對。

### 3. **沖克本質**  
您們的主要沖剋來自「金火相戰」，需要用土來調和，建議多進行務實的共同活動。

### 4. **風水轉化**  
✦ 在家中中央放置土色（黃色、棕色）裝飾品
✦ 使用圓形餐具增進和諧
✦ 在臥室擺放成對的陶瓷擺件

### 5. **相處心法**  
① 學會在爭執時先冷靜30秒
② 用「我覺得」代替「你總是」的表達方式  
③ 每週安排一次戶外活動，接觸自然土氣`;break;case"special_situation":l=`### 1. **您的八字（女，${o.split(" ")[0]}）**  
八字：庚辰 戊寅 甲子 丙午  
您的命格在遷移宮顯示與異地緣份深，但需要調節情緒波動。

### 2. **伴侶八字（男，${m.split(" ")[0]}）**  
八字：甲申 丁丑 庚戌 丙子  
他的命格顯示適應力較弱，需要更多安全感支持。

### 3. **星盤指引**  
#### **遷移宮聯動**  
建議在固定時間進行深度交流，避開「火旺」時段。

#### **夫妻宮信號**  
通過「儀式感」來滿足雙方不同的安全感需求。

#### **關鍵法則**  
每日進行「能量對話」，分享當下感受和能量狀態。

### 4. **風水轉化**  
✦ 在西北方放置金屬製品，強化遠距離連結
✦ 使用雙人份水元素風水物，象徵能量共振
✦ 週日晚上點燃香薰，進行空間淨化

### 5. **維繫心法**  
① 建立能量同步儀式，固定時段視訊交流
② 在相同位置放置相同物件，增強跨空間連結
③ 製作見面倒數日曆，將注意力從分離轉向期待`;break;case"taboo_breaking":l=`### 1. **您的八字（女，${o.split(" ")[0]}）**  
八字：甲木 乙木 丙火 丁火  
您的命格並非「剋夫」，而是「木火通明」的優秀格局，代表智慧與創造力。

### 2. **伴侶八字（男，${m.split(" ")[0]}）**  
八字：戊土 己土 庚金 辛金  
他的命格穩重踏實，與您形成很好的互補關係。

### 3. **關鍵分析**  
**五行互補性**：您們的八字配合度很高，能夠相互促進成長。
**配偶星狀態**：穩固的夫妻星配置，無需擔心。
**需注意的配置**：專注於關係中的正面互動。

所謂的「剋夫」說法缺乏根據，實際上您們的八字配合度很高。

### 4. **風水轉化**  
✦ 在家中擺放代表和諧的成對物品
✦ 使用暖色調裝飾增強正面能量

### 5. **正向轉化方案**  
① 建立彼此的信心和支持
② 專注於關係中的正面互動
③ 定期進行感恩練習，強化正面能量`;break;default:l=`針對您的問題「${a}」，我們提供以下基本建議：

### 關係建議
1. **增強溝通**：建議雙方保持開放和耐心的對話
2. **相互理解**：尊重彼此的個性差異
3. **共同成長**：建立共同的目標和興趣

### 風水調整
- 在臥室放置成對的物品，增強感情能量
- 保持居住環境整潔和諧
- 使用暖色調裝飾品

### 日常維繫
- 定期安排約會時間
- 記住對方的小細節
- 建立感恩的習慣`}return i.NextResponse.json({success:!0,category:e,solution:l,specificProblem:a,fallback:!0,message:`由於${n}，提供基於傳統命理的分析結果`})}let l=new n.AppRouteRouteModule({definition:{kind:o.RouteKind.APP_ROUTE,page:"/api/generate-category-solution/route",pathname:"/api/generate-category-solution",filename:"route",bundlePath:"app/api/generate-category-solution/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/generate-category-solution/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:d,workUnitAsyncStorage:y,serverHooks:g}=l;function $(){return(0,m.patchFetch)({workAsyncStorage:d,workUnitAsyncStorage:y})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},74474:(e,a,t)=>{"use strict";t.d(a,{Ay:()=>p});var r=t(44794),n=t(42457),o=t(81540),m=t(14250),i=t(96002),s=t.n(i),h=t(22246);m.A.extend(r.t).extend(n.sM).extend(o.z0);let c=(0,m.A)(s()().format("YYYY-MM-DD")).char8.year.toString(),{LYGanzhiMap:u,LYzhiMap:l,LYStarMap:d,LYSihuaMap:y,spouseStarMap:g,spouseSihuaMap:$}=function(){let e=s()().format("YYYY"),a={},t={},r={},n={},o={},m={};for(let i=1;i<=12;i++){let s=e+"-"+(i<10?"0"+i:""+i)+"-15",c=h.astro.bySolar(s,0,"男",!0,"zh-CN").horoscope(s);t[i]=c.monthly.earthlyBranch,a[i]=c.monthly.heavenlyStem+c.monthly.earthlyBranch,r[i]=c.palace("命宫","monthly").majorStars.map(e=>e.name).toString(),o[i]=c.palace("夫妻","monthly").majorStars.map(e=>e.name).toString(),n[i]=c.palace("命宫","monthly").mutagedPlaces().map(e=>e.name).toString(),m[i]=c.palace("夫妻","monthly").mutagedPlaces().map(e=>e.name).toString()}return{LYGanzhiMap:a,LYzhiMap:t,LYStarMap:r,LYSihuaMap:n,spouseStarMap:o,spouseSihuaMap:m}}();(function(){let e=s()().format("YYYY-MM-DD");(0,m.A)(e).char8.month.toString()})(),function(){let e=s()().format("YYYY-MM-DD");h.astro.bySolar(e,0,"男",!0,"zh-CN").horoscope(e,0).palace("夫妻","yearly").majorStars.map(e=>e.name).toString()}();let S={};function p(e,a){var t;let r=s()(e).format("YYYY-MM-DD HH:mm:ss");if(console.log("birthStr",r),S[r+"-"+a])return S[r+"-"+a];let n=Math.floor(s()(e).hour()/2),o=s()(e).format("YYYY-MM-DD"),i=h.astro.bySolar(o,n,"female"==a?"女":"男",!0,"zh-CN"),u=i.palace("命宫"),l=i.palace("身宫"),d=i.palace("迁移").majorStars.map(e=>e.name).toString(),y=i.horoscope(o,n),g=(0,m.A)(r),$=function(e,a,t,r,n,o,m,i){let s={金:0,木:0,水:0,火:0,土:0},h=[e,a,t,r,n,o,m,i];h.forEach(e=>{["金","木","水","火","土"].includes(e)&&s[e]++});let c=h.length;return`金:${(s.金/c*100).toFixed(2)}%，木:${(s.木/c*100).toFixed(2)}%，水:${(s.水/c*100).toFixed(2)}%，火:${(s.火/c*100).toFixed(2)}%，土:${(s.土/c*100).toFixed(2)}%`}(g.char8.year.stem.e5.name,g.char8.year.branch.e5.name,g.char8.month.stem.e5.name,g.char8.month.branch.e5.name,g.char8.day.stem.e5.name,g.char8.day.branch.e5.name,g.char8.hour.stem.e5.name,g.char8.hour.branch.e5.name),p=g.char8.day.branch.hiddenStems.map(e=>e.name).toString(),b=g.char8.year.branch.hiddenStems,f=g.char8.month.branch.hiddenStems,k=g.char8.day.branch.hiddenStems,B=g.char8.hour.branch.hiddenStems,Y=g.char8ex(+("female"!==a)),P=Y.year,W=Y.month,T=Y.day,A=Y.hour,v={nayin:g.char8.year.takeSound,wuxingJu:(t=g.char8.year.takeSoundE5.toString(),`${t}${x[t]}局`),year:g.char8.year.toString(),month:g.char8.month.toString(),day:g.char8.day.toString(),hour:g.char8.hour.toString(),wuxingScale:$,rizhiCanggan:p,mingPalace:`{主星：${u.majorStars.map(e=>e.name).toString()},主星亮度：${u.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${u.minorStars.map(e=>e.name).toString()}, 四化：${u.mutagedPlaces().map(e=>e.name).toString()}}`,bodyPalace:`{主星：${l.majorStars.map(e=>e.name).toString()},主星亮度：${l.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${l.minorStars.map(e=>e.name).toString()}, 四化：${l.mutagedPlaces().map(e=>e.name).toString()}}`,qianyiPalace:d,dayunGanzhi:y.decadal.heavenlyStem+y.decadal.earthlyBranch,liunianGanzhi:c,yearStemTenGod:P.stemTenGod.name,yearBranchTenGod:P.branchTenGod.map(e=>e.name).toString(),monthStemTenGod:W.stemTenGod.name,monthBranchTenGod:W.branchTenGod.map(e=>e.name).toString(),dayStemTenGod:T.stemTenGod.name,dayBranchTenGod:T.branchTenGod.map(e=>e.name).toString(),hourStemTenGod:A.stemTenGod.name,hourBranchTenGod:A.branchTenGod.map(e=>e.name).toString(),yearGods:P.gods.map(e=>e.name).toString(),monthGods:W.gods.map(e=>e.name).toString(),dayGods:T.gods.map(e=>e.name).toString(),yearStem:g.char8.year.stem.name,yearStemWuxing:g.char8.year.stem.e5.name,yearBranch:g.char8.year.branch.name,yearBranchWuxing:g.char8.year.branch.e5.name,monthStem:g.char8.month.stem.name,monthStemWuxing:g.char8.month.stem.e5.name,monthBranch:g.char8.month.branch.name,monthBranchWuxing:g.char8.month.branch.e5.name,dayStem:g.char8.day.stem.name,dayStemWuxing:g.char8.day.stem.e5.name,dayBranch:g.char8.day.branch.name,dayBranchWuxing:g.char8.day.branch.e5.name,hourStem:g.char8.hour.stem.name,hourStemWuxing:g.char8.hour.stem.e5.name,hourBranch:g.char8.hour.branch.name,hourBranchWuxing:g.char8.hour.branch.e5.name,yearNayin:g.char8.year.takeSound,monthNayin:g.char8.month.takeSound,dayNayin:g.char8.day.takeSound,hourNayin:g.char8.hour.takeSound,yearNayinWuxing:g.char8.year.takeSoundE5.toString(),monthNayinWuxing:g.char8.month.takeSoundE5.toString(),dayNayinWuxing:g.char8.day.takeSoundE5.toString(),hourNayinWuxing:g.char8.hour.takeSoundE5.toString(),yearBranchHiddenStems:b.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),monthBranchHiddenStems:f.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),dayBranchHiddenStems:k.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),hourBranchHiddenStems:B.map(e=>({stem:e.name,element:e.e5.name,strength:e.value}))};return S[r+"-"+a]=v,console.log("result",v),v}let x={水:"二",木:"三",金:"四",土:"五",火:"六"}},78335:()=>{},96487:()=>{}};var a=require("../../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),r=a.X(0,[7719,580,6219],()=>t(43104));module.exports=r})();