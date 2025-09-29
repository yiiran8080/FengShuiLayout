(()=>{var e={};e.id=1041,e.ids=[1041],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},35500:(e,s,t)=>{"use strict";t.r(s),t.d(s,{patchFetch:()=>d,routeModule:()=>u,serverHooks:()=>g,workAsyncStorage:()=>m,workUnitAsyncStorage:()=>p});var n={};t.r(n),t.d(n,{POST:()=>c});var o=t(96559),r=t(48088),i=t(37719),a=t(32190);function l(e="API暫時不可用"){return console.log(`🔄 生成本地情侶分析解決方案，原因：${e}`),a.NextResponse.json({success:!0,data:{compatibility:{score:78,level:"良好匹配",description:"根據傳統八字分析，你們的配對顯示出良好的互補性。雖然可能存在一些挑戰，但通過相互理解和溝通，可以建立穩定和諧的關係。"},strengths:["性格特質互補，能夠平衡彼此的不足","在價值觀和人生目標上有共同點","溝通風格雖有差異但能相互學習"],challenges:["處理問題的方式可能存在分歧","情感表達方式需要更多理解","生活節奏的協調需要時間磨合"],advice:["保持開放和耐心的溝通態度","尊重彼此的個性差異，將其視為學習機會","建立共同的興趣愛好和目標"],wuxingAnalysis:{user1:{dominantElement:"木",elementBalance:"五行較為平衡，木氣旺盛代表成長性強",strengths:["適應能力強","富有創造力"],weaknesses:["有時過於理想化","需要更多穩定性"]},user2:{dominantElement:"土",elementBalance:"土氣穩重，提供關係的穩定基礎",strengths:["務實可靠","包容性強"],weaknesses:["有時過於保守","需要更多變化刺激"]},compatibility:"木土相配，木能從土中汲取養分，土能包容木的成長，形成互補互利的關係",recommendation:"建議在家中東南方向擺放綠色植物，增強木氣；西南方向擺放黃色或褐色裝飾，強化土氣"},fortuneAnalysis:{currentYear:"今年感情運勢整體穩定，春夏季節特別適合深化關係",monthlyTrends:["春季（2-4月）：感情升溫期，適合深入交流","夏季（5-7月）：關係穩固期，可考慮未來規劃","秋季（8-10月）：需要更多耐心，避免小爭執"],bestTiming:"春分至夏至期間是關係發展的最佳時機",warnings:"秋末冬初需要注意溝通方式，避免因小事產生誤解"},relationshipAdvice:{communication:"建議採用溫和而直接的溝通方式，避免在情緒激動時討論重要問題",conflict:"遇到分歧時，先各自冷靜思考，再以開放的心態討論解決方案",growth:"定期分享個人成長心得，支持彼此的夢想和目標",intimacy:"通過共同體驗和回憶創建，加深情感連結"},taboos:{behaviors:["避免在公共場合激烈爭執","不要拿對方與他人比較"],timing:["避免在疲憊或壓力大時討論重要決定","月圓之夜不適合處理衝突"],feng_shui:["臥室避免擺放尖銳物品","不要在床頭擺放鏡子"]},fengShuiLayout:{bedroom:"床頭朝向東方或南方，使用暖色調床品，避免梁柱壓頂",livingRoom:"客廳保持明亮整潔，在東南角擺放綠色植物或水晶",colors:"建議使用綠色、黃色、粉色作為主色調，避免過多黑色或紅色",items:"擺放成對的裝飾品，如一對花瓶或相框，象徵感情和諧",generalAdvice:"保持居住環境的整潔和諧，定期清理不需要的物品"},specificProblem:{analysis:"感情問題通常與溝通方式和期望值的差異有關",solutions:["增加日常的輕鬆對話時間，不一定要討論嚴肅話題","學習對方的表達方式和接收方式","建立定期的關係檢視時間，坦誠分享感受"],actionPlan:"從每週安排一次深度交流開始，逐步建立更好的溝通模式",timeline:"預期在3-6個月內看到明顯的改善"},dailyTips:["每天睡前分享一件開心的事情","週末安排共同的戶外活動","記住對方喜歡的小細節並時常實踐"],communication:{style:"建議採用溫和而清晰的表達方式，多使用「我感覺」而非「你總是」的句型",tips:["主動詢問對方的想法和感受","在對方說話時保持專注聆聽","用肯定的語言表達對關係的重視"]}},fallback:!0,message:`由於${e}，提供基於傳統命理的分析結果`})}async function c(e){try{let s,t,n;let{birthday:o,birthday2:r,gender:i,gender2:c,problem:u,sessionId:m}=await e.json();if(console.log("\uD83D\uDE80 開始情侶分析 API 調用"),console.log("\uD83D\uDCDD 分析參數:",{birthday:o,birthday2:r,gender:i,gender2:c,problem:u,sessionId:m}),!process.env.DEEPSEEK_API_KEY)throw console.error("❌ DEEPSEEK_API_KEY environment variable is not set"),Error("API configuration error: Missing DEEPSEEK_API_KEY");console.log("\uD83D\uDD11 DEEPSEEK_API_KEY found, making API request...");let p=new AbortController,g=setTimeout(()=>{p.abort()},3e4);try{let e=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.DEEPSEEK_API_KEY}`},body:JSON.stringify({model:"deepseek-chat",messages:[{role:"system",content:`你是一位專業的情侶關係分析師，結合八字、生肖配對和現代心理學，為情侶提供全面的關係分析。**重要：請全部使用繁體中文輸出，不要使用簡體中文**

請基於提供的生日信息進行分析，並返回一個嚴格的JSON格式，包含以下完整結構：

{
  "compatibility": {
    "score": 85,
    "level": "非常匹配",
    "description": "詳細的配對分析..."
  },
  "strengths": [
    "優勢1描述",
    "優勢2描述",
    "優勢3描述"
  ],
  "challenges": [
    "挑戰1描述",
    "挑戰2描述",
    "挑戰3描述"
  ],
  "advice": [
    "建議1內容",
    "建議2內容",
    "建議3內容"
  ],
  "wuxingAnalysis": {
    "user1": {
      "dominantElement": "木",
      "elementBalance": "平衡度分析",
      "strengths": ["五行優勢1", "五行優勢2"],
      "weaknesses": ["需要改善點1", "需要改善點2"]
    },
    "user2": {
      "dominantElement": "火",
      "elementBalance": "平衡度分析",
      "strengths": ["五行優勢1", "五行優勢2"],
      "weaknesses": ["需要改善點1", "需要改善點2"]
    },
    "compatibility": "五行配對詳細分析",
    "recommendation": "五行調和建議"
  },
  "fortuneAnalysis": {
    "currentYear": "今年感情運勢分析",
    "monthlyTrends": ["1月運勢", "2月運勢", "3月運勢"],
    "bestTiming": "最佳時機分析",
    "warnings": "需要注意的時期"
  },
  "relationshipAdvice": {
    "communication": "溝通建議",
    "conflict": "衝突處理建議",
    "growth": "關係成長建議",
    "intimacy": "親密關係建議"
  },
  "taboos": {
    "behaviors": ["避免行為1", "避免行為2"],
    "timing": ["不利時機1", "不利時機2"],
    "feng_shui": ["風水禁忌1", "風水禁忌2"]
  },
  "fengShuiLayout": {
    "bedroom": "臥室布局建議",
    "livingRoom": "客廳布局建議",
    "colors": "建議色彩",
    "items": "建議擺件",
    "generalAdvice": "整體風水建議"
  },
  "specificProblem": {
    "analysis": "具體問題分析",
    "solutions": ["解決方案1", "解決方案2"],
    "actionPlan": "行動計劃",
    "timeline": "預期時間線"
  },
  "dailyTips": [
    "日常小貼士1",
    "日常小貼士2",
    "日常小貼士3"
  ],
  "communication": {
    "style": "溝通風格分析",
    "tips": [
      "溝通技巧1",
      "溝通技巧2",
      "溝通技巧3"
    ]
  }
}

**重要規則：**
1. 必須返回有效的JSON格式
2. 所有文字必須使用繁體中文
3. 分數範圍：60-95分
4. 每個陣列至少包含3個項目
5. 避免使用特殊符號或可能破壞JSON的字符`},{role:"user",content:`請分析以下情侶的八字配對和關係：
男方生日：${o}，性別：${i}
女方生日：${r}，性別：${c}
關注問題：${u}

請提供詳細的情侶分析，包括八字配對、性格互補性、潛在挑戰和改善建議。`}],max_tokens:2e3,temperature:.7}),signal:p.signal});if(clearTimeout(g),!e.ok){let s=await e.text();throw console.error("❌ DeepSeek API error response:",s),Error(`DeepSeek API 錯誤: ${e.status} - ${s}`)}s=(await e.json()).choices[0].message.content,console.log("\uD83D\uDCE5 DeepSeek 原始回應:",s),s=s.replace(/```json\s*/g,"").replace(/```\s*/g,"").trim()}catch(e){if(clearTimeout(g),"AbortError"===e.name)return console.error("❌ DeepSeek API request timed out after 30 seconds"),l("DeepSeek API 請求超時，使用本地分析");return console.error("❌ DeepSeek API request failed:",e),l("DeepSeek API 請求失敗，使用本地分析")}if(void 0===s)return console.error("❌ aiContent 未定義，返回本地分析"),l("AI 內容生成失敗，使用本地分析");console.log("\uD83D\uDD0D 原始 AI 內容 (前200字符):",s.substring(0,200));let d=(n=s,console.log("\uD83D\uDD27 清理前原始內容:",n.substring(0,200)),n=n.replace(/：(\s*)/g,":$1").replace(/，(\s*)/g,",$1").replace(/"/g,'"').replace(/"/g,'"').replace(/「/g,'"').replace(/」/g,'"'),console.log("\uD83D\uDD27 標點符號替換後:",n.substring(0,200)),n);console.log("\uD83E\uDDF9 清理後的內容:",d);try{t=JSON.parse(d),console.log("✅ JSON 解析成功")}catch(s){console.error("❌ JSON 解析失敗:",s.message),console.log("\uD83D\uDD0D 嘗試額外清理...");let e=d;e=(e=(e=(e=e.replace(/([^":])\s*([^"{\[\],}:]{2,})\s*([,}])/g,'$1"$2"$3')).replace(/,\s*,/g,",")).replace(/{\s*,/g,"{")).replace(/,\s*}/g,"}");try{t=JSON.parse(e),console.log("✅ 備用清理成功")}catch(e){console.error("❌ 備用解析也失敗:",e.message),t={compatibility:{score:75,level:"良好匹配",description:"根據八字分析，你們的配對具有良好的潛力。雖然存在一些挑戰，但通過相互理解和努力，可以建立穩定的關係。"},strengths:["性格互補，能夠相互學習和成長","在感情表達上有共同語言","價值觀基本一致，有共同目標"],challenges:["溝通方式存在差異，需要更多耐心","處理衝突的方式不同","對未來規劃的節奏可能不一致"],advice:["多花時間了解對方的想法和感受","建立定期溝通的習慣","在重要決定上尋求共識"],dailyTips:["每天花15分鐘分享彼此的一天","週末安排共同的興趣活動","記住對方喜歡的小細節"],communication:{style:"需要更多耐心和理解的溝通方式",tips:["使用溫和的語調表達意見","主動詢問對方的想法","避免在情緒激動時討論重要問題"]}}}}return console.log("\uD83D\uDCCA 最終分析結果:",JSON.stringify(t,null,2)),a.NextResponse.json({success:!0,data:t})}catch(e){if(console.error("❌ 情侶分析 API 錯誤:",e),e.message.includes("API configuration error")||e.message.includes("超時")||e.message.includes("timed out")){console.log("\uD83D\uDD04 Falling back to local analysis due to API issues");let e={compatibility:{score:78,level:"良好匹配",description:"根據傳統八字分析，你們的配對顯示出良好的互補性。雖然可能存在一些挑戰，但通過相互理解和溝通，可以建立穩定和諧的關係。"},strengths:["性格特質互補，能夠平衡彼此的不足","在價值觀和人生目標上有共同點","溝通風格雖有差異但能相互學習"],challenges:["處理問題的方式可能存在分歧","情感表達方式需要更多理解","生活節奏的協調需要時間磨合"],advice:["保持開放和耐心的溝通態度","尊重彼此的個性差異，將其視為學習機會","建立共同的興趣愛好和目標"],wuxingAnalysis:{user1:{dominantElement:"木",elementBalance:"五行較為平衡，木氣旺盛代表成長性強",strengths:["適應能力強","富有創造力"],weaknesses:["有時過於理想化","需要更多穩定性"]},user2:{dominantElement:"土",elementBalance:"土氣穩重，提供關係的穩定基礎",strengths:["務實可靠","包容性強"],weaknesses:["有時過於保守","需要更多變化刺激"]},compatibility:"木土相配，木能從土中汲取養分，土能包容木的成長，形成互補互利的關係",recommendation:"建議在家中東南方向擺放綠色植物，增強木氣；西南方向擺放黃色或褐色裝飾，強化土氣"},fortuneAnalysis:{currentYear:"今年感情運勢整體穩定，春夏季節特別適合深化關係",monthlyTrends:["春季（2-4月）：感情升溫期，適合深入交流","夏季（5-7月）：關係穩固期，可考慮未來規劃","秋季（8-10月）：需要更多耐心，避免小爭執"],bestTiming:"春分至夏至期間是關係發展的最佳時機",warnings:"秋末冬初需要注意溝通方式，避免因小事產生誤解"},relationshipAdvice:{communication:"建議採用溫和而直接的溝通方式，避免在情緒激動時討論重要問題",conflict:"遇到分歧時，先各自冷靜思考，再以開放的心態討論解決方案",growth:"定期分享個人成長心得，支持彼此的夢想和目標",intimacy:"通過共同體驗和回憶創建，加深情感連結"},taboos:{behaviors:["避免在公共場合激烈爭執","不要拿對方與他人比較"],timing:["避免在疲憊或壓力大時討論重要決定","月圓之夜不適合處理衝突"],feng_shui:["臥室避免擺放尖銳物品","不要在床頭擺放鏡子"]},fengShuiLayout:{bedroom:"床頭朝向東方或南方，使用暖色調床品，避免梁柱壓頂",livingRoom:"客廳保持明亮整潔，在東南角擺放綠色植物或水晶",colors:"建議使用綠色、黃色、粉色作為主色調，避免過多黑色或紅色",items:"擺放成對的裝飾品，如一對花瓶或相框，象徵感情和諧",generalAdvice:"保持居住環境的整潔和諧，定期清理不需要的物品"},specificProblem:{analysis:`針對您提到的問題「${problem}」，這通常與溝通方式和期望值的差異有關`,solutions:["增加日常的輕鬆對話時間，不一定要討論嚴肅話題","學習對方的表達方式和接收方式","建立定期的關係檢視時間，坦誠分享感受"],actionPlan:"從每週安排一次深度交流開始，逐步建立更好的溝通模式",timeline:"預期在3-6個月內看到明顯的改善"},dailyTips:["每天睡前分享一件開心的事情","週末安排共同的戶外活動","記住對方喜歡的小細節並時常實踐"],communication:{style:"建議採用溫和而清晰的表達方式，多使用「我感覺」而非「你總是」的句型",tips:["主動詢問對方的想法和感受","在對方說話時保持專注聆聽","用肯定的語言表達對關係的重視"]}};return a.NextResponse.json({success:!0,data:e,fallback:!0,message:"由於API服務暫時不可用，提供基於傳統命理的分析結果"})}return a.NextResponse.json({error:"分析過程中發生錯誤",details:e.message},{status:500})}}let u=new o.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/couple-analysis/route",pathname:"/api/couple-analysis",filename:"route",bundlePath:"app/api/couple-analysis/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/couple-analysis/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:m,workUnitAsyncStorage:p,serverHooks:g}=u;function d(){return(0,i.patchFetch)({workAsyncStorage:m,workUnitAsyncStorage:p})}},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},96487:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var t=e=>s(s.s=e),n=s.X(0,[7719,580],()=>t(35500));module.exports=n})();