import { Locale } from "@/shared/types";

import { FC } from "react";
import { getDetailedNews } from "../api";


type NewsDetailedProps = {
  slug: string,
  locale: Locale
}

const NewsDetailedView: FC<NewsDetailedProps> = async ({ locale, slug }) => {
  const news = await getDetailedNews(slug, locale);

  return (
    <div>
      <h1>{news.head}</h1>
      <p>{news.body}</p>
    </div>
  )
};

export default NewsDetailedView;
