import { z } from 'zod';

import { ArticlePreviewSchema } from './article-contracts';

export type ArticlePreviewProps = z.infer<typeof ArticlePreviewSchema>;
