import { FC } from 'react';

import { ArticlesPreviewsList } from '@/entities/article';
import { LanguageChanger } from '@/shared/ui';
import { Container } from '@mui/material';

export const News: FC = () => (
  <Container>
    <LanguageChanger />
    <ArticlesPreviewsList />
  </Container>
);
