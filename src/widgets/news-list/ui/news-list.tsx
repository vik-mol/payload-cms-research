'use client';

import { useNewsListPagination } from '../model/use-news-pagination';
import { NewsWithPagination } from '../model/types';
import { Locale } from '@/shared/types';
import classnames from 'classnames';
import { NewsPreviewCard } from './news-preview-card';


export const NewsList = ({ locale, initialData }: { locale: Locale, initialData?: NewsWithPagination }) => {
  const { docs, isError, isLoading, pagination } = useNewsListPagination(locale, initialData);

  if (docs?.length === 0 || isError) {
    return <div>error</div>
  }

  return (
    <div className={classnames('flex flex-col gap-4', {
      'opacity-50': isLoading,
      'opacity-100': !isLoading,
    })}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {docs?.map((doc) => (
          <NewsPreviewCard key={doc.id} {...doc} />
        ))}
      </div>
      {pagination}
    </div>
  );
};
