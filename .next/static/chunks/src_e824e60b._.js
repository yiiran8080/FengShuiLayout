(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_e824e60b._.js", {

"[project]/src/components/AuthProvider.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
'use client';
;
;
function AuthProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SessionProvider"], {
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/AuthProvider.jsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = AuthProvider;
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/PageTracker.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PageTracker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const pageNames = {
    "/zh-TW": "Home Page",
    "/zh-TW/free": "Free Analysis Page",
    "/zh-TW/freereport": "Free Report Page",
    "/zh-TW/design": "Design Page",
    "/zh-TW/report": "Report Page",
    "/zh-TW/success": "Success Page",
    "/zh-TW/price": "Pricing Page",
    "/zh-CN": "Home Page (CN)",
    "/zh-CN/free": "Free Analysis Page (CN)",
    "/zh-CN/freereport": "Free Report Page (CN)",
    "/zh-CN/design": "Design Page (CN)",
    "/zh-CN/report": "Report Page (CN)",
    "/zh-CN/success": "Success Page (CN)",
    "/zh-CN/price": "Pricing Page (CN)"
};
function PageTracker() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTracker.useEffect": ()=>{
            const trackPage = {
                "PageTracker.useEffect.trackPage": ()=>{
                    if ("object" !== "undefined" && window.gtag) {
                        const pageName = pageNames[pathname] || `Page: ${pathname}`;
                        // Send page view with custom title
                        window.gtag("event", "page_view", {
                            page_title: pageName,
                            page_location: window.location.href,
                            page_path: pathname,
                            custom_page_name: pageName,
                            send_to: "G-FSF2H5X9S4",
                            page_referrer: document.referrer || "(direct)"
                        });
                        console.log(`Page tracked: ${pageName} at ${pathname}`);
                        return true;
                    }
                    return false;
                }
            }["PageTracker.useEffect.trackPage"];
            // Retry logic for gtag availability
            let attempts = 0;
            const maxAttempts = 50; // 5 seconds max wait
            const tryTracking = {
                "PageTracker.useEffect.tryTracking": ()=>{
                    if (trackPage() || attempts >= maxAttempts) {
                        return;
                    }
                    attempts++;
                    setTimeout(tryTracking, 100);
                }
            }["PageTracker.useEffect.tryTracking"];
            tryTracking();
        }
    }["PageTracker.useEffect"], [
        pathname
    ]);
    return null; // This component doesn't render anything
}
_s(PageTracker, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = PageTracker;
var _c;
__turbopack_context__.k.register(_c, "PageTracker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/ImageContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ImageProvider": (()=>ImageProvider),
    "useImage": (()=>useImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ImageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function ImageProvider({ children }) {
    _s();
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [file, setFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Load image from localStorage on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageProvider.useEffect": ()=>{
            try {
                const savedPreview = localStorage.getItem("savedImagePreview");
                if (savedPreview) {
                    setPreview(savedPreview);
                }
            } catch (error) {}
        }
    }["ImageProvider.useEffect"], []);
    // Custom setPreview function that also saves to localStorage
    const setPreviewWithStorage = (newPreview)=>{
        setPreview(newPreview);
        try {
            if (newPreview) {
                localStorage.setItem("savedImagePreview", newPreview);
            } else {
                localStorage.removeItem("savedImagePreview");
            }
        } catch (error) {}
    };
    // Custom setFile function that also handles preview
    const setFileWithPreview = (newFile)=>{
        setFile(newFile);
        if (newFile) {
            // Create preview URL and save it
            const reader = new FileReader();
            reader.onload = (e)=>{
                const previewUrl = e.target.result;
                setPreviewWithStorage(previewUrl);
            };
            reader.readAsDataURL(newFile);
        } else {
            setPreviewWithStorage(null);
        }
    };
    // Function to clear all image data
    const clearImages = ()=>{
        setPreview(null);
        setFile(null);
        try {
            localStorage.removeItem("savedImagePreview");
        } catch (error) {}
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ImageContext.Provider, {
        value: {
            preview,
            setPreview: setPreviewWithStorage,
            file,
            setFile: setFileWithPreview,
            clearImages
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ImageContext.js",
        lineNumber: 60,
        columnNumber: 3
    }, this);
}
_s(ImageProvider, "Zu+BKowMy5IhSY201hghIJI+FnI=");
_c = ImageProvider;
function useImage() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ImageContext);
    if (!context) {
        throw new Error("useImage must be used within an ImageProvider");
    }
    return context;
}
_s1(useImage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ImageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/ajax.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "del": (()=>del),
    "get": (()=>get),
    "patch": (()=>patch),
    "post": (()=>post)
});
async function ajax(opt) {
    const { url, method, headers = {}, body, isCached } = opt;
    try {
        const res = await fetch(url, {
            method: method.toUpperCase(),
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
            body: body ? JSON.stringify(body) : undefined,
            cache: isCached ? "force-cache" : "no-store"
        });
        const resData = await res.json();
        return resData;
    } catch (ex) {
        throw new Error("ajax error ", ex.message);
    }
}
async function get(url, options) {
    return await ajax({
        url,
        method: "GET",
        ...options
    });
}
async function post(url, data) {
    return await ajax({
        url,
        method: "POST",
        body: data
    });
}
async function patch(url, data) {
    return await ajax({
        url,
        method: "PATCH",
        body: data
    });
}
async function del(url, data) {
    return await ajax({
        url,
        method: "DELETE",
        body: data
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/UserContext.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserProvider": (()=>UserProvider),
    "useUser": (()=>useUser)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ajax.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const UserContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function UserProvider({ children }) {
    _s();
    const { data: session, status: sessionStatus } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [userInfo, setUserInfo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [lastUpdateTime, setLastUpdateTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Date.now());
    // Function to fetch user data
    const fetchUserData = async ()=>{
        if (sessionStatus === "loading") {
            return;
        }
        if (!session?.user?.userId) {
            setLoading(false);
            setUserInfo(null);
            return;
        }
        try {
            setLoading(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(`/api/users/${session.user.userId}`);
            if (response.status === 0 && response.data) {
                setUserInfo(response.data);
                setLastUpdateTime(Date.now());
            } else {
                setUserInfo(null);
            }
        } catch (error) {
            setUserInfo(null);
        } finally{
            setLoading(false);
        }
    };
    // Fetch user data when session changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserProvider.useEffect": ()=>{
            fetchUserData();
        }
    }["UserProvider.useEffect"], [
        session?.user?.userId,
        sessionStatus
    ]);
    // Function to update user info and force refresh
    const updateUserInfo = (newUserInfo)=>{
        setUserInfo(newUserInfo);
        setLastUpdateTime(Date.now());
    };
    // Function to force refresh from API
    const refreshUserInfo = async ()=>{
        await fetchUserData();
    };
    const contextValue = {
        userInfo,
        setUserInfo: updateUserInfo,
        refreshUserInfo,
        loading: loading || sessionStatus === "loading",
        lastUpdateTime
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(UserContext.Provider, {
        value: contextValue,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/UserContext.js",
        lineNumber: 68,
        columnNumber: 3
    }, this);
}
_s(UserProvider, "0DVMQcQD2ukLReZ8+qFo+iMUx58=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = UserProvider;
function useUser() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
}
_s1(useUser, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "UserProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_e824e60b._.js.map