'use client';

import { FC } from 'react';

import { NewsList } from '@/entities/news';
import { News as NewsType } from '@/shared/configs/payload/payload-types';
import { LanguageChanger } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface NewsProps {
  data: Array<NewsType>;
}

export const News: FC<NewsProps> = ({ data }) => {
  const { t } = useTranslation();

  return (
    <div className="wrapper">
      <LanguageChanger />

      <NewsList data={data} />
    </div>
  );
};
