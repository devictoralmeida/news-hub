import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { StyledContainer, StyledLoaderContainer } from '../../styles/grid'
import { useState, useEffect } from 'react'
import { useNewsContext } from '../../hooks/useNewsContext'
import { BounceLoader } from 'react-spinners'
import SectionKenzieFeed from './SectionKenzieFeed'
import SectionNews from './SectionNews'

const HomePage = () => {
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
    document.title = `Kenzie Feed - Homepage`
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
            {allNewsList ? (
              <main>
                <SectionKenzieFeed />
                <SectionNews />
              </main>
            ) : null}
          </StyledContainer>
          <Footer />
        </>
      )}
    </>
  )
}

export default HomePage
