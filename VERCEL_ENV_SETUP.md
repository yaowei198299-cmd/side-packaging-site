# Vercel 环境变量配置指南 (询盘邮件通知)

为了激活独立站的询盘邮件通知功能，您需要在 Vercel 控制台中配置以下两个环境变量。

### 配置步骤：

1.  登录 [Vercel Dashboard](https://vercel.com/dashboard)。
2.  进入项目：**`side-packaging-headless`** (或您的项目名称)。
3.  点击顶部的 **Settings** 选项卡。
4.  在左侧菜单中选择 **Environment Variables**。
5.  添加以下两个变量：

| Key | Value (示例) | 说明 |
| :--- | :--- | :--- |
| **`EMAIL_USER`** | `yaowei198299@gmail.com` | 用于发送邮件的 Gmail 地址。 |
| **`EMAIL_PASS`** | `xxxx xxxx xxxx xxxx` | **Gmail 应用专用密码** (不是普通登录密码)。 |

---

### 如何获取 Gmail 应用专用密码 (EMAIL_PASS)？

1.  访问您的 [Google 帐号设置](https://myaccount.google.com/)。
2.  在左侧选择 **安全性 (Security)**。
3.  确保已开启 **两步验证 (2-Step Verification)**。
4.  搜索 **应用专用密码 (App Passwords)**。
5.  在“选择应用”中选 `其他 (自定义名称)`，输入 `Side Packaging Site`。
6.  点击“生成”，复制显示的 16 位密码。

### 验证：
配置完成后，重新部署 (Redeploy) 或在下一次提交代码后生效。您可以尝试在网站 `/inquiry` 页面提交一封测试询盘。

---
*注：Jocelyn 的接收邮箱已配置为 `jocelyn@saidepackaging.com` 和 `yaowei198299@gmail.com`。*
