import { FC } from 'react'
import { NewsPreviewProps } from './news-preview.types'
import Style from './news-preview.module.sass'

const NewsCard: FC<NewsPreviewProps> = ({ body, title, pastureUrl }) => (
  <article className={Style.container}>
    <h2>{title}</h2>
    <p>{body}</p>
    {pastureUrl && <img src={pastureUrl} />}
  </article>
)

export default NewsCard
