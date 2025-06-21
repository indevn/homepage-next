# Homepage-Next 项目部署指南

## 项目概述

这是一个基于 Next.js 14 和 Notion API 构建的现代化个人博客网站，使用 Notion 作为 CMS（内容管理系统）。项目采用 App Router 架构，支持静态生成和增量静态再生（ISR），具有优秀的性能和 SEO 表现。

## 项目目录结构

```
homepage-next/
├── public/                          # 静态资源目录
├── src/
│   ├── app/                         # App Router 应用目录
│   │   ├── (blog)/                  # 博客路由组
│   │   │   ├── _components/         # 博客专用组件
│   │   │   │   ├── BlogFooter.tsx   # 博客页脚
│   │   │   │   ├── BlogHeader.tsx   # 博客页头
│   │   │   │   ├── BlogPageContainer.tsx # 博客页面容器
│   │   │   │   ├── BuyMeACoffee.tsx # 赞助组件
│   │   │   │   ├── Comment.tsx      # 评论组件
│   │   │   │   ├── PageHero.tsx     # 页面标题区域
│   │   │   │   ├── Pagination.tsx   # 分页组件
│   │   │   │   ├── PostItem.tsx     # 文章列表项
│   │   │   │   ├── PostsContainer.tsx # 文章容器
│   │   │   │   ├── PostTag.tsx      # 文章标签
│   │   │   │   └── Prose.tsx        # Markdown 渲染组件
│   │   │   ├── _lib/                # 博客逻辑层
│   │   │   │   ├── notion-client.ts  # Notion 客户端
│   │   │   │   ├── notion-handler.ts # Notion 数据处理
│   │   │   │   ├── notion-to-markdown.ts # Notion 转 Markdown
│   │   │   │   └── notion-types.d.ts # Notion 类型定义
│   │   │   ├── blog/                # 博客列表页
│   │   │   ├── categories/          # 分类页面
│   │   │   │   └── [category]/
│   │   │   │       └── [[...page]]/
│   │   │   │           └── page.tsx
│   │   │   ├── friends/             # 友链页面
│   │   │   ├── posts/               # 文章详情页
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx
│   │   │   ├── rss/                 # RSS 订阅
│   │   │   ├── sponsor/             # 赞助页面
│   │   │   ├── tags/                # 标签页面
│   │   │   ├── layout.tsx           # 博客布局
│   │   │   └── loading.tsx          # 加载状态
│   │   ├── (resume)/                # 简历路由组
│   │   │   └── resume/
│   │   │       ├── page.tsx
│   │   │       └── resume.md
│   │   ├── _components/             # 通用组件
│   │   │   ├── Avatar.tsx           # 头像组件
│   │   │   ├── FancyLink.tsx        # 链接组件
│   │   │   ├── HomeWrapper.tsx      # 首页包装器
│   │   │   └── LocaleToggle.tsx     # 语言切换
│   │   ├── api/                     # API 路由
│   │   │   ├── revalidateAll/       # 全局重新验证
│   │   │   └── revalidatePage/      # 页面重新验证
│   │   ├── en/                      # 英文页面
│   │   ├── layout.tsx               # 根布局
│   │   ├── not-found.tsx            # 404 页面
│   │   └── page.tsx                 # 首页
│   ├── assets/                      # 项目资源
│   │   ├── avatar_back.jpg          # 头像背景
│   │   ├── avatar_front.png         # 头像前景
│   │   ├── fonts/                   # 字体文件
│   │   ├── sponsor_alipay.jpg       # 支付宝赞助码
│   │   └── sponsor_wechat.jpg       # 微信赞助码
│   ├── styles/                      # 样式文件
│   │   ├── globals.css              # 全局样式
│   │   └── main.css                 # 主样式
│   ├── utils/                       # 工具函数
│   │   ├── favicon.ts               # 图标工具
│   │   └── smms.ts                  # 图片上传工具
│   ├── global.d.ts                  # 全局类型定义
│   ├── middleware.ts                # 中间件
│   └── site.config.ts               # 网站配置
├── backup/                          # 备份文件
├── next.config.mjs                  # Next.js 配置
├── package.json                     # 依赖配置
├── tailwind.config.ts               # Tailwind CSS 配置
└── tsconfig.json                    # TypeScript 配置
```

## 技术栈

- **前端框架**: Next.js 14 (App Router)
- **样式系统**: Tailwind CSS + @tailwindcss/typography
- **内容管理**: Notion API
- **Markdown 渲染**: react-markdown + react-syntax-highlighter
- **图片托管**: SM.MS（可选）
- **部署平台**: Vercel（推荐）
- **类型系统**: TypeScript

## 核心功能特点

