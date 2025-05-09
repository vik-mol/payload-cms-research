import { LanguishSwitcher } from '@/shared/ui/languish-switcher';
import { Locale } from '@/shared/types';
import { cookies } from 'next/headers';
import { FC } from 'react';

import { NewsList, getPaginatatedNews } from '@/widgets/news-list';

type NewsPageProps = {
  locale: Locale;
};

export const NewsPage: FC<NewsPageProps> = async ({ locale }) => {
  const newsList = await getPaginatatedNews(locale);

  return (
    <div className='container px-10 py-4 mx-auto'>
      <LanguishSwitcher />
      <NewsList initialData={newsList} locale={locale} />
    </div>
  );
};
