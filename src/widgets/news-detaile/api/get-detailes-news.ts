
import { getPayloadApp } from "@/shared/api/get-payload-app";
import { Locale } from "@/shared/types";

export const getDetailedNews = async (slug: string, locale: Locale) => {
  const payload = await getPayloadApp();
  const news = await payload.findByID({ collection: 'news', id: slug, locale, });

  return news;
};

