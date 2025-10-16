#!/usr/bin/env node

// 測試認證追蹤設置
console.log("🔍 檢查 MixpanelAuthTracker 設置...\n");

const fs = require("fs");
const path = require("path");

// 檢查文件是否存在
const filesToCheck = [
	"src/components/MixpanelAuthTracker.jsx",
	"src/lib/mixpanel.js",
	"src/app/[locale]/layout.tsx",
];

console.log("📁 檢查必要文件...");
filesToCheck.forEach((file) => {
	const fullPath = path.join(process.cwd(), file);
	if (fs.existsSync(fullPath)) {
		console.log(`✅ ${file} - 存在`);
	} else {
		console.log(`❌ ${file} - 不存在`);
	}
});

// 檢查 MixpanelAuthTracker 是否在 layout 中被引用
console.log("\n🔧 檢查 layout 配置...");
const layoutPath = path.join(process.cwd(), "src/app/[locale]/layout.tsx");
if (fs.existsSync(layoutPath)) {
	const layoutContent = fs.readFileSync(layoutPath, "utf8");

	if (layoutContent.includes("import MixpanelAuthTracker")) {
		console.log("✅ MixpanelAuthTracker 已導入");
	} else {
		console.log("❌ MixpanelAuthTracker 未導入");
	}

	if (layoutContent.includes("<MixpanelAuthTracker")) {
		console.log("✅ MixpanelAuthTracker 已在 JSX 中使用");
	} else {
		console.log("❌ MixpanelAuthTracker 未在 JSX 中使用");
	}
}

// 檢查環境變數
console.log("\n🌍 檢查環境配置...");
console.log(
	"NEXT_PUBLIC_MIXPANEL_TOKEN:",
	process.env.NEXT_PUBLIC_MIXPANEL_TOKEN ? "已設置" : "未設置"
);

console.log("\n📋 設置總結:");
console.log("1. MixpanelAuthTracker 已添加到 locale layout");
console.log("2. 組件會在用戶登入/登出時自動觸發");
console.log("3. 重新啟動開發服務器以確保更改生效");
console.log("4. 登入後應該會在 Mixpanel 中看到真實用戶事件");

console.log("\n🎯 測試步驟:");
console.log("1. 訪問 http://localhost:3001");
console.log("2. 登入您的帳戶");
console.log("3. 檢查瀏覽器控制台是否有認證日誌");
console.log("4. 前往 /zh-TW/mixpanel-user-demo 進行手動測試");
console.log('5. 點擊 "🔐 手動觸發認證追蹤" 按鈕');