1. **Notion CMS 集成**: 使用 Notion 数据库作为内容管理系统
2. **静态生成 (SSG)**: 支持静态预渲染，性能优异
3. **增量静态再生 (ISR)**: 5分钟缓存自动更新
4. **分类和标签系统**: 支持文章分类和标签管理
5. **代码高亮**: 内置语法高亮支持
6. **响应式设计**: 完全响应式，支持多端访问
7. **SEO 优化**: 完整的 meta 标签和结构化数据
8. **图片优化**: 自动处理 Notion 图片，可选 SM.MS 托管

## 可自定义项配置

### 1. 网站基本信息 (`src/site.config.ts`)

```typescript
export const SITE_CONFIG = {
  // 基本信息
  title: `贼歪`,                    // 网站标题
  keywords: `贼歪, zy, 个人网站, 博客, 技术, 前端, Notion, Homepage, Blog`,
  description: ``,                 // 网站描述
  author: `贼歪`,                  // 作者名称
  email: ``,                       // 联系邮箱
  lang: `zh-CN`,                   // 网站语言

  // 博客设置
  blogPerPage: 10,                 // 每页文章数量
  
  // 分类配置
  categories: {
    nichijou: { 
      notionField: 'Nichijou',     // 对应 Notion 字段名
      alias: '日常',               // 显示名称
      favicon: '🍀',               // 分类图标
      description: '一个普通人的思考与呓语。' 
    },
    coding: { 
      notionField: 'Coding', 
      alias: '编程', 
      favicon: '🧑‍💻', 
      description: '一堆没有干货的技术笔记。' 
    },
  },

  // 评论系统（utterances 配置）
  utterancRepo: ``,                // GitHub 仓库名（用户名/仓库名）
};
```

### 2. 主题样式自定义

- **全局样式**: `src/styles/globals.css`
- **主样式**: `src/styles/main.css`
- **Tailwind 配置**: `tailwind.config.ts`

### 3. 组件自定义

- **头像**: 替换 `src/assets/avatar_front.png` 和 `src/assets/avatar_back.jpg`
- **赞助码**: 替换 `src/assets/sponsor_alipay.jpg` 和 `src/assets/sponsor_wechat.jpg`
- **字体**: 添加自定义字体到 `src/assets/fonts/`

## Notion 数据源设置

### 1. 创建 Notion 集成

