import { AxiosRequestConfig } from 'axios';

import {
  ArticleDetailedResponseDTOSchema,
  ArticlesPaginatedResponseDTOSchema,
} from './api-contracts';
import { apiContractValidator } from './api-contracts-validator';
import { apiInstance } from './api-instance';

export function getAllArticles(config?: AxiosRequestConfig) {
  return apiInstance
    .get(`http://localhost:3000/api/articles`, config)
    .then(apiContractValidator(ArticlesPaginatedResponseDTOSchema));
}

export function getArticle(slug: string, config?: AxiosRequestConfig) {
  return apiInstance
    .get(`http://localhost:3000/api/articles/${slug}`, config)
    .then(apiContractValidator(ArticleDetailedResponseDTOSchema));
}
