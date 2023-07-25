import { INews } from '../../providers/NewsContext/@types'
import { StyledHeadline3 } from '../../styles/typography'
import { StyledNewsCard } from './NewsCard.styles'
import { Link } from 'react-router-dom'

interface INewsCardProps {
  news: INews
  isAlone?: boolean
}

const NewsCard = ({ news, isAlone }: INewsCardProps) => {
  return (
    <StyledNewsCard isAlone={isAlone}>
      <Link to={`/news/${news.id}`}>
        <img src={news.image} alt={`Foto da publicação ${news.title}`} />
      </Link>
      <cite>Por: {news.owner} </cite>
      <StyledHeadline3 fontSize="small">{news.title}</StyledHeadline3>
      <Link to={`/news/${news.id}`}>Leia mais</Link>
    </StyledNewsCard>
  )
}

export default NewsCard
