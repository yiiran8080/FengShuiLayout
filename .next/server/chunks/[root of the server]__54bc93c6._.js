module.exports = {

"[project]/.next-internal/server/app/api/users/[userId]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/mongoose.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "connectDB": (()=>dbConnect),
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
            return mongoose;
        }).catch((e)=>{
            throw e;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = dbConnect;
;
}}),
"[project]/src/models/User.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const UserSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    // Add password field for email/password auth
    password: {
        type: String,
        required: false
    },
    // Add authentication provider field
    provider: {
        type: String,
        default: "credentials",
        required: false
    },
    // Add name field for registration
    name: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        enum: [
            "female",
            "male"
        ],
        required: true,
        default: "female"
    },
    birthDateTime: {
        type: Date,
        required: true,
        default: new Date(1996, 2, 12, 22)
    },
    email: {
        type: String,
        required: false
    },
    isLock: {
        type: Boolean,
        required: true,
        default: true
    },
    genStatus: {
        type: String,
        enum: [
            "none",
            "waiting",
            "done"
        ],
        required: false
    },
    // Add email verification fields
    emailVerified: {
        type: Boolean,
        default: false
    },
    verificationToken: {
        type: String,
        required: false
    },
    // Add free report tracking
    freeReportStats: {
        totalGenerated: {
            type: Number,
            default: 0
        },
        lastGeneratedAt: {
            type: Date,
            default: null
        },
        firstGeneratedAt: {
            type: Date,
            default: null
        },
        favoriteRoomType: {
            type: String,
            default: null
        },
        favoriteDirection: {
            type: String,
            default: null
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});
// Virtual relationship to free report activities
UserSchema.virtual("freeReportActivities", {
    ref: "FreeReportActivity",
    localField: "userId",
    foreignField: "userId"
});
// Modify Project references
UserSchema.virtual("projects", {
    ref: "Project",
    localField: "userId",
    foreignField: "owner"
});
// Set options to allow virtual properties to be included in JSON
UserSchema.set("toJSON", {
    virtuals: true
});
UserSchema.set("toObject", {
    virtuals: true
});
// Force schema refresh to avoid enum validation conflicts
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.User;
}
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].modelSchemas && __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].modelSchemas.User) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].modelSchemas.User;
}
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("User", UserSchema);
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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/userUtils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createUserIfNotExists": (()=>createUserIfNotExists)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.js [app-route] (ecmascript)");
;
;
async function createUserIfNotExists(userId, email) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Check if user already exists
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            userId
        });
        if (!existingUser) {
            // Create new user with default data
            const newUser = new __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"]({
                userId: userId,
                email: email,
                gender: "female",
                birthDateTime: new Date(1996, 2, 12, 22),
                isLock: true,
                genStatus: "none"
            });
            await newUser.save();
            return newUser;
        }
        return existingUser;
    } catch (error) {
        throw error;
    }
}
}}),
"[project]/src/lib/password.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "hashPassword": (()=>hashPassword),
    "validateEmail": (()=>validateEmail),
    "validatePassword": (()=>validatePassword),
    "verifyPassword": (()=>verifyPassword)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
