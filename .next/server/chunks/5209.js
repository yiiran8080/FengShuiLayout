"use strict";exports.id=5209,exports.ids=[5209],exports.modules={34089:(e,t,i)=>{i.d(t,{h:()=>a}),e=i.hmd(e);class a{static{this.tianGan=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]}static{this.diZhi=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]}static{this.wuXing={甲:"木",乙:"木",丙:"火",丁:"火",戊:"土",己:"土",庚:"金",辛:"金",壬:"水",癸:"水",子:"水",丑:"土",寅:"木",卯:"木",辰:"土",巳:"火",午:"火",未:"土",申:"金",酉:"金",戌:"土",亥:"水"}}static getYearPillar(e){let t=(e-4)%10;return{tianGan:this.tianGan[t],diZhi:this.diZhi[(e-4)%12],element:this.wuXing[this.tianGan[t]]}}static getDayPillar(e){let t=new Date("1900-01-01"),i=Math.floor((new Date(e)-t)/864e5),a=i%10;return{tianGan:this.tianGan[a],diZhi:this.diZhi[i%12],element:this.wuXing[this.tianGan[a]]}}static analyzeElementStrength(e,t){let i=new Date().getMonth()+1,a="";return a=i>=3&&i<=5?"春季":i>=6&&i<=8?"夏季":i>=9&&i<=11?"秋季":"冬季",{description:({木:{strong:"春季出生，木旺",weak:"秋季出生，金克木"},火:{strong:"夏季出生，火旺",weak:"冬季出生，水克火"},土:{strong:"四季末出生，土旺",weak:"春季出生，木克土"},金:{strong:"秋季出生，金旺",weak:"夏季出生，火克金"},水:{strong:"冬季出生，水旺",weak:"夏季出生，土克水"}})[t]?.strong||"中等強度",season:a,advice:this.getElementAdvice(t)}}static getElementAdvice(e){return({木:"宜東方發展，忌金屬尖銳物品，多接觸綠色植物",火:"宜南方發展，忌水濕環境，多使用紅色物品",土:"宜中央或西南發展，穩重踏實，多使用黃色物品",金:"宜西方發展，忌火熱環境，多使用白色金屬物品",水:"宜北方發展，忌土燥環境，多使用黑色或藍色物品"})[e]||"根據個人情況調整"}static getPersonalityAnalysis(e){return({木:"性格正直，具有成長性和創造力，但有時過於理想化",火:"性格熱情，具有領導力和行動力，但有時過於急躁",土:"性格穩重，具有包容性和責任感，但有時過於保守",金:"性格堅毅，具有組織力和決斷力，但有時過於固執",水:"性格靈活，具有智慧和適應力，但有時過於多變"})[e]||"性格特質需要進一步分析"}}e.exports&&(e.exports={BaziCalculator:a})},95209:(e,t,i)=>{i.d(t,{EnhancedInitialAnalysis:()=>s});var a=i(34089);let n=process.env.DEEPSEEK_API_KEY||process.env.API_KEY;class s{static async callDeepSeekAPI(e,t={}){try{let i=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({model:"deepseek-chat",messages:e,max_tokens:t.maxTokens||800,temperature:t.temperature||.7,stream:!1})});if(!i.ok)throw Error(`DeepSeek API error: ${i.status} ${i.statusText}`);let a=await i.json();return a.choices?.[0]?.message?.content||""}catch(e){return console.error("DeepSeek API call failed:",e),null}}static async generateWorkAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"工作",t)}static async generateFinanceAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"財運",t)}static async generateHealthAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"健康",t)}static async generateRelationshipAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"人際關係",t)}static async generateChildrenAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"子女",t)}static async generateFateAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"因緣",t)}static async generateLoveAnalysis(e,t=""){return await this.generatePersonalAnalysis(e,"感情",t)}static async generateCoupleAnalysis(e,t,i=""){let a=e.getFullYear(),n=t.getFullYear(),s=this.calculateBazi(e),c=this.calculateBazi(t),r=this.calculateElement(a),l=this.calculateElement(n),o=`🔮 風鈴看了你們的生日，發現你們的緣分很特別呢！💕

`;o+=`**1. 命盤速讀**
`,o+=`👨 男方：${s.year} ${s.month} ${s.day} ${s.hour} (${r}命)
`,o+=`👩 女方：${c.year} ${c.month} ${c.day} ${c.hour} (${l}命)
`,o+=`配對類型：${this.getCoupleType(r,l)}
`,o+=`緣分指數：${this.getCompatibilityScore(r,l)}%

`,o+=`**2. 契合度分析**
`;let u=this.getCompatibilityAnalysis(r,l);o+=`五行互動：${u.interaction}
`,o+=`性格配對：${u.personality}
`,o+=`相處建議：${u.advice}

`;try{let a=await this.generateCoupleAIAnalysis(e,t,r,l,i);a?o+=a:o+=this.getFallbackCoupleAnalysis(r,l,i)}catch(e){console.error("AI generation failed:",e),o+=this.getFallbackCoupleAnalysis(r,l,i),o+=this.getCoupleReportRecommendations()}return o}static async generatePersonalAnalysis(e,t,i=""){let a=e.getFullYear();e.getMonth(),e.getDate();let n=this.calculateBazi(e),s=this.calculateElement(a),c=this.getCategoryConfig(t),r=`🔮 風鈴看了你的生日，發現你有很特別的${t}潛質呢！${c.emoji}

`;r+=`**1. 命盤速讀**
`,r+=`八字：${n.year} ${n.month} ${n.day} ${n.hour}
`,r+=`五行屬性：${s}命
`,r+=`${c.palace}：${this.getPalaceStar(s,t)}
`,r+=`   - 關鍵格局：
`,r+=`     ${this.getKeyPattern(s,a)}

`;try{let a=await this.generatePersonalAIAnalysis(e,s,t,i);a?r+=a:r+=this.getFallbackPersonalAnalysis(s,t,i)}catch(e){console.error("AI generation failed:",e),r+=this.getFallbackPersonalAnalysis(s,t,i),r+=this.getReportRecommendations(t)}return r}static async generatePersonalAIAnalysis(e,t,i,a){let n=e.getFullYear(),s=e.getMonth()+1,c=e.getDate(),r=new Date().getFullYear(),l=new Date().getMonth()+1,o=this.getCategoryConfig(i),u=`你是專業的風水師「風鈴」，請根據以下信息生成個人化的${i}分析：

用戶信息：
- 出生日期：${n}年${s}月${c}日
- 五行屬性：${t}命
- 當前年齡：${r-n}歲
- 當前時間：${r}年${l}月
- 具體問題：${a||"無特定問題"}

請生成以下三個部分的內容，要求個人化、具體、實用：

**2. 年度預警**
根據${t}命在${r}年的${i}運勢，提供：
- 成就星：${o.achievementGuide}
- 小人煞：${o.obstacleGuide}

**3. ${o.analysisTitle}**
根據${t}命特質，分析用戶最近${i}狀況和未來3-6個月趨勢，要具體描述：
- ${o.recentSituation}
- ${o.futureTrend}
- ${o.personalAdvantage}

**4. ${o.adviceTitle}**
根據${t}命提供3個具體可行的${i}建議：
- ${o.advicePoint1}
- ${o.advicePoint2}
- ${o.advicePoint3}

**5. 💡 專屬問題解析**
${a?`針對你的具體問題「${a}」，根據${t}命特質提供：
- 問題核心分析（為什麼會遇到這個問題）
- 初步解決方向（2-3個可行建議）
- 🎯關鍵時機：${t}命最適合在【當前月份】開始行動
- 風鈴溫馨提醒：想要詳細的解決步驟、專屬時辰表和風水佈局圖嗎？解鎖詳細報告，讓問題迎刃而解！✨`:`根據你目前的${i}狀況，風鈴發現：
- 一個即將到來的重要轉機（與${t}命特質相關）
- 需要在【未來2個月】特別把握的關鍵時期
- ⚡機會窗口：錯過這次要等下個季度
- 風鈴溫馨提醒：想知道具體日期、詳細行動計劃和專屬風水佈局嗎？解鎖詳細報告，把握最佳時機！✨`}

要求：
1. 使用風鈴可愛親切的語調
2. 內容要具體實用，不要空泛
3. 根據五行特質個人化
4. 考慮當前時間因素
5. 每部分控制在2-3行內
6. 使用emoji增加親和力
7. Point 5要讓用戶感受到價值但留有懸念，引導解鎖詳細報告`;return await this.callDeepSeekAPI([{role:"system",content:"你是風鈴，一個專業但親切可愛的風水師。你的回答要專業、個人化，同時保持輕鬆友好的語調。"},{role:"user",content:u}],{maxTokens:1400,temperature:.8})}static async generateCoupleAIAnalysis(e,t,i,a,n){let s=e.getFullYear(),c=t.getFullYear(),r=e.getMonth()+1,l=t.getMonth()+1,o=e.getDate(),u=t.getDate(),g=new Date().getFullYear(),h=new Date().getMonth()+1,d=`你是專業的風水師「風鈴」，請根據以下信息生成個人化的合婚配對分析：

雙方信息：
- 男方：${s}年${r}月${o}日，${i}命，${g-s}歲
- 女方：${c}年${l}月${u}日，${a}命，${g-c}歲
- 當前時間：${g}年${h}月
- 具體問題：${n||"無特定問題"}

請生成以下部分的內容，要求個人化、具體、實用：

**3. 星盤指引**
根據雙方八字星盤分析，提供：
- 遷移宮聯動：雙方感情發展的流年變化和關鍵時期
- 夫妻宮信號：目前婚姻宮位的能量狀態和未來6個月趨勢
- 關鍵法則：基於星盤配置的3個核心感情維護要點

**4. 配對分析**
根據${i}命和${a}命的配對特質，分析：
- 你們最近的相處狀況和互動模式
- 未來3-6個月的感情發展趨勢
- 雙方性格優勢如何互補
- 需要注意的磨合點

**5. 簡單的感情風水建議**
根據雙方五行提供3個具體可行的風水建議：
- 居家環境佈置建議
- 約會地點和活動選擇
- 穿著配色和配飾建議

**6. 💕 專屬感情解析**
${n?`針對你們的具體問題「${n}」，根據${i}命和${a}命配對分析：
- 問題背後的深層原因（五行角度分析）
- 改善關係的初步方向（2-3個建議）
- 💒重要時機：你們在【當前季節】最適合深化關係
- 風鈴溫馨提醒：想要詳細的感情改善計劃、吉日選擇和專屬佈局方案嗎？解鎖詳細報告，讓愛情開花結果！💕`:`根據你們的配對特質，風鈴發現：
- 一個即將影響感情走向的關鍵轉折點
- 【未來3個月】內的重要感情發展機會
- ⏰黃金期：錯過這次高峰期要等半年
- 風鈴溫馨提醒：想知道具體進展時間表、求婚吉日和增進感情的風水秘訣嗎？解鎖詳細報告，把握愛情最佳時機！💕`}

要求：
1. 使用風鈴可愛親切的語調
2. 內容要具體實用，針對雙方配對特質
3. 考慮五行相生相剋關係
4. 考慮當前時間因素
5. 每部分控制在3-4行內
6. 使用emoji增加親和力
7. Point 5要讓用戶感受到價值但留有懸念，引導解鎖詳細報告`;return await this.callDeepSeekAPI([{role:"system",content:"你是風鈴，一個專業但親切可愛的風水師。你的回答要專業、個人化，同時保持輕鬆友好的語調。"},{role:"user",content:d}],{maxTokens:1500,temperature:.8})}static getCategoryConfig(e){let t={工作:{emoji:"\uD83D\uDCBC",palace:"事業宮主星",analysisTitle:"你的工作運勢分析",adviceTitle:"簡單的工作風水建議",achievementGuide:"具體的突破領域和時機（例如：將星：X季主導專案）",obstacleGuide:"具體的防範對象和建議（例如：指背：遠離[生肖]同事）",recentSituation:"最近可能遇到的工作情況",futureTrend:"未來幾個月的發展機會",personalAdvantage:"個人優勢和需要注意的地方",advicePoint1:"辦公環境佈置",advicePoint2:"座位方向選擇",advicePoint3:"穿著配色建議"},財運:{emoji:"\uD83D\uDCB0",palace:"財帛宮主星",analysisTitle:"你的財運分析",adviceTitle:"簡單的招財風水建議",achievementGuide:"具體的財運突破期和投資時機（例如：天財星：X季投資機會）",obstacleGuide:"具體的破財防範和理財建議（例如：劫財煞：避免[類型]投資）",recentSituation:"最近的財務狀況和收入變化",futureTrend:"未來幾個月的財運機會",personalAdvantage:"理財優勢和需要注意的地方",advicePoint1:"居家財位佈置",advicePoint2:"錢包和配件選擇",advicePoint3:"投資理財時機"},健康:{emoji:"\uD83C\uDF3F",palace:"疾厄宮主星",analysisTitle:"你的健康運勢分析",adviceTitle:"簡單的養生風水建議",achievementGuide:"具體的健康提升期和調養時機（例如：藥師星：X季養生期）",obstacleGuide:"具體的健康注意事項和預防建議（例如：病符：注意[部位]保養）",recentSituation:"最近的身體狀況和能量變化",futureTrend:"未來幾個月的健康趨勢",personalAdvantage:"體質優勢和需要注意的地方",advicePoint1:"居家環境佈置",advicePoint2:"飲食和作息調整",advicePoint3:"運動和養生方式"},人際關係:{emoji:"\uD83E\uDD1D",palace:"交友宮主星",analysisTitle:"你的人際運勢分析",adviceTitle:"簡單的人際風水建議",achievementGuide:"具體的人脈擴展期和社交時機（例如：天德星：X季貴人運）",obstacleGuide:"具體的人際防範和溝通建議（例如：口舌煞：避免與[類型]人衝突）",recentSituation:"最近的人際互動和關係變化",futureTrend:"未來幾個月的社交機會",personalAdvantage:"社交優勢和需要注意的地方",advicePoint1:"社交場合佈置",advicePoint2:"溝通方式和態度",advicePoint3:"穿著和配飾建議"},子女:{emoji:"\uD83D\uDC76",palace:"子女宮主星",analysisTitle:"你的子女運勢分析",adviceTitle:"簡單的子女風水建議",achievementGuide:"具體的子女緣分和教育時機（例如：天喜星：X季懷孕機會）",obstacleGuide:"具體的子女教養和健康注意（例如：刑沖：注意[年齡]階段）",recentSituation:"最近與子女的相處和教育狀況",futureTrend:"未來幾個月的親子關係發展",personalAdvantage:"教養優勢和需要注意的地方",advicePoint1:"兒童房間佈置",advicePoint2:"親子互動方式",advicePoint3:"教育和成長環境"},因緣:{emoji:"\uD83D\uDD2E",palace:"遷移宮主星",analysisTitle:"你的因緣運勢分析",adviceTitle:"簡單的因緣風水建議",achievementGuide:"具體的機會出現和貴人時機（例如：天乙星：X季貴人相助）",obstacleGuide:"具體的阻礙化解和因緣建議（例如：孤辰：主動參與[活動]）",recentSituation:"最近的機會和人際因緣變化",futureTrend:"未來幾個月的因緣發展",personalAdvantage:"因緣優勢和需要注意的地方",advicePoint1:"居家氣場佈置",advicePoint2:"社交活動參與",advicePoint3:"心態和行為調整"},感情:{emoji:"\uD83D\uDC95",palace:"夫妻宮主星",analysisTitle:"你的感情運勢分析",adviceTitle:"簡單的感情風水建議",achievementGuide:"具體的桃花期和戀愛時機（例如：紅鸞星：X季桃花運）",obstacleGuide:"具體的感情阻礙和化解建議（例如：孤鸞：多參與[類型]活動）",recentSituation:"最近的感情狀況和情感變化",futureTrend:"未來幾個月的感情發展",personalAdvantage:"感情優勢和需要注意的地方",advicePoint1:"居家桃花位佈置",advicePoint2:"約會和相處方式",advicePoint3:"穿著和魅力提升"}};return t[e]||t["工作"]}static getPalaceStar(e,t){return"工作"===t?this.getCareerStar(e):({財運:{金:"武曲星（正財穩健）",木:"天機星（偏財機智）",水:"太陰星（理財智慧）",火:"太陽星（財運亨通）",土:"天府星（聚財有方）"},健康:{金:"太白星（肺金強健）",木:"歲德星（肝木調和）",水:"北斗星（腎水充足）",火:"南極星（心火旺盛）",土:"中宮星（脾土和順）"},人際關係:{金:"天德星（正義人緣）",木:"文昌星（智慧交友）",水:"天乙星（貴人相助）",火:"福德星（熱情魅力）",土:"天梁星（穩重可靠）"},子女:{金:"天喜星（子女緣深）",木:"文曲星（教育有方）",水:"天姚星（親子和諧）",火:"紅鸞星（子女活潑）",土:"天倉星（養育豐厚）"},因緣:{金:"天乙貴人（高貴因緣）",木:"月德貴人（智慧因緣）",水:"太極貴人（神秘因緣）",火:"天德貴人（光明因緣）",土:"福德貴人（福氣因緣）"},感情:{金:"紅鸞星（正緣桃花）",木:"天喜星（成長之愛）",水:"咸池星（浪漫情緣）",火:"天姚星（熱情如火）",土:"天倉星（穩定長久）"}})[t]?.[e]||"紫微星"}static getCoupleType(e,t){let i={金水:"金水相生，智慧財富",水金:"金水相生，智慧財富",水木:"水木相生，成長滋養",木水:"水木相生，成長滋養",木火:"木火相生，熱情創意",火木:"木火相生，熱情創意",火土:"火土相生，溫暖穩定",土火:"火土相生，溫暖穩定",土金:"土金相生，踏實富足",金土:"土金相生，踏實富足",金金:"同氣連枝，理性默契",木木:"雙木並茂，共同成長",水水:"水乳交融，心靈相通",火火:"雙火燎原，激情四射",土土:"厚德載物，穩如泰山"};return i[e+t]||i[t+e]||"特殊配對，需要磨合"}static getCompatibilityScore(e,t){let i={金水:92,水金:92,水木:88,木水:88,木火:90,火木:90,火土:87,土火:87,土金:89,金土:89,金金:82,木木:78,水水:85,火火:75,土土:80,金木:65,木金:65,木土:68,土木:68,土水:62,水土:62,水火:70,火水:70,火金:67,金火:67};return i[e+t]||i[t+e]||70}static getCompatibilityAnalysis(e,t){let i=this.getCompatibilityScore(e,t);return i>=85?{interaction:"五行相生，能量互補增強 ✨",personality:"性格特質高度契合，相處融洽",advice:"保持現有互動模式，適度給彼此空間"}:i>=75?{interaction:"五行同類，理解默契度高 \uD83E\uDD1D",personality:"思維模式相似，容易產生共鳴",advice:"適時增加新鮮感，避免過於平淡"}:{interaction:"五行相剋，需要磨合調和 ⚖️",personality:"性格差異較大，但可以互補成長",advice:"多溝通理解，學會欣賞彼此不同特質"}}static getFallbackPersonalAnalysis(e,t,i){let a="",n=this.getCategoryConfig(t);a+=`**2. 年度預警**
`;let s=this.getYearlyForecast(e,new Date().getFullYear(),t);return a+=`   - 成就星：${s.achievement}
   - 小人煞：${s.obstacle}

**3. ${n.analysisTitle}**
`+this.getCategoryFortune(e,t,new Date().getFullYear(),new Date().getMonth()+1)+`

`+`**4. ${n.adviceTitle}**
`,this.getCategoryFengShuiAdvice(e,t).forEach(e=>{a+=`• ${e}
`}),a+=`
**5. 💡 專屬問題解析**
`,i?a+=`針對你的具體問題「${i}」：
• 問題核心：${this.getSpecificCategoryAdvice(e,t,i)}
• 初步建議：${this.getBasicSolution(e,t)}
• 🎯關鍵時機：${e}命最適合在當前時期採取行動
• 風鈴溫馨提醒：想要詳細行動計劃、專屬時辰表和風水佈局圖嗎？解鎖詳細報告，問題迎刃而解！✨
`:a+=`根據你的${t}狀況，風鈴發現：
• 關鍵機會：${this.getOpportunityHint(e,t)}
• 注意事項：${this.getCautionHint(e,t)}
• ⚡機會窗口：錯過當前時期要等下個季度
• 風鈴溫馨提醒：想知道具體時間安排和專屬指導方案嗎？解鎖詳細報告，把握最佳時機！✨
`,a+=`
`}static getFallbackCoupleAnalysis(e,t,i){let a="";return a+=`**3. 配對分析**
`+this.getCoupleAnalysisDetail(e,t)+`

`+`**4. 簡單的感情風水建議**
`,this.getCoupleFengShuiAdvice(e,t).forEach(e=>{a+=`• ${e}
`}),a+=`
**5. 💕 專屬感情解析**
`,i?a+=`針對你們的具體問題「${i}」：
• 問題分析：${this.getSpecificCoupleAdvice(e,t,i)}
• 改善方向：${this.getCoupleImprovementHint(e,t)}
• 💒重要時機：你們最適合在當前季節深化關係
• 風鈴溫馨提醒：想要詳細改善計劃、吉日選擇和專屬佈局嗎？解鎖詳細報告，讓愛情開花結果！💕
`:a+=`根據你們的配對特質：
• 關鍵優勢：${this.getCoupleStrengthHint(e,t)}
• 發展機會：${this.getCoupleOpportunityHint(e,t)}
• ⏰黃金期：錯過當前高峰期要等半年
• 風鈴溫馨提醒：想知道具體時間表、求婚吉日和增進感情的風水秘訣嗎？解鎖詳細報告，把握愛情最佳時機！💕
`,a+=`
`}static getFallbackAnalysis(e,t){return this.getFallbackPersonalAnalysis(e,"工作",t)}static calculateBazi(e){let t=e.getFullYear(),i=e.getMonth()+1;e.getDate();let n=a.h.getYearPillar(t),s=a.h.getDayPillar(e),c=this.getMonthPillar(t,i),r=this.getHourPillar();return{year:`${n.tianGan}${n.diZhi}`,month:`${c.tianGan}${c.diZhi}`,day:`${s.tianGan}${s.diZhi}`,hour:`${r.tianGan}${r.diZhi}`,yearElement:n.element,dayElement:s.element}}static getMonthPillar(e,t){return{tianGan:a.h.tianGan[(12*e+t)%10],diZhi:a.h.diZhi[t-1]}}static getHourPillar(){return{tianGan:"戊",diZhi:"辰"}}static calculateElement(e){return["金","木","水","火","土"][e%5]}static getCareerStar(e){return({金:"武曲星（財官雙美）",木:"天機星（智慧謀略）",水:"太陰星（感性智慧）",火:"太陽星（領導光芒）",土:"天府星（穩重權威）"})[e]||"紫微星"}static getKeyPattern(e,t){let i=new Date().getFullYear(),a=i-t,n={金:{strength:a%2==0?"身強":"身弱",god:"用神：土（印星生身，穩固根基）",timing:`大運節點：${i}年處${this.getCurrentLuck(e)}大運`},木:{strength:a%2==0?"身強":"身弱",god:"用神：水（生發之源，智慧流動）",timing:`大運節點：${i}年處${this.getCurrentLuck(e)}大運`},水:{strength:a%2==0?"身強":"身弱",god:"用神：金（源頭活水，財源滾滾）",timing:`大運節點：${i}年處${this.getCurrentLuck(e)}大運`},火:{strength:a%2==0?"身強":"身弱",god:"用神：木（薪火相傳，生生不息）",timing:`大運節點：${i}年處${this.getCurrentLuck(e)}大運`},土:{strength:a%2==0?"身強":"身弱",god:"用神：火（溫暖調候，生機盎然）",timing:`大運節點：${i}年處${this.getCurrentLuck(e)}大運`}}[e];return`${n.strength}（${this.getStrengthReason(e)}）
     ${n.god}
     ${n.timing}`}static getStrengthReason(e){return({金:"日主庚金生秋月，金旺當令",木:"日主甲木生春月，木旺得時",水:"日主壬水生冬月，水旺司權",火:"日主丙火生夏月，火旺得勢",土:"日主戊土生季末，土旺得地"})[e]||"五行平衡"}static getCurrentLuck(e){return({金:"己未",木:"甲寅",水:"壬子",火:"丙午",土:"戊辰"})[e]}static getYearlyForecast(e,t,i="工作"){new Date().getMonth();let a={工作:{金:{achievement:"將星：秋季主導重要專案（9-11月突破期）",obstacle:"指背煞：遠離屬虎同事，避免背後議論"},木:{achievement:"文昌星：春季創意大爆發（3-5月靈感期）",obstacle:"小耗煞：遠離屬猴上司，防範資源爭奪"},水:{achievement:"智慧星：冬季策略規劃（12-2月佈局期）",obstacle:"六害煞：遠離屬蛇同事，避免合作衝突"},火:{achievement:"權威星：夏季領導展現（6-8月發光期）",obstacle:"劫財煞：遠離屬豬同事，防範利益糾紛"},土:{achievement:"貴人星：四季交替轉機（3/6/9/12月關鍵期）",obstacle:"華蓋煞：遠離屬龍同事，避免孤立無援"}},財運:{金:{achievement:"天財星：秋季投資收益（9-11月理財期）",obstacle:"劫財煞：避免高風險投資，謹慎借貸"},木:{achievement:"進財星：春季事業成長（3-5月收入期）",obstacle:"破財煞：遠離投機生意，穩健理財"},水:{achievement:"偏財星：冬季意外之財（12-2月機會期）",obstacle:"耗財煞：控制消費慾望，避免浪費"},火:{achievement:"正財星：夏季正職加薪（6-8月收穫期）",obstacle:"散財煞：避免衝動消費，理性理財"},土:{achievement:"聚財星：四季穩定累積（定期投資佳）",obstacle:"損財煞：避免擔保借貸，保守為上"}},健康:{金:{achievement:"藥師星：秋季調養肺部（9-11月養生期）",obstacle:"病符煞：注意呼吸系統，避免感冒"},木:{achievement:"長生星：春季肝膽調理（3-5月養肝期）",obstacle:"刑傷煞：注意筋骨保養，避免外傷"},水:{achievement:"延年星：冬季腎水補充（12-2月進補期）",obstacle:"衰弱煞：注意腰腎保暖，規律作息"},火:{achievement:"活力星：夏季心血管強化（6-8月運動期）",obstacle:"火旺煞：控制情緒起伏，避免上火"},土:{achievement:"穩健星：四季脾胃調理（規律飲食佳）",obstacle:"濕重煞：注意脾胃保養，避免濕氣"}},人際關係:{金:{achievement:"天德星：秋季貴人相助（9-11月社交期）",obstacle:"孤星煞：主動參與聚會，避免獨處"},木:{achievement:"人緣星：春季友誼開花（3-5月交友期）",obstacle:"口舌煞：謹慎言辭，避免爭論"},水:{achievement:"智慧星：冬季深度交流（12-2月談心期）",obstacle:"暗害煞：防範小人背後，謹慎交友"},火:{achievement:"魅力星：夏季人氣爆棚（6-8月聚會期）",obstacle:"衝突煞：控制脾氣，包容他人"},土:{achievement:"信任星：四季建立深交（長期友誼佳）",obstacle:"固執煞：保持開放心態，聆聽建議"}},子女:{金:{achievement:"天喜星：秋季懷孕機會（9-11月受孕期）",obstacle:"刑沖煞：注意青春期管教，避免衝突"},木:{achievement:"文曲星：春季教育成效（3-5月學習期）",obstacle:"叛逆煞：耐心溝通，避免強硬管教"},水:{achievement:"智慧星：冬季親子溝通（12-2月談心期）",obstacle:"冷漠煞：增加陪伴時間，關注情感"},火:{achievement:"活力星：夏季親子活動（6-8月遊樂期）",obstacle:"急躁煞：控制情緒，耐心教導"},土:{achievement:"慈愛星：四季穩定教養（持續陪伴佳）",obstacle:"溺愛煞：適度管教，培養獨立"}},因緣:{金:{achievement:"天乙星：秋季貴人出現（9-11月機遇期）",obstacle:"孤辰煞：主動社交，參與活動"},木:{achievement:"月德星：春季機會萌發（3-5月發展期）",obstacle:"阻滯煞：耐心等待，不急於求成"},水:{achievement:"太極星：冬季神奇際遇（12-2月轉機期）",obstacle:"迷茫煞：保持清醒，明辨是非"},火:{achievement:"光明星：夏季機會顯現（6-8月行動期）",obstacle:"衝動煞：三思而後行，避免草率"},土:{achievement:"福德星：四季福氣累積（持續行善佳）",obstacle:"執著煞：順其自然，不強求結果"}},感情:{金:{achievement:"紅鸞星：秋季正緣桃花（9-11月戀愛期）",obstacle:"孤鸞煞：主動社交，參與聚會"},木:{achievement:"天喜星：春季愛情萌芽（3-5月甜蜜期）",obstacle:"三刑煞：避免三角關係，專一感情"},水:{achievement:"咸池星：冬季浪漫邂逅（12-2月緣分期）",obstacle:"流霞煞：提防爛桃花，理性選擇"},火:{achievement:"天姚星：夏季熱情如火（6-8月激情期）",obstacle:"桃花劫：控制情緒，避免衝動"},土:{achievement:"天倉星：四季感情穩定（長久關係佳）",obstacle:"固情煞：適度變化，保持新鮮感"}}};return(a[i]||a["工作"])[e]||{achievement:"吉星高照：適時把握機會",obstacle:"小心謹慎：避免小人作祟"}}static getCareerFortune(e,t,i){return new Date().getFullYear(),new Date().getMonth(),({金:`金命的你最近工作運勢呈現穩中有升的趨勢。過去幾個月可能在職場上遇到一些決策挑戰，但你的理性分析能力幫助你渡過難關。接下來的3-6個月，特別是秋季期間，會有重要的升遷或項目機會出現。建議你主動爭取管理職位，你的領導才能將得到充分發揮。`,木:`木命的你創意能量充沛，最近在工作上可能產生了很多新想法，但執行上還需要更多耐心。春季是你的旺季，創新項目容易獲得認可。未來幾個月要特別注意與團隊的溝通協調，你的成長性思維將為公司帶來新的發展方向。`,水:`水命的你善於變通，最近工作環境的變化對你來說反而是機會。你的適應能力讓你在團隊中備受重視。接下來要把握溝通協調的角色，你的智慧和靈活性將幫助解決很多複雜問題。冬季期間運勢特別旺盛。`,火:`火命的你行動力強，最近在工作上展現出很強的執行力，但要注意控制急躁情緒。夏季是你的發光期，領導魅力會吸引更多合作機會。接下來幾個月適合推動重要項目，你的熱情將感染整個團隊。`,土:`土命的你做事穩重，最近可能感覺工作進展較慢，但你的堅持正在累積重要成果。你的可靠性讓上司對你信任有加。接下來的發展重點是建立長期規劃，你的穩定特質將成為職場上的重要資產。`})[e]||"你的工作運勢整體穩定，適合積極規劃未來發展。"}static getWorkFengShuiAdvice(e){return({金:["辦公桌放置白色水晶球或金屬擺件，增強決策力","座位選擇西方或西北方，背靠實牆面朝開闊空間","多穿白色、金色、銀色服裝，提升權威氣場"],木:["辦公桌左側放綠色植物（如富貴竹、綠蘿），激發創意","座位朝向東方或東南方，接受朝陽正能量","使用木質文具和綠色系辦公用品，保持成長活力"],水:["辦公桌上放小型流水擺設或藍色水晶，提升智慧","座位面向北方，保持思維清晰流暢","多用藍色、黑色文具，穿深色系服裝增強專業感"],火:["辦公桌南側放紅色擺件或向陽植物，增強領導氣場","座位朝南背北，充分吸收陽光能量","適量使用紅色、橙色辦公用品，激發行動力"],土:["辦公桌中央放黃色水晶或陶瓷擺件，穩固根基","選擇四角穩固的辦公桌椅，營造安全感","多用黃色、棕色系用品，穿大地色系服裝增強可靠感"]})[e]||["保持辦公環境整潔有序","座位背後要有靠山（牆面或櫃子）","桌上適量放置綠色植物"]}static getSpecificWorkAdvice(e,t){let i=t.toLowerCase();return i.includes("升職")||i.includes("加薪")||i.includes("晉升")?this.getPromotionAdvice(e):i.includes("跳槽")||i.includes("轉工")||i.includes("換工作")?this.getJobChangeAdvice(e):i.includes("同事")||i.includes("上司")||i.includes("人際")?this.getWorkRelationshipAdvice(e):i.includes("創業")||i.includes("生意")?this.getBusinessAdvice(e):this.getGeneralWorkAdvice(e)}static getPromotionAdvice(e){return({金:"你的領導氣質明顯，建議主動承擔更多責任，展現決策能力。最佳時機在秋季，準備好你的成果展示。",木:"發揮你的創新優勢，提出有建設性的改進方案。春季是最佳申請期，要有耐心等待成長機會。",水:"善用你的溝通協調能力，成為團隊中不可缺少的橋樑。適合在冬季提出升職申請。",火:"你的執行力是最大優勢，積極推動重要項目的完成。夏季期間運勢最旺，把握機會表現。",土:"穩扎穩打累積成果，讓你的可靠性得到充分認可。四季交替時期都是好時機。"})[e]||"持續努力，機會自然來臨。"}static getJobChangeAdvice(e){return({金:"適合轉向管理職或需要決策力的工作，金融、法律、製造業都是好選擇。",木:"創意產業、教育、環保等成長性行業最適合你的發展。",水:"貿易、服務業、媒體傳播等需要溝通的行業能發揮你的優勢。",火:"銷售、娛樂、科技等充滿活力的行業最適合你的特質。",土:"建築、房地產、農業、金融等穩定行業符合你的性格。"})[e]||"選擇適合自己特質的行業最重要。"}static getWorkRelationshipAdvice(e){return({金:"以誠待人，用你的公正態度贏得信任，但要學會適度的靈活變通。",木:"發揮你的包容性，幫助團隊成長，但要注意不要過於理想化。",水:"善用你的溝通天賦，成為各方的協調者，但要堅持自己的原則。",火:"控制情緒起伏，用你的熱情感染他人，但要學會傾聽不同意見。",土:"發揮你的穩定作用，成為團隊的定海神針，但要更主動表達想法。"})[e]||"真誠溝通是解決人際問題的關鍵。"}static getBusinessAdvice(e){return({金:"適合投資型或製造業創業，要充分發揮你的管理和決策優勢。",木:"創新科技或教育服務最適合，要保持學習心態和成長思維。",水:"貿易或服務業創業機會大，要善用你的人脈和溝通能力。",火:"娛樂、餐飲或行銷相關最適合，要控制擴張節奏避免過於激進。",土:"傳統行業或房地產較穩妥，要做好長期規劃和風險控制。"})[e]||"選擇熟悉的領域，循序漸進發展最安全。"}static getGeneralWorkAdvice(e){return({金:"發揮你的領導天賦，在決策和管理方面多下功夫。",木:"保持學習成長的心態，在創新和發展方面尋找突破。",水:"善用你的溝通協調能力，在團隊合作中發揮重要作用。",火:"控制好節奏，用你的行動力推動工作進展。",土:"穩步前進，在穩定中尋求突破和發展機會。"})[e]||"根據自己的特質，發揮最大優勢。"}static getCategoryFortune(e,t,i,a){let n={工作:this.getCareerFortune(e,i,a),財運:this.getFinanceFortune(e,i,a),健康:this.getHealthFortune(e,i,a),人際關係:this.getRelationshipFortune(e,i,a),子女:this.getChildrenFortune(e,i,a),因緣:this.getFateFortune(e,i,a),感情:this.getLoveFortune(e,i,a)};return n[t]||n["工作"]}static getFinanceFortune(e,t,i){return({金:`金命的你理財觀念務實，最近可能在投資理財方面更加謹慎。你的分析能力幫助你避開了一些風險，接下來的秋季期間是你的財運旺季。建議關注穩健型投資，你的理性判斷將帶來穩定收益。避免過於保守，適度的投資能增加財富累積。`,木:`木命的你財運呈現成長趨勢，最近可能有新的收入來源或投資機會出現。你的學習能力讓你能快速掌握理財知識，春季是你的財運高峰期。未來幾個月適合長期投資規劃，你的成長性思維將帶來可觀回報。`,水:`水命的你財運變化靈活，最近可能在資金流動方面有新的規劃。你的適應能力讓你能在市場變化中找到機會，冬季期間財運特別旺盛。建議關注流動性投資，你的靈活性將幫助抓住短期獲利機會。`,火:`火命的你財運行動力強，最近可能在賺錢方面有積極的表現。你的執行力讓你能快速把握投資時機，夏季是你的財運爆發期。接下來適合積極理財，但要注意控制風險，避免衝動投資。`,土:`土命的你財運穩健，最近可能感覺財富累積較慢，但你的堅持正在建立穩固的財務基礎。你的穩重讓你避開了很多投資陷阱，接下來的發展重點是長期規劃，你的穩定特質將成為財富增長的重要資產。`})[e]||"你的財運整體穩定，適合積極規劃理財策略。"}static getHealthFortune(e,t,i){return({金:`金命的你體質較為敏感，最近可能需要特別注意呼吸系統和皮膚的保養。你的自律性幫助你維持良好的作息習慣，秋季是你的養生關鍵期。建議多做深呼吸運動，你的理性態度將幫助建立健康的生活方式。`,木:`木命的你生命力旺盛，最近可能感覺精力充沛，但要注意肝膽和筋骨的保養。你的活力讓你能保持積極的運動習慣，春季是你的健康提升期。建議多接觸大自然，你的成長性特質將帶來身心的全面發展。`,水:`水命的你體質偏寒，最近可能需要注意保暖和腎臟的調養。你的智慧讓你能找到適合的養生方法，冬季期間要特別注意保健。建議多喝溫水、適度進補，你的適應能力將幫助調節體質平衡。`,火:`火命的你精力旺盛，最近可能容易上火或情緒激動，需要注意心血管和情緒的調節。你的活力讓你喜歡運動健身，夏季要注意避免過度勞累。建議保持平和心態，你的熱情將轉化為健康的動力。`,土:`土命的你體質穩定，最近可能需要注意脾胃的調理和體重管理。你的規律性讓你能維持穩定的健康狀態，四季都適合養生調理。建議注意飲食平衡，你的穩健特質將成為長期健康的保障。`})[e]||"你的健康運勢整體良好，保持規律作息最重要。"}static getRelationshipFortune(e,t,i){return({金:`金命的你人際關係講求公平正義，最近可能在朋友圈中扮演仲裁者的角色。你的公正態度贏得他人信任，秋季是你的社交旺季。建議主動參與團體活動，你的領導魅力將吸引志同道合的朋友。`,木:`木命的你人緣很好，最近可能結識了一些有趣的新朋友。你的包容性讓你能與不同類型的人相處，春季是你的交友高峰期。建議多參與學習型聚會，你的成長性思維將帶來有價值的人脈。`,水:`水命的你善於溝通，最近可能在人際關係中發揮了重要的協調作用。你的智慧讓你能化解很多人際衝突，冬季期間人際運勢特別旺盛。建議深化現有友誼，你的真誠將建立長久的信任關係。`,火:`火命的你個性熱情，最近可能因為你的活力而成為朋友圈的焦點。你的魅力讓你容易結交新朋友，夏季是你的人氣爆發期。建議控制情緒起伏，用你的正能量感染周圍的人。`,土:`土命的你人際關係穩定，最近可能更加重視深層的友誼關係。你的可靠性讓朋友都願意向你求助，四季都適合維護現有人脈。建議更主動表達關心，你的真誠將深化所有人際關係。`})[e]||"你的人際運勢穩定，真誠溝通是關鍵。"}static getChildrenFortune(e,t,i){return({金:`金命的你對子女教育很有規劃，最近可能在教育方式上有新的思考。你的理性態度幫助建立明確的教育目標，秋季是親子關係的重要時期。建議多聆聽孩子的想法，你的公正性將贏得子女的尊敬。`,木:`木命的你與子女關係融洽，最近可能發現孩子的新才能或興趣。你的包容性讓孩子能自由發展，春季是教育成效顯現的時期。建議陪伴孩子探索新事物，你的成長性思維將啟發子女的潛能。`,水:`水命的你很懂得與子女溝通，最近可能通過深度對話更了解孩子的內心。你的智慧讓你能給予適當的指導，冬季期間親子關係特別和諧。建議增加情感交流時間，你的理解力將建立深厚的親子關係。`,火:`火命的你對子女充滿熱情，最近可能在親子活動上很積極。你的活力讓孩子感受到滿滿的愛，夏季是親子互動的黃金期。建議控制期待值，用你的熱情激發孩子的興趣而非壓力。`,土:`土命的你給予子女穩定的愛，最近可能更注重孩子的品格教育。你的穩重讓孩子有安全感，四季都適合進行深度的親子教育。建議保持耐心和包容，你的穩定性將成為子女成長的重要支柱。`})[e]||"你與子女的關係整體和諧，用心陪伴最重要。"}static getFateFortune(e,t,i){return({金:`金命的你最近因緣際遇偏向高品質的人事物，可能會遇到一些有影響力的貴人。你的正直態度吸引了志同道合的人，秋季是重要機會出現的時期。建議保持開放心態，你的品格將為你帶來意想不到的好機緣。`,木:`木命的你因緣呈現成長性發展，最近可能有學習或發展的新機會出現。你的求知欲吸引了很多學習資源，春季是因緣萌發的關鍵期。建議積極參與成長型活動，你的進步心將帶來豐富的人生體驗。`,水:`水命的你因緣變化多樣，最近可能有意外的際遇或轉機。你的適應力讓你能把握各種機會，冬季期間因緣特別神奇。建議保持靈活心態，你的智慧將幫助識別真正有價值的機緣。`,火:`火命的你因緣充滿活力，最近可能因為積極行動而創造了新的機會。你的熱情感染了周圍的人，夏季是因緣爆發的時期。建議把握當下機會，你的行動力將開創全新的人生可能性。`,土:`土命的你因緣深厚穩定，最近可能有長期性的重要機會出現。你的誠信態度建立了良好的口碑，四季都有持續的好因緣。建議珍惜既有關係，你的穩重將累積深厚的福德因緣。`})[e]||"你的因緣運勢整體良好，誠心待人將帶來好機緣。"}static getLoveFortune(e,t,i){return({金:`金命的你感情觀較為理性，最近可能在愛情中尋求更深層的精神契合。你的真誠態度吸引了品質不錯的桃花，秋季是正緣出現的重要時期。建議保持真實自我，你的品格將吸引真正適合的人。`,木:`木命的你感情充滿成長性，最近可能與伴侶在共同學習中增進感情。你的包容性讓感情關係很和諧，春季是愛情開花結果的時期。建議多創造共同體驗，你的成長性思維將帶來美好的愛情故事。`,水:`水命的你感情豐富細膩，最近可能通過深度溝通讓感情更進一步。你的理解力讓伴侶感到被珍視，冬季期間愛情運勢特別旺盛。建議多表達內心感受，你的真誠將建立深厚的情感連結。`,火:`火命的你感情熱烈直接，最近可能因為你的魅力而吸引了很多關注。你的熱情讓愛情充滿激情，夏季是桃花大爆發的時期。建議學會耐心經營，你的真心將點燃美好的愛情火花。`,土:`土命的你感情踏實穩重，最近可能更重視感情的長期發展。你的穩定性讓伴侶很有安全感，四季都適合深化感情關係。建議增加浪漫元素，你的真誠將建立堅固持久的愛情基礎。`})[e]||"你的感情運勢穩定，真心相待是愛情的基礎。"}static getCategoryFengShuiAdvice(e,t){let i={工作:this.getWorkFengShuiAdvice(e),財運:this.getFinanceFengShuiAdvice(e),健康:this.getHealthFengShuiAdvice(e),人際關係:this.getRelationshipFengShuiAdvice(e),子女:this.getChildrenFengShuiAdvice(e),因緣:this.getFateFengShuiAdvice(e),感情:this.getLoveFengShuiAdvice(e)};return i[t]||i["工作"]}static getFinanceFengShuiAdvice(e){return({金:["財位（東南方）放置白色水晶或金屬聚寶盆，增強財運磁場","使用金色、白色錢包，裡面放置整齊鈔票和紅色小紙條","每月初一十五在財位點香祈福，感謝財神護佑"],木:["財位放置綠色植物（如發財樹、富貴竹），激活生財能量","使用綠色、棕色錢包，裡面放置生長中的種子象徵錢財增長","定期整理財務文件，保持理財環境清潔有序"],水:["財位放置小型流水裝置或藍色水晶，促進財富流動","使用藍色、黑色錢包，避免紅色以免財水相沖","每週清潔錢包和銀行卡，保持財運流動順暢"],火:["財位南側放置紅色擺件或向陽植物，激發賺錢動力","使用紅色、紫色錢包，但避免過於鮮豔防止散財","在家中點燃檀香或使用精油，營造積極的財運氛圍"],土:["財位中央放置黃色水晶或陶瓷聚寶盆，穩固財富根基","使用黃色、棕色厚實錢包，象徵財富穩固累積","定期清理家中雜物，保持財運通道暢通無阻"]})[e]||["保持財位整潔，定期清理雜物","使用質感好的錢包，避免破損","培養良好的理財習慣和記帳習慣"]}static getHealthFengShuiAdvice(e){return({金:["臥室西方放置白色水晶或金屬風鈴，調和肺金能量","多穿白色、淺色衣物，避免過於厚重的服裝","保持室內空氣流通，定期更換寢具維持清潔"],木:["房間東方放置綠色植物或木質傢具，增強肝木活力","多穿綠色、自然色系服裝，使用天然材質用品","每天早晨面向東方做深呼吸，吸收朝陽正能量"],水:["房間北方放置水培植物或藍色擺件，滋養腎水","多穿深色、藍色系服裝，保持身體溫暖","睡前泡腳或洗溫水澡，促進血液循環"],火:["房間南方放置紅色擺件或向陽植物，平衡心火","適量使用紅色服飾，但避免全身過於鮮豔","保持規律作息，避免熬夜影響心血管健康"],土:["房間中央保持整潔，放置黃色或陶瓷擺件穩定脾土","多穿大地色系、舒適寬鬆的服裝","注意飲食規律，三餐定時定量保養脾胃"]})[e]||["保持居住環境整潔舒適","維持規律的作息時間","根據體質選擇適合的運動方式"]}static getRelationshipFengShuiAdvice(e){return({金:["客廳西方擺放成對的白色或金屬裝飾品，增強人際和諧","參加聚會時穿著白色、金色系服裝，提升領導魅力","送禮選擇精緻的金屬或白色物品，展現品味"],木:["家中東方放置綠色植物或木質圓桌，促進友誼成長","社交場合穿著自然色系，使用木質或竹製飾品","多在戶外或綠意環境中與朋友聚會交流"],水:["客廳北方放置流水擺設或藍色裝飾，促進溝通流暢","參與社交時穿著藍色、黑色系服裝，展現智慧氣質","選擇水邊或安靜的咖啡廳作為約會談心場所"],火:["客廳南方放置成對的紅色或明亮裝飾品，增強人氣","社交場合適量使用紅色配飾，但避免過於張揚","選擇明亮、熱鬧的環境進行聚會和交流"],土:["客廳中央放置圓形地毯或黃色抱枕，營造溫馨氛圍","穿著大地色系、質感穩重的服裝，展現可靠形象","選擇溫馨舒適的家庭式餐廳作為聚會場所"]})[e]||["保持真誠友善的態度","主動參與各種社交活動","學會聆聽和包容不同觀點"]}static getChildrenFengShuiAdvice(e){return({金:["兒童房西方放置白色學習桌椅，培養專注和邏輯思維","為孩子選擇金屬或白色文具，提升學習效率","建立明確的作息時間表，培養孩子的自律性"],木:["兒童房東方放置書桌和綠色植物，促進智慧成長","使用木質玩具和自然材質用品，培養親近自然的心性","多帶孩子到戶外活動，在大自然中學習成長"],水:["兒童房北方設置閱讀角落，放置藍色書櫃或擺件","鼓勵孩子多喝水，使用藍色或深色學習用品","培養孩子的想像力和創造力，多進行親子對話"],火:["兒童房南方放置明亮的學習燈具，激發學習熱情","適量使用紅色或明亮色彩裝飾，但避免過於刺激","鼓勵孩子參與體育活動，培養積極正面的性格"],土:["兒童房中央保持整潔，使用黃色或大地色系裝飾","為孩子準備舒適穩固的學習環境和質感好的用品","注重品格教育，培養孩子的責任感和同理心"]})[e]||["為孩子創造溫馨安全的成長環境","保持耐心和愛心進行教育","尊重孩子的個性發展和興趣愛好"]}static getFateFengShuiAdvice(e){return({金:["家中西方設置祈福空間，放置白色蠟燭或金屬法器","穿著整潔得體，展現高品質的個人形象","保持正直善良的品格，以德行吸引好因緣"],木:["家中東方放置常青植物，象徵因緣不斷成長","多參與學習成長類活動，在求知中遇見貴人","保持開放包容的心態，歡迎新的人事物進入生活"],水:["家中北方放置流水或水晶球，促進因緣流動","保持靈活變通的處事態度，隨緣不強求","多行善積德，用智慧和慈悲心累積福德因緣"],火:["家中南方放置明亮燈具，照亮人生道路","積極主動參與各種活動，用熱情創造機會","保持正面樂觀的態度，用光明能量吸引好緣分"],土:["家中中央保持整潔神聖，設置感恩祈福的空間","踏實做人做事，用誠信建立良好的人生基礎","珍惜既有的人際關係，深耕長期的情感連結"]})[e]||["保持善良正直的品格","積極參與有意義的活動","以誠待人，廣結善緣"]}static getLoveFengShuiAdvice(e){return({金:["臥室西南方（桃花位）放置成對的白色玫瑰或金屬裝飾","穿著優雅的白色、粉色系服裝，展現高貴氣質","保持理性和感性的平衡，用真誠吸引真愛"],木:["桃花位放置粉色花朵或綠色植物，催旺桃花運","穿著自然色系、有質感的服裝，展現親和力","多在自然環境中約會，讓愛情在成長中深化"],水:["桃花位放置水培植物或粉色水晶，增強浪漫氣息","穿著藍色、紫色系優雅服裝，展現神秘魅力","培養深度溝通的能力，用心靈契合建立真愛"],火:["桃花位放置紅色或粉色鮮花，點燃愛情火花","適量使用紅色、粉色配飾，但避免過於濃烈","保持熱情但學會溫柔，用真心感動對方"],土:["桃花位放置成對的黃色或粉色擺件，穩固愛情基礎","穿著溫暖的大地色系服裝，展現可靠魅力","注重細節和承諾，用穩定的愛建立長久關係"]})[e]||["保持真實自然的個性魅力","培養良好的溝通和相處技巧","用心經營感情，珍惜每個相遇"]}static getCoupleAnalysisDetail(e,t){let i={金水:`你們是理性與智慧的完美結合。${e}命的穩重理性正好平衡了${t}命的靈活變通，最近你們在溝通協調方面表現得很好。接下來幾個月，你們的關係會更加和諧，${e}命提供安全感，${t}命帶來新鮮感。建議多進行深度對話，你們的理性溝通將建立更深厚的信任基礎。`,水木:`你們是滋養與成長的美好配對。${e}命的智慧滋養著${t}命的成長夢想，最近你們在共同學習和發展方面很有默契。未來幾個月，你們會在互相支持中獲得成長，${e}命的靈活性幫助${t}命適應變化，${t}命的積極性帶動${e}命前進。`,木火:`你們是創意與熱情的完美融合。${e}命的創新思維點燃了${t}命的行動熱情，最近你們在追求夢想方面很有共識。接下來的時間裡，你們會在共同努力中實現目標，${e}命提供方向，${t}命提供動力，是很有發展潛力的組合。`,火土:`你們是激情與穩定的互補配對。${e}命的熱情活力與${t}命的穩重踏實形成很好的平衡，最近你們在生活規劃方面配合得很好。未來幾個月，${e}命會學會更多耐心，${t}命會增加更多活力，相互調節讓關係更加和諧。`,土金:`你們是穩固與精準的理想組合。${e}命的踏實基礎支撐著${t}命的理性規劃，最近你們在建立共同目標方面很有共識。接下來的發展中，你們會在穩中求進，${e}命提供安全感，${t}命提供方向感，是能夠長久發展的配對。`,金金:`你們是理性與理性的默契組合。雙方都很重視邏輯和規劃，最近在決策方面很有共識，但要注意增加感性的溝通。未來幾個月要學會表達情感，適度的浪漫會讓你們的關係更加溫馨。`,木木:`你們是成長與成長的共振配對。雙方都很有上進心和學習精神，最近在共同發展方面很有動力，但要注意保持個人特色。接下來要學會欣賞差異，在相似中找到獨特性。`,水水:`你們是智慧與智慧的深度結合。雙方都很善於溝通和理解，最近在心靈交流方面很有默契，但要注意增加行動力。未來要學會付諸實際行動，讓美好的想法變成現實。`,火火:`你們是熱情與熱情的激烈碰撞。雙方都很有活力和行動力，最近在追求目標方面很有衝勁，但要注意控制情緒衝突。接下來要學會輪流領導，避免同時爆發造成摩擦。`,土土:`你們是穩定與穩定的堅固組合。雙方都很踏實和可靠，最近在建立安全感方面很有成就，但要注意增加生活情趣。未來要學會創造驚喜，在穩定中保持新鮮感。`};return i[e+t]||i[t+e]||"你們的配對很特別，需要更多的理解和磨合，但正是這種差異讓你們能夠互相學習成長。"}static getCoupleFengShuiAdvice(e,t){let i=this.getCompatibilityScore(e,t);return i>=85?[`共同居住空間以${this.getCoupleMainColor(e,t)}為主色調，增強和諧能量`,`約會選擇${this.getCoupleLocation(e,t)}，讓你們的能量更加契合`,`雙方可穿著互補色系：${e}命適合${this.getElementColor(e)}，${t}命適合${this.getElementColor(t)}`]:i>=75?[`居家空間使用中性色調搭配各自喜好的顏色，維持和諧平衡`,`定期安排不同類型的約會活動，滿足雙方的不同需求`,`配飾選擇能增進溝通的物品，如對戒、情侶手鍊等增強連結`]:[`居住環境多使用柔和的暖色調，緩解五行相剋的衝突`,`選擇大自然環境約會，讓自然能量調和你們的差異`,`雙方都需要學習對方五行的特質，穿著可互換對方代表色增進理解`]}static getCoupleMainColor(e,t){let i={金:"白色或淺色",木:"綠色或自然色",水:"藍色或深色",火:"紅色或暖色",土:"黃色或大地色"};return this.isGenerative(e,t)?`${i[e]}和${i[t]}的和諧搭配`:"溫馨的米白色或淺粉色"}static getCoupleLocation(e,t){let i={金:"咖啡廳、藝廊、音樂廳等精緻場所",木:"公園、森林、植物園等自然環境",水:"湖邊、海邊、溫泉等水域景點",火:"陽光充足的戶外、運動場、遊樂園",土:"溫馨的家庭餐廳、傳統建築、鄉村景點"};return`${i[e]}或${i[t]}`}static getElementColor(e){return({金:"白色、金色、銀色系",木:"綠色、棕色、自然色系",水:"藍色、黑色、深色系",火:"紅色、橙色、暖色系",土:"黃色、米色、大地色系"})[e]||"任何自己喜歡的顏色"}static isGenerative(e,t){return[["金","水"],["水","木"],["木","火"],["火","土"],["土","金"]].some(i=>i[0]===e&&i[1]===t||i[0]===t&&i[1]===e)}static getSpecificCategoryAdvice(e,t,i){switch(t){case"工作":return this.getSpecificWorkAdvice(e,i);case"財運":return this.getSpecificFinanceAdvice(e,i);case"健康":return this.getSpecificHealthAdvice(e,i);case"人際關係":return this.getSpecificRelationshipAdvice(e,i);case"子女":return this.getSpecificChildrenAdvice(e,i);case"因緣":return this.getSpecificFateAdvice(e,i);case"感情":return this.getSpecificLoveAdvice(e,i);default:return this.getGeneralWorkAdvice(e)}}static getSpecificFinanceAdvice(e,t){let i=t.toLowerCase();return i.includes("投資")||i.includes("理財")?this.getInvestmentAdvice(e):i.includes("存錢")||i.includes("儲蓄")?this.getSavingAdvice(e):i.includes("賺錢")||i.includes("收入")?this.getIncomeAdvice(e):this.getGeneralFinanceAdvice(e)}static getSpecificHealthAdvice(e,t){let i=t.toLowerCase();return i.includes("減肥")||i.includes("瘦身")?this.getWeightLossAdvice(e):i.includes("養生")||i.includes("保養")?this.getWellnessAdvice(e):i.includes("睡眠")||i.includes("失眠")?this.getSleepAdvice(e):this.getGeneralHealthAdvice(e)}static getSpecificRelationshipAdvice(e,t){let i=t.toLowerCase();return i.includes("朋友")||i.includes("交友")?this.getFriendshipAdvice(e):i.includes("同事")||i.includes("職場")?this.getWorkRelationshipAdvice(e):i.includes("家人")||i.includes("親情")?this.getFamilyAdvice(e):this.getGeneralRelationshipAdvice(e)}static getSpecificChildrenAdvice(e,t){let i=t.toLowerCase();return i.includes("教育")||i.includes("學習")?this.getEducationAdvice(e):i.includes("懷孕")||i.includes("生育")?this.getPregnancyAdvice(e):i.includes("親子")||i.includes("溝通")?this.getParentChildAdvice(e):this.getGeneralChildrenAdvice(e)}static getSpecificFateAdvice(e,t){let i=t.toLowerCase();return i.includes("機會")||i.includes("機遇")?this.getOpportunityAdvice(e):i.includes("貴人")||i.includes("幫助")?this.getBenefactorAdvice(e):i.includes("轉運")||i.includes("改運")?this.getLuckChangeAdvice(e):this.getGeneralFateAdvice(e)}static getSpecificLoveAdvice(e,t){let i=t.toLowerCase();return i.includes("桃花")||i.includes("脫單")?this.getPeachBlossomAdvice(e):i.includes("結婚")||i.includes("婚姻")?this.getMarriageAdvice(e):i.includes("復合")||i.includes("挽回")?this.getReconciliationAdvice(e):this.getGeneralLoveAdvice(e)}static getSpecificCoupleAdvice(e,t,i){let a=i.toLowerCase();return a.includes("結婚")||a.includes("婚姻")?this.getCoupleMarriageAdvice(e,t):a.includes("相處")||a.includes("溝通")?this.getCoupleHarmonyAdvice(e,t):a.includes("吵架")||a.includes("衝突")?this.getCoupleConflictAdvice(e,t):this.getGeneralCoupleAdvice(e,t)}static getInvestmentAdvice(e){return({金:"適合穩健型投資，關注金融、科技類股票或基金。",木:"適合成長型投資，關注新興行業和環保概念。",水:"適合靈活型投資，可考慮外匯或流動性較高的工具。",火:"適合積極型投資，但要控制風險避免過度激進。",土:"適合保守型投資，定期定額和房地產是好選擇。"})[e]||"根據自己的風險承受能力選擇適合的投資方式。"}static getSavingAdvice(e){return`${e}命的你適合制定長期儲蓄計劃，發揮你的特質優勢。`}static getIncomeAdvice(e){return`${e}命的你可以考慮發揮專業特長，開拓多元收入來源。`}static getGeneralFinanceAdvice(e){return`${e}命的你理財要發揮自身優勢，保持穩健策略。`}static getWeightLossAdvice(e){return`${e}命的你適合循序漸進的健康方式，配合適當運動。`}static getWellnessAdvice(e){return`${e}命的你要注重身心平衡，保持規律的養生習慣。`}static getSleepAdvice(e){return`${e}命的你要建立良好作息，創造適合的睡眠環境。`}static getGeneralHealthAdvice(e){return`${e}命的你要根據體質特點，選擇適合的保健方式。`}static getFriendshipAdvice(e){return`${e}命的你要發揮個人魅力，主動參與社交活動。`}static getFamilyAdvice(e){return`${e}命的你要多關心家人，保持溫馨的家庭關係。`}static getGeneralRelationshipAdvice(e){return`${e}命的你要真誠待人，建立良好的人際關係。`}static getEducationAdvice(e){return`${e}命的你適合因材施教，培養孩子的獨特才能。`}static getPregnancyAdvice(e){return`${e}命的你要保持身心健康，為迎接新生命做好準備。`}static getParentChildAdvice(e){return`${e}命的你要耐心溝通，建立親密的親子關係。`}static getGeneralChildrenAdvice(e){return`${e}命的你要用愛心陪伴，給孩子最好的成長環境。`}static getOpportunityAdvice(e){return`${e}命的你要保持敏銳觀察，積極把握人生機會。`}static getBenefactorAdvice(e){return`${e}命的你要廣結善緣，真誠待人將得到貴人相助。`}static getLuckChangeAdvice(e){return`${e}命的你要保持正面心態，用實際行動改善運勢。`}static getGeneralFateAdvice(e){return`${e}命的你要順應自然，把握當下創造美好因緣。`}static getPeachBlossomAdvice(e){return`${e}命的你要提升個人魅力，主動參與社交活動增加桃花運。`}static getMarriageAdvice(e){return`${e}命的你要認真經營感情，為美好的婚姻關係做好準備。`}static getReconciliationAdvice(e){return`${e}命的你要真誠反省，用行動證明改變的決心。`}static getGeneralLoveAdvice(e){return`${e}命的你要保持真實自我，用心經營美好的感情關係。`}static getCoupleMarriageAdvice(e,t){return`${e}命和${t}命的組合很有潛力，建議多溝通建立共同目標。`}static getCoupleHarmonyAdvice(e,t){return`${e}命要理解${t}命的特質，互相包容將讓關係更和諧。`}static getCoupleConflictAdvice(e,t){return`${e}命和${t}命都要冷靜溝通，尊重彼此差異化解衝突。`}static getGeneralCoupleAdvice(e,t){return`${e}命和${t}命要互相理解，發揮各自優勢共同成長。`}static getBasicSolution(e,t){return({工作:`${e}命適合在穩定的環境中發展，建議先完善基礎技能`,財運:`${e}命的你要穩健理財，避免高風險投資`,健康:`${e}命需要注意作息規律，多休息少熬夜`,感情:`${e}命要真誠待人，用行動表達關心`,人際關係:`${e}命適合主動社交，展現友善態度`,子女:`${e}命要用愛心陪伴，建立良好溝通`,因緣:`${e}命要保持正面心態，廣結善緣`})[t]||`${e}命的你要保持平衡，順應自然發展`}static getOpportunityHint(e,t){return({工作:`${e}命在秋季容易有突破機會`,財運:`${e}命適合在穩定期投資理財`,健康:`${e}命要把握調養身體的好時機`,感情:`${e}命的桃花運在人際活動中較旺`,人際關係:`${e}命容易在工作環境中遇到貴人`,子女:`${e}命與孩子的互動會有特殊收獲`,因緣:`${e}命要把握身邊的善緣機會`})[t]||`${e}命要敏銳觀察身邊機會`}static getCautionHint(e,t){return({工作:`${e}命要留意職場人際關係`,財運:`${e}命要謹慎處理金錢問題`,健康:`${e}命要注意身體警訊`,感情:`${e}命要避免情緒化溝通`,人際關係:`${e}命要真誠待人避免誤會`,子女:`${e}命要耐心引導不可急躁`,因緣:`${e}命要保持善念避免負面情緒`})[t]||`${e}命要保持理性判斷`}static getCoupleImprovementHint(e,t){return`${e}命和${t}命要增進溝通，建立共同目標`}static getCoupleStrengthHint(e,t){return`${e}命的穩定特質能平衡${t}命的特性`}static getCoupleOpportunityHint(e,t){return`${e}命和${t}命在秋冬季節感情容易升溫`}static getReportRecommendations(e){let t={工作:"工作",財運:"財運",健康:"健康",感情:"感情",人際關係:"人際關係",子女:"子女",因緣:"因緣"}[e]||"運勢";return`

───────────────────
💎 **想要更深入的分析嗎？**
根據你的狀況，風鈴為你推薦：

**1️⃣ 一份關於${t}的詳細報告** 價值$38
深入分析你的${t}運勢，提供具體建議和改善方案

**2️⃣ 一份綜合命理報告** 價值$88
全面的八字命盤分析，包含各方面運勢預測

**3️⃣ 一份居家佈局報告** 價值$188
用居家佈局增強運勢，打造專屬風水空間

請回覆「1」、「2」或「3」選擇你想要的報告～`}static getCoupleReportRecommendations(){return`

───────────────────
💎 **想要更深入的分析嗎？**
根據你們的狀況，風鈴為你們推薦：

**1️⃣ 一份關於合盤的詳細報告** 價值$88
深入分析你們的感情配對度，提供具體建議和改善方案

**2️⃣ 一份綜合命理報告** 價值$88
全面的八字命盤分析，包含各方面運勢預測

**3️⃣ 一份居家佈局報告** 價值$188
用居家佈局增強運勢，打造專屬風水空間

請回覆「1」、「2」或「3」選擇你想要的報告～`}}}};