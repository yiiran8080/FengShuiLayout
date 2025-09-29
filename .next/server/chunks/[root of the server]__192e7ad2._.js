module.exports = {

"[project]/.next-internal/server/app/api/conversation-history/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[project]/src/models/ChatHistory.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
// Clear cached model to ensure schema updates take effect
if (__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.ChatHistory) {
    delete __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.ChatHistory;
}
const ChatHistorySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    // Conversation identifiers
    conversationId: {
        type: String,
        required: true,
        index: true
    },
    sessionId: {
        type: String,
        required: true,
        index: true
    },
    userId: {
        type: String,
        required: true,
        index: true
    },
    userEmail: {
        type: String,
        required: false
    },
    // Conversation metadata
    title: {
        type: String,
        required: true
    },
    primaryConcern: {
        type: String,
        enum: [
            "工作",
            "感情",
            "財運",
            "子女",
            "人際關係",
            "健康",
            "因緣",
            "風水佈局",
            "其他"
        ],
        required: false
    },
    conversationState: {
        type: String,
        enum: [
            "initial",
            "ai_analyzing",
            "birthday_collection",
            "asking_detailed_report",
            "ready_for_detailed_report",
            "collecting_payment_info",
            "completed"
        ],
        default: "initial"
    },
    // Messages array
    messages: [
        {
            messageId: {
                type: String,
                required: true
            },
            role: {
                type: String,
                enum: [
                    "user",
                    "assistant"
                ],
                required: true
            },
            content: {
                type: String,
                required: true
            },
            timestamp: {
                type: Date,
                default: Date.now
            },
            aiAnalysis: {
                detectedTopic: String,
                isWithinScope: Boolean,
                confidence: Number,
                specificProblem: String
            },
            systemType: {
                type: String,
                default: "smart-chat2"
            }
        }
    ],
    // Conversation statistics
    stats: {
        totalMessages: {
            type: Number,
            default: 0
        },
        lastActivity: {
            type: Date,
            default: Date.now
        },
        userEngagement: {
            type: Number,
            min: 0,
            max: 1,
            default: 0.5
        }
    },
    // Context preservation
    context: {
        topics: [
            String
        ],
        lastTopic: String,
        conversationSummary: String,
        emotionalState: String
    },
    // User data (if collected)
    userData: {
        userBirthday: Date,
        partnerBirthday: Date,
        gender: String,
        partnerGender: String,
        relationshipType: String
    },
    // Status flags
    isActive: {
        type: Boolean,
        default: true
    },
    isArchived: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
    indexes: [
        {
            userId: 1,
            conversationId: 1
        },
        {
            userId: 1,
            isActive: 1
        },
        {
            sessionId: 1
        },
        {
            "stats.lastActivity": -1
        },
        {
            createdAt: -1
        }
    ]
});
// Instance methods
ChatHistorySchema.methods.addMessage = function(role, content, aiAnalysis = null) {
    const messageId = `msg-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    this.messages.push({
        messageId,
        role,
        content,
        timestamp: new Date(),
        aiAnalysis,
        systemType: "smart-chat2"
    });
    this.stats.totalMessages = this.messages.length;
    this.stats.lastActivity = new Date();
    return messageId;
};
ChatHistorySchema.methods.updateContext = function(topic, emotionalState = null) {
    if (topic && !this.context.topics.includes(topic)) {
        this.context.topics.push(topic);
    }
    if (topic) {
        this.context.lastTopic = topic;
    }
    if (emotionalState) {
        this.context.emotionalState = emotionalState;
    }
};
ChatHistorySchema.methods.generateSummary = function() {
    const messageCount = this.stats.totalMessages;
    const primaryConcern = this.primaryConcern || "一般諮詢";
    if (messageCount === 0) {
        return `剛開始的${primaryConcern}對話`;
    } else if (messageCount < 5) {
        return `${primaryConcern}初步討論（${messageCount}輪）`;
    } else {
        return `${primaryConcern}深入討論（${messageCount}輪）`;
    }
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.ChatHistory || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("ChatHistory", ChatHistorySchema);
}}),
"[project]/src/app/api/conversation-history/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongoose.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$ChatHistory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/models/ChatHistory.js [app-route] (ecmascript)");
;
;
;
async function GET(request) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"])();
        const { searchParams } = new URL(request.url);
        const userEmail = searchParams.get("userEmail");
        const userId = searchParams.get("userId");
        const limit = parseInt(searchParams.get("limit")) || 20;
        // 支援兩種用戶識別方式：userEmail 或 userId
        const userIdentifier = userEmail || userId;
        if (!userIdentifier) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "用戶識別參數不能為空 (userEmail 或 userId)"
            }, {
                status: 400
            });
        }
        console.log("📚 從ChatHistory獲取用戶對話歷史:", userIdentifier);
        // 從ChatHistory獲取對話歷史
        const query = userEmail ? {
            userEmail: userEmail
        } : {
            userId: userId
        };
        const chatHistories = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$models$2f$ChatHistory$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).sort({
            updatedAt: -1
        }).limit(limit).lean();
        console.log(`📊 找到 ${chatHistories.length} 個對話記錄`);
        const conversationSummaries = chatHistories.map((chat)=>{
            const lastMessage = chat.messages?.[chat.messages.length - 1];
            const lastUserMessage = chat.messages?.filter((msg)=>msg.role === "user")?.slice(-1)[0];
            return {
                conversationId: chat.conversationId,
                sessionId: chat.sessionId || chat.conversationId,
                title: chat.title || generateConversationTitle(chat.primaryConcern, lastUserMessage?.content),
                primaryConcern: chat.primaryConcern || "一般諮詢",
                messageCount: chat.messages?.length || 0,
                lastUpdated: chat.updatedAt,
                lastActivity: chat.updatedAt,
                conversationState: chat.conversationState,
                preview: generatePreview(lastUserMessage?.content || ""),
                hasDetailedHistory: true,
                topics: chat.context?.topics || [
                    chat.primaryConcern
                ].filter(Boolean)
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            userIdentifier: userIdentifier,
            totalConversations: conversationSummaries.length,
            conversations: conversationSummaries
        });
    } catch (error) {
        console.error("❌ 獲取對話歷史失敗:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "獲取對話歷史失敗",
            details: error.message
        }, {
            status: 500
        });
    }
}
// 輔助函數：生成對話標題 - 顯示實際用戶問題
function generateConversationTitle(primaryConcern, lastMessage) {
    // 優先使用實際的用戶問題作為標題
    if (lastMessage && typeof lastMessage === "string" && lastMessage.trim()) {
        // 清理和截取用戶問題，用作標題
        const cleanedMessage = lastMessage.replace(/\s+/g, " ").trim();
        // 如果消息太長，截取前40個字符並加上省略號
        if (cleanedMessage.length > 40) {
            return cleanedMessage.substring(0, 40) + "...";
        }
        return cleanedMessage;
    }
    // 備用方案：使用傳統的分類標題
    const concernTitles = {
        感情: "感情諮詢",
        工作: "工作運勢",
        財運: "財運分析",
        健康: "健康運勢",
        人際: "人際關係",
        子女: "子女運勢",
        居家佈局: "居家風水"
    };
    if (primaryConcern && concernTitles[primaryConcern]) {
        return concernTitles[primaryConcern];
    }
    return "風水諮詢";
}
// 輔助函數：生成預覽文字
function generatePreview(message) {
    if (!message) return "暫無內容";
    // 清理文字並截取前30個字符
    const cleaned = message.replace(/\s+/g, " ").trim();
    return cleaned.length > 30 ? cleaned.substring(0, 30) + "..." : cleaned;
}
// 輔助函數：提取話題標籤
function extractTopics(primaryConcern, lastMessage) {
    const topics = [];
    // 主要關注領域
    if (primaryConcern) {
        topics.push(primaryConcern);
    }
    // 從訊息內容提取其他話題
    if (lastMessage) {
        const topicKeywords = {
            感情: [
                "感情",
                "愛情",
                "桃花",
                "姻緣",
                "戀愛",
                "分手",
                "結婚"
            ],
            工作: [
                "工作",
                "事業",
                "職場",
                "升職",
                "跳槽",
                "創業"
            ],
            財運: [
                "財運",
                "賺錢",
                "投資",
                "理財",
                "收入",
                "金錢"
            ],
            健康: [
                "健康",
                "身體",
                "養生",
                "病痛",
                "醫療"
            ],
            人際: [
                "人際",
                "朋友",
                "同事",
                "合作",
                "社交"
            ],
            子女: [
                "子女",
                "孩子",
                "教育",
                "學習",
                "考試"
            ],
            居家: [
                "居家",
                "房子",
                "搬家",
                "裝修",
                "佈局"
            ],
            八字: [
                "八字",
                "命盤",
                "五行",
                "天干",
                "地支"
            ]
        };
        for (const [topic, keywords] of Object.entries(topicKeywords)){
            if (keywords.some((keyword)=>lastMessage.includes(keyword))) {
                if (!topics.includes(topic)) {
                    topics.push(topic);
                }
            }
        }
    }
    return topics.slice(0, 3); // 最多返回3個話題
}
// 輔助函數：獲取最後一條用戶消息 - 支持兩種數據格式
function getLastUserMessage(lastMessage) {
    if (!lastMessage) return null;
    // 新格式：role/content
    if (lastMessage.role && lastMessage.content) {
        return lastMessage.role === "user" ? lastMessage.content : null;
    }
    // 舊格式：userMessage/assistantMessage
    if (lastMessage.userMessage) {
        return lastMessage.userMessage;
    }
    return null;
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__192e7ad2._.js.map