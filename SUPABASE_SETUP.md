# Supabase 数据库配置指南 (询盘持久化存储)

为了让独立站能够永久保存询盘并在后台显示，我们需要使用 Supabase (一个免费且强大的云数据库)。

### 第一步：创建 Supabase 项目
1. 访问 [Supabase 官网](https://supabase.com/) 并登录。
2. 点击 **New Project**，选择一个名称（如 `side-packaging-db`），设置数据库密码。
3. 等待项目创建完成（约 1-2 分钟）。

### 第二步：获取 API 凭据
1. 在项目控制面板左侧，点击 **Project Settings** (齿轮图标)。
2. 选择 **API**。
3. 找到并复制以下两个值：
   - **`Project URL`**
   - **`anon public (API Key)`**

### 第三步：在 Vercel 中配置环境变量
按照之前的步骤，在 Vercel 项目的 **Settings > Environment Variables** 中添加以下两个新变量：

| Key | Value |
| :--- | :--- |
| **`NEXT_PUBLIC_SUPABASE_URL`** | (填入您的 Project URL) |
| **`NEXT_PUBLIC_SUPABASE_ANON_KEY`** | (填入您的 anon public key) |

### 第四步：创建数据表
1. 在 Supabase 左侧菜单点击 **SQL Editor**。
2. 点击 **New Query**，粘贴以下代码并点击 **Run**：

```sql
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  email text,
  phone text,
  country text,
  company text,
  industry text,
  quantity text,
  message text
);

-- 开启所有人可插入权限 (以便访客提交询盘)
alter table inquiries enable row level security;
create policy "Enable insert for everyone" on inquiries for insert with check (true);
create policy "Enable read for authenticated users" on inquiries for select using (true);
```

---
**完成以上步骤后，请告诉我。我将为您更新网站代码，实现询盘自动保存到数据库并在后台实时显示。**
