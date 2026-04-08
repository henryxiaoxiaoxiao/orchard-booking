# FROZEN_FEATURES.md - Orchard Booking Milestone v2.2

这些功能是针对 Borello & Borugi Farms 果园预约系统已确定的核心逻辑与视觉。

## 1. 核心视觉 (Visual Aesthetic)
- **风格**: "Modern Pastoral" (现代牧歌) 高端农场风格。
- **配色**: 奶油白背景 (`#fffcf5`) + 樱桃红主色调 (`#ef4444`)。
- **排版**: 意大利衬线体 (Serif Italic) 用于标题，干净的 Sans-serif 用于表单。
- **布局**: 40px 大圆角卡片，轻盈的下划线输入交互，配备动态“采摘高峰”状态灯。

## 2. 表单逻辑 (Form Logic)
- **极简字段**: 姓名 (Name)、手机 (Mobile)、林场选择 (Location)、时段选择 (Time Slot)。
- **林场列表**: 包含 5 个正式地点（从 Ranch One 到 Ranch Five）。
- **时段列表**: 08:00 AM - 05:00 PM 的 1 小时颗粒度选择。
- **提交反馈**: 提交后显示丝滑的 "Reserved" 成功页。

## 3. 数据集成 (Data Integration)
- **后端通路**: 采用 Google Apps Script (GAS) 私人通道。
- **目标**: 自动同步至 Owner 的 Google Sheet (henryxiao93@gmail.com)。
- **跨域支持**: 代码层面锁定 `no-cors` 提交模式，确保 Cloudflare 环境下的稳定性。

## 4. 部署与同步
- **平台**: GitHub + Cloudflare Pages。
- **自动化**: 任何 GitHub `main` 分支的提交会自动触发 Cloudflare 重新构建上线。
- **版本锚点**: 2026-04-07 Milestone v2.2。
