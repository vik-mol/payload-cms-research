import { FC } from 'react';

import { Grid } from '@mui/material';

import NewsPreview from './news-preview';
import { NewsPreviewProps } from './news-preview.type';

type NewsList = {
  data: Array<NewsPreviewProps>;
};

export const NewsList: FC<NewsList> = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid key={item.id} size={{ xs: 12, md: 6 }}>
          <NewsPreview {...item} />
        </Grid>
      ))}
    </Grid>
  );
};
