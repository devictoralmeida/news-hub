import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import { StyledContainer, StyledLoaderContainer } from '../../styles/grid'
import { BounceLoader } from 'react-spinners'
import { api } from '../../services/api'
import { INews } from '../../providers/NewsContext/@types'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'
import {
  StyledHeadline1,
  StyledHeadline2,
  StyledParagraph,
} from '../../styles/typography'
import { StyledMainNewsContainer } from './NewsPage.styles'
import Footer from '../../components/Footer/Footer'
import SeeMoreSection from './SeeMoreSection/SeeMoreSection'
import LikeContainer from './LikeContainer/LikeContainer'

const NewsPage = () => {
  const [news, setNews] = useState<INews | null>(null)
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  const postId = Number(id)

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)
        const { data } = await api.get<INews>(`/posts/${postId}?_embed=likes`)
        setNews(data)
      } catch (error) {
        toast.error(
          'Oops! Algo deu errado ao carregar a sua notícia, tente novamente mais tarde',
          {
            className: 'toast-error',
          },
        )
      } finally {
        setLoading(false)
      }
    }
    loadNews()
  }, [])

  useEffect(() => {
    if (news) {
      document.title = `Kenzie Feed - ${news.title}`
    }
  }, [news])

  return (
    <>
      {loading ? (
        <StyledLoaderContainer>
          <BounceLoader color="#55A3FF" size={30} />
        </StyledLoaderContainer>
      ) : (
        <>
          <Header />
          {!news ? (
            <StyledContainer>
              <StyledHeadline2 fontSize="small">
                Algo deu errado ao carregar a sua notícia, tente novamente mais
                tarde.
              </StyledHeadline2>
            </StyledContainer>
          ) : (
            <StyledContainer>
              <StyledMainNewsContainer>
                <cite>Por: {news.owner}</cite>
                <StyledHeadline1 fontSize="post">{news.title}</StyledHeadline1>
                <img src={news.image} alt="Imagem do post" />
                <LikeContainer postId={postId} news={news} />
                <StyledParagraph>{news.description}</StyledParagraph>
              </StyledMainNewsContainer>
              <SeeMoreSection postId={postId} />
            </StyledContainer>
          )}
          <Footer />
        </>
      )}
    </>
  )
}

export default NewsPage
