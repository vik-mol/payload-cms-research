import React, { FC } from 'react';

import { TranslationsProvider } from '@/app/providers';
import initTranslations from '@/shared/configs/i18n/i18n';
import { PageProps } from '@/shared/types';

const i18nNamespaces = ['news'];

interface NewsDetailPageProps extends PageProps {
  slug: string;
}

const NewsDetailPage: FC<NewsDetailPageProps> = async ({ params, slug }) => {
  const { locale } = await params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      Детальная новости
    </TranslationsProvider>
  );
};

export default NewsDetailPage;
