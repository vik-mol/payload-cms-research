'use server';

import { getPayloadApp } from "@/shared/api/get-payload-app";
import { transformNewsDTO } from "../lib";
import { Locale } from "@/shared/types";
import {
  NEWS_WITH_PAGINATION_INITIAL_PAGE,
  NEWS_WITH_PAGINATION_PAGE_SIZE
} from "../model";

export const getPaginatatedNews = async (
  locale: Locale,
  page: number = NEWS_WITH_PAGINATION_INITIAL_PAGE,
  limit: number = NEWS_WITH_PAGINATION_PAGE_SIZE
) => {
  try {
    const payload = await getPayloadApp();

    const response = await payload.find({
      collection: 'news',
      locale,
      limit,
      page,
      sort: '-createdAt',
    });

    if (!response?.docs) {
      return undefined;
    }

    return transformNewsDTO(response);

  } catch (error) {
    return undefined;
  }
}

