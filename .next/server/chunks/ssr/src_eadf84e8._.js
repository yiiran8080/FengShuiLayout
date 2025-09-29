module.exports = {

"[project]/src/i18n/routing.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "routing": (()=>routing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-ssr] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // A list of all locales that are supported
    locales: [
        "zh-CN",
        "zh-TW"
    ],
    // Used when no locale matches
    defaultLocale: "zh-TW"
});
}}),
"[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Link": (()=>Link),
    "getPathname": (()=>getPathname),
    "redirect": (()=>redirect),
    "usePathname": (()=>usePathname),
    "useRouter": (()=>useRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-ssr] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-ssr] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["routing"]);
}}),
"[project]/src/components/BirthdayModal.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const BirthdayModal = ({ isOpen, onClose, onSubmit, concern, isCoupleAnalysis = false })=>{
    // 單人資料
    const [birthday, setBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [gender, setGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // 雙人資料（合婚分析用）
    const [userBirthday, setUserBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [userGender, setUserGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [partnerBirthday, setPartnerBirthday] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [partnerGender, setPartnerGender] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("🔍 Form submission attempt:");
        console.log("isCoupleAnalysis:", isCoupleAnalysis);
        console.log("userBirthday:", userBirthday);
        console.log("userGender:", userGender);
        console.log("partnerBirthday:", partnerBirthday);
        console.log("partnerGender:", partnerGender);
        if (isCoupleAnalysis) {
            // 合婚分析：需要雙方資料
            if (userBirthday && userGender && partnerBirthday && partnerGender) {
                console.log("✅ All couple analysis fields filled, submitting...");
                onSubmit({
                    userBirthday,
                    userGender,
                    partnerBirthday,
                    partnerGender,
                    isCoupleAnalysis: true
                });
                // 清空表單
                setUserBirthday("");
                setUserGender("");
                setPartnerBirthday("");
                setPartnerGender("");
            } else {
                console.log("❌ Missing required fields for couple analysis:");
                console.log("- userBirthday:", userBirthday ? "✓" : "✗");
                console.log("- userGender:", userGender ? "✓" : "✗");
                console.log("- partnerBirthday:", partnerBirthday ? "✓" : "✗");
                console.log("- partnerGender:", partnerGender ? "✓" : "✗");
            }
        } else {
            // 個人分析：只需要個人資料
            if (birthday && gender) {
                console.log("✅ All individual analysis fields filled, submitting...");
                onSubmit({
                    birthday,
                    gender,
                    isCoupleAnalysis: false
                });
                setBirthday("");
                setGender("");
            } else {
                console.log("❌ Missing required fields for individual analysis:");
                console.log("- birthday:", birthday ? "✓" : "✗");
                console.log("- gender:", gender ? "✓" : "✗");
            }
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-bold mb-4 text-center",
                    children: [
                        "📅 ",
                        isCoupleAnalysis ? "合婚分析資料收集" : "生辰資料收集"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BirthdayModal.jsx",
                    lineNumber: 84,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-6 text-center",
                    children: [
                        "為了為你",
                        isCoupleAnalysis ? "們" : "",
                        "提供更精準嘅",
                        concern,
                        "分析，需要",
                        isCoupleAnalysis ? "雙方" : "你",
                        "嘅基本資料："
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BirthdayModal.jsx",
                    lineNumber: 88,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "space-y-4",
                    children: [
                        isCoupleAnalysis ? // 合婚分析：雙人表單
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-blue-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "👤 你的資料"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 99,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "出生日期 *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: userBirthday,
                                                            onChange: (e)=>setUserBirthday(e.target.value),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 107,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "性別 *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 118,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            value: "male",
                                                                            checked: userGender === "male",
                                                                            onChange: (e)=>setUserGender(e.target.value),
                                                                            className: "mr-2",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                            lineNumber: 123,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        "男性"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                    lineNumber: 122,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            value: "female",
                                                                            checked: userGender === "female",
                                                                            onChange: (e)=>setUserGender(e.target.value),
                                                                            className: "mr-2",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                            lineNumber: 140,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        "女性"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 121,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 117,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 102,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 98,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-l-4 border-pink-500 pl-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-gray-800 mb-3",
                                            children: "💕 對方資料"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 163,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "出生日期 *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 168,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "date",
                                                            value: partnerBirthday,
                                                            onChange: (e)=>setPartnerBirthday(e.target.value),
                                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 171,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 167,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                                            children: "性別 *"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 184,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            value: "male",
                                                                            checked: partnerGender === "male",
                                                                            onChange: (e)=>setPartnerGender(e.target.value),
                                                                            className: "mr-2",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        "男性"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                    lineNumber: 188,
                                                                    columnNumber: 12
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            type: "radio",
                                                                            value: "female",
                                                                            checked: partnerGender === "female",
                                                                            onChange: (e)=>setPartnerGender(e.target.value),
                                                                            className: "mr-2",
                                                                            required: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                            lineNumber: 206,
                                                                            columnNumber: 13
                                                                        }, this),
                                                                        "女性"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 12
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 187,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 183,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 166,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 162,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true) : // 個人分析：單人表單
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "出生日期 *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 232,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: birthday,
                                            onChange: (e)=>setBirthday(e.target.value),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 235,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 231,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-2",
                                            children: "性別 *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 247,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            value: "male",
                                                            checked: gender === "male",
                                                            onChange: (e)=>setGender(e.target.value),
                                                            className: "mr-2",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 252,
                                                            columnNumber: 11
                                                        }, this),
                                                        "男性"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 251,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            value: "female",
                                                            checked: gender === "female",
                                                            onChange: (e)=>setGender(e.target.value),
                                                            className: "mr-2",
                                                            required: true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                                            lineNumber: 265,
                                                            columnNumber: 11
                                                        }, this),
                                                        "女性"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/BirthdayModal.jsx",
                                            lineNumber: 250,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 246,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50 p-3 rounded-md",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-800",
                                children: [
                                    "📋 我們會根據你嘅八字五行提供：",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/BirthdayModal.jsx",
                                        lineNumber: 285,
                                        columnNumber: 8
                                    }, this),
                                    "• 個人性格分析",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/BirthdayModal.jsx",
                                        lineNumber: 287,
                                        columnNumber: 8
                                    }, this),
                                    "• ",
                                    concern,
                                    "運勢評估",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/BirthdayModal.jsx",
                                        lineNumber: 288,
                                        columnNumber: 8
                                    }, this),
                                    "• 具體改善建議",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/BirthdayModal.jsx",
                                        lineNumber: 290,
                                        columnNumber: 8
                                    }, this),
                                    "• 風水方案"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/BirthdayModal.jsx",
                                lineNumber: 283,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BirthdayModal.jsx",
                            lineNumber: 282,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex space-x-3 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50",
                                    children: "稍後再說"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 295,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700",
                                    children: "提交資料"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/BirthdayModal.jsx",
                                    lineNumber: 302,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BirthdayModal.jsx",
                            lineNumber: 294,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BirthdayModal.jsx",
                    lineNumber: 93,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-500 mt-4 text-center",
                    children: "🔒 你嘅個人資料會被安全保護"
                }, void 0, false, {
                    fileName: "[project]/src/components/BirthdayModal.jsx",
                    lineNumber: 311,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BirthdayModal.jsx",
            lineNumber: 83,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BirthdayModal.jsx",
        lineNumber: 82,
        columnNumber: 3
    }, this);
};
const __TURBOPACK__default__export__ = BirthdayModal;
}}),
"[project]/src/types/room.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "FURNITURE_TYPES": (()=>FURNITURE_TYPES),
    "FURNITURE_TYPES_LABEL_CN": (()=>FURNITURE_TYPES_LABEL_CN),
    "FURNITURE_TYPES_LABEL_TW": (()=>FURNITURE_TYPES_LABEL_TW),
    "ITEM_TYPES": (()=>ITEM_TYPES),
    "ROOM_COLORS": (()=>ROOM_COLORS),
    "ROOM_TYPES": (()=>ROOM_TYPES),
    "ROOM_TYPES_LABEL_CN": (()=>ROOM_TYPES_LABEL_CN),
    "ROOM_TYPES_LABEL_TW": (()=>ROOM_TYPES_LABEL_TW)
});
const ITEM_TYPES = {
    ROOM: 'room',
    FURNITURE: 'furniture'
};
const ROOM_TYPES = {
    LIVING_ROOM: 'living_room',
    DINING_ROOM: 'dining_room',
    STORAGE_ROOM: 'storage_room',
    STUDY_ROOM: 'study_room',
    BEDROOM: 'bedroom',
    BATHROOM: 'bathroom',
    KITCHEN: 'kitchen',
    BALCONY: 'balcony',
    GARDEN: 'garden',
    GARAGE: 'garage',
    CORRIDOR: 'corridor'
};
const FURNITURE_TYPES = {
    BED: 'bed',
    SOFA: 'sofa',
    TABLE: 'table',
    CHAIR: 'chair',
    CABINET: 'cabinet',
    TV: 'tv',
    LAMP: 'lamp',
    DOOR: 'door',
    WINDOW: 'window',
    BOOKSHELF: 'bookshelf',
    WARDROBE: 'wardrobe',
    PLANT: 'plant',
    FRIDGE: 'fridge',
    STOVE: 'stove',
    SINK: 'sink',
    WASHBASIN: 'washbasin',
    TOILET: 'toilet',
    SHOWER: 'shower',
    BATHTUB: 'bathtub'
};
const FURNITURE_TYPES_LABEL_CN = {
    [FURNITURE_TYPES.DOOR]: '门',
    [FURNITURE_TYPES.WINDOW]: '窗',
    [FURNITURE_TYPES.TABLE]: '枱',
    [FURNITURE_TYPES.CHAIR]: '椅子',
    [FURNITURE_TYPES.SOFA]: '沙发',
    [FURNITURE_TYPES.BED]: '床',
    [FURNITURE_TYPES.LAMP]: '儿童床',
    [FURNITURE_TYPES.TV]: '电视',
    [FURNITURE_TYPES.BOOKSHELF]: '茶几',
    [FURNITURE_TYPES.WARDROBE]: '柜',
    [FURNITURE_TYPES.PLANT]: '植物',
    [FURNITURE_TYPES.FRIDGE]: '冰箱',
    [FURNITURE_TYPES.STOVE]: '炉具',
    [FURNITURE_TYPES.SINK]: '锌盘',
    [FURNITURE_TYPES.WASHBASIN]: '洗手盘',
    [FURNITURE_TYPES.TOILET]: '马桶',
    [FURNITURE_TYPES.SHOWER]: '淋浴',
    [FURNITURE_TYPES.BATHTUB]: '浸浴'
};
const FURNITURE_TYPES_LABEL_TW = {
    [FURNITURE_TYPES.DOOR]: '門',
    [FURNITURE_TYPES.WINDOW]: '窗',
    [FURNITURE_TYPES.TABLE]: '枱',
    [FURNITURE_TYPES.CHAIR]: '椅子',
    [FURNITURE_TYPES.SOFA]: '沙發',
    [FURNITURE_TYPES.BED]: '床',
    [FURNITURE_TYPES.LAMP]: '兒童床',
    [FURNITURE_TYPES.TV]: '電視',
    [FURNITURE_TYPES.BOOKSHELF]: '茶几',
    [FURNITURE_TYPES.WARDROBE]: '櫃',
    [FURNITURE_TYPES.PLANT]: '植物',
    [FURNITURE_TYPES.FRIDGE]: '冰箱',
    [FURNITURE_TYPES.STOVE]: '爐具',
    [FURNITURE_TYPES.SINK]: '锌盘',
    [FURNITURE_TYPES.WASHBASIN]: '洗手盤',
    [FURNITURE_TYPES.TOILET]: '馬桶',
    [FURNITURE_TYPES.SHOWER]: '淋浴',
    [FURNITURE_TYPES.BATHTUB]: '浸浴'
};
const ROOM_TYPES_LABEL_CN = {
    [ROOM_TYPES.LIVING_ROOM]: "客厅",
    [ROOM_TYPES.DINING_ROOM]: "饭厅",
    [ROOM_TYPES.STORAGE_ROOM]: "杂物房",
    [ROOM_TYPES.STUDY_ROOM]: "书房",
    [ROOM_TYPES.BEDROOM]: "睡房",
    [ROOM_TYPES.BATHROOM]: "浴室",
    [ROOM_TYPES.KITCHEN]: "厨房",
    [ROOM_TYPES.BALCONY]: "阳台",
    [ROOM_TYPES.GARDEN]: "花园",
    [ROOM_TYPES.GARAGE]: "车库",
    [ROOM_TYPES.CORRIDOR]: "走廊"
};
const ROOM_TYPES_LABEL_TW = {
    [ROOM_TYPES.LIVING_ROOM]: "客廳",
    [ROOM_TYPES.DINING_ROOM]: "飯廳",
    [ROOM_TYPES.STORAGE_ROOM]: "雜物房",
    [ROOM_TYPES.STUDY_ROOM]: "書房",
    [ROOM_TYPES.BEDROOM]: "睡房",
    [ROOM_TYPES.BATHROOM]: "浴室",
    [ROOM_TYPES.KITCHEN]: "廚房",
    [ROOM_TYPES.BALCONY]: "陽台",
    [ROOM_TYPES.GARDEN]: "花園",
    [ROOM_TYPES.GARAGE]: "車庫",
    [ROOM_TYPES.CORRIDOR]: "走廊"
};
const ROOM_COLORS = {
    [ROOM_TYPES.LIVING_ROOM]: "#F0DF9C",
    [ROOM_TYPES.DINING_ROOM]: "#F5D4BC",
    [ROOM_TYPES.STORAGE_ROOM]: "#ADC0BC",
    [ROOM_TYPES.STUDY_ROOM]: "#B0B8C9",
    [ROOM_TYPES.BEDROOM]: "#F5B8B8",
    [ROOM_TYPES.BATHROOM]: "#C1D7E2",
    [ROOM_TYPES.KITCHEN]: "#EDE0C6",
    [ROOM_TYPES.BALCONY]: "#D0DCAA",
    [ROOM_TYPES.GARDEN]: "#AACDBC",
    [ROOM_TYPES.GARAGE]: "#C7C7DD",
    [ROOM_TYPES.CORRIDOR]: "#CDCDCD"
};
}}),
"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "getBirthDate": (()=>getBirthDate),
    "getRoomLabel": (()=>getRoomLabel),
    "splitLongString": (()=>splitLongString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/room.js [app-ssr] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
function getBirthDate(birthDateTime) {
    const date = new Date(birthDateTime);
    return {
        year: date.getFullYear().toString(),
        month: (date.getMonth() + 1).toString().padStart(2, "0"),
        day: date.getDate().toString().padStart(2, "0"),
        hour: date.getHours().toString().padStart(2, "0")
    };
}
function splitLongString(longString, maxLength) {
    const result = [];
    let startIndex = 0;
    while(startIndex < longString.length){
        let endIndex = startIndex + maxLength;
        if (endIndex > longString.length) {
            endIndex = longString.length;
        }
        result.push(longString.substring(startIndex, endIndex));
        startIndex = endIndex;
    }
    return result;
}
function getRoomLabel(roomId, locale) {
    const roomType = roomId.split("-")[0];
    const no = roomId.split("-")[1];
    if (locale === "zh-CN") {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROOM_TYPES_LABEL_CN"][roomType] + "-" + no;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ROOM_TYPES_LABEL_TW"][roomType] + "-" + no;
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DropdownMenu": (()=>DropdownMenu),
    "DropdownMenuCheckboxItem": (()=>DropdownMenuCheckboxItem),
    "DropdownMenuContent": (()=>DropdownMenuContent),
    "DropdownMenuGroup": (()=>DropdownMenuGroup),
    "DropdownMenuItem": (()=>DropdownMenuItem),
    "DropdownMenuLabel": (()=>DropdownMenuLabel),
    "DropdownMenuPortal": (()=>DropdownMenuPortal),
    "DropdownMenuRadioGroup": (()=>DropdownMenuRadioGroup),
    "DropdownMenuRadioItem": (()=>DropdownMenuRadioItem),
    "DropdownMenuSeparator": (()=>DropdownMenuSeparator),
    "DropdownMenuShortcut": (()=>DropdownMenuShortcut),
    "DropdownMenuSub": (()=>DropdownMenuSub),
    "DropdownMenuSubContent": (()=>DropdownMenuSubContent),
    "DropdownMenuSubTrigger": (()=>DropdownMenuSubTrigger),
    "DropdownMenuTrigger": (()=>DropdownMenuTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
            ...props
        }, void 0, false, {
            fileName: "[project]/src/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/lib/emitter.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mitt/dist/mitt.mjs [app-ssr] (ecmascript)");
;
const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = emitter;
}}),
"[project]/src/types/constants.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "EVENT_TRANSLATE_STATUS": (()=>EVENT_TRANSLATE_STATUS)
});
const EVENT_TRANSLATE_STATUS = "E_K_TRANSLATE";
}}),
"[project]/src/components/LanguageToggle.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LanguageToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emitter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function LanguageToggle({ className, trigger }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    let href = `/${pathname.split('/').slice(2).join('/')}`;
    // const [transStatus, setTransStatus] = useState(false)
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('toast');
    // useEffect(() => {
    //   function load(transStatus) {  //     setTransStatus(transStatus)
    //   }
    //   emitter.on(EVENT_TRANSLATE_STATUS, load)
    //   return () => {
    //     emitter.off(EVENT_TRANSLATE_STATUS, load)
    //   }
    // }, [])
    // const onToggle = e => {
    //   if (pathname.indexOf('report') > -1 && transStatus) {
    //     e.preventDefault();
    //     toast.info(t('translating'));
    //   }
    // }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 text-white hover:opacity-80", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        trigger ? trigger : pathname.startsWith('/zh-CN') ? '简体中文' : '繁體中文',
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageToggle.jsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LanguageToggle.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/LanguageToggle.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-white rounded-lg shadow-lg p-1 min-w-[120px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "focus:bg-inherit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            // onClick={onToggle}
                            href: href,
                            locale: "zh-CN",
                            className: "px-4 py-2 text-sm  hover:text-primary rounded text-foreground",
                            children: "简体中文"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageToggle.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageToggle.jsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "focus:bg-inherit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            // onClick={onToggle}
                            href: href,
                            locale: "zh-TW",
                            className: "px-4 py-2 text-sm hover:text-primary rounded text-foreground",
                            children: "繁體中文"
                        }, void 0, false, {
                            fileName: "[project]/src/components/LanguageToggle.jsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/LanguageToggle.jsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/LanguageToggle.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/LanguageToggle.jsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/utils/regionDetection.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Region Detection Utility
 * Detects user's region (China, Hong Kong, Taiwan) for currency and locale selection
 */ /**
 * Detect user's region based on IP geolocation
 * @returns {Promise<string>} - 'china', 'hongkong', or 'taiwan' (default)
 */ __turbopack_context__.s({
    "clearRegionPreference": (()=>clearRegionPreference),
    "detectRegionFromLanguage": (()=>detectRegionFromLanguage),
    "detectUserRegion": (()=>detectUserRegion),
    "getUserRegion": (()=>getUserRegion),
    "saveRegionPreference": (()=>saveRegionPreference)
});
const detectUserRegion = async ()=>{
    try {
        console.log("🌍 Detecting user region...");
        // Use ipapi.co for IP-based geolocation (free tier: 1000 requests/day)
        const response = await fetch("https://ipapi.co/json/", {
            timeout: 5000
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("🌍 Geolocation data:", data);
        const countryCode = data.country_code;
        // Map country codes to our regions
        if (countryCode === "CN") {
            console.log("🇨🇳 Detected: China");
            return "china";
        } else if (countryCode === "HK") {
            console.log("🇭🇰 Detected: Hong Kong");
            return "hongkong";
        } else {
            console.log("� Detected: Other region - using Hong Kong as default");
            return "hongkong";
        }
    } catch (error) {
        console.warn("⚠️ Region detection failed:", error.message);
        console.log("🇹🇼 Falling back to Taiwan as default region");
        return "taiwan"; // Default fallback
    }
};
const detectRegionFromLanguage = ()=>{
    try {
        const languages = navigator.languages || [
            navigator.language || navigator.userLanguage
        ];
        for (let lang of languages){
            const langLower = lang.toLowerCase();
            if (langLower.includes("zh-cn") || langLower.includes("zh-hans")) {
                console.log("🈸 Language detected: Simplified Chinese (China)");
                return "china";
            }
            if (langLower.includes("zh-hk")) {
                console.log("🈳 Language detected: Hong Kong Chinese");
                return "hongkong";
            }
        }
        console.log("🌐 No specific Chinese locale detected, defaulting to Hong Kong");
        return "hongkong";
    } catch (error) {
        console.warn("⚠️ Language detection failed:", error.message);
        return "taiwan";
    }
};
const getUserRegion = async ()=>{
    console.log("🚀 Starting region detection...");
    // Check if user has manually selected a region (stored in localStorage)
    const storedRegion = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : null;
    if (storedRegion && [
        "china",
        "hongkong"
    ].includes(storedRegion)) {
        "TURBOPACK unreachable";
    }
    // Try IP-based detection first
    const ipRegion = await detectUserRegion();
    // If IP detection fails, try language detection
    if (ipRegion === "hongkong") {
        const langRegion = detectRegionFromLanguage();
        console.log("📍 Final region selection:", langRegion);
        return langRegion;
    }
    console.log("📍 Final region selection:", ipRegion);
    return ipRegion;
};
const saveRegionPreference = (region)=>{
    if ("undefined" !== "undefined" && [
        "china",
        "hongkong"
    ].includes(region)) {
        "TURBOPACK unreachable";
    }
};
const clearRegionPreference = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
};
}}),
"[project]/src/config/regions.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Region Configuration
 * Defines currency, locale, and payment settings for each supported region
 */ __turbopack_context__.s({
    "formatPrice": (()=>formatPrice),
    "getAllRegions": (()=>getAllRegions),
    "getRegionConfig": (()=>getRegionConfig),
    "isSupportedRegion": (()=>isSupportedRegion),
    "regionConfig": (()=>regionConfig)
});
const regionConfig = {
    china: {
        // Basic info
        name: "China",
        code: "CN",
        currency: "CNY",
        symbol: "¥",
        locale: "zh-CN",
        // Pricing (you can adjust these values)
        prices: {
            basic: 688,
            premium: 1288
        },
        // Stripe Price IDs (you'll create these in Stripe dashboard)
        stripePriceIds: {
            basic: "price_china_basic_cny",
            premium: "price_china_premium_cny"
        },
        // Display settings
        currencyPosition: "before",
        flag: "🇨🇳",
        // Payment methods available in China
        paymentMethods: [
            "card",
            "alipay",
            "wechat_pay"
        ]
    },
    hongkong: {
        // Basic info
        name: "Hong Kong",
        code: "HK",
        currency: "HKD",
        symbol: "HK$",
        locale: "zh-TW",
        // Pricing (you can adjust these values)
        prices: {
            basic: 888,
            premium: 1588
        },
        // Stripe Price IDs (you'll create these in Stripe dashboard)
        stripePriceIds: {
            basic: "price_hk_basic_hkd",
            premium: "price_hk_premium_hkd"
        },
        // Display settings
        currencyPosition: "before",
        flag: "🇭🇰",
        // Payment methods available in Hong Kong
        paymentMethods: [
            "card",
            "alipay_hk",
            "octopus"
        ]
    }
};
const getRegionConfig = (region)=>{
    return regionConfig[region] || regionConfig.hongkong; // Default to Hong Kong
};
const formatPrice = (amount, region)=>{
    const config = getRegionConfig(region);
    // Add thousand separators
    const formattedAmount = amount.toLocaleString();
    if (config.currencyPosition === "before") {
        return `${config.symbol}${formattedAmount}`;
    } else {
        return `${formattedAmount}${config.symbol}`;
    }
};
const getAllRegions = ()=>{
    return Object.keys(regionConfig).map((key)=>({
            key,
            ...regionConfig[key]
        }));
};
const isSupportedRegion = (region)=>{
    return Object.keys(regionConfig).includes(region);
};
}}),
"[project]/src/hooks/useRegionDetectionEnhanced.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * Enhanced Region Detection Hook with Auto-Redirect
 * Handles both region detection and automatic locale redirection
 */ __turbopack_context__.s({
    "useRegionDetection": (()=>useRegionDetection),
    "useRegionDetectionWithRedirect": (()=>useRegionDetectionWithRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/regionDetection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/regions.js [app-ssr] (ecmascript)");
;
;
;
;
const useRegionDetectionWithRedirect = (options = {})=>{
    const { autoRedirect = false, skipFirstRedirect = true } = options;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("hongkong");
    const [regionConfig, setRegionConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasAutoRedirected, setHasAutoRedirected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current locale from pathname
    const currentLocale = pathname.startsWith("/zh-CN") ? "zh-CN" : "zh-TW";
    // Region to locale mapping
    const regionLocaleMap = {
        china: "zh-CN",
        hongkong: "zh-TW"
    };
    // Initialize region detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const initRegion = async ()=>{
            try {
                setIsLoading(true);
                console.log("🚀 Initializing enhanced region detection...");
                const detectedRegion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getUserRegion"])();
                const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionConfig"])(detectedRegion);
                setRegion(detectedRegion);
                setRegionConfig(config);
                setError(null);
                console.log("✅ Region initialized:", detectedRegion);
                // Auto-redirect to appropriate locale if enabled
                if (autoRedirect && !hasAutoRedirected && !skipFirstRedirect) {
                    const expectedLocale = regionLocaleMap[detectedRegion];
                    if (expectedLocale && expectedLocale !== currentLocale) {
                        console.log(`🔄 Auto-redirecting from ${currentLocale} to ${expectedLocale}`);
                        const newPathname = `/${pathname.split("/").slice(2).join("/")}`;
                        router.push(newPathname, {
                            locale: expectedLocale
                        });
                        setHasAutoRedirected(true);
                    }
                }
            } catch (err) {
                console.error("❌ Region detection failed:", err);
                setError(err.message);
                // Fallback to Hong Kong
                const fallbackConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionConfig"])("hongkong");
                setRegion("hongkong");
                setRegionConfig(fallbackConfig);
            } finally{
                setIsLoading(false);
            }
        };
        initRegion();
    }, [
        autoRedirect,
        hasAutoRedirected,
        skipFirstRedirect,
        currentLocale,
        pathname,
        router
    ]);
    // Method to manually change region (also changes locale)
    const changeRegion = (newRegion)=>{
        if ([
            "china",
            "hongkong"
        ].includes(newRegion)) {
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRegionConfig"])(newRegion);
            const targetLocale = regionLocaleMap[newRegion];
            setRegion(newRegion);
            setRegionConfig(config);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveRegionPreference"])(newRegion);
            console.log("🔄 Region changed to:", newRegion);
            // Redirect to appropriate locale
            if (targetLocale && targetLocale !== currentLocale) {
                const newPathname = `/${pathname.split("/").slice(2).join("/")}`;
                router.push(newPathname, {
                    locale: targetLocale
                });
            }
        }
    };
    // Method to format price for current region
    const formatPriceForRegion = (amount)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatPrice"])(amount, region);
    };
    // Method to get Stripe price ID for current region
    const getStripePriceId = (plan = "basic")=>{
        return regionConfig?.stripePriceIds?.[plan] || null;
    };
    return {
        // State
        region,
        regionConfig,
        isLoading,
        error,
        currentLocale,
        hasAutoRedirected,
        // Methods
        changeRegion,
        formatPriceForRegion,
        getStripePriceId,
        // Computed values
        currency: regionConfig?.currency || "HKD",
        symbol: regionConfig?.symbol || "HK$",
        locale: regionConfig?.locale || "zh-TW",
        flag: regionConfig?.flag || "🇭🇰"
    };
};
const useRegionDetection = ()=>{
    return useRegionDetectionWithRedirect({
        autoRedirect: false
    });
};
}}),
"[project]/src/components/RegionLanguageSelector.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RegionLanguageSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRegionDetectionEnhanced$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRegionDetectionEnhanced.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function RegionLanguageSelector({ className, navTextColor = "#fff" }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { region, changeRegion, isLoading, currentLocale: detectedLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRegionDetectionEnhanced$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRegionDetectionWithRedirect"])({
        autoRedirect: true,
        skipFirstRedirect: true
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Get current locale from pathname
    const currentLocale = pathname.startsWith("/zh-CN") ? "zh-CN" : "zh-TW";
    // Region configurations with language mapping
    const regions = [
        {
            key: "china",
            name: "中国大陆",
            flag: "🇨🇳",
            locale: "zh-CN",
            currency: "CNY",
            symbol: "¥",
            displayText: "🇨🇳 简体中文"
        },
        {
            key: "hongkong",
            name: "香港",
            flag: "🇭🇰",
            locale: "zh-TW",
            currency: "HKD",
            symbol: "HK$",
            displayText: "🇭🇰 繁體中文"
        }
    ];
    // Get current region config
    const currentRegionConfig = regions.find((r)=>r.key === region) || regions[1];
    // Get display text based on current state
    const getDisplayText = ()=>{
        if (!mounted) return "🌍 Loading...";
        if (isLoading) return "🌍 Detecting...";
        // Find region that matches current locale
        const matchingRegion = regions.find((r)=>r.locale === currentLocale);
        return matchingRegion ? matchingRegion.displayText : currentRegionConfig.displayText;
    };
    // Handle region change - this will change both language and pricing
    const handleRegionChange = (selectedRegion)=>{
        const regionConfig = regions.find((r)=>r.key === selectedRegion);
        if (!regionConfig) return;
        // Update region (for pricing)
        changeRegion(selectedRegion);
        // Update language (for locale) by navigating to new locale
        const newPathname = `/${pathname.split("/").slice(2).join("/")}`;
        // Use Next.js navigation to change locale
        router.push(newPathname, {
            locale: regionConfig.locale
        });
    };
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 opacity-50", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    color: navTextColor
                },
                children: "🌍 Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                lineNumber: 103,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/RegionLanguageSelector.jsx",
            lineNumber: 97,
            columnNumber: 4
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 hover:opacity-80", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: navTextColor
                    },
                    children: [
                        getDisplayText(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                            className: "w-4 h-4 ml-1 inline"
                        }, void 0, false, {
                            fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                            lineNumber: 119,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                    lineNumber: 117,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                lineNumber: 110,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-white rounded-lg shadow-lg p-1 min-w-[160px]",
                children: [
                    regions.map((regionConfig)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            className: "focus:bg-inherit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRegionChange(regionConfig.key),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-4 py-2 text-sm hover:text-primary rounded text-foreground flex items-center justify-between", region === regionConfig.key && currentLocale === regionConfig.locale ? "bg-green-50 text-green-600 font-medium" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: regionConfig.displayText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 139,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500 ml-2",
                                        children: regionConfig.symbol
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 140,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                lineNumber: 129,
                                columnNumber: 7
                            }, this)
                        }, regionConfig.key, false, {
                            fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                            lineNumber: 125,
                            columnNumber: 6
                        }, this)),
                    ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 my-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                lineNumber: 150,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Region: ",
                                            region
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 152,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Locale: ",
                                            currentLocale
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 153,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                lineNumber: 151,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                lineNumber: 123,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
        lineNumber: 109,
        columnNumber: 3
    }, this);
}
}}),
"[project]/src/app/hooks/useMobile.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
function useMobile() {
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 添加useEffect监听窗口大小
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.matchMedia('(max-width: 768px)').matches);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return ()=>{
            window.removeEventListener('resize', checkMobile);
        };
    }, []);
    return isMobile;
}
}}),
"[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator-root",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/UnlockButton.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ajax.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function __TURBOPACK__default__export__({ className }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Navigation");
    const [isLock, setIsLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const userId = session?.user?.userId;
        if (userId) {
            const loadData = async ()=>{
                const { status, message, data: userInfo } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["get"])(`/api/users/${userId}`);
                if (status == 0) {
                    setIsLock(userInfo.isLock);
                }
            };
            loadData();
        }
    }, [
        session?.user?.userId
    ]);
    const onClick = async ()=>{
        // 這裡可以用 prompt 或自訂 modal 讓用戶輸入尺數
        const input = window.prompt("請輸入家居尺數", quantity);
        const qty = Number(input) || 1;
        const { status, data, message } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["post"])(`/api/checkoutSessions`, {
            quantity: qty
        });
        if (status == 0) {
            const { url } = data;
            window.open(url, "_self");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(message);
        }
    };
    return isLock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer font-bold text-[#066952] rounded-[20px] bg-[#A7F7D3] md:px-4 px-1.5 py-1 mr-1 md:mr-6", className),
        style: {
            fontFamily: '"Noto Serif TC", serif'
        },
        children: t("unlock")
    }, void 0, false, {
        fileName: "[project]/src/components/UnlockButton.jsx",
        lineNumber: 50,
        columnNumber: 4
    }, this);
}
}}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Select": (()=>Select),
    "SelectContent": (()=>SelectContent),
    "SelectGroup": (()=>SelectGroup),
    "SelectItem": (()=>SelectItem),
    "SelectLabel": (()=>SelectLabel),
    "SelectScrollDownButton": (()=>SelectScrollDownButton),
    "SelectScrollUpButton": (()=>SelectScrollUpButton),
    "SelectSeparator": (()=>SelectSeparator),
    "SelectTrigger": (()=>SelectTrigger),
    "SelectValue": (()=>SelectValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this);
}
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[10000] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 3
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/select.tsx",
                        lineNumber: 120,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 119,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 118,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 123,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 110,
        columnNumber: 3
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 157,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 149,
        columnNumber: 3
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/src/components/ui/select.tsx",
            lineNumber: 175,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 167,
        columnNumber: 3
    }, this);
}
;
}}),
"[project]/src/components/MenuContent.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emitter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emitter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)"); // Add signOut import
// Remove this import: import { handleSignOut } from "../app/actions";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function MenuBar({ className, isOpen, setIsOpen, from }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.hero");
    const t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("toast");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])(); // Add router
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const isLogined = session?.user?.userId;
    const onLoginClick = async ()=>{
        setIsOpen(false);
        if (isLogined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(t2("loading"), {
                autoClose: 2000
            });
            try {
                // Use client-side signOut instead of server action
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signOut"])({
                    redirect: false
                });
                // Manually redirect after logout
                router.push("/auth/login");
                // Optional: Show success toast
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Logged out successfully", {
                    autoClose: 1000
                });
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Logout failed", {
                    autoClose: 2000
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseLeave: ()=>{
            setIsOpen(false);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("hidden-on-print absolute top-0 right-0 w-full md:w-80 md:shadow-lg bg-white z-20 transition-transform duration-300 ease-in-out", isOpen ? "translate-y-0" : "-translate-y-100"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center py-4.5 px-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#066952] text-xl font-bold",
                        children: "HarmoniQ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4 cursor-pointer",
                        onClick: ()=>setIsOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 67,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MenuContent.jsx",
                lineNumber: 63,
                columnNumber: 4
            }, this),
            from === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "cursor-pointer block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                onClick: onLoginClick,
                children: t("logout")
            }, void 0, false, {
                fileName: "[project]/src/components/MenuContent.jsx",
                lineNumber: 73,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/home",
                        children: t("home")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 81,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/price",
                        children: t("pricing")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 87,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/free",
                        children: t("cta")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 93,
                        columnNumber: 6
                    }, this),
                    isLogined && pathname.indexOf("/report") < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/report",
                        children: t("readReport")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 100,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full text-base border-none py-4 mt-1 data-[state=open]:mb-22 px-4 shadow-none data-[state=open]:bg-secondary data-[state=open]:text-primary",
                                children: t("locale")
                            }, void 0, false, {
                                fileName: "[project]/src/components/MenuContent.jsx",
                                lineNumber: 109,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                className: "border-none shadow-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: `/${pathname.split("/").slice(2).join("/")}`,
                                        locale: "zh-CN",
                                        className: `block px-4 py-2 text-sm  rounded ${pathname.startsWith("/zh-CN") ? "bg-[#13AB87] text-white" : "text-[#888]"}`,
                                        children: "简体中文"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuContent.jsx",
                                        lineNumber: 113,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: `/${pathname.split("/").slice(2).join("/")}`,
                                        locale: "zh-TW",
                                        className: `block px-4 py-2 text-sm  rounded ${pathname.startsWith("/zh-TW") ? "bg-[#13AB87] text-white" : "text-[#888]"}`,
                                        children: "繁體中文"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuContent.jsx",
                                        lineNumber: 120,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MenuContent.jsx",
                                lineNumber: 112,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 108,
                        columnNumber: 6
                    }, this),
                    pathname.indexOf("/login") < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/auth/login",
                        onClick: onLoginClick,
                        children: isLogined ? t("logout") : t("login")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 130,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MenuContent.jsx",
        lineNumber: 54,
        columnNumber: 3
    }, this);
}
}}),
"[project]/src/components/Avatar.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MenuContent.jsx [app-ssr] (ecmascript)");
;
;
;
;
function __TURBOPACK__default__export__({ from }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const onMenuClick = ()=>{
        setIsOpen(true);
    };
    // session?.user?.name 
    return session?.user?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 p-0.5 bg-[#6a84f8] rounded-full text-center cursor-pointer",
                onClick: onMenuClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white font-bold text-xl",
                    children: session?.user?.name.slice(0, 1).toUpperCase()
                }, void 0, false, {
                    fileName: "[project]/src/components/Avatar.jsx",
                    lineNumber: 16,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Avatar.jsx",
                lineNumber: 12,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuContent$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isOpen,
                setIsOpen: setIsOpen,
                from: from
            }, void 0, false, {
                fileName: "[project]/src/components/Avatar.jsx",
                lineNumber: 18,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Avatar.jsx",
        lineNumber: 11,
        columnNumber: 35
    }, this);
}
}}),
"[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageToggle$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageToggle.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RegionLanguageSelector.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useMobile.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnlockButton$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnlockButton.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function Navbar({ from, backgroundColor = "transparent" }) {
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Navigation");
    const t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.hero");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLogined = status === "authenticated" && session?.user?.userId;
    const isLoading = status === "loading";
    const isHome = pathname === "/home";
    const navTextColor = isHome ? "#fff" : "#000";
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth"
            });
        }
    };
    const navigateToSection = (sectionId)=>{
        // If we're on the home page, just scroll
        if (pathname === "/home") {
            scrollToSection(sectionId);
        } else {
            // If we're on another page, navigate to home page with hash
            router.push(`/home#${sectionId}`);
        }
    };
    // Handle scrolling when coming from another page with hash
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `absolute top-0 left-0 right-0 z-[70] h-16 ${!isHome ? "bg-white shadow-sm" : ""}`,
        style: {
            fontFamily: "Noto Serif TC, serif",
            backgroundColor: backgroundColor === "transparent" ? "transparent" : `#${backgroundColor.replace("#", "")}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    href: "/home",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: isHome ? "/images/logo/logo-white.png" : "/images/logo/logo-black.png",
                                            alt: "HarmoniQ Logo",
                                            width: 32,
                                            height: 32,
                                            className: "w-8 h-8 mx-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 78,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-2xl font-bold mr-15",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                color: navTextColor
                                            },
                                            children: "HarmoniQ"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 89,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 77,
                                    columnNumber: 7
                                }, this),
                                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-10 ml-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            href: "/home",
                                            className: "transition-colors hover:opacity-80",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                color: navTextColor
                                            },
                                            children: t("home")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 103,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            href: "/",
                                            className: "transition-colors hover:opacity-80",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                color: navTextColor
                                            },
                                            children: t("smartChat")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 113,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                            href: "/price",
                                            className: "transition-colors hover:opacity-80",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                color: navTextColor
                                            },
                                            children: t("pricing")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 133,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>navigateToSection("faq"),
                                            className: "transition-colors cursor-pointer hover:opacity-80",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                color: navTextColor
                                            },
                                            children: t("faq")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 143,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 102,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 76,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center md:space-x-6",
                            children: [
                                isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "p-2 rounded-md hover:bg-gray-100 mr-2",
                                    style: {
                                        color: navTextColor
                                    },
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 174,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 168,
                                        columnNumber: 10
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M4 6h16M4 12h16M4 18h16"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.jsx",
                                            lineNumber: 188,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 182,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 160,
                                    columnNumber: 8
                                }, this),
                                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        navTextColor: navTextColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.jsx",
                                        lineNumber: 201,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 200,
                                    columnNumber: 8
                                }, this),
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-2 rounded-full border-t-transparent animate-spin",
                                    style: {
                                        borderColor: navTextColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 207,
                                    columnNumber: 8
                                }, this) : isLogined && from !== "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 212,
                                    columnNumber: 8
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                    className: "block text-base focus:text-primary",
                                    href: "/auth/login",
                                    style: {
                                        fontFamily: "Noto Serif TC, serif",
                                        color: navTextColor
                                    },
                                    children: t2("login")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 214,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 157,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 75,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 74,
                columnNumber: 4
            }, this),
            isMobile && isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-[80]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/home",
                            className: "block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded transition-colors",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            style: {
                                fontFamily: "Noto Serif TC, serif"
                            },
                            children: t("home")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 233,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/",
                            className: "block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded transition-colors",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            style: {
                                fontFamily: "Noto Serif TC, serif"
                            },
                            children: t("smartChat")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 241,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/price",
                            className: "block py-2 px-4 text-gray-800 hover:bg-gray-100 rounded transition-colors",
                            onClick: ()=>setIsMobileMenuOpen(false),
                            style: {
                                fontFamily: "Noto Serif TC, serif"
                            },
                            children: t("pricing")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 249,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                navigateToSection("faq");
                                setIsMobileMenuOpen(false);
                            },
                            className: "block w-full text-left py-2 px-4 text-gray-800 hover:bg-gray-100 rounded transition-colors",
                            style: {
                                fontFamily: "Noto Serif TC, serif"
                            },
                            children: t("faq")
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 257,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-2 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                navTextColor: "#000"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 268,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 267,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 232,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 231,
                columnNumber: 5
            }, this),
            isMobile && isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-25 z-[75]",
                onClick: ()=>setIsMobileMenuOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 276,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.jsx",
        lineNumber: 62,
        columnNumber: 3
    }, this);
}
}}),
"[project]/src/app/[locale]/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BirthdayModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BirthdayModal.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function Home() {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSession"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const currentLocale = pathname?.split("/")[1] || "zh-TW"; // Extract locale from URL
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [inputMessage, setInputMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionId, setSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Modal 相關狀態
    const [showBirthdayModal, setShowBirthdayModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [needsBirthdayInfo, setNeedsBirthdayInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [concern, setConcern] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isCoupleAnalysis, setIsCoupleAnalysis] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [reportType, setReportType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [originalUserQuestion, setOriginalUserQuestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // Track original question
    const [latestSpecificProblem, setLatestSpecificProblem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""); // Track the most recent specific problem
    const [conversationHistory, setConversationHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentUserId, setCurrentUserId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoadingHistory, setIsLoadingHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isInitialized, setIsInitialized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showLandingPage, setShowLandingPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 打字機效果狀態
    const [isTyping, setIsTyping] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [typingMessageIndex, setTypingMessageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(-1);
    const [displayedContent, setDisplayedContent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingDuration, setLoadingDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(15); // 動態載入時間
    const typingIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Keep page position when component mounts - only scroll to top on visibility change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Function to scroll to top
        const scrollToTop = ()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };
        // Only scroll to top when user comes back to the page (e.g., browser back button)
        // Remove automatic scroll on mount to preserve navbar visibility
        const handleVisibilityChange = ()=>{
            if (!document.hidden) {
                scrollToTop();
            }
        };
        // Add event listener for visibility change
        document.addEventListener("visibilitychange", handleVisibilityChange);
        // Cleanup
        return ()=>{
            document.removeEventListener("visibilitychange", handleVisibilityChange);
        };
    }, []);
    // Ensure proper page position on initial load - show navbar and chatbox
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Small delay to ensure DOM is fully rendered
        const timer = setTimeout(()=>{
            // Ensure we can see both navbar and content
            window.scrollTo({
                top: 0,
                behavior: "auto"
            });
        }, 100);
        return ()=>clearTimeout(timer);
    }, [
        showLandingPage
    ]);
    // 客戶端初始化 - 添加防重複初始化邏輯
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 防止重複初始化
        if (isInitialized) {
            console.log("⏭️ Smart-Chat2 已初始化，跳過重複初始化");
            return;
        }
        setIsClient(true);
        // 使用session中的email作為用戶ID，fallback到本地存儲的ID
        let userId;
        let shouldTransferConversations = false;
        let oldAnonymousId = null;
        if (session?.user?.email) {
            userId = session.user.email;
            // 檢查是否有舊的匿名ID需要轉移
            const storedAnonymousId = localStorage.getItem("feng-shui-user-id");
            if (storedAnonymousId && storedAnonymousId.startsWith("user-") && storedAnonymousId !== userId) {
                shouldTransferConversations = true;
                oldAnonymousId = storedAnonymousId;
                console.log("🔄 檢測到需要轉移對話記錄:", oldAnonymousId, "→", userId);
            }
        } else {
            const storedUserId = localStorage.getItem("feng-shui-user-id");
            if (!storedUserId) {
                userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
                localStorage.setItem("feng-shui-user-id", userId);
            } else {
                userId = storedUserId;
            }
        }
        // 如果用戶ID沒有變化，不需要重新初始化
        if (currentUserId === userId && messages.length > 1) {
            console.log("👤 用戶未變化，跳過重新初始化");
            return;
        }
        console.log("🔄 初始化 Smart-Chat2，用戶:", userId);
        setCurrentUserId(userId);
        const newSessionId = `smart-chat2-${Date.now()}`;
        setSessionId(newSessionId);
        // 初始狀態顯示落地頁，不設置歡迎消息
        setMessages([]);
        setShowLandingPage(true);
        // 如果需要轉移對話，先執行轉移再加載歷史
        if (shouldTransferConversations && oldAnonymousId) {
            transferAnonymousConversations(oldAnonymousId, userId).then(()=>{
                // 轉移完成後更新localStorage並加載對話歷史
                localStorage.setItem("feng-shui-user-id", userId);
                loadConversationHistory(userId);
            });
        } else {
            // 正常加載對話歷史
            loadConversationHistory(userId);
        }
        setIsInitialized(true);
    }, [
        session?.user?.email,
        isInitialized,
        currentUserId,
        messages.length
    ]); // 只在用戶email變化時重新初始化，而不是整個session對象
    // Auto-scroll to bottom only for new user messages or completed AI responses
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0 && !isTyping) {
            // Only scroll if the last message is complete (not during typing animation)
            const timer = setTimeout(()=>{
                messagesEndRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "end"
                });
            }, 100); // Small delay to ensure content is rendered
            return ()=>clearTimeout(timer);
        }
    }, [
        messages.length,
        isTyping
    ]); // Remove displayedContent dependency to avoid constant scrolling
    // 檢測新的助手消息並觸發打字機效果
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (messages.length > 0) {
            const lastMessage = messages[messages.length - 1];
            if (lastMessage.role === "assistant" && lastMessage.content === "" && !isTyping) {
                console.log("🔍 檢測到空的助手消息，準備觸發打字機效果");
                // 從sessionStorage獲取待顯示的內容
                const pendingContent = sessionStorage.getItem("pending_typewriter_content");
                if (pendingContent) {
                    console.log("📝 找到待顯示內容，啟動打字機:", pendingContent.substring(0, 50) + "...");
                    setTimeout(()=>{
                        startTypewriterEffect(messages.length - 1, pendingContent);
                        sessionStorage.removeItem("pending_typewriter_content");
                    }, 100);
                }
            }
        }
    }, [
        messages,
        isTyping
    ]);
    // 打字機效果函數
    const startTypewriterEffect = (messageIndex, fullContent)=>{
        console.log("⚡ 開始打字機效果，索引:", messageIndex, "內容長度:", fullContent.length);
        setIsTyping(true);
        setTypingMessageIndex(messageIndex);
        setDisplayedContent("");
        const words = fullContent.split("");
        let currentIndex = 0;
        const typeNextCharacter = ()=>{
            if (currentIndex < words.length) {
                const currentContent = words.slice(0, currentIndex + 1).join("");
                setDisplayedContent(currentContent);
                // 更新消息數組中的實際內容
                setMessages((prev)=>{
                    const updated = [
                        ...prev
                    ];
                    if (updated[messageIndex]) {
                        updated[messageIndex].content = currentContent;
                    }
                    return updated;
                });
                currentIndex++;
                typingIntervalRef.current = setTimeout(typeNextCharacter, 30); // 30ms per character
            } else {
                // 完成打字效果
                setIsTyping(false);
                setTypingMessageIndex(-1);
                setDisplayedContent("");
                // 確保最終內容完整
                setMessages((prev)=>{
                    const updated = [
                        ...prev
                    ];
                    if (updated[messageIndex]) {
                        updated[messageIndex].content = fullContent;
                    }
                    return updated;
                });
            }
        };
        typeNextCharacter();
    };
    // 清理打字機效果
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (typingIntervalRef.current) {
                clearTimeout(typingIntervalRef.current);
            }
        };
    }, []);
    // 根據問題長度計算載入時間
    const calculateLoadingDuration = (message)=>{
        const length = message.length;
        if (length <= 10) {
            return 21; // 短問題 21秒
        } else if (length <= 30) {
            return 30; // 中等問題 30秒
        } else {
            return 35; // 長問題 35秒
        }
    };
    const handleSendMessage = async ()=>{
        if (!inputMessage.trim() || isLoading) return;
        // 隱藏落地頁，顯示正常聊天界面
        if (showLandingPage) {
            setShowLandingPage(false);
        }
        // 🔥 Special handling for couple analysis report selection
        console.log("🔍 Before checking couple analysis - isCoupleAnalysis:", isCoupleAnalysis, "inputMessage:", inputMessage.trim());
        if (isCoupleAnalysis && inputMessage.trim() === "1") {
            console.log("🎯 Couple analysis option 1 selected - redirecting directly to couple payment");
            const userMessage = {
                role: "user",
                content: inputMessage.trim(),
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    userMessage
                ]);
            setInputMessage("");
            // Add response message about payment
            const responseMessage = {
                role: "assistant",
                content: "太好了！正在為您處理情侶合盤分析付款...",
                timestamp: new Date()
            };
            setMessages((prev)=>[
                    ...prev,
                    responseMessage
                ]);
            // 優先使用最新的具體問題，然後是原始問題，最後是 concern
            const problemToUse = latestSpecificProblem || originalUserQuestion || concern || "感情關係和諧改善建議";
            // Call couple payment API directly
            try {
                setIsLoading(true);
                const paymentResponse = await fetch("/api/payment-couple", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        locale: currentLocale,
                        specificProblem: problemToUse,
                        concern: concern,
                        fromChat: true,
                        sessionId: sessionId
                    })
                });
                if (paymentResponse.ok) {
                    const paymentData = await paymentResponse.json();
                    console.log("💳 Couple Payment Response:", paymentData);
                    if (paymentData.sessionId) {
                        // Import Stripe and redirect to checkout
                        const stripePublicKey = ("TURBOPACK compile-time value", "pk_test_51RTB0lECl1ZAgMvGTBBmWjK7BWeZBVkBEVVvUj4P14T67Z0WTHI9y0k6ZUDZQtOnQbBhd0B21CaXML5b5q4dN7q800qwxStuQU");
                        if ("TURBOPACK compile-time falsy", 0) {
                            "TURBOPACK unreachable";
                        }
                        const stripe = await __turbopack_context__.r("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((mod)=>mod.loadStripe(stripePublicKey));
                        if (stripe) {
                            console.log("🚀 Redirecting to Stripe checkout for couple payment");
                            await stripe.redirectToCheckout({
                                sessionId: paymentData.sessionId
                            });
                        } else {
                            throw new Error("Failed to load Stripe");
                        }
                    } else {
                        throw new Error("No session ID received from couple payment");
                    }
                } else {
                    throw new Error(`Payment API error: ${paymentResponse.status}`);
                }
            } catch (error) {
                console.error("💳 Couple payment error:", error);
                setIsLoading(false);
                // Show error message
                const errorMessage = {
                    role: "assistant",
                    content: "抱歉，付款處理時發生錯誤，請稍後再試。",
                    timestamp: new Date()
                };
                setMessages((prev)=>[
                        ...prev,
                        errorMessage
                    ]);
            }
            return;
        }
        const userMessage = {
            role: "user",
            content: inputMessage.trim(),
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputMessage("");
        // 根據問題長度設定載入時間
        const duration = calculateLoadingDuration(userMessage.content);
        console.log(`🕒 Question: "${userMessage.content}" (${userMessage.content.length} chars) → Duration: ${duration}s`);
        setLoadingDuration(duration);
        setIsLoading(true);
        try {
            const response = await fetch("/api/smart-chat2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: userMessage.content,
                    sessionId: sessionId,
                    userId: currentUserId
                })
            });
            const data = await response.json();
            console.log("🔍 完整 API 回應:", data);
            console.log("🔍 data.specificProblem:", data.specificProblem);
            console.log("🔍 data.concern:", data.concern);
            if (response.ok) {
                const assistantMessage = {
                    role: "assistant",
                    content: data.response,
                    timestamp: new Date(),
                    aiAnalysis: data.aiAnalysis,
                    systemType: data.systemType
                };
                // 儲存內容到sessionStorage供useEffect使用
                sessionStorage.setItem("pending_typewriter_content", assistantMessage.content);
                // 添加空內容的消息先顯示，然後觸發打字機效果
                const emptyAssistantMessage = {
                    ...assistantMessage,
                    content: ""
                };
                console.log("🎬 準備添加空消息並觸發打字機效果");
                console.log("📝 打字機內容長度:", assistantMessage.content.length);
                setMessages((prev)=>[
                        ...prev,
                        emptyAssistantMessage
                    ]);
                // 注意：移除不必要的對話歷史重新載入，這會造成過多的API呼叫
                // 只有在創建新對話時才需要更新歷史列表
                // Payment 觸發邏輯 - Check for couple analysis from API response
                console.log("🔍 檢查 Payment 觸發條件:", data.needsBirthdayInfo, data.shouldTriggerModal, "isCoupleAnalysis:", data.isCoupleAnalysis);
                // 🎯 Set couple analysis flag if couple birthdays detected
                if (data.hasCouplesBirthdays || data.isCoupleAnalysis) {
                    console.log("🎯 Setting couple analysis to true due to couple birthdays detected");
                    setIsCoupleAnalysis(true);
                }
                if (data.needsBirthdayInfo || data.shouldTriggerModal) {
                    setNeedsBirthdayInfo(true);
                    setConcern(data.concern || "");
                    setReportType(data.reportType || "");
                    // 🔥 保存原始用戶問題 - 每次都更新最新的具體問題
                    console.log("🔔 檢查 API 回應中的 specificProblem:", data.specificProblem);
                    let problemToUse = "";
                    if (data.specificProblem) {
                        setLatestSpecificProblem(data.specificProblem);
                        console.log("💾 更新最新具體問題:", data.specificProblem);
                        // 只在第一次時設置原始問題
                        if (!originalUserQuestion) {
                            setOriginalUserQuestion(data.specificProblem);
                            console.log("📝 設置原始問題:", data.specificProblem);
                        }
                        problemToUse = data.specificProblem;
                    }
                    // 🚀 直接觸發付款，跳過價格頁面
                    console.log("💳 直接觸發付款 - concern:", data.concern, "problem:", problemToUse);
                    // 🔥 檢查付款類型，決定使用哪個 API
                    console.log("💳 檢查付款類型 - paymentType:", data.paymentType, "concern:", data.concern, "problem:", problemToUse);
                    // 決定使用哪個付款 API
                    const useComprehensivePayment = data.paymentType === "comprehensive";
                    const usePremiumPayment = data.paymentType === "premium";
                    let paymentEndpoint;
                    if (useComprehensivePayment) {
                        paymentEndpoint = "/api/checkoutSessions/payment4"; // Expert88 ($88)
                    } else if (usePremiumPayment) {
                        paymentEndpoint = "/api/checkoutSessions/payment2"; // Premium ($188)
                    } else {
                        paymentEndpoint = "/api/payment-fortune"; // Fortune ($38)
                    }
                    console.log(`💳 使用付款端點: ${paymentEndpoint} (comprehensive: ${useComprehensivePayment}, premium: ${usePremiumPayment})`);
                    // 直接觸發付款 API
                    try {
                        setIsLoading(true);
                        let paymentResponse;
                        if (useComprehensivePayment || usePremiumPayment) {
                            // Get fresh locale for comprehensive/premium payments too
                            const storedRegion = localStorage.getItem("userRegion");
                            const regionToLocaleMap = {
                                china: "zh-CN",
                                hongkong: "zh-TW",
                                taiwan: "zh-TW"
                            };
                            const freshLocale = regionToLocaleMap[storedRegion || "hongkong"] || currentLocale;
                            console.log(`💰 Main page ${useComprehensivePayment ? "comprehensive" : "premium"} payment - Using fresh locale:`, freshLocale, "from stored region:", storedRegion);
                            // 使用 Stripe Checkout Session APIs (payment4 或 payment2)
                            paymentResponse = await fetch(paymentEndpoint, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    quantity: 1,
                                    directPayment: true,
                                    locale: freshLocale
                                })
                            });
                        } else {
                            // 將 concern 從中文轉換為英文以符合 FortuneDataModal 期望
                            const concernMapping = {
                                財運: "financial",
                                健康: "health",
                                事業: "career",
                                工作: "career",
                                感情: "love"
                            };
                            const englishConcern = concernMapping[data.concern] || "financial";
                            // Get fresh locale from localStorage to ensure consistency
                            const storedRegion = localStorage.getItem("userRegion");
                            const regionToLocaleMap = {
                                china: "zh-CN",
                                hongkong: "zh-TW",
                                taiwan: "zh-TW"
                            };
                            const freshLocale = regionToLocaleMap[storedRegion || "hongkong"] || currentLocale;
                            console.log("💰 Main page individual payment - Using fresh locale:", freshLocale, "from stored region:", storedRegion);
                            // 使用原本的 fortune payment API
                            paymentResponse = await fetch(paymentEndpoint, {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    concern: englishConcern,
                                    specificProblem: problemToUse,
                                    fromChat: true,
                                    locale: freshLocale
                                })
                            });
                        }
                        if (paymentResponse.ok) {
                            const paymentData = await paymentResponse.json();
                            console.log(`💳 ${useComprehensivePayment ? "Expert88 ($88)" : usePremiumPayment ? "Premium ($188)" : "Fortune ($38)"} Payment Response:`, paymentData);
                            if (useComprehensivePayment || usePremiumPayment) {
                                // 處理 Expert88/Premium 回應 - 直接重定向到 Stripe URL
                                if (paymentData.data?.url) {
                                    window.location.href = paymentData.data.url;
                                } else {
                                    throw new Error(`No checkout URL received from ${usePremiumPayment ? "Premium" : "Expert88"} payment`);
                                }
                            } else {
                                // 處理 Fortune payment 回應 - 使用 Stripe.js
                                if (paymentData.sessionId) {
                                    // Import Stripe and redirect to checkout
                                    const stripePublicKey = ("TURBOPACK compile-time value", "pk_test_51RTB0lECl1ZAgMvGTBBmWjK7BWeZBVkBEVVvUj4P14T67Z0WTHI9y0k6ZUDZQtOnQbBhd0B21CaXML5b5q4dN7q800qwxStuQU");
                                    if ("TURBOPACK compile-time falsy", 0) {
                                        "TURBOPACK unreachable";
                                    }
                                    const stripe = await __turbopack_context__.r("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-ssr] (ecmascript, async loader)")(__turbopack_context__.i).then((mod)=>mod.loadStripe(stripePublicKey));
                                    if (stripe) {
                                        await stripe.redirectToCheckout({
                                            sessionId: paymentData.sessionId
                                        });
                                    } else {
                                        throw new Error("Failed to load Stripe");
                                    }
                                } else {
                                    throw new Error("No session ID received from Fortune payment");
                                }
                            }
                        } else {
                            const errorData = await paymentResponse.json();
                            throw new Error(errorData.error || "Payment error");
                        }
                    } catch (paymentError) {
                        console.error(`💳 ${useComprehensivePayment ? "Comprehensive ($88)" : usePremiumPayment ? "Premium ($188)" : "Fortune ($38)"} payment error:`, paymentError);
                        setIsLoading(false);
                        // Show error message to user
                        setMessages((prev)=>[
                                ...prev,
                                {
                                    role: "assistant",
                                    content: "抱歉，付款過程中出現錯誤。請稍後再試。",
                                    timestamp: new Date(),
                                    isError: true
                                }
                            ]);
                    }
                }
            } else {
                throw new Error(data.error || "請求失敗");
            }
        } catch (error) {
            console.error("發送訊息失敗:", error);
            const errorMessage = {
                role: "assistant",
                content: "抱歉，發送訊息時出現錯誤。請稍後再試。",
                timestamp: new Date(),
                isError: true
            };
            setMessages((prev)=>[
                    ...prev,
                    errorMessage
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    const handleKeyPress = (e)=>{
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };
    // 處理快捷標籤點擊
    const handleShortcutClick = (shortcutText)=>{
        setInputMessage(shortcutText);
        // 自動聚焦到輸入框
        setTimeout(()=>{
            const textarea = document.querySelector("textarea");
            if (textarea) {
                textarea.focus();
            }
        }, 100);
    };
    // 生日表單提交處理
    const handleBirthdaySubmit = async (birthdayData)=>{
        setShowBirthdayModal(false);
        setIsLoading(true);
        console.log("🔥 Birthday submit received:", birthdayData);
        // For couple analysis, generate URL and redirect directly (payment already completed)
        if (birthdayData.isCoupleAnalysis || isCoupleAnalysis) {
            console.log("📊 Couple analysis detected, generating report URL...");
            // 優先使用最新的具體問題，然後是原始問題，最後是 concern
            const problemToUse = latestSpecificProblem || originalUserQuestion || concern || "感情關係和諧改善建議";
            console.log("🔍 DEBUG - URL生成時的狀態檢查:");
            console.log("   latestSpecificProblem:", latestSpecificProblem);
            console.log("   originalUserQuestion:", originalUserQuestion);
            console.log("   concern:", concern);
            console.log("   problemToUse:", problemToUse);
            const reportUrl = `/couple-report?` + `birthday=${encodeURIComponent(birthdayData.userBirthday)}&` + `birthday2=${encodeURIComponent(birthdayData.partnerBirthday)}&` + `gender=${encodeURIComponent(birthdayData.userGender)}&` + `gender2=${encodeURIComponent(birthdayData.partnerGender)}&` + `concern=${encodeURIComponent(concern)}&` + `originalProblem=${encodeURIComponent(problemToUse)}&` + `reportType=${encodeURIComponent(reportType)}`;
            console.log("🚀 Opening couple report:", reportUrl);
            window.open(reportUrl, "_blank");
            setIsLoading(false);
            return;
        }
        // For individual analysis, continue with API call
        try {
            const response = await fetch("/api/smart-chat2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userBirthday: birthdayData.birthday,
                    gender: birthdayData.gender,
                    partnerBirthday: birthdayData.partnerBirthday,
                    partnerGender: birthdayData.partnerGender,
                    concern: concern,
                    isCoupleAnalysis: isCoupleAnalysis || birthdayData.isCoupleAnalysis,
                    reportType: reportType,
                    messageType: "birthday_submission",
                    sessionId: sessionId,
                    userId: currentUserId
                })
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const assistantMessage = {
                role: "assistant",
                content: data.response || data.message,
                timestamp: new Date(),
                aiAnalysis: data.aiAnalysis,
                systemType: data.systemType
            };
            setMessages((prev)=>[
                    ...prev,
                    assistantMessage
                ]);
            // 注意：移除不必要的對話歷史重新載入，減少API呼叫
            // 對話歷史會在頁面初始化時載入，之後不需要重複載入
            // Open report in new window if URL is provided
            if (data.reportUrl) {
                console.log("Opening report:", data.reportUrl);
                window.open(data.reportUrl, "_blank");
            }
        } catch (error) {
            console.error("生日提交錯誤:", error);
            setMessages((prev)=>[
                    ...prev,
                    {
                        role: "assistant",
                        content: "抱歉，處理生日資料時發生錯誤。請稍後再試。",
                        timestamp: new Date()
                    }
                ]);
        } finally{
            setIsLoading(false);
        }
    };
    // 加載對話歷史
    const loadConversationHistory = async (userId)=>{
        try {
            setIsLoadingHistory(true);
            // 如果userId看起來像email，使用userEmail參數，否則使用userId參數
            const isEmail = userId.includes("@");
            const queryParam = isEmail ? `userEmail=${encodeURIComponent(userId)}` : `userId=${encodeURIComponent(userId)}`;
            const response = await fetch(`/api/conversation-history?${queryParam}`);
            if (response.ok) {
                const data = await response.json();
                setConversationHistory(data.conversations || []);
            } else {
                console.error("加載對話歷史失敗:", response.statusText);
            }
        } catch (error) {
            console.error("加載對話歷史錯誤:", error);
        } finally{
            setIsLoadingHistory(false);
        }
    };
    // 轉移匿名對話記錄到註冊用戶
    const transferAnonymousConversations = async (oldAnonymousId, newUserEmail)=>{
        try {
            console.log("🔄 開始轉移對話記錄:", oldAnonymousId, "→", newUserEmail);
            // 🔒 檢查是否已設置轉移完成標記，避免重複轉移
            const transferKey = `transfer-completed-${oldAnonymousId}-${newUserEmail}`;
            if (localStorage.getItem(transferKey)) {
                console.log("⚠️ 對話記錄已轉移過，跳過重複轉移");
                return;
            }
            const response = await fetch("/api/transfer-conversations", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    oldUserId: oldAnonymousId,
                    newUserId: newUserEmail
                })
            });
            if (response.ok) {
                const data = await response.json();
                console.log("✅ 對話記錄轉移成功:", data.transferredCount, "個對話");
                // 🔒 設置轉移完成標記，防止重複轉移
                localStorage.setItem(transferKey, "completed");
            } else {
                console.error("❌ 對話記錄轉移失敗:", response.statusText);
            }
        } catch (error) {
            console.error("❌ 轉移對話記錄時發生錯誤:", error);
        }
    };
    // 加載特定對話
    const loadSpecificConversation = async (conversationId)=>{
        try {
            setIsLoading(true);
            const response = await fetch(`/api/load-conversation?conversationId=${encodeURIComponent(conversationId)}`);
            if (response.ok) {
                const data = await response.json();
                // 設置對話訊息 - 修正數據格式轉換
                if (data.conversation && Array.isArray(data.conversation) && data.conversation.length > 0) {
                    // 轉換消息格式以匹配前端期望的格式
                    const formattedMessages = data.conversation.map((msg, index)=>({
                            role: msg.role,
                            content: msg.content || "",
                            timestamp: new Date(msg.timestamp),
                            aiAnalysis: msg.aiAnalysis || null,
                            systemType: msg.systemType || "smart-chat2",
                            id: msg.id || `loaded-${index}`
                        }));
                    // 添加初始歡迎消息（如果還沒有）
                    const hasWelcomeMessage = formattedMessages.some((msg)=>msg.role === "assistant" && msg.content.includes("歡迎來到智能風水顧問"));
                    if (!hasWelcomeMessage) {
                        formattedMessages.unshift({
                            role: "assistant",
                            content: "你好呀～我是風鈴！✨ 歡迎回到智能風水顧問 Smart-Chat2 (AI版)！\n\n繼續您之前的對話...",
                            timestamp: new Date(data.metadata?.createdAt || Date.now()),
                            aiAnalysis: null,
                            systemType: "smart-chat2"
                        });
                    }
                    setMessages(formattedMessages);
                    setShowLandingPage(false); // 載入對話時隱藏落地頁
                } else {
                    // 如果沒有消息，設置默認歡迎消息
                    setMessages([
                        {
                            role: "assistant",
                            content: "你好呀～我是風鈴！✨ 歡迎來到智能風水顧問 Smart-Chat2 (AI版)！\n\n這是您之前的對話，請繼續...",
                            timestamp: new Date(),
                            aiAnalysis: null,
                            systemType: "smart-chat2"
                        }
                    ]);
                    setShowLandingPage(false); // 載入對話時隱藏落地頁
                }
                // 設置對話相關狀態
                if (data.metadata) {
                    const metadata = data.metadata;
                    setSessionId(metadata.sessionId || `smart-chat2-${Date.now()}`);
                    setConcern(metadata.primaryConcern || "");
                    setIsCoupleAnalysis(metadata.userData?.relationshipType === "couple" || false);
                    setReportType("");
                }
                console.log("對話加載成功:", data.metadata?.title || conversationId);
            } else {
                console.error("加載對話失敗:", response.statusText);
                // 加載失敗時顯示錯誤消息
                setMessages([
                    {
                        role: "assistant",
                        content: "抱歉，無法加載該對話記錄。請嘗試創建新對話。",
                        timestamp: new Date(),
                        isError: true
                    }
                ]);
            }
        } catch (error) {
            console.error("加載對話錯誤:", error);
            setMessages([
                {
                    role: "assistant",
                    content: "載入對話時發生錯誤，請稍後再試。",
                    timestamp: new Date(),
                    isError: true
                }
            ]);
        } finally{
            setIsLoading(false);
        }
    };
    // 創建新對話
    const createNewConversation = ()=>{
        setMessages([]);
        setInputMessage("");
        setConcern("");
        setIsCoupleAnalysis(false);
        setReportType("");
        setSessionId(`smart-chat2-${Date.now()}`);
        setShowLandingPage(true);
        // Close mobile menu after creating new conversation
        setIsMobileMenuOpen(false);
    };
    // Helper function to close mobile menu when navigating
    const handleMobileNavigation = ()=>{
        // Add a small delay for visual feedback
        setTimeout(()=>{
            setIsMobileMenuOpen(false);
        }, 150);
    };
    // 格式化時間顯示
    const formatConversationTime = (timestamp)=>{
        if (!timestamp) return "";
        const date = new Date(timestamp);
        const now = new Date();
        const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
        if (diffInHours < 24) {
            return date.toLocaleTimeString("zh-TW", {
                hour: "2-digit",
                minute: "2-digit"
            });
        } else if (diffInHours < 24 * 7) {
            const days = Math.floor(diffInHours / 24);
            return `${days}天前`;
        } else {
            return date.toLocaleDateString("zh-TW", {
                month: "short",
                day: "numeric"
            });
        }
    };
    const getTopicBadgeColor = (topic)=>{
        const colors = {
            感情: "bg-pink-100 text-pink-800",
            財運: "bg-yellow-100 text-yellow-800",
            工作: "bg-blue-100 text-blue-800",
            健康: "bg-green-100 text-green-800",
            人際關係: "bg-purple-100 text-purple-800",
            子女: "bg-orange-100 text-orange-800",
            因緣: "bg-indigo-100 text-indigo-800",
            其他: "bg-gray-100 text-gray-800"
        };
        return colors[topic] || colors["其他"];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "jsx-40de4423be5fb871" + " " + "bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                from: "smart-chat",
                backgroundColor: "EFEFEF"
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 1130,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-40de4423be5fb871" + " " + "relative flex h-[calc(100vh-4rem)] mt-16 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                        className: "jsx-40de4423be5fb871" + " " + "fixed z-50 p-2 bg-white rounded-lg shadow-lg md:hidden top-20 left-2",
                        children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-5 h-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/page.tsx",
                            lineNumber: 1138,
                            columnNumber: 7
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                            className: "w-5 h-5 text-gray-600"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/page.tsx",
                            lineNumber: 1140,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 1133,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-40de4423be5fb871" + " " + `
					${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
					md:translate-x-0 transition-transform duration-300 ease-in-out
					fixed md:relative z-40 w-72 sm:w-80 md:w-80 bg-[#EFEFEF] flex flex-col h-full
				`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                onClick: createNewConversation,
                                className: "jsx-40de4423be5fb871" + " " + "bg-[#E0E0E0] rounded-lg m-4 p-4 cursor-pointer hover:bg-[#d0d0d0] transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-40de4423be5fb871" + " " + "flex items-center space-x-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/風水妹/風水妹2.png",
                                            alt: "風鈴",
                                            onError: (e)=>{
                                                e.target.style.display = "none";
                                            },
                                            className: "jsx-40de4423be5fb871" + " " + "w-10 h-10 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-40de4423be5fb871" + " " + "font-medium text-gray-800",
                                                children: "建立新的對話"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1169,
                                                columnNumber: 9
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1168,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "text-xl text-gray-800",
                                            children: "+"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1173,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                    lineNumber: 1157,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 1153,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40de4423be5fb871" + " " + "bg-[#E0E0E0] rounded-lg mx-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40de4423be5fb871" + " " + "p-4 border-b border-[#d0d0d0]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-between font-medium text-gray-800",
                                            children: [
                                                "歷史對話",
                                                isLoadingHistory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40de4423be5fb871" + " " + "w-4 h-4 border-b-2 border-gray-800 rounded-full animate-spin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1183,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1180,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1179,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40de4423be5fb871" + " " + "p-2 overflow-y-auto max-h-48",
                                        children: conversationHistory.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "p-3 text-sm text-center text-gray-600",
                                            children: isLoadingHistory ? "載入中..." : "尚無歷史對話"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 9
                                        }, this) : conversationHistory.map((conversation)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    loadSpecificConversation(conversation.conversationId);
                                                    handleMobileNavigation();
                                                },
                                                className: "jsx-40de4423be5fb871" + " " + "p-3 hover:bg-[#d0d0d0] rounded cursor-pointer transition-colors mb-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "text-sm font-medium text-gray-800 truncate",
                                                        children: conversation.title || "未命名對話"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1206,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-between mt-1 text-xs text-gray-600",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-40de4423be5fb871",
                                                                children: formatConversationTime(conversation.lastUpdated)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1210,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-40de4423be5fb871" + " " + "bg-[#d0d0d0] text-gray-800 px-2 py-0.5 rounded-full text-xs",
                                                                children: conversation.messageCount || 0
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1215,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1209,
                                                        columnNumber: 11
                                                    }, this),
                                                    conversation.topics && conversation.topics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "flex flex-wrap gap-1 mt-2",
                                                        children: [
                                                            conversation.topics.slice(0, 2).map((topic, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-40de4423be5fb871" + " " + "text-xs bg-[#c0c0c0] text-gray-800 px-2 py-0.5 rounded",
                                                                    children: topic
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1225,
                                                                    columnNumber: 16
                                                                }, this)),
                                                            conversation.topics.length > 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "jsx-40de4423be5fb871" + " " + "text-xs text-gray-600",
                                                                children: [
                                                                    "+",
                                                                    conversation.topics.length - 2
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1234,
                                                                columnNumber: 15
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 13
                                                    }, this)
                                                ]
                                            }, conversation.conversationId, true, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 10
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1187,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 1178,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40de4423be5fb871" + " " + "px-4 mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-40de4423be5fb871" + " " + "p-2 transition-colors ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-between",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-40de4423be5fb871" + " " + "text-lg text-[#606060] font-bold",
                                                    children: "付費報告預覽"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1253,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "jsx-40de4423be5fb871" + " " + "text-xl",
                                                    children: "👇"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1256,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1252,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1251,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                    lineNumber: 1250,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 1249,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-40de4423be5fb871" + " " + "flex-1 px-4 pb-4 space-y-3 overflow-y-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=fengshui",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/house.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1266,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1265,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=life",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/life.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1280,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1279,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=relationship",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/relationship.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1294,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1293,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=career",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/career.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1308,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1307,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=wealth",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/wealth.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1322,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1321,
                                        columnNumber: 7
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Link"], {
                                        href: "/demo?category=health",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                backgroundImage: "url(/images/chatbox/health.png)",
                                                backgroundSize: "cover",
                                                backgroundPosition: "center",
                                                backgroundRepeat: "no-repeat"
                                            },
                                            onClick: handleMobileNavigation,
                                            className: "jsx-40de4423be5fb871" + " " + "bg-[#768976] rounded-lg py-7 mb-3 cursor-pointer hover:bg-[#6b7d6b] transition-colors relative overflow-hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1336,
                                            columnNumber: 8
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1335,
                                        columnNumber: 7
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[locale]/page.tsx",
                                lineNumber: 1263,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 1145,
                        columnNumber: 5
                    }, this),
                    isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setIsMobileMenuOpen(false),
                        style: {
                            width: "100vw",
                            height: "100vh"
                        },
                        className: "jsx-40de4423be5fb871" + " " + "fixed inset-0 z-30 bg-black bg-opacity-50 md:hidden"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 1353,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: "#EFEFEF",
                            backgroundImage: "url(/images/report/housing-report-bg.png)",
                            backgroundSize: "60%",
                            backgroundPosition: "bottom right",
                            backgroundRepeat: "no-repeat",
                            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
                            border: "3px solid #E0E0E0"
                        },
                        className: "jsx-40de4423be5fb871" + " " + "flex flex-col flex-1 w-full min-h-0 md:ml-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-40de4423be5fb871" + " " + "flex flex-col h-full min-h-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        height: showLandingPage ? "calc(100vh - 8rem)" : "calc(100vh - 12rem)"
                                    },
                                    className: "jsx-40de4423be5fb871" + " " + "flex-1 min-h-0 p-2 pt-2 space-y-4 overflow-y-auto sm:p-4 sm:pt-4 md:p-6 md:pt-6",
                                    children: [
                                        showLandingPage ? /* 落地頁 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "flex flex-col items-center justify-center h-full px-2 sm:px-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40de4423be5fb871" + " " + "flex flex-row items-center gap-3 mt-20 sm:flex-row sm:gap-6 md:gap-8 sm:mt-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/images/風水妹/風水妹.png",
                                                            alt: "風鈴",
                                                            onError: (e)=>{
                                                                e.target.style.display = "none";
                                                            },
                                                            className: "jsx-40de4423be5fb871" + " " + "flex-shrink-0 w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-50 lg:h-50"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1390,
                                                            columnNumber: 11
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                width: "auto",
                                                                minWidth: "120px",
                                                                maxWidth: "350px",
                                                                height: "auto",
                                                                minHeight: "40px",
                                                                background: "linear-gradient(45deg, #A3B116, #374A37)",
                                                                WebkitBackgroundClip: "text",
                                                                WebkitTextFillColor: "transparent",
                                                                backgroundClip: "text",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "flex-start",
                                                                fontFamily: "'UoqMunThenKhung'",
                                                                lineHeight: "1.2",
                                                                padding: "4px"
                                                            },
                                                            className: "jsx-40de4423be5fb871" + " " + "text-3xl text-left sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl responsive-title-margin",
                                                            children: "風鈴聊天室"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1400,
                                                            columnNumber: 11
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1389,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40de4423be5fb871" + " " + "w-full max-w-2xl px-1 sm:px-2 md:px-4 lg:px-0",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center transition-shadow bg-white border border-gray-300 rounded-full shadow-lg hover:shadow-xl",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                value: inputMessage,
                                                                onChange: (e)=>setInputMessage(e.target.value),
                                                                onKeyPress: handleKeyPress,
                                                                placeholder: "有任何疑問嗎？請隨時與我分享～",
                                                                rows: 1,
                                                                disabled: isLoading,
                                                                style: {
                                                                    minHeight: "40px"
                                                                },
                                                                className: "jsx-40de4423be5fb871" + " " + "flex-1 px-3 py-2.5 text-sm text-black placeholder-gray-500 bg-transparent resize-none focus:outline-none sm:px-4 sm:py-3 md:px-6 md:py-4 md:text-base"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1429,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-2 space-x-1 sm:px-3 sm:space-x-1 md:px-4 md:space-x-2",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleSendMessage,
                                                                    disabled: !inputMessage.trim() || isLoading,
                                                                    style: {
                                                                        minWidth: "40px",
                                                                        minHeight: "40px"
                                                                    },
                                                                    className: "jsx-40de4423be5fb871" + " " + "p-2 text-purple-600 transition-all duration-200 rounded-full hover:text-purple-700 hover:bg-purple-50 active:bg-purple-100 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent md:p-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                                        className: "w-4 h-4 md:w-5 md:h-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1461,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1449,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1443,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1428,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1427,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40de4423be5fb871" + " " + "w-full max-w-4xl mx-auto mt-3 overflow-hidden sm:mt-5",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "flex gap-2 sm:gap-3 animate-scroll-left",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想增強財運"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-2 py-1.5 space-x-1 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap sm:px-3 sm:py-2 sm:space-x-2 md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-yellow-600",
                                                                            children: "💰"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1480,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1479,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想增多財運"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1484,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1471,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("如何更健康"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-green-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-green-600",
                                                                            children: "🍃"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1495,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1494,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "如何更健康"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1499,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1486,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想中六合彩"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-red-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-red-600",
                                                                            children: "🎰"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1510,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1509,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想中六合彩"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1514,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1501,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想加人工"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-blue-600",
                                                                            children: "💼"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1525,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1524,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想加人工"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1529,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1516,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("如何可以升職"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-purple-600",
                                                                            children: "📈"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1540,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1539,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "如何可以升職"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1544,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1531,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想拍拖"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-pink-600",
                                                                            children: "💕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1555,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1554,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想拍拖"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1559,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1546,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想增強桃花運"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-pink-600",
                                                                            children: "🌸"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1570,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1569,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想增強桃花運"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1574,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1561,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我身體會有隱患嗎"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-orange-600",
                                                                            children: "⚕️"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1585,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1584,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我身體會有隱患嗎"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1589,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1576,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想增多財運"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-yellow-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-yellow-600",
                                                                            children: "💰"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1602,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1601,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想增多財運"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1606,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1593,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("如何更健康"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-green-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-green-600",
                                                                            children: "🍃"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1617,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1616,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "如何更健康"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1621,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1608,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想中六合彩"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-red-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-red-600",
                                                                            children: "🎰"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1632,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1631,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想中六合彩"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1636,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想加人工"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-blue-600",
                                                                            children: "💼"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1647,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1646,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想加人工"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1651,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1638,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("如何可以升職"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-purple-600",
                                                                            children: "📈"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1662,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1661,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "如何可以升職"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1666,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1653,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想拍拖"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-pink-600",
                                                                            children: "💕"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1677,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1676,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想拍拖"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1681,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1668,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我想增強桃花運"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-pink-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-pink-600",
                                                                            children: "🌸"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1692,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1691,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我想增強桃花運"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1696,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1683,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>handleShortcutClick("我身體會有隱患嗎"),
                                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-4 py-2 space-x-2 text-xs font-medium text-gray-700 transition-shadow bg-white border border-gray-200 rounded-lg shadow-md whitespace-nowrap md:px-6 md:py-3 md:text-sm hover:shadow-lg hover:text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center justify-center w-6 h-6 bg-orange-100 rounded-full",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "jsx-40de4423be5fb871" + " " + "text-sm text-orange-600",
                                                                            children: "⚕️"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                                            lineNumber: 1707,
                                                                            columnNumber: 14
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1706,
                                                                        columnNumber: 13
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "jsx-40de4423be5fb871",
                                                                        children: "我身體會有隱患嗎"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1711,
                                                                        columnNumber: 13
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1698,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1469,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1468,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1387,
                                            columnNumber: 9
                                        }, this) : /* 正常聊天消息 */ messages.map((message, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-40de4423be5fb871" + " " + `flex ${message.role === "user" ? "justify-end" : "justify-start"}`,
                                                children: message.role === "user" ? /* 用戶消息樣式 - 黃色背景黑色文字 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        backgroundColor: "#CFE117"
                                                    },
                                                    className: "jsx-40de4423be5fb871" + " " + "max-w-[80%] sm:max-w-[85%] md:max-w-[70%] p-2 sm:p-3 md:p-4 rounded-2xl shadow-md",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "text-xs font-medium text-black sm:text-sm",
                                                        children: message.content || ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1731,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1725,
                                                    columnNumber: 12
                                                }, this) : /* AI助手消息樣式 - 白色背景配風鈴頭像 */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-40de4423be5fb871" + " " + "max-w-[90%] sm:max-w-[95%] md:max-w-[90%] bg-white rounded-2xl shadow-md border border-gray-200",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-40de4423be5fb871" + " " + "flex items-center p-3 md:p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: "/images/風水妹/風水妹2.png",
                                                                    alt: "風鈴",
                                                                    onError: (e)=>{
                                                                        e.target.style.display = "none";
                                                                    },
                                                                    className: "jsx-40de4423be5fb871" + " " + "w-10 h-10 mr-2 rounded-full shadow-lg md:w-12 md:h-12 md:mr-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1740,
                                                                    columnNumber: 14
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-40de4423be5fb871",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "jsx-40de4423be5fb871" + " " + "text-sm font-medium text-black md:text-base",
                                                                        children: "風鈴"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1752,
                                                                        columnNumber: 15
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1751,
                                                                    columnNumber: 14
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1739,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-40de4423be5fb871" + " " + "px-3 pb-2 md:px-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-40de4423be5fb871" + " " + "text-sm leading-relaxed text-black whitespace-pre-wrap",
                                                                children: message.content || ""
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1760,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1759,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-40de4423be5fb871" + " " + "px-3 pb-2 md:px-4 md:pb-3",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-40de4423be5fb871" + " " + "text-xs text-gray-500",
                                                                children: isClient ? (()=>{
                                                                    const date = new Date(message.timestamp);
                                                                    const hours = date.getHours().toString().padStart(2, "0");
                                                                    const minutes = date.getMinutes().toString().padStart(2, "0");
                                                                    const seconds = date.getSeconds().toString().padStart(2, "0");
                                                                    return `${hours}:${minutes}:${seconds}`;
                                                                })() : "--:--:--"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1857,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1856,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1737,
                                                    columnNumber: 12
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1719,
                                                columnNumber: 10
                                            }, this)),
                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-40de4423be5fb871" + " " + "flex justify-start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-40de4423be5fb871" + " " + "bg-white border border-gray-200 shadow-md rounded-2xl",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center p-3 md:p-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                src: "/images/風水妹/風水妹2.png",
                                                                alt: "風鈴",
                                                                onError: (e)=>{
                                                                    e.target.style.display = "none";
                                                                },
                                                                className: "jsx-40de4423be5fb871" + " " + "w-10 h-10 mr-2 rounded-full shadow:lg md:w-12 md:h-12 md:mr-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1911,
                                                                columnNumber: 12
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-40de4423be5fb871",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-40de4423be5fb871" + " " + "font-medium text-black",
                                                                    children: "風鈴"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1922,
                                                                    columnNumber: 13
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                                lineNumber: 1921,
                                                                columnNumber: 12
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1910,
                                                        columnNumber: 11
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "jsx-40de4423be5fb871" + " " + "px-3 pb-3 md:px-4 md:pb-4",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-40de4423be5fb871" + " " + "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "jsx-40de4423be5fb871" + " " + "text-sm text-black",
                                                                    children: "風鈴費神運算中"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1929,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                                    className: "w-4 h-4 text-purple-600 animate-pulse"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1932,
                                                                    columnNumber: 13
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-40de4423be5fb871" + " " + "w-32 h-2 overflow-hidden bg-gray-200 rounded-full",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            animation: `progress-bar ${loadingDuration}s linear infinite`
                                                                        },
                                                                        onAnimationStart: ()=>console.log(`🎬 Progress bar started with ${loadingDuration}s duration`),
                                                                        className: "jsx-40de4423be5fb871" + " " + "h-full rounded-full bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                                        lineNumber: 1934,
                                                                        columnNumber: 14
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                                    lineNumber: 1933,
                                                                    columnNumber: 13
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                                            lineNumber: 1928,
                                                            columnNumber: 12
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1927,
                                                        columnNumber: 11
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1909,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1908,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesEndRef,
                                            className: "jsx-40de4423be5fb871"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/page.tsx",
                                            lineNumber: 1953,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                    lineNumber: 1377,
                                    columnNumber: 7
                                }, this),
                                !showLandingPage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-40de4423be5fb871" + " " + "flex-shrink-0 p-1 border-t border-gray-200 sm:p-2 md:p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-40de4423be5fb871" + " " + "flex items-center mx-1 transition-shadow bg-white border border-gray-200 rounded-full shadow-lg sm:mx-0 hover:shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                value: inputMessage,
                                                onChange: (e)=>setInputMessage(e.target.value),
                                                onKeyPress: handleKeyPress,
                                                placeholder: "輸入任何問題，風鈴會分析並引導你...",
                                                rows: 1,
                                                disabled: isLoading,
                                                style: {
                                                    minHeight: "32px"
                                                },
                                                className: "jsx-40de4423be5fb871" + " " + "flex-1 px-2 py-2 text-xs text-black placeholder-gray-500 bg-transparent resize-none focus:outline-none sm:px-3 sm:py-2.5 sm:text-sm md:px-6 md:py-3 md:text-base"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1960,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-40de4423be5fb871" + " " + "flex items-center px-1 space-x-1 sm:px-2 md:px-4 md:space-x-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSendMessage,
                                                    disabled: !inputMessage.trim() || isLoading,
                                                    style: {
                                                        minWidth: "32px",
                                                        minHeight: "32px"
                                                    },
                                                    className: "jsx-40de4423be5fb871" + " " + "p-1.5 text-purple-600 transition-all duration-200 rounded-full hover:text-purple-700 hover:bg-purple-50 active:bg-purple-100 disabled:text-gray-300 disabled:cursor-not-allowed disabled:hover:bg-transparent sm:p-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        className: "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                                        lineNumber: 1986,
                                                        columnNumber: 12
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                                    lineNumber: 1974,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/page.tsx",
                                                lineNumber: 1972,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/page.tsx",
                                        lineNumber: 1959,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/page.tsx",
                                    lineNumber: 1958,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/[locale]/page.tsx",
                            lineNumber: 1375,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/page.tsx",
                        lineNumber: 1361,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 1131,
                columnNumber: 4
            }, this),
            showBirthdayModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BirthdayModal$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: showBirthdayModal,
                onClose: ()=>setShowBirthdayModal(false),
                onSubmit: handleBirthdaySubmit,
                concern: concern,
                isCoupleAnalysis: isCoupleAnalysis
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/page.tsx",
                lineNumber: 1998,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "40de4423be5fb871",
                children: '@font-face{font-family:UoqMunThenKhung;src:url(/fonts/UoqMunThenKhung.ttf)format("truetype");font-weight:400;font-style:normal;font-display:swap}@keyframes progress-bar{0%{width:100%}to{width:0%}}@keyframes scroll-left{0%{transform:translate(50%)}to{transform:translate(-50%)}}.animate-progress-bar{animation:15s linear infinite progress-bar}.animate-scroll-left{width:max-content;max-width:800px;animation:20s linear infinite scroll-left}.animate-scroll-left:hover{animation-play-state:paused}'
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/page.tsx",
        lineNumber: 1128,
        columnNumber: 3
    }, this);
}
}}),

};

//# sourceMappingURL=src_eadf84e8._.js.map