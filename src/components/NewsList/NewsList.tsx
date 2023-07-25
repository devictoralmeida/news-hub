import { produce } from 'immer'
import { useNewsContext } from '../../hooks/useNewsContext'
import { INews } from '../../providers/NewsContext/@types'
import NewsCard from '../NewsCard/NewsCard'
import { StyledNewsList } from './NewsList.styles'

const NewsList = () => {
  const { allNewsList } = useNewsContext()

  let atualizedNewsList
  if (allNewsList) {
    atualizedNewsList = produce(allNewsList, (draft: INews[]) => {
      draft.reverse()
    })
  }

  return (
    <StyledNewsList>
      {atualizedNewsList?.map((item: INews) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </StyledNewsList>
  )
}

export default NewsList
