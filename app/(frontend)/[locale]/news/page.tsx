import { NewsPage } from '@/pages/news/news-page';
import { Locale, PageProps } from '@/shared/types';
import { FC } from 'react';

const News: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
console.log('render')
  return <NewsPage locale={locale} />
};

export default News;
