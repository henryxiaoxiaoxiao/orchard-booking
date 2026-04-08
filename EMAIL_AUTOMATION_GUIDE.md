# 🚀 Borello & Borugi Farms - 自动化确认系统

请将你的 Google Apps Script 代码（之前生成 URL 的那个地方）**全部替换**为以下最新代码。

这套代码将实现：
1. **数据归档**：在你的 Google 表格里记录每一笔预约。
2. **自动回信 (FREE)**：系统会以你的名义自动给客户发一封确认邮件。

---

### **复制并粘贴到 Apps Script 编辑器：**

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // 1. 记入 Google Sheet 表格
  // 列顺序：提交时间, 姓名, 手机, 林场地点, 预约时段, 邮箱
  sheet.appendRow([
    new Date(), 
    data.name, 
    data.phone, 
    data.location, 
    data.timeSlot, 
    data.email
  ]);
  
  // 2. 自动给客户发送确认邮件 (使用你的 Gmail 权限)
  if (data.email) {
    var subject = "✅ Reservation Confirmed: " + data.location;
    var body = "Dear " + data.name + ",\n\n" +
               "Your picking session at Borello & Borugi Farms is confirmed!\n\n" +
               "--- RESERVATION DETAILS ---\n" +
               "Location: " + data.location + "\n" +
               "Time Slot: " + data.timeSlot + "\n" +
               "Guest Mobile: " + data.phone + "\n\n" +
               "We have saved your spot. No entrance fee or parking fee required.\n" +
               "Pricing: $6.50/lb for all cherry varieties.\n\n" +
               "See you at the orchard!\n\n" +
               "Best regards,\n" +
               "The Borello & Borugi Team";
    
    // 执行发送指令
    MailApp.sendEmail(data.email, subject, body);
  }
  
  return ContentService.createTextOutput("Success")
    .setMimeType(ContentService.MimeType.TEXT);
}
```

---

### **⚠️ 替换后的关键操作：**
1. 点击编辑器上方的 **Deploy (部署)**。
2. 选择 **Manage deployments (管理部署)**。
3. 点击那个铅笔图标 **Edit (编辑)**。
4. **Version (版本)** 选 **New version (新版本)**（不要选旧的）。
5. 点击 **Deploy (部署)** 即可生效。

这样以后客户点完 Request，他们的邮箱就会秒收确认信，非常有仪式感！
