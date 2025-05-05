export type PageProps = {
  params: { locale: Locales };
};

export type PagePropsWithSlug = {
  params: { locale: Locales; slug: string };
};

export type Locales = 'ru' | 'en';
