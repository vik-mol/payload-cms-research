import z from 'zod';

export const ArticlePreviewSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  link: z.string(),
  imageUrl: z.string().optional(),
});

export const ArticleDetailedSchema = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  title: z.string(),
  body: z.string(),
  imageUrl: z.string().optional(),
});
