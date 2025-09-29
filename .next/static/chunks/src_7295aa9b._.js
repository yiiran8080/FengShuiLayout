(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_7295aa9b._.js", {

"[project]/src/i18n/routing.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "routing": (()=>routing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/routing/defineRouting.js [app-client] (ecmascript) <export default as defineRouting>");
;
const routing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$routing$2f$defineRouting$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__defineRouting$3e$__["defineRouting"])({
    // A list of all locales that are supported
    locales: [
        "zh-CN",
        "zh-TW"
    ],
    // Used when no locale matches
    defaultLocale: "zh-TW"
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/i18n/navigation.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Link": (()=>Link),
    "getPathname": (()=>getPathname),
    "redirect": (()=>redirect),
    "usePathname": (()=>usePathname),
    "useRouter": (()=>useRouter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/navigation/react-client/createNavigation.js [app-client] (ecmascript) <export default as createNavigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/routing.ts [app-client] (ecmascript)");
;
;
const { Link, redirect, usePathname, useRouter, getPathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$navigation$2f$react$2d$client$2f$createNavigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__createNavigation$3e$__["createNavigation"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$routing$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["routing"]);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/types/room.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "getBirthDate": (()=>getBirthDate),
    "getRoomLabel": (()=>getRoomLabel),
    "splitLongString": (()=>splitLongString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/room.js [app-client] (ecmascript)");
;
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_TYPES_LABEL_CN"][roomType] + "-" + no;
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$room$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ROOM_TYPES_LABEL_TW"][roomType] + "-" + no;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-client] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = DropdownMenu;
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c1 = DropdownMenuPortal;
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c2 = DropdownMenuTrigger;
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md", className),
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
_c3 = DropdownMenuContent;
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = DropdownMenuGroup;
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c5 = DropdownMenuItem;
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
_c6 = DropdownMenuCheckboxItem;
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
_c7 = DropdownMenuRadioGroup;
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
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
_c8 = DropdownMenuRadioItem;
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("px-2 py-1.5 text-sm font-medium data-[inset]:pl-8", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
_c9 = DropdownMenuLabel;
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_c10 = DropdownMenuSeparator;
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground ml-auto text-xs tracking-widest", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
_c11 = DropdownMenuShortcut;
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
_c12 = DropdownMenuSub;
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
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
_c13 = DropdownMenuSubTrigger;
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c14 = DropdownMenuSubContent;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13, _c14;
__turbopack_context__.k.register(_c, "DropdownMenu");
__turbopack_context__.k.register(_c1, "DropdownMenuPortal");
__turbopack_context__.k.register(_c2, "DropdownMenuTrigger");
__turbopack_context__.k.register(_c3, "DropdownMenuContent");
__turbopack_context__.k.register(_c4, "DropdownMenuGroup");
__turbopack_context__.k.register(_c5, "DropdownMenuItem");
__turbopack_context__.k.register(_c6, "DropdownMenuCheckboxItem");
__turbopack_context__.k.register(_c7, "DropdownMenuRadioGroup");
__turbopack_context__.k.register(_c8, "DropdownMenuRadioItem");
__turbopack_context__.k.register(_c9, "DropdownMenuLabel");
__turbopack_context__.k.register(_c10, "DropdownMenuSeparator");
__turbopack_context__.k.register(_c11, "DropdownMenuShortcut");
__turbopack_context__.k.register(_c12, "DropdownMenuSub");
__turbopack_context__.k.register(_c13, "DropdownMenuSubTrigger");
__turbopack_context__.k.register(_c14, "DropdownMenuSubContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/emitter.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/mitt/dist/mitt.mjs [app-client] (ecmascript)");
;
const emitter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$mitt$2f$dist$2f$mitt$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
const __TURBOPACK__default__export__ = emitter;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/types/constants.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "EVENT_TRANSLATE_STATUS": (()=>EVENT_TRANSLATE_STATUS)
});
const EVENT_TRANSLATE_STATUS = "E_K_TRANSLATE";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/LanguageToggle.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LanguageToggle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emitter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function LanguageToggle({ className, trigger }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    let href = `/${pathname.split('/').slice(2).join('/')}`;
    // const [transStatus, setTransStatus] = useState(false)
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])('toast');
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 text-white hover:opacity-80", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        trigger ? trigger : pathname.startsWith('/zh-CN') ? '简体中文' : '繁體中文',
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-white rounded-lg shadow-lg p-1 min-w-[120px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "focus:bg-inherit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                        className: "focus:bg-inherit",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
_s(LanguageToggle, "ubWVzN2Z0wcQh3unbvhqt4fw9Wc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"]
    ];
});
_c = LanguageToggle;
var _c;
__turbopack_context__.k.register(_c, "LanguageToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/utils/regionDetection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
    const storedRegion = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("userRegion") : ("TURBOPACK unreachable", undefined);
    if (storedRegion && [
        "china",
        "hongkong"
    ].includes(storedRegion)) {
        console.log("💾 Using stored region preference:", storedRegion);
        return storedRegion;
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
    if ("object" !== "undefined" && [
        "china",
        "hongkong"
    ].includes(region)) {
        localStorage.setItem("userRegion", region);
        console.log("💾 Saved region preference:", region);
    }
};
const clearRegionPreference = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        localStorage.removeItem("userRegion");
        console.log("🗑️ Cleared region preference");
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/config/regions.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useRegionDetectionEnhanced.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
/**
 * Enhanced Region Detection Hook with Auto-Redirect
 * Handles both region detection and automatic locale redirection
 */ __turbopack_context__.s({
    "useRegionDetection": (()=>useRegionDetection),
    "useRegionDetectionWithRedirect": (()=>useRegionDetectionWithRedirect)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/regionDetection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/regions.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
const useRegionDetectionWithRedirect = (options = {})=>{
    _s();
    const { autoRedirect = false, skipFirstRedirect = true } = options;
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [region, setRegion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("hongkong");
    const [regionConfig, setRegionConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasAutoRedirected, setHasAutoRedirected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Get current locale from pathname
    const currentLocale = pathname.startsWith("/zh-CN") ? "zh-CN" : "zh-TW";
    // Region to locale mapping
    const regionLocaleMap = {
        china: "zh-CN",
        hongkong: "zh-TW"
    };
    // Initialize region detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useRegionDetectionWithRedirect.useEffect": ()=>{
            const initRegion = {
                "useRegionDetectionWithRedirect.useEffect.initRegion": async ()=>{
                    try {
                        setIsLoading(true);
                        console.log("🚀 Initializing enhanced region detection...");
                        const detectedRegion = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUserRegion"])();
                        const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegionConfig"])(detectedRegion);
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
                        const fallbackConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegionConfig"])("hongkong");
                        setRegion("hongkong");
                        setRegionConfig(fallbackConfig);
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["useRegionDetectionWithRedirect.useEffect.initRegion"];
            initRegion();
        }
    }["useRegionDetectionWithRedirect.useEffect"], [
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
            const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRegionConfig"])(newRegion);
            const targetLocale = regionLocaleMap[newRegion];
            setRegion(newRegion);
            setRegionConfig(config);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$regionDetection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveRegionPreference"])(newRegion);
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
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$regions$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPrice"])(amount, region);
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
_s(useRegionDetectionWithRedirect, "oqtliAB26ixCodh4kbWtiozCbNQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
const useRegionDetection = ()=>{
    _s1();
    return useRegionDetectionWithRedirect({
        autoRedirect: false
    });
};
_s1(useRegionDetection, "UgL4pP6t/Yhh5+6RfO9KuW3NXqQ=", false, function() {
    return [
        useRegionDetectionWithRedirect
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/RegionLanguageSelector.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RegionLanguageSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRegionDetectionEnhanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useRegionDetectionEnhanced.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function RegionLanguageSelector({ className, navTextColor = "#fff" }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { region, changeRegion, isLoading, currentLocale: detectedLocale } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRegionDetectionEnhanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegionDetectionWithRedirect"])({
        autoRedirect: true,
        skipFirstRedirect: true
    });
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Prevent hydration mismatch
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RegionLanguageSelector.useEffect": ()=>{
            setMounted(true);
        }
    }["RegionLanguageSelector.useEffect"], []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 opacity-50", className),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenu"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                asChild: true,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer flex items-center space-x-1 hover:opacity-80", className),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        color: navTextColor
                    },
                    children: [
                        getDisplayText(),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                className: "bg-white rounded-lg shadow-lg p-1 min-w-[160px]",
                children: [
                    regions.map((regionConfig)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                            className: "focus:bg-inherit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleRegionChange(regionConfig.key),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left px-4 py-2 text-sm hover:text-primary rounded text-foreground flex items-center justify-between", region === regionConfig.key && currentLocale === regionConfig.locale ? "bg-green-50 text-green-600 font-medium" : ""),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: regionConfig.displayText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 139,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    ("TURBOPACK compile-time value", "development") === "development" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-gray-100 my-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                lineNumber: 150,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 text-xs text-gray-400",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            "Region: ",
                                            region
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/RegionLanguageSelector.jsx",
                                        lineNumber: 152,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(RegionLanguageSelector, "Su+J4xYFXTX4xt95xUDbySIFyk0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRegionDetectionEnhanced$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRegionDetectionWithRedirect"]
    ];
});
_c = RegionLanguageSelector;
var _c;
__turbopack_context__.k.register(_c, "RegionLanguageSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/hooks/useMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>useMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useMobile() {
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 添加useEffect监听窗口大小
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobile.useEffect": ()=>{
            const checkMobile = {
                "useMobile.useEffect.checkMobile": ()=>{
                    setIsMobile(window.matchMedia('(max-width: 768px)').matches);
                }
            }["useMobile.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "useMobile.useEffect": ()=>{
                    window.removeEventListener('resize', checkMobile);
                }
            })["useMobile.useEffect"];
        }
    }["useMobile.useEffect"], []);
    return isMobile;
}
_s(useMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Separator": (()=>Separator)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator-root",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/UnlockButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/ajax.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
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
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Navigation");
    const [isLock, setIsLock] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [quantity, setQuantity] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useEffect": ()=>{
            const userId = session?.user?.userId;
            if (userId) {
                const loadData = {
                    "useEffect.loadData": async ()=>{
                        const { status, message, data: userInfo } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["get"])(`/api/users/${userId}`);
                        if (status == 0) {
                            setIsLock(userInfo.isLock);
                        }
                    }
                }["useEffect.loadData"];
                loadData();
            }
        }
    }["useEffect"], [
        session?.user?.userId
    ]);
    const onClick = async ()=>{
        // 這裡可以用 prompt 或自訂 modal 讓用戶輸入尺數
        const input = window.prompt("請輸入家居尺數", quantity);
        const qty = Number(input) || 1;
        const { status, data, message } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$ajax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["post"])(`/api/checkoutSessions`, {
            quantity: qty
        });
        if (status == 0) {
            const { url } = data;
            window.open(url, "_self");
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(message);
        }
    };
    return isLock && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer font-bold text-[#066952] rounded-[20px] bg-[#A7F7D3] md:px-4 px-1.5 py-1 mr-1 md:mr-6", className),
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = Select;
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_c1 = SelectGroup;
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_c2 = SelectValue;
function SelectTrigger({ className, size = "default", children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
_c3 = SelectTrigger;
function SelectContent({ className, children, position = "popper", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-[10000] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
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
_c4 = SelectContent;
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground px-2 py-1.5 text-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 3
    }, this);
}
_c5 = SelectLabel;
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ItemText"], {
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
_c6 = SelectItem;
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-border pointer-events-none -mx-1 my-1 h-px", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 133,
        columnNumber: 3
    }, this);
}
_c7 = SelectSeparator;
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
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
_c8 = SelectScrollUpButton;
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-default items-center justify-center py-1", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
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
_c9 = SelectScrollDownButton;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Select");
__turbopack_context__.k.register(_c1, "SelectGroup");
__turbopack_context__.k.register(_c2, "SelectValue");
__turbopack_context__.k.register(_c3, "SelectTrigger");
__turbopack_context__.k.register(_c4, "SelectContent");
__turbopack_context__.k.register(_c5, "SelectLabel");
__turbopack_context__.k.register(_c6, "SelectItem");
__turbopack_context__.k.register(_c7, "SelectSeparator");
__turbopack_context__.k.register(_c8, "SelectScrollUpButton");
__turbopack_context__.k.register(_c9, "SelectScrollDownButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MenuContent.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>MenuBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$emitter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/emitter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$types$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/types/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)"); // Add signOut import
// Remove this import: import { handleSignOut } from "../app/actions";
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function MenuBar({ className, isOpen, setIsOpen, from }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.hero");
    const t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("toast");
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])(); // Add router
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const isLogined = session?.user?.userId;
    const onLoginClick = async ()=>{
        setIsOpen(false);
        if (isLogined) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(t2("loading"), {
                autoClose: 2000
            });
            try {
                // Use client-side signOut instead of server action
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                    redirect: false
                });
                // Manually redirect after logout
                router.push("/auth/login");
                // Optional: Show success toast
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Logged out successfully", {
                    autoClose: 1000
                });
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Logout failed", {
                    autoClose: 2000
                });
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseLeave: ()=>{
            setIsOpen(false);
        },
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("hidden-on-print absolute top-0 right-0 w-full md:w-80 md:shadow-lg bg-white z-20 transition-transform duration-300 ease-in-out", isOpen ? "translate-y-0" : "-translate-y-100"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center py-4.5 px-4 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#066952] text-xl font-bold",
                        children: "HarmoniQ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 64,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
            from === "home" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "cursor-pointer block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                onClick: onLoginClick,
                children: t("logout")
            }, void 0, false, {
                fileName: "[project]/src/components/MenuContent.jsx",
                lineNumber: 73,
                columnNumber: 5
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/home",
                        children: t("home")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 81,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/price",
                        children: t("pricing")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 87,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/free",
                        children: t("cta")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 93,
                        columnNumber: 6
                    }, this),
                    isLogined && pathname.indexOf("/report") < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        className: "block text-base focus:bg-secondary focus:text-primary py-3.5 px-4",
                        href: "/report",
                        children: t("readReport")
                    }, void 0, false, {
                        fileName: "[project]/src/components/MenuContent.jsx",
                        lineNumber: 100,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                className: "w-full text-base border-none py-4 mt-1 data-[state=open]:mb-22 px-4 shadow-none data-[state=open]:bg-secondary data-[state=open]:text-primary",
                                children: t("locale")
                            }, void 0, false, {
                                fileName: "[project]/src/components/MenuContent.jsx",
                                lineNumber: 109,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                                className: "border-none shadow-none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                        href: `/${pathname.split("/").slice(2).join("/")}`,
                                        locale: "zh-CN",
                                        className: `block px-4 py-2 text-sm  rounded ${pathname.startsWith("/zh-CN") ? "bg-[#13AB87] text-white" : "text-[#888]"}`,
                                        children: "简体中文"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MenuContent.jsx",
                                        lineNumber: 113,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                    pathname.indexOf("/login") < 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
_s(MenuBar, "P1o7zKgxqCXerlnF7ponGhKj6iI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = MenuBar;
var _c;
__turbopack_context__.k.register(_c, "MenuBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Avatar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MenuContent.jsx [app-client] (ecmascript)");
;
;
;
;
function __TURBOPACK__default__export__({ from }) {
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onMenuClick = ()=>{
        setIsOpen(true);
    };
    // session?.user?.name 
    return session?.user?.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-8 h-8 p-0.5 bg-[#6a84f8] rounded-full text-center cursor-pointer",
                onClick: onMenuClick,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MenuContent$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Navbar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LanguageToggle$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LanguageToggle.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/RegionLanguageSelector.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$UnlockButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/UnlockButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Avatar.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
function Navbar({ from, backgroundColor = "transparent" }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("Navigation");
    const t2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.hero");
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                const hash = window.location.hash.replace("#", "");
                if (hash) {
                    // Small delay to ensure the page has loaded
                    setTimeout({
                        "Navbar.useEffect": ()=>{
                            scrollToSection(hash);
                        }
                    }["Navbar.useEffect"], 100);
                }
            }
        }
    }["Navbar.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `absolute top-0 left-0 right-0 z-[70] h-16 ${!isHome ? "bg-white shadow-sm" : ""}`,
        style: {
            fontFamily: "Noto Serif TC, serif",
            backgroundColor: backgroundColor === "transparent" ? "transparent" : `#${backgroundColor.replace("#", "")}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto flex items-center justify-between h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                    href: "/home",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-10 ml-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center md:space-x-6",
                            children: [
                                isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                                    className: "p-2 rounded-md hover:bg-gray-100 mr-2",
                                    style: {
                                        color: navTextColor
                                    },
                                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-6 h-6",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                                !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-6 h-6 border-2 rounded-full border-t-transparent animate-spin",
                                    style: {
                                        borderColor: navTextColor
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 207,
                                    columnNumber: 8
                                }, this) : isLogined && from !== "login" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Avatar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 212,
                                    columnNumber: 8
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
            isMobile && isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-16 left-0 right-0 bg-white border-b shadow-lg z-[80]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-4 py-2 space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-t pt-2 mt-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$RegionLanguageSelector$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
            isMobile && isMobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_s(Navbar, "EyfP3ne6uioNWG0z0MlSICbHvAI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useResponsiveScale": (()=>useResponsiveScale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useResponsiveScale = ()=>{
    _s();
    const [scaleRatio, setScaleRatio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isMobileLayout, setIsMobileLayout] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useResponsiveScale.useEffect": ()=>{
            const calculateScale = {
                "useResponsiveScale.useEffect.calculateScale": ()=>{
                    // MacBook Air 13" typical resolution when you see the perfect layout
                    const baseWidth = 1440; // Your MacBook Air 13" width
                    const currentWidth = window.innerWidth;
                    // Calculate scale ratio based only on width to maintain proportions
                    let ratio = currentWidth / baseWidth;
                    // Don't scale up beyond the base size - keep original size as maximum
                    ratio = Math.min(ratio, 1);
                    // Set minimum scale to prevent too small elements
                    ratio = Math.max(ratio, 0.3);
                    setScaleRatio(ratio);
                    setIsMobileLayout(currentWidth < 768);
                }
            }["useResponsiveScale.useEffect.calculateScale"];
            calculateScale();
            window.addEventListener("resize", calculateScale);
            return ({
                "useResponsiveScale.useEffect": ()=>window.removeEventListener("resize", calculateScale)
            })["useResponsiveScale.useEffect"];
        }
    }["useResponsiveScale.useEffect"], []);
    return {
        scaleRatio,
        isMobileLayout
    };
};
_s(useResponsiveScale, "wAlyCeKr+xAWeHe6/8w7yWzgPHk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/Hero.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Hero)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useMobile.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function Hero() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.hero");
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [timeLeft, setTimeLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Background overlay carousel state
    const [bgOverlayIndex, setBgOverlayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [prevBgOverlayIndex, setPrevBgOverlayIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [bgFade, setBgFade] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Hero images carousel state (separate)
    const [heroIndex, setHeroIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Background overlay effects
    const backgroundOverlayEffects = [
        {
            color: "#1C312E",
            opacity: 0.6
        },
        {
            color: "#1A3B2C",
            opacity: 0.5
        },
        {
            color: "#73897F",
            opacity: 0.1
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            setIsClient(true);
        }
    }["Hero.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            let timer;
            let end = null;
            const fetchEndTime = {
                "Hero.useEffect.fetchEndTime": async ()=>{
                    try {
                        const res = await fetch("/api/countdown-end");
                        const data = await res.json();
                        end = data.endTime;
                        const updateCountdown = {
                            "Hero.useEffect.fetchEndTime.updateCountdown": ()=>{
                                const diff = end - Date.now();
                                if (diff <= 0) {
                                    setTimeLeft({
                                        days: 0,
                                        hours: 0,
                                        minutes: 0,
                                        seconds: 0
                                    });
                                    clearInterval(timer);
                                } else {
                                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                                    const hours = Math.floor(diff / (1000 * 60 * 60) % 24);
                                    const minutes = Math.floor(diff / (1000 * 60) % 60);
                                    const seconds = Math.floor(diff / 1000 % 60);
                                    setTimeLeft({
                                        days,
                                        hours,
                                        minutes,
                                        seconds
                                    });
                                }
                            }
                        }["Hero.useEffect.fetchEndTime.updateCountdown"];
                        updateCountdown();
                        timer = setInterval(updateCountdown, 1000);
                    } catch (error) {} finally{
                        setLoading(false);
                    }
                }
            }["Hero.useEffect.fetchEndTime"];
            fetchEndTime();
            return ({
                "Hero.useEffect": ()=>clearInterval(timer)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    // Background overlay carousel effect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            const interval = setInterval({
                "Hero.useEffect.interval": ()=>{
                    setPrevBgOverlayIndex(bgOverlayIndex);
                    setBgFade(true);
                    setTimeout({
                        "Hero.useEffect.interval": ()=>{
                            setBgOverlayIndex({
                                "Hero.useEffect.interval": (prev)=>(prev + 1) % backgroundOverlayEffects.length
                            }["Hero.useEffect.interval"]);
                            setBgFade(false);
                        }
                    }["Hero.useEffect.interval"], 800);
                }
            }["Hero.useEffect.interval"], 3500);
            return ({
                "Hero.useEffect": ()=>clearInterval(interval)
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], [
        bgOverlayIndex
    ]);
    const handleBgOverlayClick = (idx)=>{
        if (idx !== bgOverlayIndex) {
            setPrevBgOverlayIndex(bgOverlayIndex);
            setBgFade(true);
            setTimeout(()=>{
                setBgOverlayIndex(idx);
                setBgFade(false);
            }, 800);
        }
    };
    const handleHeroDotClick = (idx)=>{
        if (idx !== heroIndex) {
            setHeroIndex(idx);
        }
    };
    const links = {
        social: [
            {
                icon: "/images/footer/Facebook.png",
                href: "https://www.facebook.com/profile.php?id=61578389876952"
            },
            {
                icon: "/images/footer/Instagram.png",
                href: "https://www.instagram.com/harmoniq_fengshui/"
            }
        ]
    };
    // During SSR and initial hydration, render desktop layout to prevent mismatch
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative flex items-center overflow-hidden",
                style: {
                    fontFamily: "Noto Serif TC, serif",
                    minHeight: "100vh",
                    transform: `scale(${scaleRatio})`,
                    transformOrigin: "top center",
                    width: `${100 / scaleRatio}%`,
                    marginLeft: "auto",
                    marginRight: "auto"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-0 w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/hero/01.png",
                            alt: "Hero background",
                            fill: true,
                            className: "object-cover",
                            priority: true
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 151,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 150,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 w-full z-1",
                        style: {
                            backgroundColor: backgroundOverlayEffects[0].color,
                            opacity: backgroundOverlayEffects[0].opacity
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 161,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-20 -translate-x-1/2 left-1/2",
                        style: {
                            top: "25%",
                            left: "33%",
                            width: "832px",
                            height: "160px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden",
                            pointerEvents: "none"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block whitespace-nowrap",
                            style: {
                                fontSize: "95px",
                                lineHeight: "160px",
                                fontWeight: 800,
                                color: "#FEF8EF",
                                fontFamily: "Noto Serif TC, serif",
                                width: "100%",
                                textAlign: "center"
                            },
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 184,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 170,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0 z-10 pointer-events-none",
                        style: {
                            top: "45%",
                            height: 0,
                            borderTop: `${2 * scaleRatio}px solid #FEF8EF`,
                            width: "100%",
                            opacity: 0.7
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 201,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-20 flex flex-col items-start -translate-x-1/2 left-[40%]",
                        style: {
                            top: "calc(38% + 60px)",
                            width: "947px",
                            pointerEvents: "none"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block whitespace-nowrap",
                                style: {
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    fontWeight: 500,
                                    color: "#FEF8EF",
                                    fontFamily: "Noto Serif TC, serif",
                                    textAlign: "start"
                                },
                                children: t("title2")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Hero.jsx",
                                lineNumber: 221,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block mt-2 whitespace-nowrap",
                                style: {
                                    fontSize: "25px",
                                    lineHeight: "36px",
                                    fontWeight: 500,
                                    color: "#FEF8EF",
                                    fontFamily: "Noto Serif TC, serif",
                                    textAlign: "start"
                                },
                                children: t("subtitle1")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Hero.jsx",
                                lineNumber: 234,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 213,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-20",
                        style: {
                            top: "calc(38%)",
                            right: "5%",
                            pointerEvents: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                            href: "/",
                            className: "flex items-center justify-center transition-transform duration-200 hover:scale-105",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/風水妹/chart-button.png",
                                alt: t("cta"),
                                width: 400,
                                height: 150,
                                className: "cursor-pointer",
                                style: {
                                    filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Hero.jsx",
                                lineNumber: 262,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 258,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 250,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0 z-5",
                        style: {
                            height: "200px",
                            background: "linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.3) 70%, rgba(239, 239, 239, 0.8) 100%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 276,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Hero.jsx",
                lineNumber: 137,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Hero.jsx",
            lineNumber: 136,
            columnNumber: 4
        }, this);
    }
    // MOBILE LAYOUT - Redesigned according to requirements
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full min-h-[60vh] overflow-hidden b",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/hero/mainmobilebg.png" // <-- updated here
                        ,
                        alt: "Hero background",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 295,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 294,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col px-4 py-8 mt-15",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 pt-16 pb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end mb-6 ",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "Noto Serif TC, serif",
                                            fontWeight: 1000,
                                            fontSize: "50px",
                                            color: "#E8E2DA",
                                            letterSpacing: "2px",
                                            lineHeight: "1"
                                        },
                                        children: "HarmoniQ"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Hero.jsx",
                                        lineNumber: 323,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Hero.jsx",
                                    lineNumber: 322,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "justify-center px-2 mb-8 text-start",
                                    style: {
                                        fontFamily: "Noto Serif TC, serif",
                                        fontWeight: 800,
                                        fontSize: "32px",
                                        color: "#E8E2DA",
                                        lineHeight: "1.2",
                                        textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                    },
                                    children: t("title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Hero.jsx",
                                    lineNumber: 337,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg sm:text-xl font-medium text-[#FEF8EF]",
                                        style: {
                                            fontFamily: "Noto Serif TC, serif",
                                            lineHeight: "1.4",
                                            textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                                        },
                                        children: t("title2")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Hero.jsx",
                                        lineNumber: 352,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Hero.jsx",
                                    lineNumber: 351,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 320,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col justify-center flex-1 px-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex items-start mb-6",
                                style: {
                                    minHeight: "60px"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[70%]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg font-medium text-[#FEF8EF] mb-2",
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                lineHeight: "1.4",
                                                textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                                            },
                                            children: t("subtitle1")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Hero.jsx",
                                            lineNumber: 373,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Hero.jsx",
                                        lineNumber: 372,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-[30%] flex justify-end relative",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                top: "32px",
                                                right: 0,
                                                zIndex: 20
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                                                href: "/",
                                                className: "flex items-center justify-center transition-transform duration-200 active:scale-95 hover:scale-105",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/風水妹/chart-button.png",
                                                    alt: t("cta"),
                                                    width: 120,
                                                    height: 48,
                                                    className: "cursor-pointer",
                                                    style: {
                                                        filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Hero.jsx",
                                                    lineNumber: 397,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Hero.jsx",
                                                lineNumber: 393,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Hero.jsx",
                                            lineNumber: 385,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Hero.jsx",
                                        lineNumber: 384,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Hero.jsx",
                                lineNumber: 368,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 366,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-shrink-0 h-8"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 414,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 318,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 pointer-events-none right-10 z-5",
                    style: {
                        height: "80px",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.1) 50%, rgba(239, 239, 239, 0.3) 100%)",
                        borderTopLeftRadius: "30px",
                        borderTopRightRadius: "30px"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 418,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.jsx",
            lineNumber: 292,
            columnNumber: 4
        }, this);
    }
    // DESKTOP LAYOUT (keeping your existing desktop code)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative flex items-center overflow-hidden",
            style: {
                fontFamily: "Noto Serif TC, serif",
                minHeight: "100vh",
                transform: `scale(${scaleRatio})`,
                transformOrigin: "top center",
                width: `${100 / scaleRatio}%`,
                marginLeft: "auto",
                marginRight: "auto"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-0 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/hero/01.png",
                        alt: "Hero background",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 449,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 448,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 z-1 w-full transition-opacity duration-1000 ${bgFade ? "opacity-100" : "opacity-0"}`,
                    style: {
                        backgroundColor: backgroundOverlayEffects[prevBgOverlayIndex].color,
                        opacity: bgFade ? backgroundOverlayEffects[prevBgOverlayIndex].opacity : 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 459,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `absolute inset-0 z-1 w-full transition-opacity duration-1000 ${bgFade ? "opacity-0" : "opacity-100"}`,
                    style: {
                        backgroundColor: backgroundOverlayEffects[bgOverlayIndex].color,
                        opacity: bgFade ? 0 : backgroundOverlayEffects[bgOverlayIndex].opacity
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 472,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-20 -translate-x-1/2 left-1/2",
                    style: {
                        top: "25%",
                        left: "33%",
                        width: "832px",
                        height: "160px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                        pointerEvents: "none"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block whitespace-nowrap",
                        style: {
                            fontSize: "95px",
                            lineHeight: "160px",
                            fontWeight: 800,
                            color: "#FEF8EF",
                            fontFamily: "Noto Serif TC, serif",
                            width: "100%",
                            textAlign: "center"
                        },
                        children: t("title")
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 498,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 484,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 right-0 z-10 pointer-events-none",
                    style: {
                        top: "45%",
                        height: 0,
                        borderTop: `${2 * scaleRatio}px solid #FEF8EF`,
                        width: "100%",
                        opacity: 0.7
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 515,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-10 pointer-events-none",
                    style: {
                        top: "45%",
                        left: "5vw",
                        transform: "translateY(-50%)",
                        width: `${525 * scaleRatio}px`,
                        height: `${525 * scaleRatio}px`,
                        border: `${2.5 * scaleRatio}px solid #FEF8EF`,
                        borderRadius: "50%",
                        background: "transparent",
                        opacity: 0.7
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 527,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-30 flex flex-col space-y-4",
                    style: {
                        pointerEvents: "auto",
                        top: "90px",
                        right: "82px"
                    },
                    children: links.social.map((social, index)=>social.href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "transition-opacity hover:opacity-80",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: social.icon,
                                alt: "",
                                width: 40,
                                height: 40
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Hero.jsx",
                                lineNumber: 560,
                                columnNumber: 9
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 553,
                            columnNumber: 8
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: social.icon,
                            alt: "",
                            width: 30,
                            height: 30
                        }, index, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 568,
                            columnNumber: 8
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 543,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-20 flex flex-col items-start -translate-x-1/2 left-[40%]",
                    style: {
                        top: "calc(38% + 60px)",
                        width: "947px",
                        pointerEvents: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block whitespace-nowrap",
                            style: {
                                fontSize: "25px",
                                lineHeight: "36px",
                                fontWeight: 500,
                                color: "#FEF8EF",
                                fontFamily: "Noto Serif TC, serif",
                                textAlign: "start"
                            },
                            children: t("title2")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 588,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block mt-2 whitespace-nowrap",
                            style: {
                                fontSize: "25px",
                                lineHeight: "36px",
                                fontWeight: 500,
                                color: "#FEF8EF",
                                fontFamily: "Noto Serif TC, serif",
                                textAlign: "start"
                            },
                            children: t("subtitle1")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 601,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 580,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-20",
                    style: {
                        top: "calc(38%)",
                        right: "5%",
                        pointerEvents: "auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/",
                        className: "flex items-center justify-center transition-transform duration-200 hover:scale-105",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/風水妹/chart-button.png",
                            alt: t("cta"),
                            width: 400,
                            height: 150,
                            className: "cursor-pointer",
                            style: {
                                filter: "drop-shadow(0 8px 32px rgba(163, 177, 22, 0.22))"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Hero.jsx",
                            lineNumber: 629,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Hero.jsx",
                        lineNumber: 625,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 617,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute bottom-0 left-0 right-0 z-5",
                    style: {
                        height: "200px",
                        background: "linear-gradient(to bottom, transparent 0%, rgba(239, 239, 239, 0.3) 70%, rgba(239, 239, 239, 0.8) 100%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Hero.jsx",
                    lineNumber: 643,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Hero.jsx",
            lineNumber: 435,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/Hero.jsx",
        lineNumber: 434,
        columnNumber: 3
    }, this);
}
_s(Hero, "gUXPpsWfh6V7P+ZVXD6Jdo4iuY4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Accordion": (()=>Accordion),
    "AccordionContent": (()=>AccordionContent),
    "AccordionItem": (()=>AccordionItem),
    "AccordionTrigger": (()=>AccordionTrigger)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-accordion/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
function Accordion({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "accordion",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
_c = Accordion;
function AccordionItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "accordion-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c1 = AccordionItem;
function AccordionTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Header"], {
        className: "flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Trigger"], {
            "data-slot": "accordion-trigger",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180", className),
            ...props,
            children: [
                children,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/accordion.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c2 = AccordionTrigger;
function AccordionContent({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$accordion$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "accordion-content",
        className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pt-0 pb-4", className),
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ui/accordion.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/accordion.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
_c3 = AccordionContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Accordion");
__turbopack_context__.k.register(_c1, "AccordionItem");
__turbopack_context__.k.register(_c2, "AccordionTrigger");
__turbopack_context__.k.register(_c3, "AccordionContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/FAQ.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FAQ)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/accordion.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-client] (ecmascript) <export default as ChevronUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function FAQ() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.FAQ");
    const [showMore, setShowMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isPricePage = pathname.endsWith("/price");
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    if (isMobileLayout) {
        // Mobile layout - optimized for small screens
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "relative py-8 -mt-10 -mb-10",
            style: {
                background: "#EFEFEF",
                borderRadius: "30px",
                zIndex: 50,
                width: "100vw",
                marginTop: "-40px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-4 mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mb-6 font-extrabold text-center",
                        style: {
                            fontFamily: "Noto Serif TC, serif",
                            fontWeight: 800,
                            fontSize: "32px",
                            color: "#073E31"
                        },
                        children: "FAQ"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FAQ.jsx",
                        lineNumber: 35,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center max-w-full mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                type: "single",
                                collapsible: true,
                                className: "w-full",
                                defaultValue: "item-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item-1",
                                        className: "data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "font-normal",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#073E31"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#073E31"
                                                    },
                                                    children: t("q1")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 67,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 58,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                className: "pt-3 pb-0",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 300,
                                                    fontSize: "14px",
                                                    color: "#2E3933"
                                                },
                                                children: t("a1")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 79,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                        lineNumber: 54,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item-2",
                                        className: "data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "font-normal",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#073E31"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#073E31"
                                                    },
                                                    children: t("q2")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 105,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 96,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                className: "pt-3 pb-0",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 300,
                                                    fontSize: "14px",
                                                    color: "#2E3933"
                                                },
                                                children: t("a2")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 117,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                        lineNumber: 92,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                        value: "item-3",
                                        className: "data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                className: "font-normal",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 400,
                                                    fontSize: "16px",
                                                    color: "#073E31"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "16px",
                                                        color: "#073E31"
                                                    },
                                                    children: t("q3")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 143,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 134,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                className: "pt-3 pb-0",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 300,
                                                    fontSize: "14px",
                                                    color: "#2E3933"
                                                },
                                                children: t("a3")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 155,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                        lineNumber: 130,
                                        columnNumber: 8
                                    }, this),
                                    showMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            4,
                                            5,
                                            6,
                                            7,
                                            8
                                        ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                value: `item-${num}`,
                                                className: "data-[state=open]:bg-[#EFEFEF] py-4 px-4 data-[state=open]:mb-4 data-[state=closed]:pt-0 data-[state=open]:border-t-4 border-[#25826C]",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                        className: "font-normal",
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif",
                                                            fontWeight: 400,
                                                            fontSize: "16px",
                                                            color: "#073E31"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                fontFamily: "Noto Sans HK, sans-serif",
                                                                fontWeight: 400,
                                                                fontSize: "16px",
                                                                color: "#073E31"
                                                            },
                                                            children: t(`q${num}`)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                                            lineNumber: 187,
                                                            columnNumber: 13
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                        className: "pt-3 pb-0",
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif",
                                                            fontWeight: 300,
                                                            fontSize: "14px",
                                                            color: "#2E3933"
                                                        },
                                                        children: t(`a${num}`)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, `item-${num}`, true, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 172,
                                                columnNumber: 11
                                            }, this))
                                    }, void 0, false)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/FAQ.jsx",
                                lineNumber: 48,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    setShowMore(!showMore);
                                },
                                className: "flex items-center justify-center mt-4 text-center cursor-pointer",
                                style: {
                                    width: "140px",
                                    height: "40px",
                                    borderRadius: "20px",
                                    background: "#A3B116",
                                    color: "white",
                                    fontFamily: "Noto Sans HK, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "14px",
                                    border: "none"
                                },
                                children: showMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                            lineNumber: 236,
                                            columnNumber: 10
                                        }, this),
                                        t("closeMore")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                    lineNumber: 235,
                                    columnNumber: 9
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                            lineNumber: 241,
                                            columnNumber: 10
                                        }, this),
                                        t("showMore")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                    lineNumber: 240,
                                    columnNumber: 9
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/FAQ.jsx",
                                lineNumber: 217,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/FAQ.jsx",
                        lineNumber: 47,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FAQ.jsx",
                lineNumber: 34,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FAQ.jsx",
            lineNumber: 24,
            columnNumber: 4
        }, this);
    }
    // Desktop layout with responsive scaling
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100vw",
            overflow: "visible",
            position: "relative",
            zIndex: 50,
            marginTop: "-80px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: `${100 / scaleRatio}%`,
                transform: `scale(${scaleRatio})`,
                transformOrigin: "top center",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative -mt-20 -mb-20 md:py-20 py-15",
                style: {
                    background: "#EFEFEF",
                    borderRadius: "60px",
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container px-4 mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mb-5 font-extrabold text-center md:mb-9",
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 800,
                                fontSize: "56px",
                                color: "#073E31"
                            },
                            children: "FAQ"
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FAQ.jsx",
                            lineNumber: 282,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center max-w-6xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Accordion"], {
                                    type: "single",
                                    collapsible: true,
                                    className: "w-full",
                                    defaultValue: "item-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                            value: "item-1",
                                            className: "data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                    className: "font-normal",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "20px",
                                                        color: "#073E31"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif",
                                                            fontWeight: 400,
                                                            fontSize: "20px",
                                                            color: "#073E31"
                                                        },
                                                        children: t("q1")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                                        lineNumber: 315,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 305,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                    className: "pt-4 pb-0",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 300,
                                                        fontSize: "18px",
                                                        color: "#2E3933"
                                                    },
                                                    children: t("a1")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 327,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                            lineNumber: 301,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                            value: "item-2",
                                            className: "data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                    className: "font-normal",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "20px",
                                                        color: "#073E31"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif",
                                                            fontWeight: 400,
                                                            fontSize: "20px",
                                                            color: "#073E31"
                                                        },
                                                        children: t("q2")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                                        lineNumber: 355,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 345,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                    className: "pt-4 pb-0",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 300,
                                                        fontSize: "18px",
                                                        color: "#2E3933"
                                                    },
                                                    children: t("a2")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 367,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                            lineNumber: 341,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                            value: "item-3",
                                            className: "data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                    className: "font-normal",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 400,
                                                        fontSize: "20px",
                                                        color: "#073E31"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif",
                                                            fontWeight: 400,
                                                            fontSize: "20px",
                                                            color: "#073E31"
                                                        },
                                                        children: t("q3")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                                        lineNumber: 395,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 385,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                    className: "pt-4 pb-0",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 300,
                                                        fontSize: "18px",
                                                        color: "#2E3933"
                                                    },
                                                    children: t("a3")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 407,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                            lineNumber: 381,
                                            columnNumber: 9
                                        }, this),
                                        showMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                4,
                                                5,
                                                6,
                                                7,
                                                8
                                            ].map((num)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionItem"], {
                                                    value: `item-${num}`,
                                                    className: "data-[state=open]:bg-[#EFEFEF] py-7 px-6 data-[state=open]:mb-8 data-[state=closed]:pt-0 md:data-[state=open]:border-l-4 data-[state=open]:border-l-0 md:data-[state=open]:border-t-0 data-[state=open]:border-t-4 border-[#25826C]",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionTrigger"], {
                                                            className: "font-normal",
                                                            style: {
                                                                fontFamily: "Noto Sans HK, sans-serif",
                                                                fontWeight: 400,
                                                                fontSize: "20px",
                                                                color: "#073E31"
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                style: {
                                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                                    fontWeight: 400,
                                                                    fontSize: "20px",
                                                                    color: "#073E31"
                                                                },
                                                                children: t(`q${num}`)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                                lineNumber: 440,
                                                                columnNumber: 14
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                                            lineNumber: 430,
                                                            columnNumber: 13
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$accordion$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccordionContent"], {
                                                            className: "pt-4 pb-0",
                                                            style: {
                                                                fontFamily: "Noto Sans HK, sans-serif",
                                                                fontWeight: 300,
                                                                fontSize: "18px",
                                                                color: "#2E3933"
                                                            },
                                                            children: t(`a${num}`)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/FAQ.jsx",
                                                            lineNumber: 452,
                                                            columnNumber: 13
                                                        }, this)
                                                    ]
                                                }, `item-${num}`, true, {
                                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                                    lineNumber: 425,
                                                    columnNumber: 12
                                                }, this))
                                        }, void 0, false)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                    lineNumber: 295,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setShowMore(!showMore);
                                    },
                                    className: "flex items-center justify-center text-center cursor-pointer",
                                    style: {
                                        width: "168px",
                                        height: "50px",
                                        borderRadius: "20px",
                                        background: "#A3B116",
                                        color: "white",
                                        fontFamily: "Noto Sans HK, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        border: "none"
                                    },
                                    children: showMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 489,
                                                columnNumber: 11
                                            }, this),
                                            t("closeMore")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                        lineNumber: 488,
                                        columnNumber: 10
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 20
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/FAQ.jsx",
                                                lineNumber: 494,
                                                columnNumber: 11
                                            }, this),
                                            t("showMore")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/FAQ.jsx",
                                        lineNumber: 493,
                                        columnNumber: 10
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/FAQ.jsx",
                                    lineNumber: 470,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/FAQ.jsx",
                            lineNumber: 294,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/FAQ.jsx",
                    lineNumber: 281,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/FAQ.jsx",
                lineNumber: 273,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FAQ.jsx",
            lineNumber: 263,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/FAQ.jsx",
        lineNumber: 254,
        columnNumber: 3
    }, this);
}
_s(FAQ, "bxzd1vqDZV3bY0SGrWzn1ASNBzc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = FAQ;
var _c;
__turbopack_context__.k.register(_c, "FAQ");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowButton": (()=>ArrowButton),
    "CarouselControls": (()=>CarouselControls),
    "DotButton": (()=>DotButton),
    "useDotButton": (()=>useDotButton)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const useDotButton = (emblaApi)=>{
    _s();
    const [selectedIndex, setSelectedIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollSnaps, setScrollSnaps] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const onDotButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDotButton.useCallback[onDotButtonClick]": (index)=>{
            if (!emblaApi) return;
            emblaApi.scrollTo(index);
        }
    }["useDotButton.useCallback[onDotButtonClick]"], [
        emblaApi
    ]);
    const onPrevButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDotButton.useCallback[onPrevButtonClick]": ()=>{
            if (!emblaApi) return;
            emblaApi.scrollPrev();
        }
    }["useDotButton.useCallback[onPrevButtonClick]"], [
        emblaApi
    ]);
    const onNextButtonClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDotButton.useCallback[onNextButtonClick]": ()=>{
            if (!emblaApi) return;
            emblaApi.scrollNext();
        }
    }["useDotButton.useCallback[onNextButtonClick]"], [
        emblaApi
    ]);
    const onInit = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDotButton.useCallback[onInit]": (emblaApi)=>{
            setScrollSnaps(emblaApi.scrollSnapList());
        }
    }["useDotButton.useCallback[onInit]"], []);
    const onSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useDotButton.useCallback[onSelect]": (emblaApi)=>{
            setSelectedIndex(emblaApi.selectedScrollSnap());
        }
    }["useDotButton.useCallback[onSelect]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDotButton.useEffect": ()=>{
            if (!emblaApi) return;
            onInit(emblaApi);
            onSelect(emblaApi);
            emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
        }
    }["useDotButton.useEffect"], [
        emblaApi,
        onInit,
        onSelect
    ]);
    return {
        selectedIndex,
        scrollSnaps,
        onDotButtonClick,
        onPrevButtonClick,
        onNextButtonClick
    };
};
_s(useDotButton, "bOYIa/Nfh4pdwJAG/I7Ej7i4AtE=");
const DotButton = ({ selected, ...restProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: `relative rounded-full transition-colors duration-200 mx-1`,
        style: {
            width: "6px",
            height: "6px",
            backgroundColor: selected ? "#FFFFFF" : "rgba(255, 255, 255, 0.4)"
        },
        ...restProps
    }, void 0, false, {
        fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
        lineNumber: 55,
        columnNumber: 2
    }, this);
