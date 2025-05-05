import React, { FC } from 'react';

import { TranslationsProvider } from '@/app/providers';
import { articlesQueryOptions } from '@/entities/article/api/articles-query-options';
import { News } from '@/pages/news/ui';
import initTranslations from '@/shared/configs/i18n/i18n';
import { getQueryClient } from '@/shared/queryClient';
import { PageProps } from '@/shared/types';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const i18nNamespaces = ['news'];

const NewsPage: FC<PageProps> = async ({ params }) => {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(articlesQueryOptions(locale));

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <News />
      </HydrationBoundary>
    </TranslationsProvider>
  );
};

export default NewsPage;
