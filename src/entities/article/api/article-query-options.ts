import { getArticle } from '@/shared/api/api-service';
import { queryOptions } from '@tanstack/react-query';

import { transformDetailedArticleDTO } from '../lib/transform-article-dto';

export const ARTICLE_ROOT_QUERY_KEY = ['article'];

export const articleQueryOptions = (locale: string, slug: string) =>
  queryOptions({
    queryKey: [ARTICLE_ROOT_QUERY_KEY, locale, slug],
    queryFn: async () => {
      const response = await getArticle(slug, {
        params: {
          locale,
        },
      });

      const transformedData = transformDetailedArticleDTO(response);

      return transformedData;
    },
  });
