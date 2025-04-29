'use client'

import { useTranslation } from 'react-i18next'
import { LanguageChanger } from '@/shared/ui'
import { News as NewsType } from '@/app/payload/payload-types'
import { FC } from 'react'
import { NewsList } from '@/entities/news'
interface NewsProps {
  data: Array<NewsType>
}

const News: FC<NewsProps> = ({ data }) => {
  const { t } = useTranslation()

  return (
    <div className="wrapper">
      <LanguageChanger />

      <NewsList data={data} />
    </div>
  )
}

export default News
