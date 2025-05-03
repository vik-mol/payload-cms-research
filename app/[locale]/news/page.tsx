import React, { FC } from 'react';

import { TranslationsProvider } from '@/app/providers';
import { getNews } from '@/entities/news';
import { News } from '@/pages/news/ui';
import initTranslations from '@/shared/configs/i18n/i18n';
import { PageProps } from '@/shared/types';

const i18nNamespaces = ['news'];

const NewsPage: FC<PageProps> = async ({ params }) => {
  const { locale } = params;
  const { resources } = await initTranslations(locale, i18nNamespaces);
  const news = await getNews(locale);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <News data={news} />
    </TranslationsProvider>
  );
};

export default NewsPage;
