import { News as NewsDTO } from '@/shared/payload/payload-types';
import { PaginatedDocs } from 'payload';

export type NewsWithPaginationDTO = PaginatedDocs<NewsDTO>

export type NewsItem = {
  id: string;
  head: string;
  body: string;
  image?: string | null;
}

export type NewsWithPagination = PaginatedDocs<NewsItem>
