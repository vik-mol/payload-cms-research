'use client'

import { I18nextProvider } from 'react-i18next'
import { ReactNode } from 'react'
import initTranslations from '@/shared/configs/i18n/i18n'
import { Resource, createInstance } from 'i18next'

export function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: {
  children: ReactNode
  locale: string
  namespaces: string[]
  resources: Resource
}) {
  const i18n = createInstance()

  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
