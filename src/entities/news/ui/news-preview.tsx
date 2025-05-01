import { FC } from 'react';

import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { NewsPreviewProps } from './news-preview.type';

const NewsPreview: FC<NewsPreviewProps> = ({ id, body, title, imageUrl }) => (
  <Card component="article">
    <CardActionArea href="/news/slug">
      {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default NewsPreview;
