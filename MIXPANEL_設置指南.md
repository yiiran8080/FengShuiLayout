# 🎯 Mixpanel 風水分析追蹤設置指南

## 📋 已完成的設置

### ✅ 安裝和配置

- 已安裝 `mixpanel-browser` 套件
- 創建了完整的風水業務追蹤系統
- 集成到現有的 GA4 追蹤組件中

### 📁 新增文件

- `src/lib/mixpanel.js` - Mixpanel 配置和追蹤類
- `src/components/MixpanelTracker.jsx` - 自動頁面追蹤
- `src/components/MixpanelTestPanel.jsx` - 測試面板
- `src/app/[locale]/mixpanel-test/page.tsx` - 測試頁面

## 🚀 快速開始

### 1. 獲取 Mixpanel Project Token

1. 登入您的 [Mixpanel 控制台](https://mixpanel.com/)
2. 前往 **Settings** → **Project Settings**
3. 複製 **Project Token**

### 2. 設置環境變數

在您的 `.env.local` 文件中添加：

```bash
NEXT_PUBLIC_MIXPANEL_TOKEN=您的_MIXPANEL_PROJECT_TOKEN
```

### 3. 測試追蹤功能

訪問測試頁面: `http://localhost:3000/zh-TW/mixpanel-test`

## 🎯 追蹤的風水業務事件

### 核心業務事件

- **風水分析開始** - 用戶開始分析流程
- **聊天互動** - 用戶與AI助手對話
- **報告生成** - 生成風水分析報告
- **付費轉換** - 用戶購買高級服務
- **按鈕點擊** - 詳細的用戶互動追蹤

### 用戶行為事件

- **頁面瀏覽** - 增強的頁面訪問追蹤
- **滾動深度** - 用戶對內容的參與度
- **停留時間** - 用戶在頁面的參與時間
- **表單提交** - 表單互動和轉換

### 業務分析事件

- **用戶里程碑** - 重要的用戶旅程節點
- **轉換漏斗** - 完整的轉換路徑追蹤
- **A/B測試** - 實驗和優化追蹤
- **錯誤追蹤** - 用戶體驗問題監控

## 📊 與現有 GA4 的整合

### 雙重追蹤優勢

- **GA4**: 網站流量、頁面性能、整體趨勢
- **Mixpanel**: 個別用戶行為、詳細事件屬性、轉換分析

### 數據互補

```javascript
// 現有 GA4 追蹤
window.gtag('event', 'button_click', { ... });

// 新增 Mixpanel 詳細追蹤
FengShuiMixpanel.trackButtonClick('按鈕名稱', {
  '按鈕位置': 'header',
  '用戶類型': 'returning',
  '設備類型': 'mobile'
});
```

## 🔧 使用方法

### 基本事件追蹤

```javascript
import FengShuiMixpanel from "@/lib/mixpanel";

// 追蹤風水分析
FengShuiMixpanel.trackAnalysisStarted({
	analysisType: "房間風水",
	roomType: "臥室",
	photoCount: 3,
});

// 追蹤用戶互動
FengShuiMixpanel.trackButtonClick("開始測算", {
	position: "hero-section",
	userType: "new",
});
```

### 用戶識別

```javascript
// 當用戶登入或註冊時
FengShuiMixpanel.identify("user-123", {
	name: "王小明",
	email: "user@example.com",
	language: "zh-TW",
	signupDate: new Date(),
});
```

### 轉換漏斗追蹤

```javascript
// 追蹤用戶旅程的各個步驟
FengShuiMixpanel.createFunnel("風水分析轉換", "訪問首頁", { stepOrder: 1 });
FengShuiMixpanel.createFunnel("風水分析轉換", "開始分析", { stepOrder: 2 });
FengShuiMixpanel.createFunnel("風水分析轉換", "查看報告", { stepOrder: 3 });
```

## 📈 Mixpanel 儀表板分析

### 建議創建的報告

1. **轉換漏斗分析** - 從訪問到付費的轉換路徑
2. **用戶留存分析** - 用戶回訪和活躍度
3. **功能使用分析** - 哪些風水功能最受歡迎
4. **用戶旅程地圖** - 用戶如何使用您的服務

### 關鍵指標監控

- 風水分析完成率
- 付費轉換率
- 用戶參與深度
- 功能使用頻率

## 🛡️ 隱私和合規

### 已實現的隱私保護

- 支援 Do Not Track 設置
- 用戶可選擇退出追蹤
- 敏感信息不會被追蹤
- 符合 GDPR 要求

### 數據安全

- 所有數據通過 HTTPS 傳輸
- 不追蹤個人身份信息
- 用戶可請求數據刪除

## 🔍 測試和驗證

### 即時測試

1. 訪問 `/zh-TW/mixpanel-test`
2. 運行各種測試功能
3. 在 Mixpanel 控制台查看即時事件

### 生產驗證

1. 檢查 Mixpanel 的 Live View
2. 驗證事件屬性完整性
3. 確認用戶識別正常運作

## 🚀 下一步建議

### 短期目標

- [ ] 設置 Mixpanel Project Token
- [ ] 測試所有追蹤功能
- [ ] 創建基本的分析儀表板

### 長期優化

- [ ] 設置自動化報告
- [ ] 實現 A/B 測試框架
- [ ] 集成 Mixpanel People 功能
- [ ] 設置重要事件的警告

## 📞 支援和疑難排解

### 常見問題

1. **事件沒有出現在 Mixpanel** - 檢查 Project Token 和網路連接
2. **用戶屬性沒有更新** - 確認 identify() 調用正確
3. **測試環境數據混入** - 使用不同的 Project Token

### 調試工具

- 開啟瀏覽器開發者工具查看 console 日誌
- 使用 Mixpanel 的 debug 模式
- 檢查網路請求確認事件發送

---

🎉 **您現在擁有完整的 Mixpanel 用戶行為追蹤系統！**

結合 GA4 和 Mixpanel，您可以：

- 深入了解個別用戶的風水分析旅程
- 優化轉換漏斗和用戶體驗
- 基於數據做出業務決策
- 提高風水服務的用戶滿意度

立即設置 Project Token 並開始使用您的專業用戶分析系統！
