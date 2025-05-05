import React, { FC } from 'react';

import { TranslationsProvider } from '@/app/providers';
import { articleQueryOptions } from '@/entities/article/api/article-query-options';
import { NewsDetailed } from '@/pages/news-detailed';
import initTranslations from '@/shared/configs/i18n/i18n';
import { getQueryClient } from '@/shared/queryClient';
import { PagePropsWithSlug } from '@/shared/types';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

const i18nNamespaces = ['news'];

const NewsDetailPage: FC<PagePropsWithSlug> = async ({ params }) => {
  const { locale, slug } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(articleQueryOptions(locale, slug));

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <NewsDetailed articleId={slug} locale={locale} />
      </HydrationBoundary>
    </TranslationsProvider>
  );
};

export default NewsDetailPage;
