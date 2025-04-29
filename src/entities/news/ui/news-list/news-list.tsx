import { FC } from 'react'
import { NewsListProps } from './news-list.types'
import NewsPreview from '../news-preview'
import Style from './news-list.module.sass'

const NewsList: FC<NewsListProps> = ({ data }) => {
  const cards = data.map(({ id, ...other }) => (
    <li key={id}>
      <NewsPreview {...other} />
    </li>
  ))

  return <ul className={Style.grid}>{cards}</ul>
}

export default NewsList
