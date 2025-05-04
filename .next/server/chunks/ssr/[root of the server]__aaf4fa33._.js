module.exports = {

"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/mongoose.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
// 使用本地MongoDB服务
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env');
}
/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */ let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            // bufferCommands: false,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 30000
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            console.log('MongoDB connected successfully');
            return mongoose;
        }).catch((e)=>{
            console.error('MongoDB connection error:', e);
            throw e;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        console.error("MongoDB connection failed:", e);
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
}}),
"[project]/src/models/Design.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const designSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    userId: {
        type: String,
        ref: 'User',
        required: true
    },
    canvasPosition: {
        x: Number,
        y: Number
    },
    compassRotation: Number,
    scale: Number,
    localItems: [
        {
            id: String,
            _type: String,
            activeIcon: String,
            data: {
                cateType: String,
                _type: String,
                label: String,
                icon: String,
                // activeIcon: String,
                parentRoom: {
                    type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
                    default: null
                },
                size: {
                    width: Number,
                    height: Number
                }
            },
            size: {
                width: Number,
                height: Number
            },
            position: {
                x: Number,
                y: Number
            },
            rotation: {
                type: Number,
                default: 0
            },
            parentId: {
                type: String,
                default: null
            },
            offset: {
                x: Number,
                y: Number
            }
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
// 更新时自动更新updatedAt字段
designSchema.pre('save', function(next) {
    this.updatedAt = Date.now();
    next();
});
const Design = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Design || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('Design', designSchema);
const __TURBOPACK__default__export__ = Design;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs) <export randomFillSync as default>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__["randomFillSync"])
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$3a$crypto__$5b$external$5d$__$28$node$3a$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/node:crypto [external] (node:crypto, cjs)");
}}),
"[externals]/node:util [external] (node:util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}}),
"[project]/src/auth.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "handlers": (()=>handlers),
    "signIn": (()=>signIn),
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/next-auth/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/next-auth/providers/google.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+core@0.37.2/node_modules/@auth/core/providers/google.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$apple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/next-auth/providers/apple.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$apple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+core@0.37.2/node_modules/@auth/core/providers/apple.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next-auth@5.0.0-beta.25_next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0__react@19.1.0/node_modules/next-auth/providers/github.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@auth+core@0.37.2/node_modules/@auth/core/providers/github.js [app-rsc] (ecmascript)");
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$2d$auth$40$5$2e$0$2e$0$2d$beta$2e$25_next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    trustHost: true,
    providers: [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$github$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$auth$2b$core$40$0$2e$37$2e$2$2f$node_modules$2f40$auth$2f$core$2f$providers$2f$apple$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // debug: true,
    callbacks: {
        async jwt ({ token, user, account }) {
            if (account && user) {
                token.accessToken = account.access_token;
                token.id = user.id;
            }
            return token;
        },
        // async signIn({ user, account }) {
        //   //console.log("OAuth请求目标URL:", user, account);
        //   return true;
        //   // await dbConnect();
        //   // // Extract user info from provider data
        //   // const { id, email, name } = user;
        //   // // const provider = account?.provider;
        //   // // Check if user exists
        //   // let existingUser = await User.findOne({ userId: id });
        //   // if (!existingUser) {
        //   //     // For new users, prompt them to fill additional info on first login
        //   //     // Store minimal info and redirect to complete profile
        //   //     return `/auth/complete-profile?id=${id}&email=${email}&provider=${provider}`;
        //   // }
        // },
        async session ({ session, token }) {
            if (token && session.user) {
                // 扩展 session.user 类型以包含 id 属性
                session.user = {
                    ...session.user,
                    id: token.sub,
                    userId: session.user.email
                };
            }
            //console.log("session", session);
            return session;
        }
    },
    pages: {
    }
});
}}),
"[project]/src/lib/session.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserInfo": (()=>getUserInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/compiled/server-only/empty.js [app-rsc] (ecmascript)"); // 标记只在服务端使用（客户端组件引入会报错）
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
async function getUserInfoFn() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return null;
    }
    return session.user; // 格式如 { id, name, email, image }
}
const getUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cache"])(getUserInfoFn);
}}),
"[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"00830670030e73fc48de58097f778c777bf31042f2":"getDesignData"} */ __turbopack_context__.s({
    "getDesignData": (()=>getDesignData)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoose.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Design$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/Design.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
