import { Locale, PageProps } from "@/shared/types";
import { FC } from "react";
import NewsDetailed from "@/widgets/news-detaile/ui/news-detaile-view";
import { LanguishSwitcher } from "@/shared/ui/languish-switcher";
const NewsDetailedPage: FC<{ params: Promise<{ slug: string, locale: Locale }> }> = async ({ params }) => {
  const { slug, locale } = await params;

  return <div className="container px-10 py-4 mx-auto">
    <LanguishSwitcher />
    <NewsDetailed locale={locale} slug={slug} />
  </div>
};

export default NewsDetailedPage;