1. 访问 [Notion 开发者页面](https://www.notion.so/my-integrations)
2. 点击 "Create new integration"
3. 填写集成名称（如：Homepage Blog）
4. 选择关联的工作区
5. 提交后获得 **Integration Token**（以 `secret_` 开头）

### 2. 创建 Notion 数据库

在 Notion 中创建一个新的数据库，必须包含以下字段：

| 字段名 | 类型 | 必需 | 说明 |
|--------|------|------|------|
| **title** | Title | ✓ | 文章标题 |
| **slug** | Rich text | ✓ | URL 路径（英文，如：my-first-post） |
| **summary** | Rich text | ✓ | 文章摘要 |
| **category** | Select | ✓ | 文章分类（Nichijou/Coding 等） |
| **tags** | Multi-select | ✓ | 文章标签 |
| **date** | Date | ✓ | 发布日期 |
| **status** | Select | ✓ | 状态（Published/Draft） |
| **type** | Select | ✓ | 类型（Post） |

#### 字段配置详细说明：

1. **category 字段选项**:
   - `Nichijou` (对应配置中的 nichijou)
   - `Coding` (对应配置中的 coding)
   - 可根据需要添加更多分类

2. **status 字段选项**:
   - `Published` (已发布)
   - `Draft` (草稿)

3. **type 字段选项**:
   - `Post` (文章类型)

### 3. 获取数据库 ID

1. 打开创建的数据库页面
2. 复制页面 URL
3. 数据库 ID 是 URL 中的一段32位字符串

例如：`https://www.notion.so/workspace/DATABASE_ID?v=VIEW_ID`

### 4. 数据库权限设置

1. 点击数据库右上角的 "..." 菜单
2. 选择 "Connect to"
3. 找到你创建的集成并连接
4. 确保集成有读取权限

## 环境变量配置

创建 `.env.local` 文件（或在 Vercel 中配置）：

```bash
# Notion 配置（必需）
NOTION_API_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# SM.MS 图片托管（可选）
SMMS_API_TOKEN=your_smms_token

# API 调用令牌（生产环境推荐）
API_CALLING_TOKEN=your_custom_secret_token

# 环境标识（Vercel 自动设置）
VERCEL_ENV=production
NODE_ENV=production
```

### 环境变量说明：

- **NOTION_API_SECRET**: Notion 集成令牌，必需
- **NOTION_DATABASE_ID**: Notion 数据库 ID，必需
- **SMMS_API_TOKEN**: SM.MS 图片托管服务令牌，可选
- **API_CALLING_TOKEN**: API 安全令牌，生产环境推荐设置

## 部署到 Vercel

### 方法一：通过 Vercel Dashboard（推荐）

1. **准备 GitHub 仓库**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **连接 Vercel**
   - 访问 [Vercel Dashboard](https://vercel.com/dashboard)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库
   - 点击 "Import"

3. **配置项目设置**
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (保持默认)
   - **Build Command**: `pnpm build` (如果使用 pnpm)
   - **Output Directory**: `.next` (保持默认)
   - **Install Command**: `pnpm install` (如果使用 pnpm)
   - **Node.js Version**: 18.x 或 20.x

4. **设置环境变量**
   在 "Environment Variables" 部分添加：
   ```
   NOTION_API_SECRET=secret_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   NOTION_DATABASE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   SMMS_API_TOKEN=your_smms_token_here
   API_CALLING_TOKEN=your_custom_secret_token
   ```

5. **部署**
   点击 "Deploy" 按钮开始部署

### 方法二：通过 Vercel CLI

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   vercel
   ```

4. **设置环境变量**
   ```bash
   vercel env add NOTION_API_SECRET
   vercel env add NOTION_DATABASE_ID
   vercel env add SMMS_API_TOKEN
   vercel env add API_CALLING_TOKEN
   ```

5. **重新部署**
   ```bash
   vercel --prod
   ```

### 部署后配置

1. **自定义域名**（可选）
   - 在 Vercel Dashboard 中选择项目
   - 进入 "Settings" > "Domains"
   - 添加你的自定义域名

2. **设置 Webhook**（可选）
   如果需要 Notion 内容更新时自动重新构建：
   - 复制 Vercel 提供的 Deploy Hook URL
   - 在 Notion 中设置 Webhook 或使用 Zapier 等工具

## 内容管理最佳实践

### 1. 文章创建流程

1. 在 Notion 数据库中创建新行
2. 填写必要字段（title, slug, summary, category, tags, date）
3. 设置 status 为 "Published"，type 为 "Post"
4. 在页面内容中编写文章正文
5. 网站将在 5 分钟内自动更新（ISR）

### 2. Slug 命名规则

- 使用英文小写字母和连字符
- 避免使用特殊字符和空格
- 示例：`my-first-blog-post`、`javascript-tips-2024`

### 3. 图片处理

项目支持两种图片处理方式：

**方式一：Notion 原生图片**
- 直接在 Notion 中上传图片
- 图片 URL 会在 1 小时后过期
- 适合快速发布，但不推荐长期使用

**方式二：SM.MS 图片托管**
- 配置 `SMMS_API_TOKEN` 环境变量
- 系统会自动将 Notion 图片上传到 SM.MS
- 获得永久有效的图片链接
- 推荐用于生产环境

## 性能优化建议

1. **图片优化**
   - 使用 Next.js Image 组件
   - 配置合适的图片尺寸
   - 启用 SM.MS 图片托管

2. **缓存策略**
   - 博客布局：5分钟缓存 (`revalidate = 300`)
   - 静态页面：构建时生成
   - API 路由：带缓存的数据获取

3. **构建优化**
   - 限制静态生成的文章数量（通过 `GENERATING_POSTS_COUNT`）
   - 使用 `unstable_cache` 缓存 Notion API 调用

## 故障排除

### 常见问题

1. **Notion API 权限错误**
   - 检查集成是否正确连接到数据库
   - 确认 `NOTION_API_SECRET` 格式正确

2. **数据库字段不匹配**
   - 确保数据库包含所有必需字段
   - 检查字段类型是否正确

3. **图片显示异常**
   - Notion 图片 URL 过期：配置 SM.MS 托管
   - 检查图片上传权限

4. **构建失败**
   - 检查环境变量是否正确设置
   - 确认 Notion 数据库有可访问的已发布文章

### 调试方法

1. **本地调试**
   ```bash
   npm run dev
   # 或
   pnpm dev
   ```

2. **查看构建日志**
   ```bash
   npm run build
   # 或
   pnpm build
   ```

3. **检查 Vercel 部署日志**
   - 在 Vercel Dashboard 中选择项目
   - 查看 "Functions" 或 "Deployments" 页面的日志

## 更新和维护

### 内容更新

1. **自动更新**: ISR 机制，5分钟自动重新验证
2. **手动更新**: 访问 `/api/revalidateAll?token=YOUR_TOKEN`
3. **页面级更新**: 访问 `/api/revalidatePage?token=YOUR_TOKEN&path=/posts/your-slug`

### 代码更新

1. 推送代码到 GitHub
2. Vercel 自动触发重新部署
3. 检查部署状态和日志

### 备份建议

1. **定期备份 Notion 数据库**
2. **保存重要的环境变量**
3. **维护代码仓库的备份**

---

## 总结

这个项目为个人博客提供了一个完整的解决方案，通过 Notion 简化了内容管理，通过 Next.js 提供了优秀的性能，通过 Vercel 实现了便捷的部署。按照本指南配置后，你将拥有一个功能完整、性能优异的现代化博客系统。

如有任何问题，请参考项目文档或在 GitHub 仓库中提交 Issue。 