export const SITE_CONFIG = {
  isProd: (process.env.VERCEL_ENV || process.env.NODE_ENV) === 'production',
  notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  notionApiSecret: process.env.NOTION_API_SECRET || '',
  smmsApiToken: process.env.SMMS_API_TOKEN || '',

  title: `贼歪`,
  keywords: `贼歪, zy, 个人网站, 博客, 技术, 前端, Notion, Homepage, Blog`,
  description: ``,
  author: `贼歪`,
  email: ``,
  lang: `zh-CN`,

  blogPerPage: 10,
  categories: {
    nichijou: { notionField: 'Nichijou', alias: '日常', favicon: '🍀', description: '一个普通人的思考与呓语。' },
    coding: { notionField: 'Coding', alias: '编程', favicon: '🧑‍💻', description: '一堆没有干货的技术笔记。' },
  },

  utterancRepo: ``,
};