async function /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ getDesignData() {
    const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserInfo"])();
    if (!userInfo || !userInfo.userId) return;
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    const design = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$Design$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
        userId: userInfo.userId
    }).select("-__v");
    return design;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getDesignData
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getDesignData, "00830670030e73fc48de58097f778c777bf31042f2", null);
}}),
"[project]/src/app/actions.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/* __next_internal_action_entry_do_not_use__ {"7f7e4999b74a3f7be49815f47f3ca1c740d15cf6ba":"handleSignOut"} */ __turbopack_context__.s({
    "handleSignOut": (()=>handleSignOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$app$2d$render$2f$encryption$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/app-render/encryption.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
const /*#__TURBOPACK_DISABLE_EXPORT_MERGING__*/ handleSignOut = async ()=>{
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"])({
        redirectTo: "/auth/login"
    });
};
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    handleSignOut
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(handleSignOut, "7f7e4999b74a3f7be49815f47f3ca1c740d15cf6ba", null);
}}),
"[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
;
}}),
"[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00830670030e73fc48de58097f778c777bf31042f2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDesignData"]),
    "7f7e4999b74a3f7be49815f47f3ca1c740d15cf6ba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["handleSignOut"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/actions.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
}}),
"[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/src/app/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "00830670030e73fc48de58097f778c777bf31042f2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["00830670030e73fc48de58097f778c777bf31042f2"]),
    "7f7e4999b74a3f7be49815f47f3ca1c740d15cf6ba": (()=>__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__["7f7e4999b74a3f7be49815f47f3ca1c740d15cf6ba"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f5b$locale$5d2f$report$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/[locale]/report/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/src/app/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <exports>');
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/[locale]/error.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/error.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn),
    "getBirthDate": (()=>getBirthDate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$1$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.1.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-rsc] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$1$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clsx"])(inputs));
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
}}),
"[project]/src/lib/calendar.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
* @1900-2100区间内的公历、农历互转
* @charset  UTF-8
* @Author  Ajing(JJonline@JJonline.Cn) 
* @Time  2014-7-21
* @Version  $ID$
* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
*/ __turbopack_context__.s({
    "calendar": (()=>calendar)
});
var calendar = {
    /**
    * 农历1900-2100的润大小信息表
    * @Array Of Property
    * @return Hex 
    */ lunarInfo: [
        0x04bd8,
        0x04ae0,
        0x0a570,
        0x054d5,
        0x0d260,
        0x0d950,
        0x16554,
        0x056a0,
        0x09ad0,
        0x055d2,
        0x04ae0,
        0x0a5b6,
        0x0a4d0,
        0x0d250,
        0x1d255,
        0x0b540,
        0x0d6a0,
        0x0ada2,
        0x095b0,
        0x14977,
        0x04970,
        0x0a4b0,
        0x0b4b5,
        0x06a50,
        0x06d40,
        0x1ab54,
        0x02b60,
        0x09570,
        0x052f2,
        0x04970,
        0x06566,
        0x0d4a0,
        0x0ea50,
        0x06e95,
        0x05ad0,
        0x02b60,
        0x186e3,
        0x092e0,
        0x1c8d7,
        0x0c950,
        0x0d4a0,
        0x1d8a6,
        0x0b550,
        0x056a0,
        0x1a5b4,
        0x025d0,
        0x092d0,
        0x0d2b2,
        0x0a950,
        0x0b557,
        0x06ca0,
        0x0b550,
        0x15355,
        0x04da0,
        0x0a5b0,
        0x14573,
        0x052b0,
        0x0a9a8,
        0x0e950,
        0x06aa0,
        0x0aea6,
        0x0ab50,
        0x04b60,
        0x0aae4,
        0x0a570,
        0x05260,
        0x0f263,
        0x0d950,
        0x05b57,
        0x056a0,
        0x096d0,
        0x04dd5,
        0x04ad0,
        0x0a4d0,
        0x0d4d4,
        0x0d250,
        0x0d558,
        0x0b540,
        0x0b6a0,
        0x195a6,
        0x095b0,
        0x049b0,
        0x0a974,
        0x0a4b0,
        0x0b27a,
        0x06a50,
        0x06d40,
        0x0af46,
        0x0ab60,
        0x09570,
        0x04af5,
        0x04970,
        0x064b0,
        0x074a3,
        0x0ea50,
        0x06b58,
        0x055c0,
        0x0ab60,
        0x096d5,
        0x092e0,
        0x0c960,
        0x0d954,
        0x0d4a0,
        0x0da50,
        0x07552,
        0x056a0,
        0x0abb7,
        0x025d0,
        0x092d0,
        0x0cab5,
        0x0a950,
        0x0b4a0,
        0x0baa4,
        0x0ad50,
        0x055d9,
        0x04ba0,
        0x0a5b0,
        0x15176,
        0x052b0,
        0x0a930,
        0x07954,
        0x06aa0,
        0x0ad50,
        0x05b52,
        0x04b60,
        0x0a6e6,
        0x0a4e0,
        0x0d260,
        0x0ea65,
        0x0d530,
        0x05aa0,
        0x076a3,
        0x096d0,
        0x04bd7,
        0x04ad0,
        0x0a4d0,
        0x1d0b6,
        0x0d250,
        0x0d520,
        0x0dd45,
        0x0b5a0,
        0x056d0,
        0x055b2,
        0x049b0,
        0x0a577,
        0x0a4b0,
        0x0aa50,
        0x1b255,
        0x06d20,
        0x0ada0,
        /**Add By JJonline@JJonline.Cn**/ 0x14b63,
        0x09370,
        0x049f8,
        0x04970,
        0x064b0,
        0x168a6,
        0x0ea50,
        0x06b20,
        0x1a6c4,
        0x0aae0,
        0x0a2e0,
        0x0d2e3,
        0x0c960,
        0x0d557,
        0x0d4a0,
        0x0da50,
        0x05d55,
        0x056a0,
        0x0a6d0,
        0x055d4,
        0x052d0,
        0x0a9b8,
        0x0a950,
        0x0b4a0,
        0x0b6a6,
        0x0ad50,
        0x055a0,
        0x0aba4,
        0x0a5b0,
        0x052b0,
        0x0b273,
        0x06930,
        0x07337,
        0x06aa0,
        0x0ad50,
        0x14b55,
        0x04b60,
        0x0a570,
        0x054e4,
        0x0d160,
        0x0e968,
        0x0d520,
        0x0daa0,
        0x16aa6,
        0x056d0,
        0x04ae0,
        0x0a9d4,
        0x0a2d0,
        0x0d150,
        0x0f252,
        0x0d520
    ],
    /**
    * 公历每个月份的天数普通表
    * @Array Of Property
    * @return Number 
    */ solarMonth: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    /**
    * 天干地支之天干速查表
    * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
    * @return Cn string 
    */ Gan: [
        "\u7532",
        "\u4e59",
        "\u4e19",
        "\u4e01",
        "\u620a",
        "\u5df1",
        "\u5e9a",
        "\u8f9b",
        "\u58ec",
        "\u7678"
    ],
    /**
    * 天干地支之地支速查表
    * @Array Of Property 
    * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
    * @return Cn string 
    */ Zhi: [
        "\u5b50",
        "\u4e11",
        "\u5bc5",
        "\u536f",
        "\u8fb0",
        "\u5df3",
        "\u5348",
        "\u672a",
        "\u7533",
        "\u9149",
        "\u620c",
        "\u4ea5"
    ],
    /**
    * 天干地支之地支速查表<=>生肖
    * @Array Of Property 
    * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
    * @return Cn string 
    */ Animals: [
        "\u9f20",
        "\u725b",
        "\u864e",
        "\u5154",
        "\u9f99",
        "\u86c7",
        "\u9a6c",
        "\u7f8a",
        "\u7334",
        "\u9e21",
        "\u72d7",
        "\u732a"
    ],
    /**
    * 24节气速查表
    * @Array Of Property 
    * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
    * @return Cn string 
    */ solarTerm: [
        "\u5c0f\u5bd2",
        "\u5927\u5bd2",
        "\u7acb\u6625",
        "\u96e8\u6c34",
        "\u60ca\u86f0",
        "\u6625\u5206",
        "\u6e05\u660e",
        "\u8c37\u96e8",
        "\u7acb\u590f",
        "\u5c0f\u6ee1",
        "\u8292\u79cd",
        "\u590f\u81f3",
        "\u5c0f\u6691",
        "\u5927\u6691",
        "\u7acb\u79cb",
        "\u5904\u6691",
        "\u767d\u9732",
        "\u79cb\u5206",
        "\u5bd2\u9732",
        "\u971c\u964d",
        "\u7acb\u51ac",
        "\u5c0f\u96ea",
        "\u5927\u96ea",
        "\u51ac\u81f3"
    ],
    /**
    * 1900-2100各年的24节气日期速查表
    * @Array Of Property 
    * @return 0x string For splice
    */ sTermInfo: [
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c3598082c95f8c965cc920f',
        '97bd0b06bdb0722c965ce1cfcc920f',
        'b027097bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f',
        '97bd0b06bdb0722c965ce1cfcc920f',
        'b027097bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f',
        '97bd0b06bdb0722c965ce1cfcc920f',
        'b027097bd097c36b0b6fc9274c91aa',
        '9778397bd19801ec9210c965cc920e',
        '97b6b97bd19801ec95f8c965cc920f',
        '97bd09801d98082c95f8e1cfcc920f',
        '97bd097bd097c36b0b6fc9210c8dc2',
        '9778397bd197c36c9210c9274c91aa',
        '97b6b97bd19801ec95f8c965cc920e',
        '97bd09801d98082c95f8e1cfcc920f',
        '97bd097bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa',
        '97b6b97bd19801ec95f8c965cc920e',
        '97bcf97c3598082c95f8e1cfcc920f',
        '97bd097bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c3598082c95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c3598082c95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f',
        '97bd097bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf97c359801ec95f8c965cc920f',
        '97bd097bd07f595b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9210c8dc2',
        '9778397bd19801ec9210c9274c920e',
        '97b6b97bd19801ec95f8c965cc920f',
        '97bd07f5307f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c920e',
        '97b6b97bd19801ec95f8c965cc920f',
        '97bd07f5307f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bd07f1487f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c965cc920e',
        '97bcf7f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b97bd19801ec9210c9274c920e',
        '97bcf7f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa',
        '97b6b97bd197c36c9210c9274c920e',
        '97bcf7f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36c9210c9274c920e',
        '97b6b7f0e47f531b0723b0b6fb0722',
        '7f0e37f5307f595b0b0bc920fb0722',
        '7f0e397bd097c36b0b6fc9210c8dc2',
        '9778397bd097c36b0b70c9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9274c91aa',
        '97b6b7f0e47f531b0723b0787b0721',
        '7f0e27f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c91aa',
        '97b6b7f0e47f149b0723b0787b0721',
        '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '9778397bd097c36b0b6fc9210c8dc2',
        '977837f0e37f149b0723b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722',
        '7f0e37f5307f595b0b0bc920fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2',
        '977837f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc9210c8dc2',
        '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd097c35b0b6fc920fb0722',
        '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14998082b0787b06bd',
        '7f07e7f0e47f149b0723b0787b0721',
        '7f0e27f0e47f531b0b0bb0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14998082b0723b06bd',
        '7f07e7f0e37f149b0723b0787b0721',
        '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e397bd07f595b0b0bc920fb0722',
        '977837f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722',
        '7f0e37f1487f595b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722',
        '7f0e37f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e37f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b072297c35',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e37f14898082b072297c35',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f149b0723b0787b0721',
        '7f0e27f1487f531b0b0bb0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14998082b0723b06bd',
        '7f07e7f0e47f149b0723b0787b0721',
        '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14998082b0723b06bd',
        '7f07e7f0e37f14998083b0787b0721',
        '7f0e27f0e47f531b0723b0b6fb0722',
        '7f0e37f0e366aa89801eb072297c35',
        '7ec967f0e37f14898082b0723b02d5',
        '7f07e7f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722',
        '7f0e36665b66aa89801e9808297c35',
        '665f67f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b0721',
        '7f07e7f0e47f531b0723b0b6fb0722',
        '7f0e36665b66a449801e9808297c35',
        '665f67f0e37f14898082b0723b02d5',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e36665b66a449801e9808297c35',
        '665f67f0e37f14898082b072297c35',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e26665b66a449801e9808297c35',
        '665f67f0e37f1489801eb072297c35',
        '7ec967f0e37f14998082b0787b06bd',
        '7f07e7f0e47f531b0723b0b6fb0721',
        '7f0e27f1487f531b0b0bb0b6fb0722'
    ],
    /**
    * 数字转中文速查表
    * @Array Of Property 
    * @trans ['日','一','二','三','四','五','六','七','八','九','十']
    * @return Cn string 
    */ nStr1: [
        "\u65e5",
        "\u4e00",
        "\u4e8c",
        "\u4e09",
        "\u56db",
        "\u4e94",
        "\u516d",
        "\u4e03",
        "\u516b",
        "\u4e5d",
        "\u5341"
    ],
    /**
    * 日期转农历称呼速查表
    * @Array Of Property 
    * @trans ['初','十','廿','卅']
    * @return Cn string 
    */ nStr2: [
        "\u521d",
        "\u5341",
        "\u5eff",
        "\u5345"
    ],
    /**
    * 月份转农历称呼速查表
    * @Array Of Property 
    * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
    * @return Cn string 
    */ nStr3: [
        "\u6b63",
        "\u4e8c",
        "\u4e09",
        "\u56db",
        "\u4e94",
        "\u516d",
        "\u4e03",
        "\u516b",
        "\u4e5d",
        "\u5341",
        "\u51ac",
        "\u814a"
    ],
    /**
    * 返回农历y年一整年的总天数
    * @param lunar Year
    * @return Number
    * @eg:var count = calendar.lYearDays(1987) ;//count=387
    */ lYearDays: function(y) {
        var i, sum = 348;
        for(i = 0x8000; i > 0x8; i >>= 1){
            sum += calendar.lunarInfo[y - 1900] & i ? 1 : 0;
        }
        return sum + calendar.leapDays(y);
    },
    /**
    * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
    * @param lunar Year
    * @return Number (0-12)
    * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
    */ leapMonth: function(y) {
        return calendar.lunarInfo[y - 1900] & 0xf;
    },
    /**
    * 返回农历y年闰月的天数 若该年没有闰月则返回0
    * @param lunar Year
    * @return Number (0、29、30)
    * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
    */ leapDays: function(y) {
        if (calendar.leapMonth(y)) {
            return calendar.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
        }
        return 0;
    },
    /**
    * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
    * @param lunar Year
    * @return Number (-1、29、30)
    * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
    */ monthDays: function(y, m) {
        if (m > 12 || m < 1) {
            return -1;
        } //月份参数从1至12，参数错误返回-1
        return calendar.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
    },
    /**
    * 返回公历(!)y年m月的天数
    * @param solar Year
    * @return Number (-1、28、29、30、31)
    * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
    */ solarDays: function(y, m) {
        if (m > 12 || m < 1) {
            return -1;
        } //若参数错误 返回-1
        var ms = m - 1;
        if (ms == 1) {
            return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
        } else {
            return calendar.solarMonth[ms];
        }
    },
    /**
    * 传入offset偏移量返回干支
    * @param offset 相对甲子的偏移量
    * @return Cn string
    */ toGanZhi: function(offset) {
        return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
    },
    /**
    * 传入公历(!)y年获得该年第n个节气的公历日期
    * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起 
    * @return day Number
    * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
    */ getTerm: function(y, n) {
        if (y < 1900 || y > 2100) {
            return -1;
        }
        if (n < 1 || n > 24) {
            return -1;
        }
        var _table = calendar.sTermInfo[y - 1900];
        var _info = [
            parseInt('0x' + _table.substr(0, 5)).toString(),
            parseInt('0x' + _table.substr(5, 5)).toString(),
            parseInt('0x' + _table.substr(10, 5)).toString(),
            parseInt('0x' + _table.substr(15, 5)).toString(),
            parseInt('0x' + _table.substr(20, 5)).toString(),
            parseInt('0x' + _table.substr(25, 5)).toString()
        ];
        var _calday = [
            _info[0].substr(0, 1),
            _info[0].substr(1, 2),
            _info[0].substr(3, 1),
            _info[0].substr(4, 2),
            _info[1].substr(0, 1),
            _info[1].substr(1, 2),
            _info[1].substr(3, 1),
            _info[1].substr(4, 2),
            _info[2].substr(0, 1),
            _info[2].substr(1, 2),
            _info[2].substr(3, 1),
            _info[2].substr(4, 2),
            _info[3].substr(0, 1),
            _info[3].substr(1, 2),
            _info[3].substr(3, 1),
            _info[3].substr(4, 2),
            _info[4].substr(0, 1),
            _info[4].substr(1, 2),
            _info[4].substr(3, 1),
            _info[4].substr(4, 2),
            _info[5].substr(0, 1),
            _info[5].substr(1, 2),
            _info[5].substr(3, 1),
            _info[5].substr(4, 2)
        ];
        return parseInt(_calday[n - 1]);
    },
    /**
    * 传入农历数字月份返回汉语通俗表示法
    * @param lunar month
    * @return Cn string
    * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
    */ toChinaMonth: function(m) {
        if (m > 12 || m < 1) {
            return -1;
        } //若参数错误 返回-1
        var s = calendar.nStr3[m - 1];
        s += "\u6708"; //加上月字
        return s;
    },
    /**
    * 传入农历日期数字返回汉字表示法
    * @param lunar day
    * @return Cn string
    * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
    */ toChinaDay: function(d) {
        var s;
        switch(d){
            case 10:
                s = '\u521d\u5341';
                break;
            case 20:
                s = '\u4e8c\u5341';
                break;
                break;
            case 30:
                s = '\u4e09\u5341';
                break;
                break;
            default:
                s = calendar.nStr2[Math.floor(d / 10)];
                s += calendar.nStr1[d % 10];
        }
        return s;
    },
    /**
    * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
    * @param y year
    * @return Cn string
    * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
    */ getAnimal: function(y) {
        return calendar.Animals[(y - 4) % 12];
    },
    /**
    * 传入公历年月日获得详细的公历、农历object信息 <=>JSON
    * @param y  solar year
    * @param m solar month
    * @param d  solar day
    * @return JSON object
    * @eg:console.log(calendar.solar2lunar(1987,11,01));
    */ solar2lunar: function(y, m, d) {
        if (y < 1900 || y > 2100) {
            return -1;
        } //年份限定、上限
        if (y == 1900 && m == 1 && d < 31) {
            return -1;
        } //下限
        if (!y) {
            var objDate = new Date();
        } else {
            var objDate = new Date(y, parseInt(m) - 1, d);
        }
        var i, leap = 0, temp = 0;
        //修正ymd参数
        var y = objDate.getFullYear(), m = objDate.getMonth() + 1, d = objDate.getDate();
        var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
        for(i = 1900; i < 2101 && offset > 0; i++){
            temp = calendar.lYearDays(i);
            offset -= temp;
        }
        if (offset < 0) {
            offset += temp;
            i--;
        }
        //是否今天
        var isTodayObj = new Date(), isToday = false;
        if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
            isToday = true;
        }
        //星期几
        var nWeek = objDate.getDay(), cWeek = calendar.nStr1[nWeek];
        if (nWeek == 0) {
            nWeek = 7;
        } //数字表示周几顺应天朝周一开始的惯例
        //农历年
        var year = i;
        var leap = calendar.leapMonth(i); //闰哪个月
        var isLeap = false;
        //效验闰月
        for(i = 1; i < 13 && offset > 0; i++){
            //闰月
            if (leap > 0 && i == leap + 1 && isLeap == false) {
                --i;
                isLeap = true;
                temp = calendar.leapDays(year); //计算农历闰月天数
            } else {
                temp = calendar.monthDays(year, i); //计算农历普通月天数
            }
            //解除闰月
            if (isLeap == true && i == leap + 1) {
                isLeap = false;
            }
            offset -= temp;
        }
        if (offset == 0 && leap > 0 && i == leap + 1) if (isLeap) {
            isLeap = false;
        } else {
            isLeap = true;
            --i;
        }
        if (offset < 0) {
            offset += temp;
            --i;
        }
        //农历月
        var month = i;
        //农历日
        var day = offset + 1;
        //天干地支处理
        var sm = m - 1;
        var term3 = calendar.getTerm(year, 3); //该农历年立春日期
        var gzY = calendar.toGanZhi(year - 4); //普通按年份计算，下方尚需按立春节气来修正
        //依据立春日进行修正gzY
        if (sm < 2 && d < term3) {
            gzY = calendar.toGanZhi(year - 5);
        } else {
            gzY = calendar.toGanZhi(year - 4);
        }
        //月柱 1900年1月小寒以前为 丙子月(60进制12)
        var firstNode = calendar.getTerm(y, m * 2 - 1); //返回当月「节」为几日开始
        var secondNode = calendar.getTerm(y, m * 2); //返回当月「节」为几日开始
        //依据12节气修正干支月
        var gzM = calendar.toGanZhi((y - 1900) * 12 + m + 11);
        if (d >= firstNode) {
            gzM = calendar.toGanZhi((y - 1900) * 12 + m + 12);
        }
        //传入的日期的节气与否
        var isTerm = false;
        var Term = null;
        if (firstNode == d) {
            isTerm = true;
            Term = calendar.solarTerm[m * 2 - 2];
        }
        if (secondNode == d) {
            isTerm = true;
            Term = calendar.solarTerm[m * 2 - 1];
        }
        //日柱 当月一日与 1900/1/1 相差天数
        var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
        var gzD = calendar.toGanZhi(dayCyclical + d - 1);
        return {
            'lYear': year,
            'lMonth': month,
            'lDay': day,
            'Animal': calendar.getAnimal(year),
            'IMonthCn': (isLeap ? "\u95f0" : '') + calendar.toChinaMonth(month),
            'IDayCn': calendar.toChinaDay(day),
            'cYear': y,
            'cMonth': m,
            'cDay': d,
            'gzYear': gzY,
            'gzMonth': gzM,
            'gzDay': gzD,
            'isToday': isToday,
            'isLeap': isLeap,
            'nWeek': nWeek,
            'ncWeek': "\u661f\u671f" + cWeek,
            'isTerm': isTerm,
            'Term': Term
        };
    },
    /**
    * 传入公历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
    * @param y  lunar year
    * @param m lunar month
    * @param d  lunar day
    * @param isLeapMonth  lunar month is leap or not.
    * @return JSON object
    * @eg:console.log(calendar.lunar2solar(1987,9,10));
    */ lunar2solar: function(y, m, d, isLeapMonth) {
        var leapOffset = 0;
        var leapMonth = calendar.leapMonth(y);
        var leapDay = calendar.leapDays(y);
        if (isLeapMonth && leapMonth != m) {
            return -1;
        } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
        if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
            return -1;
        } //超出了最大极限值
        var day = calendar.monthDays(y, m);
        if (y < 1900 || y > 2100 || d > day) {
            return -1;
        } //参数合法性效验
        //计算农历的时间差
        var offset = 0;
        for(var i = 1900; i < y; i++){
            offset += calendar.lYearDays(i);
        }
        var leap = 0, isAdd = false;
        for(var i = 1; i < m; i++){
            leap = calendar.leapMonth(y);
            if (!isAdd) {
                if (leap <= i && leap > 0) {
                    offset += calendar.leapDays(y);
                    isAdd = true;
                }
            }
            offset += calendar.monthDays(y, i);
        }
        //转换闰月农历 需补充该年闰月的前一个月的时差
        if (isLeapMonth) {
            offset += day;
        }
        //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
        var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
        var calObj = new Date((offset + d - 31) * 86400000 + stmap);
        var cY = calObj.getUTCFullYear();
        var cM = calObj.getUTCMonth() + 1;
        var cD = calObj.getUTCDate();
        return calendar.solar2lunar(cY, cM, cD);
    }
};
}}),
"[project]/src/lib/wuxing.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WanNianLi": (()=>WanNianLi)
});
var WanNianLi = function() {
    //天干序数：1（甲），2（乙），……
    var __TianGan = [
        '',
        '甲',
        '乙',
        '丙',
        '丁',
        '戊',
        '己',
        '庚',
        '辛',
        '壬',
        '癸'
    ], //地支序数：1（寅），2（卯），……
    __NianZhi = [
        '',
        '寅',
        '卯',
        '辰',
        '巳',
        '午',
        '未',
        '申',
        '酉',
        '戌',
        '亥',
        '子',
        '丑'
    ], //月的地支序数：寅月为正月，……
    __YueZhi = [
        '',
        '寅',
        '卯',
        '辰',
        '巳',
        '午',
        '未',
        '申',
        '酉',
        '戌',
        '亥',
        '子',
        '丑'
    ], __WuXing = {
        '甲': '木',
        '乙': '木',
        '丙': '火',
        '丁': '火',
        '戊': '土',
        '己': '土',
        '庚': '金',
        '辛': '金',
        '壬': '水',
        '癸': '水',
        '寅': '木',
        '卯': '木',
        '辰': '土',
        '巳': '火',
        '午': '火',
        '未': '土',
        '申': '金',
        '酉': '金',
        '戌': '土',
        '亥': '水',
        '子': '水',
        '丑': '土'
    }, __JiaZi = [
        undefined,
        '甲子',
        '乙丑',
        '丙寅',
        '丁卯',
        '戊辰',
        '己巳',
        '庚午',
        '辛未',
        '壬申',
        '癸酉',
        '甲戌',
        '乙亥',
        '丙子',
        '丁丑',
        '戊寅',
        '己卯',
        '庚辰',
        '辛巳',
        '壬午',
        '癸未',
        '甲申',
        '乙酉',
        '丙戌',
        '丁亥',
        '戊子',
        '己丑',
        '庚寅',
        '辛卯',
        '壬辰',
        '癸巳',
        '甲午',
        '乙未',
        '丙申',
        '丁酉',
        '戊戌',
        '己亥',
        '庚子',
        '辛丑',
        '壬寅',
        '癸卯',
        '甲辰',
        '乙巳',
        '丙午',
        '丁未',
        '戊申',
        '己酉',
        '庚戌',
        '辛亥',
        '壬子',
        '癸丑',
        '甲寅',
        '乙卯',
        '丙辰',
        '丁巳',
        '戊午',
        '己未',
        '庚申',
        '辛酉',
        '壬戌',
        '癸亥'
    ], //时干支
    __ShiGanZhi = {
        '-1': '子',
        '0': '丑',
        '1': '寅',
        '2': '卯',
        '3': '辰',
        '4': '巳',
        '5': '午',
        '6': '未',
        '7': '申',
        '8': '酉',
        '9': '戌',
        '10': '亥',
        '11': '子'
    };
    /**
     * 计算两个日期之间的天数
     * @param {Object} date1
     * @param {Object} date2
     */ function daysBetweenDate(date1, date2) {
        return parseInt((date2.getTime() - date1.getTime()) / 1000 / 60 / 60 / 24);
    }
    /**
     * 判断是否闰年
     * @param {Object} year
     */ function isRunnian(year) {
        year = Number(year);
        if (year % 100 === 0) {
            return year % 400 === 0;
        } else {
            return year % 4 === 0;
        }
    }
    /**
     * 获取月份基数
     * | 月份	| 1 | 2  | 3  | 4  | 5 | 6  | 7 | 8  | 9 | 10 | 11 | 12 |
     * | 月基数	| 0 | 31 | -1 | 30 | 0 | 31 | 1 | 32 | 3 | 33 | 4  | 34 |
     * @param {Object} month
     */ function getMonthBase(month) {
        month = Number(month);
        var base = [
            undefined,
            0,
            31,
            -1,
            30,
            0,
            31,
            1,
            32,
            3,
            33,
            4,
            34
        ];
        return base[month];
    }
    /**
     * 获取指定年份所属的世纪
     * @param {Object} year
     */ function getCenturyByYear(year) {
        year = Number(year);
        if (year % 100 === 0) {
            return year / 100;
        }
        return parseInt(year / 100) + 1;
    }
    /**
     * 根据世纪，计算该世纪常数。公式：X = 44*(C-17) + (C-17)/4 + 3。C：世纪，X：世纪常数
     * @param {Object} century
     */ function getCenturyConst(century) {
        century = Number(century);
        return (44 * (century - 17) + parseInt((century - 17) / 4) + 3) % 60;
    }
    /**
     * 根据高氏日柱公式，获取指定日期的天干地支。
     * 公式：r = s/4*6 + 5*(s/4*3+u)+m+d+x。
     * r：日柱的母数，r除以60取余，即时日柱的干支序列数。
     * s：公元年数后两位减1，s/4取整数部分。
     * u：s除以4的余数
     * m：月基数
     * d：日期数
     * x：世纪常数
     * @param {Object} year
     * @param {Object} month
     * @param {Object} date
     */ function getRiGan(year, month, date) {
        year = Number(year);
        var s = year % 100 - 1, u = s % 4, m = getMonthBase(month), d = date, x = getCenturyConst(getCenturyByYear(year));
        // console.log('s:%s,u:%s,m:%s,d:%s,x:%s', s, u, m, d, x);
        var r = parseInt(s / 4) * 6 + 5 * (parseInt(s / 4) * 3 + u) + m + d + x;
        if (isRunnian(year) && month > 2) {
            r += 1;
        }
        r %= 60;
        r === 0 && (r = 60);
        return r;
    }
    /**
     * 获取年干。公式：年干=年份个位数-3。适用于任何西元年，个位数小于3时，借10
     * @param {Object} year
     */ function getNianGanIndex(year) {
        //年干=年份个位数-3，个位数小于2，借10
        var index = Number(year.toString().slice(-1, year.length));
        index <= 3 && (index += 10);
        index -= 3;
        return index;
    }
    /**
     * 获取年支。公式：年支=(年份+7)/12取余数。整除余0即12，为丑。
     * @param {Object} year
     */ function getNianZhiIndex(year) {
        return (Number(year) + 7) % 12 || 12;
    }
    /**
     * 获取月干。公式：月干=年干*2+月支
     * @param {Object} nianGanIndex
     * @param {Object} lMonth
     */ function getYueGanIndex(nianGanIndex, lMonth) {
        var index = Number(nianGanIndex) * 2 + Number(lMonth);
        index %= 10;
        index === 0 && (index = 10);
        return index;
    }
    /**
     * 获取月支。公式：月支=农历月份
     * @param {Object} lMonth
     */ function getYueZhiIndex(lMonth) {
        return Number(lMonth);
    }
    /**
     * 获取时支。公式：时支=小时/2 - 1（小时为偶数时），时支=(小时+1)/2 - 1（小时为奇数时）
     * @param {Object} hour
     */ function getShiZhiIndex(hour) {
        hour = Number(hour);
        if (hour % 2 === 0) {
            return hour / 2 - 1;
        } else {
            return (hour + 1) / 2 - 1;
        }
    }
    /**
     * 获取时干。公式：时干=日干*2 + 时支
     * @param {Object} riGanIndex
     * @param {Object} shiZhiIndex
     */ function getShiGanIndex(riGanIndex, shiZhiIndex) {
        var index = (riGanIndex * 2 + shiZhiIndex) % 10;
        index === 0 && (index = 10);
        return index;
    }
    function getWuxingResult(wuxing) {
        var temp = {
            '金': 0,
            '木': 0,
            '水': 0,
            '火': 0,
            '土': 0
        };
        [].forEach.call(Object.keys(wuxing), function(value, index) {
            [].forEach.call(wuxing[value], function(v, i) {
                temp[v]++;
            });
        });
        return temp;
    }
    return {
        getResult: function(date) {
            var __bazi = {
                year: '',
                month: '',
                date: '',
                hour: ''
            };
            var __wuxing = {
                year: '',
                month: '',
                date: '',
                hour: ''
            };
            var nianGanIndex = -1;
            var nianZhiIndex = -1;
            var yueGanIndex = -1;
            var yueZhiIndex = -1;
            var riGanIndex = -1;
            var shiZhiIndex = -1;
            var shiGanIndex = -1;
            var y1 = '';
            var y2 = '';
            var m1 = '';
            var m2 = '';
            var serial = '';
            var riGan = '';
            nianGanIndex = getNianGanIndex(date.cYear);
            y1 = __TianGan[nianGanIndex];
            __bazi.year = y1;
            __wuxing.year = __WuXing[y1];
            //年支=(年份+7)除以12的余数。
            nianZhiIndex = getNianZhiIndex(date.cYear);
            y2 = __NianZhi[nianZhiIndex];
            __bazi.year += y2;
            __wuxing.year += __WuXing[y2];
            //月干=年干*2 + 月支，和超过10，直接取个位数
            yueGanIndex = getYueGanIndex(nianGanIndex, date.lMonth);
            y1 = __TianGan[yueGanIndex];
            __bazi.month = y1;
            __wuxing.month = __WuXing[y1];
            //月支=农历月份
            yueZhiIndex = getYueZhiIndex(date.lMonth);
            y2 = __YueZhi[yueZhiIndex];
            __bazi.month += y2;
            __wuxing.month += __WuXing[y2];
            //日干及日支。采用高氏日柱公式，得到日期在甲子表中的序号
            serial = getRiGan(date.cYear, date.cMonth, date.cDay);
            riGan = __JiaZi[serial];
            riGanIndex = __TianGan.indexOf(riGan.slice(0, 1));
            __bazi.date = riGan;
            __wuxing.date = __WuXing[riGan.slice(0, 1)] + __WuXing[riGan.slice(1, 2)];
            //时支
            shiZhiIndex = getShiZhiIndex(date.hour);
            __bazi.hour = __ShiGanZhi[shiZhiIndex];
            __wuxing.hour = __WuXing[__bazi.hour];
            //时干
            shiGanIndex = getShiGanIndex(riGanIndex, shiZhiIndex);
            __bazi.hour = __TianGan[shiGanIndex] + __bazi.hour;
            __wuxing.hour = __WuXing[__TianGan[shiGanIndex]] + __wuxing.hour;
            return {
                bazi: __bazi,
                wuxing: __wuxing,
                wuxingResult: getWuxingResult(__wuxing)
            };
        }
    };
}(); // var a = {
 //     cYear: 2016, //公历年份
 //     cMonth: 7, //公历月份
 //     lMonth: 6, //农历月份
 //     cDay: 15, //公历日期
 //     lDay: 12, //农历日期
 //     hour: 22,
 //     minute: 16
 // };
 // var result = WanNianLi.getResult(a);
 // console.log(result);
}}),
"[project]/src/lib/nayin.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>getLunisolar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lunisolar$2b$plugin$2d$takesound$40$0$2e$1$2e$2$2f$node_modules$2f40$lunisolar$2f$plugin$2d$takesound$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@lunisolar+plugin-takesound@0.1.2/node_modules/@lunisolar/plugin-takesound/dist/index.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lunisolar$40$2$2e$5$2e$2$2f$node_modules$2f$lunisolar$2f$dist$2f$lunisolar$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lunisolar@2.5.2/node_modules/lunisolar/dist/lunisolar.esm.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$moment$40$2$2e$30$2e$1$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/moment@2.30.1/node_modules/moment/moment.js [app-rsc] (ecmascript)");
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lunisolar$40$2$2e$5$2e$2$2f$node_modules$2f$lunisolar$2f$dist$2f$lunisolar$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$lunisolar$2b$plugin$2d$takesound$40$0$2e$1$2e$2$2f$node_modules$2f40$lunisolar$2f$plugin$2d$takesound$2f$dist$2f$index$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["takeSound"]);
function getLunisolar(birthDateTime) {
    const lsr = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lunisolar$40$2$2e$5$2e$2$2f$node_modules$2f$lunisolar$2f$dist$2f$lunisolar$2e$esm$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$moment$40$2$2e$30$2e$1$2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(birthDateTime).format('YYYY-MM-DD'));
    return lsr.char8.year.takeSound;
} //console.log(lsr.char8.year.takeSound)  // 金箔金 （取得年干支的纳音）
 //lsr.char8.year.takeSoundE5.toString() // 金 （取得年干支的纳音五行）
 // ...
 //console.log(lsr.char8.day.takeSound) // 大海水 （取得日干支的纳音）
 //lsr.takeSound // 大海水 （取得日干支的纳音 等同于 lsr.char8.day.takeSound）
}}),
"[project]/src/components/Report.jsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Report.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Report.jsx <module evaluation>", "default");
}}),
"[project]/src/components/Report.jsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Report.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Report.jsx", "default");
}}),
"[project]/src/components/Report.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Report$2e$jsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Report.jsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Report$2e$jsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/Report.jsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Report$2e$jsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/[locale]/report/page.jsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ReportPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.2.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/calendar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wuxing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/wuxing.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nayin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/nayin.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/[locale]/report/action.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Report$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Report.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
async function ReportPage({ params, searchParams }) {
    const { locale } = await params;
    const { birthDateTime } = await searchParams;
    if (!birthDateTime) return "数据错误，请重新生成报告。";
    const { year, month, day, hour } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBirthDate"])(birthDateTime);
    const designData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f5b$locale$5d2f$report$2f$action$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDesignData"])();
    let lunar = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$calendar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["calendar"].solar2lunar(Number(year), Number(month), Number(day));
    lunar.hour = Number(hour);
    let result = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$wuxing$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WanNianLi"].getResult(lunar);
    let nayin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$nayin$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(birthDateTime);
    console.log('result', result, nayin);
    // var msg = msg1 = '';
    // [].forEach.call(Object.keys(result.wuxingResult), function (value, index) {
    //   if (result.wuxingResult[value] === 0) {
    //     msg += '<em>' + value + ': ' + result.wuxingResult[value] + '</em>' + ', ';
    //     !msg1 && (msg1 = '<br/>五行缺：');
    //     msg1 += value + ', ';
    //   } else {
    //     msg += value + ': ' + result.wuxingResult[value] + ', ';
    //   }
    // });
    // msg = msg.slice(0, msg.length - 2);
    // if (msg1.length > 2) {
    //   msg1 = msg1.slice(0, msg1.length - 2);
    // }
    // console.log(msg, msg1)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$2$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Report$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        locale: locale,
        result: result,
        nayin: nayin,
        designJsonData: JSON.stringify(designData)
    }, void 0, false, {
        fileName: "[project]/src/app/[locale]/report/page.jsx",
        lineNumber: 37,
        columnNumber: 12
    }, this);
}
}}),
"[project]/src/app/[locale]/report/page.jsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[locale]/report/page.jsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__aaf4fa33._.js.map