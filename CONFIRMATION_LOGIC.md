# Confirmation Logic (Google Apps Script)

请将你之前的 Google Apps Script 代码替换为以下版本。这会同时实现：
1. **自动记入表格**
2. **自动发送确认邮件**（作为短信的免费替代方案）

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  // 1. 记入表格
  sheet.appendRow([new Date(), data.name, data.phone, data.location, data.timeSlot, data.email]);
  
  // 2. 发送确认邮件 (免费)
  if (data.email) {
    var subject = "Reservation Confirmed: " + data.location;
    var body = "Hi " + data.name + ",\n\n" +
               "Your picking session at " + data.location + " is confirmed!\n\n" +
               "Details:\n" +
               "- Time: " + data.timeSlot + "\n" +
               "- Location: " + data.location + "\n\n" +
               "We look forward to seeing you at the orchard!\n\n" +
               "Borello & Borugi Farms";
    
    MailApp.sendEmail(data.email, subject, body);
  }
  
  return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
}
```

---

# SMS Integration Info (Twilio)

如果你坚持要发短信，会产生以下费用：

1. **号码月租**：约 $1.15/月。
2. **短信单价**：约 $0.008/条。
3. **运营商附加费**：约 $0.004/条。
4. **一次性注册费** (A2P 10DLC): 约 $20-$50 (美国合规要求)。

**总结**：短信更贵且流程复杂。我建议先用上面的“免费确认邮件”逻辑。
