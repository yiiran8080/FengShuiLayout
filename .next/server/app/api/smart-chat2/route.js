(()=>{var e={};e.id=8862,e.ids=[8862],e.modules={3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4573:e=>{"use strict";e.exports=require("node:buffer")},6745:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(56037),r=i.n(n);let s=new(r()).Schema({userId:{type:String,required:!0,unique:!0},password:{type:String,required:!1},provider:{type:String,default:"credentials",required:!1},name:{type:String,required:!1},gender:{type:String,enum:["female","male"],required:!0,default:"female"},birthDateTime:{type:Date,required:!0,default:new Date(1996,2,12,22)},email:{type:String,required:!1},isLock:{type:Boolean,required:!0,default:!0},genStatus:{type:String,enum:["none","waiting","done"],required:!1},emailVerified:{type:Boolean,default:!1},verificationToken:{type:String,required:!1},freeReportStats:{totalGenerated:{type:Number,default:0},lastGeneratedAt:{type:Date,default:null},firstGeneratedAt:{type:Date,default:null},favoriteRoomType:{type:String,default:null},favoriteDirection:{type:String,default:null}},createdAt:{type:Date,default:Date.now},updatedAt:{type:Date,default:Date.now}});s.virtual("freeReportActivities",{ref:"FreeReportActivity",localField:"userId",foreignField:"userId"}),s.virtual("projects",{ref:"Project",localField:"userId",foreignField:"owner"}),s.set("toJSON",{virtuals:!0}),s.set("toObject",{virtuals:!0}),r().models.User&&delete r().models.User,r().modelSchemas&&r().modelSchemas.User&&delete r().modelSchemas.User;let o=r().model("User",s)},7072:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(56037),r=i.n(n);let s=new(r()).Schema({userId:{type:String,required:!0},sessionId:{type:String,required:!0},language:{type:String,required:!0,default:"zh-CN"},isDelete:{type:Number,default:0},userProfile:{birthday:{type:Date,required:!0},gender:{type:String,enum:["male","female"]},element:String,personality:String,loveStyle:String},partnerProfile:{birthday:{type:Date,required:!0},gender:{type:String,enum:["male","female"]},element:String,personality:String,loveStyle:String},compatibilityAnalysis:{overallScore:Number,relationshipAdvice:String,developmentAdvice:String,specificAdvice:String},yearlyFortune:{currentYear:String,bestTiming:String,warnings:String},fengShuiLayout:{bedroom:String,livingRoom:String,colors:String,items:String,generalAdvice:String},reportMetadata:{concern:String,reportType:String,generatedAt:{type:Date,default:Date.now}}},{timestamps:!0,indexes:[{userId:1,isDelete:1},{sessionId:1},{createdAt:-1}]});s.methods.getFormattedReport=function(){return{title:"合婚配對分析報告",userElement:this.userProfile.element,partnerElement:this.partnerProfile.element,compatibility:this.compatibilityAnalysis.overallScore,reportDate:this.reportMetadata.generatedAt}};let o=r().models.CoupleReportDoc||r().model("CoupleReportDoc",s)},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},14807:(e,t,i)=>{"use strict";i.d(t,{j2:()=>m,Y9:()=>d});var n=i(30091),r=i(56056),s=i(18068),o=i(10189),a=i(56364),c=i(6745);async function l(e,t){try{await (0,a.A)();let i=await c.A.findOne({userId:e});if(!i){let i=new c.A({userId:e,email:t,gender:"female",birthDateTime:new Date(1996,2,12,22),isLock:!0,genStatus:"none"});return await i.save(),i}return i}catch(e){throw e}}var p=i(49316);let{handlers:d,signIn:u,signOut:g,auth:m}=(0,n.Ay)({trustHost:!0,providers:[(0,r.A)({clientId:process.env.GOOGLE_CLIENT_ID,clientSecret:process.env.GOOGLE_CLIENT_SECRET}),(0,s.A)({clientId:process.env.APPLE_ID,clientSecret:process.env.APPLE_CLIENT_SECRET}),(0,o.A)({name:"credentials",credentials:{email:{label:"Email",type:"email"},password:{label:"Password",type:"password"}},async authorize(e){if(!e?.email||!e?.password)return null;try{await (0,a.A)();let t=await c.A.findOne({$or:[{email:e.email},{userId:e.email}],provider:"credentials"});if(!t||!t.password||!await (0,p.BE)(e.password,t.password))return null;return{id:t._id.toString(),email:t.email,name:t.name,userId:t.userId}}catch(e){return console.error("Authentication error:",e),null}}})],secret:process.env.NEXTAUTH_SECRET,callbacks:{async signIn({user:e,account:t,profile:i}){try{let i=e.email;if(!i)return!1;return(t?.provider==="google"||t?.provider==="apple")&&await l(i,e.email),!0}catch(e){return console.error("Error in signIn callback:",e),!1}},jwt:async({token:e,user:t,account:i})=>(i&&t&&(e.accessToken=i.access_token,e.id=t.id,e.userId=t.userId||t.email),e),session:async({session:e,token:t})=>(t&&e.user&&(e.user={...e.user,id:t.sub,userId:t.userId||e.user.email}),e)},pages:{signIn:"/auth/login"}})},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},41926:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(56037),r=i.n(n);r().models.ChatHistory&&delete r().models.ChatHistory;let s=new(r()).Schema({conversationId:{type:String,required:!0,index:!0},sessionId:{type:String,required:!0,index:!0},userId:{type:String,required:!0,index:!0},userEmail:{type:String,required:!1},title:{type:String,required:!0},primaryConcern:{type:String,enum:["工作","感情","財運","子女","人際關係","健康","因緣","風水佈局","其他"],required:!1},conversationState:{type:String,enum:["initial","ai_analyzing","birthday_collection","asking_detailed_report","ready_for_detailed_report","collecting_payment_info","completed"],default:"initial"},messages:[{messageId:{type:String,required:!0},role:{type:String,enum:["user","assistant"],required:!0},content:{type:String,required:!0},timestamp:{type:Date,default:Date.now},aiAnalysis:{detectedTopic:String,isWithinScope:Boolean,confidence:Number,specificProblem:String},systemType:{type:String,default:"smart-chat2"}}],stats:{totalMessages:{type:Number,default:0},lastActivity:{type:Date,default:Date.now},userEngagement:{type:Number,min:0,max:1,default:.5}},context:{topics:[String],lastTopic:String,conversationSummary:String,emotionalState:String},userData:{userBirthday:Date,partnerBirthday:Date,gender:String,partnerGender:String,relationshipType:String},isActive:{type:Boolean,default:!0},isArchived:{type:Boolean,default:!1}},{timestamps:!0,indexes:[{userId:1,conversationId:1},{userId:1,isActive:1},{sessionId:1},{"stats.lastActivity":-1},{createdAt:-1}]});s.methods.addMessage=function(e,t,i=null){let n=`msg-${Date.now()}-${Math.random().toString(36).substr(2,9)}`;return this.messages.push({messageId:n,role:e,content:t,timestamp:new Date,aiAnalysis:i,systemType:"smart-chat2"}),this.stats.totalMessages=this.messages.length,this.stats.lastActivity=new Date,n},s.methods.updateContext=function(e,t=null){e&&!this.context.topics.includes(e)&&this.context.topics.push(e),e&&(this.context.lastTopic=e),t&&(this.context.emotionalState=t)},s.methods.generateSummary=function(){let e=this.stats.totalMessages,t=this.primaryConcern||"一般諮詢";return 0===e?`剛開始的${t}對話`:e<5?`${t}初步討論（${e}輪）`:`${t}深入討論（${e}輪）`};let o=r().models.ChatHistory||r().model("ChatHistory",s)},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},45012:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});var n=i(56037),r=i.n(n);r().models.SmartUserIntent&&delete r().models.SmartUserIntent;let s=new(r()).Schema({userEmail:{type:String,required:!1,index:!0},userId:{type:String,required:!1,index:!0},sessionId:{type:String,index:!0},primaryConcern:{type:String,enum:["工作","感情","財運","子女","人際關係","健康","因緣","風水佈局","其他"],required:!1},nonCoreUserInput:{type:String,maxlength:500},nonCoreAnalysis:{isTypo:{type:Boolean,default:!1},suggestedCoreArea:{type:String,enum:["工作","感情","財運","子女","人際關係","健康","因緣","風水佈局","其他"]},aiResponse:{type:String,maxlength:1e3},analysisTimestamp:{type:Date,default:Date.now}},aiAnalysis:{userType:{type:String,enum:["新手用戶","回頭客","專業用戶"]},emotionalState:{type:String,enum:["平靜","焦慮","興奮","困惑","絕望","希望"]},urgencyLevel:{type:String,enum:["低","中","高","緊急"]},conversationPattern:{type:String,enum:["探索型","問題解決型","決策支持型","學習型"]},serviceDepth:{type:String,enum:["快速諮詢","標準分析","深度服務","專家諮詢"]},personalityType:{type:String,enum:["理性分析型","感性直覺型","務實行動型","謹慎保守型"]},engagementLevel:{type:String,enum:["低","中","高"]},topicFocus:[{type:String,enum:["感情","財運","工作","健康","人際關係","子女","因緣","風水佈局","其他"]}],communicationStyle:{type:String,enum:["直接","委婉","詳細","簡潔"]},recommendedApproach:{type:String,enum:["引導式","支持式","分析式","教育式"]},confidence:{type:Number,min:0,max:1,default:.5},lastAnalyzed:{type:Date,default:Date.now}},relationshipAnalysisType:{type:String,enum:["individual","couple"],required:!1},breakupStatus:{type:String,enum:["A","B","C","D"],required:!1},emotionalState:{type:String,enum:["just_broke_up","ready_to_restart","long_single","has_crush","want_reconcile","new_relationship","looking_for_new","long_term_relationship","healing","new_beginning","understand_reasons"],required:!1},specificQuestion:{type:String,maxlength:500},originalSpecificProblem:{type:String,maxlength:1e3},conversationState:{type:String,enum:["initial","concern_detected","asking_specific","asking_relationship_type","emotion_state_selection","breakup_guidance_provided","waiting_confirmation","problem_confirmed","ready_for_modal","ready_for_report","birthday_collected","birthday_provided","birthday_collection","asking_partner_birthday","asking_detailed_report","ready_for_detailed_report","ready_for_payment","confirming_birthday","confirming_partner_birthday","collecting_payment_info","report_generated","ai_analyzing","ai_analyzed","choice_selection"],default:"initial"},conversationActive:{type:Boolean,default:!0},readyForPayment:{type:Boolean,default:!1},conversationHistory:[{role:{type:String,enum:["user","assistant"],required:!0},content:{type:String,required:!0},timestamp:{type:Date,default:Date.now},detectedConcern:String,state:String}],paymentCompleted:{type:Boolean,default:!1},paymentAmount:{type:Number,min:0},paymentDate:{type:Date},serviceType:{type:String,enum:["work-analysis","relationship-analysis","wealth-analysis","children-analysis","social-analysis","love-analysis","destiny-analysis"]},birthDate:{type:Date},userBirthday:{type:Date},partnerBirthday:{type:Date},birthdayConfirmed:{type:Boolean,default:!1},partnerBirthdayConfirmed:{type:Boolean,default:!1},birthTime:{type:String},gender:{type:String,enum:["male","female"]},reportGenerated:{type:Boolean,default:!1},reportContent:{baziAnalysis:{yearElement:String,dayElement:String,strengthAnalysis:{description:String,advice:String},personality:String},currentSituation:String,futureOutlook:String,specificAdvice:String,fengShuiSolutions:String,timingAdvice:String,generatedAt:{type:Date,default:Date.now}}},{timestamps:!0,indexes:[{userEmail:1,conversationActive:1},{userId:1,conversationActive:1},{userEmail:1,paymentCompleted:1},{userId:1,paymentCompleted:1},{createdAt:-1}]});s.methods.isConversationComplete=function(){return"ready_for_payment"===this.conversationState||this.paymentCompleted},s.methods.getProgress=function(){let e=["initial","concern_detected","asking_specific","waiting_confirmation","asking_detailed_report","ready_for_detailed_report","ready_for_payment"],t=e.indexOf(this.conversationState);return{current:t+1,total:e.length,percentage:Math.round((t+1)/e.length*100)}};let o=r().models.SmartUserIntent||r().model("SmartUserIntent",s)},49316:(e,t,i)=>{"use strict";i.d(t,{BE:()=>s,DT:()=>a,Er:()=>r,Oj:()=>o});var n=i(85663);async function r(e){return await n.Ay.hash(e,12)}async function s(e,t){return await n.Ay.compare(e,t)}function o(e){let t=/[a-zA-Z]/.test(e),i=/\d/.test(e);return{isValid:e.length>=8&&t&&i,message:e.length<8?"Password must be at least 8 characters long":t&&i?"":"Password must contain at least one letter and one number"}}function a(e){let t=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return{isValid:t.test(e),message:t.test(e)?"":"Please enter a valid email address"}}},55511:e=>{"use strict";e.exports=require("crypto")},56037:e=>{"use strict";e.exports=require("mongoose")},56364:(e,t,i)=>{"use strict";i.d(t,{A:()=>c,X:()=>a});var n=i(56037),r=i.n(n);let s=process.env.MONGODB_URI;if(!s)throw Error("Please define the MONGODB_URI environment variable inside .env");let o=global.mongoose;async function a(){if(o.conn)return o.conn;o.promise||(o.promise=r().connect(s,{serverSelectionTimeoutMS:3e4,socketTimeoutMS:3e4}).then(e=>e).catch(e=>{throw e}));try{o.conn=await o.promise}catch(e){throw o.promise=null,e}return o.conn}o||(o=global.mongoose={conn:null,promise:null});let c=a},57975:e=>{"use strict";e.exports=require("node:util")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},64102:e=>{"use strict";class t{constructor(){this.baziElements={tianGan:["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],diZhi:["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]},this.fengShuiTerms={十神:{explanation:"十神是八字命理的核心概念，以出生日的天干為中心，分析其他天干的關係。包括比肩、劫財、食神、傷官、正財、偏財、正官、偏官、正印、偏印十種關係，代表不同的人生面向和性格特質。",relevantServices:["個人命理分析","性格特質解讀","天賦才能發掘"]},風水:{explanation:"風水是中國古代的空間佈局學，通過調整居住和工作環境的佈局、方位、色彩等要素，來改善人的運勢和生活品質。核心理念是讓人與環境和諧共處，引導正能量流動。",relevantServices:["居家風水佈局","辦公室風水調整","商店風水規劃"]},吉位:{explanation:"吉位是指對個人運勢有正面幫助的方位，根據個人八字和流年運勢計算得出。在吉位放置重要物品、安排睡床或辦公桌，可以增強個人的整體運勢和特定領域的能量。",relevantServices:["個人吉位測算","家居吉位佈局","辦公吉位規劃"]},流年:{explanation:"流年是指每一年的運勢變化，根據天干地支的年份與個人八字的相互作用來預測。流年運勢會影響感情、事業、財運、健康等各方面，了解流年有助於把握時機、趨吉避凶。",relevantServices:["年度運勢預測","重要時機把握","趨吉避凶指導"]},八字:{explanation:"八字又稱四柱，是根據出生年、月、日、時的天干地支組合而成的命理系統。通過分析八字可以了解個人的性格特質、運勢走向、適合的發展方向等，是中華傳統命理學的核心。",relevantServices:["完整八字解析","性格特質分析","人生規劃建議"]},食神:{explanation:"食神是十神之一，代表才華展現、創意表達和子女福澤。食神旺的人通常具有藝術天分、表達能力強，適合從事創作、表演或教育工作。在財運上，食神能生財，是間接求財的象徵。",relevantServices:["才華分析","事業方向指導","子女運勢"]},五行:{explanation:"五行包括金、木、水、火、土五種基本元素，代表不同的能量特質。五行相生相剋的原理用於分析個人命理特徵，也用於風水佈局，通過平衡五行能量來改善運勢。",relevantServices:["五行平衡調理","個人五行分析","五行風水佈局"]},桃花運:{explanation:"桃花運是指感情運勢，包括異性緣分、戀愛機會、婚姻運勢等。桃花運的好壞會影響個人的感情生活，通過命理分析和風水調整可以增強桃花運，改善感情狀況。",relevantServices:["感情運勢分析","桃花運提升","合婚配對分析"]},貴人:{explanation:"貴人是指在人生路上能夠給予幫助、指導或機會的重要人物。貴人運的強弱影響事業發展和人際關係，通過了解自己的貴人方位和時機，可以更好地把握人生機遇。",relevantServices:["貴人運分析","人際關係改善","事業發展指導"]}}}async analyzeMessage(e){console.log("\uD83D\uDD0D Enhanced Analyzer 開始分析:",e);let t=this.detectEmotionalCrisis(e);if(t.isCrisis)return console.log("⚠️ 檢測到情緒危機，優先處理"),this.handleEmotionalCrisis(t,e);let i=this.detectBaziInput(e);if(i.isBazi)return console.log("✅ 檢測到八字輸入"),await this.handleBaziInput(i,e);let n=this.detectContextualInput(e);if(n.hasContext)return console.log("✅ 檢測到情境輸入"),await this.handleContextualInput(n,e);let r=this.detectBirthdayOnly(e);if(r.isBirthdayOnly)return console.log("✅ 檢測到生日輸入"),this.handleBirthdayOnlyInput(r,e);let s=this.detectGreeting(e);if(s.isGreeting)return console.log("✅ 檢測到問候語/閒聊"),this.handleGreeting(s,e);let o=this.detectKnowledgeQuery(e);if(o.isKnowledgeQuery)return console.log("✅ 檢測到知識詢問"),this.handleKnowledgeQuery(o,e);let a=this.detectProfessionalQuery(e);return a.isProfessional?(console.log("✅ 檢測到專業諮詢"),this.handleProfessionalQuery(a,e)):(console.log("⚡ 使用常規AI分析"),{analysisType:"general_ai",isEnhanced:!1,requiresAIAnalysis:!0})}detectBaziInput(e){let t=e.match(/([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])\s*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])\s*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])\s*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])/);if(t){let i="綜合運勢";for(let[t,n]of Object.entries({財運:["財運","賺錢","投資","理財","收入","金錢"],感情:["感情","愛情","桃花","戀愛","婚姻","配偶"],工作:["工作","事業","職業","升職","跳槽","創業"],健康:["健康","身體","疾病","養生","調理"],人際關係:["人際","朋友","貴人","小人","關係"],子女:["子女","孩子","小孩","生育","懷孕"]}))if(n.some(t=>e.includes(t))){i=t;break}return{isBazi:!0,baziString:t[0],pillars:{year:t[1],month:t[2],day:t[3],hour:t[4]},concern:i,originalMessage:e}}return{isBazi:!1}}detectEmotionalCrisis(e){let t={high:["想死","活不下去","絕望"],medium:["沒希望","崩潰","受不了","放棄"]};for(let i of["沒希望","絕望","想死","活不下去","痛苦","崩潰","受不了","太累了","放棄","無助","孤獨","沒意思","沒意義","空虛","失落","抑鬱"])if(e.includes(i)){let n="low";return t.high.includes(i)?n="high":t.medium.includes(i)&&(n="medium"),{isCrisis:!0,severity:n,triggerKeyword:i,originalMessage:e}}return{isCrisis:!1}}handleEmotionalCrisis(e,t){let{severity:i,triggerKeyword:n}=e,r="";return{analysisType:"emotional_support",isEnhanced:!0,requiresAIAnalysis:!1,response:"high"===i?`我能感受到你現在很痛苦😔 這種感覺真的很不容易...

請記住，人生中最黑暗的時刻往往也是轉機的開始。每個人都會遇到低潮期，這不代表你不夠好，而是生命在為你準備新的開始。

🌟 **從命理角度來說：**
人生有起有落是自然規律，就像月圓月缺、四季輪替。現在的困難可能正是你人生重要轉捩點的前兆。

💫 **建議你：**
• 先好好休息，給自己一些時間
• 找信任的朋友或家人聊聊
• 如果需要，尋求專業心理協助

如果你願意，也可以告訴我你的生日，我幫你看看接下來的運勢走向，或許能給你一些希望和方向。

你並不孤單，我會陪伴你度過這段艱難時期 💙`:"medium"===i?`聽到你說${n}，我很心疼你現在的狀況😌

每個人都會有感覺撞牆的時候，這種感受很真實也很正常。但請相信，困境是暫時的，人生總會有轉機。

🌅 **從風水命理的角度：**
困頓期往往是能量轉換的過程，就像黎明前的黑暗。這段時間雖然辛苦，但也在為接下來的好運積蓄能量。

💝 **給你一些溫暖的建議：**
• 允許自己感受這些情緒，但不要被困住
• 嘗試做一些讓你感到平靜的事情
• 回想一下過去克服困難的經歷

如果你想了解未來的運勢走向，可以提供生日讓我幫你分析。有時候知道「好事即將到來」就能給我們繼續前進的力量。

我會陪著你一起面對 🌸`:`感受到你現在的心情有些低落💙 生活中遇到挫折和困擾是很正常的，你願意表達出來已經很勇敢了。

每個人的人生都有高低起伏，就像自然界的潮汐變化。現在的困難不會永遠持續下去。

🌟 **一些溫暖提醒：**
• 給自己一些耐心和寬容
• 困難往往是成長的機會
• 相信自己有度過難關的能力

如果你想從命理角度了解目前的狀況和未來的發展，可以告訴我你的生日。有時候了解運勢走向能幫助我們更有信心面對挑戰。

記住，你比想像中更堅強 ✨`,isWithinScope:!0,detectedTopic:"工作",specificProblem:`情緒支持 - ${n}`,confidence:.95,emotionalCrisis:e,needsGentleApproach:!0}}detectBirthdayOnly(e){let t=e.match(/(\d{4})[\/\-年]\s*(\d{1,2})[\/\-月]\s*(\d{1,2})[日號]?/);return t&&!["工作","感情","財運","健康","事業","愛情","金錢","失業","分手","問題","困擾","沒了","不順"].some(t=>e.includes(t))?{isBirthdayOnly:!0,year:t[1],month:t[2],day:t[3],birthday:`${t[1]}/${t[2]}/${t[3]}`}:{isBirthdayOnly:!1}}handleBirthdayOnlyInput(e,t){return{analysisType:"birthday_analysis",isEnhanced:!0,requiresAIAnalysis:!0,isWithinScope:!0,detectedTopic:"命理",specificProblem:"一般命理分析",confidence:.95,userContext:{birthday:e.birthday,hasBasicInfo:!0},birthdayData:e,needsGeneralAnalysis:!0}}detectGreeting(e){for(let t of[/^(你好|您好|hi|hello|嗨|hey)/i,/^(你好|您好|嗨|哈囉)[，,]?\s*(風鈴|老師|大師|師傅)/i,/^(早安|午安|晚安|早上好|下午好|晚上好)/i,/^(謝謝|感謝|多謝)/i,/^(最近好嗎|近來如何|怎麼樣)/i])if(t.test(e))return{isGreeting:!0,greetingType:"direct",originalMessage:e};if(e.length<=20){for(let t of[/在嗎/,/在線嗎/,/有空嗎/,/可以聊嗎/,/忙嗎/,/睡了嗎/,/^^$/])if(t.test(e))return{isGreeting:!0,greetingType:"casual",originalMessage:e}}return{isGreeting:!1}}handleGreeting(e,t){let i={direct:[`你好呀～我是風鈴！✨ 很高興認識你！

我是解難專家，可以幫你分析人生各方面的問題和運勢。無論你在感情、工作、財運或健康方面遇到什麼問題，我都很樂意為你提供分析和建議！

你現在有什麼特別想了解的問題嗎？還是想先看看我能提供哪些服務呢？

我可以為你分析以下領域的風水運勢：

🌸 **感情** - 桃花運、姻緣配對
💼 **工作** - 事業發展、職場運勢
💰 **財運** - 投資理財、收入提升
🌿 **健康** - 身心調理、養生建議

你對哪一種有興趣？`],casual:[`我在呢！✨ 有什麼想了解的風水命理問題嗎？

我可以為你分析以下領域的風水運勢：

🌸 **感情** - 桃花運、姻緣配對
💼 **工作** - 事業發展、職場運勢
💰 **財運** - 投資理財、收入提升
🌿 **健康** - 身心調理、養生建議

你對哪一種有興趣？`]},n=i[e.greetingType||"direct"]||i.direct;return{analysisType:"greeting",isEnhanced:!0,requiresAIAnalysis:!1,isWithinScope:!0,detectedTopic:"問候",specificProblem:"閒聊問候",confidence:.95,response:n[Math.floor(Math.random()*n.length)],greetingData:e}}detectContextualInput(e){for(let t of[/(.+?)[，,]\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,]\s*(.+)/,/(.+?)\s+(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)\s+(.+)/]){let i=e.match(t);if(i){let t,n;/\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?/.test(i[1])?(n=i[1],t=i[2]):(t=i[1],n=i[2]);let r=this.analyzeProblemType(t);return{hasContext:!0,problem:t.trim(),birthday:n.trim(),problemType:r,originalMessage:e}}}return{hasContext:!1}}detectKnowledgeQuery(e){for(let t of[/什麼是(.+?)[\?？]?$/,/(.+?)是什麼[\?？]?$/,/(.+?)是什麼意思[\?？]?$/,/解釋一下(.+?)[\?？]?$/,/(.+?)的意思[\?？]?$/,/請問(.+?)[\?？]?$/,/(.+?)怎麼解釋[\?？]?$/,/(.+?)代表什麼[\?？]?$/]){let i=e.match(t);if(i){let t=i[1].trim();if(this.fengShuiTerms[t])return{isKnowledgeQuery:!0,term:t,queryType:"definition",originalMessage:e}}}for(let t of Object.keys(this.fengShuiTerms))if(e.includes(t)&&e.length<50)return{isKnowledgeQuery:!0,term:t,queryType:"mention",originalMessage:e};return{isKnowledgeQuery:!1}}detectProfessionalQuery(e){for(let t of[/提供什麼服務/,/有什麼服務/,/你們的服務/,/我們是如何運作/,/如何運作/,/怎麼運作/,/如何收費/,/準確率/,/可信度/,/怎麼算/,/報告包含什麼/,/需要提供什麼資料/,/想了解.*服務/,/服務內容/,/有哪些服務/])if(t.test(e))return{isProfessional:!0,queryType:"service_inquiry",originalMessage:e};return{isProfessional:!1}}analyzeProblemType(e){for(let[t,i]of Object.entries({work_problem:["工作沒了","失業","被裁","找不到工作","跳槽失敗"],relationship_issue:["分手","感情不順","單身","戀愛困難","婚姻問題"],financial_concern:["沒錢","經濟困難","投資失敗","虧錢","財運差"],health_worry:["身體不好","生病","健康問題","體質差"],career_confusion:["不知道做什麼","迷茫","方向不明","職業規劃"]}))if(i.some(t=>e.includes(t)))return t;return"general_concern"}async handleBaziInput(e,t){let{baziString:i,pillars:n,concern:r}=e;return{analysisType:"bazi_analysis",isEnhanced:!0,requiresAIAnalysis:!0,isWithinScope:!0,detectedTopic:this.mapTopicToValidEnum(r),specificProblem:`八字分析：${r}`,needsGeneralAnalysis:!0,confidence:.95,baziData:e,originalBaziString:i}}async handleContextualInput(e,t){let{problem:i,birthday:n,problemType:r}=e;return{analysisType:"contextual",isEnhanced:!0,response:this.generateContextualResponse(i,n,r),isWithinScope:!0,detectedTopic:this.mapProblemTypeToTopic(r),specificProblem:i,confidence:.9,contextData:e}}handleKnowledgeQuery(e,t){let{term:i}=e;return{analysisType:"knowledge_explanation",isEnhanced:!0,requiresAIAnalysis:!0,isWithinScope:!0,detectedTopic:"風水知識",specificProblem:`詢問${i}的含義`,confidence:.95,knowledgeQuery:{term:i,originalMessage:t,isKnowledgeRequest:!0,requestedExplanation:`請解釋什麼是${i}，不超過200字，要專業但易懂`},knowledgeData:e}}handleProfessionalQuery(e,t){return{analysisType:"service_explanation",isEnhanced:!0,response:`🌟 很高興你對我們的服務感興趣！

**我們的專業風水命理分析包含：**

🏠 **風水佈局規劃**
• 居家/辦公空間優化
• 個人化吉位測算
• 開運物品建議

🔮 **個人命理分析**
• 基於生辰八字的深度解析
• 性格特質與天賦發掘
• 人生運勢走向預測

� **專業運勢報告**
針對不同人生領域提供深度分析：
• 🌿 **健康運勢** - 身心調理指導、養生建議
• 💰 **財運分析** - 投資理財時機、收入提升方案  
• 💼 **事業發展** - 職場運勢、升遷轉職建議
• � **感情姻緣** - 桃花運勢、情感發展預測
• 💕 **八字合婚** - 雙方配對分析、關係和諧建議

📊 **運作方式：**
1. 提供基本資料（生日、性別）
2. AI智能初步分析 + 專業命理師覆核
3. 生成個人化詳細報告
4. 提供具體改善建議

**準確率說明：**
我們結合傳統命理學與現代數據分析，準確率達85%以上，特別在性格分析和趨勢預測方面表現優異。

想要開始分析嗎？只需要告訴我你的生日就可以了！✨`,isWithinScope:!0,detectedTopic:"服務諮詢",specificProblem:"了解服務內容",confidence:.95}}generateBaziAnalysis(e,t){let{year:i,month:n,day:r,hour:s}=e,o=this.analyzeBaziElements(e),a=`哇！你提供的八字很清楚呢！✨

**你的命盤：**
年柱：${i}  月柱：${n}  日柱：${r}  時柱：${s}

從你的八字來看：`;return"財運"===t?a+=`
💰 **財運特點：**
• 命中${o.dominant}氣較旺，適合${this.getCareerSuggestion(o.dominant)}
• 財星${o.wealth}，${this.getWealthAnalysis(o)}
• 今年運勢${this.getCurrentYearLuck()}

**具體建議：**
• 投資方向：${this.getInvestmentAdvice(o)}
• 開運顏色：${this.getLuckyColors(o)}
• 最佳時機：${this.getBestTiming()}`:"感情"===t?a+=`
💕 **感情運勢：**
• 你的桃花位在${this.getPeachBlossomPosition(e)}
• 感情模式：${this.getLovePattern(o)}
• 適合對象：${this.getSuitablePartner(o)}

**感情建議：**
• 有利時間：${this.getLoveTimings()}
• 開運方位：${this.getLoveDirections()}
• 注意事項：${this.getLoveWarnings(o)}`:a+=`
🌟 **整體運勢：**
• 命格特點：${this.getPersonalityTraits(o)}
• 天賦領域：${this.getTalentAreas(o)}
• 發展建議：${this.getDevelopmentAdvice(o)}`,a+=`

想要更詳細的分析和具體改善方案嗎？我可以為你製作完整的${t}報告，包含：
📈 深度運勢分析
🎯 個人化建議方案
🏠 相關風水佈局
⭐ 重要時機把握

現在就為你準備專業報告嗎？`}generateContextualResponse(e,t,i){let n={work_problem:"失業真的很讓人焦慮呢... 抱抱你！\uD83E\uDD17 不過這也許是新機會的開始哦！",relationship_issue:"感情的事情總是最讓人牽掛... 我理解你的心情 \uD83D\uDC9C",financial_concern:"經濟壓力確實很大，不過困難是暫時的！讓我幫你看看轉機在哪裡 \uD83D\uDCAA",health_worry:"身體健康最重要，要好好照顧自己呢 \uD83C\uDF3F",general_concern:"聽起來你遇到了一些挑戰，讓風鈴來幫你分析一下！"},r=n[i]||n.general_concern,s=this.extractBirthYear(t),o=this.getZodiacSign(t),a=new Date().getFullYear()-s,c=`${r}

從你的生日 ${t} 來看，你${s}年出生，今年${a}歲`;return o&&(c+=`，是${o}`),c+=`，正值人生的重要階段呢！

**根據你的情況分析：**`,"work_problem"===i?c+=`
🌟 你的出生年份顯示你很有適應力和創新精神
🎯 目前這個階段對你來說是轉機年，舊的結束意味著新的開始
💪 適合考慮轉向新興領域或發揮創意才能

**當前建議：**
• 可以考慮線上工作或創意產業
• 近期（未來3個月）是求職的好時機
• 面試時建議穿著穩重色系增加成功率`:"relationship_issue"===i?c+=`
💕 你的命格顯示有著深厚的感情運勢
🌸 雖然現在遇到挫折，但桃花運其實很不錯
✨ 重要的是要先學會愛自己，好的感情才會來

**感情建議：**
• 這段時間適合充實自己，提升內在魅力
• 參加社交活動能帶來新的緣分
• 保持正面心態，好運自然會來`:c+=`
🔮 你的生日顯示這是個重要的轉折期
⭐ 雖然現在有挑戰，但也蘊含著新的機遇
🌈 關鍵是要掌握正確的時機和方法`,c+=`

想要更詳細的分析和解決方案嗎？告訴我你是男生還是女生，我就能為你做完整的命理分析，找出最適合的改善方法！

風鈴的分析報告會包含：
🎯 問題根源分析
📈 改善時機建議  
🏠 相關風水調整
💫 開運方法指導

讓我來幫你化解困境，迎接好運！✨`}analyzeBaziElements(e){return{dominant:"火",wealth:"透出",balance:"偏旺"}}extractBirthYear(e){let t=e.match(/(\d{4})/);return t?parseInt(t[1]):null}getZodiacSign(e){let t=this.extractBirthYear(e);return t?["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"][(t-1900)%12]:null}mapProblemTypeToTopic(e){return({work_problem:"工作",relationship_issue:"感情",financial_concern:"工作",health_worry:"健康",career_confusion:"工作",general_concern:"工作"})[e]||"工作"}mapTopicToValidEnum(e){return({風水知識:"風水佈局",風水佈局:"風水佈局",服務諮詢:"感情",綜合運勢:"工作",命理:"感情",其他:"感情",工作:"工作",感情:"感情",財運:"財運",健康:"健康",人際關係:"人際關係",子女:"子女",因緣:"工作"})[e]||"工作"}getCareerSuggestion(e){return"金融科技相關行業"}getWealthAnalysis(e){return"有不錯的賺錢能力，但需注意理財"}getCurrentYearLuck(){return"整體向上，下半年更佳"}getInvestmentAdvice(e){return"穩健型投資，避免高風險投機"}getLuckyColors(e){return"金色、白色、藍色"}getBestTiming(){return"春秋兩季，上午時段"}getPeachBlossomPosition(e){return"東南方"}getLovePattern(e){return"深情專一型，重視精神交流"}getSuitablePartner(e){return"溫和穩重、有共同興趣的對象"}getLoveTimings(){return"春季和秋季，特別是3月和9月"}getLoveDirections(){return"東南方和西北方"}getLoveWarnings(e){return"避免過於急躁，感情需要時間培養"}getPersonalityTraits(e){return"理性務實，有領導才能"}getTalentAreas(e){return"分析判斷、計劃執行、團隊協調"}getDevelopmentAdvice(e){return"發揮組織能力，適合管理或專業技術路線"}}e.exports=t},77598:e=>{"use strict";e.exports=require("node:crypto")},78335:()=>{},81902:(e,t,i)=>{"use strict";i.r(t),i.d(t,{patchFetch:()=>I,routeModule:()=>A,serverHooks:()=>C,workAsyncStorage:()=>_,workUnitAsyncStorage:()=>P});var n={};i.r(n),i.d(n,{POST:()=>$});var r=i(96559),s=i(48088),o=i(37719),a=i(32190),c=i(14807),l=i(56364),p=i(45012),d=i(41926),u=i(7072),g=i(56037),m=i.n(g);let y=new(m()).Schema({sessionId:{type:String,required:!0,index:!0},messageId:{type:String,required:!0,unique:!0},timestamp:{type:Date,default:Date.now},userMessage:{type:String,required:!0},assistantResponse:{type:String,required:!0},contextData:{detectedTopic:String,confidence:Number,emotionalState:String,urgencyLevel:String,extractedEntities:[String],topicTransition:{fromTopic:String,toTopic:String,transitionType:String,smoothness:Number}},responseQuality:{score:Number,confidence:String,validationPassed:Boolean,repairApplied:Boolean},userEngagement:{responseTime:Number,messageLength:Number,engagementScore:Number,satisfactionIndicators:[String]}}),h=m().models.ConversationHistory||m().model("ConversationHistory",y);class f{constructor(){this.maxContextLength=15,this.maxTopicHistory=8,this.contextDecayHours=24,this.entityPatterns={dates:/(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2})/g,names:/(我叫|我是|名字是)([^，。\s]{2,4})/g,relationships:/(男友|女友|老公|老婆|伴侶|對象)/g,emotions:/(開心|難過|擔心|焦慮|困擾|煩惱|害怕|期待|希望)/g,timeframes:/(最近|這幾天|上個月|去年|明年|下個月)/g},this.topicRelationships={感情:{highly_related:["人際關係","因緣"],moderately_related:["子女","健康"],distantly_related:["財運","工作"],unrelated:["居家佈局"]},財運:{highly_related:["工作"],moderately_related:["居家佈局","因緣"],distantly_related:["人際關係"],unrelated:["感情","子女","健康"]},工作:{highly_related:["財運","人際關係"],moderately_related:["健康","因緣"],distantly_related:["感情"],unrelated:["子女","居家佈局"]},健康:{highly_related:["居家佈局"],moderately_related:["工作","感情"],distantly_related:["財運"],unrelated:["人際關係","子女","因緣"]},人際關係:{highly_related:["感情","工作"],moderately_related:["因緣"],distantly_related:["財運","子女"],unrelated:["健康","居家佈局"]},子女:{highly_related:["感情","因緣"],moderately_related:["健康"],distantly_related:["人際關係"],unrelated:["財運","工作","居家佈局"]},因緣:{highly_related:["感情","子女"],moderately_related:["人際關係","財運","工作"],distantly_related:["健康"],unrelated:["居家佈局"]},居家佈局:{highly_related:["健康","財運"],moderately_related:[],distantly_related:["工作"],unrelated:["感情","人際關係","子女","因緣"]}}}async preserveConversationContext(e,t,i,n){try{let r=`${e}-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,s=this.extractEntities(t),o=await this.getRecentHistory(e,5),a=this.analyzeTopicTransition(o,n.detectedTopic),c=await this.calculateUserEngagement(e,t,o),l=new h({sessionId:e,messageId:r,userMessage:t,assistantResponse:i,contextData:{detectedTopic:n.detectedTopic,confidence:n.confidence,emotionalState:n.emotionalState,urgencyLevel:n.urgencyLevel,extractedEntities:s,topicTransition:a},responseQuality:{score:n.responseQuality?.score||.8,confidence:n.responseQuality?.confidence||"medium",validationPassed:n.responseQuality?.passed||!0,repairApplied:n.responseQuality?.repairApplied||!1},userEngagement:c});await l.save();let p=await this.generateEnhancedContext(e);return console.log("\uD83D\uDCBE Enhanced conversation context preserved:",{messageId:r,topic:n.detectedTopic,transition:a.transitionType,engagement:c.engagementScore}),p}catch(i){return console.error("\uD83D\uDEA8 Enhanced context preservation error:",i),this.fallbackContextPreservation(e,t,n)}}extractEntities(e){let t=[];for(let[i,n]of Object.entries(this.entityPatterns)){let r=[...e.matchAll(n)];r.length>0&&t.push({type:i,values:r.map(e=>e[0]||e[2]||e[1]),count:r.length})}return t}async getRecentHistory(e,t=10){try{let i=new Date(Date.now()-36e5*this.contextDecayHours);return await h.find({sessionId:e,timestamp:{$gte:i}}).sort({timestamp:-1}).limit(t).lean()}catch(e){return console.error("\uD83D\uDEA8 Error fetching conversation history:",e),[]}}analyzeTopicTransition(e,t){let i,n;if(!e.length)return{transitionType:"new_conversation",fromTopic:null,toTopic:t,smoothness:1,explanation:"開始新的對話"};let r=e[0],s=r.contextData?.detectedTopic;if(!s||s===t)return{transitionType:"topic_continuation",fromTopic:s,toTopic:t,smoothness:.95,explanation:"繼續討論同一話題"};let o=this.getTopicRelationship(s,t);switch(o){case"highly_related":i="smooth_transition",n=.9;break;case"moderately_related":i="related_transition",n=.7;break;case"distantly_related":i="topic_shift",n=.5;break;default:i="topic_jump",n=.3}let a=this.detectTopicOscillation(e,t);return a&&(n-=.2),{transitionType:i,fromTopic:s,toTopic:t,smoothness:Math.max(n,.1),explanation:this.generateTransitionExplanation(s,t,o),oscillationDetected:a}}getTopicRelationship(e,t){let i=this.topicRelationships[e];if(!i)return"unrelated";for(let[e,n]of Object.entries(i))if(n.includes(t))return e;return"unrelated"}detectTopicOscillation(e,t){if(e.length<3)return!1;let i=e.slice(0,4).map(e=>e.contextData?.detectedTopic).filter(Boolean),n=i[0];return i.slice(1).includes(t)&&n!==t}generateTransitionExplanation(e,t,i){return({highly_related:`${e}和${t}有密切關聯`,moderately_related:`從${e}延伸到${t}是合理的`,distantly_related:`${e}和${t}有些關聯`,unrelated:`從${e}轉向${t}是全新的方向`})[i]||`話題從${e}轉到${t}`}async calculateUserEngagement(e,t,i){let n=t.length,r=null,s=.5;if(i.length>0){let e=i[0];(r=Date.now()-new Date(e.timestamp).getTime())<3e4?s+=.2:r<3e5?s+=.1:r>36e5&&(s-=.2)}n>50?s+=.2:n<10&&(s-=.1);let o=this.detectSatisfactionIndicators(t);o.length>0&&(s+=.3);let a=this.detectFrustrationIndicators(t);return a.length>0&&(s-=.3),{responseTime:r,messageLength:n,engagementScore:Math.max(0,Math.min(1,s)),satisfactionIndicators:o,frustrationIndicators:a}}detectSatisfactionIndicators(e){let t=[];return[/謝謝|感謝|太好了|很棒|有幫助|明白了|清楚了/g,/讚|👍|好的|收到|了解/g].forEach(i=>{let n=e.match(i);n&&t.push(...n)}),[...new Set(t)]}detectFrustrationIndicators(e){let t=[];return[/不懂|不明白|看不懂|聽不懂|糊塗|困惑/g,/重複|又是|還是|一樣的|沒用/g,/算了|不要了|不問了|放棄/g].forEach(i=>{let n=e.match(i);n&&t.push(...n)}),[...new Set(t)]}async generateEnhancedContext(e){try{let t=await this.getRecentHistory(e,this.maxContextLength);if(!t.length)return{conversationDepth:0,dominantTopics:[],emotionalJourney:[],engagementTrend:"neutral",contextSummary:"新的對話開始"};let i=this.analyzeTopicDistribution(t),n=this.analyzeEmotionalJourney(t),r=this.analyzeEngagementTrend(t),s=this.detectConversationPatterns(t);return{conversationDepth:t.length,dominantTopics:i.slice(0,3),emotionalJourney:n,engagementTrend:r,conversationPatterns:s,contextSummary:this.generateContextSummary(t),recommendations:this.generateContextualRecommendations(i,n,r)}}catch(e){return console.error("\uD83D\uDEA8 Error generating enhanced context:",e),{conversationDepth:0,error:"Context generation failed"}}}analyzeTopicDistribution(e){let t={};return e.forEach(e=>{let i=e.contextData?.detectedTopic;i&&(t[i]=(t[i]||0)+1)}),Object.entries(t).sort(([,e],[,t])=>t-e).map(([t,i])=>({topic:t,count:i,percentage:i/e.length}))}analyzeEmotionalJourney(e){return e.slice(0,5).reverse().map(e=>({timestamp:e.timestamp,emotionalState:e.contextData?.emotionalState||"neutral",urgencyLevel:e.contextData?.urgencyLevel||"medium"}))}analyzeEngagementTrend(e){let t=e.slice(0,5).map(e=>e.userEngagement?.engagementScore||.5);if(t.length<2)return"neutral";let i=t.slice(0,2).reduce((e,t)=>e+t)/2,n=t.slice(2),r=i-(n.length>0?n.reduce((e,t)=>e+t)/n.length:.5);return r>.1?"increasing":r<-.1?"decreasing":"stable"}detectConversationPatterns(e){let t=[];this.countTopicChanges(e)>.6*e.length&&t.push("topic_jumping"),this.detectRepetitiveQuestions(e)&&t.push("repetitive_questions");let i=this.analyzeTopicDistribution(e)[0];return i?.percentage>.7&&t.push("deep_dive"),e.some(e=>e.userMessage.includes("?")||e.userMessage.includes("？"))&&e.length>3&&t.push("information_gathering"),t}countTopicChanges(e){let t=0;for(let i=1;i<e.length;i++){let n=e[i].contextData?.detectedTopic,r=e[i-1].contextData?.detectedTopic;n&&r&&n!==r&&t++}return t}detectRepetitiveQuestions(e){let t=e.map(e=>e.contextData?.detectedTopic).filter(Boolean);return new Set(t).size<.5*t.length}generateContextSummary(e){let t=this.analyzeTopicDistribution(e)[0],i=e[0]?.contextData?.emotionalState||"neutral",n=e.length;return 1===n?`開始討論${t?.topic||"未知主題"}`:n<5?`初步探討${t?.topic||"多個主題"}，用戶情緒：${i}`:`深入討論${t?.topic||"多個主題"}（${n}輪對話），當前情緒：${i}`}generateContextualRecommendations(e,t,i){let n=[];"decreasing"===i&&n.push({type:"engagement",action:"vary_response_style",reason:"用戶參與度下降"}),e.length>3&&n.push({type:"focus",action:"suggest_topic_focus",reason:"話題分散，建議聚焦"});let r=t[t.length-1]?.emotionalState;return("worried"===r||"urgent"===r)&&n.push({type:"emotional_support",action:"provide_reassurance",reason:"用戶情緒需要支持"}),n}fallbackContextPreservation(e,t,i){return{conversationDepth:1,dominantTopics:[{topic:i.detectedTopic,count:1}],emotionalJourney:[{emotionalState:i.emotionalState}],engagementTrend:"neutral",contextSummary:"基本上下文保存",recommendations:[]}}async getConversationInsights(e){try{let t=await this.getRecentHistory(e,50);return{totalMessages:t.length,averageEngagement:this.calculateAverageEngagement(t),topicDistribution:this.analyzeTopicDistribution(t),emotionalProgression:this.analyzeEmotionalJourney(t),conversationQuality:this.assessConversationQuality(t),userSatisfaction:this.estimateUserSatisfaction(t)}}catch(e){return console.error("\uD83D\uDEA8 Error getting conversation insights:",e),null}}calculateAverageEngagement(e){let t=e.map(e=>e.userEngagement?.engagementScore).filter(e=>null!=e);return t.length>0?t.reduce((e,t)=>e+t)/t.length:.5}assessConversationQuality(e){let t=e.map(e=>e.responseQuality?.score).filter(e=>null!=e);return{averageQuality:t.length>0?t.reduce((e,t)=>e+t)/t.length:.5,repairRate:e.filter(e=>e.responseQuality?.repairApplied).length/Math.max(1,e.length),consistencyScore:this.calculateConsistencyScore(e)}}calculateConsistencyScore(e){let t=e.slice(1).map((t,i)=>t.contextData?.detectedTopic===e[i].contextData?.detectedTopic?1:.5);return t.length>0?t.reduce((e,t)=>e+t)/t.length:1}estimateUserSatisfaction(e){let t=e.flatMap(e=>e.userEngagement?.satisfactionIndicators||[]),i=e.flatMap(e=>e.userEngagement?.frustrationIndicators||[]),n=Math.max(0,t.length-i.length),r=this.calculateAverageEngagement(e);return{satisfactionScore:n,averageEngagement:r,overallSatisfaction:.3*n+.7*r}}}function S(e){if(!e||"string"!=typeof e)return null;let t=e.replace(/[年月日]/g,"-").replace(/[\/]/g,"-").replace(/\s+/g,"").replace(/-+/g,"-").replace(/^-|-$/g,"");for(let e of[/^(\d{4})-(\d{1,2})-(\d{1,2})$/,/^(\d{1,2})-(\d{1,2})-(\d{4})$/,/^(\d{4})(\d{2})(\d{2})$/]){let i=t.match(e);if(i){let t,n,r;e.source.includes("(\\d{4})-(\\d{1,2})-(\\d{1,2})")?[,t,n,r]=i:e.source.includes("(\\d{1,2})-(\\d{1,2})-(\\d{4})")?[,n,r,t]=i:[,t,n,r]=i;let s=new Date(parseInt(t),parseInt(n)-1,parseInt(r));if(!isNaN(s.getTime())&&s.getFullYear()>=1900&&2024>=s.getFullYear())return s}}return null}async function v(e){if(!e||"string"!=typeof e)return null;let t=null,i=null;try{let i=new T,n=await i.analyzeMessage(e);n&&n.isWithinScope&&"其他"!==n.detectedTopic&&(t=n.detectedTopic,console.log("\uD83E\uDD16 AI檢測到主題:",t,"信心度:",n.confidence))}catch(i){for(let[n,r]of(console.error("\uD83D\uDEA8 AI主題檢測失敗，使用備用關鍵詞檢測:",i),Object.entries({感情:["感情","愛情","戀愛","桃花","分手","復合","婚姻","單身","測感情"],工作:["工作","事業","職場","升職","跳槽","生意","經營","創業","公司","商業","工作運勢","測工作"],財運:["財運","財富","賺錢","投資","理財","收入","金錢","偏財","正財","橫財","測財運"],健康:["健康","身體","疾病","養生","調理","測健康","癌症","病","生病","手術","醫生","醫院","治療"]})))if(r.some(t=>e.includes(t))){console.log("\uD83D\uDD04 備用關鍵詞檢測到主題:",t=n);break}}for(let t of[/(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/g,/(\d{4}\-\d{1,2}\-\d{1,2})/g,/(\d{4}\/\d{1,2}\/\d{1,2})/g,/(\d{1,2}\/\d{1,2}\/\d{4})/g]){for(let n of e.matchAll(t)){let e=S(n[1]);if(e){console.log("\uD83D\uDCC5 檢測到生日:",(i={original:n[1],parsed:e,standardFormat:`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}).standardFormat);break}}if(i)break}return t&&i?(console.log("✅ 同時檢測到主題和生日:",t,"+",i.standardFormat),{hasTopicAndBirthday:!0,topic:t,birthday:i,originalMessage:e}):null}class T{constructor(){this.DEEPSEEK_API_KEY=process.env.DEEPSEEK_API_KEY||process.env.API_KEY,this.DEEPSEEK_API_URL="https://api.deepseek.com/chat/completions",console.log("\uD83D\uDD27 AITopicClassifier 初始化"),console.log("\uD83D\uDCCA DEEPSEEK_API_KEY:",this.DEEPSEEK_API_KEY?"已設置":"未設置"),console.log("\uD83C\uDF10 DEEPSEEK_API_URL:",this.DEEPSEEK_API_URL),this.conversationMemory=new Map,this.successPatterns=new Map,this.emotionalKeywords={urgent:["急","馬上","立刻","快","倒閉","完蛋","救命","緊急"],anxious:["焦慮","擔心","緊張","不安","害怕","煩惱"],confused:["迷茫","困惑","不知道","不懂","搞不清楚","不明白"],desperate:["沒辦法","絕望","完了","救救我","走投無路"],repeated:["還是","依然","仍然","又","再次","繼續"]},console.log("\uD83E\uDDE0 Minimal Enhancement Initialized"),this.supportedTopics={感情:["戀愛","分手","復合","合婚","桃花運","婚姻","感情運勢","感情","愛情","測感情"],財運:["賺錢","投資","理財","偏財運","正財運","破財","財運","測財運","財富","金錢"],工作:["升職","跳槽","職場運勢","事業發展","工作機會","職業規劃","工作","事業","生意","經營","創業","業務","公司","職場","工作問題","事業問題","生意問題","經營困難","業績","營收","商業","結束生意","關閉公司","停業","轉行","工作運勢","測工作","加薪","加人工","薪資","薪水","人工","加工資","薪資調整","收入提升","職場表現","工作壓力","老闆","主管","同事關係","職業發展","工作時機"],健康:["身體健康","疾病","養生","健康運勢","身體調理","健康","身體","測健康"],命理:["命理","八字","紫微斗數","命盤","流年","大運","命運","算命","占卜","預測","運勢","命格","五行","天干地支","命理分析","測命理","生辰八字","命理諮詢"],人際關係:["朋友關係","家庭關係","同事關係","社交運勢","人緣","人際關係","人際","朋友","測人際"],子女:["懷孕","生育","子女運","親子關係","教育","子女","小孩","測子女"],風水佈局:["風水","居家風水","辦公室風水","風水測量","風水調整","方位分析","擺設建議","風水原理","風水知識","佈局","測風水","風水方法"]},console.log("\uD83C\uDFAF supportedTopics 設置完成:",Object.keys(this.supportedTopics))}detectEmotionalState(e){let t={};return Object.entries(this.emotionalKeywords).forEach(([i,n])=>{t[i]=n.some(t=>e.includes(t))}),console.log("\uD83D\uDE0A Emotional state detected:",t),t}updateConversationHistory(e,t,i,n){if(!e)return;this.conversationMemory.has(e)||this.conversationMemory.set(e,{messages:[],successfulAdvice:[],preferredTopic:null,emotionalPattern:[],irrelevantCount:0,lastRelevantTopic:null});let r=this.conversationMemory.get(e);"其他"===n?(r.irrelevantCount++,console.log(`📊 Irrelevant question count: ${r.irrelevantCount}`)):(r.lastRelevantTopic=n,r.irrelevantCount>0&&(r.irrelevantCount=Math.max(0,r.irrelevantCount-1))),r.messages.push({message:t,response:i,topic:n,timestamp:new Date,isRelevant:"其他"!==n}),r.messages.length>5&&r.messages.shift(),console.log(`💭 Conversation history updated for ${e}: ${r.messages.length} messages, irrelevant: ${r.irrelevantCount}`)}getConversationContext(e){if(!e||!this.conversationMemory.has(e))return{hasHistory:!1,irrelevantCount:0};let t=this.conversationMemory.get(e);return{hasHistory:!0,messageCount:t.messages.length,recentMessages:t.messages.slice(-3),preferredTopic:t.preferredTopic,irrelevantCount:t.irrelevantCount||0,lastRelevantTopic:t.lastRelevantTopic}}determineRedirectLevel(e){return"gentle"}detectSpecificServiceRequest(e){let t=e.trim();for(let[e,i]of Object.entries({流年運勢分析:"命理",工作事業分析:"工作",感情運勢分析:"感情",感情分析:"感情",健康運勢:"健康",健康分析:"健康",財運分析:"財運",命理分析:"命理",八字分析:"命理"}))if(t.includes(e))return console.log(`✅ 檢測到具體服務要求: ${e} -> ${i}`),{serviceName:e,detectedTopic:i};return null}generateSpecificServiceGuide(e,t){let i={命理:`太好了！風鈴最擅長命理分析呢～✨

為了給你最準確的分析，請告訴風鈴你的**生日**：

📅 **請用以下格式提供生日：**
• 1999-03-15  
• 1999/3/15
• 1999年3月15日

我會為你提供專業的八字命理分析，包括流年運勢、五行特質和開運建議喔～💫`,感情:`太棒了！感情分析是風鈴的專業強項呢～💕

請提供你的**生日**，讓我幫你分析感情運勢：

📅 **請用以下格式提供生日：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

我會幫你分析桃花運勢、感情走向和最佳戀愛時機～🌸`,工作:`好的！工作事業運勢分析交給風鈴就對了～💼

請告訴我你的**生日**，讓我為你分析事業運程：

📅 **請用以下格式提供生日：**
• 1999-03-15
• 1999/3/15
• 1999年3月15日

我會分析你的職場運勢、事業發展機會和最佳轉職時機喔～✨`,健康:`健康運勢分析來了！風鈴會用心為你解讀～🌿

請提供你的**生日**，讓我分析你的健康運程：

📅 **請用以下格式提供生日：**
• 1999-03-15
• 1999/3/15
• 1999年3月15日

我會為你分析身心健康狀況、養生建議和保健重點～💚`,財運:`財運分析！風鈴最喜歡幫人看財運了～💰

請告訴我你的**生日**，讓我分析你的財富運勢：

📅 **請用以下格式提供生日：**
• 1999-03-15
• 1999/3/15
• 1999年3月15日

我會幫你看正財偏財、投資理財和招財開運方法喔～✨`};return i[t]||i["命理"]}updateConversationMemory(e,t,i,n={}){if(!e)return;this.conversationMemory.has(e)||this.conversationMemory.set(e,{messages:[],irrelevantCount:0,preferredTopic:null,lastRelevantTopic:null});let r=this.conversationMemory.get(e);r.messages.push({role:"user",content:t,timestamp:new Date},{role:"assistant",content:i,timestamp:new Date}),n.isServiceConfirmation&&(r.awaitingBirthday=!0),n.awaitingBirthday&&(r.awaitingBirthday=n.awaitingBirthday),r.messages.length>20&&(r.messages=r.messages.slice(-20)),this.conversationMemory.set(e,r),console.log(`💭 會話記憶已更新 ${e}:`,{messageCount:r.messages.length,awaitingBirthday:r.awaitingBirthday})}buildRedirectPrompt(e,t,i){let n=`現有服務範圍：
- 感情運勢分析（桃花運、合婚配對）
- 工作事業分析（職場運勢、事業發展）  
- 財運分析（投資理財、收入提升）
- 健康運勢（身心調理、養生建議）
- 命理分析（八字解讀、流年運勢）`;switch(t){case"firm":return`用戶問題：${e}

你是風鈴，用戶已經連續問了多個與風水命理無關的問題。需要友善但堅定地引導用戶使用你的專業服務。

重要指示：必須使用繁體中文回應，不可使用簡體中文，不要包含字數統計標記。

回應策略：
1. 簡短回答問題
2. 直接說明風水命理分析能解決更深層的問題
3. 主動推薦具體服務並說明價值
4. 創造緊迫感和需求感

語氣要求：友善但堅定，專注於服務銷售
${n}

重點：不要只是介紹服務，要說明為什麼用戶需要這些分析，強調能解決的問題和帶來的好處。

**結尾要求：**
- 根據用戶問題的內容，推薦1-2個最相關的服務
- 使用格式：想要開始分析的話，請輸入：「XXX分析」
- 不要列出所有5個服務，只推薦最相關的`;case"moderate":return`用戶問題：${e}

你是風鈴，用戶問了一些與風水命理無關的問題。需要在回答的同時積極推薦你的專業服務。

重要指示：必須使用繁體中文回應，不可使用簡體中文，不要包含字數統計標記。

回應策略：
1. 給出實用答案
2. 連結問題與運勢命理的關係
3. 說明專業分析能提供的具體幫助
4. 主動推薦最相關的服務並強調效果

${n}

重點：要讓用戶感覺到他們的問題其實與運勢有關，你的專業分析能提供更深層的解答。

**結尾要求：**
- 根據用戶問題的內容，推薦1-2個最相關的服務
- 使用格式：想了解的話，請輸入：「XXX分析」
- 不要列出所有5個服務，只推薦最相關的`;default:return`用戶問題：${e}

你是友善的風鈴，用戶問了一個與風水命理無關的問題。請給用戶實用回答，然後積極引導他們了解你的專業服務。

重要指示：必須使用繁體中文回應，不可使用簡體中文，不要包含字數統計標記。

回應要求：
1. 先給出實用的答案或建議（要具體有用）
2. 巧妙連結問題與命理運勢的關係
3. 說明你的專業分析能提供更深入的幫助
4. 推薦最相關的服務並強調能解決的問題
5. 用風鈴的親切語氣，但要展現專業權威性

${n}

重點：不只是回答表面問題，要讓用戶意識到背後可能有運勢因素，你的專業分析能提供根本解決方案。主動創造需求，不要只是被動介紹服務。

**結尾要求：**
- 根據用戶問題，推薦1-2個最相關的服務
- 使用格式：想要開始分析的話，請輸入：「XXX分析」
- 例如：食物相關推薦「健康運勢」，工作相關推薦「工作事業分析」，感情相關推薦「感情分析」等
- 不要列出所有5個服務選項`}}async generateCareerFlow(e,t){try{let i=e.aiResponse;if(i){console.log("✅ 使用已有的 AI 工作分析結果");let e=`哎呀親愛的別擔心，風鈴來幫你啦！💼✨

`,t=`

首先檢查店家大門是否暢通無阻，家門口可以擺放綠色植物招財🌱。要保持整潔明亮，最好面向門口才能接住財氣！東南方擺個流水擺設或魚缸，讓財運流動起來～

記得把破損的物品都修好，這代表修補財路哦！保持店面光線充足，正能量滿滿生意就會好轉的！加油！🌟`;i=e+i+t}else{let n=e.specificProblem||t;i=await this.generateAIResponse(`用戶說: "${t}"
					
	分析結果: ${n}

	請以風鈴的身份，針對這個具體的工作/生意問題，提供相關的風水建議和回應。

	回應要求:
	1. 要親切友善，用風鈴的語氣
	2. 針對具體問題給出相關風水建議
	3. 包含實用的風水佈局建議
	4. 保持正面積極的態度
	5. 不要超過200字

	風鈴語氣特點: 親切、專業、帶有一點可愛的語氣，會用✨💼🌱等emoji`)}return i+`

告訴風鈴你的生日，我可以幫你看看事業運勢和最佳發展時機！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}catch(i){console.error("AI生成工作回應失敗:",i);let e=specificProblem.toLowerCase(),t="";return(e.includes("生意")||e.includes("經營")||e.includes("創業")?`聽到你在生意經營上遇到問題，我完全理解這種困擾！💼

**生意風水的關鍵要素：**
🏢 店面或辦公室的位置和朝向很重要
💰 收銀台要背靠實牆，面向大門
🌱 在財位放置綠色植物能催旺生意
🔥 適當的照明和通風讓財氣流通

生意的成敗不只看努力，時機和風水佈局也很關鍵！`:e.includes("升職")||e.includes("晉升")||e.includes("職場")?`哇～想升職呀！風鈴知道一個小秘密哦！✨

辦公桌要對著門口坐，這樣機會才會看到你～  
還有！左邊放綠色小盆栽，右邊放黃色小東西，這樣老闆就會注意到你啦！

想不想知道更多升職的小魔法呀？`:`了解到你在工作上遇到挑戰，讓風鈴來幫你分析一下！💪

**工作運勢提升建議：**
🎯 保持工作區域整潔有序
🌟 在辦公桌放置小型水晶增強能量  
📋 定期檢視和調整工作目標
🤝 維持良好的人際關係`)+`

告訴風鈴你的生日，我可以幫你看看事業運勢和最佳發展時機！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}}async generateWealthFlow(e,t){try{let i=e.aiResponse;if(i){console.log("✅ 使用已有的 AI 財運分析結果");let e=`哇～你想了解財運呀！風鈴最喜歡幫人解決問題啦！✨

`,t=`

建議在家中或辦公室的東南方（財位）擺放招財植物如發財樹或金錢樹🌱 保持這個區域乾淨明亮，可以放個小型流水擺件讓財氣流動！錢包要保持整潔，避免放太多雜物～💰

記得門口要保持暢通，不要堆積雜物阻擋財運進入哦！正面心態也很重要，相信自己的財運會越來越好！加油！🌟`;i=e+i+t}else{let n=e.specificProblem||t;i=await this.generateAIResponse(`用戶說: "${t}"
					
	分析結果: ${n}

	請以風鈴的身份，針對這個具體的財運問題，提供相關的風水建議和回應。

	回應要求:
	1. 要親切友善，用風鈴的語氣
	2. 針對具體問題給出相關財運風水建議
	3. 包含實用的招財風水佈局建議
	4. 保持正面積極的態度
	5. 不要超過200字

	風鈴語氣特點: 親切、專業、帶有一點可愛的語氣，會用✨💰🌱等emoji`)}return i+`

告訴風鈴你的生日，我可以幫你看看財運方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}catch(e){return console.error("AI生成財運回應失敗:",e),`哇～你想了解財運呀！風鈴最喜歡幫人解決問題啦！✨

每個人的運勢都不一樣呢，就像每個人的生日不一樣一樣！

告訴風鈴你的生日，我可以幫你看看財運方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}}async generateHealthFlow(e,t){try{let i=e.aiResponse;if(i){console.log("✅ 使用已有的 AI 健康分析結果");let e=`親愛的別太擔心～風鈴給你暖暖的擁抱💚

`,t=`

建議可以先調整臥室的風水喔！床頭要靠實牆，避免對門或窗，這樣能穩定氣場🌿 在東方擺放綠色植物或水晶，能增強健康運勢✨

記得保持房間空氣流通，光線充足，也可以放些讓人放鬆的柔和音樂～最重要的是要配合醫生的治療，保持正面心情喔！加油！💪`;i=e+i+t}else{let n=e.specificProblem||t;i=await this.generateAIResponse(`用戶說: "${t}"
					
	分析結果: ${n}

	請以風鈴的身份，針對這個具體的健康問題，提供相關的風水建議和回應。

	回應要求:
	1. 要親切友善，用風鈴的語氣
	2. 針對具體問題給出相關健康風水建議
	3. 包含實用的養生風水佈局建議
	4. 保持正面積極的態度
	5. 不要超過200字

	風鈴語氣特點: 親切、專業、帶有一點可愛的語氣，會用✨🌿💚等emoji`)}return i+`

告訴風鈴你的生日，我可以幫你看看健康方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}catch(e){return console.error("AI生成健康回應失敗:",e),`哇～你想了解健康呀！風鈴最喜歡幫人解決問題啦！✨

每個人的運勢都不一樣呢，就像每個人的生日不一樣一樣！

告訴風鈴你的生日，我可以幫你看看健康方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}}async generateMingliFlow(e,t){try{let i=e.aiResponse;if(i){console.log("✅ 使用已有的 AI 命理分析結果");let e=`親愛的～命理的世界真的很神奇呢！風鈴來幫你解析💫

`,t=`

命理配合風水佈局效果更好哦！可以在家中財位擺放水晶或招財植物🔮 根據你的八字五行調整居家色彩，比如缺水的話可以多用藍色系✨

記得保持心境平和，積極正面的心態也是改運的關鍵！配合適當的風水調整，運勢會越來越好的～加油！💪`;i=e+i+t}else{let n=e.specificProblem||t;i=await this.generateAIResponse(`用戶說: "${t}"
					
	分析結果: ${n}

	請以風鈴的身份，針對這個具體的命理問題，提供相關的風水建議和回應。

	回應要求:
	1. 要親切友善，用風鈴的語氣
	2. 針對具體問題給出相關命理風水建議
	3. 包含實用的運勢提升和風水佈局建議
	4. 保持正面積極的態度
	5. 不要超過200字

	風鈴語氣特點: 親切、專業、帶有一點可愛的語氣，會用✨🔮💫等emoji`)}return i+`

告訴風鈴你的生日，我可以幫你做命理分析哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的命理分析，如果你覺得有幫助，還可以做更詳細的完整八字報告哦～🔮💕`}catch(e){return console.error("AI生成命理回應失敗:",e),`哇～你想了解命理呀！風鈴最喜歡幫人解析運勢啦！🔮✨

每個人的命理格局都不一樣呢，就像每顆星星的位置都獨一無二！

告訴風鈴你的生日，我可以幫你做命理分析哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的命理分析，如果你覺得有幫助，還可以做更詳細的完整八字報告哦～🔮💕`}}generateRelationshipFlow(e,t){if(e.aiResponse){console.log("✅ 使用已有的 AI 人際關係分析結果");let t=`

建議在家中或辦公室的西北方（貴人位）擺放水晶或金屬擺飾，增強人際關係運勢！保持笑容和正面態度，好人緣自然會來～👥

記得要多主動關心身邊的人，真誠待人最重要！也可以穿戴粉色系的配飾，增加親和力哦！💕`;return`哇～你想了解人際關係呀！風鈴最喜歡幫人解決問題啦！✨

`+e.aiResponse+t+`

告訴風鈴你的生日，我可以幫你看看人際關係方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}return`哇～你想了解人際關係呀！風鈴最喜歡幫人解決問題啦！✨

每個人的運勢都不一樣呢，就像每個人的生日不一樣一樣！

告訴風鈴你的生日，我可以幫你看看人際關係方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}generateDefaultFlow(e,t){if(e.aiResponse){console.log("✅ 使用已有的 AI 默認分析結果");let t=e.detectedTopic||"運勢",i=`

保持正面的心態和積極的能量很重要！可以在家中擺放一些綠色植物或水晶，增強正能量流動。記住，好運需要好心情配合～✨`;return`哇～你想了解${t}呀！風鈴最喜歡幫人解決問題啦！✨

`+e.aiResponse+i+`

告訴風鈴你的生日，我可以幫你看看${t}方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}return`哇～你想了解${e.detectedTopic}呀！風鈴最喜歡幫人解決問題啦！✨

每個人的運勢都不一樣呢，就像每個人的生日不一樣一樣！

告訴風鈴你的生日，我可以幫你看看${e.detectedTopic}方面的運勢哦！

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`}generateServiceMenu(){return`

我可以為你分析以下領域的風水運勢：

🌸 **感情** - 桃花運、姻緣配對
💼 **工作** - 事業發展、職場運勢
💰 **財運** - 投資理財、收入提升
🌿 **健康** - 身心調理、養生建議

你想了解哪一種？？？？`}async analyzeMessage(e,t=null){try{if(this.isGreeting(e)){console.log("\uD83D\uDC4B 檢測到問候語，使用專用回應");let i=this.generateGreetingResponse();return t&&this.updateConversationHistory(t,e,i.aiResponse,i.detectedTopic),i}let i=this.detectEmotionalState(e),n=this.getConversationContext(t),r=this.buildEnhancedAnalysisPrompt(e,i,n),s=await this.callDeepSeekAPI([{role:"system",content:r},{role:"user",content:e}]),o=JSON.parse(s.choices[0].message.content);return console.log("\uD83E\uDD16 Enhanced AI Analysis Result:",o),t&&this.updateConversationHistory(t,e,o.aiResponse,o.detectedTopic),o}catch(t){return console.error("\uD83D\uDEA8 AI 分析失敗:",t),this.getFallbackAnalysis(e)}}isGreeting(e){return[/^(你好|您好|嗨|哈囉|hello|hi)([，,！!。.]|\s*$)/i,/^(早安|晚安|午安)([，,！!。.]|\s*$)/i,/^(風鈴)([，,！!。.]|\s*$)/i].some(t=>t.test(e.trim()))}generateGreetingResponse(){return{isWithinScope:!0,detectedTopic:"問候",specificProblem:"用戶問候",confidence:.95,aiResponse:`你好呀～我是風鈴！✨ 很高興認識你！

我是專業的風水命理師，可以幫你分析人生各方面的運勢。無論你在感情、工作、財運或健康方面遇到什麼問題，我都很樂意為你提供專業的風水分析和建議！

你現在有什麼特別想了解的問題嗎？還是想先看看我能提供哪些服務呢？`,serviceRecommendation:""}}buildAnalysisPrompt(e){return this.isGreeting(e)?null:`你是專業的風水命理分析師，請分析用戶的問題並分類。

重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 在回應中所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，不要使用農歷 3. 不要在回應中包含字數統計標記。

我們提供的服務領域：
- 感情：戀愛、分手、復合、合婚、桃花運、婚姻
- 財運：賺錢、投資、理財、偏財運、正財運、個人財富  
- 工作：升職、跳槽、職場運勢、事業發展、工作機會、生意經營、創業、公司營運、商業決策
- 健康：身體健康、疾病、養生、健康運勢

請分析用戶訊息並返回 JSON 格式：

{
    "isWithinScope": true/false,
    "detectedTopic": "感情|財運|工作|健康|其他",
    "specificProblem": "簡潔問題描述 - 如果用戶只說'感情'就寫'一般感情諮詢'，'財運'就寫'一般財運諮詢'",
    "confidence": 0.8,
    "aiResponse": "禮貌回應用戶訊息，如果不在服務範圍內請提供友善的確認回應",
    "serviceRecommendation": "建議用戶使用我們的哪項服務"
}

**重要分類規則：**
1. 生意經營、創業、公司營運、商業決策 → 歸類為「工作」
2. 個人投資、理財、財富增長 → 歸類為「財運」 
3. 如果用戶輸入很簡單（如只是"感情"、"財運"），specificProblem應該保持簡潔，如"一般感情諮詢"或"一般財運諮詢"
4. 如果問題不在我們服務範圍內（如天氣、科技、日常閒聊等），請設定 isWithinScope 為 false，並在 aiResponse 中提供禮貌友善的回應，自然地確認用戶的話題
5. 對於數字或選擇類輸入（如"1"、"2"），通常表示用戶在回應選項，設為不在範圍內
6. aiResponse 應該禮貌回應用戶，不要直接說"不在服務範圍"，而是自然地承接話題
7. 在 serviceRecommendation 中智能引導到相關的風水服務

用戶訊息：${e}`}buildEnhancedAnalysisPrompt(e,t,i){let n=`你是專業的風水命理分析師，請分析用戶的問題並分類。

重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 在回應中所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，不要使用農歷 3. 不要在回應中包含字數統計標記。

我們提供的服務領域：
- 感情：戀愛、分手、復合、合婚、桃花運、婚姻、感情問題、約會、結婚
- 財運：賺錢、投資、理財、偏財運、正財運、個人財富、投資收益、財務狀況  
- 工作：升職、跳槽、職場運勢、事業發展、工作機會、生意經營、創業、公司營運、商業決策、加薪、加人工、薪資調整、職場表現、工作壓力、同事關係、老闆關係、職業發展
- 健康：身體健康、疾病、養生、健康運勢、醫療、身體不適、精神健康

**重要分類指導：**
- 加薪、加人工、薪資調整、收入提升等問題應歸類為「工作」
- 投資、理財、財富增長等問題應歸類為「財運」
- 職場人際關係、與同事/老闆的關係問題應歸類為「工作」
- 一般朋友、家庭關係問題應歸類為「人際關係」`,r="";t.urgent&&(r+="\n⚠️ 用戶情況緊急，請提供立即可行的建議，語氣要安撫和支持。"),t.anxious&&(r+="\n\uD83D\uDC99 用戶顯得焦慮，請用溫暖同理的語氣回應。"),t.confused&&(r+="\n\uD83D\uDD0D 用戶感到迷茫，請提供清晰具體的步驟指導。"),t.desperate&&(r+="\n\uD83E\uDD17 用戶情緒低落，請優先提供心理支持和希望。"),t.repeated&&(r+="\n\uD83D\uDD04 用戶可能是重複問題，請確認是否需要深入或不同的解決方案。");let s="";i.hasHistory&&i.messageCount>0&&(s=`

📚 用戶對話歷史 (${i.messageCount} 次對話):
`,i.recentMessages.forEach((e,t)=>{s+=`${t+1}. 問題: "${e.message.substring(0,30)}..." (話題: ${e.topic})
`}),s+="\n請基於對話歷史提供更個人化和連貫的建議。如果是重複問題，請深入探討或提供進階解決方案。");let o=`

請分析用戶訊息並返回 JSON 格式：

{
    "isWithinScope": true/false,
    "detectedTopic": "感情|財運|工作|健康|其他",
    "specificProblem": "基於情緒狀態和對話歷史的具體問題描述",
    "confidence": 0.8,
    "aiResponse": "結合情緒狀態和對話歷史的個性化回應",
    "serviceRecommendation": "基於用戶具體情況和歷史的服務建議"
}

**重要增強規則：**
1. 基於情緒狀態調整回應語氣和內容
2. 利用對話歷史提供連續性建議
3. 如果是重複問題，提供更深入的解決方案
4. 緊急情況優先提供立即可行的建議
5. 考慮用戶的情緒需求，不只是技術建議
6. **aiResponse 必須使用繁體中文回應，語言風格要溫暖親切**
7. **對於不在服務範圍內的問題（其他話題），請提供實用的回答建議，然後自然地引導到風水命理服務**
8. **不要推薦不存在的服務，只能推薦以下實際提供的服務：感情運勢分析、工作事業分析、財運分析、健康運勢**
9. **serviceRecommendation 只能從以上8種實際服務中選擇，不要創造新的服務名稱**

用戶訊息：${e}`;return n+r+s+o}async callDeepSeekAPI(e,t={}){let i={model:"deepseek-chat",messages:e,temperature:t.temperature||.3,max_tokens:t.max_tokens||1e3,stream:!1},n=await fetch(this.DEEPSEEK_API_URL,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.DEEPSEEK_API_KEY}`},body:JSON.stringify(i)});if(!n.ok){let e=await n.text();throw console.error("\uD83D\uDEA8 DeepSeek API Error Details:",{status:n.status,statusText:n.statusText,errorBody:e,apiKey:this.DEEPSEEK_API_KEY?`${this.DEEPSEEK_API_KEY.substring(0,10)}...`:"undefined"}),Error(`DeepSeek API error: ${n.status} - ${e}`)}return await n.json()}async generateAIResponse(e){try{return(await this.callDeepSeekAPI([{role:"system",content:"你是專業且親切的風鈴，請根據用戶的具體問題提供相關的風水建議。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 所有日期和月份都必須使用新歷（西曆/公曆），不要使用農歷。例如：1月、2月、3月等，避免使用農曆1月、農曆8月等表達方式 3. 不要在回應中包含字數統計如（72字）等標記 4. 保持風鈴親切可愛的語氣風格"},{role:"user",content:e}],{temperature:.7,max_tokens:400})).choices[0].message.content.trim()}catch(e){throw console.error("\uD83D\uDEA8 AI回應生成失敗:",e),e}}getFallbackAnalysis(e){if(console.log("\uD83D\uDD27 進入備用分析模式"),console.log("\uD83D\uDD0D 檢查 this.supportedTopics:",this.supportedTopics?"存在":"不存在"),!e||"string"!=typeof e)return console.log("⚠️ 訊息為空或無效，返回默認分析"),{isWithinScope:!0,detectedTopic:"感情",specificProblem:"生日資料收集",confidence:.8,aiResponse:""};if(this.supportedTopics){let t=e.toLowerCase();for(let[i,n]of Object.entries(this.supportedTopics))if(n.some(e=>t.includes(e)))return console.log(`✅ 匹配到話題: ${i}`),{isWithinScope:!0,detectedTopic:i,specificProblem:e,confidence:.6,aiResponse:"",serviceRecommendation:`建議諮詢${i}相關的風水分析`}}else{console.log("⚠️ supportedTopics 未定義，使用硬編碼備用");let t=e.toLowerCase();for(let[i,n]of Object.entries({感情:["戀愛","分手","復合","合婚","桃花運","婚姻","感情運勢","感情"],財運:["賺錢","投資","理財","事業財運","偏財運","正財運","破財","財運"],工作:["升職","跳槽","職場運勢","事業發展","工作機會","職業規劃","工作","事業","生意","經營","創業","業務","公司","職場","工作問題","事業問題","生意問題","經營困難","業績","營收","商業","加薪","加人工","薪資","薪水","人工","加工資","薪資調整","收入提升","職場表現","工作壓力","老闆","主管"],健康:["身體健康","疾病","養生","健康運勢","身體調理","健康"],人際關係:["朋友關係","家庭關係","同事關係","社交運勢","人緣","人際關係"],子女:["懷孕","生育","子女運","親子關係","教育","子女"]}))if(n.some(e=>t.includes(e)))return console.log(`✅ 匹配到話題: ${i}`),{isWithinScope:!0,detectedTopic:i,specificProblem:e,confidence:.6,aiResponse:"",serviceRecommendation:`建議諮詢${i}相關的風水分析`}}return console.log("❌ 未匹配到任何話題"),{isWithinScope:!1,detectedTopic:"其他",specificProblem:e,confidence:.5,aiResponse:"",serviceRecommendation:""}}async generateServiceGuidance(e,t,i=null){return e.isWithinScope?await this.generateScopeResponse(e,t):await this.generateOutOfScopeResponse(e,t,i)}async generateScopeResponse(e,t){switch(e.detectedTopic){case"問候":return e.aiResponse+`

我可以為你分析以下領域的風水運勢：

🌸 **感情** - 桃花運、姻緣配對
💼 **工作** - 事業發展、職場運勢
💰 **財運** - 投資理財、收入提升
🌿 **健康** - 身心調理、養生建議
🔮 **命理** - 八字分析、流年運勢

你對哪一種有興趣？`;case"感情":return this.generateEmotionFlow(e,t);case"工作":return await this.generateCareerFlow(e,t);case"財運":return await this.generateWealthFlow(e,t);case"健康":return await this.generateHealthFlow(e,t);case"命理":return await this.generateMingliFlow(e,t);case"其他":return await this.generateOutOfScopeResponse(e,t,sessionId);default:return this.generateDefaultFlow(e,t)}}generateEmotionFlow(e,t){return t&&"string"==typeof t&&(t.includes("分手")||t.includes("分開"))?e.aiResponse?(console.log("✅ 使用已有的 AI 分手分析結果"),`哇～分手真的很難過呢... 風鈴給你一個大大的抱抱！🤗💕

${e.aiResponse}

讓風鈴了解一下你的感情狀況：

**💕 請選擇你的感情狀態：**
- A. 剛分手，還很難過
- B. 分手一段時間了，想重新開始
- C. 想復合，但不確定
- D. 已經放下，想找新對象

根據你的狀態，風鈴會為你量身打造最適合的感情指導～💕`):`哇～分手真的很難過呢... 風鈴給你一個大大的抱抱！🤗💕

雖然現在心情不好，但爺爺說每一次結束都是新開始的機會呢！

首先，讓風鈴了解一下你的感情狀況：

**💕 請選擇你的感情狀態：**
- A. 剛分手，還很難過
- B. 分手一段時間了，想重新開始
- C. 想復合，但不確定
- D. 已經放下，想找新對象

根據你的狀態，風鈴會為你量身打造最適合的感情指導～💕`:e.aiResponse?(console.log("✅ 使用已有的 AI 感情分析結果"),`💕 ${e.aiResponse}

為了提供最適合的分析，請選擇：

**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`):`💕 了解你想詢問感情方面的問題！

為了提供最適合的分析，請選擇：

**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`}async generateOutOfScopeResponse(e,t="",i=null){let n=this.detectBaziInput(t||e.specificProblem||""),r=this.getConversationContext(i),s=this.determineRedirectLevel(r);console.log(`🎯 Redirect level: ${s}, irrelevant count: ${r.irrelevantCount||0}`);try{let t=this.buildRedirectPrompt(e.specificProblem,s,r);console.log("\uD83D\uDE80 準備調用 DeepSeek API 生成備用回應...");let i=await this.callDeepSeekAPI([{role:"system",content:"你是親切可愛的風鈴，善於先回答用戶問題再自然地介紹自己的專業服務。你只提供風水命理相關服務，不要推薦不存在的服務。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 所有日期和月份都必須使用新歷（西曆/公曆），不要使用農歷 3. 不要在回應中包含字數統計標記 4. 保持風鈴親切可愛的語氣風格"},{role:"user",content:t}]);console.log("\uD83E\uDD16 DeepSeek 備用回應:",JSON.stringify(i,null,2));let n=null;if("string"==typeof i&&i.trim()?n=i.trim():i&&i.choices&&i.choices[0]?n=i.choices[0].message?.content?.trim():i&&i.content&&(n=i.content.trim()),console.log("\uD83D\uDCDD 提取的備用回應文字:",n),n)return console.log("✅ 使用 DeepSeek 智能回應（備用方案）"),n=this.diversifyTransitionPhrases(n);console.log("⚠️ 回應為空，使用默認回應")}catch(e){console.error("\uD83D\uDD25 生成智能回應失敗:",e)}let o="謝謝你跟我分享這個！\uD83D\uDE0A";return(o+=`

雖然這個話題很有趣，不過風鈴主要專精於風水命理方面的分析哦～`,n)?(console.log("\uD83D\uDD2E 檢測到八字輸入，添加服務選單"),o+this.generateServiceMenu()):o}generateSmartServiceRecommendation(e,t=null){let i=this.getConversationContext(t);i.hasHistory&&i.preferredTopic&&console.log(`🔍 上下文增強: ${i.preferredTopic} 話題獲得優先推薦`),console.log("\uD83D\uDD0D 分析問題內容以推薦相關服務:",e);let n=null,r=0;for(let[t,i]of Object.entries({food:{keywords:["吃","食物","料理","菜","餐廳","美食","烹飪","食譜","營養","飲食","減肥","瘦身","節食","外食"],services:["健康","命理"],responseType:"lifestyle"},tech:{keywords:["手機","電腦","軟體","程式","APP","網站","科技","系統","bug","閃退"],services:["工作","命理"]},entertainment:{keywords:["電影","韓劇","音樂","遊戲","旅遊","娛樂","休閒","看劇","追劇"],services:["感情","命理"]},finance:{keywords:["錢","投資","股票","房價","買房","理財","存款","貸款","消費","價格"],services:["財運","命理"]},education:{keywords:["學習","考試","課程","書","知識","技能","語言","學校","教育"],services:["工作","命理"]},social:{keywords:["朋友","家人","同事","關係","相處","聊天","社交","交友"],services:["感情","命理"]},health:{keywords:["累","疲勞","睡眠","運動","身體","健康","醫院","藥","休息","壓力"],services:["健康","命理"]},shopping:{keywords:["買","購物","商品","品牌","衣服","化妝品","用品","選擇","推薦"],services:["財運","命理"]},weather:{keywords:["天氣","出門","旅行","交通","路線","地點","戶外","活動"],services:["健康","命理"]}})){let t=0;for(let n of i.keywords)e.includes(n)&&t++;t>r&&(r=t,n=i.services)}return n&&0!==r||(console.log("\uD83C\uDFB2 未找到特定匹配，使用預設服務組合"),n=["感情","命理"]),console.log("\uD83C\uDFAF 推薦服務:",n),this.generateNaturalServiceRecommendation(n,e)}generateNaturalServiceRecommendation(e,t){let i={感情:"\uD83C\uDF38 **感情** - 桃花運、姻緣配對",工作:"\uD83D\uDCBC **工作** - 事業發展、職場運勢",財運:"\uD83D\uDCB0 **財運** - 投資理財、收入提升",健康:"\uD83C\uDF3F **健康** - 身心調理、養生建議",命理:"\uD83D\uDD2E **命理** - 八字分析、流年運勢"},n=["不過風鈴最專業的是幫你分析運勢，特別擅長：","剛好風鈴能從專業的角度幫你看看：","其實這類問題背後都有運勢因素，我可以幫你分析：","風鈴專精的風水命理分析能幫你了解：","讓風鈴用專業的命理分析來幫你看看：","從風水命理的角度，我能為你分析："],r=["想了解哪個對你最有幫助？","對哪個分析比較有興趣？","想先從哪個開始深入了解？","哪個領域你比較想改善？","想看看哪方面的運勢指導？"],s=n[Math.floor(Math.random()*n.length)],o=r[Math.floor(Math.random()*r.length)],a=e.map(e=>i[e]).join("\n");return`

${s}

${a}

${o}`}diversifyTransitionPhrases(e){let t=["順便提一下","既然聊到這裡","談到這個","剛好想到","對了","其實","你知道嗎","巧的是","讓我想到","關於這點","說起來","補充一下","另外","這讓我聯想到","從另一個角度來看"],i=e.match(/說到這個/g);if(i&&i.length>0){console.log(`🔄 檢測到 ${i.length} 次「說到這個」，進行多樣化替換`);let n=t[Math.floor(Math.random()*t.length)];e=e.replace(/說到這個/g,n),console.log(`✨ 已替換為「${n}」`)}return e}detectBaziInput(e){if(!e||"string"!=typeof e)return!1;let t=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"];if(/([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]+([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]+([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])/.test(e))return console.log("\uD83D\uDD2E 檢測到完整八字格式:",e),!0;let i=0;for(let n of["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"])for(let r of t){let t=n+r;e.includes(t)&&i++}return i>=3&&(console.log("\uD83D\uDD2E 檢測到多個天干地支組合，疑似八字:",e,"組合數:",i),!0)}async detectBaziWithTopicAnalysis(e,t){if(!this.detectBaziInput(e))return null;console.log("\uD83D\uDD2E 檢測到八字輸入，開始主題分析:",e);let i=e.match(/([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])/),n="";i&&(n=`${i[1]} ${i[2]} ${i[3]} ${i[4]}`);try{let i=new T,r=await i.analyzeMessage(e,t);if(console.log("\uD83D\uDD0D 八字主題分析結果:",r),!r||!r.isWithinScope||!r.detectedTopic||"其他"===r.detectedTopic)return console.log("\uD83D\uDD2E 純八字輸入，提供服務選單"),{analysisType:"bazi_only",baziString:n,requiresServiceMenu:!0,isWithinScope:!0};{console.log(`🎯 檢測到八字+${r.detectedTopic}組合，生成詳細分析`);let t=await this.generateBaziDetailedAnalysis(n,r.detectedTopic,r.specificProblem,e);return{analysisType:"bazi_topic_analysis",detectedTopic:r.detectedTopic,specificProblem:r.specificProblem,baziString:n,response:t,isWithinScope:!0,requiresServiceMenu:!1}}}catch(e){return console.error("❌ 八字主題分析失敗:",e),{analysisType:"bazi_only",baziString:n,requiresServiceMenu:!0,isWithinScope:!0}}}async generateBaziDetailedAnalysis(e,t,i,n){let r={感情:"感情運勢",工作:"工作運勢",財運:"財運分析",健康:"健康運勢",人際:"人際關係",子女:"子女運勢"}[t]||t,s=`用戶提供八字：${e}
詢問主題：${r}
具體問題：${i}
原始訊息：${n}

請以風鈴的身份，按照以下格式生成詳細的八字分析報告：

🔮 風鈴看了你的八字，發現你有很特別的${r}潛質呢！💼

**1. 命盤速讀**
八字：${e}
五行屬性：[根據八字分析五行屬性，如：土命/火命等]
${r}宮主星：[分析對應主星，如：天府星（穩重權威）]
   - 關鍵格局：
     身強/身弱：[分析日主強弱]
     用神：[分析用神，如：火（溫暖調候，生機盎然）]
     大運節點：[分析當前大運]

💖 哈囉親愛的[五行]命小夥伴！讓風鈴為你解鎖2025年的${r}密碼～  

**2. 年度預警**  
✨【成就星】[時間範圍]「[吉星名稱]」發威！[具體建議和機會]～  
⚠️【小人煞】小心屬「[生肖]」的[相關人士][注意事項]，[具體防範建議]喔！  

注意：所有月份時間都使用新歷（西曆），例如：1月、2月、3月等，不要使用農歷。

**3. ${r}分析**  
[針對用戶具體問題的分析，約100-150字，要具體實用]

**4. 風水小貼士**  
🪑 [居家風水建議]
🎨 [顏色搭配建議] 
💻 [配件或擺設建議]

[五行]命寶寶記得多用「[五行相生原理]」原理，[具體建議]能讓你[效果]！✨ 有問題隨時喚醒風鈴喔～

───────────────────
💎 **想要更深入的分析嗎？**
根據你的狀況，風鈴為你推薦：

**1️⃣ 一份關於${r}的詳細報告** 價值$88，限時優惠$38
- 深度分析您的八字命理
- 分析你的${r}運勢，提供具體建議和改善方案
- 人際調衡要點

**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88
- 深度分析您的八字命理
- 流年大運走勢
- 全面覆蓋事業、財運、感情、健康等多個領域

**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188
- 根據您的八字提供專屬居家風水佈局建議
- 空間配色、家具擺放、植物擺設等具體方案

請回覆「1」、「2」或「3」選擇你想要的報告～

要求：
1. 保持風鈴可愛親切的語氣，使用表情符號和可愛語助詞
2. 提供具體實用的建議，避免空泛描述
3. 重點分析用戶關注的${r}領域
4. 總長度約400-500字
5. 格式要完整，包含所有必要部分
6. 所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，不要使用農歷`;try{let e=new T,t=await e.callDeepSeekAPI([{role:"system",content:"你是專業的風水命理顧問，擅長八字分析和運勢預測。請按照指定格式生成詳細且實用的分析報告。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，避免使用農歷表達方式 3. 不要在回應中包含字數統計標記 4. 保持專業且親切的語氣"},{role:"user",content:s}]);if(t&&t.choices&&t.choices[0]&&t.choices[0].message)return t.choices[0].message.content;if("string"==typeof t)return t;throw Error("AI回應格式異常")}catch(t){return console.error("❌ 生成詳細八字分析失敗:",t),`🔮 風鈴看了你的八字 ${e}，很想為你分析${r}呢！

不過系統暫時有點忙碌，請稍後重試，或者你可以：

📞 聯絡客服取得人工分析
💬 重新發送你的八字和問題
🎯 選擇其他分析服務

風鈴會盡快為你提供專業的${r}分析！✨`}}}async function b(e){try{let t=new f,i=await t.getRecentHistory(e,10);if(i&&i.length>0){let e=new T;for(let t of i)if(t.userMessage&&e.detectBaziInput(t.userMessage)){let e=/([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])/,i=t.userMessage.match(e);if(i){let e=`${i[1]} ${i[2]} ${i[3]} ${i[4]}`;return console.log("\uD83D\uDD2E 從會話歷史中找到八字:",e),e}}}let n=await d.A.findOne({$or:[{conversationId:e},{sessionId:e}]});if(n&&n.messages){let e=new T;for(let t of n.messages)if("user"===t.role&&t.content&&e.detectBaziInput(t.content)){let e=/([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])[,，\s]*([甲乙丙丁戊己庚辛壬癸][子丑寅卯辰巳午未申酉戌亥])/,i=t.content.match(e);if(i){let e=`${i[1]} ${i[2]} ${i[3]} ${i[4]}`;return console.log("\uD83D\uDD2E 從ChatHistory中找到八字:",e),e}}}return console.log("⚠️ 會話歷史中未找到八字數據"),null}catch(e){return console.error("❌ 獲取會話歷史八字失敗:",e),null}}async function $(e){try{let t,n;await (0,l.A)();let r=await (0,c.j2)(),s=r?.user?.email,{message:o,sessionId:g,userEmail:m=s||"anonymous",userId:y=s||`user-${Date.now()}-${Math.random().toString(36).substr(2,9)}`,userBirthday:h,partnerBirthday:f,gender:$,partnerGender:A,reportType:_}=await e.json();if(console.log("\uD83D\uDCE5 Smart-Chat2 收到的請求數據:",{message:o,messageType:typeof o,userBirthday:h,gender:$,reportType:_,sessionId:g,userId:y,userEmail:m,sessionUser:s}),!o?.trim()&&!h&&!_)return a.NextResponse.json({error:"訊息不能為空"},{status:400});if(console.log("\uD83E\uDD16 Smart-Chat2 收到訊息:",o),h&&$&&!o?.trim()){console.log("\uD83C\uDFAF Smart-Chat2 處理生日提交:",{userBirthday:h,gender:$,reportType:_});let e=await p.A.findOne({sessionId:g,conversationActive:!0}).sort({createdAt:-1});if(!e){console.log("\uD83D\uDCDD Smart-Chat2 創建新的會話上下文:",g);let t="感情";_&&_.includes("感情")?t="感情":_&&_.includes("財運")?t="財運":_&&_.includes("工作")?t="工作":_&&_.includes("健康")?t="健康":_&&_.includes("人際")&&(t="人際關係"),e=new p.A({sessionId:g,userEmail:m,userId:y,conversationActive:!0,primaryConcern:t,specificQuestion:`想了解${t}方面的運勢和風水建議`,relationshipAnalysisType:f?"couple":"individual",conversationState:"birthday_collection",createdAt:new Date})}let t=S(h);if(t){let i;if(e.userBirthday=t,e.conversationState="ready_for_detailed_report",f&&"couple"===e.relationshipAnalysisType){let t=S(f);t&&(e.partnerBirthday=t,console.log("\uD83C\uDFAF Smart-Chat2 設置伴侶生日:",t))}let n=e.primaryConcern||"綜合運勢",r=e.specificQuestion||`想了解${n}方面的運勢和風水建議`;if("couple"===e.relationshipAnalysisType&&e.partnerBirthday){let t=e.partnerBirthday,r=`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`,s=new URLSearchParams({birthdate:h,gender:$,partnerBirthdate:r,partnerGender:A||"女",concern:n,relationshipType:"couple",originalProblem:e.originalSpecificProblem||e.specificQuestion||"感情變淡，關係疏離"});i=`/zh-CN/couple-report?${s.toString()}`,console.log("\uD83C\uDFAF Smart-Chat2 生成情侶報告URL:",i)}else{let t=new URLSearchParams({birthday:h,gender:$,concern:n,problem:e.originalSpecificProblem||e.specificQuestion||r});i=`/zh-CN/feng-shui-report?${t.toString()}`,console.log("\uD83C\uDFAF Smart-Chat2 生成個人報告URL:",i)}return await e.save(),a.NextResponse.json({response:`✨ 太好了！你的專屬${n}報告已經準備好了！

正在為你打開報告頁面...`,conversationState:"report_generated",systemType:"smart-chat2",reportUrl:i,timestamp:new Date().toISOString()})}}let P=await p.A.findOne({sessionId:g,conversationActive:!0}).sort({createdAt:-1}),C=!!o&&/^(\d{4}[-/年]?\d{1,2}[-/月]?\d{1,2}[日]?)$/.test(o.replace(/\s/g,"")),I=o?function(e){if(!e||"string"!=typeof e)return null;for(let t of[/我\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*她\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/我\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*他\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/我\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*對方\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/我的生日是\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*他的生日是\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/我的生日是\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*她的生日是\s*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/我\s*(\d{4}\-\d{1,2}\-\d{1,2})[，,\s]*[他她對方]\s*(\d{4}\-\d{1,2}\-\d{1,2})/,/我\s*(\d{1,2}\/\d{1,2}\/\d{4})[，,\s]*[他她對方]\s*(\d{1,2}\/\d{1,2}\/\d{4})/,/(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)[，,\s]*(\d{4}[年\-\/]\d{1,2}[月\-\/]\d{1,2}[日]?)/,/(\d{4}\-\d{1,2}\-\d{1,2})[，,\s]*(\d{4}\-\d{1,2}\-\d{1,2})/]){let i=e.match(t);if(i){let e=S(i[1]),t=S(i[2]);if(e&&t)return{hasCouplesBirthdays:!0,userBirthday:e,partnerBirthday:t,rawText:i[0]}}}return null}(o):null,D=o?await v(o):null,E=!!o&&(/^[123]$|^[123]️⃣$|^選擇\s*[123]$|^第\s*[123]$|^option\s*[123]$/i.test(o.trim())||/^(個人分析|個人感情分析|合婚分析|合婚配對分析|個人|合婚|配對)$/i.test(o.trim())),x=!!o&&(/^[ABCD]$|^[ABCD]\.?/i.test(o.trim())||/^(剛分手.*難過|分手一段時間.*重新開始|想復合.*不確定|已經放下.*新對象)/i.test(o.trim())),R=new T,B=R.getConversationContext(g),k=o?R.detectSpecificServiceRequest(o):null;console.log("\uD83D\uDD0D 具體服務檢測:",{message:o,specificServiceRequest:k,hasRecentMessages:B.hasHistory,messageCount:B.messageCount});let M=!1,z=null;if(k){console.log("✅ 檢測到具體服務要求，引導用戶提供生日"),t=R.generateSpecificServiceGuide(k.serviceName,k.detectedTopic),R.updateConversationMemory(g,o,t,{requestedService:k.serviceName,detectedTopic:k.detectedTopic,awaitingBirthday:!0});try{let e=await d.A.findOne({sessionId:g});e||(e=new d.A({conversationId:g,sessionId:g,userId:y,userEmail:m,title:`${k.serviceName}諮詢`,primaryConcern:k.detectedTopic,conversationState:"awaiting_birthday",messages:[],context:{topics:[k.detectedTopic],lastTopic:k.detectedTopic},userData:{}})),e.addMessage("user",o),e.addMessage("assistant",t),await e.save()}catch(e){console.error("\uD83D\uDCBE 保存聊天記錄失敗:",e)}return a.NextResponse.json({response:t,detectedTopic:k.detectedTopic,requestedService:k.serviceName,systemType:"smart-chat2",timestamp:new Date().toISOString()})}if(I&&P?.relationshipAnalysisType==="couple"){console.log("\uD83C\uDFAF 檢測到合婚分析中的雙方生日:",I);try{P.userBirthday=I.userBirthday,P.partnerBirthday=I.partnerBirthday,P.conversationState="asking_detailed_report";let{EnhancedInitialAnalysis:e}=await i.e(5209).then(i.bind(i,95209));t=await e.generateCoupleAnalysis(I.userBirthday,I.partnerBirthday,"合婚配對分析")+`

───────────────────
💎 **想要更深入的分析嗎？**
選擇你想要的分析：

**1️⃣ 一份關於合婚的詳細報告** 價值$168，限時優惠$88
- 兩人八字姻緣配對分析
- 深入分析你們的感情配對度，提供具體建議和改善方案

**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88
- 深度分析您的八字命理
- 流年大運走勢
- 全面覆蓋事業、財運、感情、健康等多個領域

**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188
- 根據您的八字提供專屬居家風水佈局建議
- 空間配色、家具擺放、植物擺設等具體方案

請回覆「1」、「2」或「3」選擇你想要的報告～`,n={detectedTopic:"感情",isWithinScope:!0,confidence:.95,specificProblem:P.originalSpecificProblem||P.specificQuestion||"合婚配對分析"},console.log("\uD83D\uDCCA 生日處理後的分析結果:"),console.log("   分析的 specificProblem:",n.specificProblem),console.log("   來源 - originalSpecificProblem:",P.originalSpecificProblem),console.log("   來源 - specificQuestion:",P.specificQuestion)}catch(e){console.error("❌ 生成合婚分析失敗:",e),t="很抱歉，在分析你們的八字時遇到了問題，請稍後再試。",n={detectedTopic:"感情",isWithinScope:!0,confidence:.8,specificProblem:"系統錯誤"}}}else if(D){console.log("\uD83C\uDFAF 檢測到主題+生日組合:",D);try{P?(P.primaryConcern=D.topic,P.specificQuestion=`想了解${D.topic}方面的運勢`,P.conversationState="asking_detailed_report"):P=new p.A({sessionId:g,userEmail:m,userId:y,conversationActive:!0,primaryConcern:D.topic,specificQuestion:`想了解${D.topic}方面的運勢`,relationshipAnalysisType:"individual",conversationState:"asking_detailed_report",createdAt:new Date}),P.userBirthday=D.birthday.parsed;let{EnhancedInitialAnalysis:e}=await i.e(5209).then(i.bind(i,95209));t="感情"===D.topic?await e.generateLoveAnalysis(D.birthday.parsed,"一般感情分析"):"財運"===D.topic?await e.generateFinanceAnalysis(D.birthday.parsed,"財運諮詢"):"工作"===D.topic?await e.generateWorkAnalysis(D.birthday.parsed,"工作運勢"):"健康"===D.topic?await e.generateHealthAnalysis(D.birthday.parsed,"健康運勢"):await e.generatePersonalAnalysis(D.birthday.parsed,D.topic,`${D.topic}諮詢`);let r=D.topic;t+=`

───────────────────`,t+=`
💎 **想要更深入的分析嗎？**`,t+=`
根據你的狀況，風鈴為你推薦：`,t+=`

**1️⃣ 一份關於${r}的詳細報告** 價值$88，限時優惠$38`,t+=`
- 深度分析您的八字命理`,t+=`
- 分析你的${r}運勢，提供具體建議和改善方案`,t+=`
- 人際調衡要點`,t+=`

**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88`,t+=`
- 深度分析您的八字命理`,t+=`
- 流年大運走勢`,t+=`
- 全面覆蓋事業、財運、感情、健康等多個領域`,t+=`

**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188`,t+=`
- 根據您的八字提供專屬居家風水佈局建議`,t+=`
- 空間配色、家具擺放、植物擺設等具體方案`,t+=`

請回覆「1」、「2」或「3」選擇你想要的報告～`,n={isWithinScope:!0,detectedTopic:D.topic,specificProblem:`${D.topic}運勢分析`,confidence:.95,birthdayProvided:!0,topicAndBirthdayDetected:!0},console.log("✅ 主題+生日分析生成成功")}catch(e){console.error("❌ 主題+生日分析失敗:",e),t=`🎉 太好了！你想了解${D.topic}，生日是 ${D.birthday.original}！

讓風鈴為你做詳細的${D.topic}分析～

正在為你計算八字和運勢...

根據你的出生日期，我會從以下角度為你分析：
🔮 **八字命盤** - 你的基本運勢特質
⭐ **流年運勢** - 今年的${D.topic}運勢如何
💫 **開運建議** - 專門針對${D.topic}的風水調整

稍等一下，讓我為你準備專業的分析報告... ✨`,n={isWithinScope:!0,detectedTopic:D.topic,specificProblem:`${D.topic}運勢分析`,confidence:.8,birthdayProvided:!0,topicAndBirthdayDetected:!0}}}else if(x&&P?.primaryConcern==="感情"){let e=await d.A.findOne({$or:[{conversationId:g},{sessionId:g}]});if(e?.messages?.some(e=>"assistant"===e.role&&(e.content.includes("A. 剛分手，還很難過")||e.content.includes("請選擇你的感情狀態")))){console.log("\uD83C\uDFAF 檢測到分手狀態選擇:",o);let e=o.trim().toUpperCase().charAt(0);if(!["A","B","C","D"].includes(e)){let t=o.toLowerCase();t.includes("剛分手")||t.includes("難過")?e="A":t.includes("分手一段時間")||t.includes("重新開始")?e="B":t.includes("復合")||t.includes("不確定")?e="C":(t.includes("放下")||t.includes("新對象"))&&(e="D")}switch(e){case"A":t=`風鈴完全理解你現在的心情，剛分手真的很痛苦... 

給自己一些時間療傷是很重要的，不要急著壓抑情緒哦！

**🌸 現階段最重要的建議：**
**情感修復期** - 允許自己悲傷，但不要沉溺太久
**能量清理** - 整理房間，特別是感情角落（西南方）
**自我照顧** - 多接觸陽光，避免長期待在陰暗空間

**💕 感情風水調整：**
- 收起合照但不要丟掉，放在抽屜裡
- 在床頭放粉水晶，幫助療癒心傷
- 多穿粉色或白色，有淨化負能量的效果

要記住，每一次結束都是為了更好的開始！風鈴會陪著你走過這段路的 🤗

為了提供最適合的分析，請選擇：

如要增加個人能量，可選
**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

如要看是否跟伴侶合適，可選
**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`;break;case"B":t=`🌟 太好了！能夠準備好重新開始，代表你已經成長了很多呢！

現在是最適合重新出發的時候，風鈴來幫你做好準備！

**🎯 重新開始的黃金準則：**
**心境調整** - 放下過去包袱，專注未來可能
**桃花佈局** - 活化感情能量，吸引對的人
**自信提升** - 從內而外散發魅力

**💖 招桃花風水秘技：**
- 西南方放置粉水晶樹或玫瑰花
- 床頭櫃成雙成對擺設，象徵感情圓滿
- 穿戴粉色或紅色增強桃花運
- 保持笑容，正能量最吸引人！

為了提供最適合的分析，請選擇：

如要增加個人能量，可選
**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

如要看是否跟伴侶合適，可選
**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`;break;case"C":t=`💭 想復合的心情風鈴很理解，但這確實需要謹慎考慮呢...

讓我們一起分析一下復合的可能性和最佳策略！

**🤔 復合前的重要思考：**
**分手原因** - 根本問題是否已經解決？
**成長空間** - 這段時間你們都有改變嗎？
**未來願景** - 對感情的期待是否一致？

**💕 風水調整建議：**
- 在感情角落放置和合符或成對物品
- 選擇農曆十五前後進行溝通，月圓人團圓
- 保持內心平靜，多給自己時間思考

復合不是唯一的選擇，最重要的是你的幸福！

為了提供最適合的分析，請選擇：

如要增加個人能量，可選
**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

如要看是否跟伴侶合適，可選
**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`;break;case"D":t=`✨ 哇！你的心境調整得真好，能夠放下過去迎向未來，這份勇氣很棒呢！

現在就是你桃花大開的最佳時機，風鈴來幫你吸引理想對象！

**🌹 全新開始的能量準備：**
**空間清理** - 徹底整理感情角落，清除舊能量
**形象提升** - 改變髮型或風格，煥然一新
**社交擴展** - 主動參與活動，增加認識機會

**💖 強力招桃花佈局：**
- 感情區（西南方）放置粉水晶球或鮮花
- 臥室保持整潔明亮，床單選用粉色系
- 梳妝台擺放雙數物品，象徵成雙成對
- 隨身配戴紅繩或粉晶，增強個人魅力

最好的愛情會在你準備好的時候出現，相信自己值得被好好愛！

為了提供最適合的分析，請選擇：

如要增加個人能量，可選
**1️⃣ 個人感情分析**
- 分析你的桃花運勢和感情特質
- 提供感情運勢建議和風水調整
- 適合單身或想了解個人感情運的朋友

如要看是否跟伴侶合適，可選
**2️⃣ 合婚配對分析** 
- 分析你和伴侶的八字契合度
- 提供雙方感情走向和發展建議  
- 適合想了解感情配對度的情侶

你想要哪種分析呢？回覆「個人分析」或「合婚分析」即可～`;break;default:t=`抱歉，我沒有理解你的選擇 😅 

請重新選擇你的感情狀態：

**💕 請選擇你的感情狀態：**
- A. 剛分手，還很難過
- B. 分手一段時間了，想重新開始  
- C. 想復合，但不確定
- D. 已經放下，想找新對象

直接回覆字母 A、B、C 或 D 即可！`}P.breakupStatus=e,P.conversationState="asking_relationship_type",await P.save(),n={detectedTopic:"感情",isWithinScope:!0,confidence:.95,specificProblem:`分手狀態選擇_${e}`}}}else if(C&&P?.primaryConcern){try{let e;let n=o.replace(/[年月日]/g,"-").replace(/[/]/g,"-").match(/(\d{4})-(\d{1,2})-(\d{1,2})/);if(n){let[,t,i,r]=n;e=`${t}-${i.padStart(2,"0")}-${r.padStart(2,"0")}`}else e=o;let{EnhancedInitialAnalysis:r}=await i.e(5209).then(i.bind(i,95209));t="感情"===P.primaryConcern?"individual"===P.relationshipAnalysisType?await r.generateLoveAnalysis(new Date(e),"個人感情分析"):"couple"===P.relationshipAnalysisType?await r.generateLoveAnalysis(new Date(e),"合婚配對分析準備")+`

💕 **想做完整合婚分析嗎？**
如果你有伴侶，可以提供對方的生日，我可以為你們做八字配對分析，看看感情相容度哦！`:await r.generateLoveAnalysis(new Date(e),"一般感情分析"):"財運"===P.primaryConcern?await r.generateFinanceAnalysis(new Date(e),"財運諮詢"):"工作"===P.primaryConcern?await r.generateWorkAnalysis(new Date(e),"工作運勢"):await r.generatePersonalAnalysis(new Date(e),P.primaryConcern,`${P.primaryConcern}諮詢`);let s=P.primaryConcern||"運勢";t+=`

───────────────────`,t+=`
💎 **想要更深入的分析嗎？**`,t+=`
根據你的狀況，風鈴為你推薦：`,t+=`

**1️⃣ 一份關於${s}的詳細報告** 價值$88，限時優惠$38`,t+=`
- 深度分析您的八字命理`,t+=`
- 分析你的${s}運勢，提供具體建議和改善方案`,t+=`
- 人際調衡要點`,t+=`

**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88`,t+=`
- 深度分析您的八字命理`,t+=`
- 流年大運走勢`,t+=`
- 全面覆蓋事業、財運、感情、健康等多個領域`,t+=`

**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188`,t+=`
- 根據您的八字提供專屬居家風水佈局建議`,t+=`
- 空間配色、家具擺放、植物擺設等具體方案`,t+=`

請回覆「1」、「2」或「3」選擇你想要的報告～`,P.conversationState="asking_detailed_report"}catch(e){console.error("\uD83D\uDEA8 初步分析生成失敗:",e),t=`🎉 太好了！你的生日是 ${o}，讓我為你做詳細的${P.primaryConcern}分析～

正在為你計算八字和運勢...

根據你的出生日期，我會從以下角度為你分析：
🔮 **八字命盤** - 你的基本運勢特質
⭐ **流年運勢** - 今年的${P.primaryConcern}運勢如何
💫 **開運建議** - 專門針對${P.primaryConcern}的風水調整

稍等一下，讓我為你準備專業的分析報告... ✨

(請等待系統為你生成詳細的${P.primaryConcern}分析報告)`}n={isWithinScope:!0,detectedTopic:P.primaryConcern,specificProblem:P.originalSpecificProblem||("individual"===P.relationshipAnalysisType?"個人感情分析":"couple"===P.relationshipAnalysisType?"合婚配對分析":`${P.primaryConcern}諮詢`),confidence:.95,birthdayProvided:!0}}else if(!_||o?.trim()||h){if(E&&P?.primaryConcern&&P?.conversationState!=="asking_detailed_report"){let e=o.match(/[12]/)?.[0];if(!e){let t=o.trim();/^(個人分析|個人感情分析|個人)$/i.test(t)?e="1":/^(合婚分析|合婚配對分析|合婚|配對)$/i.test(t)&&(e="2")}if("感情"===P.primaryConcern)"1"===e?(t=`好！我會為你進行個人感情分析 🌸

為咗更準確分析你嘅感情運勢，我需要你嘅出生日期。

請提供：出生年月日（例如：1990年5月15日）`,P.relationshipAnalysisType="individual",!P.originalSpecificProblem&&P.specificQuestion&&(P.originalSpecificProblem=P.specificQuestion,console.log("\uD83D\uDCBE 保存原始具體問題（個人分析）:",P.originalSpecificProblem)),console.log("\uD83D\uDCCA 個人分析選擇後的狀態:"),console.log("   specificQuestion:",P.specificQuestion),console.log("   originalSpecificProblem:",P.originalSpecificProblem)):"2"===e&&(t=`💕 好的！為了進行準確的合婚分析，我需要你們雙方的生日資料。

請先提供**你的生日**（年月日），例如：1995年3月15日

💡 小貼士：你也可以一次提供雙方生日，例如：「我1995/3/15，她1996/8/20」`,P.relationshipAnalysisType="couple",!P.originalSpecificProblem&&P.specificQuestion&&(P.originalSpecificProblem=P.specificQuestion,console.log("\uD83D\uDCBE 保存原始具體問題（合婚分析）:",P.originalSpecificProblem)),console.log("\uD83D\uDCCA 合婚分析選擇後的狀態:"),console.log("   specificQuestion:",P.specificQuestion),console.log("   originalSpecificProblem:",P.originalSpecificProblem));else{let i=await d.A.findOne({$or:[{conversationId:g},{sessionId:g}]}),n=i?.messages?.some(e=>"assistant"===e.role&&(e.content.includes("八字")||e.content.includes("風鈴看了你的八字")||e.content.includes("\uD83D\uDD2E **八字命盤**")));console.log(`🔍 檢查八字分析狀態: hasBaziAnalysis=${n}, choice=${e}`),n?(console.log("✅ 用戶已有八字分析，觸發模態框"),"1"===e?(t=`好的！我來為你準備詳細的${P.primaryConcern}分析報告 ✨

這份報告將包含：
🎯 深度${P.primaryConcern}分析
📈 具體改善建議  
🔮 時機把握指導
🏠 相關風水調整

正在準備你的專屬報告...`,M=!0):"2"===e&&(t=`好的！我來為你準備綜合命理報告 ✨

這份報告將包含：
🎯 深度八字分析
📈 各領域運勢預測
🔮 時機把握指導
🏠 風水調整建議

正在準備你的專屬報告...`,M=!0)):(console.log("❌ 用戶尚未提供資料，要求生日"),t=`好的！告訴風鈴你的生日，我來為你做${P.primaryConcern}分析：

📅 **生日格式範例：**
• 1999-03-15
• 1999/3/15  
• 1999年3月15日

風鈴會先給你一個簡單的分析，如果你覺得有幫助，還可以做更詳細的完整報告哦～💕`)}n={isWithinScope:!0,detectedTopic:P.primaryConcern,specificProblem:`用戶選擇: ${P.primaryConcern}分析選項${e}`,confidence:.9,choiceResponse:!0},await P.save()}else if(P?.conversationState==="asking_detailed_report"){let e=o.trim();if("1"===e||e.includes("詳細報告")||e.includes("第一")||"2"===e||e.includes("綜合")||e.includes("第二")||"3"===e||e.includes("居家")||e.includes("佈局")||e.includes("第三")){if(console.log("\uD83C\uDFAF 檢測到報告選擇:",e),"1"===e||e.includes("詳細報告")||e.includes("第一")){P.reportType="detailed_concern";let e=P.primaryConcern||"運勢";if("感情"===e&&"couple"===P.relationshipAnalysisType&&P.partnerBirthday&&P.userBirthday)M=!0,P.conversationState="collecting_payment_info",t=`💕 太好了！準備為你們製作專屬的合婚分析報告！

這份報告將包含：
🌸 雙方八字深度配對分析
💫 感情發展趨勢預測  
🔮 關係和諧改善建議
🏠 增進感情的風水佈局

請填寫付款資訊，我們立即開始製作你們的專屬報告～`,n={isWithinScope:!0,detectedTopic:"感情",specificProblem:P.originalSpecificProblem||"用戶選擇合婚詳細報告",confidence:.95,reportChoice:!0,paymentType:"couple"},console.log("\uD83D\uDD12 合婚報告選擇時保護原始問題:"),console.log("   originalSpecificProblem:",P.originalSpecificProblem),console.log("   分析中的 specificProblem:",n.specificProblem);else{M=!0,P.conversationState="collecting_payment_info";let i=e;if(P.originalSpecificProblem){let e=P.originalSpecificProblem.toLowerCase();e.includes("財運")||e.includes("賺錢")||e.includes("投資")||e.includes("理財")?i="財運":e.includes("工作")||e.includes("事業")||e.includes("職業")||e.includes("升職")?i="工作":e.includes("健康")||e.includes("身體")||e.includes("養生")?i="健康":e.includes("人際")||e.includes("朋友")||e.includes("貴人")?i="人際關係":(e.includes("子女")||e.includes("孩子")||e.includes("教育"))&&(i="子女")}t=`🌟 太棒了！準備為你製作專屬的${i}詳細分析報告！

這份報告將包含：
🔮 深入的個人${i}分析
📈 未來運勢趨勢預測
💡 具體改善建議和方案
🏠 專屬風水佈局建議

請填寫個人資料，我們立即開始製作你的專屬報告～`,n={isWithinScope:!0,detectedTopic:i,specificProblem:P.originalSpecificProblem||`用戶選擇${i}詳細報告`,confidence:.95,reportChoice:!0,paymentType:"fortune"},console.log("\uD83D\uDD12 報告選擇時保護原始問題:"),console.log("   originalSpecificProblem:",P.originalSpecificProblem),console.log("   分析中的 specificProblem:",n.specificProblem)}}else"2"===e||e.includes("綜合")||e.includes("第二")?(P.reportType="comprehensive",P.conversationState="collecting_payment_info",M=!0,t=`🔮 很棒的選擇！綜合命理報告是最全面的分析！

這份報告將包含：
📊 完整八字命盤解析
🌟 各領域運勢預測（感情、工作、財運、健康等）
🎯 人生重要時機把握
🏠 全方位風水佈局建議

請填寫個人資料，準備製作你的專屬綜合命理報告～`,n={isWithinScope:!0,detectedTopic:"綜合運勢",specificProblem:"用戶選擇綜合命理報告",confidence:.95,reportChoice:!0,paymentType:"comprehensive"}):("3"===e||e.includes("居家")||e.includes("佈局")||e.includes("第三"))&&(P.reportType="home_layout",P.conversationState="collecting_payment_info",M=!0,t=`🏠 很棒的選擇！居家佈局對運勢提升非常重要。

我將為你客製化一份居家風水佈局方案，包含：
🎨 空間配色建議
📐 家具擺放指導  
🌿 植物擺設方案
💎 招財開運佈局

請填寫個人資料，我們開始製作你的專屬佈局方案～`,n={isWithinScope:!0,detectedTopic:"居家佈局",specificProblem:"用戶選擇居家佈局報告",confidence:.95,reportChoice:!0,paymentType:"premium"});return a.NextResponse.json({response:t,aiAnalysis:n,conversationState:P.conversationState,systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:P?.primaryConcern||n?.detectedTopic,emotion:"hopeful",shouldTriggerModal:M,paymentType:n?.paymentType,reportUrl:null,needsBirthday:!1,specificQuestion:n?.specificProblem,specificProblem:n?.specificProblem||P?.specificQuestion||o,relationshipAnalysisType:P?.relationshipAnalysisType,isCoupleAnalysis:P?.relationshipAnalysisType==="couple"})}let r=["感情","財運","工作","健康","人際關係","子女","風水佈局","居家佈局"],s=null;for(let[e,t]of Object.entries({感情:["感情","愛情","戀愛","桃花","分手","復合","婚姻","單身"],工作:["工作","事業","職場","升職","跳槽","生意","經營","創業"],財運:["財運","財富","賺錢","投資","理財","收入","金錢"],健康:["健康","身體","疾病","養生","調理","癌症","病","生病","手術","醫生","醫院","治療"]}))if(t.some(e=>o.includes(e))){s=e,console.log("\uD83C\uDFAF 在報告選擇狀態下直接檢測到主題切換:",s);break}if(s&&r.includes(s)){console.log("\uD83D\uDD04 在報告選擇狀態下執行核心主題切換:",s);let e=`${s}分析`,t=1,i="topic_switch",n="";try{console.log("\uD83E\uDD16 使用AI分析獲取具體問題描述");let r=new T,s=await r.analyzeMessage(o,g);s&&s.specificProblem?(e=s.specificProblem,t=s.confidence||.9,i="keyword_topic_with_ai_problem",n=s.aiResponse||"",console.log("✅ AI分析獲取到具體問題:",e)):console.log("⚠️ AI分析未獲取到具體問題，使用默認描述")}catch(e){console.error("❌ AI分析具體問題失敗:",e)}let r="";return r=n&&n.trim()?`${n}

💫 已為您切換到${s}分析！請提供您的出生年月日（例如：1990年5月15日），我將為您進行專業的命理分析。✨`:`💫 已為您切換到${s}分析！請提供您的出生年月日（例如：1990年5月15日），我將為您進行專業的命理分析。✨`,P.primaryConcern=s,P.conversationState="birthday_collection",P.reportType=null,await P.save(),a.NextResponse.json({response:r,conversationState:"birthday_collection",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:s,needsBirthday:!0,specificQuestion:e,aiAnalysis:{detectedTopic:s,isWithinScope:!0,confidence:t,analysisType:i,specificProblem:e}})}if(!s){console.log("\uD83E\uDD16 關鍵詞匹配失敗，使用AI分析檢測主題切換");try{let e=new T,t=await e.analyzeMessage(o,g);if(t&&t.isWithinScope&&t.detectedTopic&&"其他"!==t.detectedTopic&&r.includes(t.detectedTopic)){console.log("\uD83C\uDFAF AI檢測到核心主題切換:",t.detectedTopic);let e="";return e=t.aiResponse&&t.aiResponse.trim()?`${t.aiResponse}

💫 已為您切換到${t.detectedTopic}分析！請提供您的出生年月日（例如：1990年5月15日），我將為您進行專業的命理分析。✨`:`💫 已為您切換到${t.detectedTopic}分析！請提供您的出生年月日（例如：1990年5月15日），我將為您進行專業的命理分析。✨`,P.primaryConcern=t.detectedTopic,P.conversationState="birthday_collection",P.reportType=null,await P.save(),a.NextResponse.json({response:e,conversationState:"birthday_collection",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:t.detectedTopic,needsBirthday:!0,specificQuestion:t.specificProblem||`${t.detectedTopic}分析`,aiAnalysis:{detectedTopic:t.detectedTopic,isWithinScope:!0,confidence:t.confidence||.9,analysisType:"ai_topic_switch",specificProblem:t.specificProblem}})}}catch(e){console.error("❌ AI主題切換檢測失敗:",e)}}try{let e=new(i(64102)),r=await e.analyzeMessage(o);if(r.isEnhanced&&"greeting"===r.analysisType)return console.log("\uD83E\uDDE0 在報告選擇狀態下檢測到問候語，提供友善回應"),a.NextResponse.json({response:r.response,aiAnalysis:r,conversationState:"asking_detailed_report",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:P?.primaryConcern||"一般",emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:"問候語",isCoupleAnalysis:!1});if(r.isEnhanced&&"service_explanation"===r.analysisType)return console.log("\uD83E\uDDE0 在報告選擇狀態下檢測到服務諮詢，提供服務說明"),a.NextResponse.json({response:r.response,aiAnalysis:r,conversationState:P.conversationState,systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:P?.primaryConcern||"服務諮詢",emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:"服務諮詢",isCoupleAnalysis:!1});if(r.requiresAIAnalysis||!r.isEnhanced&&"general_ai"===r.analysisType){console.log("\uD83E\uDDE0 在報告選擇狀態下檢測到非核心話題，使用AI分析");let e=new T,t=await e.analyzeMessage(o,g);if(t&&t.detectedTopic||(t=e.getFallbackAnalysis(o)),!t.isWithinScope||"其他"===t.detectedTopic){console.log("✅ 在報告選擇狀態下檢測到其他話題，提供AI動態回應");let i=await e.generateOutOfScopeResponse(t,o);return a.NextResponse.json({response:i,aiAnalysis:t,conversationState:P.conversationState,systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:P?.primaryConcern||"其他",emotion:"neutral",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:o,isCoupleAnalysis:!1})}}if(r.isEnhanced&&"knowledge_explanation"===r.analysisType){console.log("\uD83E\uDDE0 在報告選擇狀態下檢測到知識詢問，優先處理");let e=new T,i=`用戶詢問：${o}

請作為專業的風水命理老師，用不超過200字簡潔專業地解釋這個概念。要求：
1. 解釋清楚易懂
2. 突出實際應用價值  
3. 保持專業權威性
4. 語氣親切自然
5. 最後可以提及如果想了解個人狀況可以提供生日做分析

請直接給出解釋，不要說"我來解釋"之類的開場白。`;(t=await e.callDeepSeekAPI([{role:"system",content:"你是專業的風水命理顧問，擅長用簡潔易懂的方式解釋傳統概念。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，不要使用農歷 3. 不要在回應中包含字數統計標記 4. 保持專業且親切的語氣"},{role:"user",content:i}]))&&t.choices&&t.choices[0]&&t.choices[0].message&&(t=t.choices[0].message.content),n=r}else if(r.isEnhanced&&"其他"===r.detectedTopic)throw console.log("\uD83D\uDD27 在報告選擇狀態下檢測到其他話題，重置狀態並處理"),P.conversationState="ai_analyzing",Error("Reset state for other topics");else if(r.isEnhanced&&"emotional_support"===r.analysisType)console.log("\uD83D\uDC99 在報告選擇狀態下檢測到情緒危機，優先提供支持"),t=r.response,n=r;else throw Error("Not a knowledge query, continue with report choice")}catch(i){let e=o.trim();if("1"===e||e.includes("詳細報告")||e.includes("第一")){P.reportType="detailed_concern";let e=P.primaryConcern||"運勢";"couple"===P.relationshipAnalysisType&&"感情"===P.primaryConcern?P.userBirthday&&P.partnerBirthday?(M=!0,P.conversationState="collecting_payment_info",console.log("✅ 合婚分析 - 用戶同意詳細報告，已有兩個生日，觸發模態框")):(P.conversationState="birthday_collection",t=`💕 好的！為了進行準確的合婚分析，我需要你們雙方的生日資料。
                        
請先提供**你的生日**（年月日），例如：1995年3月15日

💡 小貼士：你也可以一次提供雙方生日，例如：「我1995/3/15，她1996/8/20」`,console.log("⚠️ 合婚分析 - 缺少生日資料，重新收集")):(M=!0,P.conversationState="collecting_payment_info"),M&&(t=`✨ 太好了！我將為你生成一份專業的${e}詳細報告。

這份報告將包含：
🎯 深度${e}分析
📈 具體改善建議  
🔮 時機把握指導
🏠 相關風水調整

正在準備你的專屬報告...`),n={isWithinScope:!0,detectedTopic:e,specificProblem:P.originalSpecificProblem||`用戶選擇詳細${e}報告`,confidence:.95,reportChoice:!0,paymentType:"couple"===P.relationshipAnalysisType?"couple":"fortune"}}else if("2"===e||e.includes("綜合")||e.includes("命理")||e.includes("第二"))P.reportType="comprehensive",P.conversationState="collecting_payment_info",t=`🌟 極佳的選擇！綜合命理報告是最全面的分析。

這份完整報告將包含：
📊 八字命盤全解析
🔮 各領域運勢預測
💫 流年大運走勢
🎯 人生重要時機
🏠 全方位風水建議

請填寫個人資料，讓我為你打造專屬的命理藍圖～`,M=!0,n={isWithinScope:!0,detectedTopic:"綜合命理",specificProblem:"用戶選擇綜合命理報告",confidence:.95,reportChoice:!0,paymentType:"comprehensive"};else if("3"===e||e.includes("居家")||e.includes("佈局")||e.includes("第三"))P.reportType="home_layout",P.conversationState="collecting_payment_info",t=`🏠 很棒的選擇！居家佈局對運勢提升非常重要。

我將為你客製化一份居家風水佈局方案，包含：
🎨 空間配色建議
📐 家具擺放指導  
🌿 植物擺設方案
💎 招財開運佈局

請填寫個人資料，我們開始製作你的專屬佈局方案～`,M=!0,n={isWithinScope:!0,detectedTopic:"居家佈局",specificProblem:"用戶選擇居家佈局報告",confidence:.95,reportChoice:!0,paymentType:"premium"};else{let e=P.primaryConcern||"運勢";t=`請選擇你想要的分析類型：

**1️⃣ 一份關於${e}的詳細報告** 價值$88，限時優惠$38
**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88
**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188

請回覆「1」、「2」或「3」～`,n={isWithinScope:!0,detectedTopic:P.primaryConcern,specificProblem:"用戶需要重新選擇報告類型",confidence:.8,choiceResponse:!0}}}}else if(P?.conversationState==="bazi_topic_selection"){console.log("\uD83D\uDD2E 用戶在八字主題選擇狀態，分析主題選擇:",o);let e=new T,i=await e.analyzeMessage(o,g);if(i&&i.isWithinScope&&i.detectedTopic&&"其他"!==i.detectedTopic){console.log(`🎯 用戶選擇${i.detectedTopic}主題，生成詳細八字分析`);let n=await b(g);if(n){let t=await e.generateBaziDetailedAnalysis(n,i.detectedTopic,i.specificProblem,o);return P.conversationState="completed",await P.save(),a.NextResponse.json({response:t,aiAnalysis:{isWithinScope:!0,detectedTopic:i.detectedTopic,specificProblem:i.specificProblem,analysisType:"bazi_topic_analysis",confidence:.9},conversationState:"completed",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:i.detectedTopic,emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:i.specificProblem,isCoupleAnalysis:!1})}t=`🔮 抱歉，我需要你重新提供八字資料才能為你分析${i.detectedTopic}呢！

請按照格式提供你的八字：
例如：丙子,甲午,丙申,戊子,測${i.detectedTopic}

這樣我就能為你做詳細的${i.detectedTopic}分析啦～✨`,P.conversationState="asking_bazi_reentry",await P.save()}else t=`🔮 我沒有完全理解你想了解的主題呢～

請直接告訴我你想了解的領域，例如：
• 我想了解感情
• 幫我看工作運
• 分析財運
• 看看健康
• 人際關係
• 子女運勢

這樣我就能為你做精準的八字分析啦！✨`;return await P.save(),a.NextResponse.json({response:t,aiAnalysis:i||{isWithinScope:!1,detectedTopic:"其他",specificProblem:"主題選擇"},conversationState:P.conversationState,systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:"其他",emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:"八字主題選擇",isCoupleAnalysis:!1})}else{let e=new T,r=await e.detectBaziWithTopicAnalysis(o,g);if(r){if(console.log("\uD83D\uDD2E 檢測到八字分析需求:",r.analysisType),"bazi_topic_analysis"===r.analysisType)return console.log(`🎯 提供${r.detectedTopic}的詳細八字分析`),a.NextResponse.json({response:r.response,aiAnalysis:{isWithinScope:!0,detectedTopic:r.detectedTopic,specificProblem:r.specificProblem,analysisType:"bazi_topic_analysis",confidence:.9},conversationState:"completed",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:r.detectedTopic,emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:r.specificProblem,isCoupleAnalysis:!1});if("bazi_only"===r.analysisType){console.log("\uD83D\uDD2E 純八字輸入，生成服務選單回應");let e=`🔮 風鈴看到你的八字了：${r.baziString}

我可以為你分析以下任何一個領域：

🌸 **感情運勢** - 桃花運、合婚配對、感情發展
💼 **事業工作** - 職場運勢、升職機會、事業發展  
💰 **財運分析** - 投資理財、收入提升、財運走向
🌿 **健康運勢** - 身心調理、健康狀況、養生建議

你想了解哪個方面呢？直接告訴我「我想了解感情」或「幫我看工作」即可～✨`;return a.NextResponse.json({response:e,aiAnalysis:{isWithinScope:!0,detectedTopic:"其他",specificProblem:"八字輸入",analysisType:"bazi_service_menu",confidence:.9},conversationState:"bazi_topic_selection",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:"其他",emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:"八字分析服務選擇",isCoupleAnalysis:!1})}}let s=null;try{let e=i(64102),r=new e;if((s=await r.analyzeMessage(o)).isEnhanced){if("greeting"===s.analysisType)return console.log("✅ 檢測到問候語，提供友善回應"),a.NextResponse.json({response:s.response,aiAnalysis:s,conversationState:"ai_analyzing",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:"一般",emotion:"positive",shouldTriggerModal:!1,reportUrl:null,needsBirthday:!1,specificQuestion:"問候語",isCoupleAnalysis:!1});if(console.log("✅ 使用增強版分析結果"),(n=s).detectedTopic){let t=new e;n.detectedTopic=t.mapTopicToValidEnum(n.detectedTopic)}if("contextual"===s.analysisType)t=function(e,t,i){let{contextData:n}=e;if(!n)return e.response;let{problem:r,birthday:s,problemType:o}=n,a=s.match(/(\d{4})/)?.[1],c=a?new Date().getFullYear()-parseInt(a):25,l={work_problem:"失業真的很讓人焦慮呢... 抱抱你！\uD83E\uDD17 不過這也許是新機會的開始哦！",relationship_issue:"感情的事情總是最讓人牽掛... 我理解你的心情 \uD83D\uDC9C",financial_concern:"經濟壓力確實很大，不過困難是暫時的！讓我幫你看看轉機在哪裡 \uD83D\uDCAA",health_worry:"身體健康最重要，要好好照顧自己呢 \uD83C\uDF3F",general_concern:"聽起來你遇到了一些挑戰，讓風鈴來幫你分析一下！"},p=l[o]||l.general_concern,d=`${p}

從你的生日 **${s}** 來看，你現在${c}歲，正值人生的重要階段！

`;return"work_problem"===o?d+=`🎯 **關於工作問題：**
這個年齡遇到職業轉換很正常，其實是個重新定位的好機會！
• 你的年紀正適合學習新技能或轉換跑道
• 建議考慮線上工作或新興產業
• 面試穿著建議：深藍色或灰色增加專業感`:"relationship_issue"===o?d+=`💕 **關於感情問題：**
${c}歲的感情經歷都是成長的養分，別太擔心！
• 這個階段重點是提升自己，好的感情自然會來
• 多參與興趣活動，容易遇到合適的人
• 心態調整：保持開放但不急躁`:"financial_concern"===o?d+=`💰 **關於財務問題：**
經濟困難是暫時的，重要的是建立正確的理財觀念！
• 優先處理必要支出，減少不必要消費
• 考慮發展副業或提升技能增加收入
• 投資自己永遠是最好的投資`:d+=`🌟 面對這個問題，重要的是保持正面心態和積極行動！`,d+=`

💫 每個困難都是成長的機會！

🔮 **專業建議：**
想要更詳細的分析和解決方案嗎？只需要告訴我你的性別，就能為你生成專屬的指導報告！`}(s,0,0);else if("bazi_direct"===s.analysisType)t=s.response;else if("bazi_analysis"===s.analysisType&&s.requiresAIAnalysis){console.log("\uD83D\uDD2E 八字分析需要 AI 處理");let e=new T,i=`用戶提供八字：${o}

請以風鈴的身份，用可愛親切的語氣為用戶分析八字。八字資料：
- 八字：${s.baziData?.baziString||""}
- 主要分析領域：${s.specificProblem||"八字分析"}

請按照以下格式生成回應：

🔮 風鈴看了你的八字，發現你有很特別的${s.detectedTopic||"運勢"}潛質呢！✨

**1. 命盤速讀**
八字：${s.baziData?.baziString||""}
五行屬性：[分析五行屬性]
[主要分析領域]宮主星：[對應主星]
   - 關鍵格局：
     [身強弱分析]
     用神：[用神分析]
     大運節點：[當前大運分析]

💖 哈囉親愛的[五行]命寶寶！風鈴來幫你分析${s.detectedTopic||"運勢"}啦～根據你的五行特質，[年份]年會是[運勢特點]的一年呢！(\xb4▽\`ʃ♡ƪ)

**2. 年度預警**  
✨成就星：[最佳時機]最旺！適合[具體建議]，記得把握[時間點]的黃金期～  
⚠️小人煞：[注意時期]有[煞星]！要避開[避免事項]，[注意事項]要[具體建議]喔！(๑•̀д•́)

注意：所有月份時間都使用新歷（西曆），例如：1月、2月、3月等，不要使用農歷。

**3. 你的${s.detectedTopic||"運勢"}分析**  
最近是不是感覺[觀察描述]呀？(歪頭) 未來3個月會有[預測內容]～記得發揮[命格優勢]的優勢，但[時期]後要[注意事項]唷！(๑\xaf◡\xaf๑)

**4. 開運小秘訣**  
🏡居家：在[方位]放[開運物品]（[最佳時機]最招運！）  
👛配件：選[顏色][材質][物品]，裡面放[開運配件]～  
💫行動：每[時間]的[時辰]最利喔！（偷偷說：[具體建議]很適合你）

[五行]命寶寶記得要多用[幸運顏色]系物品增強運氣呢～風鈴祝你[祝福語]！٩(◕‿◕)۶

───────────────────
💎 **想要更深入的分析嗎？**
根據你的狀況，風鈴為你推薦：

**1️⃣ 一份關於${s.detectedTopic||"運勢"}的詳細報告** 價值$88，限時優惠$38
- 深度分析您的八字命理
- 分析你的${s.detectedTopic||"運勢"}運勢，提供具體建議和改善方案
- 人際調衡要點

**2️⃣ 一份綜合命理報告** 價值$168，限時優惠$88
- 深度分析您的八字命理
- 流年大運走勢
- 全面覆蓋事業、財運、感情、健康等多個領域



**3️⃣ 一份居家佈局報告** 價值$388，限時優惠$188
- 根據您的八字提供專屬居家風水佈局建議
- 空間配色、家具擺放、植物擺設等具體方案

請回覆「1」、「2」或「3」選擇你想要的報告～

要求：
1. 保持風鈴可愛親切的語氣
2. 使用表情符號和可愛的語助詞
3. 提供具體實用的建議
4. 約400-500字
5. 重點分析用戶關注的領域（${s.detectedTopic||"整體運勢"}）
6. 所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，不要使用農歷`;try{let n=await e.callDeepSeekAPI([{role:"system",content:"你是專業的風水命理顧問，擅長八字分析和運勢預測。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 所有日期和月份都必須使用新歷（西曆/公曆），例如1月、2月、3月等，避免使用農歷表達方式 3. 不要在回應中包含字數統計標記 4. 保持專業且親切的語氣"},{role:"user",content:i}]);t=n&&n.choices&&n.choices[0]&&n.choices[0].message?n.choices[0].message.content:n,console.log("✅ 八字 AI 回應生成成功")}catch(e){console.error("❌ 八字 AI 回應生成失敗:",e),t=`很抱歉，系統暫時無法處理您的八字分析請求。請稍後重試或聯絡客服。`}}else if("emotional_support"===s.analysisType)console.log("\uD83D\uDC99 提供情緒支持回應"),t=s.response;else if("birthday_analysis"===s.analysisType)console.log("\uD83C\uDF82 處理生日分析"),t=s.enhancedResponse;else if("knowledge_explanation"===s.analysisType&&s.requiresAIAnalysis){console.log("\uD83E\uDDE0 知識詢問使用 AI 分析");let e=new T,i=`用戶詢問：${o}

請作為專業的風水命理老師，用不超過200字簡潔專業地解釋這個概念。要求：
1. 解釋清楚易懂
2. 突出實際應用價值  
3. 保持專業權威性
4. 語氣親切自然
5. 最後可以提及如果想了解個人狀況可以提供生日做分析

請直接給出解釋，不要說"我來解釋"之類的開場白。`;(t=await e.callDeepSeekAPI([{role:"system",content:"你是專業的風水命理顧問，擅長用簡潔易懂的方式解釋傳統概念。重要指示：1. 必須使用繁體中文回應，不可使用簡體中文 2. 不要在回應中包含字數統計標記 3. 保持專業且親切的語氣"},{role:"user",content:i}]))&&t.choices&&t.choices[0]&&t.choices[0].message&&(t=t.choices[0].message.content),n={...s,response:t}}else s.response?t=s.response:s.enhancedResponse?t=s.enhancedResponse:(console.log("⚠️ 增強結果沒有response或enhancedResponse字段"),t="抱歉，我正在處理您的請求，請稍候。");console.log("\uD83C\uDFAD 已應用自然對話優化")}else{console.log("⚡ 使用 AI 分析進行話題檢測");let e=new T;(n=await e.analyzeMessage(o,g))&&n.isWithinScope||(console.log("⚡ AI 分析失敗，使用關鍵詞匹配後備"),n=e.getFallbackAnalysis(o)),t=await e.generateServiceGuidance(n,o,g)}}catch(i){console.error("\uD83D\uDEA8 增強分析器錯誤，回退到 AI 分析:",i);let e=new T;try{n=await e.analyzeMessage(o,g)}catch(t){console.error("\uD83D\uDEA8 AI 分析也失敗，使用關鍵詞後備:",t),n=e.getFallbackAnalysis(o)}t=await e.generateServiceGuidance(n,o,g)}}}else{if(console.log("\uD83C\uDFAF 檢測到報告類型請求:",_),!P)return a.NextResponse.json({response:"請先開始一個對話再請求報告。",systemType:"smart-chat2"},{status:400});if("detailed_concern"===_){let e=P.primaryConcern||"運勢";if("couple"===P.relationshipAnalysisType&&P.userBirthday&&P.partnerBirthday)try{P.userBirthday.toISOString().split("T")[0],P.partnerBirthday.toISOString().split("T")[0];let i={compatibility:75,userElement:"金",partnerElement:"木",advice:"金木相配需要磨合，但能互相促進成長",fengShuiAdvice:"居家多用水元素協調金木相剋，如藍綠色裝飾品",userPersonality:"理性穩重，做事有條理",partnerPersonality:"活潑創新，富有想像力",userLoveStyle:"深情專一，重視承諾",partnerLoveStyle:"熱情表達，喜歡浪漫"},n=new u.A({userId:P.userEmail||"smart-chat2-user",sessionId:g,language:"zh-CN",userProfile:{birthday:P.userBirthday,gender:"male",element:i.userElement,personality:i.userPersonality,loveStyle:i.userLoveStyle},partnerProfile:{birthday:P.partnerBirthday,gender:"female",element:i.partnerElement,personality:i.partnerPersonality,loveStyle:i.partnerLoveStyle},compatibilityAnalysis:{overallScore:i.compatibility,relationshipAdvice:i.advice,developmentAdvice:"建議多參與共同活動，增進彼此了解",specificAdvice:"建議多溝通，理解彼此不同的表達方式",communicationAdvice:"建議多溝通，理解彼此不同的表達方式",challenges:"性格差異較大，需要耐心磨合",strengths:"能夠互補，共同成長"},yearlyFortune:{currentYear:"今年感情運勢整體向好，適合深化關係",bestTiming:"春秋兩季是感情發展的好時機",warnings:"夏季需要注意溝通問題，避免爭執"},fengShuiLayout:{bedroom:"床頭朝東南方，使用粉色或淺藍色床品",livingRoom:"客廳放置成對裝飾品，增強感情和諧",colors:"粉色、金色、淺綠色",items:"玫瑰石英、成對的擺件、鮮花",generalAdvice:i.fengShuiAdvice},reportMetadata:{concern:"感情",reportType:"detailed_concern",generatedAt:new Date,originalSpecificProblem:P.originalSpecificProblem||P.specificQuestion||"感情變淡，關係疏離"}}),r=await n.save();console.log("\uD83D\uDD2E Smart-Chat2 合婚報告已保存，ID:",r._id),z=`/zh-CN/couple-report?id=${r._id}`,console.log("\uD83D\uDD17 生成的合婚報告URL:"),console.log("   報告ID:",r._id),console.log("   完整URL:",z),t=`✨ 太好了！你的專屬${e}詳細報告已經準備好了！

正在為你打開報告頁面...`}catch(e){console.error("❌ Smart-Chat2 生成合婚報告失敗:",e),t=`抱歉，生成報告時發生錯誤，請稍後再試。`,z=null}else if(P.userBirthday){let i=new URLSearchParams({birthday:P.userBirthday.toISOString().split("T")[0],gender:"男",concern:e,problem:P.originalSpecificProblem||P.specificQuestion||`${e}分析`});z=`/zh-CN/feng-shui-report?${i.toString()}`,t=`✨ 太好了！你的專屬${e}詳細報告已經準備好了！

正在為你打開報告頁面...`}else t=`✨ 太好了！我將為你生成一份專業的${e}詳細報告。

這份報告將包含：
🎯 深度${e}分析
📈 具體改善建議  
🔮 時機把握指導
🏠 相關風水調整

正在準備你的專屬報告...`,M=!0;return n={isWithinScope:!0,detectedTopic:e,specificProblem:`用戶選擇詳細${e}報告`,confidence:.95,reportChoice:!0},a.NextResponse.json({response:t,analysis:n,reportUrl:z,shouldTriggerModal:M,systemType:"smart-chat2"})}}try{if(P){if(C){P.conversationState="asking_detailed_report";let e=o.replace(/[年月日]/g,"-").replace(/[/]/g,"-").match(/(\d{4})-(\d{1,2})-(\d{1,2})/);if(e){let[,t,i,n]=e,r=`${t}-${i.padStart(2,"0")}-${n.padStart(2,"0")}`;P.userBirthday=new Date(r)}else P.userBirthday=new Date(o);P.originalSpecificProblem||(P.originalSpecificProblem=P.specificQuestion||"一般諮詢"),(!P.specificQuestion||P.specificQuestion.includes("生日分析"))&&("individual"===P.relationshipAnalysisType?P.specificQuestion="個人感情分析":"couple"===P.relationshipAnalysisType?P.specificQuestion="合婚配對分析":P.specificQuestion=`${P.primaryConcern}諮詢`)}else if(n.isWithinScope){let e=P.primaryConcern,t=n.detectedTopic;t=n.isEnhanced?new(i(64102))().mapTopicToValidEnum(n.detectedTopic):({感情:"感情",財運:"財運",工作:"工作",健康:"健康",其他:"其他"})[n.detectedTopic]||"其他",P.primaryConcern=t,P.specificQuestion=n.specificProblem,n.specificProblem&&n.specificProblem.trim().length>0&&n.confidence>.7&&!n.specificProblem.includes("用戶選擇")&&!n.specificProblem.includes("无法确定")&&!n.specificProblem.includes("数字")&&(!P.originalSpecificProblem||e!==t||P.originalSpecificProblem&&P.originalSpecificProblem.includes("今天天氣很好"))?(P.originalSpecificProblem=n.specificProblem,console.log(`🆕 更新 originalSpecificProblem: ${n.specificProblem}`),console.log(`   原因: ${P.originalSpecificProblem?e!==t?"主題改變":"更新無關話題":"初次設置"}`)):(console.log(`🔒 保護原始問題，不覆蓋: ${P.originalSpecificProblem}`),console.log(`   當前分析結果: ${n.specificProblem} (信心度: ${n.confidence})`)),e&&e!==t?(console.log(`🔄 主題從 ${e} 切換到 ${t}，重置原始問題和關係分析類型`),P.originalSpecificProblem=n.specificProblem,P.relationshipAnalysisType="individual",P.partnerBirthday=null,P.conversationState="concern_detected"):"感情"===e&&"感情"!==n.detectedTopic&&(console.log(`🔄 從感情切換到其他領域，重置關係分析類型`),P.relationshipAnalysisType="individual",P.partnerBirthday=null,P.conversationState="concern_detected"),P.originalSpecificProblem&&n.specificProblem&&P.originalSpecificProblem!==n.specificProblem&&(P.originalSpecificProblem.includes("天氣")||P.originalSpecificProblem.includes("吃什麼")||"工作"===t&&P.originalSpecificProblem.includes("女朋友")||"工作"===t&&P.originalSpecificProblem.includes("感情")||"感情"===t&&P.originalSpecificProblem.includes("工作")||"感情"===t&&P.originalSpecificProblem.includes("升職"))&&(console.log(`🔄 檢測到原始問題不相關，強制更新: "${P.originalSpecificProblem}" → "${n.specificProblem}"`),P.originalSpecificProblem=n.specificProblem)}}else P=new p.A({userEmail:m,userId:y,sessionId:g,conversationState:"ai_analyzing",specificQuestion:n.specificProblem,primaryConcern:n.isWithinScope?n.detectedTopic:null,originalSpecificProblem:n.specificProblem});P.aiAnalysis={...n,lastAnalyzed:new Date},await P.save(),await w(g,y,o,t,n,P)}catch(e){console.error("\uD83D\uDEA8 數據庫保存失敗:",e)}if(h&&$&&!o?.trim()){console.log("\uD83C\uDFAF 檢測到模態框提交:",{userBirthday:h,gender:$,reportType:_});let e=S(h);if(e){P.userBirthday=e,P.conversationState="ready_for_detailed_report";let t=P.primaryConcern||"綜合運勢",i=P.specificQuestion||`想了解${t}方面的運勢和風水建議`;if("couple"===P.relationshipAnalysisType&&P.partnerBirthday){let e=new URLSearchParams({userBirthday:h,partnerBirthday:P.partnerBirthday.toISOString().split("T")[0],userGender:$,concern:t,problem:P.originalSpecificProblem||P.specificQuestion||i,analysisType:"couple",originalProblem:P.originalSpecificProblem||P.specificQuestion||"感情變淡，關係疏離"});z=`/zh-CN/couple-report?${e.toString()}`,console.log("\uD83D\uDC95 Smart-Chat2 生成合婚報告URL:",z)}else{let e=new URLSearchParams({birthday:h,gender:$,concern:t,problem:P.originalSpecificProblem||P.specificQuestion||i});z=`/zh-CN/feng-shui-report?${e.toString()}`,console.log("\uD83D\uDCCA Smart-Chat2 生成詳細報告URL:",z)}return a.NextResponse.json({response:"✨ 專屬風水分析報告已生成！正在為你打開報告頁面...",concern:t,emotion:"hopeful",conversationState:"ready_for_detailed_report",hasReport:!0,shouldTriggerModal:!1,reportUrl:z,needsBirthday:!1,specificQuestion:i,systemType:"smart-chat2"})}}return console.log("\uD83D\uDD0D API 回應準備階段 - specificProblem 檢查:"),console.log("   analysis?.specificProblem:",n?.specificProblem),console.log("   userIntent?.specificQuestion:",P?.specificQuestion),console.log("   message:",o),console.log("   最終 specificProblem 值:",n?.specificProblem||P?.specificQuestion||o),a.NextResponse.json({response:t,aiAnalysis:n,conversationState:P?.conversationState||"ai_analyzed",systemType:"smart-chat2",timestamp:new Date().toISOString(),concern:P?.primaryConcern||n?.detectedTopic,emotion:"neutral",shouldTriggerModal:M,reportUrl:z,reportType:P?.reportType,needsBirthday:!P?.userBirthday,specificQuestion:P?.specificQuestion,specificProblem:n?.specificProblem||P?.specificQuestion||o,relationshipAnalysisType:P?.relationshipAnalysisType,isCoupleAnalysis:P?.relationshipAnalysisType==="couple",hasCouplesBirthdays:!!I})}catch(e){return console.error("\uD83D\uDEA8 Smart-Chat2 錯誤:",e),a.NextResponse.json({response:"抱歉，系統暫時遇到問題。不過我還是很想幫你！不如告訴我你的生日，讓我為你做個簡單的運勢分析？ \uD83D\uDCC5 格式：1990-05-15",error:"系統錯誤",systemType:"smart-chat2"},{status:500})}}async function w(e,t,i,n,r,s){try{let o=await d.A.findOne({conversationId:e,userId:t});return o||(o=new d.A({conversationId:e,sessionId:e,userId:t,userEmail:s?.userEmail||"anonymous",title:function(e,t){if(t&&"string"==typeof t&&t.trim()){let e=t.replace(/\s+/g," ").trim();return e.length>40?e.substring(0,40)+"...":e}let i={感情:"感情諮詢",工作:"工作運勢",財運:"財運分析",健康:"健康運勢"};return e&&i[e]?i[e]:"風水諮詢"}(s?.primaryConcern,i),primaryConcern:s?.primaryConcern||"其他",conversationState:s?.conversationState||"initial",messages:[],context:{topics:s?.primaryConcern?[s.primaryConcern]:[],lastTopic:s?.primaryConcern,conversationSummary:"",emotionalState:r?.emotionalState},userData:{userBirthday:s?.userBirthday,partnerBirthday:s?.partnerBirthday,gender:s?.gender,partnerGender:s?.partnerGender,relationshipType:s?.relationshipAnalysisType}})),i&&o.addMessage("user",i),n&&o.addMessage("assistant",n,r),r&&r.detectedTopic&&o.updateContext(r.detectedTopic,r.emotionalState),s?.conversationState&&(o.conversationState=s.conversationState),await o.save(),console.log(`💾 對話已保存到ChatHistory: ${e}`),o}catch(e){return console.error("❌ 保存ChatHistory失敗:",e),null}}let A=new r.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/smart-chat2/route",pathname:"/api/smart-chat2",filename:"route",bundlePath:"app/api/smart-chat2/route"},resolvedPagePath:"/Users/michaelng/Desktop/HarmoniqFengShui/FengShuiLayout/src/app/api/smart-chat2/route.js",nextConfigOutput:"",userland:n}),{workAsyncStorage:_,workUnitAsyncStorage:P,serverHooks:C}=A;function I(){return(0,o.patchFetch)({workAsyncStorage:_,workUnitAsyncStorage:P})}},96487:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),n=t.X(0,[7719,580,7380,9916,5663,2395],()=>i(81902));module.exports=n})();