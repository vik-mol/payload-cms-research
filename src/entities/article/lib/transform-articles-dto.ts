import { ArticlesPaginatedResponseDTOSchema } from '@/shared/api/api-contracts';
import { z } from 'zod';

import { ArticlePreviewProps } from '../model/article-types';

export const transformArticlesDTO = (
  articlesDTO: z.infer<typeof ArticlesPaginatedResponseDTOSchema>,
) => {
  const { docs, ...other } = articlesDTO;

  const transformedDocs = docs.map((article) => {
    return {
      id: article.id,
      title: article.title,
      body: article.body,
      link: `/news/${article.id}`,
      imageUrl: article.picture && typeof article.picture !== 'string' ? article.picture.url : null,
    };
  }) as Array<ArticlePreviewProps>;

  return {
    docs: transformedDocs,
    ...other,
  };
};
