import { NewsWithPaginationDTO } from '../model';

export const transformNewsDTO = (paginatedNewsDTO: NewsWithPaginationDTO) => {
  const transformedDosc = paginatedNewsDTO.docs.map((news) => {
    const posterUrl = news.poster && typeof news.poster !== 'string' ? news.poster.url : null;
    return ({
      id: news.id,
      head: news.head,
      body: news.body,
      image: posterUrl,
    })
  })

  return {
    ...paginatedNewsDTO,
    docs: transformedDosc,
  }
};
