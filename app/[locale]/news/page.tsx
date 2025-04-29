import React, { FC } from 'react'
import { TranslationsProvider } from '@/app/providers'
import initTranslations from '@/shared/configs/i18n/i18n'
import { getNews } from '@/entities/news'
import NewsPage from '@/pages/news'
import { Locales } from '@/shared/types'

interface NewsPageProps {
  params: { locale: Locales }
}

const i18nNamespaces = ['news']

const News: FC<NewsPageProps> = async ({ params }) => {
  const { locale } = await params
  const { resources } = await initTranslations(locale, i18nNamespaces)
  const news = await getNews(locale)

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <NewsPage data={news} />
    </TranslationsProvider>
  )
}

export default News
