import { ArticleDetailedResponseDTOSchema } from '@/shared/api/api-contracts';
import dayjs from 'dayjs';
import { z } from 'zod';

import { ArticleDetailedSchema } from '../model/article-contracts';

export const transformDetailedArticleDTO = (
  articleDetailedResponseDTO: z.infer<typeof ArticleDetailedResponseDTOSchema>,
): z.infer<typeof ArticleDetailedSchema> => {
  const { title, body, id, createdAt } = articleDetailedResponseDTO;

  const createdAtFormatted = dayjs(createdAt).format('DD/MM/YYYY');

  return {
    id,
    title,
    body,
    createdAt: createdAtFormatted,
  };
};