_c = DotButton;
const ArrowButton = ({ direction, ...restProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        className: "flex items-center justify-center transition-opacity duration-200 hover:opacity-70",
        ...restProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: `text-white ${direction === "down" ? "rotate-180" : ""}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M12 2L12 22M12 2L6 8M12 2L18 8",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
                lineNumber: 82,
                columnNumber: 4
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
            lineNumber: 73,
            columnNumber: 3
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
        lineNumber: 68,
        columnNumber: 2
    }, this);
_c1 = ArrowButton;
const CarouselControls = ({ selectedIndex, scrollSnaps, onDotButtonClick, onPrevButtonClick, onNextButtonClick })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowButton, {
                direction: "up",
                onClick: onPrevButtonClick
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
                lineNumber: 102,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-4",
                children: scrollSnaps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DotButton, {
                        selected: index === selectedIndex,
                        onClick: ()=>onDotButtonClick(index)
                    }, index, false, {
                        fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
                        lineNumber: 107,
                        columnNumber: 5
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
                lineNumber: 105,
                columnNumber: 3
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ArrowButton, {
                direction: "down",
                onClick: onNextButtonClick
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
                lineNumber: 116,
                columnNumber: 3
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx",
        lineNumber: 100,
        columnNumber: 2
    }, this);
_c2 = CarouselControls;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DotButton");
__turbopack_context__.k.register(_c1, "ArrowButton");
__turbopack_context__.k.register(_c2, "CarouselControls");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/embla-carousel-autoplay/src/components/Options.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "defaultOptions": (()=>defaultOptions)
});
const defaultOptions = {
    active: true,
    breakpoints: {},
    delay: 4000,
    jump: false,
    playOnInit: true,
    stopOnFocusIn: true,
    stopOnInteraction: true,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: null
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/embla-carousel-autoplay/src/components/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "getAutoplayRootNode": (()=>getAutoplayRootNode),
    "normalizeDelay": (()=>normalizeDelay)
});
function normalizeDelay(emblaApi, delay) {
    const scrollSnaps = emblaApi.scrollSnapList();
    if (typeof delay === 'number') {
        return scrollSnaps.map(()=>delay);
    }
    return delay(scrollSnaps, emblaApi);
}
function getAutoplayRootNode(emblaApi, rootNode) {
    const emblaRootNode = emblaApi.rootNode();
    return rootNode && rootNode(emblaRootNode) || emblaRootNode;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/embla-carousel-autoplay/src/components/Autoplay.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$Options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/embla-carousel-autoplay/src/components/Options.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/embla-carousel-autoplay/src/components/utils.ts [app-client] (ecmascript)");
;
;
function Autoplay(userOptions = {}) {
    let options;
    let emblaApi;
    let destroyed;
    let delay;
    let timerStartTime = null;
    let timerId = 0;
    let autoplayActive = false;
    let mouseIsOver = false;
    let playOnDocumentVisible = false;
    let jump = false;
    function init(emblaApiInstance, optionsHandler) {
        emblaApi = emblaApiInstance;
        const { mergeOptions, optionsAtMedia } = optionsHandler;
        const optionsBase = mergeOptions(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$Options$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultOptions"], Autoplay.globalOptions);
        const allOptions = mergeOptions(optionsBase, userOptions);
        options = optionsAtMedia(allOptions);
        if (emblaApi.scrollSnapList().length <= 1) return;
        jump = options.jump;
        destroyed = false;
        delay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["normalizeDelay"])(emblaApi, options.delay);
        const { eventStore, ownerDocument } = emblaApi.internalEngine();
        const isDraggable = !!emblaApi.internalEngine().options.watchDrag;
        const root = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAutoplayRootNode"])(emblaApi, options.rootNode);
        eventStore.add(ownerDocument, 'visibilitychange', visibilityChange);
        if (isDraggable) {
            emblaApi.on('pointerDown', pointerDown);
        }
        if (isDraggable && !options.stopOnInteraction) {
            emblaApi.on('pointerUp', pointerUp);
        }
        if (options.stopOnMouseEnter) {
            eventStore.add(root, 'mouseenter', mouseEnter);
        }
        if (options.stopOnMouseEnter && !options.stopOnInteraction) {
            eventStore.add(root, 'mouseleave', mouseLeave);
        }
        if (options.stopOnFocusIn) {
            emblaApi.on('slideFocusStart', stopAutoplay);
        }
        if (options.stopOnFocusIn && !options.stopOnInteraction) {
            eventStore.add(emblaApi.containerNode(), 'focusout', startAutoplay);
        }
        if (options.playOnInit) startAutoplay();
    }
    function destroy() {
        emblaApi.off('pointerDown', pointerDown).off('pointerUp', pointerUp).off('slideFocusStart', stopAutoplay);
        stopAutoplay();
        destroyed = true;
        autoplayActive = false;
    }
    function setTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = ownerWindow.setTimeout(next, delay[emblaApi.selectedScrollSnap()]);
        timerStartTime = new Date().getTime();
        emblaApi.emit('autoplay:timerset');
    }
    function clearTimer() {
        const { ownerWindow } = emblaApi.internalEngine();
        ownerWindow.clearTimeout(timerId);
        timerId = 0;
        timerStartTime = null;
        emblaApi.emit('autoplay:timerstopped');
    }
    function startAutoplay() {
        if (destroyed) return;
        if (documentIsHidden()) {
            playOnDocumentVisible = true;
            return;
        }
        if (!autoplayActive) emblaApi.emit('autoplay:play');
        setTimer();
        autoplayActive = true;
    }
    function stopAutoplay() {
        if (destroyed) return;
        if (autoplayActive) emblaApi.emit('autoplay:stop');
        clearTimer();
        autoplayActive = false;
    }
    function visibilityChange() {
        if (documentIsHidden()) {
            playOnDocumentVisible = autoplayActive;
            return stopAutoplay();
        }
        if (playOnDocumentVisible) startAutoplay();
    }
    function documentIsHidden() {
        const { ownerDocument } = emblaApi.internalEngine();
        return ownerDocument.visibilityState === 'hidden';
    }
    function pointerDown() {
        if (!mouseIsOver) stopAutoplay();
    }
    function pointerUp() {
        if (!mouseIsOver) startAutoplay();
    }
    function mouseEnter() {
        mouseIsOver = true;
        stopAutoplay();
    }
    function mouseLeave() {
        mouseIsOver = false;
        startAutoplay();
    }
    function play(jumpOverride) {
        if (typeof jumpOverride !== 'undefined') jump = jumpOverride;
        startAutoplay();
    }
    function stop() {
        if (autoplayActive) stopAutoplay();
    }
    function reset() {
        if (autoplayActive) startAutoplay();
    }
    function isPlaying() {
        return autoplayActive;
    }
    function next() {
        const { index } = emblaApi.internalEngine();
        const nextIndex = index.clone().add(1).get();
        const lastIndex = emblaApi.scrollSnapList().length - 1;
        const kill = options.stopOnLastSnap && nextIndex === lastIndex;
        if (emblaApi.canScrollNext()) {
            emblaApi.scrollNext(jump);
        } else {
            emblaApi.scrollTo(0, jump);
        }
        emblaApi.emit('autoplay:select');
        if (kill) return stopAutoplay();
        startAutoplay();
    }
    function timeUntilNext() {
        if (!timerStartTime) return null;
        const currentDelay = delay[emblaApi.selectedScrollSnap()];
        const timePastSinceStart = new Date().getTime() - timerStartTime;
        return currentDelay - timePastSinceStart;
    }
    const self = {
        name: 'autoplay',
        options: userOptions,
        init,
        destroy,
        play,
        stop,
        reset,
        isPlaying,
        timeUntilNext
    };
    return self;
}
_c = Autoplay;
Autoplay.globalOptions = undefined;
const __TURBOPACK__default__export__ = Autoplay;
var _c;
__turbopack_context__.k.register(_c, "Autoplay");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/emblaCarousel/index.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CommentsCarousel)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$EmblaCarouselDotButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/emblaCarousel/EmblaCarouselDotButton.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/embla-carousel-react/esm/embla-carousel-react.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$Autoplay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/embla-carousel-autoplay/src/components/Autoplay.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const slideData = [
    {
        img: "/images/hero/slide1.jpg",
        author: "Amanda",
        profileKey: "p1",
        commentKey: "c1"
    },
    {
        img: "/images/hero/slide2.jpg",
        author: "Mr & Mrs Cheng",
        profileKey: "p2",
        commentKey: "c2"
    },
    {
        img: "/images/hero/slide3.jpg",
        author: "Patrick & Sharon",
        profileKey: "p3",
        commentKey: "c3"
    },
    {
        img: "/images/hero/slide4.jpg",
        author: "Steven",
        profileKey: "p4",
        commentKey: "c4"
    },
    {
        img: "/images/hero/slide5.jpg",
        author: "Mr. & Mrs Wong",
        profileKey: "p5",
        commentKey: "c5"
    }
];
// Animation variants for vertical movement (cards only)
const cardVariants = {
    front: {
        y: 0,
        scale: 1,
        zIndex: 10,
        opacity: 1
    },
    back: {
        y: -80,
        scale: 0.95,
        zIndex: 5,
        opacity: 0.8
    },
    exit: {
        y: 80,
        scale: 0.9,
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
};
function CommentsCarousel() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.comments");
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    const [currentCardIndex, setCurrentCardIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Mobile carousel setup with partial view options
    const [emblaRef, emblaApi] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        loop: true,
        align: "center",
        containScroll: "trimSnaps",
        slidesToScroll: 1
    }, [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$embla$2d$carousel$2d$autoplay$2f$src$2f$components$2f$Autoplay$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
            playOnInit: true,
            delay: 4000
        })
    ]);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$EmblaCarouselDotButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDotButton"])(emblaApi);
    const ratings = [
        4.9,
        5.0,
        4.8,
        4.8,
        4.9
    ];
    // Auto animate cards every 4 seconds for desktop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentsCarousel.useEffect": ()=>{
            if (!isMobileLayout) {
                const interval = setInterval({
                    "CommentsCarousel.useEffect.interval": ()=>{
                        setCurrentCardIndex({
                            "CommentsCarousel.useEffect.interval": (prev)=>(prev + 1) % slideData.length
                        }["CommentsCarousel.useEffect.interval"]);
                    }
                }["CommentsCarousel.useEffect.interval"], 4000);
                return ({
                    "CommentsCarousel.useEffect": ()=>clearInterval(interval)
                })["CommentsCarousel.useEffect"];
            }
        }
    }["CommentsCarousel.useEffect"], [
        isMobileLayout
    ]);
    // Sync Embla carousel with state for mobile
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommentsCarousel.useEffect": ()=>{
            if (emblaApi && isMobileLayout) {
                const onSelect = {
                    "CommentsCarousel.useEffect.onSelect": ()=>{
                        setCurrentCardIndex(emblaApi.selectedScrollSnap());
                    }
                }["CommentsCarousel.useEffect.onSelect"];
                emblaApi.on("select", onSelect);
                return ({
                    "CommentsCarousel.useEffect": ()=>emblaApi.off("select", onSelect)
                })["CommentsCarousel.useEffect"];
            }
        }
    }["CommentsCarousel.useEffect"], [
        emblaApi,
        isMobileLayout
    ]);
    const getNextCardIndex = (currentIndex)=>{
        return (currentIndex + 1) % slideData.length;
    };
    // Mobile Layout - horizontal carousel with green background and side previews
    if (isMobileLayout) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4 py-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute z-0 ",
                        style: {
                            width: "600px",
                            height: "200px",
                            backgroundColor: "#374A37",
                            borderRadius: "15px",
                            top: "80%",
                            transform: "translate(-50%, -50%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                        lineNumber: 122,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 embla__viewport",
                        ref: emblaRef,
                        style: {
                            width: "100%",
                            height: "307px",
                            overflow: "visible"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "embla__container",
                            style: {
                                display: "flex",
                                height: "100%"
                            },
                            children: slideData.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "embla__slide",
                                    style: {
                                        flex: "0 0 70%",
                                        minWidth: 0,
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        padding: "0 10px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `flex flex-col px-4 py-6 bg-white shadow-lg rounded-xl transition-all duration-300 ${index === selectedIndex ? "scale-100 opacity-100" : "scale-90 opacity-70"}`,
                                        style: {
                                            width: "240px",
                                            maxWidth: "90%"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-medium text-[#111]",
                                                style: {
                                                    fontSize: index === selectedIndex ? "clamp(16px, 4vw, 18px)" : "clamp(14px, 3.5vw, 16px)"
                                                },
                                                children: slide.author
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 176,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#888888]",
                                                style: {
                                                    fontSize: index === selectedIndex ? "clamp(13px, 3.5vw, 14px)" : "clamp(11px, 3vw, 12px)"
                                                },
                                                children: t(slide.profileKey)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 187,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex gap-1",
                                                        children: Array.from({
                                                            length: 5
                                                        }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `relative ${index === selectedIndex ? "w-4 h-4" : "w-3 h-3"}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: "/images/hero/vector.png",
                                                                    fill: true,
                                                                    alt: ""
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                                    lineNumber: 211,
                                                                    columnNumber: 16
                                                                }, this)
                                                            }, idx, false, {
                                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                                lineNumber: 202,
                                                                columnNumber: 15
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                        lineNumber: 199,
                                                        columnNumber: 12
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#111] ml-2",
                                                        style: {
                                                            fontSize: index === selectedIndex ? "clamp(13px, 3.5vw, 14px)" : "clamp(11px, 3vw, 12px)"
                                                        },
                                                        children: [
                                                            "(",
                                                            ratings[index].toFixed(1),
                                                            ")"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                        lineNumber: 220,
                                                        columnNumber: 12
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 198,
                                                columnNumber: 11
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[#4A4A4A] leading-5 mt-3",
                                                style: {
                                                    fontSize: index === selectedIndex ? "clamp(12px, 3vw, 14px)" : "clamp(10px, 2.5vw, 12px)",
                                                    display: index === selectedIndex ? "block" : "-webkit-box",
                                                    WebkitLineClamp: index === selectedIndex ? "none" : 2,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: index === selectedIndex ? "visible" : "hidden"
                                                },
                                                children: t(slide.commentKey)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 232,
                                                columnNumber: 11
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 165,
                                        columnNumber: 10
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                    lineNumber: 152,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                            lineNumber: 144,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                        lineNumber: 135,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: scrollSnaps.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$EmblaCarouselDotButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DotButton"], {
                                    selected: index === selectedIndex,
                                    onClick: ()=>onDotButtonClick(index)
                                }, index, false, {
                                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                    lineNumber: 266,
                                    columnNumber: 9
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                            lineNumber: 264,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                        lineNumber: 263,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                lineNumber: 120,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
            lineNumber: 119,
            columnNumber: 4
        }, this);
    }
    // Desktop Layout - original with background
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex flex-col ml-20",
        style: {
            width: "1000px",
            height: "510px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 rounded-[60px]",
                style: {
                    width: "1000px",
                    height: "1110px",
                    zIndex: 1,
                    backgroundColor: "#374A37"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                lineNumber: 289,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute rounded-[60px] overflow-visible",
                style: {
                    width: "1200px",
                    height: "1300px",
                    zIndex: 2,
                    left: "-250px",
                    top: "-160px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/hero/carouselbg.png",
                    alt: "Carousel Background",
                    fill: true,
                    className: "object-cover rounded-[60px]",
                    style: {
                        transform: "scale(0.95)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                    lineNumber: 310,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                lineNumber: 300,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col justify-center mb-15 mt-100",
                style: {
                    width: "400px",
                    height: "1110px",
                    paddingLeft: "23px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        width: "320px",
                        height: "300px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: cardVariants,
                            initial: "back",
                            animate: "front",
                            exit: "exit",
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            className: "absolute",
                            style: {
                                width: "320px",
                                left: "-120px",
                                top: "30px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col px-6 py-8 bg-white shadow-lg rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-[#111] font-medium mt-1",
                                        children: slideData[currentCardIndex].author
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 357,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#888888] text-base",
                                        children: t(slideData[currentCardIndex].profileKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 360,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-5 h-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/images/hero/vector.png",
                                                            fill: true,
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                            lineNumber: 370,
                                                            columnNumber: 12
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                        lineNumber: 366,
                                                        columnNumber: 11
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 364,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#111] ml-2 text-base",
                                                children: [
                                                    "(",
                                                    ratings[currentCardIndex].toFixed(1),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 378,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 363,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#4A4A4A] leading-6 mt-3 text-base",
                                        children: t(slideData[currentCardIndex].commentKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 382,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                lineNumber: 356,
                                columnNumber: 7
                            }, this)
                        }, `current-${currentCardIndex}`, false, {
                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                            lineNumber: 339,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: cardVariants,
                            initial: "back",
                            animate: "back",
                            transition: {
                                duration: 0.6,
                                ease: "easeInOut"
                            },
                            className: "absolute",
                            style: {
                                width: "320px",
                                left: "0px",
                                top: "0px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col px-6 py-8 bg-white border border-gray-100 shadow-md rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl text-[#111] font-medium mt-1",
                                        children: slideData[getNextCardIndex(currentCardIndex)].author
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 406,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[#888888] text-base",
                                        children: t(slideData[getNextCardIndex(currentCardIndex)].profileKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 413,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center mt-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex",
                                                children: Array.from({
                                                    length: 5
                                                }).map((_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative w-5 h-5",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/images/hero/vector.png",
                                                            fill: true,
                                                            alt: ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                            lineNumber: 427,
                                                            columnNumber: 12
                                                        }, this)
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                        lineNumber: 423,
                                                        columnNumber: 11
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 421,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[#111] ml-2 text-base",
                                                children: [
                                                    "(",
                                                    ratings[getNextCardIndex(currentCardIndex)].toFixed(1),
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                                lineNumber: 435,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 420,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-[#4A4A4A] leading-6 mt-3 text-base",
                                        children: t(slideData[getNextCardIndex(currentCardIndex)].commentKey)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                        lineNumber: 443,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                                lineNumber: 405,
                                columnNumber: 7
                            }, this)
                        }, `next-${getNextCardIndex(currentCardIndex)}`, false, {
                            fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                            lineNumber: 389,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                    lineNumber: 331,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                lineNumber: 322,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30 flex flex-col items-center justify-center",
                style: {
                    width: "268px",
                    height: "1110px",
                    right: "5px"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$EmblaCarouselDotButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselControls"], {
                    selectedIndex: currentCardIndex,
                    scrollSnaps: slideData.map((_, index)=>index),
                    onDotButtonClick: setCurrentCardIndex,
                    onPrevButtonClick: ()=>setCurrentCardIndex((prev)=>prev === 0 ? slideData.length - 1 : prev - 1),
                    onNextButtonClick: ()=>setCurrentCardIndex((prev)=>(prev + 1) % slideData.length)
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                    lineNumber: 464,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
                lineNumber: 456,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/emblaCarousel/index.jsx",
        lineNumber: 281,
        columnNumber: 3
    }, this);
}
_s(CommentsCarousel, "7Jjtn7Flg4WzVgMUBaoIQLuEoRA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$embla$2d$carousel$2d$react$2f$esm$2f$embla$2d$carousel$2d$react$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$EmblaCarouselDotButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDotButton"]
    ];
});
_c = CommentsCarousel;
var _c;
__turbopack_context__.k.register(_c, "CommentsCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/Comments.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Comments)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/emblaCarousel/index.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Comments() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.comments");
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    if (isMobileLayout) {
        // Mobile layout - fully responsive, no overlapping
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full px-4 py-6 bg-transparent sm:px-6 sm:py-8",
            style: {
                fontFamily: "Noto Serif TC, serif"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mx-auto",
                style: {
                    maxWidth: "100%"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mx-auto overflow-hidden rounded-lg",
                    style: {
                        maxWidth: "min(90vw, 400px)",
                        aspectRatio: "4/5",
                        minHeight: "300px",
                        maxHeight: "350px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/home/Comments.jsx",
                        lineNumber: 30,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Comments.jsx",
                    lineNumber: 21,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/Comments.jsx",
                lineNumber: 19,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Comments.jsx",
            lineNumber: 14,
            columnNumber: 4
        }, this);
    }
    // Desktop layout - original with scaling
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-6 pb-6 overflow-visible bg-transparent sm:py-8 sm:pb-8 md:py-10 md:pb-10 lg:pb-30",
        style: {
            fontFamily: "Noto Serif TC, serif"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4 overflow-visible lg:px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end w-full overflow-visible",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-start overflow-visible",
                    style: {
                        width: "650px",
                        height: "1110px"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$emblaCarousel$2f$index$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/home/Comments.jsx",
                        lineNumber: 53,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Comments.jsx",
                    lineNumber: 46,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/Comments.jsx",
                lineNumber: 44,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Comments.jsx",
            lineNumber: 43,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/Comments.jsx",
        lineNumber: 39,
        columnNumber: 3
    }, this);
}
_s(Comments, "YIOxdtASDSr359XOiQhTntTLMOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = Comments;
var _c;
__turbopack_context__.k.register(_c, "Comments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/Features.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Features)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Features() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.features");
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    const features = [
        {
            title: t("title1"),
            description: t("subtitle1"),
            icon: "/images/hero/feature1.png"
        },
        {
            title: t("title2"),
            description: t("subtitle2"),
            icon: "/images/hero/feature2.png"
        },
        {
            title: t("title3"),
            description: t("subtitle3"),
            icon: "/images/hero/feature3.png"
        },
        {
            title: t("title4"),
            description: t("subtitle4"),
            icon: "/images/hero/feature4.png"
        }
    ];
    if (isMobileLayout) {
        // Mobile layout - optimized for small screens
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "w-full px-4 py-6 sm:px-6 sm:py-8",
            style: {
                fontFamily: "Noto Serif TC, serif"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 sm:mb-6",
                    style: {
                        width: "clamp(150px, 50vw, 200px)",
                        height: "2px",
                        backgroundColor: "#374A37"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Features.jsx",
                    lineNumber: 41,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-6 text-left sm:mb-8",
                    style: {
                        fontFamily: "Noto Serif TC, serif",
                        fontWeight: 800,
                        fontSize: "clamp(28px, 8vw, 36px)",
                        color: "#635D3B",
                        fontStyle: "normal",
                        lineHeight: "1.2"
                    },
                    children: t("title")
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Features.jsx",
                    lineNumber: 50,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-2 gap-4 my-6 sm:gap-6 sm:my-8",
                    children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-3 text-center transition-transform duration-200 rounded-lg bg-white/50 hover:scale-105 sm:p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center mb-3 sm:mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: feature.icon,
                                        alt: feature.title,
                                        width: 50,
                                        height: 50,
                                        className: "object-contain",
                                        style: {
                                            width: "clamp(32px, 8vw, 50px)",
                                            height: "clamp(32px, 8vw, 50px)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Features.jsx",
                                        lineNumber: 72,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Features.jsx",
                                    lineNumber: 71,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "mb-2 text-center",
                                    style: {
                                        fontFamily: "Acme, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "clamp(14px, 4vw, 18px)",
                                        color: "#000",
                                        fontStyle: "normal",
                                        lineHeight: "1.3"
                                    },
                                    children: feature.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Features.jsx",
                                    lineNumber: 84,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center",
                                    style: {
                                        fontFamily: "ABeeZee, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "clamp(11px, 3vw, 14px)",
                                        color: "#073E31",
                                        fontStyle: "normal",
                                        lineHeight: "1.4"
                                    },
                                    children: feature.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Features.jsx",
                                    lineNumber: 97,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/home/Features.jsx",
                            lineNumber: 67,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Features.jsx",
                    lineNumber: 65,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-start w-full mb-4 sm:mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "transition-colors duration-200 cursor-pointer hover:text-gray-600",
                        style: {
                            fontFamily: "Noto Sans HK, sans-serif",
                            fontWeight: 400,
                            fontSize: "clamp(16px, 4.5vw, 20px)",
                            color: "#000",
                            textDecoration: "underline",
                            fontStyle: "normal"
                        },
                        children: t("readMore")
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Features.jsx",
                        lineNumber: 116,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Features.jsx",
                    lineNumber: 115,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-start w-full gap-4 sm:gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.facebook.com/profile.php?id=61578389876952",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "transition-all duration-200 hover:opacity-80 hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/footer/Facebook.png",
                                alt: t("facebookAlt"),
                                width: 32,
                                height: 32,
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                style: {
                                    filter: "brightness(0) saturate(100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Features.jsx",
                                lineNumber: 139,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Features.jsx",
                            lineNumber: 133,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://www.instagram.com/harmoniq_fengshui/",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "transition-all duration-200 hover:opacity-80 hover:scale-110",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/images/footer/Instagram.png",
                                alt: t("instagramAlt"),
                                width: 32,
                                height: 32,
                                className: "w-6 h-6 sm:w-7 sm:h-7",
                                style: {
                                    filter: "brightness(0) saturate(100%)"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Features.jsx",
                                lineNumber: 156,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Features.jsx",
                            lineNumber: 150,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Features.jsx",
                    lineNumber: 132,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Features.jsx",
            lineNumber: 36,
            columnNumber: 4
        }, this);
    }
    // Desktop layout - original with scaling applied by parent container
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full p-15",
        style: {
            fontFamily: "Noto Serif TC, serif"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-18",
                style: {
                    width: "343px",
                    height: "2px",
                    backgroundColor: "#374A37"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/home/Features.jsx",
                lineNumber: 179,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-12 ml-10 text-6xl text-left",
                style: {
                    fontFamily: "Noto Serif TC, serif",
                    fontWeight: 800,
                    color: "#635D3B",
                    fontStyle: "normal"
                },
                children: t("title")
            }, void 0, false, {
                fileName: "[project]/src/components/home/Features.jsx",
                lineNumber: 188,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid w-full grid-cols-4 my-10",
                        children: features.map((feature, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: feature.icon,
                                        alt: feature.title,
                                        width: 45,
                                        height: 45,
                                        className: "object-contain mb-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Features.jsx",
                                        lineNumber: 208,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "mb-1 text-center",
                                        style: {
                                            fontFamily: "Acme, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "20px",
                                            color: "#000",
                                            fontStyle: "normal"
                                        },
                                        children: feature.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Features.jsx",
                                        lineNumber: 215,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-center",
                                        style: {
                                            fontFamily: "ABeeZee, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "15px",
                                            color: "#073E31",
                                            fontStyle: "normal"
                                        },
                                        children: feature.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Features.jsx",
                                        lineNumber: 227,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/src/components/home/Features.jsx",
                                lineNumber: 204,
                                columnNumber: 7
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Features.jsx",
                        lineNumber: 202,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-start w-full mb-7",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                fontFamily: "Noto Sans HK, sans-serif",
                                fontWeight: 400,
                                fontSize: "20px",
                                color: "#000",
                                textDecoration: "underline",
                                fontStyle: "normal"
                            },
                            children: t("readMore")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Features.jsx",
                            lineNumber: 245,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Features.jsx",
                        lineNumber: 244,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-start w-full gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/profile.php?id=61578389876952",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transition-opacity hover:opacity-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/footer/Facebook.png",
                                    alt: t("facebookAlt"),
                                    width: 32,
                                    height: 32,
                                    className: "w-10 h-10",
                                    style: {
                                        filter: "brightness(0) saturate(100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Features.jsx",
                                    lineNumber: 267,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Features.jsx",
                                lineNumber: 261,
                                columnNumber: 6
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/harmoniq_fengshui/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "transition-opacity hover:opacity-80",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/images/footer/Instagram.png",
                                    alt: t("instagramAlt"),
                                    width: 32,
                                    height: 32,
                                    className: "w-10 h-10",
                                    style: {
                                        filter: "brightness(0) saturate(100%)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Features.jsx",
                                    lineNumber: 284,
                                    columnNumber: 7
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Features.jsx",
                                lineNumber: 278,
                                columnNumber: 6
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/Features.jsx",
                        lineNumber: 260,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Features.jsx",
                lineNumber: 201,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/Features.jsx",
        lineNumber: 174,
        columnNumber: 3
    }, this);
}
_s(Features, "YIOxdtASDSr359XOiQhTntTLMOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = Features;
var _c;
__turbopack_context__.k.register(_c, "Features");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/ImageCarousel.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/i18n/navigation.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const ImageCarousel = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.carousel");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [divider, setDivider] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0.5);
    const [dragging, setDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    // Images for before/after effect
    const beforeImage = "/images/hero/before.png";
    const afterImage = "/images/hero/after.png";
    // Handle dragging the divider
    const handleDrag = (e)=>{
        if (!dragging) return;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        let x = clientX - rect.left;
        let percent = x / rect.width;
        if (percent < 0) percent = 0;
        if (percent > 1) percent = 1;
        setDivider(percent);
    };
    const stopDrag = ()=>setDragging(false);
    // Responsive dimensions (scaled from MacBook Air 13" baseline)
    const containerWidth = isMobileLayout ? 350 : 1063;
    const containerHeight = isMobileLayout ? 250 : 717;
    const wrapperWidth = isMobileLayout ? "100%" : 1650;
    const wrapperHeight = isMobileLayout ? 400 : 717;
    const buttonWidth = isMobileLayout ? 280 : 349;
    const buttonHeight = isMobileLayout ? 60 : 120;
    const buttonFontSize = isMobileLayout ? 16 : 28;
    // Mobile Layout
    if (isMobileLayout) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center w-full px-4 py-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: containerRef,
                        className: "relative mb-8 overflow-hidden rounded-lg shadow-lg",
                        style: {
                            width: `${containerWidth}px`,
                            height: `${containerHeight}px`,
                            userSelect: "none",
                            background: "#222"
                        },
                        onMouseMove: handleDrag,
                        onMouseUp: stopDrag,
                        onMouseLeave: stopDrag,
                        onTouchMove: handleDrag,
                        onTouchEnd: stopDrag,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: afterImage,
                                alt: "After",
                                width: containerWidth,
                                height: containerHeight,
                                className: "absolute top-0 left-0 object-cover w-full h-full",
                                style: {
                                    zIndex: 0
                                },
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 64,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: beforeImage,
                                alt: "Before",
                                width: containerWidth,
                                height: containerHeight,
                                className: "absolute top-0 left-0 object-cover w-full h-full",
                                style: {
                                    zIndex: 1,
                                    clipPath: `inset(0 0 0 ${divider * 100}%)`,
                                    transition: dragging ? "none" : "clip-path 0.4s cubic-bezier(.4,2,.6,1)"
                                },
                                draggable: false
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 75,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: "absolute",
                                    left: `calc(${divider * 100}% - 15px)`,
                                    top: 0,
                                    height: "100%",
                                    width: 30,
                                    zIndex: 2,
                                    cursor: "ew-resize",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    background: "none"
                                },
                                onMouseDown: ()=>setDragging(true),
                                onTouchStart: ()=>setDragging(true),
                                tabIndex: 0,
                                "aria-label": t("dragLabel"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 2,
                                            height: "100%",
                                            background: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1), rgba(255,255,255,0.8))",
                                            borderRadius: 2,
                                            boxShadow: "0 0 10px 2px rgba(0,0,0,0.3)"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                        lineNumber: 112,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            background: "#D2E609",
                                            borderRadius: "50%",
                                            width: 35,
                                            height: 35,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            boxShadow: "0 4px 15px rgba(0,0,0,0.25), inset 0 1px 3px rgba(255,255,255,0.3)",
                                            border: "2px solid #374A37",
                                            cursor: "ew-resize",
                                            transition: "all 0.2s ease"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    left: "30%",
                                                    width: 0,
                                                    height: 0,
                                                    borderTop: "3px solid transparent",
                                                    borderBottom: "3px solid transparent",
                                                    borderRight: "4px solid black"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                                lineNumber: 145,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    position: "absolute",
                                                    right: "30%",
                                                    width: 0,
                                                    height: 0,
                                                    borderTop: "3px solid transparent",
                                                    borderBottom: "3px solid transparent",
                                                    borderLeft: "4px solid black"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                                lineNumber: 158,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                        lineNumber: 124,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 92,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-10 px-3 py-1 text-white bg-black bg-opacity-50 rounded top-4 left-4",
                                style: {
                                    fontSize: "12px"
                                },
                                children: t("afterLabel")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 173,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute z-10 px-3 py-1 text-white bg-black bg-opacity-50 rounded top-4 right-4",
                                style: {
                                    fontSize: "12px"
                                },
                                children: t("beforeLabel")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 179,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/ImageCarousel.jsx",
                        lineNumber: 48,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/price",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "absolute z-20 flex items-center justify-center transition-all duration-300 hover:opacity-90",
                            style: {
                                width: "150px",
                                height: "40px",
                                backgroundColor: "#A3B116",
                                borderRadius: "1000px",
                                border: "none",
                                cursor: "pointer",
                                left: "-30px",
                                bottom: "-10px",
                                transform: "translateY(-32px)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "Noto Serif TC, serif",
                                    fontWeight: 800,
                                    fontStyle: "normal",
                                    fontSize: "12px",
                                    color: "white",
                                    textAlign: "center"
                                },
                                children: t("buttonText")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 203,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 189,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ImageCarousel.jsx",
                        lineNumber: 188,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                lineNumber: 47,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ImageCarousel.jsx",
            lineNumber: 45,
            columnNumber: 4
        }, this);
    }
    // Desktop Layout (unchanged)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative z-50 flex flex-col items-start w-full overflow-visible",
        style: {
            marginLeft: "20px",
            paddingBottom: "360px",
            marginTop: "-300px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative z-50 overflow-visible",
            style: {
                width: `${wrapperWidth}px`,
                height: `${wrapperHeight}px`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute z-60",
                    style: {
                        left: "17px",
                        top: "calc(50% + 350px)"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$i18n$2f$navigation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"], {
                        href: "/price",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center justify-center transition-all duration-300 hover:opacity-90",
                            style: {
                                width: `${buttonWidth}px`,
                                height: `${buttonHeight}px`,
                                backgroundColor: "#A3B116",
                                borderRadius: "1000px",
                                border: "none",
                                cursor: "pointer"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontFamily: "Noto Serif TC, serif",
                                    fontWeight: 800,
                                    fontStyle: "normal",
                                    fontSize: `${buttonFontSize}px`,
                                    color: "white",
                                    textAlign: "center"
                                },
                                children: t("buttonText")
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                lineNumber: 260,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 249,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ImageCarousel.jsx",
                        lineNumber: 248,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ImageCarousel.jsx",
                    lineNumber: 241,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: containerRef,
                    className: "absolute z-50 overflow-hidden rounded-lg shadow-lg",
                    style: {
                        left: "134px",
                        top: "80px",
                        width: `${containerWidth}px`,
                        height: `${containerHeight}px`,
                        userSelect: "none",
                        background: "#222"
                    },
                    onMouseMove: handleDrag,
                    onMouseUp: stopDrag,
                    onMouseLeave: stopDrag,
                    onTouchMove: handleDrag,
                    onTouchEnd: stopDrag,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: afterImage,
                            alt: "After",
                            width: containerWidth,
                            height: containerHeight,
                            className: "absolute top-0 left-0 object-cover w-full h-full",
                            style: {
                                zIndex: 0
                            },
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 295,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: beforeImage,
                            alt: "Before",
                            width: containerWidth,
                            height: containerHeight,
                            className: "absolute top-0 left-0 object-cover w-full h-full",
                            style: {
                                zIndex: 1,
                                clipPath: `inset(0 0 0 ${divider * 100}%)`,
                                transition: dragging ? "none" : "clip-path 0.4s cubic-bezier(.4,2,.6,1)"
                            },
                            draggable: false
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 306,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                position: "absolute",
                                left: `calc(${divider * 100}% - 20px)`,
                                top: 0,
                                height: "100%",
                                width: 40,
                                zIndex: 2,
                                cursor: "ew-resize",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                background: "none"
                            },
                            onMouseDown: ()=>setDragging(true),
                            onTouchStart: ()=>setDragging(true),
                            tabIndex: 0,
                            "aria-label": t("dragLabel"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: 3,
                                        height: "100%",
                                        background: "linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1), rgba(255,255,255,0.8))",
                                        borderRadius: 2,
                                        boxShadow: "0 0 10px 2px rgba(0,0,0,0.3)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                    lineNumber: 343,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        background: "#D2E609",
                                        borderRadius: "50%",
                                        width: 50,
                                        height: 50,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        boxShadow: "0 4px 15px rgba(0,0,0,0.25), inset 0 1px 3px rgba(255,255,255,0.3)",
                                        border: "3px solid #374A37",
                                        cursor: "ew-resize",
                                        transition: "all 0.2s ease"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.target.style.transform = "translate(-50%, -50%) scale(1.1)";
                                        e.target.style.boxShadow = "0 6px 20px rgba(0,0,0,0.35), inset 0 1px 3px rgba(255,255,255,0.3)";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.target.style.transform = "translate(-50%, -50%) scale(1)";
                                        e.target.style.boxShadow = "0 4px 15px rgba(0,0,0,0.25), inset 0 1px 3px rgba(255,255,255,0.3)";
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                left: "30%",
                                                width: 0,
                                                height: 0,
                                                borderTop: "4px solid transparent",
                                                borderBottom: "4px solid transparent",
                                                borderRight: "6px solid black"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                            lineNumber: 388,
                                            columnNumber: 8
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                position: "absolute",
                                                right: "30%",
                                                width: 0,
                                                height: 0,
                                                borderTop: "4px solid transparent",
                                                borderBottom: "4px solid transparent",
                                                borderLeft: "6px solid black"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                            lineNumber: 401,
                                            columnNumber: 8
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/ImageCarousel.jsx",
                                    lineNumber: 355,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 323,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute z-10 px-3 py-1 text-white bg-black bg-opacity-50 rounded top-4 left-4",
                            style: {
                                fontSize: "14px"
                            },
                            children: t("afterLabel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 416,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute z-10 px-3 py-1 text-white bg-black bg-opacity-50 rounded top-4 right-4",
                            style: {
                                fontSize: "14px"
                            },
                            children: t("beforeLabel")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 422,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/ImageCarousel.jsx",
                    lineNumber: 277,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute flex flex-col items-end justify-end z-60",
                    style: {
                        left: "700px",
                        top: "90%",
                        transform: "translateY(-50%)",
                        width: "700px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 900,
                                fontSize: "54px",
                                color: "#A3B116",
                                marginBottom: "20px",
                                textAlign: "left",
                                whiteSpace: "nowrap"
                            },
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 441,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                width: "700px",
                                height: "0px",
                                borderTop: "1px solid green",
                                marginBottom: "40px"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 456,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "Noto Sans HK, sans-serif",
                                fontWeight: 400,
                                fontSize: "22px",
                                color: "#A3B116",
                                marginBottom: "20px",
                                textAlign: "left",
                                maxWidth: "600px",
                                lineHeight: "0.5"
                            },
                            children: t("subtitle1")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 466,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "Noto Sans HK, sans-serif",
                                fontWeight: 400,
                                fontSize: "22px",
                                color: "#A3B116",
                                marginBottom: "0",
                                textAlign: "left",
                                maxWidth: "400px",
                                lineHeight: "1.4"
                            },
                            children: t("subtitle2")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ImageCarousel.jsx",
                            lineNumber: 482,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/ImageCarousel.jsx",
                    lineNumber: 431,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ImageCarousel.jsx",
            lineNumber: 233,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/ImageCarousel.jsx",
        lineNumber: 224,
        columnNumber: 3
    }, this);
};
_s(ImageCarousel, "zU1R7hOYTp6yQittkPq83VDhspA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = ImageCarousel;
const __TURBOPACK__default__export__ = ImageCarousel;
var _c;
__turbopack_context__.k.register(_c, "ImageCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/FeatureV2.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Comments$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/Comments.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/Features.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ImageCarousel$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ImageCarousel.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const FeatureV2 = ()=>{
    _s();
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    // MOBILE LAYOUT
    if (isMobileLayout) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col w-full bg-[#EFEFEF] min-h-screen px-4 py-6",
            style: {
                fontFamily: "Noto Serif TC, serif",
                maxWidth: "100vw",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 w-full mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/home/FeatureV2.jsx",
                        lineNumber: 23,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeatureV2.jsx",
                    lineNumber: 22,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0 w-full mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Comments$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/components/home/FeatureV2.jsx",
                        lineNumber: 28,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/FeatureV2.jsx",
                    lineNumber: 27,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/FeatureV2.jsx",
            lineNumber: 13,
            columnNumber: 4
        }, this);
    }
    // DESKTOP LAYOUT
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100vw",
            overflow: "visible",
            position: "relative",
            zIndex: 30
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#EFEFEF] overflow-visible 0",
            style: {
                fontFamily: "Noto Serif TC, serif",
                transform: `scale(${scaleRatio})`,
                transformOrigin: "top center",
                width: `${100 / scaleRatio}%`,
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex w-full overflow-visible",
                style: {
                    flexDirection: "row",
                    minHeight: "1200px",
                    paddingTop: "100px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 flex items-start justify-center overflow-visible",
                        style: {
                            flex: "1",
                            width: "auto",
                            paddingTop: "70px"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Features$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/home/FeatureV2.jsx",
                            lineNumber: 79,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeatureV2.jsx",
                        lineNumber: 71,
                        columnNumber: 6
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-20 flex items-start justify-end overflow-visible",
                        style: {
                            flex: "1",
                            width: "auto",
                            paddingTop: "0"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            style: {
                                marginLeft: "-200px",
                                width: "100%"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Comments$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/components/home/FeatureV2.jsx",
                                lineNumber: 98,
                                columnNumber: 8
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/FeatureV2.jsx",
                            lineNumber: 91,
                            columnNumber: 7
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/FeatureV2.jsx",
                        lineNumber: 83,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/FeatureV2.jsx",
                lineNumber: 62,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/FeatureV2.jsx",
            lineNumber: 49,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/FeatureV2.jsx",
        lineNumber: 41,
        columnNumber: 3
    }, this);
};
_s(FeatureV2, "/mqTOSQj+9v2uBSuxtl2yraZyw4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = FeatureV2;
const __TURBOPACK__default__export__ = FeatureV2;
var _c;
__turbopack_context__.k.register(_c, "FeatureV2");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/free/theory.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Theory)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Theory({ bgColor }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("theory");
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    if (isMobileLayout) {
        // Mobile layout - completely different structure
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "flex flex-col items-center justify-center p-6",
            style: {
                width: "100%",
                background: "rgba(232, 226, 218, 0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "20px",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 900,
                                fontSize: "28px",
                                color: "#E8E2DA",
                                fontStyle: "normal",
                                letterSpacing: "0.03em",
                                lineHeight: "1.2",
                                marginBottom: "8px"
                            },
                            children: t("title1")
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 26,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 900,
                                fontSize: "28px",
                                color: "#E8E2DA",
                                fontStyle: "normal",
                                letterSpacing: "0.03em",
                                lineHeight: "1.2"
                            },
                            children: t("title2")
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 40,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 25,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontFamily: "ABeeZee, sans-serif",
                            fontWeight: 400,
                            fontSize: "16px",
                            color: "#E8E2DA",
                            fontStyle: "normal",
                            textAlign: "center",
                            lineHeight: "1.4"
                        },
                        children: t("description")
                    }, void 0, false, {
                        fileName: "[project]/src/components/free/theory.jsx",
                        lineNumber: 57,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 56,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid w-full grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-4 rounded-lg",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#E8E2DA",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "32px",
                                        height: "32px",
                                        marginBottom: "8px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/report/theory-1.png",
                                        alt: "",
                                        width: 24,
                                        height: 24,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 125,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 112,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "DM Sans, sans-serif",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#374A37",
                                        margin: "0 0 8px 0",
                                        textAlign: "center"
                                    },
                                    children: t("cards.imageRecognition.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 133,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Noto Sans HK, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "11px",
                                        color: "#374A37",
                                        textAlign: "center",
                                        lineHeight: "1.3"
                                    },
                                    children: t("cards.imageRecognition.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 145,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 105,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-4 rounded-lg",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#E8E2DA",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "32px",
                                        height: "32px",
                                        marginBottom: "8px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/report/theory-2.png",
                                        alt: "",
                                        width: 24,
                                        height: 24,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 180,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 167,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "DM Sans, sans-serif",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#374A37",
                                        margin: "0 0 8px 0",
                                        textAlign: "center"
                                    },
                                    children: t("cards.knowledgeBase.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 188,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Noto Sans HK, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "11px",
                                        color: "#374A37",
                                        textAlign: "center",
                                        lineHeight: "1.3"
                                    },
                                    children: t("cards.knowledgeBase.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 200,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 160,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-4 rounded-lg",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#E8E2DA",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "32px",
                                        height: "32px",
                                        marginBottom: "8px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/report/theory-3.png",
                                        alt: "",
                                        width: 24,
                                        height: 24,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 235,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 222,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "DM Sans, sans-serif",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#374A37",
                                        margin: "0 0 8px 0",
                                        textAlign: "center"
                                    },
                                    children: t("cards.energyFlow.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 243,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Noto Sans HK, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "11px",
                                        color: "#374A37",
                                        textAlign: "center",
                                        lineHeight: "1.3"
                                    },
                                    children: t("cards.energyFlow.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 255,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 215,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center p-4 rounded-lg",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: "#E8E2DA",
                                        borderRadius: "8px",
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: "32px",
                                        height: "32px",
                                        marginBottom: "8px"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/report/theory-4.png",
                                        alt: "",
                                        width: 24,
                                        height: 24,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 290,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 277,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    style: {
                                        fontFamily: "DM Sans, sans-serif",
                                        fontWeight: 600,
                                        fontSize: "14px",
                                        color: "#374A37",
                                        margin: "0 0 8px 0",
                                        textAlign: "center"
                                    },
                                    children: t("cards.personalizedAdvice.title")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 298,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontFamily: "Noto Sans HK, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "11px",
                                        color: "#374A37",
                                        textAlign: "center",
                                        lineHeight: "1.3"
                                    },
                                    children: t("cards.personalizedAdvice.description")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 310,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 270,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 103,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/free/theory.jsx",
            lineNumber: 13,
            columnNumber: 4
        }, this);
    }
    // Desktop layout - original MacBook Air 13" dimensions, scaled by parent container
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex items-center justify-center",
        style: {
            position: "relative",
            width: "1487px",
            height: "1085px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative flex flex-col items-center justify-center",
            style: {
                width: "1487px",
                height: "855px",
                background: "rgba(232, 226, 218, 0.25)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                borderRadius: "40px 0 0 40px",
                overflow: "hidden"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row w-full px-20 pb-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start",
                            style: {
                                width: "35%"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "Noto Serif TC, serif",
                                        fontWeight: 900,
                                        fontSize: "40px",
                                        color: "#E8E2DA",
                                        fontStyle: "normal",
                                        letterSpacing: "0.03em",
                                        lineHeight: "1.2"
                                    },
                                    children: t("title1")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 358,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontFamily: "Noto Serif TC, serif",
                                        fontWeight: 900,
                                        fontSize: "40px",
                                        color: "#E8E2DA",
                                        fontStyle: "normal",
                                        letterSpacing: "0.03em",
                                        lineHeight: "1.2"
                                    },
                                    children: t("title2")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 371,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 354,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-start ml-10",
                            style: {
                                width: "65%"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "390px",
                                        height: "125px",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: "ABeeZee, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "20px",
                                            color: "#E8E2DA",
                                            fontStyle: "normal"
                                        },
                                        children: t("description")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 429,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 420,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "983px",
                                        height: "2px",
                                        backgroundColor: "#888365",
                                        marginTop: "16px"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/free/theory.jsx",
                                    lineNumber: 443,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 416,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 352,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        left: "58%",
                        transform: "translateX(-50%)",
                        bottom: "170px",
                        width: "1242px",
                        height: "182px",
                        background: "#A3B116",
                        zIndex: 0
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 455,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "flex flex-col items-stretch justify-center w-full gap-4 px-16 text-left md:flex-row sm:gap-6 md:gap-8",
                    style: {
                        position: "relative",
                        zIndex: 1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#E8E2DA",
                                                    borderRadius: "8px",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "40px",
                                                    height: "40px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain",
                                                    loading: "lazy",
                                                    width: 40,
                                                    height: 40.9,
                                                    sizes: "100vw",
                                                    alt: "",
                                                    src: "/images/report/theory-1.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 495,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 483,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "DM Sans, sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "24px",
                                                        color: "#374A37",
                                                        margin: 0
                                                    },
                                                    children: t("cards.imageRecognition.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 506,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 505,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 482,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "Noto Sans HK, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "13px",
                                            color: "#374A37",
                                            marginTop: "8px"
                                        },
                                        children: t("cards.imageRecognition.description")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 519,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/free/theory.jsx",
                                lineNumber: 481,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 474,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#E8E2DA",
                                                    borderRadius: "8px",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "40px",
                                                    height: "40px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain",
                                                    loading: "lazy",
                                                    width: 40,
                                                    height: 40.9,
                                                    sizes: "100vw",
                                                    alt: "",
                                                    src: "/images/report/theory-2.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 543,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "DM Sans, sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "24px",
                                                        color: "#374A37",
                                                        margin: 0
                                                    },
                                                    children: t("cards.knowledgeBase.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 565,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 542,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "Noto Sans HK, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "13px",
                                            color: "#374A37",
                                            marginTop: "8px"
                                        },
                                        children: t("cards.knowledgeBase.description")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 579,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/free/theory.jsx",
                                lineNumber: 541,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 534,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center mb-4 md:mb-0 p-4 sm:p-6",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-60 h-[170px] sm:h-[180px] md:h-[211px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#E8E2DA",
                                                    borderRadius: "8px",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "40px",
                                                    height: "40px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain",
                                                    loading: "lazy",
                                                    width: 40,
                                                    height: 40.9,
                                                    sizes: "100vw",
                                                    alt: "",
                                                    src: "/images/report/theory-3.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 615,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 603,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "DM Sans, sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "24px",
                                                        color: "#374A37",
                                                        margin: 0
                                                    },
                                                    children: t("cards.energyFlow.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 626,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 625,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 602,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "Noto Sans HK, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "13px",
                                            color: "#374A37",
                                            marginTop: "8px"
                                        },
                                        children: t("cards.energyFlow.description")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 639,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/free/theory.jsx",
                                lineNumber: 601,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 594,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full md:w-72 rounded-[10px] box-border flex flex-col items-center justify-center p-4 sm:p-6",
                            style: {
                                background: "#F5F5F5",
                                border: "1px solid #25826c"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full md:w-60 h-[170px] sm:h-[180px] md:h-[209px] flex flex-col items-start justify-start gap-4 sm:gap-[11px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full md:w-[231px] flex flex-col items-start justify-start gap-4 sm:gap-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: "#E8E2DA",
                                                    borderRadius: "8px",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    width: "40px",
                                                    height: "40px"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "w-8 h-8 sm:w-10 sm:h-[40.9px] object-contain",
                                                    loading: "lazy",
                                                    width: 40,
                                                    height: 40.9,
                                                    sizes: "100vw",
                                                    alt: "",
                                                    src: "/images/report/theory-4.png"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 675,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 663,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    style: {
                                                        fontFamily: "DM Sans, sans-serif",
                                                        fontWeight: 600,
                                                        fontSize: "24px",
                                                        color: "#374A37",
                                                        margin: 0
                                                    },
                                                    children: t("cards.personalizedAdvice.title")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/free/theory.jsx",
                                                    lineNumber: 686,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/free/theory.jsx",
                                                lineNumber: 685,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 662,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontFamily: "Noto Sans HK, sans-serif",
                                            fontWeight: 400,
                                            fontSize: "13px",
                                            color: "#374A37",
                                            marginTop: "8px"
                                        },
                                        children: t("cards.personalizedAdvice.description")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/free/theory.jsx",
                                        lineNumber: 699,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/free/theory.jsx",
                                lineNumber: 661,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/free/theory.jsx",
                            lineNumber: 654,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/free/theory.jsx",
                    lineNumber: 469,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/free/theory.jsx",
            lineNumber: 339,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/free/theory.jsx",
        lineNumber: 330,
        columnNumber: 3
    }, this);
}
_s(Theory, "YIOxdtASDSr359XOiQhTntTLMOk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = Theory;
var _c;
__turbopack_context__.k.register(_c, "Theory");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/Tips.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tips)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Tips({ onHeightChange }) {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.tips");
    const [activeTip, setActiveTip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const tipsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    const handleTipClick = (index)=>{
        if (activeTip === index) {
            // Close the tip
            setActiveTip(null);
        } else {
            // Open the tip
            setActiveTip(index);
        }
    };
    const closeTip = ()=>{
        setActiveTip(null);
    };
    // Report height changes to parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Tips.useEffect": ()=>{
            if (tipsRef.current && onHeightChange) {
                const observer = new ResizeObserver({
                    "Tips.useEffect": (entries)=>{
                        for (const entry of entries){
                            onHeightChange(entry.contentRect.height);
                        }
                    }
                }["Tips.useEffect"]);
                observer.observe(tipsRef.current);
                return ({
                    "Tips.useEffect": ()=>observer.disconnect()
                })["Tips.useEffect"];
            }
        }
    }["Tips.useEffect"], [
        onHeightChange
    ]);
    if (isMobileLayout) {
        // Mobile layout
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: tipsRef,
            className: "flex flex-col items-center justify-center w-full px-4 py-8",
            style: {
                background: "transparent",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 900,
                                fontStyle: "normal",
                                fontSize: "36px",
                                color: "#E8E2DA",
                                lineHeight: "1.1",
                                textAlign: "center"
                            },
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 50,
                            columnNumber: 6
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "Noto Sans HK, sans-serif",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "16px",
                                color: "#E8E2DA",
                                lineHeight: "1.6",
                                textAlign: "center",
                                marginTop: "16px"
                            },
                            children: [
                                t("description.line1"),
                                " ",
                                t("description.line2")
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 63,
                            columnNumber: 6
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/home/Tips.jsx",
                    lineNumber: 49,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full",
                    children: Array.from({
                        length: 6
                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mb-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-between px-4 py-4 transition-all duration-200 cursor-pointer hover:bg-white hover:bg-opacity-5",
                                    style: {
                                        borderTop: "1px solid #FFFFFF",
                                        borderBottom: "1px solid #FFFFFF",
                                        background: "transparent"
                                    },
                                    onClick: ()=>handleTipClick(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "Noto Sans HK, sans-serif",
                                                fontWeight: 300,
                                                fontSize: "18px",
                                                color: "#FFFFFF"
                                            },
                                            children: t(`tip${index + 1}`) || `Tip ${index + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 92,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "100px",
                                                background: "rgba(255,255,255,0.3)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "all 0.3s ease",
                                                transform: activeTip === index ? "rotate(180deg)" : "rotate(0deg)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: "8px solid transparent",
                                                    borderRight: "8px solid transparent",
                                                    borderTop: "12px solid #FFFFFF",
                                                    transition: "all 0.3s ease"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Tips.jsx",
                                                lineNumber: 119,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 103,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 83,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full overflow-hidden",
                                    style: {
                                        maxHeight: activeTip === index ? "400px" : "0px",
                                        transition: "max-height 0.7s ease-in-out",
                                        background: "transparent"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center w-full",
                                        style: {
                                            transform: activeTip === index ? "translateY(0px)" : "translateY(-30px)",
                                            opacity: activeTip === index ? 1 : 0,
                                            transition: "all 0.7s ease-out",
                                            background: "transparent",
                                            padding: "16px"
                                        },
                                        children: activeTip === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `/images/tips/${activeTip + 1}.png`,
                                                    alt: t(`tip${activeTip + 1}`) || `Tip ${activeTip + 1}`,
                                                    width: 300,
                                                    height: 200,
                                                    className: "w-full rounded-lg shadow-xl",
                                                    style: {
                                                        objectFit: "contain",
                                                        background: "transparent",
                                                        display: "block"
                                                    },
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Tips.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        closeTip();
                                                    },
                                                    className: "absolute p-2 transition-all duration-200 rounded-full shadow-lg top-2 right-2 bg-black/70 hover:bg-black/90",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M6 18L18 6M6 6l12 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/Tips.jsx",
                                                            lineNumber: 188,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Tips.jsx",
                                                        lineNumber: 182,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Tips.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 157,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Tips.jsx",
                                        lineNumber: 143,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 134,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 82,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Tips.jsx",
                    lineNumber: 80,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/Tips.jsx",
            lineNumber: 43,
            columnNumber: 4
        }, this);
    }
    // Desktop layout - original with scaling applied by parent
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: tipsRef,
        className: "flex flex-col items-center justify-center w-full px-8 py-12",
        style: {
            background: "transparent",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row w-full max-w-[1400px] mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontWeight: 900,
                                fontStyle: "normal",
                                fontSize: "76px",
                                color: "#E8E2DA",
                                lineHeight: "1.1"
                            },
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 221,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Tips.jsx",
                        lineNumber: 220,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-start flex-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: "Noto Sans HK, sans-serif",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontSize: "20px",
                                color: "#E8E2DA",
                                lineHeight: "1.6",
                                maxWidth: "600px",
                                textAlign: "right"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "block"
                                    },
                                    children: t("description.line1")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 248,
                                    columnNumber: 7
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: "block"
                                    },
                                    children: t("description.line2")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 251,
                                    columnNumber: 7
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 236,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Tips.jsx",
                        lineNumber: 235,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/Tips.jsx",
                lineNumber: 218,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-start w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full max-w-[1000px] flex flex-col",
                    style: {
                        marginLeft: "0px"
                    },
                    children: Array.from({
                        length: 6
                    }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-between px-8 py-6 transition-all duration-200 cursor-pointer hover:bg-white hover:bg-opacity-5",
                                    style: {
                                        borderTop: "2px solid #FFFFFF",
                                        borderBottom: "2px solid #FFFFFF",
                                        background: "transparent"
                                    },
                                    onClick: ()=>handleTipClick(index),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                fontFamily: "Noto Sans HK, sans-serif",
                                                fontWeight: 300,
                                                fontSize: "25px",
                                                color: "#FFFFFF"
                                            },
                                            children: t(`tip${index + 1}`) || `Tip ${index + 1}`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 277,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: "75px",
                                                height: "75px",
                                                borderRadius: "100px",
                                                background: "rgba(255,255,255,0.3)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                position: "relative",
                                                border: "none",
                                                transition: "all 0.3s ease",
                                                transform: activeTip === index ? "rotate(180deg)" : "rotate(0deg)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: "12px solid transparent",
                                                    borderRight: "12px solid transparent",
                                                    borderTop: "18px solid #FFFFFF",
                                                    transition: "all 0.3s ease"
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Tips.jsx",
                                                lineNumber: 307,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 289,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 267,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full overflow-hidden",
                                    style: {
                                        maxHeight: activeTip === index ? "800px" : "0px",
                                        transition: "max-height 0.7s ease-in-out",
                                        background: "transparent"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center w-full",
                                        style: {
                                            transform: activeTip === index ? "translateY(0px)" : "translateY(-30px)",
                                            opacity: activeTip === index ? 1 : 0,
                                            transition: "all 0.7s ease-out",
                                            background: "transparent",
                                            padding: "30px 32px"
                                        },
                                        children: activeTip === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: `/images/tips/${activeTip + 1}.png`,
                                                    alt: t(`tip${activeTip + 1}`) || `Tip ${activeTip + 1}`,
                                                    width: 600,
                                                    height: 400,
                                                    className: "rounded-lg shadow-xl",
                                                    style: {
                                                        width: "70%",
                                                        height: "100%",
                                                        objectFit: "contain",
                                                        background: "transparent",
                                                        display: "block"
                                                    },
                                                    priority: true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Tips.jsx",
                                                    lineNumber: 347,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        closeTip();
                                                    },
                                                    className: "absolute top-3 right-3 bg-black/70 hover:bg-black/90 rounded-full p-2.5 transition-all duration-200 shadow-lg",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-5 h-5 text-white",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M6 18L18 6M6 6l12 12"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/Tips.jsx",
                                                            lineNumber: 379,
                                                            columnNumber: 14
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/Tips.jsx",
                                                        lineNumber: 373,
                                                        columnNumber: 13
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Tips.jsx",
                                                    lineNumber: 366,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/Tips.jsx",
                                            lineNumber: 346,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Tips.jsx",
                                        lineNumber: 332,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 323,
                                    columnNumber: 8
                                }, this),
                                activeTip === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: "100%",
                                        height: "2px",
                                        background: "#FFFFFF",
                                        transition: "all 0.3s ease"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Tips.jsx",
                                    lineNumber: 394,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/home/Tips.jsx",
                            lineNumber: 265,
                            columnNumber: 7
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Tips.jsx",
                    lineNumber: 260,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/Tips.jsx",
                lineNumber: 259,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/Tips.jsx",
        lineNumber: 209,
        columnNumber: 3
    }, this);
}
_s(Tips, "lXpCdTxN8OzKnAR9qqFYM1aRG08=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = Tips;
var _c;
__turbopack_context__.k.register(_c, "Tips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/TheoryTips.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$free$2f$theory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/free/theory.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Tips$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/Tips.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useResponsiveScale.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TheoryTips = ()=>{
    _s();
    const [tipsHeight, setTipsHeight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const { scaleRatio, isMobileLayout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"])();
    if (isMobileLayout) {
        // Mobile layout - stack vertically with mobile-optimized spacing
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full px-4 bg-center bg-no-repeat bg-cover py-18",
            style: {
                maxWidth: "100vw",
                backgroundImage: "url('/images/hero/Herobg2.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: 40,
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
                overflow: "hidden",
                marginTop: "-20px"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$free$2f$theory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bgColor: "bg-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TheoryTips.jsx",
                        lineNumber: 30,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/TheoryTips.jsx",
                    lineNumber: 29,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Tips$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onHeightChange: setTipsHeight
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TheoryTips.jsx",
                        lineNumber: 35,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/TheoryTips.jsx",
                    lineNumber: 34,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/TheoryTips.jsx",
            lineNumber: 14,
            columnNumber: 4
        }, this);
    }
    // Desktop layout with responsive scaling
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100vw",
            overflow: "visible",
            position: "relative",
            zIndex: 40,
            marginTop: "-80px"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-center bg-no-repeat bg-cover",
            style: {
                width: `${100 / scaleRatio}%`,
                height: `${Math.max(2552, 1600 + tipsHeight)}px`,
                backgroundImage: "url('/images/hero/Herobg2.png')",
                borderRadius: "40px",
                overflow: "visible",
                backgroundSize: "cover",
                backgroundPosition: "center top",
                transition: "height 0.6s ease-in-out",
                transform: `scale(${scaleRatio})`,
                transformOrigin: "top center",
                marginLeft: "auto",
                marginRight: "auto",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: "50px",
                        right: "-100px",
                        zIndex: 2
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$free$2f$theory$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        bgColor: "bg-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TheoryTips.jsx",
                        lineNumber: 79,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/TheoryTips.jsx",
                    lineNumber: 71,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: "1100px",
                        left: "0",
                        right: "0",
                        zIndex: 1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Tips$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        onHeightChange: setTipsHeight
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/TheoryTips.jsx",
                        lineNumber: 92,
                        columnNumber: 6
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/TheoryTips.jsx",
                    lineNumber: 83,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/TheoryTips.jsx",
            lineNumber: 52,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/TheoryTips.jsx",
        lineNumber: 43,
        columnNumber: 3
    }, this);
};
_s(TheoryTips, "pXYfY2O5OPopWFnYrdFabPNvA8Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useResponsiveScale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useResponsiveScale"]
    ];
});
_c = TheoryTips;
const __TURBOPACK__default__export__ = TheoryTips;
var _c;
__turbopack_context__.k.register(_c, "TheoryTips");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/Step.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useMobile.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Step = ({ steps })=>{
    _s();
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Step.useEffect": ()=>{
            setIsClient(true);
        }
    }["Step.useEffect"], []);
    // During SSR and initial hydration, render desktop layout to prevent mismatch
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-[90%] flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full p-4 ml-4 md:p-6 lg:p-8 md:ml-6 lg:ml-10",
                style: {
                    minHeight: "100px"
                },
                children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex flex-col items-start justify-center flex-1 ml-3 overflow-hidden rounded-lg md:ml-5 lg:ml-7",
                        style: {
                            borderRadius: "20px",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 z-0",
                                style: {
                                    backgroundImage: `url(${step.image})`,
                                    backgroundSize: "53% auto",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat",
                                    opacity: 2.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/Step.jsx",
                                lineNumber: 33,
                                columnNumber: 8
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-20 flex flex-col items-start w-full p-2 md:p-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex items-center justify-center mb-3 md:mb-4",
                                        style: {
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                            background: "#A3B116",
                                            border: "1px solid #A3B116"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            style: {
                                                fontFamily: "Noto Serif TC, serif",
                                                fontWeight: 1000,
                                                fontSize: "28px",
                                                color: "#FFFFFF",
                                                textShadow: "0 2px 4px rgba(0,0,0,0.8)",
                                                lineHeight: "1",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                width: "100%",
                                                height: "100%",
                                                transform: "translateX(-40px)"
                                            },
                                            children: step.num
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/Step.jsx",
                                            lineNumber: 57,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 47,
                                        columnNumber: 9
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-start",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 800,
                                                        fontSize: "20px",
                                                        lineHeight: "35px",
                                                        color: "#374A37"
                                                    },
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Step.jsx",
                                                    lineNumber: 81,
                                                    columnNumber: 11
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        fontWeight: 800,
                                                        fontSize: "20px",
                                                        lineHeight: "35px",
                                                        color: "#374A37"
                                                    },
                                                    children: step.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Step.jsx",
                                                    lineNumber: 93,
                                                    columnNumber: 11
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/Step.jsx",
                                            lineNumber: 80,
                                            columnNumber: 10
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 79,
                                        columnNumber: 9
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/Step.jsx",
                                lineNumber: 45,
                                columnNumber: 8
                            }, this)
                        ]
                    }, step.num, true, {
                        fileName: "[project]/src/components/home/Step.jsx",
                        lineNumber: 24,
                        columnNumber: 7
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/home/Step.jsx",
                lineNumber: 17,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Step.jsx",
            lineNumber: 16,
            columnNumber: 4
        }, this);
    }
    // MOBILE LAYOUT - Enhanced responsiveness
    if (isMobile) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full px-4 sm:px-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-sm mx-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    style: {
                        minHeight: "100px",
                        height: "auto"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid h-full grid-cols-2 gap-2 sm:gap-3",
                        children: steps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative flex flex-col items-center justify-center p-1 overflow-hidden rounded-xl",
                                style: {
                                    minHeight: "65px",
                                    aspectRatio: "1.1/1"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 z-0 rounded-xl",
                                        style: {
                                            backgroundImage: `url(${step.image})`,
                                            backgroundSize: "45% auto",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                            opacity: 2.4
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 141,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 flex items-center justify-center z-2",
                                        style: {
                                            fontSize: "clamp(45px, 12vw, 65px)",
                                            fontWeight: "900",
                                            color: "rgba(163, 177, 22, 0.8)",
                                            fontFamily: "Noto Serif TC, serif",
                                            lineHeight: "1",
                                            pointerEvents: "none",
                                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                                            transform: "translateX(-60px)"
                                        },
                                        children: step.num
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 153,
                                        columnNumber: 10
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10 flex flex-col items-center justify-center h-full space-y-0.5 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-0.5 space-y-0.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "font-bold leading-tight",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                                        color: "#374A37",
                                                        fontSize: "clamp(9px, 2.5vw, 18px)"
                                                    },
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Step.jsx",
                                                    lineNumber: 174,
                                                    columnNumber: 12
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "leading-tight opacity-90",
                                                    style: {
                                                        fontFamily: "Noto Sans HK, sans-serif",
                                                        textShadow: "0 1px 2px rgba(0,0,0,0.5)",
                                                        color: "#374A37",
                                                        fontSize: "clamp(7px, 2vw, 10px)"
                                                    },
                                                    children: step.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/Step.jsx",
                                                    lineNumber: 188,
                                                    columnNumber: 12
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/Step.jsx",
                                            lineNumber: 173,
                                            columnNumber: 11
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 171,
                                        columnNumber: 10
                                    }, this)
                                ]
                            }, step.num, true, {
                                fileName: "[project]/src/components/home/Step.jsx",
                                lineNumber: 132,
                                columnNumber: 9
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/Step.jsx",
                        lineNumber: 130,
                        columnNumber: 7
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/Step.jsx",
                    lineNumber: 122,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/Step.jsx",
                lineNumber: 120,
                columnNumber: 5
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/Step.jsx",
            lineNumber: 118,
            columnNumber: 4
        }, this);
    }
    // DESKTOP LAYOUT - Keep MacBook Air 13" appearance but make it screen responsive
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-[90%] flex items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full p-4 ml-4 md:p-6 lg:p-8 md:ml-6 lg:ml-10",
            style: {
                minHeight: "150px"
            },
            children: steps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative flex flex-col items-start justify-center flex-1 ml-3 overflow-hidden rounded-lg md:ml-5 lg:ml-7",
                    style: {
                        borderRadius: "20px",
                        position: "relative"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0",
                            style: {
                                backgroundImage: `url(${step.image})`,
                                backgroundSize: "50% auto",
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                opacity: 2.5
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/Step.jsx",
                            lineNumber: 232,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-20 flex flex-col items-start w-full p-2 md:p-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center justify-center mb-3 md:mb-4",
                                    style: {
                                        width: "clamp(35px, 4vw, 40px)",
                                        height: "clamp(35px, 4vw, 40px)",
                                        borderRadius: "50%",
                                        background: "#A3B116",
                                        border: "1px solid #A3B116"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            fontFamily: "Noto Serif TC, serif",
                                            fontWeight: 1000,
                                            fontSize: "clamp(24px, 3vw, 30px)",
                                            color: "#FFFFFF",
                                            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
                                        },
                                        children: step.num
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 256,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Step.jsx",
                                    lineNumber: 246,
                                    columnNumber: 8
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative z-10 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 800,
                                                    fontSize: "clamp(16px, 2vw, 20px)",
                                                    lineHeight: "clamp(28px, 3.5vw, 35px)",
                                                    color: "#374A37"
                                                },
                                                children: step.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Step.jsx",
                                                lineNumber: 272,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif",
                                                    fontWeight: 800,
                                                    fontSize: "clamp(16px, 2vw, 18px)",
                                                    lineHeight: "clamp(28px, 3.5vw, 35px)",
                                                    color: "#374A37"
                                                },
                                                children: step.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/Step.jsx",
                                                lineNumber: 285,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/Step.jsx",
                                        lineNumber: 271,
                                        columnNumber: 9
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/Step.jsx",
                                    lineNumber: 270,
                                    columnNumber: 8
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/home/Step.jsx",
                            lineNumber: 244,
                            columnNumber: 7
                        }, this)
                    ]
                }, step.num, true, {
                    fileName: "[project]/src/components/home/Step.jsx",
                    lineNumber: 223,
                    columnNumber: 6
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/components/home/Step.jsx",
            lineNumber: 216,
            columnNumber: 4
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/home/Step.jsx",
        lineNumber: 215,
        columnNumber: 3
    }, this);
};
_s(Step, "ukRU60GW0JfwF8Ms69qUtYQwdj8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Step;
const __TURBOPACK__default__export__ = Step;
var _c;
__turbopack_context__.k.register(_c, "Step");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/service.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Step$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/Step.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/useMobile.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const ServiceSection = ()=>{
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.services");
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServiceSection.useEffect": ()=>{
            setIsClient(true);
        }
    }["ServiceSection.useEffect"], []);
    // Define steps data for the Step component
    const steps = [
        {
            num: "1",
            title: t("steps.step1.title"),
            subtitle: t("steps.step1.subtitle"),
            image: "/images/hero/hero-1.png"
        },
        {
            num: "2",
            title: t("steps.step2.title"),
            subtitle: t("steps.step2.subtitle"),
            image: "/images/hero/hero-2.png"
        },
        {
            num: "3",
            title: t("steps.step3.title"),
            subtitle: t("steps.step3.subtitle"),
            image: "/images/hero/hero-3.png"
        },
        {
            num: "4",
            title: t("steps.step4.title"),
            subtitle: t("steps.step4.subtitle"),
            image: "/images/hero/hero-4.png"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "w-full py-8 md:py-16 bg-[#EFEFEF] md:rounded-t-[80px] relative z-10",
        style: {
            marginTop: isClient && isMobile ? "0" : "-70px",
            paddingTop: isClient && isMobile ? "0" : "70px"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-full mb-8 md:mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$Step$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    steps: steps
                }, void 0, false, {
                    fileName: "[project]/src/components/home/service.jsx",
                    lineNumber: 56,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/service.jsx",
                lineNumber: 55,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center w-full mb-8 md:mb-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "w-5/6 border-t border-black md:w-5/6"
                }, void 0, false, {
                    fileName: "[project]/src/components/home/service.jsx",
                    lineNumber: 61,
                    columnNumber: 5
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/home/service.jsx",
                lineNumber: 60,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 mx-auto sm:px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 md:mb-9",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-8 md:gap-8 lg:gap-20 lg:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full p-4 md:p-6 lg:p-8 lg:w-1/2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#635D3B]",
                                                style: {
                                                    fontFamily: "Noto Serif TC, serif"
                                                },
                                                children: t("fengshui.title")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 71,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#A3B116] font-semibold mb-3 md:mb-4",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("fengshui.subtitle1")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 80,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base md:text-lg lg:text-xl xl:text-2xl text-[#A3B116] font-medium mb-4 md:mb-6",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("fengshui.subtitle2")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 89,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-6 md:mb-8 leading-relaxed text-[#515151] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("fengshui.description")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 98,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/price",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-[#A3B116] hover:bg-[#8A9A14] text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full font-bold transition-colors duration-300 w-full sm:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif"
                                                        },
                                                        className: "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
                                                        children: t("fengshui.button")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/service.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/service.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 107,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/service.jsx",
                                        lineNumber: 70,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full lg:w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/hero/service-1.png",
                                                alt: t("fengshui.altText"),
                                                width: 200,
                                                height: 200,
                                                className: "object-contain w-full h-auto max-w-full max-h-full",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 125,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/service.jsx",
                                            lineNumber: 124,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/service.jsx",
                                        lineNumber: 123,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/service.jsx",
                                lineNumber: 68,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/service.jsx",
                            lineNumber: 67,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/service.jsx",
                        lineNumber: 66,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 md:mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full mx-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-8 md:gap-12 lg:gap-20 lg:flex-row-reverse",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full p-4 md:p-6 lg:p-8 xl:p-12 lg:w-1/2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#635D3B]",
                                                style: {
                                                    fontFamily: "Noto Serif TC, serif"
                                                },
                                                children: t("destiny.title")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 145,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-[#A3B116] font-semibold mb-3 md:mb-4",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("destiny.subtitle1")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 154,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-base md:text-lg lg:text-xl xl:text-2xl text-[#A3B116] font-medium mb-4 md:mb-6",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("destiny.subtitle2")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 163,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-6 md:mb-8 leading-relaxed text-[#515151] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
                                                style: {
                                                    fontFamily: "Noto Sans HK, sans-serif"
                                                },
                                                children: t("destiny.description")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 172,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/price",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "bg-[#A3B116] hover:bg-[#8A9A14] text-white px-6 md:px-8 lg:px-12 py-3 md:py-4 lg:py-5 rounded-full font-bold transition-colors duration-300 w-full sm:w-auto",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: "Noto Sans HK, sans-serif"
                                                        },
                                                        className: "text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl",
                                                        children: t("destiny.button")
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/home/service.jsx",
                                                        lineNumber: 183,
                                                        columnNumber: 11
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/service.jsx",
                                                    lineNumber: 182,
                                                    columnNumber: 10
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 181,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/service.jsx",
                                        lineNumber: 144,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full lg:w-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/hero/service-2.png",
                                                alt: t("destiny.altText"),
                                                width: 500,
                                                height: 500,
                                                className: "object-contain w-full h-auto max-w-full max-h-full",
                                                priority: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/service.jsx",
                                                lineNumber: 199,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/service.jsx",
                                            lineNumber: 198,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/service.jsx",
                                        lineNumber: 197,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/service.jsx",
                                lineNumber: 142,
                                columnNumber: 7
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/service.jsx",
                            lineNumber: 141,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/service.jsx",
                        lineNumber: 140,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/service.jsx",
                lineNumber: 64,
                columnNumber: 4
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/service.jsx",
        lineNumber: 47,
        columnNumber: 3
    }, this);
};
_s(ServiceSection, "eg2cLS4PoJ1R+4Unch1K6Gr95D4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ServiceSection;
const __TURBOPACK__default__export__ = ServiceSection;
var _c;
__turbopack_context__.k.register(_c, "ServiceSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "useMobile": (()=>useMobile)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useMobile = (breakpoint = 768)=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMobile.useEffect": ()=>{
            const checkScreenSize = {
                "useMobile.useEffect.checkScreenSize": ()=>{
                    setIsMobile(window.innerWidth <= breakpoint);
                }
            }["useMobile.useEffect.checkScreenSize"];
            // Check initial screen size
            checkScreenSize();
            // Add event listener for window resize
            window.addEventListener("resize", checkScreenSize);
            // Cleanup
            return ({
                "useMobile.useEffect": ()=>window.removeEventListener("resize", checkScreenSize)
            })["useMobile.useEffect"];
        }
    }["useMobile.useEffect"], [
        breakpoint
    ]);
    return isMobile;
};
_s(useMobile, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/home/DemoSection.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DemoSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/react-client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useMobile.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DemoSection() {
    _s();
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"])("home.demo");
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isMobile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"])();
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAutoScrolling, setIsAutoScrolling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const autoScrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Auto-scroll configuration (desktop only)
    const scrollConfig = {
        speed: {
            desktop: 2
        },
        edgeThreshold: 100,
        smoothness: 1
    };
    // Mobile drag state
    const [isDragging, setIsDragging] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dragStart, setDragStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        scrollLeft: 0
    });
    const [hasDragged, setHasDragged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false); // Track if user actually dragged
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DemoSection.useEffect": ()=>{
            setIsClient(true);
        }
    }["DemoSection.useEffect"], []);
    const tags = [
        {
            id: "fengshui",
            name: t("tags.fengshui.name"),
            image: "/images/demo/fengshui.png",
            description: t("tags.fengshui.description")
        },
        {
            id: "life",
            name: t("tags.life.name"),
            image: "/images/demo/life.png",
            description: t("tags.life.description")
        },
        {
            id: "relationship",
            name: t("tags.relationship.name"),
            image: "/images/demo/relationship.png",
            description: t("tags.relationship.description")
        },
        {
            id: "career",
            name: t("tags.career.name"),
            image: "/images/demo/career.png",
            description: t("tags.career.description")
        },
        {
            id: "health",
            name: t("tags.health.name"),
            image: "/images/demo/health.png",
            description: t("tags.health.description")
        },
        {
            id: "wealth",
            name: t("tags.wealth.name"),
            image: "/images/demo/wealth.png",
            description: t("tags.wealth.description")
        }
    ];
    const startAutoScroll = (direction)=>{
        if (isAutoScrolling || isMobile) return; // Skip auto-scroll on mobile
        setIsAutoScrolling(true);
        const scrollSpeed = scrollConfig.speed.desktop * scrollConfig.smoothness;
        const scroll = ()=>{
            if (!scrollContainerRef.current) return;
            const container = scrollContainerRef.current;
            const currentScroll = container.scrollLeft;
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (direction === "left" && currentScroll > 0) {
                container.scrollLeft = Math.max(0, currentScroll - scrollSpeed);
                autoScrollRef.current = requestAnimationFrame(scroll);
            } else if (direction === "right" && currentScroll < maxScroll) {
                container.scrollLeft = Math.min(maxScroll, currentScroll + scrollSpeed);
                autoScrollRef.current = requestAnimationFrame(scroll);
            } else {
                stopAutoScroll();
            }
        };
        autoScrollRef.current = requestAnimationFrame(scroll);
    };
    const stopAutoScroll = ()=>{
        setIsAutoScrolling(false);
        if (autoScrollRef.current) {
            cancelAnimationFrame(autoScrollRef.current);
            autoScrollRef.current = null;
        }
    };
    // Combined mouse move handler for both desktop and mobile
    const handleContainerMouseMove = (e)=>{
        if (isMobile) {
            handleMouseMoveOnMobile(e);
        } else {
            handleMouseMove(e);
        }
    };
    const handleMouseMove = (e)=>{
        if (!scrollContainerRef.current || isMobile) return; // Skip auto-scroll on mobile
        const container = scrollContainerRef.current;
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const containerWidth = rect.width;
        const edgeThreshold = scrollConfig.edgeThreshold; // Use config value
        // Stop any existing auto-scroll
        stopAutoScroll();
        // Check if mouse is near left edge
        if (mouseX < edgeThreshold && container.scrollLeft > 0) {
            startAutoScroll("left");
        } else if (mouseX > containerWidth - edgeThreshold) {
            const maxScroll = container.scrollWidth - container.clientWidth;
            if (container.scrollLeft < maxScroll) {
                startAutoScroll("right");
            }
        }
    };
    const handleImageClick = (e, tagId)=>{
        // Prevent navigation only if user actually dragged on mobile
        if (isMobile && hasDragged) {
            e.preventDefault();
            return;
        }
        // Navigate to the demo page
        window.location.href = `/demo?category=${tagId}`;
    };
    // Mobile drag handlers
    const handleMouseDown = (e)=>{
        if (!isMobile || !scrollContainerRef.current) return;
        setIsDragging(true);
        setHasDragged(false); // Reset drag state
        setDragStart({
            x: e.pageX - scrollContainerRef.current.offsetLeft,
            scrollLeft: scrollContainerRef.current.scrollLeft
        });
    };
    const handleMouseMoveOnMobile = (e)=>{
        if (!isMobile || !isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - dragStart.x) * 2; // Scroll speed multiplier
        // Check if user has moved enough to be considered dragging
        if (Math.abs(walk) > 5) {
            setHasDragged(true);
        }
        scrollContainerRef.current.scrollLeft = dragStart.scrollLeft - walk;
    };
    const handleMouseUp = ()=>{
        if (!isMobile) return;
        setIsDragging(false);
        // Reset drag state after a short delay to allow click events
        setTimeout(()=>setHasDragged(false), 100);
    };
    // Touch handlers for mobile
    const handleTouchStart = (e)=>{
        if (!isMobile || !scrollContainerRef.current) return;
        setIsDragging(true);
        setHasDragged(false); // Reset drag state
        const touch = e.touches[0];
        setDragStart({
            x: touch.pageX - scrollContainerRef.current.offsetLeft,
            scrollLeft: scrollContainerRef.current.scrollLeft
        });
    };
    const handleTouchMove = (e)=>{
        if (!isMobile || !isDragging || !scrollContainerRef.current) return;
        e.preventDefault();
        const touch = e.touches[0];
        const x = touch.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - dragStart.x) * 2; // Scroll speed multiplier
        // Check if user has moved enough to be considered dragging
        if (Math.abs(walk) > 5) {
            setHasDragged(true);
        }
        scrollContainerRef.current.scrollLeft = dragStart.scrollLeft - walk;
    };
    const handleTouchEnd = ()=>{
        if (!isMobile) return;
        setIsDragging(false);
        // Reset drag state after a short delay to allow click events
        setTimeout(()=>setHasDragged(false), 100);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "jsx-a715e67dc44646e0" + " " + "w-full mb-16 sm:mb-20 md:mb-24 lg:mb-30 bg-[#EFEFEF] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-a715e67dc44646e0" + " " + "px-3 mx-auto sm:px-4 md:px-6 lg:px-8 max-w-7xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a715e67dc44646e0" + " " + "mb-8 sm:mb-10 md:mb-12 text-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            style: {
                                fontFamily: "Noto Serif TC, serif",
                                fontSize: isClient && isMobile ? "clamp(2rem, 8vw, 3rem)" : "clamp(3rem, 5vw, 6rem)"
                            },
                            className: "jsx-a715e67dc44646e0" + " " + "font-bold text-[#635D3B] mb-3 sm:mb-4",
                            children: t("title")
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DemoSection.jsx",
                            lineNumber: 234,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/DemoSection.jsx",
                        lineNumber: 233,
                        columnNumber: 5
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a715e67dc44646e0" + " " + "mb-12 overflow-hidden sm:mb-14 md:mb-16",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollContainerRef,
                            style: {
                                scrollbarWidth: "none",
                                msOverflowStyle: "none",
                                width: "calc(100%)",
                                paddingLeft: isClient && isMobile ? "20px" : "100px",
                                cursor: isMobile ? isDragging ? "grabbing" : "grab" : "default"
                            },
                            // Combined mouse move handler
                            onMouseMove: handleContainerMouseMove,
                            onMouseLeave: !isMobile ? stopAutoScroll : handleMouseUp,
                            // Mobile-specific drag events
                            onMouseDown: isMobile ? handleMouseDown : undefined,
                            onMouseUp: isMobile ? handleMouseUp : undefined,
                            // Touch events for mobile
                            onTouchStart: isMobile ? handleTouchStart : undefined,
                            onTouchMove: isMobile ? handleTouchMove : undefined,
                            onTouchEnd: isMobile ? handleTouchEnd : undefined,
                            className: "jsx-a715e67dc44646e0" + " " + "flex pb-3 space-x-4 overflow-x-auto sm:pb-4 sm:space-x-6 scrollbar-hide",
                            children: tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a715e67dc44646e0" + " " + "relative flex-shrink-0 group",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: (e)=>handleImageClick(e, tag.id),
                                        style: {
                                            userSelect: "none"
                                        },
                                        className: "jsx-a715e67dc44646e0" + " " + "relative overflow-hidden transition-transform duration-300 cursor-pointer hover:scale-105",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: tag.image,
                                                alt: tag.name,
                                                style: {
                                                    width: isClient && isMobile ? "180px" : "240px",
                                                    height: isClient && isMobile ? "225px" : "300px"
                                                },
                                                draggable: false,
                                                className: "jsx-a715e67dc44646e0" + " " + "object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                lineNumber: 291,
                                                columnNumber: 10
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-a715e67dc44646e0" + " " + `absolute ${isClient && isMobile ? "bottom-2 right-2" : "bottom-4 right-4"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: `/demo?category=${tag.id}`,
                                                    className: `flex items-center space-x-1 font-bold text-gray-800 transition-colors duration-300 bg-white rounded-lg hover:bg-gray-100 ${isClient && isMobile ? "px-2 py-1 text-xs" : "px-4 py-1 text-sm"}`,
                                                    onClick: (e)=>{
                                                        // Prevent event bubbling to parent click handler
                                                        e.stopPropagation();
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-a715e67dc44646e0",
                                                            children: t("startButton")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                                            lineNumber: 324,
                                                            columnNumber: 12
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            className: "jsx-a715e67dc44646e0" + " " + ((isClient && isMobile ? "w-3 h-3" : "w-4 h-4") || ""),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M9 5l7 7-7 7",
                                                                className: "jsx-a715e67dc44646e0"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                                lineNumber: 335,
                                                                columnNumber: 13
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                                            lineNumber: 325,
                                                            columnNumber: 12
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 11
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                lineNumber: 309,
                                                columnNumber: 10
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 284,
                                        columnNumber: 9
                                    }, this)
                                }, tag.id, false, {
                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                    lineNumber: 279,
                                    columnNumber: 8
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/DemoSection.jsx",
                            lineNumber: 250,
                            columnNumber: 6
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/DemoSection.jsx",
                        lineNumber: 249,
                        columnNumber: 5
                    }, this),
                    isClient && isMobile ? /* Mobile Layout - Stacked design */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a715e67dc44646e0" + " " + "flex flex-col items-center w-full space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a715e67dc44646e0" + " " + "relative w-full max-w-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/images/demo/Demo.png",
                                    alt: t("demoAltText"),
                                    className: "jsx-a715e67dc44646e0" + " " + "w-full h-auto shadow-lg rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                    lineNumber: 356,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                lineNumber: 355,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a715e67dc44646e0" + " " + "px-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontFamily: "Noto Serif TC"
                                        },
                                        className: "jsx-a715e67dc44646e0" + " " + "text-2xl font-bold text-[#5E5A43] mb-4",
                                        children: t("previewTitle")
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 365,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a715e67dc44646e0" + " " + "space-y-3 text-[#5E5A43] mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "Noto Serif TC"
                                                },
                                                className: "jsx-a715e67dc44646e0" + " " + "text-base font-bold leading-relaxed",
                                                children: t("previewDescription1")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                lineNumber: 375,
                                                columnNumber: 9
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontFamily: "Noto Serif TC"
                                                },
                                                className: "jsx-a715e67dc44646e0" + " " + "text-base font-bold leading-relaxed",
                                                children: t("previewDescription2")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                lineNumber: 383,
                                                columnNumber: 9
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 374,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/demo",
                                        className: "bg-[#A3B116] text-white px-8 py-3 rounded-full font-bold text-base hover:bg-[#8B9914] transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-a715e67dc44646e0",
                                            children: t("previewButton")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                            lineNumber: 398,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 394,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                lineNumber: 364,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/DemoSection.jsx",
                        lineNumber: 353,
                        columnNumber: 6
                    }, this) : /* Desktop Layout - Keep MacBook Air 13" appearance but make responsive */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-a715e67dc44646e0" + " " + "relative flex justify-center w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a715e67dc44646e0" + " " + "relative max-w-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/demo/Demo.png",
                                        alt: t("demoAltText"),
                                        className: "jsx-a715e67dc44646e0" + " " + "w-full h-auto shadow-lg rounded-xl"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 407,
                                        columnNumber: 8
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-a715e67dc44646e0" + " " + "absolute bottom-4 md:bottom-6 left-[-40px] md:left-[-70px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/demo",
                                            className: "bg-[#A3B116] text-white rounded-full font-bold hover:bg-[#8B9914] transition-colors duration-300 inline-flex items-center space-x-2 shadow-lg",
                                            style: {
                                                padding: "clamp(12px, 1.5vw, 16px) clamp(24px, 3vw, 48px)",
                                                fontSize: "clamp(14px, 1.2vw, 18px)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "jsx-a715e67dc44646e0",
                                                children: t("previewButton")
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                                lineNumber: 424,
                                                columnNumber: 10
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                            lineNumber: 415,
                                            columnNumber: 9
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/DemoSection.jsx",
                                        lineNumber: 414,
                                        columnNumber: 8
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                lineNumber: 406,
                                columnNumber: 7
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-a715e67dc44646e0" + " " + "absolute right-[-30px] md:right-[-50px] max-w-xs md:max-w-md pl-4 md:pl-8 transform -translate-y-1/2 top-[70%]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-a715e67dc44646e0" + " " + "p-4 md:p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                fontFamily: "Noto Serif TC",
                                                WebkitTextStroke: "0.5px #5E5A43",
                                                color: "#5E5A43",
                                                textShadow: "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
                                                fontSize: "clamp(24px, 3vw, 48px)"
                                            },
                                            className: "jsx-a715e67dc44646e0" + " " + "font-bold text-[#5E5A43] mb-4 md:mb-6",
                                            children: t("previewTitle")
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                            lineNumber: 432,
                                            columnNumber: 9
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-a715e67dc44646e0" + " " + "space-y-3 md:space-y-4 text-[#5E5A43]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "Noto Serif TC",
                                                        WebkitTextStroke: "0.5px #5E5A43",
                                                        color: "#5E5A43",
                                                        textShadow: "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
                                                        fontSize: "clamp(14px, 1.5vw, 20px)"
                                                    },
                                                    className: "jsx-a715e67dc44646e0" + " " + "font-bold leading-relaxed",
                                                    children: t("previewDescription1")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 10
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontFamily: "Noto Serif TC",
                                                        WebkitTextStroke: "0.5px #5E5A43",
                                                        color: "#5E5A43",
                                                        textShadow: "2px 0 0 white, -2px 0 0 white, 0 2px 0 white, 0 -2px 0 white",
                                                        fontSize: "clamp(14px, 1.5vw, 20px)"
                                                    },
                                                    className: "jsx-a715e67dc44646e0" + " " + "font-bold leading-relaxed",
                                                    children: t("previewDescription2")
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                                    lineNumber: 461,
                                                    columnNumber: 10
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/home/DemoSection.jsx",
                                            lineNumber: 446,
                                            columnNumber: 9
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/DemoSection.jsx",
                                    lineNumber: 431,
                                    columnNumber: 8
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/home/DemoSection.jsx",
                                lineNumber: 430,
                                columnNumber: 7
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/home/DemoSection.jsx",
                        lineNumber: 404,
                        columnNumber: 6
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/DemoSection.jsx",
                lineNumber: 231,
                columnNumber: 4
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "a715e67dc44646e0",
                children: ".scrollbar-hide.jsx-a715e67dc44646e0::-webkit-scrollbar{display:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/home/DemoSection.jsx",
        lineNumber: 230,
        columnNumber: 3
    }, this);
}
_s(DemoSection, "z6RO6nEKQUuuVJyDZsTL4YvRh7s=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$react$2d$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTranslations"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useMobile$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMobile"]
    ];
});
_c = DemoSection;
var _c;
__turbopack_context__.k.register(_c, "DemoSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_7295aa9b._.js.map