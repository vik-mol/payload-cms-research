'use client';

import Link from 'next/link';

import { createPath } from '@/shared/lib';
import { LanguageChanger } from '@/shared/ui';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';

import Style from './home.module.sass';

export const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <Container>
      <LanguageChanger />

      <Stack display="flex" alignItems="center" textAlign="center">
        <Typography variant="h3" component="h1" sx={{ mb: 5 }} maxWidth="500px">
          {t('greeting')}
        </Typography>

        <Grid container spacing={3}>
          <Grid>
            <Button component={Link} href={createPath('news', i18n.language)} variant="outlined">
              {t('newsLink')}
            </Button>
          </Grid>
          <Grid>
            <Button component={Link} href="/admin" variant="contained">
              {t('adminLink')}
            </Button>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
};
