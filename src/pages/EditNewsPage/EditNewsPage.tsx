import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Input from '../../components/Input/Input'
import { StyledEditForm } from './EditNewsPage.styles'
import { StyledButton } from '../../styles/button'
import { PostsContext } from '../../providers/PostsContext/PostsContext'
import { useContext, useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import Textarea from '../../components/Textarea/Textarea'
import arrowButton from '../../assets/arrowButton.svg'
import { StyledHeadline1, StyledHeadline2 } from '../../styles/typography'
import {
  StyledContainerToDashboard,
  StyledDashboardMain,
} from '../DashboardPage/DashboardPage.styles'
import { useUserContext } from '../../hooks/useUserContext'
import { api } from '../../services/api'
import { INews } from '../../providers/NewsContext/@types'
import { toast } from 'react-toastify'
import { BounceLoader } from 'react-spinners'
import { StyledContainer, StyledLoaderContainer } from '../../styles/grid'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  TEditNewsFormSchema,
  EditNewsFormSchema,
} from '../../schemas/editNewsFormSchema'

const EditNewsPage = () => {
  const { user } = useUserContext()
  const { handleEditPost, userPostList, getUserPostsList } =
    useContext(PostsContext)
  const [news, setNews] = useState<INews | null>(null)
  const [loading, setLoading] = useState(false)

  const token = localStorage.getItem('@TOKEN:KENZIE-FEED')

  const { id } = useParams()
  const postId = Number(id)

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true)
        const { data } = await api.get<INews>(`/posts/${postId}?_embed=likes`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
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

    if (!userPostList) {
      getUserPostsList(setLoading)
    }
  }, [id, postId])

  useEffect(() => {
    document.title = `Kenzie Feed - Editar Notícia`
  }, [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TEditNewsFormSchema>({
    resolver: zodResolver(EditNewsFormSchema),
  })

  const submit: SubmitHandler<TEditNewsFormSchema> = async (formData) => {
    await handleEditPost(postId, formData)
    reset()
  }

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
            <StyledDashboardMain>
              <StyledContainerToDashboard>
                <div className="ContainerNewPost">
                  <StyledHeadline1 fontSize="medium">Editando</StyledHeadline1>
                  <Link to={`/dashboard/${user!.id}`}>
                    <img src={arrowButton} alt="Button to back page" />
                  </Link>
                </div>
                <StyledEditForm onSubmit={handleSubmit(submit)}>
                  <Input
                    label="Título"
                    id="title"
                    defaultValue={news?.title}
                    error={errors.title}
                    placeholder="Digite aqui seu novo título"
                    {...register('title')}
                  />
                  <Input
                    id="image"
                    label="Imagem em destaque"
                    defaultValue={news?.image}
                    error={errors.image}
                    placeholder="Selecione sua nova imagem"
                    {...register('image')}
                  />
                  <Textarea
                    id="content"
                    label="Conteúdo"
                    placeholder="Digite sua nova descrição do post"
                    defaultValue={news.description}
                    error={errors.description}
                    {...register('description')}
                  />
                  <div className="button__container">
                    <StyledButton ButtonSize="medium" ButtonStyle="solid">
                      Salvar post
                    </StyledButton>
                  </div>
                </StyledEditForm>
              </StyledContainerToDashboard>
            </StyledDashboardMain>
          )}
          <Footer />
        </>
      )}
    </>
  )
}

export default EditNewsPage
