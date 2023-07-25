import { Heart } from 'phosphor-react'
import { toast } from 'react-toastify'
import { api } from '../../../services/api'
import { StyledParagraph } from '../../../styles/typography'
import { StyledLikeContainer } from './LikeContainer.styles'
import { useUserContext } from '../../../hooks/useUserContext'
import { ILike, INews } from '../../../providers/NewsContext/@types'
import { useEffect, useState } from 'react'

interface ILikeContainerProps {
  postId: number
  news: INews
}

interface IPostData {
  userId: number
  postId: number
}

const LikeContainer = ({ postId, news }: ILikeContainerProps) => {
  const { user } = useUserContext()
  const [likes, setLikes] = useState<ILike[] | null>(null)
  const [likeNumbers, setLikeNumbers] = useState(0)

  const localUserToken = localStorage.getItem('@TOKEN:KENZIE-FEED')

  useEffect(() => {
    if (news) {
      setLikes(news.likes)
      setLikeNumbers(news.likes.length)
    }
  }, [news])

  const handleLike = async () => {
    if (user && likes) {
      const postData = {
        userId: user.id,
        postId,
      }

      const checkIfIsAlreadyLiked = likes.some(
        (like) => like.userId === user.id,
      )
      const likeData = likes.find((like) => like.userId === user.id)

      if (checkIfIsAlreadyLiked && likeData) {
        await deleteLike(likeData)
      } else {
        await likePost(postData)
      }
    } else if (!user) {
      toast.error(
        'Você precisa estar logado para poder dar o like em uma notícia',
        {
          className: 'toast-error',
        },
      )
    }
  }

  const deleteLike = async (likeData: ILike) => {
    try {
      await api.delete(`/likes/${likeData.id}`, {
        headers: {
          Authorization: `Bearer ${localUserToken}`,
        },
      })
      setLikes((likes) => likes!.filter((like) => like.id !== likeData.id))
      setLikeNumbers((likeNumbers) => likeNumbers - 1)
    } catch (error) {
      console.log(error)
      toast.error(
        'Algo deu errado ao remover o seu like, tente novamente mais tarde',
        {
          className: 'toast-error',
        },
      )
    }
  }

  const likePost = async (postData: IPostData) => {
    try {
      const { data } = await api.post('/likes', postData, {
        headers: {
          Authorization: `Bearer ${localUserToken}`,
        },
      })
      setLikes((likes) => [...likes!, data])
      setLikeNumbers((likeNumbers) => likeNumbers + 1)
      console.log(data)
    } catch (error) {
      console.log(error)
      toast.error(
        'Algo deu errado ao dar o seu like, tente novamente mais tarde',
        {
          className: 'toast-error',
        },
      )
    }
  }

  return (
    <StyledLikeContainer>
      {likeNumbers === 0 ? (
        <>
          <Heart
            size={18}
            color="#55a3ff"
            alt="Button for like the post"
            onClick={handleLike}
            cursor={!user ? 'not-allowed' : 'pointer'}
          />
          <StyledParagraph fontSize="small">
            Seja o primeiro a curtir este post
          </StyledParagraph>
        </>
      ) : (
        <>
          <Heart
            size={18}
            color="#55a3ff"
            alt="Button for like the post"
            weight="fill"
            onClick={handleLike}
            cursor={!user ? 'not-allowed' : 'pointer'}
          />
          <StyledParagraph fontSize="small">{likeNumbers}</StyledParagraph>
        </>
      )}
    </StyledLikeContainer>
  )
}

export default LikeContainer
