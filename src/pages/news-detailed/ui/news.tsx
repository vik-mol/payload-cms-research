'use client';

import { FC } from 'react';

import { articleQueryOptions } from '@/entities/article/api/article-query-options';
import { Locales } from '@/shared/types';
import { LanguageChanger } from '@/shared/ui';
import { Container } from '@mui/material';
import { Box, Divider, Typography } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';

type NewsDetailedProps = {
  articleId: string;
  locale: Locales;
};

export const NewsDetailed: FC<NewsDetailedProps> = ({ articleId, locale }) => {
  const { data } = useSuspenseQuery(articleQueryOptions(locale, articleId));

  return (
    <Container>
      <LanguageChanger />

      <Container maxWidth="md" sx={{ mt: 4, mb: 6 }}>
        <Typography variant="h3" gutterBottom>
          {data.title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary" gutterBottom>
          {data.createdAt}
        </Typography>

        <Typography variant="body1">{data.body}</Typography>

        <Divider sx={{ mt: 4 }} />
      </Container>
    </Container>
  );
};
