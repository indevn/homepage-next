# 不使用 Notion 的替代方案

## 方案 1：使用 Markdown 文件

### 1. 创建内容目录结构
```
content/
├── posts/
│   ├── my-first-post.md
│   ├── javascript-tips.md
│   └── ...
└── config.json
```

### 2. Markdown 文件格式
```markdown
---
title: "我的第一篇博客"
slug: "my-first-post"
summary: "这是我的第一篇博客文章"
category: "Coding"
tags: ["javascript", "web"]
date: "2024-01-15"
status: "Published"
type: "Post"
---

# 文章内容

这里是文章的正文内容...
```

### 3. 修改数据获取逻辑
```typescript
// lib/markdown-handler.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      content: matterResult.content,
      ...matterResult.data,
    };
  });

  return allPostsData.filter(post => post.status === 'Published');
}
```

## 方案 2：使用 GitHub 作为 CMS

### 1. 将内容存储在 GitHub 仓库
### 2. 使用 GitHub API 获取数据
### 3. 支持通过 GitHub Issues 或 Discussions 管理内容

## 方案 3：使用 Contentful

### 1. 注册 Contentful 账户
### 2. 设置内容模型
### 3. 使用 Contentful API 获取数据

```typescript
// lib/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllPosts() {
  const entries = await client.getEntries({
    content_type: 'blogPost',
  });
  
  return entries.items.map(item => ({
    title: item.fields.title,
    slug: item.fields.slug,
    content: item.fields.content,
    // ...其他字段
  }));
}
``` 