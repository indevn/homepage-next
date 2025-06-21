export const SITE_CONFIG = {
  isProd: (process.env.VERCEL_ENV || process.env.NODE_ENV) === 'production',
  notionDatabaseId: process.env.NOTION_DATABASE_ID || '',
  notionApiSecret: process.env.NOTION_API_SECRET || '',
  smmsApiToken: process.env.SMMS_API_TOKEN || '',
  apiCallingToken: process.env.API_CALLING_TOKEN || '',

  title: `indevn`,
  keywords: `indevn, 个人网站, 博客, Homepage, Blog`,
  description: ``,
  author: `indevn`,
  email: ``,
  lang: `zh-CN`,

  blogPerPage: 10,
  categories: {
    nichijou: { notionField: 'life', alias: '日常', favicon: '🍀', description: '随笔' },
    coding: { notionField: 'tech', alias: '技术', favicon: '🧑‍💻', description: '技术相关的记录' },
  },

  utterancRepo: ``,
};
