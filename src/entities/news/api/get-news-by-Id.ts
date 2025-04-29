export async function getNews() {
  const res = await fetch('http://localhost:3000/api/news', {
    method: 'GET',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Ошибка');
  }

  const data = await res.json();
  return data.docs;
}
