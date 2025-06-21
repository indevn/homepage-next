import { redirect } from 'next/navigation';
import { SITE_CONFIG } from '@/site.config';
import HomeWrapper from '@/app/_components/HomeWrapper';
import FancyLink from '@/app/_components/FancyLink';

export default function Home() {
  // 重定向到第一个分类的博客页面
  const firstCategory = Object.keys(SITE_CONFIG.categories)[0];
  redirect(`/categories/${firstCategory}/1`);
}
