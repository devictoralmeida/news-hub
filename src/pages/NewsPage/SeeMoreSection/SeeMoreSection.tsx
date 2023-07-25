import { produce } from 'immer'
import { useEffect } from 'react'
import NewsCard from '../../../components/NewsCard/NewsCard'
import { StyledNewsList } from '../../../components/NewsList/NewsList.styles'
import { useNewsContext } from '../../../hooks/useNewsContext'
import { INews } from '../../../providers/NewsContext/@types'
import { StyledHeadline2 } from '../../../styles/typography'
import { StyledSeeMoreNewsContainer } from './SeeMoreSection.styles'

interface ISeeMoreSectionProps {
  postId: number
}

const SeeMoreSection = ({ postId }: ISeeMoreSectionProps) => {
  const { getAllNews, allNewsList } = useNewsContext()

  useEffect(() => {
    const loadAllNews = async () => {
      await getAllNews()
    }
    loadAllNews()
  }, [])

  const removeActualNews = allNewsList
    ? allNewsList.filter((news: INews) => news.id !== postId)
    : null

  const actualList = removeActualNews
    ? produce(removeActualNews, (draft: INews[]) => {
        draft.reverse()
      })
    : null

  return (
    <>
      {actualList && actualList.length >= 1 ? (
        <StyledSeeMoreNewsContainer>
          <StyledHeadline2 fontSize="medium">Leia também</StyledHeadline2>
          <StyledNewsList>
            {actualList.length >= 2 ? (
              <>
                <NewsCard news={actualList[0]} />
                <NewsCard news={actualList[1]} />
              </>
            ) : null}
            {actualList.length === 1 ? (
              <>
                <NewsCard news={actualList[0]} isAlone />
              </>
            ) : null}
          </StyledNewsList>
        </StyledSeeMoreNewsContainer>
      ) : null}
    </>
  )
}

export default SeeMoreSection
