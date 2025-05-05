import { getAllArticles } from '@/shared/api/api-service';
import { queryOptions } from '@tanstack/react-query';

import { transformArticlesDTO } from '../lib/transform-articles-dto';

export const ARTICLES_ROOT_QUERY_KEY = ['articles'];

export const articlesQueryOptions = (locale: string, page: number = 1, limit: number = 1) =>
  queryOptions({
    queryKey: [ARTICLES_ROOT_QUERY_KEY, page],
    queryFn: async () => {
      const response = await getAllArticles({
        params: {
          locale,
          limit,
          page,
        },
      });

      const transformedResponse = transformArticlesDTO(response);

      return transformedResponse;
    },
  });
