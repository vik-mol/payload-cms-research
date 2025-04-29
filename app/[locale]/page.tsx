import React from 'react'
import { Home } from '@/pages'
import { TranslationsProvider } from '@/app/providers/translations-provider'
import initTranslations from '@/shared/configs/i18n/i18n'

const i18nNamespaces = ['home']

export default async function HomePage({ params }: { params: { locale: string } }) {
  const { locale } = await params

  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Home />
    </TranslationsProvider>
  )
}