;
async function hashPassword(password) {
    const saltRounds = 12;
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, saltRounds);
}
async function verifyPassword(password, hashedPassword) {
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hashedPassword);
}
function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one letter and one number
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return {
        isValid: password.length >= minLength && hasLetter && hasNumber,
        message: password.length < minLength ? "Password must be at least 8 characters long" : !hasLetter || !hasNumber ? "Password must contain at least one letter and one number" : ""
    };
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return {
        isValid: emailRegex.test(email),
        message: !emailRegex.test(email) ? "Please enter a valid email address" : ""
    };
}
}}),
"[project]/src/auth.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "auth": (()=>auth),
    "handlers": (()=>handlers),
    "signIn": (()=>signIn),
    "signOut": (()=>signOut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/google.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/google.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$apple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/apple.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$apple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/apple.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next-auth/providers/credentials.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth/core/providers/credentials.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/userUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/password.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const { handlers, signIn, signOut, auth } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"])({
    trustHost: true,
    providers: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$google$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$apple$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            clientId: process.env.APPLE_ID,
            clientSecret: process.env.APPLE_CLIENT_SECRET
        }),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth$2f$core$2f$providers$2f$credentials$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])({
            name: "credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "email"
                },
                password: {
                    label: "Password",
                    type: "password"
                }
            },
            async authorize (credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
                    // Find user by email
                    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                        $or: [
                            {
                                email: credentials.email
                            },
                            {
                                userId: credentials.email
                            }
                        ],
                        provider: "credentials"
                    });
                    if (!user || !user.password) {
                        return null;
                    }
                    // Verify password
                    const isPasswordValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$password$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyPassword"])(credentials.password, user.password);
                    if (!isPasswordValid) {
                        return null;
                    }
                    // Return user object
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        userId: user.userId
                    };
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async signIn ({ user, account, profile }) {
            try {
                const userId = user.email;
                if (!userId) return false;
                // For OAuth providers, create user if not exists
                if (account?.provider === "google" || account?.provider === "apple") {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$userUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createUserIfNotExists"])(userId, user.email);
                }
                return true;
            } catch (error) {
                console.error("Error in signIn callback:", error);
                return false;
            }
        },
        async jwt ({ token, user, account }) {
            if (account && user) {
                token.accessToken = account.access_token;
                token.id = user.id;
                token.userId = user.userId || user.email;
            }
            return token;
        },
        async session ({ session, token }) {
            if (token && session.user) {
                session.user = {
                    ...session.user,
                    id: token.sub,
                    userId: token.userId || session.user.email
                };
            }
            return session;
        }
    },
    pages: {
        signIn: "/auth/login"
    }
});
}}),
"[project]/src/lib/session.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserInfo": (()=>getUserInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$server$2d$only$2f$empty$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/server-only/empty.js [app-route] (ecmascript)"); // 标记只在服务端使用（客户端组件引入会报错）
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/auth.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
;
;
async function getUserInfoFn() {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth"])();
    if (!session?.user) {
        return null;
    }
    return session.user; // 格式如 { id, name, email, image }
}
const getUserInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cache"])(getUserInfoFn);
}}),
"[project]/src/app/api/utils/gen-res-data.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "genErrorData": (()=>genErrorData),
    "genSuccessData": (()=>genSuccessData),
    "genUnAuthData": (()=>genUnAuthData)
});
function genUnAuthData(msg) {
    return {
        status: 401,
        message: msg || "Unauthorized"
    };
}
function genSuccessData(data) {
    const res = {
        status: 0
    };
    if (data) res.data = data;
    return res;
}
function genErrorData(msg) {
    return {
        status: -1,
        message: msg || "server error"
    };
}
}}),
"[project]/src/app/api/users/[userId]/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/User.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/session.ts [app-route] (ecmascript)");
// import { getServerSession } from 'next-auth/next';
// import { authOptions } from '../../auth/[...nextauth]/route';
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/api/utils/gen-res-data.ts [app-route] (ecmascript)");
;
;
;
;
;
async function GET(request, { params }) {
    const { userId } = await params;
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            userId
        }).select("-__v");
        // if (!user) {
        //     return NextResponse.json(
        //         { message: 'User not found' },
        //         { status: 404 }
        //     );
        // }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genSuccessData"])(user || {}));
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genErrorData"])("Failed to fetch user"));
    }
}
async function POST(request, { params }) {
    try {
        //const userInfo = { userId: "yunyanyr@gmail.com" };
        const userInfo = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$session$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUserInfo"])();
        if (userInfo == null) return Response.json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genUnAuthData"])());
        const { userId } = await params;
        const data = await request.json();
        //// Authenticate the request (in real app, ensure only the user or admin can update)
        // const session = await getServerSession(authOptions);
        // if (!session || (session.user.id !== userId && !session.user.isAdmin)) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        // }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Find the user
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
            userId
        });
        if (!user) {
            // When creating a new user, ensure provider is included
            const newUserData = {
                userId,
                provider: data.provider || "google",
                ...data
            };
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create(newUserData);
        } else {
            // When updating existing user, preserve required fields and update others
            for(let key in data){
                if (key === "birthDateTime") {
                    user[key] = new Date(data[key]);
                } else {
                    user[key] = data[key];
                }
            }
            // Ensure provider is set if it's somehow missing
            if (!user.provider) {
                user.provider = data.provider || "google";
            }
            // Set updatedAt timestamp
            user.updatedAt = new Date();
            await user.save();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genSuccessData"])());
    } catch (error) {
        if (error.name === 'ValidationError') {
            const validationErrors = Object.values(error.errors).map((err)=>({
                    field: err.path,
                    message: err.message
                }));
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$api$2f$utils$2f$gen$2d$res$2d$data$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["genErrorData"])("Failed to update user"));
    }
}
async function DELETE(request, { params }) {
    try {
        const { userId } = params;
        // Authenticate the request (in real app, ensure only the user or admin can delete)
        // const session = await getServerSession(authOptions);
        // if (!session || (session.user.id !== userId && !session.user.isAdmin)) {
        //   return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        // }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        // Delete the user
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$User$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].deleteOne({
            userId
        });
        if (result.deletedCount === 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "User not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "User deleted successfully"
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to delete user",
            error: error.message
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__54bc93c6._.js.map