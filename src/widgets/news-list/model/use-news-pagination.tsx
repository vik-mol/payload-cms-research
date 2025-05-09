'use client';

import { useState } from 'react';
import { getPaginatatedNews } from '../api';
import { Locale } from '@/shared/types';
import { NewsWithPagination } from './types';

export const useNewsListPagination = (locale: Locale, initialData?: NewsWithPagination) => {
  const [paginatedNews, setPaginatedNews] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getPaginatedNews = async (page: number) => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await getPaginatatedNews(locale, page);

      if (res && res.docs?.length > 0) {
        setPaginatedNews(res);
      } else {
        setIsError(true);
      }

    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const changePage = (inc: number) => () => {
    const nextPage = (paginatedNews?.page ?? 0) + inc
    getPaginatedNews(nextPage)
  }

  return {
    docs: paginatedNews?.docs,
    isLoading,
    isError,
    pagination: (
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={changePage(-1)}>Prev</button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={changePage(1)}>Next</button>
      </div>
    )
  }
}
