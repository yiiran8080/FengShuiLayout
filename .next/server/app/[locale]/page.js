(()=>{var e={};e.id=465,e.ids=[465],e.modules={3294:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(51129).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\code\\\\fengshui\\\\src\\\\components\\\\Navbar.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\code\\fengshui\\src\\components\\Navbar.jsx","default")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},3697:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(58908);let s=r(24560),i=r(22380);function n(e){return void 0!==e.default}function o(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r,a;let l,c,d,{src:m,sizes:u,unoptimized:h=!1,priority:x=!1,loading:p,className:f,quality:g,width:b,height:v,fill:j=!1,style:w,overrideSrc:y,onLoad:N,onLoadingComplete:_,placeholder:P="empty",blurDataURL:C,fetchPriority:E,decoding:O="async",layout:D,objectFit:R,objectPosition:S,lazyBoundary:A,lazyRoot:k,...z}=e,{imgConf:q,showAltText:M,blurComplete:I,defaultLoader:G}=t,F=q||i.imageConfigDefault;if("allSizes"in F)l=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),s=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);l={...F,allSizes:e,deviceSizes:t,qualities:s}}if(void 0===G)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let T=z.loader||G;delete z.loader,delete z.srcSet;let H="__next_img_default"in T;if(H){if("custom"===l.loader)throw Object.defineProperty(Error('Image with src "'+m+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=T;T=t=>{let{config:r,...s}=t;return e(s)}}if(D){"fill"===D&&(j=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[D];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[D];t&&!u&&(u=t)}let B="",L=o(b),W=o(v);if((a=m)&&"object"==typeof a&&(n(a)||void 0!==a.src)){let e=n(m)?m.default:m;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(c=e.blurWidth,d=e.blurHeight,C=C||e.blurDataURL,B=e.src,!j){if(L||W){if(L&&!W){let t=L/e.width;W=Math.round(e.height*t)}else if(!L&&W){let t=W/e.height;L=Math.round(e.width*t)}}else L=e.width,W=e.height}}let Q=!x&&("lazy"===p||void 0===p);(!(m="string"==typeof m?m:B)||m.startsWith("data:")||m.startsWith("blob:"))&&(h=!0,Q=!1),l.unoptimized&&(h=!0),H&&!l.dangerouslyAllowSVG&&m.split("?",1)[0].endsWith(".svg")&&(h=!0);let X=o(g),V=Object.assign(j?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:S}:{},M?{}:{color:"transparent"},w),U=I||"empty"===P?null:"blur"===P?'url("data:image/svg+xml;charset=utf-8,'+(0,s.getImageBlurSvg)({widthInt:L,heightInt:W,blurWidth:c,blurHeight:d,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+P+'")',J=U?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:U}:{},Y=function(e){let{config:t,src:r,unoptimized:s,width:i,quality:n,sizes:o,loader:a}=e;if(s)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:s,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let s;s=e.exec(r);s)t.push(parseInt(s[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=s[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:s,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,s)=>a({config:t,src:r,quality:n,width:e})+" "+("w"===c?e:s+1)+c).join(", "),src:a({config:t,src:r,quality:n,width:l[d]})}}({config:l,src:m,unoptimized:h,width:L,quality:X,sizes:u,loader:T});return{props:{...z,loading:Q?"lazy":p,fetchPriority:E,width:L,height:W,decoding:O,className:f,style:{...V,...J},sizes:Y.sizes,srcSet:Y.srcSet,src:y||Y.src},meta:{unoptimized:h,priority:x,placeholder:P,fill:j}}}},4570:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(45781),i=r(28328),n=r.n(i),o=r(3704),a=r(40927),l=r(94029);function c(){let e=(0,a.c3)("home.hero"),t=(0,l.A)();return(0,s.jsxs)("section",{className:"relative min-h-screen flex items-center",children:[(0,s.jsxs)("div",{className:"absolute inset-0 z-0",children:[(0,s.jsx)(o.default,{src:"/images/hero/heroback.png",alt:"Hero background",fill:!0,className:"object-cover",priority:!0}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/40"})]}),(0,s.jsx)("div",{className:"container mx-auto px-4 relative z-10 -top-20 md:pl-50",children:(0,s.jsxs)("div",{className:"max-w-3xl text-white flex flex-col items-center md:block",children:[(0,s.jsxs)("h1",{className:"md:text-[52px] text-4xl font-bold mb-16 mt-20 md:mt-0 leading-tight flex flex-col items-center md:items-start",children:[(0,s.jsx)("span",{children:e("title")}),t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("span",{children:e("title2").split("，")[0]}),(0,s.jsx)("span",{children:e("title2").split("，")[1]})]}):(0,s.jsx)("span",{children:e("title2")})]}),(0,s.jsx)("p",{className:"md:text-xl text-lg mb-4 font-bold",children:e("subtitle")}),(0,s.jsxs)(n(),{href:"/design",className:"inline-flex font-bold pl-10 pr-6 py-3 bg-button-gradient text-white rounded-full md:text-2xl text-xl hover:bg-primary/90 transition-colors items-center gap-2",children:[e("cta"),(0,s.jsx)(o.default,{src:"/images/hero/star.png",alt:"arrow",width:24,height:24})]})]})})]})}},4573:e=>{"use strict";e.exports=require("node:buffer")},5648:(e,t,r)=>{Promise.resolve().then(r.bind(r,35891)),Promise.resolve().then(r.t.bind(r,28328,23)),Promise.resolve().then(r.t.bind(r,7371,23)),Promise.resolve().then(r.bind(r,66320)),Promise.resolve().then(r.bind(r,4570)),Promise.resolve().then(r.bind(r,28760)),Promise.resolve().then(r.bind(r,26101))},6164:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>o.a,__next_app__:()=>m,pages:()=>d,routeModule:()=>u,tree:()=>c});var s=r(7025),i=r(18198),n=r(82576),o=r.n(n),a=r(45239),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c={children:["",{children:["[locale]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,72027)),"D:\\code\\fengshui\\src\\app\\[locale]\\page.tsx"]}]},{layout:[()=>Promise.resolve().then(r.bind(r,77854)),"D:\\code\\fengshui\\src\\app\\[locale]\\layout.tsx"],error:[()=>Promise.resolve().then(r.bind(r,34048)),"D:\\code\\fengshui\\src\\app\\[locale]\\error.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3178))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{"not-found":[()=>Promise.resolve().then(r.t.bind(r,4540,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,53117,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,6874,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3178))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,d=["D:\\code\\fengshui\\src\\app\\[locale]\\page.tsx"],m={require:r,loadChunk:()=>Promise.resolve()},u=new s.AppPageRouteModule({definition:{kind:i.RouteKind.APP_PAGE,page:"/[locale]/page",pathname:"/[locale]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},22380:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return s}});let r=["default","imgix","cloudinary","akamai","custom"],s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},24560:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:s,blurHeight:i,blurDataURL:n,objectFit:o}=e,a=s?40*s:t,l=i?40*i:r,c=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+c+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(c?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},26101:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(45781),i=r(3704),n=r(40927),o=r(28328),a=r.n(o),l=r(94029);function c(){let e=(0,n.c3)("home.share"),t=(0,l.A)();return(0,s.jsx)("section",{className:"md:py-40 py-15 bg-secondary relative overflow-hidden",children:(0,s.jsxs)("div",{className:"container mx-auto md:px-4 px-8 ",children:[t?(0,s.jsx)("img",{src:"/images/hero/ratio2.png",alt:"",className:"object-contain absolute top-0 left-1/2 -translate-x-1/2 w-full h-auto"}):(0,s.jsx)("img",{src:"/images/hero/ratio.png",alt:"",className:"object-contain absolute top-0 left-0 w-auto h-auto"}),(0,s.jsxs)("div",{className:"flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto",children:[(0,s.jsx)(i.default,{src:"/images/hero/empty.png",alt:"分享您的平面图",width:588,height:331,className:"object-contain z-10"}),(0,s.jsxs)("div",{className:"flex-grow flex flex-col gap-6 items-center md:items-end",children:[(0,s.jsx)("h3",{className:"text-hero md:text-5xl text-[28px] font-bold",children:e("title")}),(0,s.jsx)("p",{className:"text-secondary-foreground md:text-xl  md:text-right text-center max-w-90",children:e("description")}),(0,s.jsx)(a(),{href:"/design",className:"cursor-pointer inline-flex md:mt-9 font-bold px-10 py-3 bg-button-primary text-white rounded-full md:text-2xl hover:bg-primary/90 transition-colors items-center gap-2",children:e("cta")})]})]})]})})}},28150:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(51129).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\code\\\\fengshui\\\\src\\\\components\\\\FAQ.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\code\\fengshui\\src\\components\\FAQ.jsx","default")},28760:(e,t,r)=>{"use strict";r.d(t,{default:()=>c});var s=r(45781),i=r(28328),n=r.n(i),o=r(36108),a=r(94029),l=r(33584);function c(){let e=(0,a.A)();return(0,s.jsx)("nav",{className:"bg-[#066952] h-16",children:(0,s.jsx)("div",{className:"px-4 h-full",children:(0,s.jsxs)("div",{className:"md:max-w-[80%] mx-auto flex items-center justify-between h-full",children:[(0,s.jsx)(n(),{href:"/",className:"text-2xl font-bold text-white",children:"HarmoniQ"}),e?(0,s.jsx)(l.A,{className:"text-white"}):(0,s.jsx)("div",{className:"flex items-center space-x-4",children:(0,s.jsx)(o.A,{})})]})})})}},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30653:(e,t,r)=>{let{createProxy:s}=r(91614);e.exports=s("D:\\code\\fengshui\\node_modules\\.pnpm\\next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0\\node_modules\\next\\dist\\client\\image-component.js")},33873:e=>{"use strict";e.exports=require("path")},41751:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(51129).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\code\\\\fengshui\\\\src\\\\components\\\\Share.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\code\\fengshui\\src\\components\\Share.jsx","default")},55511:e=>{"use strict";e.exports=require("crypto")},57975:e=>{"use strict";e.exports=require("node:util")},58908:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},66320:(e,t,r)=>{"use strict";r.d(t,{default:()=>n});var s=r(45781),i=r(13072);function n(){let[e,t]=(0,i.useState)(null);return(0,s.jsx)("section",{className:"py-20 bg-white",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsxs)("div",{className:"text-center mb-12",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold mb-4",children:"常见问题"}),(0,s.jsx)("p",{className:"text-lg text-gray-600 max-w-2xl mx-auto",children:"解答您关心的问题，帮助您更好地了解我们的服务"})]}),(0,s.jsx)("div",{className:"max-w-3xl mx-auto",children:[{question:"如何开始使用风水布局服务？",answer:'只需点击"免费开始测算"按钮，通过简单的拖拽操作设计您的房间布局，系统会自动为您生成专业的风水分析报告。'},{question:"需要提供哪些信息？",answer:"基本的房间布局、门窗位置、主要家具的摆放位置。如果您希望获得更准确的分析，也可以提供房屋朝向和个人生辰八字信息。"},{question:"分析报告包含哪些内容？",answer:"报告包括整体布局评估、各个房间的吉凶分析、家具摆放建议、气场流动分析，以及具体的改善方案。"},{question:"如何保证分析的准确性？",answer:"我们的系统基于传统风水理论和现代数据分析，结合了大量实际案例，并由专业风水师团队进行验证。"}].map((r,i)=>(0,s.jsxs)("div",{className:"mb-4",children:[(0,s.jsxs)("button",{className:"w-full flex items-center justify-between p-4 bg-secondary/20 hover:bg-secondary/30 rounded-lg transition-colors",onClick:()=>t(e===i?null:i),children:[(0,s.jsx)("span",{className:"text-left font-medium",children:r.question}),(0,s.jsx)("span",{className:"ml-4 text-primary",children:e===i?"−":"+"})]}),e===i&&(0,s.jsx)("div",{className:"p-4 bg-white border border-gray-200 rounded-b-lg",children:(0,s.jsx)("p",{className:"text-gray-600",children:r.answer})})]},i))})]})})}},66837:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:s,width:i,quality:n}=e,o=n||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(s)+"&w="+i+"&q="+o+(s.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}}),r.__next_img_default=!0;let s=r},72027:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>y});var s=r(95479),i=r(3294),n=r(99720),o=r(89877),a=r.n(o),l=r(73250),c=r.t(l,2),d=r(74135),m=(0,l.cache)(function(e,t){return(0,d.HM)({...e,namespace:t})}),u=r(5963),h=c["use".trim()];function x(...[e]){return m(function(e,t){try{return h(t)}catch(t){throw t instanceof TypeError&&t.message.includes("Cannot read properties of null (reading 'use')")?Error(`\`${e}\` is not callable within an async component. Please refer to https://next-intl.dev/docs/environments/server-client-components#async-components`,{cause:t}):t}}("useTranslations",(0,u.A)()),e)}function p(){let e=x("home.features"),t=[{title:e("title1"),description:e("subtitle1"),icon:"/images/hero/feature1.png"},{title:e("title2"),description:e("subtitle2"),icon:"/images/hero/feature2.png"},{title:e("title3"),description:e("subtitle3"),icon:"/images/hero/feature3.png"}];return(0,s.jsx)("section",{className:"py-20 bg-white",children:(0,s.jsx)("div",{className:"container mx-auto md:px-4 px-8",children:(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 max-w-6xl mx-auto",children:t.map((e,t)=>(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"relative w-16 h-16 mb-6",children:(0,s.jsx)(a(),{src:e.icon,alt:e.title,fill:!0,className:"object-contain"})}),(0,s.jsx)("h3",{className:"text-hero md:text-2xl text-xl font-bold mb-3",children:e.title}),(0,s.jsx)("p",{className:"text-hero",children:e.description})]},t))})})})}var f=r(41751),g=r(87846),b=r.n(g);function v(){let e=x("home.compare");return(0,s.jsx)("section",{className:"pt-0 pb-40 bg-secondary relative overflow-hidden",children:(0,s.jsx)("div",{className:"container mx-auto md:px-4 px-8 ",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row items-center gap-12 md:gap-24 max-w-6xl mx-auto",children:[(0,s.jsxs)("div",{className:"flex-grow flex flex-col gap-6 items-center md:items-start",children:[(0,s.jsx)("h3",{className:"text-hero md:text-5xl text-[28px]  font-bold",children:e("title")}),(0,s.jsx)("p",{className:"text-secondary-foreground md:text-xl md:text-left text-center max-w-90",children:e("description")}),(0,s.jsx)(b(),{href:"/design",className:"cursor-pointer inline-flex md:mt-9 font-bold px-10 py-3 bg-button-primary text-white rounded-full md:text-2xl hover:bg-primary/90 transition-colors items-center gap-2",children:e("cta")})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10",children:(0,s.jsx)("div",{className:"w-15 h-15 rounded-full bg-white flex items-center justify-center",children:(0,s.jsx)(a(),{src:"/images/hero/arrow.png",alt:"",width:28,height:28,className:"object-contain"})})}),(0,s.jsx)(a(),{src:"/images/hero/compare.png",alt:"对比",width:588,height:331,className:"object-contain"}),(0,s.jsxs)("div",{className:"absolute w-full bottom-0 left-0 p-4 flex items-center justify-between",children:[(0,s.jsx)("button",{className:"bg-[#D9D9D9CC] text-white px-4 py-2 rounded-[10px] md:text-xl text-[12px]",children:e("before")}),(0,s.jsx)("button",{className:"bg-[#25826CCC] text-white px-4 py-2 rounded-[10px] md:text-xl text-[12px]",children:e("after")})]})]})]})})})}var j=r(28150);function w(){return(0,s.jsx)("footer",{className:"bg-gray-900 text-gray-300",children:(0,s.jsxs)("div",{className:"container mx-auto px-4 py-12",children:[(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,s.jsxs)("div",{className:"col-span-1",children:[(0,s.jsx)(b(),{href:"/",className:"text-2xl font-bold text-white",children:"HarmoniQ"}),(0,s.jsx)("p",{className:"mt-4 text-sm",children:"专业的智能风水布局分析平台，帮助您打造完美居所"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-4",children:"产品"}),(0,s.jsx)("ul",{className:"space-y-2",children:[{name:"功能特点",href:"#"},{name:"价格方案",href:"#"},{name:"使用教程",href:"#"},{name:"常见问题",href:"#"}].map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(b(),{href:e.href,className:"hover:text-white transition-colors",children:e.name})},e.name))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-4",children:"公司"}),(0,s.jsx)("ul",{className:"space-y-2",children:[{name:"关于我们",href:"#"},{name:"联系我们",href:"#"},{name:"加入我们",href:"#"},{name:"用户协议",href:"#"}].map(e=>(0,s.jsx)("li",{children:(0,s.jsx)(b(),{href:e.href,className:"hover:text-white transition-colors",children:e.name})},e.name))})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h3",{className:"text-white font-semibold mb-4",children:"关注我们"}),(0,s.jsx)("div",{className:"flex space-x-4",children:[{name:"微信",href:"#",icon:"/images/hero/empty.png"},{name:"微博",href:"#",icon:"/images/hero/empty.png"},{name:"抖音",href:"#",icon:"/images/hero/empty.png"}].map(e=>(0,s.jsx)(b(),{href:e.href,className:"w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors",children:(0,s.jsx)(a(),{src:e.icon,alt:e.name,width:24,height:24})},e.name))})]})]}),(0,s.jsx)("div",{className:"border-t border-gray-800 mt-12 pt-8 text-sm text-center",children:(0,s.jsx)("p",{children:"\xa9 2024 HarmoniQ. All rights reserved."})})]})})}function y(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.default,{}),(0,s.jsxs)("main",{children:[(0,s.jsx)(n.default,{}),(0,s.jsx)(p,{}),(0,s.jsx)(f.default,{}),(0,s.jsx)(v,{}),(0,s.jsx)(j.default,{})]}),(0,s.jsx)(w,{})]})}},77598:e=>{"use strict";e.exports=require("node:crypto")},79551:e=>{"use strict";e.exports=require("url")},87846:(e,t,r)=>{let{createProxy:s}=r(91614);e.exports=s("D:\\code\\fengshui\\node_modules\\.pnpm\\next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0\\node_modules\\next\\dist\\client\\app-dir\\link.js")},89877:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let s=r(20359),i=r(3697),n=r(30653),o=s._(r(66837));function a(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=n.Image},95920:(e,t,r)=>{Promise.resolve().then(r.bind(r,27093)),Promise.resolve().then(r.t.bind(r,87846,23)),Promise.resolve().then(r.t.bind(r,30653,23)),Promise.resolve().then(r.bind(r,28150)),Promise.resolve().then(r.bind(r,99720)),Promise.resolve().then(r.bind(r,3294)),Promise.resolve().then(r.bind(r,41751))},99720:(e,t,r)=>{"use strict";r.d(t,{default:()=>s});let s=(0,r(51129).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\code\\\\fengshui\\\\src\\\\components\\\\Hero.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\code\\fengshui\\src\\components\\Hero.jsx","default")}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[915,222,273,862,323,426],()=>r(6164));module.exports=s})();