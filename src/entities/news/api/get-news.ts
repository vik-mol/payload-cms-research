import { Locales } from '@/shared/types';

export async function getNews(locale: Locales) {
  const res = await fetch(`${process.env.API_URL}/news?locale=${locale}`, {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Ошибка загрузки новостей');
  }

  const data = await res.json();
  return data.docs;
}
