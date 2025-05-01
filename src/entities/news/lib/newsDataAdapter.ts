import { News } from '@/app/payload/payload-types';

export const newsDataAdapter = (news: Array<News>) =>
  news.map(({ id, title, body, picture, createdAt }) => {
    let imageUrl = '';
    if (picture && typeof picture !== 'string' && picture.url) imageUrl = picture.url;

    return {
      id,
      title,
      body,
      imageUrl,
      createdAt,
    };
  });
