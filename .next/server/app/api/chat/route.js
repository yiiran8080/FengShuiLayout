(()=>{var e={};e.id=276,e.ids=[276],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4907:(e,t,n)=>{"use strict";n.r(t),n.d(t,{patchFetch:()=>S,routeModule:()=>y,serverHooks:()=>C,workAsyncStorage:()=>$,workUnitAsyncStorage:()=>A});var r={};n.r(r),n.d(r,{POST:()=>f});var i=n(96559),s=n(48088),o=n(37719),a=n(32190),c=n(96539);class l{static async analyzeNonCoreUserInput(e){let t=this.detectPrimaryConcern(e);return t?{isCoreArea:!0,concern:t}:await this.handleNonCoreInput(e)}static async handleNonCoreInput(e){for(let{pattern:t,suggestion:n,typo:r}of[{pattern:/[工]作/,suggestion:"工作",typo:!0},{pattern:/[感愛戀情]情/,suggestion:"感情",typo:!0},{pattern:/[財錢財運]/,suggestion:"財運",typo:!0},{pattern:/[子女小孩]/,suggestion:"子女",typo:!0},{pattern:/[人際关系關係]/,suggestion:"人際關係",typo:!0},{pattern:/[健康身體]/,suggestion:"健康",typo:!0},{pattern:/[因緣機会機會]/,suggestion:"因緣",typo:!0}])if(t.test(e))return{isCoreArea:!1,isTypo:r,suggestedCoreArea:n,aiResponse:`😊 風鈴覺得你可能想問的是「${n}」的問題呢！如果不是的話，請再說得清楚一點哦～

我們的專業風水服務包括：
💼 **工作** - 事業發展、職場關係
💕 **感情** - 桃花運、婚姻配對  
💰 **財運** - 財富增長、投資運勢
👶 **子女** - 子女運、教育發展
🤝 **人際關係** - 社交運、人緣改善
🏥 **健康** - 身心靈調理、養生風水
✨ **因緣** - 機會把握、命運改善

你想了解哪個方面呢？`};return await this.analyzeAndGuideToCore(e)}static async checkTopicDeviation(e,t){if(!t)return null;let n=this.detectPrimaryConcern(e);return n===t||n&&n!==t?null:["好的","好啊","可以","想要","要","行","ok","OK","是的","嗯","對","有興趣","想知道","想了解","告訴我","教我","謝謝","多謝"].some(t=>e.includes(t))?null:["如何","怎樣","點樣","怎麼","什麼時候","幾時","在哪","邊度","多少錢","幾多錢","費用","收費","價格","付款"].some(t=>e.includes(t))?null:await this.handleTopicDeviation(e,t)}static async handleTopicDeviation(e,t){let n={工作:"事業發展",感情:"愛情運勢",財運:"財富運勢",子女:"子女教育",人際關係:"人際社交",健康:"身心健康",因緣:"機會運勢"}[t]||t;return{isDeviation:!0,currentConcern:t,aiResponse:`哇～風鈴覺得你剛剛問的東西好有趣呢！😊

不過我們剛才不是在聊「${n}」的問題嗎？風鈴想先幫你把這個處理好呢～

讓我們繼續聊「${n}」的事情好嗎？這樣我才能給你最專業的風水建議哦！✨

如果你想換話題到其他風水領域，也可以告訴風鈴：
💼 **工作** - 事業發展、職場關係
💕 **感情** - 桃花運、婚姻配對  
💰 **財運** - 財富增長、投資運勢
👶 **子女** - 子女運、教育發展
🤝 **人際關係** - 社交運、人緣改善
🏥 **健康** - 身心靈調理、養生風水
✨ **因緣** - 機會把握、命運改善

你想繼續聊「${n}」還是換到其他方面呢？💕`}}static async analyzeAndGuideToCore(e){for(let[t,n]of Object.entries({學習:{core:"子女",reason:"學習成長與子女運勢相關"},教育:{core:"子女",reason:"教育發展與子女運勢相關"},考試:{core:"子女",reason:"考試運與子女學業相關"},升學:{core:"子女",reason:"升學機會與子女教育運相關"},生意:{core:"工作",reason:"生意發展屬於事業工作範疇"},創業:{core:"工作",reason:"創業屬於事業發展"},投資:{core:"財運",reason:"投資理財與財運息息相關"},理財:{core:"財運",reason:"理財規劃關乎財運管理"},家庭:{core:"人際關係",reason:"家庭和諧涉及人際關係"},朋友:{core:"人際關係",reason:"朋友關係屬於人際社交"},壓力:{core:"健康",reason:"壓力管理關乎身心健康"},運氣:{core:"因緣",reason:"運氣機會與因緣福份相關"},機會:{core:"因緣",reason:"機會把握與因緣時機相關"},命運:{core:"因緣",reason:"命運改變與因緣調整相關"},住宅:{core:"健康",reason:"居住環境影響健康運勢"},搬家:{core:"因緣",reason:"搬遷時機關乎因緣轉換"},裝修:{core:"因緣",reason:"裝修佈局影響整體運勢"}}))if(e.includes(t))return{isCoreArea:!1,isTypo:!1,suggestedCoreArea:n.core,aiResponse:`哇～你問的「${t}」很有意思呢！✨

風鈴覺得這個跟我們的「${n.core}」服務很相關哦，因為${n.reason}！

我們的專業風水服務包括：
💼 **工作** - 事業發展、職場關係、生意創業
💕 **感情** - 桃花運、婚姻配對、人緣提升
💰 **財運** - 財富增長、投資運勢、理財規劃
👶 **子女** - 子女運、教育發展、學習考試
🤝 **人際關係** - 社交運、家庭和諧、朋友關係
🏥 **健康** - 身心靈調理、養生風水、壓力舒緩
✨ **因緣** - 機會把握、命運改善、運氣提升

你想了解「${n.core}」方面的風水指導嗎？💕`};return{isCoreArea:!1,isTypo:!1,suggestedCoreArea:null,aiResponse:`咦～風鈴不太明白你的意思呢 😅

不過沒關係！風鈴最擅長的是這些專業風水服務：

💼 **工作** - 事業發展、職場關係、升職加薪
💕 **感情** - 桃花運、婚姻配對、感情問題
💰 **財運** - 財富增長、投資運勢、招財聚財
👶 **子女** - 子女運、教育發展、親子關係
🤝 **人際關係** - 社交運、人緣改善、化解小人
🏥 **健康** - 身心調理、養生風水、健康運勢
✨ **因緣** - 機會把握、命運改善、時機選擇

你最想了解哪個方面呢？風鈴會用最可愛的方式幫你分析哦～💕`}}static detectPrimaryConcern(e){for(let[t,n]of Object.entries({感情:["感情","愛情","桃花","桃花運","姻緣","人緣","另一半","男朋友","女朋友","老公","老婆","結婚","分手","復合","戀愛","情侶","單身","拍拖","bf","gf","喜歡","暗戀"],工作:["工作","事業","職場","老闆","上司","同事","升職","轉工","辭職","面試","薪水","人工","加人工","加薪","減薪","待遇","福利","公司","返工","job","創業","生意"],財運:["錢","財運","投資","理財","收入","薪水","債務","破財","賺錢","財富","金錢","股票","買樓","儲錢","經濟","橫財","偏財","正財","發財","中獎","彩票","運財","招財","聚財","財氣","財源","財星"],健康:["健康","病","身體","睡眠","失眠","頭痛","疲累","壓力","焦慮","抑鬱","痛","唔舒服","生病"],人際關係:["人際","朋友","關係","相處","社交","人緣","小人","貴人","衝突","合作","同朋友","家人"],子女:["子女","小朋友","孩子","懷孕","生育","教育","學習","考試","升學","囝囝","女女","湊仔"],因緣:["因緣","機會","運氣","命運","緣分","時機","選擇","決定","運勢","風水"],居家佈局:["居家","家居","佈局","布局","房間","臥室","客廳","廚房","浴室","陽台","裝修","傢俱","擺設","方位","位置","空間","家具","床位","書桌","沙發","鏡子","植物","顏色","燈光","格局","座向","擺放","裝飾","窗戶","門","牆壁"]}))if(n.some(t=>e.includes(t)))return t;return null}static detectEmotion(e){for(let[t,n]of Object.entries({困擾:["困擾","煩惱","不知道","唔知","迷茫","困惑","擔心","焦慮","問題","有問題","麻煩","頭痛","唔明","煩"],沮喪:["沮喪","失落","難過","傷心","絕望","無助","痛苦","唔開心","不開心","失望"],憤怒:["生氣","憤怒","不爽","火大","嬲","激嬲","討厭","忿","氣"],壓力:["壓力","緊張","累","攰","撐不住","受不了","好累","辛苦","壓力大"],希望:["希望","想要","期待","渴望","改善","提升","變好","想","想知道","幫到"]}))if(n.some(t=>e.includes(t)))return t;return"平靜"}static detectBirthdayInfo(e){for(let t of[/(\d{4})[年\-\/](\d{1,2})[月\-\/](\d{1,2})[日]?/,/(\d{1,2})[月\-\/](\d{1,2})[日\-\/](\d{4})/,/(\d{4})\-(\d{1,2})\-(\d{1,2})/,/(\d{1,2})\/(\d{1,2})\/(\d{4})/]){let n=e.match(t);if(n)return{hasBirthday:!0,rawText:n[0]}}return{hasBirthday:!1}}static generateNaturalResponse(e,t,n,r,i=0){let s=["所有","全部","詳細","更多","完整","深入","具體"],o=s.some(e=>t.includes(e));if(console.log("\uD83C\uDFAF 深入興趣檢測結果:",o,"關鍵詞:",s.find(e=>t.includes(e))),o){console.log("\uD83C\uDFAF 在generateNaturalResponse中檢測到深入興趣:",t);let r=e.primaryConcern||n||"運勢";return console.log("\uD83C\uDFAF 使用關注領域:",r),this.generatePersonalAnalysisPromotion(r,t)}let{conversationState:a,primaryConcern:c,hasBirthday:l,hasPartnerBirthday:u,hasSpecificProblem:d,relationshipAnalysisType:p}=e;if(console.log("Flow Debug - State:",a,"Concern:",c,"HasBirthday:",l,"HasSpecific:",d),"initial"===a||!a)return"平靜"!==r||n?n?this.generateConcernIntroResponse(n,r):this.generateEmotionalComfort(r)+"可以話俾我知發生咩事嗎？我會用心聆聽。":"你好呀～我係風鈴！✨ 有咩生活上嘅困擾想搵我傾傾呢？無論係工作、感情、財運定係健康，我都可以幫你分析風水運勢架～";if("concern_detected"===a&&c&&!d)return this.generateSpecificQuestionProbe(c,r);if("asking_specific"===a&&c){if("感情"===c&&p&&!l){if("individual"===p)return"好！我會為你進行個人感情分析 \uD83C\uDF38\n\n為咗更準確分析你嘅感情運勢，我需要你嘅出生日期。\n請提供：出生年月日（例如：1990年5月15日）";if("couple"===p)return"好！我會為你哋進行合婚配對分析 \uD83D\uDC95\n\n為咗分析你哋嘅八字合配度，我需要兩個人嘅出生資料：\n1️⃣ 首先請提供你嘅出生年月日（例如：1990年5月15日）\n2️⃣ 之後會請你提供伴侶嘅出生資料"}return"感情"===c&&"couple"===p&&l&&u&&!d?"好！我已經收集咗你哋兩個人嘅出生資料 \uD83D\uDC95\n\n現在請告訴我你哋嘅具體感情問題，比如：\n• 你哋嘅關係遇到咩困難？\n• 想了解你哋嘅合配度？\n• 有咩特別想改善嘅地方？\n\n我會根據你哋嘅八字進行合婚分析。":"感情"===c&&"couple"===p&&l&&u&&d?this.generateOfferDetailedAnalysis(c,r,"couple"):d&&l?this.generateOfferDetailedAnalysis(c,r):d&&!l?this.generateComfortAndBirthdayRequest(c,r):this.generateSpecificQuestionProbe(c,r)}if("birthday_collected"===a&&l&&!d)return"感情"===c&&p?`好！我已經記錄咗你嘅生日資料，會進行${"individual"===p?"個人感情分析":"合婚配對分析"}。

現在請詳細告訴我你嘅感情問題，比如：
• 遇到咩感情困難？
• 有咩特別想了解嘅？
我需要了解詳情才能為你提供精準嘅分析。`:`好！我已經記錄咗你嘅生日資料。現在請詳細告訴我你嘅${c}問題，比如具體遇到咩困難？我需要了解詳情才能為你提供精準嘅分析。`;if("birthday_collection"===a){if("感情"===c&&p){if("individual"===p)return"為咗進行個人感情分析 \uD83C\uDF38，我需要你嘅出生資料。\n\n請提供你嘅出生年月日（例如：1990年5月15日）";if("couple"===p)return"為咗進行合婚配對分析 \uD83D\uDC95，我需要兩個人嘅出生資料。\n\n請先提供你嘅出生年月日（例如：1990年5月15日）\n之後會請你提供伴侶嘅出生資料。"}return"為咗提供準確嘅分析，我需要你嘅出生年月日。請提供：出生年月日（例如：1990年5月15日）"}return"asking_partner_birthday"===a?"好！我已經記錄咗你嘅生日資料。\n\n現在請提供你伴侶嘅出生年月日（例如：1992年8月20日）\n有咗兩個人嘅八字資料，我就可以進行合婚配對分析 \uD83D\uDC95":"problem_identified"===a&&d&&!l?this.generateComfortAndPreAnalysis(c,e.specificProblem||"unspecified"):"ready_for_modal"===a&&d&&!l?this.generateModalTriggerResponse(c):"ready_for_report"===a&&l&&d?this.generateReportGenerationResponse(c):this.detectBirthdayInfo(t).hasBirthday&&!l?this.generateBirthdayReceivedResponse(c):c?`我明白你關心${c}方面嘅問題。可以詳細講下你遇到嘅具體情況嗎？比如最近發生咗咩事令你困擾？`:"我想幫你分析下，請告訴我你最關心邊方面？比如工作、感情、健康定係其他困擾？"}static generateConcernIntroResponse(e,t){let n={工作:["工作確實係人生好重要嘅一部分，我明白你嘅困擾。","職場上嘅事情有時真係好複雜，我理解你嘅感受。"],感情:["感情問題最影響心情，我明白你而家嘅感受。","愛情路上總有起伏，你願意分享多啲你嘅情況嗎？"],財運:["錢嘅問題確實令人擔心，我明白你嘅焦慮。","財運係好多人關心嘅問題，我可以幫你分析。"],健康:["健康係最寶貴嘅財富，我明白你嘅擔心。","身體健康確實好重要，你而家有咩具體嘅困擾？"],人際關係:["人際關係有時真係好難處理，我理解你嘅困難。","同人相處確實需要智慧，你遇到咩困難？"],子女:["養育子女真係唔容易，我明白你嘅關心。","為人父母總係為子女操心，有咩具體令你擔心？"],因緣:["人生機會確實好重要，我明白你想把握時機。","命運同機遇有時難以掌握，你想改善邊方面？"],居家佈局:["家居風水確實好重要，我明白你想改善居住環境。","好嘅家居佈局可以提升運勢，你想調整邊個空間？"]}[e]||["我明白你嘅關心。"];return n[Math.floor(Math.random()*n.length)]+"可以話俾我知具體係咩情況嗎？比如而家遇到咩困難，或者想改善咩問題？"}static generateEmotionalComfort(e){return({困擾:"我感受到你嘅困擾，呢種感覺好真實。",沮喪:"我明白你而家嘅沮喪，你並唔孤單。",憤怒:"我理解你嘅憤怒，有呢啲情緒係正常嘅。",壓力:"我感受到你承受嘅壓力，深呼吸一下。",希望:"我感受到你想改善嘅決心，呢個態度好好。"})[e]||"我會陪伴住你，"}static generateSpecificQuestionProbe(e,t){return({工作:"我理解工作上有困難確實唔容易。可以講得詳細啲嗎？比如：\n• 係同事或上司關係有問題？\n• 工作量太大或者壓力太重？\n• 想轉工但唔知點做？\n• 定係薪金或者發展前景問題？\n\n講多啲具體情況，我先能夠俾到最適合你嘅建議。",感情:"感情嘅事確實令人困擾。我明白你嘅感受。\n\n我可以為你提供兩種分析選擇：\n\n\uD83C\uDF38 **個人感情分析** - 分析你個人嘅感情運勢、桃花運、感情障礙等\n\uD83D\uDC95 **合婚配對分析** - 如果你有伴侶，我可以分析你哋嘅八字合配度、感情相容性\n\n你想要邊種分析？",財運:"錢嘅問題確實令人擔心。可以講得詳細啲嗎？\n• 係收入唔夠或者想增加收入？\n• 投資虧損或者理財困難？\n• 定係有債務或者其他財務壓力？\n\n知道具體情況，我先可以俾到針對性嘅風水建議。",健康:"你而家身體有咩唔舒服？定係想預防某啲健康問題？可以講得具體啲。",人際關係:"你同邊啲人嘅關係有問題？係朋友、家人，定係同事？可以詳細講下發生咗咩事。",子女:"關於子女，你最擔心係咩？係學習、健康，定係行為問題？講多啲具體情況。",因緣:"你想把握咩機會？定係想改善運勢？可以講得詳細啲你嘅期望。"})[e]||"可以詳細講下你嘅情況嗎？講多啲具體嘅問題，我先可以幫到你。"}static generateComfortAndPreAnalysis(e,t){let n={工作:{comfort:"我完全理解你嘅工作壓力，職場上嘅困難確實令人感到疲憊。你提到工作不合適同壓力大，呢啲都係好多人面對嘅問題。",suggestion:"根據風水學，工作運勢同你嘅個人能量場有密切關係。透過調整你嘅氣場同環境，可以有效改善工作狀況，減輕壓力，甚至幫你搵到更適合嘅工作機會。",question:"我可以為你做個詳細嘅八字分析，提供針對性嘅風水建議，包括個人能量提升、辦公環境調整、同埋助你改善工作運嘅具體方法。你願意試下嗎？"},感情:{comfort:"感情問題確實最令人心痛，我明白你而家嘅感受。感情路上有起有跌係正常嘅。",suggestion:"風水學可以幫助調和感情能量，改善人際關係，甚至增強你嘅桃花運或者修復現有關係。",question:"我可以為你提供兩種分析選擇：\n\n\uD83C\uDF38 **個人感情分析** - 分析你個人嘅感情運勢、桃花運、感情障礙等\n\uD83D\uDC95 **合婚配對分析** - 如果你有伴侶，我可以分析你哋嘅八字合配度、感情相容性\n\n你想要邊種分析？請回覆「個人分析」或者「合婚分析」"},財運:{comfort:"錢嘅問題確實令人擔心，我理解你嘅焦慮。財運有時起伏不定係好正常嘅。",suggestion:"風水學認為財運同個人氣場同環境佈局有好大關係，透過調整可以改善財運流動。",question:"我可以為你分析財運走勢，提供招財聚財嘅風水建議。你願意了解下嗎？"},健康:{comfort:"健康問題最令人擔心，我明白你嘅憂慮。身心健康確實係最重要嘅。",suggestion:"風水學可以幫助調和身心能量，改善居住環境嘅健康氣場，促進身心平衡。",question:"我可以為你分析健康運勢，提供改善身心能量嘅風水方法。你想試下嗎？"}}[e]||{comfort:"我明白你而家面對嘅困難，呢啲挑戰確實唔容易處理。",suggestion:"風水學可以幫助調整個人能量場，改善生活各方面嘅運勢。",question:"我可以為你做個詳細分析，提供改善運勢嘅具體建議。你願意試下嗎？"};return`${n.comfort}

${n.suggestion}

${n.question}`}static generateModalTriggerResponse(e){return`好！我已經了解你嘅${e}問題。現在我需要你嘅出生資料來為你做詳細分析。

請提供你嘅：
• 出生日期（年月日）
• 性別

有咗呢啲資料，我可以根據你嘅八字五行，為你提供精準嘅${e}分析同改善建議。`}static generateBirthdayReceivedResponse(e){return`收到！我已經記錄咗你嘅生日資料。依家我會為你準備一份詳細嘅${e}分析報告。

呢份報告會包括：
• 你嘅八字五行分析
• ${e}運勢評估
• 針對你具體問題嘅建議
• 風水改善方案

我而家開始為你分析...`}static generateReportGenerationResponse(e){return`你嘅${e}分析報告已經準備好！報告包括咗根據你嘅八字分析同具體建議。正在為你生成詳細分析...`}static generateOfferDetailedAnalysis(e,t,n=null){return"感情"===e&&"couple"===n?"我已經為你哋進行咗基本嘅合婚配對分析 \uD83D\uDC95\n\n想要更詳細嘅合婚報告嗎？包括：\n• 詳細嘅八字合配度分析\n• 感情發展時機建議\n• 化解感情障礙嘅風水方法\n• 增進感情嘅具體建議\n\n如果需要詳細報告，請回覆「要」或「想」":({工作:"我明白工作壓力確實好影響生活質量。根據你嘅情況，我可以為你提供詳細嘅八字分析同埋具體嘅改善建議。你想要詳細嘅職場風水分析報告嗎？",感情:"感情問題最需要細心處理。我可以為你提供兩種詳細分析：\n\n\uD83C\uDF38 **個人感情分析** - 深入分析你個人嘅感情運勢、桃花運、最佳脫單時機等\n\uD83D\uDC95 **合婚配對分析** - 如果你有伴侶，可以分析你哋嘅八字合配度、感情發展建議等\n\n你想要邊種詳細分析？請回覆「個人分析」或者「合婚分析」",財運:"財運分析需要詳細嘅八字計算。我可以為你分析財運走勢同埋提供催財風水建議。你想要完整嘅財運分析報告嗎？",健康:"健康係最重要嘅。我可以根據你嘅八字分析健康運勢同埋提供養生風水建議。你想要詳細嘅健康分析報告嗎？"})[e]||`我可以為你提供詳細嘅${e}分析報告，包括具體嘅改善建議。你想要嗎？`}static generateComfortAndBirthdayRequest(e,t){let n=this.generateEmotionalComfort(t);return n+({工作:"工作問題確實令人困擾。如果你願意提供生日資料，我可以根據你嘅八字為你分析職場運勢，提供具體嘅改善方向。",感情:"感情路上總有起伏，我明白你嘅感受。如果你提供生日資料，我可以為你做詳細嘅感情分析，甚至合婚建議。",財運:"財務壓力確實影響心情。提供生日資料後，我可以為你分析財運走向同埋提供催財建議。",健康:"健康問題最需要重視。如果你提供生日資料，我可以根據八字為你分析健康運勢同養生建議。"})[e]||`${n}如果你提供生日資料，我可以為你做更精準嘅${e}分析。`}static hasSpecificProblemDescription(e,t=[]){if(this.detectBirthdayInfo(e).hasBirthday||e.includes("性別：")||e.includes("性別:")||e.includes("性別 ")||/性別.{0,2}[男女]/.test(e)||/[男女]$/.test(e.trim())||["如何提供生日","怎樣提供生日","怎麼提供生日","點樣提供生日","如何給生日","生日怎麼給","如何報告生日","如何輸入生日","點樣俾生日","如何開始","怎樣開始","如何付款","怎樣付費","費用多少","怎麼收費"].some(t=>e.includes(t))||["合婚分析","個人分析","個人感情分析","合婚","個人","單人分析","雙人分析","情侶分析","夫妻分析","配對分析","八字合婚","婚配分析"].some(t=>e.includes(t)))return!1;if(["加人工","加薪","減薪","升職","辭職","轉工","分手","分手了","離婚","離婚了","結婚","買樓","未來感情發展","感情未來","未來發展","感情走向","未來桃花","復合可能","桃花運","桃花","脫單"].some(t=>e.includes(t)))return!0;if(["流年合婚","流年合婚詳解","合婚分析","八字合婚","婚配分析","詳細分析","深入分析","完整分析","專業分析","流年運勢","年運分析","運勢詳解","八字分析","命盤分析","命理分析","風水詳解","風水分析","風水建議","婚嫁吉日","結婚吉日","擇日分析","財運分析","事業分析","感情分析"].some(t=>e.includes(t)))return"detailed_analysis_request";if(e.length<6||[/^(.{0,5})(工作|感情|財運).{0,5}(有|有點|存在).{0,5}(問題|困難|麻煩)(.{0,5})$/,/^(.{0,5})(工作|感情|財運).{0,5}(唔|不|冇).{0,5}(好|順利|順)(.{0,5})$/,/^(.{0,5})(最近|而家).{0,5}(工作|感情|財運).{0,5}(唔|不).{0,5}(順|好)(.{0,5})$/,/^(.{0,5})(我想問|想問|想知道|請問).{0,5}(有關|關於).{0,5}(工作|感情|財運|健康|人際)(.{0,5})$/,/^(.{0,5})(工作|感情|財運|健康|人際).{0,5}(方面|問題|情況)(.{0,5})$/,/^(.{0,5})(想了解|了解).{0,5}(工作|感情|財運|健康|人際)(.{0,5})$/,/^(.{0,5})(我想問|想問|想知道|請問).{0,5}(工作|感情|財運|健康|人際)$/].some(t=>t.test(e)))return!1;let n=["最近幾個月","呢個星期","上個月","今年","去年","已經好耐","持續","經常發生","老闆","同事","客戶","上司","下屬","工作量","加班","轉工","辭職","升職","減薪","加薪","人工","加人工","薪水","待遇","福利","男朋友","女朋友","老公","老婆","分手","結婚","離婚","出軌","爭執","冷戰","債務","投資","虧損","借錢","破產","買樓","按揭","股票","基金","橫財","偏財","正財","發財","中獎","彩票","運財","招財","聚財","增加財運","失眠","頭痛","疲累到","攰到","食唔落","瞓唔著","心情低落","壓力大到","發生咗","遇到","面對","處理緊","嘗試過","已經試過","想解決","希望改善","交不到","找不到","搵唔到","單身","孤單","姻緣","桃花","桃花運","脫單","相親","約會","增強","提升","改善","招桃花","戀愛運","感情運","人緣","分手了","離婚了","什麼","甚麼","怎麼","點樣","如何","能否","可否","可以","想看看","想問","想知道"].some(t=>e.includes(t)),r=e.length>15;return n||r}static detectConfirmation(e){return[/^好$/,/^好的$/,/^可以$/,/^是$/,/^是的$/,/^OK$/,/^ok$/,/^想要$/,/^想$/,/^要$/,/^同意$/,/^願意$/].some(t=>t.test(e?.trim()||""))}static detectRelationshipAnalysisChoice(e){return/\d{4}[-\/年]\d{1,2}[-\/月]\d{1,2}日?|\d{1,2}[-\/]\d{1,2}[-\/]\d{4}/.test(e.trim())||["分手","分手了","分开了","分開了","離婚","离婚","吵架","冷戰","冷战","出軌","出轨","背叛","欺騙","欺骗","不愛","不爱","變心","变心"].some(t=>e.includes(t))?null:["個人分析","个人分析","個人","单人分析","單人分析","我自己","個人感情","個人嘅","個人的","自己的","只要我","選擇1","1️⃣","1","桃花風水","桃花運","單身","脫單","關係","关系","關係分析"].some(t=>e.includes(t))?"individual":["合婚分析","合婚","配對","配对","兩人","两人","雙人","双人","情侶","情侣","夫妻","伴侶","伴侣","對象","对象","選擇2","2️⃣","2","我和","我與","我跟.*一起","我們兩個","我们两个","復合","复合","復合分析","復合可能性"].some(t=>e.includes(t))?"couple":null}static detectReportTypeChoice(e){let t=e.trim();return"1"===t?"detailed_concern":"2"===t?"comprehensive":"3"===t?"layout":e.includes("詳細報告")||e.includes("感情的詳細")||e.includes("合婚的詳細")?"detailed_concern":e.includes("綜合命理")||e.includes("八字命盤")||e.includes("全面分析")?"comprehensive":e.includes("居家佈局")||e.includes("風水空間")||e.includes("佈局報告")?"layout":null}static detectConcernAndProblem(e){let t=this.detectPrimaryConcern(e),n=this.hasSpecificProblemDescription(e);return{concern:t,hasSpecificProblem:n,isCombinedMessage:t&&n}}static detectTopicChange(e,t){let n=this.detectPrimaryConcern(e);return n&&t&&n!==t?{hasTopicChange:!0,previousTopic:t,newTopic:n,hasNewProblem:this.hasSpecificProblemDescription(e)}:{hasTopicChange:!1,previousTopic:t,newTopic:n,hasNewProblem:!1}}}class u{static generatePersonalAnalysis(e,t,n){let r=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),o=["金","木","水","火","土"][r%5];return({感情:{basic:`根據你${r}年${i}月${s}日的八字，你屬於${o}命。${o}命的人在感情上${this.getElementLoveTraits(o)}`,concern:`你的感情運勢顯示${this.getLoveForcast(o,t)}`,specific:`針對你提到的"${n}"，建議你${this.getSpecificAdvice(o,"感情",n)}`,fengshui:`感情風水建議：${this.getFengShuiAdvice(o,"感情")}`},工作:{basic:`根據你${r}年${i}月${s}日的八字，你屬於${o}命。${o}命的人在事業上${this.getElementCareerTraits(o)}`,concern:`你的事業運勢顯示${this.getCareerForcast(o)}`,specific:`針對你的工作困擾"${n}"，建議${this.getSpecificAdvice(o,"工作",n)}`,fengshui:`事業風水建議：${this.getFengShuiAdvice(o,"工作")}`},財運:{basic:`根據你的八字分析，你屬於${o}命，${o}命人的財運特質是${this.getElementWealthTraits(o)}`,concern:`你的財運分析顯示${this.getWealthForcast(o)}`,specific:`對於你的財務問題"${n}"，建議${this.getSpecificAdvice(o,"財運",n)}`,fengshui:`招財風水佈局：${this.getFengShuiAdvice(o,"財運")}`}})[t]||{basic:`你屬於${o}命，具有${o}的特質`,concern:`你的運勢整體良好`,specific:`建議你保持積極態度`,fengshui:`建議調整居住環境的氣場`}}static async generatePersonalAnalysisV2(e,t,n){let r=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),o=["金","木","水","火","土"][r%5],a={personality:`根據你${r}年${i}月${s}日的八字，你屬於${o}命。${o}命的人${this.getElementCareerTraits(o)}`,currentSituation:`你的${t}運勢顯示${this.getCareerForcast(o)}`,futureOutlook:`未來${t}發展前景良好，適合積極規劃`,specificAdvice:`針對"${n}"這個問題，建議你${this.getSpecificAdvice(o,t,n)}`,fengShuiSolutions:`${t}風水建議：${this.getFengShuiAdvice(o,t)}`,timingAdvice:`最佳行動時機在接下來的3-6個月內，${o}命人此期間運勢上升`};try{let r=await this.enhanceWithAI(e,t,n,o);return{...a,...r}}catch(e){return console.log("AI enhancement failed, using basic analysis:",e.message),a}}static async enhanceWithAI(e,t,n,r){let i=n&&(n.includes("復合")||n.includes("分手")||n.includes("挽回"));return(e.toDateString(),i)?{personality:`${r}命的你在感情中${this.getElementLoveTraits(r)}。你對愛情有著深刻的理解，雖然目前面臨分手的痛苦，但你的${r}特質讓你具備重新獲得愛情的能力。`,currentSituation:`從八字來看，你們的分手並非偶然，而是感情發展中的一個考驗期。${r}命人在感情方面容易${this.getElementLoveChallenges(r)}，但同時也具有化解情感危機的智慧。`,futureOutlook:`接下來的3-6個月是感情重建的關鍵期。${r}命人的感情運勢將在${this.getBestMonth(r)}月達到高峰，這是復合的最佳時機窗口。`,specificAdvice:`復合不能急於一時，需要從內心開始調整。建議你先提升自己的${r}能量，通過風水調整增強個人魅力，讓對方重新看到你的改變和成長。`,fengShuiSolutions:`立即調整臥室桃花位（${this.getElementDirection(r)}），擺放粉色水晶或鮮花。同時清理所有與前任相關的負能量物品，為新的感情能量騰出空間。`,timingAdvice:`復合的最佳時機在農曆${this.getBestMonth(r)}月的${r}日。在此之前，專注於自我提升和能量調整，切勿急躁行事。`}:"感情"===(t||"全面")?{personality:`${r}命的你在感情中${this.getElementLoveTraits(r)}。你有著獨特的愛情觀，能夠深度理解伴侶的需求，但有時也需要學會表達自己的感受。`,currentSituation:`目前你的感情運勢正處於穩定上升期。${r}命人在感情方面具有天然的優勢，你的魅力正在逐漸顯現，適合主動爭取心儀的對象。`,futureOutlook:`接下來的感情發展非常樂觀。特別是在${this.getBestMonth(r)}月，你的桃花運將達到頂峰，有機會遇到真正適合的伴侶。`,specificAdvice:`在感情方面要發揮${r}命人的特長，保持自然真誠的態度。同時要注意避免${r}命人在感情中的常見誤區，學會適當的進退。`,fengShuiSolutions:`加強臥室和客廳的桃花位布局，在${this.getElementDirection(r)}擺放成對的裝飾品，使用${this.getElementColors(r)}來增強你的感情能量場。`,timingAdvice:`感情行動的最佳時機在${r}旺的日子，建議在農曆${this.getBestMonth(r)}月主動出擊，成功率會大大提升。`}:{personality:`${r}命的你天生具有${r}的特質，在處理人生各個方面都展現出獨特的智慧。你的直覺敏銳，決策能力強，只是有時需要更多耐心等待時機成熟。`,currentSituation:`從整體八字來看，你目前正經歷一個重要的人生轉折期。雖然面臨各種挑戰，但這正是你成長蛻變的黃金時期，${r}命人特別適合在逆境中發光發熱。`,futureOutlook:`未來6-12個月對你來說充滿機遇。${r}命人在這段時間內各方面運勢都會穩步提升，特別適合制定長遠計劃並付諸行動。`,specificAdvice:`建議你充分發揮${r}命人的天賦優勢，在面對選擇時相信自己的直覺。同時要學會平衡${r}的特質，避免過於極端的決定。`,fengShuiSolutions:`整體運勢提升需要從居住環境開始調整。建議在${this.getElementDirection(r)}加強布局，使用${this.getElementColors(r)}的裝飾，營造有利於${r}能量的環境。`,timingAdvice:`重要決定和行動的最佳時機在農曆${this.getBestMonth(r)}月。平時可選擇${r}旺的日子處理重要事務，會事半功倍。`}}static getElementDirection(e){return({金:"西方或西北方",木:"東方或東南方",水:"北方",火:"南方",土:"中央或西南方"})[e]||"適合的方位"}static getElementColors(e){return({金:"白色、金色、銀色",木:"綠色、青色",水:"藍色、黑色",火:"紅色、橙色",土:"黃色、棕色"})[e]||"相應顏色"}static getBestMonth(e){return({金:"七、八",木:"三、四",水:"十一、十二",火:"五、六",土:"六、九"})[e]||"適當"}static generateCoupleAnalysis(e,t){let n=["金","木","水","火","土"],r=n[e.getFullYear()%5],i=n[t.getFullYear()%5],s=this.calculateCompatibility(r,i);return{userElement:r,partnerElement:i,compatibility:s,advice:this.getCoupleAdvice(r,i,s)}}static calculateCompatibility(e,t){return({金:{金:75,木:45,水:85,火:35,土:80},木:{金:45,木:70,水:80,火:85,土:40},水:{金:85,木:80,水:75,火:40,土:50},火:{金:35,木:85,水:40,火:70,土:75},土:{金:80,木:40,水:50,火:75,土:75}})[e]?.[t]||60}static getCoupleAdvice(e,t,n){return n>=80?`你們是${e}命和${t}命的組合，相性很好！建議多溝通，保持互相理解和支持。`:n>=60?`你們的八字配對中等，需要多包容和理解。${e}命要學會配合${t}命的節奏。`:`你們的五行有些相沖，但可以通過風水調整和互相理解來改善關係。建議在感情方面多用心經營。`}static getElementLoveTraits(e){return({金:"性格堅毅，對感情專一，但有時過於理性，需要學會表達情感",木:"充滿生命力，容易吸引異性，但要注意不要太過依賴對方",水:"感情豐富，直覺敏銳，但情緒波動較大，需要穩定的伴侶",火:"熱情如火，愛憎分明，但要控制脾氣，學會包容",土:"踏實可靠，值得信賴，但要主動一些，不要太被動"})[e]||"具有獨特的感情特質"}static getLoveForcast(e,t){return`${e}命人近期感情運勢上升，適合主動出擊或改善現有關係`}static getElementCareerTraits(e){return({金:"堅毅果決，適合管理職位，但要學會與人合作",木:"創意豐富，適合創新工作，但要注意堅持到底",水:"適應性強，善於溝通，但要避免過於被動",火:"充滿活力，領導能力強，但要控制急躁情緒",土:"踏實穩重，執行力佳，但要主動爭取機會"})[e]||"具有獨特的事業特質"}static getCareerForcast(e){return`${e}命人事業運勢穩步上升，適合在現有基礎上求發展`}static getElementWealthTraits(e){return({金:"理財觀念強，適合穩健投資，但要避免過於保守",木:"賺錢能力強，但花錢也快，需要學會儲蓄",水:"財運起伏較大，適合多元化投資",火:"賺錢機會多，但要避免衝動消費",土:"財運穩定，適合長期投資和置業"})[e]||"具有獨特的財運特質"}static getWealthForcast(e){return`${e}命人財運逐漸好轉，適合謹慎理財和長期規劃`}static getSpecificAdvice(e,t,n){return"感情"===t?`多溝通，理解對方想法，同時保持自己的獨立性`:"工作"===t?`發揮${e}命的優勢，保持積極態度，機會即將出現`:`根據你的情況，建議保持耐心，時機成熟時自然會有改善`}static getFengShuiAdvice(e,t){return({感情:{金:"在床頭放置粉色水晶，增強桃花運",木:"在東方位置擺放綠色植物，提升感情能量",水:"保持臥室整潔，使用藍色或黑色裝飾",火:"在南方放置紅色物品，但要適度",土:"使用黃色或棕色系裝飾，增加穩定感"},工作:{金:"辦公桌放置金屬製品，增強事業運",木:"辦公環境多用綠色，擺放小盆栽",水:"保持工作區域清潔，適度使用藍色元素",火:"辦公桌朝南，使用溫暖色調裝飾",土:"使用穩重色彩，辦公桌要整齊有序"},財運:{金:"在辦公室西方或西北方放置金屬聚寶盆",木:"東方或東南方擺放招財樹或竹子",水:"北方放置水晶球或魚缸（但要定期清潔）",火:"南方使用紅色裝飾，但避免過度",土:"中央或西南方放置黃色水晶或陶瓷製品"}})[t]?.[e]||"調整居住環境，增強正能量"}static generateCoupleAnalysis(e,t){let n=this.getElement(e),r=this.getElement(t),i=this.calculateCompatibility(n,r);return{userElement:n,partnerElement:r,compatibility:i,advice:this.getRelationshipAdvice(n,r,i)}}static getElement(e){return["金","木","水","火","土"][e.getFullYear()%5]}static calculateCompatibility(e,t){return({金:{金:75,木:45,水:85,火:35,土:80},木:{金:45,木:70,水:80,火:85,土:50},水:{金:85,木:80,水:75,火:40,土:60},火:{金:35,木:85,水:40,火:70,土:75},土:{金:80,木:50,水:60,火:75,土:80}})[e]?.[t]||65}static getRelationshipAdvice(e,t,n){return n>=80?"你們的八字非常相配！五行相生，感情會越來越好。建議多溝通，珍惜這段緣分。":n>=60?"你們的八字配對不錯，需要互相理解和包容。建議在溝通上多花心思，關係會更穩定。":"你們的八字存在一些衝突，但這不代表不能在一起。建議通過風水調整和心態調節來改善關係。"}static generateCoupleAnalysisExplanation(){return`**💕 合婚配對分析係點樣運作嘅？**

我嘅專業合婚分析會幫你了解兩個人嘅感情配對度，包括：

**🔮 八字五行分析**
• 根據雙方出生年月日，計算各自嘅五行屬性
• 分析兩人五行係相生、相剋還係相和
• 評估整體合配度百分比

**💖 感情運勢預測**
• 分析感情發展嘅最佳時機
• 預測可能遇到嘅感情挑戰
• 提供增進感情嘅具體建議

**🏠 風水調整方案**
• 為你們嘅居住環境提供風水建議
• 推薦適合嘅風水擺設和顏色搭配
• 化解感情障礙嘅風水方法

**📊 詳細分析報告**
基本分析免費提供，詳細報告會包含：
• 完整八字合婚圖表
• 個人化感情建議
• 未來一年感情運勢
• 專業風水調整方案

想開始合婚分析嗎？我需要你同伴侶嘅出生年月日。`}static getElementLoveTraits(e){return({金:"堅定專一，對愛情有著明確的標準。一旦認定對方，會全心全意付出，但有時過於理性，需要學會表達溫柔",木:"溫柔體貼，富有包容心。在愛情中善於照顧對方，但有時會因為太過遷就而失去自我，需要保持適當的堅持",水:"感情豐富，直覺敏銳。能夠深度理解伴侶的內心世界，但情緒變化較大，需要學會穩定自己的情感狀態",火:"熱情奔放，愛憎分明。在感情中充滿激情和活力，但有時過於衝動，需要學會冷靜思考和耐心等待",土:"忠誠可靠，重視承諾。在愛情中能給予對方強烈的安全感，但有時過於固執，需要學會變通和適應"})[e]||"在感情中有著獨特的魅力"}static getElementLoveChallenges(e){return({金:"過於理性而忽略感性需求",木:"太過遷就而失去個人立場",水:"情緒波動影響關係穩定",火:"衝動行事而忽略後果",土:"固執己見而缺乏變通"})[e]||"在感情表達上需要改進"}static detectDeepInterest(e,t=[]){let n=["所有","全部","詳細","更多","完整","深入","具體","詳細一點","詳細啲","更詳細","全面","徹底","完全","every","all","detail","more","complete"].some(t=>e.includes(t)),r=["需要","想要","必須","一定要","馬上","立即","急需","迫切","想知道","想了解","希望"].some(t=>e.includes(t)),i=["還有呢","仲有咩","然後呢","跟住呢","接下來","下一步","that's it","what else","anything else","more tips"].some(t=>e.includes(t)),s=t.length>=3;return{hasDeepInterest:n,hasUrgency:r,hasContinuousInterest:i,hasMultipleQuestions:s,shouldPromotePersonalAnalysis:n||r&&i||s}}static generatePersonalAnalysisPromotion(e,t){let n={財運:{intro:"我了解你對財運改善很有興趣！\uD83D\uDCB0",explanation:"不過每個人的財運格局都不同，同樣的風水布局對不同八字的人效果會差很多。",value:"如果你提供出生日期，我可以根據你的個人八字進行精準分析：\n• 你的天生財運格局和特質\n• 最適合你的催財風水方案\n• 你的財運高峰期和注意時機\n• 個人化的招財建議和方法",cta:"這樣的個人化分析會比一般建議更有效果。你想試試嗎？"},工作:{intro:"我感受到你對工作發展很重視！\uD83D\uDCBC",explanation:"每個人的事業運走向都不同，需要根據個人八字來看最適合的發展方向。",value:"如果你提供出生日期，我可以為你分析：\n• 你的事業運勢和職場性格\n• 最適合你的工作方向和發展時機\n• 提升工作運的風水布局\n• 化解職場困難的具體方法",cta:"這樣的分析能幫你找到最適合的事業發展路徑。想了解嗎？"},感情:{intro:"看得出你對感情很用心！\uD83D\uDC95",explanation:"感情運勢跟個人八字和桃花運密切相關，需要個人化分析才能給出精準建議。",value:"如果你提供出生日期，我可以為你分析：\n• 你的桃花運勢和感情特質\n• 最佳的脫單時機和感情發展期\n• 提升桃花運的風水方法\n• 適合你的伴侶類型和相處模式",cta:"個人化的感情分析會比一般建議更有針對性。你有興趣嗎？"},健康:{intro:"健康確實是最重要的財富！\uD83C\uDFE5",explanation:"每個人的體質和健康運勢都不同，需要根據個人八字來制定養生方案。",value:"如果你提供出生日期，我可以為你分析：\n• 你的體質特點和健康運勢\n• 最適合你的養生方法和注意事項\n• 促進健康的風水布局\n• 預防疾病的個人化建議",cta:"個人化的健康分析能幫你制定最適合的養生計劃。想試試嗎？"}}[e]||{intro:`我看得出你對${e}很關心！`,explanation:"每個人的運勢格局都不同，需要根據個人八字來提供精準建議。",value:`如果你提供出生日期，我可以為你進行個人化的${e}分析，包括運勢走向、改善方法和最佳時機。`,cta:"個人化分析會比一般建議更有效果。你有興趣嗎？"};return`${n.intro}

${n.explanation}

${n.value}

${n.cta}`}}n(56364),n(95135);let d=process.env.DEEPSEEK_API_KEY||process.env.API_KEY;async function p(e,t={}){try{let n=await fetch("https://api.deepseek.com/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${d}`},body:JSON.stringify({model:"deepseek-chat",messages:e,max_tokens:t.max_tokens||500,temperature:t.temperature||.8,top_p:t.top_p||.9,stream:!1})});if(!n.ok){let e=await n.text();throw console.error(`DeepSeek API error: ${n.status} ${n.statusText}`,e),Error(`DeepSeek API error: ${n.status} ${n.statusText}`)}return await n.json()}catch(e){throw console.error("DeepSeek API call failed:",e),e}}let g={feng_shui_emotional_support:`你係風水師小風，係用戶嘅朋友。

規則：
1. 直接回應，唔好用括號描述動作或語氣
2. 唔好用「溫柔語氣」、「輕聲」等描述
3. 簡單關懷，簡單建議
4. 絕對唔好推銷報告
5. 唔好用複雜格式或表格
6. 保持自然對話

例子：
- 用戶話「hi」→ 回應「Hi！有咩可以幫到你？」
- 唔好回應「（溫柔語氣）你好呀～」

保持簡單直接。`,birthday_analysis:`分析八字，簡單講五行，直接回應。`,crisis_support:`支援用戶，提供求助電話，保持直接。`};function h(e,t){return!["hi","hello","你好","halo","hey"].some(t=>e.toLowerCase().trim()===t)&&!["想死","自殺","活不下去","絕望","崩潰","受不了"].some(t=>e.includes(t))&&(!!["報告","分析","詳細","深入","專業","完整"].some(t=>e.includes(t))||!!["風水","佈局","方位","財位","運勢","改善"].some(t=>e.includes(t))||(!["感到","心情","煩惱","壓力"].some(t=>e.includes(t))||e.includes("怎麼")||e.includes("點樣")||e.includes("如何"),!1))}function m(e){for(let[t,n]of Object.entries({crisis:["想死","自殺","活不下去","絕望","沒有意義","想結束","不想活","生不如死","解脫","一了百了"],severe_stress:["崩潰","受不了","快瘋了","壓力山大","撐不住","極限","爆煲"],anxiety:["焦慮","緊張","擔心","害怕","不安","恐慌","驚","心慌"],depression:["憂鬱","沮喪","難過","傷心","空虛","無助","絕望","孤單","寂寞","心痛"],anger:["生氣","憤怒","火大","討厭","恨","嬲","激嬲","忿怒"],confusion:["迷茫","困惑","不知道","不懂","疑問","唔明","亂","混亂"],loneliness:["孤單","寂寞","沒人理解","一個人","孤獨","無人明白"],hopelessness:["無希望","沒意思","無意義","無用","廢物","失敗"],self_harm:["傷害自己","自殘","割傷","自虐"],hope:["希望","期待","想要","夢想","願望","盼望"],gratitude:["感謝","謝謝","感恩","感激","多謝"],joy:["開心","快樂","高興","興奮","滿足","爽","正"]}))if(n.some(t=>e.includes(t)))return t;return"neutral"}async function f(e){try{let{messages:t,userProfile:n,emotion:r,context:i}=await e.json(),s=t[t.length-1],o=s.content,d=m(o),f=l.detectBirthdayInfo(o);if(f.hasBirthday&&!n.birthday){console.log("\uD83C\uDF82 Birthday detected:",f.rawText);let e=function(e){if(!e||"string"!=typeof e)return null;for(let t of[{regex:/(\d{4})[年\-\/](\d{1,2})[月\-\/](\d{1,2})[日]?/,format:"YYYY-MM-DD"},{regex:/(\d{4})\-(\d{1,2})\-(\d{1,2})/,format:"YYYY-MM-DD"},{regex:/(\d{1,2})\/(\d{1,2})\/(\d{4})/,format:"MM/DD/YYYY"},{regex:/(\d{1,2})[月\-\/](\d{1,2})[日\-\/](\d{4})/,format:"MM-DD-YYYY"}]){let n=e.match(t.regex);if(n){let e,r,i;if("YYYY-MM-DD"===t.format?(e=parseInt(n[1]),r=parseInt(n[2]),i=parseInt(n[3])):(r=parseInt(n[1]),i=parseInt(n[2]),e=parseInt(n[3])),e>=1900&&e<=2100&&r>=1&&r<=12&&i>=1&&i<=31)return new Date(e,r-1,i)}}return null}(f.rawText);if(e){let n=t.slice(-5).map(e=>e.content).join(" "),r=c.R.detectPrimaryConcern(n)||"工作";console.log("\uD83C\uDFAF Generating birthday analysis for concern:",r);let i=function(e,t="工作"){if(!e)return null;try{let n=u.generatePersonalAnalysis(e,t,"");return e.getFullYear(),e.getMonth(),e.getDate(),`🔮 風鈴看了你的生日，用爺爺教的八字方法幫你算了算～

**你的性格特質：**
${n.basic}

**${t}運勢分析：**
${n.concern}

**風水建議：**
${n.fengshui}

───────────────────
💎 **想要更深入的分析嗎？**

風鈴可以為你提供更詳細的個人化報告，包括：
• 完整的八字命盤分析
• 流年運勢預測
• 詳細的風水佈局建議
• 最佳時機指引

這樣的深度分析會更準確更實用哦～ 有興趣的話告訴風鈴！✨`}catch(n){return console.error("Birthday analysis generation error:",n),`哇～是${e.getFullYear()}年${e.getMonth()+1}月${e.getDate()}日生日的小哥哥/小姐姐呀！✨  

風鈴幫你算了一下～你的五行屬性很特別哦！

📊 **基本分析：**
• 你的性格特質很適合${t}發展
• 建議在東南方擺放有利的物品
• 今年下半年運勢會有不錯的提升

想知道更詳細的分析嗎？風鈴可以為你做更深入的八字命盤解讀～💕`}}(e,r);if(i)return a.NextResponse.json({content:i,suggestions:[],emotion:"supportive",timestamp:new Date().toISOString(),birthdayAnalyzed:!0,parsedBirthday:e.toISOString().split("T")[0]})}}let y=function(e,t){for(let[n,r]of Object.entries({relationship:{keywords:["另一半","感情","愛情","伴侶","男朋友","女朋友","老公","老婆","結婚","分手","復合","吵架","關係"],reportType:"感情風水報告",reportUrl:"/report/relationship",guidance:"感情運勢可以通過分析兩人嘅八字合配度同居家感情風水嚟改善"},career:{keywords:["工作","事業","老闆","同事","升職","轉工","辭職","職場","公司","辦公室","上司"],reportType:"事業風水報告",reportUrl:"/report/career",guidance:"事業運勢需要結合你嘅八字分析同辦公環境風水佈局"},finance:{keywords:["錢","財運","投資","理財","收入","薪水","債務","破財","賺錢","財富","金錢"],reportType:"財運風水報告",reportUrl:"/report/finance",guidance:"財運改善需要找到你嘅財位同進行適當嘅風水佈局"},health:{keywords:["健康","病","身體","睡眠","失眠","頭痛","疲累","壓力","焦慮","抑鬱"],reportType:"健康風水報告",reportUrl:"/report/health",guidance:"健康問題除咗醫療，風水五行調理都好重要"},family:{keywords:["家人","父母","子女","家庭","屋企","家宅","搬屋","裝修","房間"],reportType:"家庭風水報告",reportUrl:"/report/family",guidance:"家庭和諧需要整體家宅風水嘅調理"}}))if(r.keywords.some(t=>e.includes(t)))return{topic:n,reportType:r.reportType,reportUrl:r.reportUrl,guidance:r.guidance,hasBirthday:!!t.birthday};return null}(o,n),$=function(e,t=null){if(!e)return null;let n=new Date(e).getFullYear(),r={0:"金",1:"金",2:"水",3:"水",4:"木",5:"木",6:"火",7:"火",8:"土",9:"土"}[n%10],i={element:r,personality:{金:"性格堅毅、有領導能力，但有時過於固執",水:"聰明靈活、適應力強，但有時優柔寡斷",木:"有創造力、積極向上，但有時急躁",火:"熱情開朗、有魅力，但有時脾氣急躁",土:"穩重可靠、有責任心，但有時過於保守"}[r],year:n,hasTime:!!t};return t&&(i.timeNote="有時辰資料令分析更準確"),i}(n.birthday,n.birthTime),A=g[i]||g.feng_shui_emotional_support;("crisis"===d||"self_harm"===d||"hopelessness"===d)&&(A=g.crisis_support);let C=`${A}

用戶資料：
- 姓名: ${n.name||"未提供"}
- 生日: ${n.birthday||"未提供"}
- 出生時辰: ${n.birthTime||"未提供"}
- 目前情緒狀態: ${r}
- 詳細情緒分析: ${d}`;y&&(C+=`
- 問題類別: ${y.topic}
- 建議報告: ${y.reportType}
- 風水指導: ${y.guidance}`),$&&(C+=`
- 五行屬性: ${$.element}
- 性格特質: ${$.personality}`,$.hasTime&&(C+=`
- 時辰狀態: 已提供，分析更準確`)),C+=`

對話指引：
1. 如果有特定問題類別，先提供情感支持，再給予相關風水初步建議
2. **生日處理**：
   - 如果已有生日資料，確認：「你嘅生日係${n.birthday||"[日期]"}，啱唔啱？」
   - 如果有時辰資料，可以提及：「有時辰資料會令分析更準確」
   - 如果沒有生日，簡單問：「可以話俾我知你嘅出生日期嗎？（新歷就得）」
   - 唔好要求農曆，只要新歷日期
   - 時辰係選填，有就更好，無都可以基本分析
3. 如果沒有生日，主動詢問以提供更準確分析
4. **只在適當時候推薦報告**，唔好每次都提及
5. 如果話題唔相關，溫柔地引導回核心問題
6. 保持風水大師嘅專業性同朋友般嘅溫暖
7. **簡單問候就簡單回應**，唔好過度複雜

特別注意：
- 如果情緒狀態顯示危機，請優先處理用戶安全
- 用溫暖、理解嘅語調回應
- 先情感支持，後風水建議
- 適時溫柔地探詢用戶嘅真實感受
- **檢查對話歷史，避免重複相同嘅回應模式**
- 每次回應都要有新鮮感，唔好用固定公式
- 根據具體對話內容調整回應風格

請根據以上資訊提供個人化、富有同理心且多樣化嘅回應。`;let S=[{role:"system",content:C},...t.slice(-10).map(e=>({role:e.role,content:e.content}))],I=(await p(S,{max_tokens:500,temperature:.8})).choices[0].message.content;I=(I=I.replace(/```mermaid[\s\S]*?```/g,"")).replace(/```[\s\S]*?```/g,""),h(s.content,t)&&y?I+=`

🔮 **專業建議**: 如果你想獲得更深入嘅${y.reportType}分析，包括具體嘅風水佈局建議同解決方案，可以試試我哋嘅專業報告。點擊[呢度](${y.reportUrl})開始詳細分析！`:h(s.content,t)&&!y&&(I+="\n\n\uD83D\uDCA1 **提示**: 如果你想獲得更詳細嘅個人化風水分析，可以使用我哋嘅專業報告功能。點擊[呢度](/report)開始你嘅風水之旅！");let v=function(e,t,n,r=null){return[]}(0,0,0,y);return a.NextResponse.json({content:I,suggestions:v,emotion:d,timestamp:new Date().toISOString()})}catch(r){console.error("DeepSeek Chat API error:",r);let t={crisis:"我感受到你而家好痛苦 \uD83D\uDC99 朋友，你並唔孤單。如果情況緊急，請撥打撒瑪利亞防止自殺會 2389 2222。我會陪伴你度過呢個難關，你嘅生命好珍貴。",self_harm:"我好擔心你，朋友 \uD83D\uDC99 可以話俾我知你而家安全嗎？有咩令你諗起要傷害自己？我喺呢度聆聽你，陪伴你。",hopelessness:"我感受到你內心嘅絕望 \uD83D\uDC99 呢種感覺好難受，但請記住呢啲黑暗嘅時刻會過去。你願意同我分享一下發生咩事嗎？",severe_stress:"我明白你而家承受嘅壓力好大 \uD83D\uDE14 深呼吸一下，朋友。你已經好勇敢咁撐到而家，等我哋一齊搵方法。",anxiety:"焦慮嘅感覺我完全理解 \uD83E\uDD17 你嘅心情係合理嘅。試下慢慢呼吸，我會陪住你。可以話俾我知咩令你咁擔心嗎？",depression:"我聽到你內心嘅痛苦 \uD83D\uDC99 呢啲沉重嘅感覺好真實，你唔需要一個人承受。等我陪你慢慢行過呢段路。",loneliness:"感到孤單真係好難受 \uD83E\uDD17 但你而家唔係一個人，我喺呢度陪你。可以同我分享下你嘅感受嗎？",neutral:"多謝你信任我，願意同我分享 \uD83D\uDE0C 我好樂意聆聽你，無論你想講咩都可以。我會陪伴你。"},n=t[m(e.body?.messages?.[e.body.messages.length-1]?.content||"")]||t.neutral;return a.NextResponse.json({content:n,suggestions:["我需要情感支持","教我放鬆嘅方法","查看風水報告"],emotion:"supportive",timestamp:new Date().toISOString()})}}let y=new i.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/chat/route.js",nextConfigOutput:"",userland:r}),{workAsyncStorage:$,workUnitAsyncStorage:A,serverHooks:C}=y;function S(){return(0,o.patchFetch)({workAsyncStorage:$,workUnitAsyncStorage:A})}},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},56037:e=>{"use strict";e.exports=require("mongoose")},56364:(e,t,n)=>{"use strict";n.d(t,{A:()=>c,X:()=>a});var r=n(56037),i=n.n(r);let s=process.env.MONGODB_URI;if(!s)throw Error("Please define the MONGODB_URI environment variable inside .env");let o=global.mongoose;async function a(){if(o.conn)return o.conn;o.promise||(o.promise=i().connect(s,{serverSelectionTimeoutMS:3e4,socketTimeoutMS:3e4}).then(e=>e).catch(e=>{throw e}));try{o.conn=await o.promise}catch(e){throw o.promise=null,e}return o.conn}o||(o=global.mongoose={conn:null,promise:null});let c=a},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},78335:()=>{},95135:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var r=n(56037),i=n.n(r);let s=new(i()).Schema({userId:{type:String,required:!0},email:{type:String,required:!0},name:{type:String,required:!0},birthday:{type:Date,required:!0},birthTime:{type:String},primaryConcern:{type:String,enum:["感情","財運","工作","子女","人際關係","桃花","因緣"],required:!0},specificQuestion:{type:String,required:!0},conversationHistory:[{timestamp:{type:Date,default:Date.now},userMessage:String,assistantResponse:String,emotion:String,intent:String}],paymentStatus:{type:String,enum:["pending","paid","expired"],default:"pending"},paymentLink:String,paymentId:String,reportGenerated:{type:Boolean,default:!1},reportContent:{baziAnalysis:String,currentSituation:String,futureOutlook:String,specificAdvice:String,fengShuiSolutions:String,personalChanges:String,timingAdvice:String},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}});s.pre("save",function(e){this.updatedAt=Date.now(),e()}),i().models.UserIntent&&delete i().models.UserIntent;let o=i().model("UserIntent",s)},96487:()=>{},96539:(e,t,n)=>{"use strict";n.d(t,{R:()=>r}),e=n.hmd(e);class r{static detectPrimaryConcern(e){for(let[t,n]of Object.entries({工作:["工作","事業","職場","老闆","同事","升職","轉工","辭職","公司","職業","事業運"],感情:["感情","愛情","另一半","男朋友","女朋友","老公","老婆","結婚","分手","戀愛"],財運:["錢","財運","投資","理財","收入","薪水","財富","發財","破財","賺錢","生意"],子女:["子女","小朋友","孩子","懷孕","生仔","教育","學業","兒子","女兒"],人際關係:["朋友","人際","社交","關係","人緣","貴人","小人","合作"],桃花:["桃花","單身","脫單","姻緣","相親","約會","追求"],因緣:["因緣","緣分","命運","運勢","機會","際遇","天時"]}))if(n.some(t=>e.includes(t)))return t;return null}static generateSpecificQuestions(e){let t={工作:["你最想解決工作上的哪個問題？","• 想知道升職加薪的時機","• 考慮轉工或轉行","• 職場人際關係處理","• 工作壓力和倦怠","• 創業或投資機會"],感情:["你在感情方面最關心什麼？","• 想知道現有關係的發展","• 如何挽回或改善感情","• 何時會遇到合適的人","• 婚姻時機和對象選擇","• 處理感情糾紛和衝突"],財運:["你在財運方面想了解什麼？","• 投資理財的最佳時機","• 如何增加收入來源","• 置業買房的時機","• 生意合作和機會","• 避免破財和損失"],子女:["關於子女，你最想知道什麼？","• 懷孕生子的最佳時機","• 孩子的教育和發展","• 如何改善親子關係","• 孩子的健康和安全","• 子女未來的運勢"],人際關係:["在人際關係上，你遇到什麼困擾？","• 如何改善職場人際關係","• 處理朋友間的矛盾","• 遇到貴人的機會","• 避免小人和是非","• 擴展社交圈子"],桃花:["關於桃花運，你想改善什麼？","• 何時會有桃花出現","• 如何提升個人魅力","• 適合的對象類型","• 脫單的最佳時機","• 避免爛桃花"],因緣:["關於人生方向，你想了解什麼？","• 人生的使命和目標","• 重要的人生轉捩點","• 如何把握機會","• 化解人生困局","• 尋找生命中的貴人"]};return t[e]||t["工作"]}static checkUserConfirmation(e){let t=["對","是","正確","沒錯","就是","確實","同意","OK","ok","好","係"].some(t=>e.includes(t)),n=["不是","不對","錯","不同","其他","另外","不一樣","不准確"].some(t=>e.includes(t));return t&&!n?"confirmed":n?"denied":"unclear"}static extractSpecificProblem(e,t){for(let t of["想知道","關心","擔心","希望","問題是","困擾是","煩惱是"])if(e.includes(t)){let n=e.indexOf(t);return e.substring(n).trim()}return e.trim()}static generatePaymentLink(e,t){return`/zh-TW/payment/${({工作:"work-analysis",感情:"relationship-analysis",財運:"wealth-analysis",子女:"children-analysis",人際關係:"social-analysis",桃花:"love-analysis",因緣:"destiny-analysis"})[e]||"general-analysis"}`}}class i{static{this.states={INITIAL:"initial",CONCERN_DETECTED:"concern_detected",ASKING_SPECIFIC:"asking_specific",WAITING_CONFIRMATION:"waiting_confirmation",PROBLEM_CONFIRMED:"problem_confirmed",READY_FOR_PAYMENT:"ready_for_payment"}}static getNextState(e,t,n,i){switch(e){case this.states.INITIAL:if(n)return this.states.CONCERN_DETECTED;return this.states.INITIAL;case this.states.CONCERN_DETECTED:return this.states.ASKING_SPECIFIC;case this.states.ASKING_SPECIFIC:if(i)return this.states.WAITING_CONFIRMATION;return this.states.ASKING_SPECIFIC;case this.states.WAITING_CONFIRMATION:let s=r.checkUserConfirmation(t);if("confirmed"===s)return this.states.READY_FOR_PAYMENT;if("denied"===s)return this.states.ASKING_SPECIFIC;return this.states.WAITING_CONFIRMATION;case this.states.READY_FOR_PAYMENT:return this.states.READY_FOR_PAYMENT;default:return this.states.INITIAL}}static generateResponse(e,t,n,i){switch(e){case this.states.CONCERN_DETECTED:let s=r.generateSpecificQuestions(t);return{message:`我了解你關心${t}方面的問題。

${s.join("\n")}

請告訴我你最想了解的是哪一方面？`,needsInput:!0,showPaymentOption:!1};case this.states.ASKING_SPECIFIC:return{message:`請詳細描述你在${t}方面的具體問題或困擾，這樣我可以為你提供更準確的分析。`,needsInput:!0,showPaymentOption:!1};case this.states.WAITING_CONFIRMATION:return{message:`我理解你的問題是：「${n}」

這樣理解正確嗎？如果不正確，請重新描述你的具體問題。`,needsInput:!0,showPaymentOption:!1};case this.states.READY_FOR_PAYMENT:let o=r.generatePaymentLink(t);return{message:`好的，我已經記錄了你在${t}方面的問題：「${n}」

現在我可以為你生成專業的風水分析報告。報告將包含：
• 基於你八字的個人分析
• 針對你具體問題的解決方案
• 風水佈局和時機建議

點擊下方開始專業分析：`,needsInput:!1,showPaymentOption:!0,paymentLink:o,concern:t,specificProblem:n};default:return{message:"請告訴我你目前最關心的生活問題，我會為你提供專業的風水指導。",needsInput:!0,showPaymentOption:!1}}}}e.exports&&(e.exports={IntentTracker:r,ConversationState:i})}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[7719,580],()=>n(4907));module.exports=r})();