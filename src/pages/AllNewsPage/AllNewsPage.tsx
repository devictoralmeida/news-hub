import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { StyledTitleAndButtonContainer } from '../HomePage/StyledCardContainer'
import { StyledHeadline2 } from '../../styles/typography'
import NewsList from '../../components/NewsList/NewsList'
import { StyledContainer, StyledLoaderContainer } from '../../styles/grid'
import { useState, useEffect } from 'react'
import { useNewsContext } from '../../hooks/useNewsContext'
import { BounceLoader } from 'react-spinners'

const AllNewsPage = () => {
  const { getAllNews, allNewsList } = useNewsContext()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loadNews = async () => {
      await getAllNews(setLoading)
    }

    if (!allNewsList) {
      loadNews()
    }
  }, [])

  useEffect(() => {
    document.title = `News Hub - Todas as notícias`
  }, [])

  return (
    <>
      {loading ? (
        <StyledLoaderContainer>
          <BounceLoader color="#55A3FF" size={30} />
        </StyledLoaderContainer>
      ) : (
        <>
          <Header />
          <StyledContainer>
            <StyledTitleAndButtonContainer>
              <StyledHeadline2 fontSize="medium">
                Todas as notícias
              </StyledHeadline2>
            </StyledTitleAndButtonContainer>
            <NewsList />
          </StyledContainer>
          <Footer />
        </>
      )}
    </>
  )
}

export default AllNewsPage
