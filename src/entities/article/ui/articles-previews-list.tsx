'use client';

import { useState } from 'react';

import { Button, Container } from '@mui/material';
import { useSuspenseQuery } from '@tanstack/react-query';
import { useTranslation } from 'react-i18next';

import { articlesQueryOptions } from '../api/articles-query-options';
import ArticlePreview from './article-preview';

const ArticlesPreviewsList = () => {
  const [page, setPage] = useState(1);
  const { i18n } = useTranslation();
  const { data, isError, isLoading } = useSuspenseQuery(articlesQueryOptions(i18n.language, page));

  const controlClickHandle = (i: number) => () => {
    setPage((prev) => (prev += i));
  };

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <Container>
      {data.docs.map((article) => (
        <ArticlePreview key={article.id} {...article} />
      ))}

      <Button key="prev" onClick={controlClickHandle(-1)} disabled={page === 1}>
        prev page
      </Button>

      <Button key="next" onClick={controlClickHandle(1)} disabled={page >= (data?.totalDocs ?? 0)}>
        next page
      </Button>
    </Container>
  );
};

export default ArticlesPreviewsList;
