import { getTranslations } from 'next-intl/server';

export default async function News() {
  const t = await getTranslations();

  return (
    <div>
      <h1>{t('HomePage.greeting')}</h1>
    </div>
  );
}
