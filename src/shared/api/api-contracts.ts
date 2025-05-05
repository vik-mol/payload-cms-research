import z from 'zod';

export const MediaDTOSchema = z.object({
  id: z.string(),
  alt: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  url: z.string().optional(),
  thumbnailURL: z.string().nullable().optional(),
  filename: z.string().nullable().optional(),
  mimeType: z.string().nullable().optional(),
  filesize: z.number().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  focalX: z.number().nullable().optional(),
  focalY: z.number().nullable().optional(),
});

export const ArticleDTOSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
  picture: z.union([z.string(), MediaDTOSchema, z.null()]).optional(),
});

export const ArticlesPaginatedResponseDTOSchema = z.object({
  docs: z.array(ArticleDTOSchema),
  totalDocs: z.number().nullable(),
  limit: z.number().nullable(),
  totalPages: z.number().nullable(),
  page: z.number().nullable(),
  pagingCounter: z.number().nullable(),
  hasPrevPage: z.boolean(),
  hasNextPage: z.boolean(),
  prevPage: z.number().nullable(),
  nextPage: z.number().nullable(),
});

export const ArticleDetailedResponseDTOSchema = z.object({
  id: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
  title: z.string(),
  body: z.string(),
  picture: z.union([z.string(), MediaDTOSchema, z.null()]).optional(),
});

export const ApiErrorDataDtoSchema = z.object({
  errors: z.record(z.string(), z.array(z.string())),
});

export const ApiErrorDataSchema = z.array(z.string());
