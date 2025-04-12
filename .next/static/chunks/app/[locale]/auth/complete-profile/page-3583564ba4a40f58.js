(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[586],{3889:(e,r,s)=>{Promise.resolve().then(s.bind(s,6158))},6158:(e,r,s)=>{"use strict";s.r(r),s.d(r,{default:()=>o});var t=s(8081),l=s(2149),a=s(9651),i=s(7420);function o(){let e=(0,a.useRouter)(),[r,s]=(0,l.useState)({userId:"",email:"",provider:"",gender:"",birthYear:new Date().getFullYear()-30,birthMonth:1,birthDay:1,birthHour:12}),[o,n]=(0,l.useState)(!1),[d,c]=(0,l.useState)(""),h=e=>{let{name:r,value:t}=e.target;s(e=>({...e,[r]:r.includes("birth")&&"birthYear"!==r?parseInt(t,10):t}))},u=async s=>{s.preventDefault(),n(!0),c("");try{let s=await fetch("/api/auth/complete-profile",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!s.ok){let e=await s.json();throw Error(e.message||"Failed to save profile")}e.push("/")}catch(e){c(e.message)}finally{n(!1)}},m=Array.from({length:100},(e,r)=>new Date().getFullYear()-r),x=Array.from({length:12},(e,r)=>r+1),b=Array.from({length:31},(e,r)=>r+1),f=Array.from({length:24},(e,r)=>r);return(0,t.jsxs)("div",{className:"min-h-screen bg-gray-50",children:[(0,t.jsx)(i.default,{}),(0,t.jsx)("div",{className:"flex flex-col items-center justify-center px-6 py-12 mx-auto",children:(0,t.jsxs)("div",{className:"w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md",children:[(0,t.jsxs)("div",{className:"text-center",children:[(0,t.jsx)("h1",{className:"text-2xl font-bold text-[#26A69A]",children:"Complete Your Profile"}),(0,t.jsx)("p",{className:"mt-2 text-gray-600",children:"Please provide your birth details and gender to complete your profile"})]}),d&&(0,t.jsx)("div",{className:"p-3 text-sm text-red-700 bg-red-100 rounded-md",children:d}),(0,t.jsxs)("form",{onSubmit:u,className:"mt-8 space-y-6",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"gender",className:"block text-sm font-medium text-gray-700",children:"Gender"}),(0,t.jsxs)("select",{id:"gender",name:"gender",value:r.gender,onChange:h,required:!0,className:"block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]",children:[(0,t.jsx)("option",{value:"",disabled:!0,children:"Select gender"}),(0,t.jsx)("option",{value:"male",children:"Male"}),(0,t.jsx)("option",{value:"female",children:"Female"}),(0,t.jsx)("option",{value:"other",children:"Other"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Birth Date and Time"}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-1 sm:grid-cols-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"birthYear",className:"block text-xs text-gray-500",children:"Year"}),(0,t.jsx)("select",{id:"birthYear",name:"birthYear",value:r.birthYear,onChange:h,required:!0,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]",children:m.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"birthMonth",className:"block text-xs text-gray-500",children:"Month"}),(0,t.jsx)("select",{id:"birthMonth",name:"birthMonth",value:r.birthMonth,onChange:h,required:!0,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]",children:x.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"birthDay",className:"block text-xs text-gray-500",children:"Day"}),(0,t.jsx)("select",{id:"birthDay",name:"birthDay",value:r.birthDay,onChange:h,required:!0,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]",children:b.map(e=>(0,t.jsx)("option",{value:e,children:e},e))})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{htmlFor:"birthHour",className:"block text-xs text-gray-500",children:"Hour"}),(0,t.jsx)("select",{id:"birthHour",name:"birthHour",value:r.birthHour,onChange:h,required:!0,className:"block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#26A69A] focus:border-[#26A69A]",children:f.map(e=>(0,t.jsxs)("option",{value:e,children:[e,":00"]},e))})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{type:"submit",disabled:o,className:"flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#26A69A] border border-transparent rounded-md shadow-sm hover:bg-[#1E8A7E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#26A69A]",children:o?"Saving...":"Complete Profile"})})]})]})})]})}},7420:(e,r,s)=>{"use strict";s.d(r,{default:()=>d});var t=s(8081),l=s(7950),a=s.n(l),i=s(9128),o=s(6371),n=s(4333);function d(){let e=(0,o.A)();return(0,t.jsx)("nav",{className:"bg-[#066952] h-16",children:(0,t.jsx)("div",{className:"px-4 h-full",children:(0,t.jsxs)("div",{className:"md:max-w-[80%] mx-auto flex items-center justify-between h-full",children:[(0,t.jsx)(a(),{href:"/",className:"text-2xl font-bold text-white",children:"HarmoniQ"}),e?(0,t.jsx)(n.A,{className:"text-white"}):(0,t.jsx)("div",{className:"flex items-center space-x-4",children:(0,t.jsx)(i.A,{})})]})})})}}},e=>{var r=r=>e(e.s=r);e.O(0,[149,673,644,497,954,358],()=>r(3889)),_N_E=e.O()}]);