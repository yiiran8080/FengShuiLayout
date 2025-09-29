"use strict";exports.id=3034,exports.ids=[3034],exports.modules={29200:(e,t,s)=>{s.d(t,{Ay:()=>y});var a=s(50384),n=s(56207),r=s(87502),i=s(62012),l=s(36248),o=s.n(l),d=s(87364);i.A.extend(a.t).extend(n.sM).extend(r.z0);let c=(0,i.A)(o()().format("YYYY-MM-DD")).char8.year.toString(),{LYGanzhiMap:m,LYzhiMap:x,LYStarMap:h,LYSihuaMap:f,spouseStarMap:g,spouseSihuaMap:p}=function(){let e=o()().format("YYYY"),t={},s={},a={},n={},r={},i={};for(let l=1;l<=12;l++){let o=e+"-"+(l<10?"0"+l:""+l)+"-15",c=d.astro.bySolar(o,0,"男",!0,"zh-CN").horoscope(o);s[l]=c.monthly.earthlyBranch,t[l]=c.monthly.heavenlyStem+c.monthly.earthlyBranch,a[l]=c.palace("命宫","monthly").majorStars.map(e=>e.name).toString(),r[l]=c.palace("夫妻","monthly").majorStars.map(e=>e.name).toString(),n[l]=c.palace("命宫","monthly").mutagedPlaces().map(e=>e.name).toString(),i[l]=c.palace("夫妻","monthly").mutagedPlaces().map(e=>e.name).toString()}return{LYGanzhiMap:t,LYzhiMap:s,LYStarMap:a,LYSihuaMap:n,spouseStarMap:r,spouseSihuaMap:i}}();(function(){let e=o()().format("YYYY-MM-DD");(0,i.A)(e).char8.month.toString()})(),function(){let e=o()().format("YYYY-MM-DD");d.astro.bySolar(e,0,"男",!0,"zh-CN").horoscope(e,0).palace("夫妻","yearly").majorStars.map(e=>e.name).toString()}();let u={};function y(e,t){var s;let a=o()(e).format("YYYY-MM-DD HH:mm:ss");if(console.log("birthStr",a),u[a+"-"+t])return u[a+"-"+t];let n=Math.floor(o()(e).hour()/2),r=o()(e).format("YYYY-MM-DD"),l=d.astro.bySolar(r,n,"female"==t?"女":"男",!0,"zh-CN"),m=l.palace("命宫"),x=l.palace("身宫"),h=l.palace("迁移").majorStars.map(e=>e.name).toString(),f=l.horoscope(r,n),g=(0,i.A)(a),p=function(e,t,s,a,n,r,i,l){let o={金:0,木:0,水:0,火:0,土:0},d=[e,t,s,a,n,r,i,l];d.forEach(e=>{["金","木","水","火","土"].includes(e)&&o[e]++});let c=d.length;return`金:${(o.金/c*100).toFixed(2)}%，木:${(o.木/c*100).toFixed(2)}%，水:${(o.水/c*100).toFixed(2)}%，火:${(o.火/c*100).toFixed(2)}%，土:${(o.土/c*100).toFixed(2)}%`}(g.char8.year.stem.e5.name,g.char8.year.branch.e5.name,g.char8.month.stem.e5.name,g.char8.month.branch.e5.name,g.char8.day.stem.e5.name,g.char8.day.branch.e5.name,g.char8.hour.stem.e5.name,g.char8.hour.branch.e5.name),y=g.char8.day.branch.hiddenStems.map(e=>e.name).toString(),N=g.char8.year.branch.hiddenStems,j=g.char8.month.branch.hiddenStems,S=g.char8.day.branch.hiddenStems,w=g.char8.hour.branch.hiddenStems,v=g.char8ex(+("female"!==t)),F=v.year,A=v.month,$=v.day,C=v.hour,T={nayin:g.char8.year.takeSound,wuxingJu:(s=g.char8.year.takeSoundE5.toString(),`${s}${b[s]}局`),year:g.char8.year.toString(),month:g.char8.month.toString(),day:g.char8.day.toString(),hour:g.char8.hour.toString(),wuxingScale:p,rizhiCanggan:y,mingPalace:`{主星：${m.majorStars.map(e=>e.name).toString()},主星亮度：${m.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${m.minorStars.map(e=>e.name).toString()}, 四化：${m.mutagedPlaces().map(e=>e.name).toString()}}`,bodyPalace:`{主星：${x.majorStars.map(e=>e.name).toString()},主星亮度：${x.majorStars.map(e=>e.brightness||"").toString()}, 辅星： ${x.minorStars.map(e=>e.name).toString()}, 四化：${x.mutagedPlaces().map(e=>e.name).toString()}}`,qianyiPalace:h,dayunGanzhi:f.decadal.heavenlyStem+f.decadal.earthlyBranch,liunianGanzhi:c,yearStemTenGod:F.stemTenGod.name,yearBranchTenGod:F.branchTenGod.map(e=>e.name).toString(),monthStemTenGod:A.stemTenGod.name,monthBranchTenGod:A.branchTenGod.map(e=>e.name).toString(),dayStemTenGod:$.stemTenGod.name,dayBranchTenGod:$.branchTenGod.map(e=>e.name).toString(),hourStemTenGod:C.stemTenGod.name,hourBranchTenGod:C.branchTenGod.map(e=>e.name).toString(),yearGods:F.gods.map(e=>e.name).toString(),monthGods:A.gods.map(e=>e.name).toString(),dayGods:$.gods.map(e=>e.name).toString(),yearStem:g.char8.year.stem.name,yearStemWuxing:g.char8.year.stem.e5.name,yearBranch:g.char8.year.branch.name,yearBranchWuxing:g.char8.year.branch.e5.name,monthStem:g.char8.month.stem.name,monthStemWuxing:g.char8.month.stem.e5.name,monthBranch:g.char8.month.branch.name,monthBranchWuxing:g.char8.month.branch.e5.name,dayStem:g.char8.day.stem.name,dayStemWuxing:g.char8.day.stem.e5.name,dayBranch:g.char8.day.branch.name,dayBranchWuxing:g.char8.day.branch.e5.name,hourStem:g.char8.hour.stem.name,hourStemWuxing:g.char8.hour.stem.e5.name,hourBranch:g.char8.hour.branch.name,hourBranchWuxing:g.char8.hour.branch.e5.name,yearNayin:g.char8.year.takeSound,monthNayin:g.char8.month.takeSound,dayNayin:g.char8.day.takeSound,hourNayin:g.char8.hour.takeSound,yearNayinWuxing:g.char8.year.takeSoundE5.toString(),monthNayinWuxing:g.char8.month.takeSoundE5.toString(),dayNayinWuxing:g.char8.day.takeSoundE5.toString(),hourNayinWuxing:g.char8.hour.takeSoundE5.toString(),yearBranchHiddenStems:N.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),monthBranchHiddenStems:j.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),dayBranchHiddenStems:S.map(e=>({stem:e.name,element:e.e5.name,strength:e.value})),hourBranchHiddenStems:w.map(e=>({stem:e.name,element:e.e5.name,strength:e.value}))};return u[a+"-"+t]=T,console.log("result",T),T}let b={水:"二",木:"三",金:"四",土:"五",火:"六"}},33034:(e,t,s)=>{s.d(t,{default:()=>w});var a=s(60687),n=s(43210),r=s(16189),i=s(8610),l=s(77618),o=s(30474),d=s(53234),c=s(67821),m=s(29200);let x=(e,t)=>{let{birthDateTime:s,gender:a}=e,n=new Date(s),r=new Date().getFullYear()-n.getFullYear(),i=t.dayStem,l=t.dayBranch,o=t.monthStem,d=t.monthBranch,c=t.yearStem,m=t.yearBranch,x=t.hourStem,h=t.hourBranch,f=t.dayStemWuxing,g=t.monthStemWuxing;return`請根據以下八字資料進行個人化健康運勢分析，並以JSON格式輸出：

八字資料：
- 日主：${i}${f}（生於${d}月${o}${g}）
- 四柱：${c}${m}年柱、${o}${d}月柱、${i}${l}日柱、${x}${h}時柱
- 性別：${"male"===a?"男":"女"}性
- 現年：${r}歲
- 出生年份：${n.getFullYear()}年

請嚴格按照以下JSON格式輸出分析結果：

\`\`\`json
{
  "summary": {
    "title": "核心健康特質總結（例：水土交戰，養腎固本為要）",
    "description": "基於八字五行生剋關係的整體健康評述，包含核心矛盾和調和重點"
  },
  "systems": {
    "腎骨系統核心": {
      "title": "腎骨系統核心",
      "content": {
        "description": "基於日主${f}和時柱分析腎骨系統特質",
        "advantages": "先天優勢：骨骼密度、修復能力等具體表現",
        "risks": [
          {
            "period": "${"male"===a?"男性":"女性"}青年期 (20-35歲)",
            "description": "具體健康風險和症狀表現"
          },
          {
            "period": "未來大運期間（具體年份）",
            "description": "長期健康隱患和預防重點"
          }
        ],
        "keyYears": "關鍵年份提醒：${n.getFullYear()+35}年、${n.getFullYear()+45}年等具體年份的注意事項"
      }
    },
    "代謝循環特質": {
      "title": "代謝循環特質",
      "content": {
        "description": "基於火土水關係分析代謝循環系統",
        "bloodCharacteristics": "血液特質：粘稠度、循環狀況及檢測建議",
        "digestiveFeatures": "消化特徵：脾胃功能強弱、飲食宜忌",
        "skinConcerns": "皮膚狀況：屏障功能、季節性問題預防"
      }
    },
    "神經免疫平衡": {
      "title": "神經免疫平衡",
      "content": {
        "description": "基於木火關係分析神經免疫系統",
        "advantages": "優勢特質：應激反應、免疫力強度",
        "weaknesses": "潛在弱點：睡眠品質、神經調節問題",
        "periodicPattern": "週期性規律：生肖年份對健康的影響模式"
      }
    }
  },
  "careRegimen": {
    "diet": "個人化飲食方案：具體的晨起養生、午間調養、季節性飲食建議，包含具體分量和時間",
    "acupoints": "經絡調養：具體穴位名稱、按摩時間（如每晚7-9點按摩湧泉穴3分鐘）、最佳時段",
    "exercise": "運動建議：最適合的運動類型、頻率（如游泳週2-3次每次30分鐘）、需避免的時段",
    "lifeStageReminder": "大運提醒：下個大運起始年份${n.getFullYear()+10*Math.floor(r/10)+10}年的健康重點和調養強化"
  }
}
\`\`\`

分析要求：
1. 深度結合八字五行生剋關係
2. 考慮${"male"===a?"男性":"女性"}生理特點
3. 提供具體可操作的建議（時間、頻率、劑量）
4. 預測具體年份的健康變化
5. 語言專業但易懂，使用傳統中文
6. 必須輸出標準JSON格式，不要添加任何額外說明

請開始分析：`};function h(){return{currentDayun:"丙寅",currentAge:25,birthYear:2e3,periods:f()}}function f(){return[{dayun:"甲子",ageRange:"15-24歲",yearRange:"2015-2024",status:"past",startYear:2015,endYear:2024,startAge:15,endAge:24},{dayun:"丙寅",ageRange:"25-34歲",yearRange:"2025-2034",status:"current",startYear:2025,endYear:2034,startAge:25,endAge:34},{dayun:"丁卯",ageRange:"35-44歲",yearRange:"2035-2044",status:"future",startYear:2035,endYear:2044,startAge:35,endAge:44},{dayun:"壬戌",ageRange:"45-54歲",yearRange:"2045-2054",status:"future",startYear:2045,endYear:2054,startAge:45,endAge:54}]}function g(e,t,s=2025){let a=function(e,t,s=2025){if(!e||!t)return console.error("Birth date and gender are required for fortune period calculation"),h();try{let a=(0,m.Ay)(e,t);if(!a||!a.dayunGanzhi)return console.error("Unable to calculate wuxing data"),h();let n=new Date(e),r=n.getFullYear(),i=s-r,l=function(e,t){let s=e.getMonth()+1;return"male"===t?s%2==1?7:5:s%2==0?6:4}(n,t),o=function(e,t,s,a,n){let r=["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"],i=["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"],l=e[0],o=e[1],d=r.indexOf(l),c=i.indexOf(o);if(-1===d||-1===c)return console.error("Invalid dayun format:",e),f();let m=[],x=10*Math.floor((n-s)/10)+s;for(let e=-2;e<=3;e++){let s=x+10*e,n=t+s,l=n+9,o=(d+e+10)%10,h=(c+e+12)%12,f=r[o]+i[h],g="future";a>=n&&a<=l?g="current":a>l&&(g="past"),m.push({dayun:f,ageRange:`${s}-${s+9}歲`,yearRange:`${n}-${l}`,status:g,startYear:n,endYear:l,startAge:s,endAge:s+9})}return m.sort((e,t)=>e.startYear-t.startYear)}(a.dayunGanzhi,r,l,s,i);return{currentDayun:a.dayunGanzhi,currentAge:i,birthYear:r,periods:o}}catch(e){return console.error("Error calculating fortune periods:",e),h()}}(e,t,s),n=a.periods.filter(e=>"current"===e.status||"future"===e.status).slice(0,3);return{current:a.currentDayun,periods:n,birthYear:a.birthYear,currentAge:a.currentAge}}let p=({userInfo:e,wuxingData:t,sessionId:s,onDataUpdate:r})=>{let[i,l]=(0,n.useState)("腎骨系統核心"),[o,d]=(0,n.useState)(null),[c,m]=(0,n.useState)(!0),[h,f]=(0,n.useState)(!1),p=e?.birthDateTime?g(e.birthDateTime,e.gender):null;(0,n.useEffect)(()=>{e&&t&&u()},[e,t]);let u=async()=>{try{m(!0);let a=x(e,t),n=await fetch("/api/health-fortune-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a,userInfo:e,wuxingData:t})}),i=await n.json();if(i.success)d(i.analysis),f(i.isAIGenerated||!1),console.log(`🎯 Using ${i.isAIGenerated?"DeepSeek AI":"Structured Mock"} data`),r&&i.analysis&&(console.log("\uD83D\uDCBE Saving health fortune analysis data"),r({analysis:i.analysis,isAIGenerated:i.isAIGenerated||!1,generatedAt:new Date().toISOString(),sessionId:s,userInfo:e,wuxingData:t}));else{console.warn("API failed, using mock data:",i.error);let a=y(e,t);d(a),f(!1),r&&a&&(console.log("\uD83D\uDCBE Saving mock health fortune analysis data"),r({analysis:a,isAIGenerated:!1,generatedAt:new Date().toISOString(),sessionId:s,userInfo:e,wuxingData:t}))}}catch(n){console.error("Error generating health analysis:",n);let a=y(e,t);d(a),r&&a&&(console.log("\uD83D\uDCBE Saving error fallback health fortune analysis data"),r({analysis:a,isAIGenerated:!1,generatedAt:new Date().toISOString(),sessionId:s,userInfo:e,wuxingData:t,isErrorFallback:!0}))}finally{m(!1)}},y=(e,t)=>{let s=new Date(e.birthDateTime);new Date().getFullYear(),s.getFullYear();let a=t.dayStem||"癸",n=t.dayStemWuxing||"水";return{summary:{title:`${n}${a}交戰，養腎固本為要`,description:`日主${a}${n}坐${t.dayBranch||"丑"}土七殺，生於${t.monthBranch||"巳"}月火旺之時，時柱${t.hourStem||"壬"}${t.hourBranch||"子"}劫財助身。月支${t.monthBranch||"巳"}火生旺己土七殺，形成「火生土→土剋水」的攻身格局，健康需重點調和${n}土矛盾。`},systems:{腎骨系統核心:{title:"腎骨系統核心",content:{description:`${a}${n}通腎，日支${t.dayBranch||"丑"}土為濕土晦火存水，雖有調和作用，但月柱己巳火土熾烈。`,advantages:"時柱壬子強根護持，骨骼密度佳，傷口癒合能力強",risks:[{period:`青年期 (${p?.periods?.[0]?.ageRange||"20-35歲"})`,description:"火土運旺易耗腎陰，可能出現經期不準、腰肌勞損"},{period:`${p?.periods?.[2]?.yearRange||"2040年後"}${p?.periods?.[2]?.dayun||"丙寅"}運`,description:`${p?.periods?.[2]?.dayun?.[1]||"寅"}巳申三刑，需防關節退行性病變`}],keyYears:"2026丙午（火極）、2038戊午（三合火局）避免高溫曝曬"}},代謝循環特質:{title:"代謝循環特質",content:{description:"巳火當令透己土，火土旺而水受制：",bloodCharacteristics:"血粘稠度易偏高（火煉金→金生水不足），2031辛亥年後需定期檢測血脂",digestiveFeatures:"丑土為濕土，常現脾胃濕熱（食慾好但消化滯緩），忌冰飲加重濕氣",skinConcerns:"己土七殺主皮膚屏障弱，換季易發蕁麻疹（2024甲辰年辰丑破尤甚）"}},神經免疫平衡:{title:"神經免疫平衡",content:{description:"年柱甲木傷官制殺，時柱劫財幫身：",advantages:"應激反應敏捷，疫苗抗體生成力強",weaknesses:"子水為「夜神」，熬夜易致植物神經紊亂（頭皮出油、入睡困難）",periodicPattern:"每逢鼠年（子）、馬年（午）睡眠質量波動明顯"}}},careRegimen:{diet:"晨起飲淡鹽水（50ml，鹽1g）固腎，補癸水鹹味需求；午後小米粥健脾養胃；秋季每日食用銀耳蓮子湯，滋陰潤肺，養心安神。",acupoints:"每晚5點到7點，按摩腳底湧泉穴（每腳3分鐘）和三陰交（每邊5分鐘），幫忙調氣血、穩陰陽。",exercise:"游泳最合適（一周2-3次，每次30-45分鐘），補水又降火，增強體力；中午11點到1點別劇烈運動，免得傷心氣。",lifeStageReminder:`${p?.periods?.[1]?.startYear||"2029"}年開始走${p?.periods?.[1]?.dayun||"丙寅"}運，春天（3-5月）要做肝膽排毒（像喝蒲公英茶或找專業調理），幫肝臟順氣，順應節氣變化。`}}};return c?(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成健康運勢分析..."})]}):o?(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("div",{className:"flex items-center gap-3 mb-4",children:(0,a.jsx)("h2",{className:"text-4xl font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:"健康運勢分析"})}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#389D7D] to-[#567156] rounded-full px-6 py-3 mb-6 inline-block",children:(0,a.jsxs)("h3",{className:"text-xl font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:["總結：",o.summary.title]})}),(0,a.jsx)("p",{className:"text-lg text-[#374A37] leading-relaxed mb-8",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.summary.description})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-xl p-6 mb-6",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#567156] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"三大系統深度解析"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-6 mb-8",children:["腎骨系統核心","代謝循環特質","神經免疫平衡"].map(e=>(0,a.jsx)("button",{onClick:()=>l(e),className:`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${i===e?"bg-[#389D7D] text-white":"bg-white text-[#757575] hover:bg-gray-50"}`,style:{fontFamily:"Noto Serif TC, serif",boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"},children:e},e))}),(0,a.jsx)("div",{className:"mb-8",children:o.systems[i]&&(0,a.jsx)("div",{className:"bg-[#389D7D] rounded-xl p-6 text-white mb-6",children:((e,t)=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{className:"mb-4 text-2xl font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:(e=>{switch(e){case"腎骨系統核心":return"優勢";case"代謝循環特質":return"弱點";case"神經免疫平衡":return"週期規律";default:return"分析"}})(e)}),(0,a.jsx)("p",{className:"mb-6 text-lg",style:{fontFamily:"Noto Sans HK, sans-serif"},children:((e,t)=>"腎骨系統核心"===e?t.advantages:t.description)(e,t.content)}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-3",children:((e,t)=>{switch(e){case"腎骨系統核心":return[{title:"先天優勢",text:t.advantages},{title:"潛在風險",text:Array.isArray(t.risks)?t.risks.map(e=>`${e.period}: ${e.description}`).join("；"):"青年期（20 - 35歲）：火土運旺易耗腎陰，可能出現經期不準、腰肌勞損"},{title:"關鍵年份",text:t.keyYears}];case"代謝循環特質":return[{title:"血液特質",text:t.bloodCharacteristics},{title:"消化特徵",text:t.digestiveFeatures},{title:"皮膚隱患",text:t.skinConcerns}];case"神經免疫平衡":return[{title:"先天優勢",text:t.advantages},{title:"潛在風險",text:t.weaknesses},{title:"關鍵年份",text:t.periodicPattern}];default:return[]}})(e,t.content).map((e,t)=>(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-white/20",children:[(0,a.jsx)("h5",{className:"mb-2 font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:e.title}),(0,a.jsx)("p",{style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.text})]},t))})]}))(i,o.systems[i])})})]}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#567156] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"全週期調養方案"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4",children:[(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"作息"})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.careRegimen.diet})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"經絡"})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.careRegimen.acupoints})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"運動"})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.careRegimen.exercise})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#389D7D] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"大運提醒"})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.careRegimen.lifeStageReminder})]})]})]})]}):(0,a.jsx)("div",{className:"py-20 text-center",children:(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"健康分析生成失敗，請重新整理頁面"})})};var u=s(4780);n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,u.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t})).displayName="Card",n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,u.cn)("flex flex-col space-y-1.5 p-6",e),...t})).displayName="CardHeader",n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("h3",{ref:s,className:(0,u.cn)("text-2xl font-semibold leading-none tracking-tight",e),...t})).displayName="CardTitle",n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("p",{ref:s,className:(0,u.cn)("text-sm text-muted-foreground",e),...t})).displayName="CardDescription",n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,u.cn)("p-6 pt-0",e),...t})).displayName="CardContent",n.forwardRef(({className:e,...t},s)=>(0,a.jsx)("div",{ref:s,className:(0,u.cn)("flex items-center p-6 pt-0",e),...t})).displayName="CardFooter",s(96834),s(85763);let y=(e,t)=>{let{birthDateTime:s,gender:a}=e,n=new Date(s),r=new Date().getFullYear(),i=r-n.getFullYear(),l=t.dayStem,o=t.dayBranch,d=t.monthStem,c=t.monthBranch,m=t.yearStem,x=t.yearBranch,h=t.hourStem,f=t.hourBranch,g=t.dayStemWuxing,p=t.monthStemWuxing;return`請根據以下八字資料進行個人化事業運勢分析，並以JSON格式輸出：

八字資料：
- 日主：${l}${g}（生於${c}月${d}${p}）
- 四柱：${m}${x}年柱、${d}${c}月柱、${l}${o}日柱、${h}${f}時柱
- 性別：${"male"===a?"男":"女"}性
- 現年：${i}歲
- 出生年份：${n.getFullYear()}年

請嚴格按照以下JSON格式輸出分析結果：

\`\`\`json
{
  "summary": {
    "title": "格局定位（例：傷官制殺，專業權威之路）",
    "description": "基於八字十神組合的事業格局分析，包含核心優勢和適合職業方向"
  },
  "talents": {
    "天賦特質解碼": {
      "title": "天賦特質解碼",
      "content": [
        {
          "name": "十神A（如：${m}${x}傷官）",
          "description": "核心優勢能力特質分析，具體工作表現和創新能力",
          "attention": "注意事項：過旺風險及化解方案（如佩戴飾品、風水佈局）"
        },
        {
          "name": "十神B（如：${d}${c}七殺）", 
          "description": "執行特質和領導能力分析，承壓能力和權威表現",
          "attention": "注意事項：壓力訊號及風水佈局建議"
        },
        {
          "name": "十神C（如：${h}${f}正印）",
          "description": "智慧特質和學習能力，專業深度和分析能力",
          "attention": "注意事項：避免過度思慮，保持行動力"
        }
      ]
    },
    "二十年黃金賽道": {
      "title": "二十年黃金賽道", 
      "content": {
        "periods": [
          {
            "years": "${r} - ${r+10}",
            "luck": "大運名稱",
            "action": "關鍵動作（如考照/組隊/創業）",
            "bestYear": "最佳流年（具體年份）",
            "warning": "風險預警（因刑衝破害）"
          },
          {
            "years": "${r+10} - ${r+20}",
            "luck": "大運名稱",
            "action": "進階動作（如擴張/上市）", 
            "bestYear": "契機流年（具體年份）",
            "warning": "人際風險預警"
          },
          {
            "years": "${r+20} - ${r+30}",
            "luck": "大運名稱",
            "action": "巔峰動作（如行業標準制定）",
            "bestYear": "關鍵年份",
            "warning": "下屬管理風險"
          }
        ]
      }
    },
    "權力巔峰標誌": {
      "title": "權力巔峰標誌",
      "content": {
        "peakYear": "具體年份（如${r+25}年）",
        "peakDescription": "權力表現（如掌機構決策權）",
        "bestPartners": "最佳合作生肖組合（三合六合）",
        "avoidIndustries": "行業紅線：需避免的行業及原因"
      }
    }
  },
  "strategies": {
    "officeLayout": {
      "title": "辦公室佈局",
      "description": "具體方位和開運物品",
      "details": "詳細擺放說明：位置、材質、朝向要求",
      "warning": "禁忌事項：需避免的顏色和物品"
    },
    "annualStrategy": {
      "title": "流年借力",
      "year": "特定年份為格局名稱",
      "description": "該年天干地支組合的格局優勢",
      "benefit": "具體利用方式：升職、決策、投資時機"
    },
    "lifelongTaboo": {
      "title": "終身禁忌",
      "warning": "觸發危機的具體行為",
      "reason": "基於十神理論的詳細解釋和後果分析"
    }
  }
}
\`\`\`

分析要求：
1. 深度結合八字十神理論和大運流年
2. 考慮${"male"===a?"男性":"女性"}職場特點
3. 提供具體可操作的建議（時間、方位、物品）
4. 預測未來20-30年的關鍵時機
5. 語言專業但實用，使用傳統中文
6. 必須輸出標準JSON格式，不要添加任何額外說明

請開始分析：`},b=({userInfo:e,wuxingData:t,sessionId:s,onDataUpdate:r})=>{let[i,l]=(0,n.useState)("天賦特質解碼"),[o,d]=(0,n.useState)(null),[c,m]=(0,n.useState)(!0),[x,h]=(0,n.useState)(!1),f=e?.birthDateTime?g(e.birthDateTime,e.gender):null;(0,n.useEffect)(()=>{e&&t&&p()},[e,t]);let p=async()=>{try{m(!0);let a=y(e,t),n=await fetch("/api/career-fortune-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:a,userInfo:e,wuxingData:t})}),i=await n.json();if(i.success)d(i.analysis),h(i.isAIGenerated||!1),console.log(`🎯 Using ${i.isAIGenerated?"DeepSeek AI":"Structured Mock"} career data`),r&&i.analysis&&(console.log("\uD83D\uDCBE Saving career fortune analysis data"),r({analysis:i.analysis,isAIGenerated:i.isAIGenerated||!1,generatedAt:new Date().toISOString(),sessionId:s,userInfo:e,wuxingData:t}));else{console.warn("Career API failed, using mock data:",i.error);let a=u(e,t);d(a),h(!1),r&&a&&(console.log("\uD83D\uDCBE Saving mock career fortune analysis data"),r({analysis:a,isAIGenerated:!1,generatedAt:new Date().toISOString(),sessionId:s,userInfo:e,wuxingData:t}))}}catch(s){console.error("Error generating career analysis:",s),d(u(e,t))}finally{m(!1)}},u=(e,t)=>{let s=new Date(e.birthDateTime),a=new Date().getFullYear();s.getFullYear(),t.dayStem;let n=t.dayStemWuxing||"木";return{summary:{title:`傷官制殺，專業權威之路`,description:`年柱${t.yearStem}${t.yearBranch}傷官駕殺（制${t.monthStem}中${t.monthBranch}金），月柱${t.monthStem}${t.monthBranch}七殺透干，構成「傷官制殺」貴格，適合金性權威職業。`},talents:{天賦特質解碼:{title:"天賦特質解碼",content:[{name:`${t.yearStem}${t.yearBranch}傷官`,description:`${t.yearStem}${n}代表生發與創新，傷官格賦予顛覆性思維，擅長打破常規，轉化危機為機會，能在混亂中快速識別問題核心，提出獨到解決方案。`,attention:`注意事項：傷官過旺易招是非，職場中謹言慎行。可佩戴綠玉吊墜，化傷為財，穩定情緒。`}]},二十年黃金賽道:{title:"二十年黃金賽道",content:{periods:[{years:"2025 - 2035",luck:`${f?.periods?.[0]?.dayun||"丁卯"}運`,action:"考取司法/醫師資格",bestYear:"2027丁未年最佳",warning:"2031辛亥年慎言辭職"},{years:"2035 - 2045",luck:`${f?.periods?.[1]?.dayun||"丙寅"}運`,action:"組建專業團隊",bestYear:"2038戊午年契機",warning:"避開東南亞市場（寅巳申三刑）"},{years:"2045 - 2055",luck:"乙丑運",action:"創立行業標準",bestYear:"2046丙寅年",warning:"防下屬背叛（丑戌刑）"}]}},權力巔峰標誌:{title:"權力巔峰標誌",content:{peakYear:`${a+24}己巳年`,peakDescription:"己土殺星透干，掌機構決策權",bestPartners:"猴（申）、鼠（子）、龍（辰）三合水局",avoidIndustries:"遠離地產業（土重剋水）、娛樂業（火旺耗身）"}}},strategies:{officeLayout:{title:"辦公室佈局",description:"正西放銅質文昌塔（申金位）",details:"銅質文昌塔，放置於辦公桌正西或辦公室西牆邊，底座穩固，塔尖朝上，增強文昌星能量，助思考敏捷與職場表現。",warning:"正西避免放置紅色物品（如紅色文件夾或裝飾），以免火剋金，削弱文昌塔功效；保持該區域整潔，避免雜物堆積。"},annualStrategy:{title:"流年借力",year:`${a+4}年為己酉年`,description:"天干己土（印星）與地支酉金（七殺）形成殺印相生格局",benefit:"利於權力提升與職場突破。此年你的壬水日主得印星生助，思維清晰，決策果斷，適合競聘管理職位或承擔更高責任。"},lifelongTaboo:{title:"終身禁忌",warning:"勿與上司發生戀情（七殺為忌神）",reason:"七殺為忌神，代表壓力與權威，若與上司發展戀情，易因權力不平衡引發職場危機，影響事業前途，甚至導致名譽損失或職位不穩。"}}}};return c?(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成事業運勢分析..."})]}):o?(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("div",{className:"flex items-center gap-3 mb-4",children:(0,a.jsx)("h2",{className:"text-4xl font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:"事業運勢分析"})}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-full px-6 py-3 mb-6 inline-block",children:(0,a.jsxs)("h3",{className:"text-xl font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:["總結：",o.summary.title]})}),(0,a.jsx)("p",{className:"text-lg text-[#374A37] leading-relaxed mb-8",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.summary.description})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-xl p-6 mb-6",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#567156] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"事業發展全景圖"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-6 mb-8",children:["天賦特質解碼","二十年黃金賽道","權力巔峰標誌"].map(e=>(0,a.jsx)("button",{onClick:()=>l(e),className:`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${i===e?"bg-[#3263C4] text-white":"bg-white text-[#757575] hover:bg-gray-50"}`,style:{fontFamily:"Noto Serif TC, serif",boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"},children:e},e))}),(0,a.jsxs)("div",{className:"mb-8",children:["天賦特質解碼"===i&&(0,a.jsxs)("div",{className:"bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-6 text-white mb-6",children:[(0,a.jsx)("h4",{className:"mb-6 text-2xl font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"天賦解碼"}),(0,a.jsx)("div",{className:"space-y-6",children:o.talents["天賦特質解碼"].content.map((e,t)=>(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-white/20",children:[(0,a.jsx)("h5",{className:"mb-3 text-xl font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:e.name}),(0,a.jsx)("p",{className:"mb-4 leading-relaxed",style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.description}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-white/10",children:(0,a.jsx)("p",{className:"text-sm",style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.attention})})]},t))})]}),"二十年黃金賽道"===i&&(0,a.jsxs)("div",{className:"bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-6 text-white mb-6",children:[(0,a.jsx)("h4",{className:"mb-6 text-2xl font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"黃金賽道"}),(0,a.jsx)("div",{className:"overflow-x-auto",children:(0,a.jsxs)("table",{className:"w-full rounded-lg bg-white/10",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"border-b border-white/20",children:[(0,a.jsx)("th",{className:"p-4 text-left",style:{fontFamily:"Noto Serif TC, serif"},children:"時期"}),(0,a.jsx)("th",{className:"p-4 text-left",style:{fontFamily:"Noto Serif TC, serif"},children:"大運"}),(0,a.jsx)("th",{className:"p-4 text-left",style:{fontFamily:"Noto Serif TC, serif"},children:"關鍵動作"}),(0,a.jsx)("th",{className:"p-4 text-left",style:{fontFamily:"Noto Serif TC, serif"},children:"風險預警"})]})}),(0,a.jsx)("tbody",{children:o.talents["二十年黃金賽道"].content.periods.map((e,t)=>(0,a.jsxs)("tr",{className:"border-b border-white/10",children:[(0,a.jsx)("td",{className:"p-4",style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.years}),(0,a.jsx)("td",{className:"p-4",style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.luck}),(0,a.jsxs)("td",{className:"p-4",style:{fontFamily:"Noto Sans HK, sans-serif"},children:[e.action,"（",e.bestYear,"）"]}),(0,a.jsx)("td",{className:"p-4",style:{fontFamily:"Noto Sans HK, sans-serif"},children:e.warning})]},t))})]})})]}),"權力巔峰標誌"===i&&(0,a.jsxs)("div",{className:"bg-gradient-to-r from-[#3263C4] to-[#567156] rounded-xl p-6 text-white mb-6",children:[(0,a.jsx)("h4",{className:"mb-6 text-2xl font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"巔峰時機"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-white/20",children:[(0,a.jsx)("h5",{className:"mb-2 font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"權力巔峰"}),(0,a.jsxs)("p",{style:{fontFamily:"Noto Sans HK, sans-serif"},children:[o.talents["權力巔峰標誌"].content.peakYear,"：",o.talents["權力巔峰標誌"].content.peakDescription]})]}),(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-white/20",children:[(0,a.jsx)("h5",{className:"mb-2 font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"最佳合作"}),(0,a.jsx)("p",{style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.talents["權力巔峰標誌"].content.bestPartners})]}),(0,a.jsxs)("div",{className:"p-4 rounded-lg bg-white/20 md:col-span-2",children:[(0,a.jsx)("h5",{className:"mb-2 font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"行業紅線"}),(0,a.jsx)("p",{style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.talents["權力巔峰標誌"].content.avoidIndustries})]})]})]})]})]}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#567156] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"晉升秘訣"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#3263C4] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:o.strategies.officeLayout.title})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37] mb-3",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.strategies.officeLayout.description}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.strategies.officeLayout.details})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#3263C4] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:o.strategies.annualStrategy.title})}),(0,a.jsxs)("p",{className:"text-sm text-[#374A37] mb-3",style:{fontFamily:"Noto Sans HK, sans-serif"},children:[o.strategies.annualStrategy.year,"：",o.strategies.annualStrategy.description]}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.strategies.annualStrategy.benefit})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#3263C4] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:o.strategies.lifelongTaboo.title})}),(0,a.jsx)("p",{className:"text-sm text-[#374A37] mb-3",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.strategies.lifelongTaboo.warning}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:o.strategies.lifelongTaboo.reason})]})]})]})]}):(0,a.jsx)("div",{className:"py-20 text-center",children:(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"事業分析生成失敗，請重新整理頁面"})})},N=({userInfo:e,wuxingData:t})=>{let[s,r]=(0,n.useState)("奠基期"),[i,l]=(0,n.useState)(null),[o,d]=(0,n.useState)(!0),[c,m]=(0,n.useState)(!1),x=e?.birthDateTime?g(e.birthDateTime,e.gender):null;(0,n.useEffect)(()=>{e&&t&&h()},[e,t]);let h=async()=>{try{d(!0);let s=function(e,t){let s=new Date(e.birthDateTime),a=new Date().getFullYear()-s.getFullYear(),n=t.yearStem||"壬",r=t.yearBranch||"子",i=t.monthStem||"癸",l=t.monthBranch||"丑",o=t.dayStem||"壬",d=t.dayBranch||"子",c=t.hourStem||"庚",m=t.hourBranch||"申",x=t.dayStemWuxing||"水",h=e.gender||"男";return`# 財運發展通用模型分析

## 用戶基本信息
- 姓名：${e.name}
- 性別：${h}
- 出生日期：${e.birthDateTime}
- 當前年齡：${a}歲

## 八字信息
- 年柱：${n}${r}
- 月柱：${i}${l}
- 日柱：${o}${d}（日主：${o}${x}）
- 時柱：${c}${m}

## 分析要求

請基於以上八字信息，按照以下JSON格式生成詳細的財運分析：

\`\`\`json
{
  "summary": {
    "title": "一句話總結財運命格特點（不超過12字）",
    "description": "結合八字結構分析財運獲取方式和總體特徵，150字左右"
  },
  "threeStages": {
    "奠基期": {
      "title": "奠基期",
      "ageRange": "具體年齡範圍",
      "fortune": "對應大運",
      "content": {
        "phase1": {
          "name": "第一階段大運名稱",
          "description": "該大運期間財運特點分析",
          "keyYear": "關鍵年份及其重要事件預測",
          "trapYear": "需要特別注意的危險年份及風險提醒"
        },
        "phase2": {
          "name": "第二階段大運名稱", 
          "description": "該大運期間財運特點分析",
          "warning": "重要警示年份及注意事項"
        }
      }
    },
    "爆發期": {
      "title": "爆發期",
      "ageRange": "具體年齡範圍",
      "fortune": "對應大運",
      "content": {
        "description": "財運爆發期的核心特徵",
        "keyYear": "最佳投資年份及具體收益預測",
        "industries": "最適合的核心投資領域",
        "peakYear": "財富峰值年份及投資建議"
      }
    },
    "守成期": {
      "title": "守成期", 
      "ageRange": "具體年齡範圍",
      "fortune": "對應大運",
      "content": {
        "description": "守成期財運管理特點",
        "keyYear": "重要理財決策年份",
        "avoidIndustries": "需要避免的投資領域"
      }
    }
  },
  "wealthRules": {
    "assetAllocation": {
      "title": "資產配比",
      "realEstate": "不動產投資建議及比例",
      "preciousMetals": "貴金屬投資建議及比例", 
      "cash": "現金流動性管理建議及比例"
    },
    "partnerships": {
      "title": "合作禁忌",
      "zodiacA": {
        "animal": "不宜合作的生肖A",
        "description": "基於八字分析為什麼不宜合作"
      },
      "zodiacB": {
        "animal": "不宜合作的生肖B", 
        "description": "基於八字分析為什麼不宜合作"
      }
    },
    "wealthDirection": {
      "title": "催財方位",
      "location": "具體的催財方位",
      "description": "該方位的風水布局建議",
      "warning": "注意事項和禁忌"
    }
  }
}
\`\`\`

## 分析重點：
1. 基於八字結構分析財星位置和強弱
2. 結合大運流年推算三個主要財運階段
3. 提供具體的投資建議和風險提醒
4. 給出實用的風水催財方位指導
5. 所有預測都要有具體的八字理論依據

請確保分析內容專業、準確，符合傳統八字命理學理論。`}(e,t),a=await fetch("/api/wealth-fortune-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:s,userInfo:e,wuxingData:t})}),n=await a.json();if(n.success)l(n.analysis),m(n.isAIGenerated||!1),console.log(`🎯 Using ${n.isAIGenerated?"DeepSeek AI":"Structured Mock"} wealth data`);else{console.warn("Wealth API failed, using mock data:",n.error);let s=f(e,t);l(s),m(!1)}}catch(s){console.error("Error generating wealth analysis:",s),l(f(e,t))}finally{d(!1)}},f=(e,t)=>{let s=new Date(e.birthDateTime);new Date().getFullYear(),s.getFullYear();let a=t.dayStem||"壬";t.dayStemWuxing;let n=x?.periods||[],r=n[0]||{dayun:"丙寅",yearRange:"2025-2034",ageRange:"25-34歲"},i=n[1]||{dayun:"丁卯",yearRange:"2035-2044",ageRange:"35-44歲"},l=n[2]||{dayun:"壬戌",yearRange:"2045-2054",ageRange:"45-54歲"};return{summary:{title:`劫財奪財，置業守成為上`,description:`月干${t.monthStem}土七殺透出，時柱${a}${t.dayBranch}劫財坐旺，全局無明財星，財富需通過制殺獲取（金製木→木疏土→土生金循環）。`},threeStages:{奠基期:{title:"奠基期",ageRange:r.ageRange,fortune:`${r.dayun}運`,content:{phase1:{name:function(e,t=!0){return t?`${e.dayun}運（${e.yearRange}）`:`${e.dayun}運`}(r),description:`${r.dayun[0]}火偏財虛透，${r.dayun[1]}木食神生財，主勞力得財`,keyYear:`${r.startYear+3}年：利考金融證照（證券/基金從業資格）`,trapYear:`致命陷阱：${r.startYear+6}年慎防P2P理財`},phase2:{name:`次階段（${r.startYear+5} - ${r.endYear}）`,description:`${r.dayun[0]}火正財合身，${r.dayun[1]}木傷官生財，收入躍升但開支激增`,warning:`${r.endYear-2}年：合作投資需謹慎`}}},爆發期:{title:"爆發期",ageRange:i.ageRange,fortune:`${i.dayun}運`,content:{description:`${i.dayun[0]}木傷官制殺，${i.dayun[1]}水祿神助身`,keyYear:`${i.startYear+5}年：不動產增值收益可觀`,industries:`核心領域：${"子"===i.dayun[1]?"水處理工程":"相關行業"}、法律服務`,peakYear:`財富峰值：${i.endYear-2}年，利資源貿易`}},守成期:{title:"守成期",ageRange:l.ageRange,fortune:`${l.dayun}運`,content:{description:`${l.dayun[1]}土制劫財開財庫，財運穩定`,keyYear:`${l.startYear+5}年：金水相生，可建立家族信託基金`,avoidIndustries:"忌諱產業：餐飲（火）、林業（木剋土）"}}},wealthRules:{assetAllocation:{title:"資產配比",realEstate:"70%不動產：投資房地產，確保穩健回報",preciousMetals:"20%貴金屬：購買黃金、銀條或相關ETF，作為抗通脹保值資產",cash:"10%流動現金：保留現金或貨幣基金，應對緊急需求或短期投資機會"},partnerships:{title:"合作禁忌",zodiacA:{animal:"生肖馬（午沖子）",description:"屬馬者五行屬火，與子鼠相沖，合作易生衝突，導致決策分歧或財務損失。"},zodiacB:{animal:"生肖兔（卯刑子）",description:"屬兔者五行屬木，與子鼠相刑，易引發信任危機或隱性競爭，影響財運。"}},wealthDirection:{title:"催財方位",location:"臥室西北角（戌位）",description:"西北角屬乾卦，主財運與貴人運。擺放白水晶簇，可聚財旺氣，增強正財運勢。",warning:"注意事項：西北角避免堆放雜物，保持通風明亮；忌擺放尖銳物品或電子產品，以免破壞財氣場。"}}}};return o?(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#D09900] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成財運運勢分析..."})]}):i?(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("div",{className:"flex items-center gap-3 mb-4",children:(0,a.jsx)("h2",{className:"text-4xl font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:"財運運勢分析"})}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-3 mb-6 inline-block",children:(0,a.jsxs)("h3",{className:"text-xl font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:["總結：",i.summary.title]})}),(0,a.jsx)("p",{className:"text-lg text-[#374A37] leading-relaxed mb-8",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.summary.description})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-xl p-6 mb-6",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#D09900] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"三階段財運密碼"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-6 mb-8",children:["奠基期","爆發期","守成期"].map(e=>(0,a.jsx)("button",{onClick:()=>r(e),className:`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${s===e?"bg-[#D09900] text-white":"bg-white text-[#757575] hover:bg-gray-50"}`,style:{fontFamily:"Noto Serif TC, serif",boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"},children:e},e))}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-2 mb-6 text-center",children:(0,a.jsxs)("h4",{className:"text-lg font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:[i.threeStages[s].ageRange,"\xb7",i.threeStages[s].fortune]})}),(0,a.jsxs)("div",{className:"mb-8",children:["奠基期"===s&&(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,a.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#D09900] to-[#BD4800] rounded-full px-6 py-3 mb-4 inline-block",children:(0,a.jsx)("h5",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:i.threeStages["奠基期"].fortune})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["奠基期"].content.phase1.description}),(0,a.jsx)("div",{className:"bg-[#F5F5F5] rounded-lg p-3",children:(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["奠基期"].content.phase1.keyYear})}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["奠基期"].content.phase1.trapYear})})]})]}),(0,a.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block",children:(0,a.jsx)("h5",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:i.threeStages["奠基期"].content.phase2.name.split("（")[0]})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["奠基期"].content.phase2.description}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["奠基期"].content.phase2.warning})})]})]})]}),"爆發期"===s&&(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-2",children:[(0,a.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block",children:(0,a.jsx)("h5",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"甲木傷官"})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["爆發期"].content.description}),(0,a.jsx)("div",{className:"bg-[#F5F5F5] rounded-lg p-3",children:(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["爆發期"].content.keyYear})})]})]}),(0,a.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block",children:(0,a.jsx)("h5",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"財富峰值"})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["爆發期"].content.industries}),(0,a.jsx)("div",{className:"bg-[#F5F5F5] rounded-lg p-3",children:(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["爆發期"].content.peakYear})})]})]})]}),"守成期"===s&&(0,a.jsxs)("div",{className:"p-6 bg-white rounded-lg shadow-md",children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-4 inline-block",children:(0,a.jsxs)("h5",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:[i.threeStages["守成期"].ageRange,"\xb7",i.threeStages["守成期"].fortune]})}),(0,a.jsxs)("div",{className:"space-y-4",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["守成期"].content.description}),(0,a.jsx)("div",{className:"bg-[#F5F5F5] rounded-lg p-3",children:(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["守成期"].content.keyYear})}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.threeStages["守成期"].content.avoidIndustries})})]})]})]})]}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#D09900] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"財富法則"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.assetAllocation.title})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.assetAllocation.realEstate}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.assetAllocation.preciousMetals}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.assetAllocation.cash})]})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.partnerships.title})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37] mb-1",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.partnerships.zodiacA.animal}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.partnerships.zodiacA.description})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37] mb-1",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.partnerships.zodiacB.animal}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.partnerships.zodiacB.description})]})]})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#D09900] rounded-full px-6 py-3 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-base font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.wealthDirection.title})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:i.wealthRules.wealthDirection.location}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.wealthDirection.description}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.wealthRules.wealthDirection.warning})]})]})]})]})]}):(0,a.jsx)("div",{className:"py-20 text-center",children:(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"財運分析生成失敗，請重新整理頁面"})})},j=({userInfo:e,wuxingData:t})=>{let[s,r]=(0,n.useState)("正緣特徵三重認證"),[i,l]=(0,n.useState)(null),[o,d]=(0,n.useState)(!0),[c,m]=(0,n.useState)(!1),x=e?.birthDateTime?g(e.birthDateTime,e.gender):null;(0,n.useEffect)(()=>{e&&t&&h()},[e,t]);let h=async()=>{try{d(!0);let s=function(e,t){let s=new Date(e.birthDateTime),a=new Date().getFullYear()-s.getFullYear(),n=t.yearStem||"壬",r=t.yearBranch||"子",i=t.monthStem||"癸",l=t.monthBranch||"丑",o=t.dayStem||"壬",d=t.dayBranch||"子",c=t.hourStem||"庚",m=t.hourBranch||"申",x=t.dayStemWuxing||"水",h=e.gender||"男";return`# 感情婚姻通用指南分析

## 用戶基本信息
- 姓名：${e.name}
- 性別：${h}
- 出生日期：${e.birthDateTime}
- 當前年齡：${a}歲

## 八字信息
- 年柱：${n}${r}
- 月柱：${i}${l}
- 日柱：${o}${d}（日主：${o}${x}）
- 時柱：${c}${m}

## 分析要求

請基於以上八字信息，按照以下JSON格式生成詳細的感情婚姻分析：

\`\`\`json
{
  "summary": {
    "title": "格局本質一句話總結（如：殺星混雜，晚婚為吉）",
    "description": "結合八字結構分析夫妻宮和配偶星的情況，解釋婚姻格局特點"
  },
  "authenticity": {
    "profession": {
      "title": "基本屬性",
      "description": "正緣伴侶應具備的十神屬性和對應職業類型，詳細說明為什麼適合",
      "warning": "注意事項和相處建議"
    },
    "ageGap": {
      "title": "年齡差距", 
      "description": "最佳年齡差距範圍及其八字理論依據",
      "warning": "年齡差距的注意事項"
    },
    "meetingChance": {
      "title": "相識契機",
      "description": "最佳相遇時機和場景，基於流年分析",
      "warning": "相識時的注意事項"
    }
  },
  "romanticCycles": {
    "25歲前": {
      "period": "具體年齡段",
      "fortune": "對應大運",
      "dangerousYear": "高危險流年及其特徵",
      "crisis": "具體危機類型描述",
      "solution": "詳細化解方案，包括風水建議"
    },
    "35歲危機": {
      "period": "具體年齡段",
      "fortune": "對應大運", 
      "dangerousYear": "高危險流年及其特徵",
      "crisis": "具體危機類型描述",
      "solution": "詳細化解方案，包括風水建議"
    },
    "45歲波動": {
      "period": "具體年齡段",
      "fortune": "對應大運",
      "dangerousYear": "高危險流年及其特徵", 
      "crisis": "具體危機類型描述",
      "solution": "詳細化解方案，包括風水建議"
    }
  },
  "marriageRules": {
    "bestYear": {
      "title": "最佳婚年",
      "year": "具體年份（夫妻宮到位）",
      "description": "該年份的八字分析和婚姻時機說明"
    },
    "taboos": {
      "title": "相處禁忌",
      "financial": {
        "title": "財務管理禁忌",
        "description": "基於劫財或財星分析的財務建議"
      },
      "frequency": {
        "title": "相處頻率建議",
        "description": "基於五行相剋化解的相處模式"
      }
    },
    "childrenFate": {
      "title": "子女緣",
      "timing": "最佳生育時機和性別預測",
      "description": "子女運勢和教育建議"
    }
  }
}
\`\`\`

## 分析重點：
1. 基於夫妻宮（日支）和配偶星分析婚姻格局
2. 結合大運流年推算感情發展階段和危機期
3. 提供具體的擇偶條件和相處建議
4. 給出實用的化解方案和風水布局
5. 所有分析都要有明確的八字理論依據

格局本質： [夫星/妻星]混雜 → 晚婚為吉

正緣三維認證：
- 職業特質：需具[十神]屬性（如[職業類型]）
- 年齡差距：[數字]歲以上可調和[五行矛盾] 
- 相遇契機：[流年]利於[社交場景]中結識

情劫週期表：
年齡層 | 高危險流年 | 危機類型 | 化解方案
[歲數]前 | [年] | [爛桃花/三角關係] | 避[生肖]屬相
[歲數]歲 | [年] | [經濟糾紛] | [風水佈置]

婚姻法則：
- 最佳婚年：[流年]（[夫妻宮]到位）
- 相處禁忌：
  - 禁止[財務行為]（因[劫財星]而奪財）
  - [分居頻率]緩解[五行相剋]

使用說明：將方括號[ ]內參數替換為命主專屬訊息

請確保分析內容專業、準確，符合傳統八字命理學理論。`}(e,t),a=await fetch("/api/relationship-fortune-analysis",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:s,userInfo:e,wuxingData:t})}),n=await a.json();if(n.success)l(n.analysis),m(n.isAIGenerated||!1),console.log(`💕 Using ${n.isAIGenerated?"DeepSeek AI":"Structured Mock"} relationship data`);else{console.warn("Relationship API failed, using mock data:",n.error);let s=f(e,t);l(s),m(!1)}}catch(s){console.error("Error generating relationship analysis:",s),l(f(e,t))}finally{d(!1)}},f=(e,t)=>{let s=new Date(e.birthDateTime);return new Date().getFullYear(),s.getFullYear(),t.dayStem,t.dayStemWuxing,{summary:{title:"殺星混雜，晚婚得良緣",description:"月干己土七殺為夫星，日支丑土藏殺，時柱壬子劫財，形成「殺星混雜」格局，婚戀需過濾爛桃花。"},authenticity:{profession:{title:"基本屬性",description:"正緣伴侶具七殺格，代表紀律、權威與責任感強烈，適合軍警、執法人員或外科醫師等需高度自律與決斷力的職業。此類人士能提供穩定保護，補足癸水日主的柔韌性，助感情長久。",warning:"注意事項：七殺過旺易嚴苛，需互補溫柔"},ageGap:{title:"年齡差距",description:"伴侶年長6-12歲，己土印星得火生助，利於中老年運勢發達，此差距助穩定感情，避免年輕衝動導致的波折。年長者帶來成熟智慧，平衡癸水的滲透性。",warning:"注意事項：差距過大易生代溝，定期溝通興趣"},meetingChance:{title:"相識契機",description:"2041年辛酉，辛金印星通關，酉金合局，利智慧交流，適合在學術會議、研討會或專業論壇相遇，透過共同興趣快速建立連結。",warning:"注意事項：酉金暗藏競爭，勿急於表白"}},romanticCycles:{[`${x?.periods?.[0]?.ageRange||"25歲前"}`]:{period:x?.periods?.[0]?.ageRange||"25歲前",fortune:`${x?.periods?.[0]?.dayun||"丁卯"}運`,dangerousYear:`${x?.periods?.[0]?.startYear+4||2029}年：七殺透干`,crisis:"遇激情戀情，但子酉破終分手",solution:"避開生肖馬者（午火增殺攻身）：午火增殺攻身；易放大衝突；分手後靜心1個月，勿衝動脫單。"},[`${x?.periods?.[1]?.ageRange||"35歲危機"}`]:{period:`${x?.periods?.[1]?.ageRange||"35歲危機"}`,fortune:`${x?.periods?.[1]?.dayun||"丙寅"}運`,dangerousYear:`${x?.periods?.[1]?.startYear+8||2037}年：巳丑拱殺，易陷三角關係`,crisis:"丁火生己火，巳丑拱金局，紆氣過旺；易推入第三者糾紛，影響婚姻穩定。",solution:"臥室懸掛高山流水畫（金生水）：選擇絲綢畫作，掛南牆；化解火熱，每日約會1次，重建信任。"},"45歲波動":{period:"45歲波動",fortune:"乙丑運",dangerousYear:"2047丁卯年：子卯刑剋，防財產糾紛",crisis:"丁火激木火，子水與西金相刑，易因金錢或產爭執，導致夫妻不和。",solution:"家中財位（東南角）放置聚寶盆（陶瓷，內放3枚銅錢）：穩財運，簽訂婚前協議，明確財產歸屬。"}},marriageRules:{bestYear:{title:"最佳婚年",year:"2033癸丑年（丑土夫宮到位）",description:"2033年癸水上旺，己土丑印星得火生利於中老年運勢發達，利金錢或產爭執，導致夫妻不和。應先記錄雙方共同目標，建立記錄整婚時間。"},taboos:{title:"相處禁忌",financial:{title:"禁止財務共有（壬水劫財奪財）",description:"因壬水劫財星奪財，建議分開管理財產，定期清理投資狀況，避免產權糾紛影響感情和諧。"},frequency:{title:"週末分房睡（緩解水火相激）",description:"水火五行有輕微相剋，週末分開睡覺能緩解衝突，每日約會1次，重建信任。"}},childrenFate:{title:"子女緣",timing:"2044甲子年得長子（子水祿神應期）",description:"子年利財祿，生子時機良好，甲子年天干地支都符合，子女聰明有智慧，多與學術或水相關行業。"}}}};return o?(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#C74772] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成感情運勢分析..."})]}):i?(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("div",{className:"flex items-center gap-3 mb-4",children:(0,a.jsx)("h2",{className:"text-4xl font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:"感情運勢分析"})}),(0,a.jsx)("div",{className:"bg-gradient-to-r from-[#C74772] to-[#A03A5A] rounded-full px-6 py-3 mb-6 inline-block",children:(0,a.jsxs)("h3",{className:"text-xl font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:["總結：",i.summary.title]})}),(0,a.jsx)("p",{className:"text-lg text-[#374A37] leading-relaxed mb-8",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.summary.description})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-xl p-6 mb-6",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#C74772] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"感情全週期透視"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-6 mb-8",children:["正緣特徵三重認證","三大情劫週期"].map(e=>(0,a.jsx)("button",{onClick:()=>r(e),className:`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 ${s===e?"bg-[#C74772] text-white":"bg-white text-[#757575] hover:bg-gray-50"}`,style:{fontFamily:"Noto Serif TC, serif",boxShadow:"0 4px 4px rgba(0, 0, 0, 0.25)"},children:e},e))}),(0,a.jsxs)("div",{className:"mb-8",children:["正緣特徵三重認證"===s&&(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"p-4 bg-white rounded-lg",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"基本屬性"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.profession.description}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.profession.warning})})]})]}),(0,a.jsxs)("div",{className:"p-4 bg-white rounded-lg",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"年齡差距"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.ageGap.description}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.ageGap.warning})})]})]}),(0,a.jsxs)("div",{className:"p-4 bg-white rounded-lg",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"相識契機"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.meetingChance.description}),(0,a.jsx)("div",{className:"p-3 rounded-lg bg-red-50",children:(0,a.jsx)("p",{className:"text-sm text-red-700",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.authenticity.meetingChance.warning})})]})]})]}),"三大情劫週期"===s&&(0,a.jsxs)("div",{className:"space-y-6",children:[(0,a.jsxs)("div",{className:"grid grid-cols-4 gap-4 mb-4",children:[(0,a.jsx)("div",{className:"bg-[#C74772] text-white p-3 rounded-lg text-center",children:(0,a.jsx)("h5",{className:"text-sm font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"時期"})}),(0,a.jsx)("div",{className:"bg-[#C74772] text-white p-3 rounded-lg text-center",children:(0,a.jsx)("h5",{className:"text-sm font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"大運"})}),(0,a.jsx)("div",{className:"bg-[#C74772] text-white p-3 rounded-lg text-center",children:(0,a.jsx)("h5",{className:"text-sm font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"關鍵流年"})}),(0,a.jsx)("div",{className:"bg-[#C74772] text-white p-3 rounded-lg text-center",children:(0,a.jsx)("h5",{className:"text-sm font-bold",style:{fontFamily:"Noto Serif TC, serif"},children:"風險預警"})})]}),(0,a.jsxs)("div",{className:"grid items-start grid-cols-4 gap-4",children:[(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("h5",{className:"font-bold text-[#374A37] text-sm",style:{fontFamily:"Noto Serif TC, serif"},children:i.romanticCycles["25歲前"].period})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["25歲前"].fortune})}),(0,a.jsxs)("div",{className:"p-3 bg-white rounded-lg",children:[(0,a.jsx)("p",{className:"text-sm text-[#374A37] mb-2",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["25歲前"].dangerousYear}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["25歲前"].crisis})]}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["25歲前"].solution})})]}),(0,a.jsxs)("div",{className:"grid items-start grid-cols-4 gap-4",children:[(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("h5",{className:"font-bold text-[#374A37] text-sm",style:{fontFamily:"Noto Serif TC, serif"},children:i.romanticCycles["35歲危機"].period})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["35歲危機"].fortune})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["35歲危機"].dangerousYear})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["35歲危機"].solution})})]}),(0,a.jsxs)("div",{className:"grid items-start grid-cols-4 gap-4",children:[(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("h5",{className:"font-bold text-[#374A37] text-sm",style:{fontFamily:"Noto Serif TC, serif"},children:i.romanticCycles["45歲波動"].period})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["45歲波動"].fortune})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["45歲波動"].dangerousYear})}),(0,a.jsx)("div",{className:"p-3 bg-white rounded-lg",children:(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.romanticCycles["45歲波動"].solution})})]})]})]})]}),(0,a.jsxs)("div",{className:"p-6",children:[(0,a.jsx)("h3",{className:"text-3xl font-bold text-[#C74772] mb-6",style:{fontFamily:"Noto Serif TC, serif"},children:"婚姻穩固法則"}),(0,a.jsxs)("div",{className:"grid grid-cols-1 gap-6 md:grid-cols-3",children:[(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"最佳婚年"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:i.marriageRules.bestYear.year}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.marriageRules.bestYear.description})]})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"相處禁忌"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37] mb-1",style:{fontFamily:"Noto Serif TC, serif"},children:i.marriageRules.taboos.financial.title}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.marriageRules.taboos.financial.description})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37] mb-1",style:{fontFamily:"Noto Serif TC, serif"},children:i.marriageRules.taboos.frequency.title}),(0,a.jsx)("p",{className:"text-xs text-[#757575]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.marriageRules.taboos.frequency.description})]})]})]}),(0,a.jsxs)("div",{className:"bg-[#EFEFEF] rounded-lg p-4",style:{boxShadow:"inset 0 4px 4px rgba(0, 0, 0, 0.25)"},children:[(0,a.jsx)("div",{className:"bg-[#C74772] rounded-full px-4 py-2 mb-3 inline-block",children:(0,a.jsx)("h4",{className:"text-sm font-bold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:"子女緣"})}),(0,a.jsxs)("div",{className:"space-y-3",children:[(0,a.jsx)("p",{className:"text-sm font-medium text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif"},children:i.marriageRules.childrenFate.timing}),(0,a.jsx)("p",{className:"text-sm text-[#374A37]",style:{fontFamily:"Noto Sans HK, sans-serif"},children:i.marriageRules.childrenFate.description})]})]})]})]})]}):(0,a.jsx)("div",{className:"py-20 text-center",children:(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"感情分析生成失敗，請重新整理頁面"})})},S=["金","木","水","火","土"];function w({birthDateTime:e,gender:t,sessionId:s,userInfo:x,wuxingData:h,onFortuneDataUpdate:f}){(0,r.useRouter)(),(0,i.Ym)(),(0,l.c3)("report");let g=(0,n.useRef)([]),[u,y]=(0,n.useState)(null),[w,v]=(0,n.useState)([{title:"四大運勢分析"}]),[F,A]=(0,n.useState)("fortune"),[$,C]=(0,n.useState)({health:null,career:null,wealth:null,relationship:null}),T=(0,r.useSearchParams)();e||T.get("birthDateTime"),t||T.get("gender");let D=s||T.get("sessionId"),Y=(e,t)=>{console.log(`💾 Saving ${e} fortune analysis:`,t),C(s=>({...s,[e]:{...t,generatedAt:new Date().toISOString(),sessionId:D}}))},k=e=>{let t=Object.values(e).reduce((e,t)=>e+t,0),s=[],a=[];Object.entries(e).forEach(([e,n])=>{n/t*100>=25?s.push(e):0===n&&a.push(e)});let n="";if(1===s.length)n=`${s[0]}旺`;else if(2===s.length)n=`${s.join("")}兩旺`;else if(s.length>=3)n=`${s.slice(0,2).join("")}等多旺`;else{let t=Math.max(...Object.values(e)),s=Object.entries(e).find(([e,s])=>s===t)?.[0];n=s?`${s}為主`:"五行平衡"}return{strongElements:s,weakElements:a,strengthDesc:n,elementCounts:e}},E=e=>{let{strongElements:t,weakElements:s}=e,a="正印",n="食神",r="補缺";return t.length>0?(r="洩旺",t.includes("火")?(a="食神",n="財星"):t.includes("土")&&(a="正官",n="正印")):s.length>0&&(r="補缺",s.includes("水")&&(a="正印",n="比肩")),{primaryGod:a,auxiliaryGod:n,strategy:r}},R=e=>{if(!e?.birthDateTime)return null;let t=(0,m.Ay)(e.birthDateTime,e.gender),s={},a=[];S.forEach(e=>{let n=0;[t.yearStemWuxing,t.yearBranchWuxing,t.monthStemWuxing,t.monthBranchWuxing,t.dayStemWuxing,t.dayBranchWuxing,t.hourStemWuxing,t.hourBranchWuxing].forEach(t=>{t===e&&n++}),s[e]=n,0===n&&a.push(e)});let n=k(s),r=E(n);return{elementCounts:s,missingElements:a,wuxingData:t,strengthAnalysis:n,usefulGods:r}},B=h&&u?{wuxingData:h,...R(u)}:u?R(u):null;return(0,a.jsxs)("div",{className:"min-h-screen bg-[#EFEFEF]",children:[(0,a.jsx)(d.default,{from:"report"}),(0,a.jsxs)("div",{className:"pt-4",children:[(0,a.jsx)("div",{className:"w-full sm:w-[95%] lg:w-[90%] mx-auto px-4 sm:px-5 pt-2s sm:pt-10 lg:pt-10 pb-6 sm:pb-10 flex flex-col lg:flex-row bg-[#EFEFEF]",children:(0,a.jsx)("div",{className:"flex items-start justify-center flex-1 mb-6 lg:justify-start lg:mb-0",children:(0,a.jsx)("h1",{ref:e=>g.current[0]=e,style:{fontFamily:"Noto Serif TC, serif",fontWeight:800,fontSize:"clamp(32px, 6vw, 56px)",color:"#A3B116",lineHeight:1.1,textAlign:"center"},className:"lg:text-left",children:w[0]?.title})})}),(0,a.jsx)("section",{className:"w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]",children:(()=>{if(!B)return(0,a.jsx)("div",{className:"flex items-center justify-center py-20",children:(0,a.jsxs)("div",{className:"text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在分析您的命理資料..."})]})});let{wuxingData:e}=B,t=["鼠","牛","虎","兔","龍","蛇","馬","羊","猴","雞","狗","豬"][(new Date(u.birthDateTime).getFullYear()-1900)%12];return(0,a.jsxs)("div",{className:"flex flex-col items-start gap-6 lg:flex-row lg:justify-between lg:gap-0",children:[(0,a.jsx)("div",{className:"w-full lg:w-[20%] ml-10 flex items-center justify-center",children:(0,a.jsx)("div",{className:"text-center",children:(0,a.jsx)("div",{className:"flex items-center justify-center h-16 mx-auto mb-4 w-18 sm:w-20 sm:h-20 lg:w-100 lg:h-100",children:(0,a.jsx)(o.default,{src:`/images/animals/${"龍"===t?"dragon":"鼠"===t?"mouse":"牛"===t?"cow":"虎"===t?"tiger":"兔"===t?"rabbit":"蛇"===t?"snake":"馬"===t?"horse":"羊"===t?"sheep":"猴"===t?"monkey":"雞"===t?"chicken":"狗"===t?"dog":"豬"===t?"pig":"mouse"}.png`,alt:t,width:328,height:328,className:"object-contain"})})})}),(0,a.jsxs)("div",{className:"w-full lg:w-[70%] flex flex-col gap-4 sm:gap-6",children:[(0,a.jsx)("div",{className:"text-center lg:text-start",children:(0,a.jsx)("h3",{className:"font-bold text-[#A3B116] mb-4 sm:mb-6",style:{fontFamily:"Noto Serif TC, serif",fontSize:"clamp(36px, 8vw, 70px)"},children:"主要結論"})}),(0,a.jsxs)("div",{className:"flex flex-wrap justify-center gap-3 mb-4 lg:justify-start sm:gap-4 sm:mb-6",children:[(0,a.jsx)("div",{className:"bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0",children:(0,a.jsxs)("div",{className:"font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif",fontSize:"clamp(14px, 3vw, 18px)"},children:["年柱-",(0,a.jsx)("span",{className:"text-[#A3B116]",children:e.year})]})}),(0,a.jsx)("div",{className:"bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0",children:(0,a.jsxs)("div",{className:"font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif",fontSize:"clamp(14px, 3vw, 18px)"},children:["月柱-",(0,a.jsx)("span",{className:"text-[#A3B116]",children:e.month})]})}),(0,a.jsx)("div",{className:"bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0",children:(0,a.jsxs)("div",{className:"font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif",fontSize:"clamp(14px, 3vw, 18px)"},children:["日柱-",(0,a.jsx)("span",{className:"text-[#A3B116]",children:e.day})]})}),(0,a.jsx)("div",{className:"bg-white border-2 border-black rounded-full px-3 sm:px-6 lg:px-10 py-2 min-w-[100px] sm:min-w-[120px] lg:min-w-[140px] text-center flex-shrink-0",children:(0,a.jsxs)("div",{className:"font-bold text-[#374A37]",style:{fontFamily:"Noto Serif TC, serif",fontSize:"clamp(14px, 3vw, 18px)"},children:["時柱-",(0,a.jsx)("span",{className:"text-[#A3B116]",children:e.hour})]})})]}),(0,a.jsxs)("div",{className:"flex justify-start gap-8",children:[(0,a.jsx)("div",{className:"bg-[#A3B116] text-white px-15 py-4 rounded-full",children:(0,a.jsxs)("div",{className:"text-xl font-bold text-center",style:{fontFamily:"Noto Serif TC, serif"},children:["五行-",B.strengthAnalysis.strengthDesc]})}),(0,a.jsx)("div",{className:"bg-[#A3B116] text-white px-15 py-4 rounded-full",children:(0,a.jsx)("div",{className:"text-xl font-bold text-center",style:{fontFamily:"Noto Serif TC, serif"},children:(()=>{let e=B.strengthAnalysis.weakElements||[];return 0===e.length?"五行沒有缺失":1===e.length?`缺${e[0]}`:2===e.length?`缺${e.join("")}`:`缺${e.slice(0,2).join("")}等`})()})})]})]})]})})()}),(0,a.jsx)("section",{className:"w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]",children:B?(0,a.jsx)(p,{userInfo:u,wuxingData:B.wuxingData,sessionId:D,onDataUpdate:e=>Y("health",e)}):(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成健康運勢分析..."})]})}),(0,a.jsx)("section",{className:"w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]",children:B?(0,a.jsx)(b,{userInfo:u,wuxingData:B.wuxingData,sessionId:D,onDataUpdate:e=>Y("career",e)}):(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成事業運勢分析..."})]})}),(0,a.jsx)("section",{className:"w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]",children:B?(0,a.jsx)(N,{userInfo:u,wuxingData:B.wuxingData,sessionId:D,onDataUpdate:e=>Y("wealth",e)}):(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成財運運勢分析..."})]})}),(0,a.jsx)("section",{className:"w-full sm:w-[95%] lg:w-[85%] mx-auto bg-white rounded-[20px] sm:rounded-[26px] p-4 sm:p-8 lg:p-13 mb-6 sm:mb-10 shadow-[0_4px_5.3px_rgba(0,0,0,0.25)]",children:B?(0,a.jsx)(j,{userInfo:u,wuxingData:B.wuxingData,sessionId:D,onDataUpdate:e=>Y("relationship",e)}):(0,a.jsxs)("div",{className:"py-20 text-center",children:[(0,a.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-b-2 border-[#A3B116] mx-auto mb-4"}),(0,a.jsx)("p",{className:"text-lg text-[#5A5A5A]",children:"正在生成感情運勢分析..."})]})})]}),(0,a.jsx)(c.A,{})]})}},67821:(e,t,s)=>{s.d(t,{A:()=>o});var a=s(60687),n=s(25324),r=s(30474),i=s(35950),l=s(77618);function o(){let e=(0,l.c3)("home.footer"),t={contact:[{name:e("contact"),href:"/customer/contact"}],law:[{name:e("privacy"),href:"/customer/privacy"},{name:e("terms"),href:"/customer/terms"}],social:[{icon:"/images/footer/Facebook.png",href:"https://www.facebook.com/profile.php?id=61578389876952"},{icon:"/images/footer/Instagram.png",href:"https://www.instagram.com/harmoniq_fengshui/"}]};return(0,a.jsx)("footer",{className:"px-5 text-gray-300 md:px-0",style:{background:"#374A37",fontFamily:"Noto Serif TC, serif"},children:(0,a.jsxs)("div",{className:"container px-4 mx-auto py-30",children:[(0,a.jsxs)("div",{className:"justify-center item-center text-[50px] font-bold text-white text-center mt-20 mb-20",children:[(0,a.jsx)("h1",{className:"text-white",style:{fontFamily:"Noto Serif TC, serif",fontWeight:400,fontSize:"46px"},children:e("title")}),(0,a.jsx)("p",{className:"mt-2 text-white",style:{fontFamily:"Noto Serif TC, serif",fontWeight:400,fontSize:"24px"},children:e("subtitle")})]}),(0,a.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-5",children:[(0,a.jsxs)("div",{className:"flex gap-12",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-xl font-semibold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:e("consult")}),(0,a.jsx)("ul",{className:"space-y-2",children:t.contact.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{href:e.href,className:"text-xl transition-colors hover:text-white",style:{fontFamily:"Noto Serif TC, serif"},children:e.name})},e.name))})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-xl font-semibold text-white",style:{fontFamily:"Noto Serif TC, serif"},children:e("law")}),(0,a.jsx)("ul",{className:"space-y-2",children:t.law.map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(n.N_,{href:e.href,className:"text-xl transition-colors hover:text-white",style:{fontFamily:"Noto Serif TC, serif"},children:e.name})},e.name))})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"mb-4 text-xl font-semibold text-white min-w-30",style:{fontFamily:"Noto Serif TC, serif"},children:e("focus")}),(0,a.jsx)("div",{className:"flex space-x-4",children:t.social.map(e=>e.href?(0,a.jsx)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",className:"transition-opacity hover:opacity-80",children:(0,a.jsx)(r.default,{src:e.icon,alt:"",width:30,height:30})},e.icon):(0,a.jsx)(r.default,{src:e.icon,alt:"",width:30,height:30},e.icon))})]})]}),(0,a.jsx)(i.Separator,{className:"mt-7.5"}),(0,a.jsx)("div",{className:"mt-5 font-semibold text-center border-t border-[#004F44] md:mt-10",style:{fontFamily:"Noto Serif TC, serif"},children:(0,a.jsxs)("p",{children:["\xa9 2025 HarmoniQ. ",e("copyright")]})})]})})}},85763:(e,t,s)=>{s.d(t,{Xi:()=>d,av:()=>c,j7:()=>o,tU:()=>l});var a=s(60687);s(43210);var n=s(55146),r=s(78272),i=s(4780);function l({className:e,...t}){return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(n.bL,{"data-slot":"tabs",className:(0,i.cn)("flex flex-col gap-2",e),...t}),t.setShowTab&&(0,a.jsx)(r.A,{className:"w-4 h-4 absolute top-2.5 right-5",onClick:()=>t.setShowTab(!1)})]})}function o({className:e,...t}){return(0,a.jsx)(n.B8,{"data-slot":"tabs-list",className:(0,i.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",e),...t})}function d({className:e,...t}){return(0,a.jsx)(n.l9,{"data-slot":"tabs-trigger",className:(0,i.cn)("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",e),...t})}function c({className:e,...t}){return(0,a.jsx)(n.UC,{"data-slot":"tabs-content",className:(0,i.cn)("flex-1 outline-none",e),...t})}},96834:(e,t,s)=>{s(60687),s(43210);var a=s(24224);s(4780),(0,a.F)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground",success:"border-transparent bg-green-100 text-green-800 hover:bg-green-200",warning:"border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200",info:"border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200"}},defaultVariants:{variant:"default"}})}};