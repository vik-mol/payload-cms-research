import { NavigationLink } from '@/shared/ui/navigation-links';
import { FC } from 'react';
import { NewsItem } from '../model/types';

export const NewsPreviewCard: FC<NewsItem> = ({ id, head, body, image }) => (
  <article className="p-6 border rounded-lg shadow-sm mb-4">
    <h2 className="text-2xl font-bold mb-4">{head}</h2>
    <p className="text-gray-700 mb-4">{body}</p>

    {image && <img src={image} alt={head} className="w-full h-64 object-cover rounded-lg" />}

    <NavigationLink href={`/news/${id}`}>
      Read more
    </NavigationLink>
  </article>
)
