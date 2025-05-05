'use client';

import { FC } from 'react';

import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

import { ArticlePreviewProps } from '../model/article-types';

const ArticlePreview: FC<ArticlePreviewProps> = ({ id, title, body, link, imageUrl }) => (
  <Card id={id} component="article">
    <CardActionArea href={link}>
      {imageUrl && <CardMedia component="img" height="140" image={imageUrl} alt={title} />}

      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>

        <Typography variant="subtitle2" color="text.secondary">
          {body}
        </Typography>

        <Button>More info</Button>
      </CardContent>
    </CardActionArea>
  </Card>
);

export default ArticlePreview;
