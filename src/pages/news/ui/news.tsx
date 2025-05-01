'use client';

import { FC } from 'react';

import { News as NewsType } from '@/app/payload/payload-types';
import { NewsList } from '@/entities/news';
import { LanguageChanger } from '@/shared/ui';
import { Container } from '@mui/material';

interface NewsProps {
  data: Array<NewsType>;
}

export const News: FC<NewsProps> = ({ data }) => (
  <Container>
    <LanguageChanger />

    <NewsList data={data} />
  </Container>
);
