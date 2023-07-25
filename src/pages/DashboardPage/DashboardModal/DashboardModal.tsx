import Input from '../../../components/Input/Input'
import { useKeydownPress } from '../../../hooks/useKeydownPress'
import { useOutClick } from '../../../hooks/useOutClick'
import { useForm, SubmitHandler } from 'react-hook-form'
import { ModalOverlay, ModalBox } from './DashboardModal.styles'
import { StyledButton } from '../../../styles/button'
import { useContext } from 'react'
import { PostsContext } from '../../../providers/PostsContext/PostsContext'
import Textarea from '../../../components/Textarea/Textarea'
import {
  AddNewsFormSchema,
  TAddNewsFormSchema,
} from '../../../schemas/addNewsFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { StyledHeadline1, StyledParagraph } from '../../../styles/typography'

const DashboardModal = () => {
  const { setModalOpen, createPost } = useContext(PostsContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TAddNewsFormSchema>({
    resolver: zodResolver(AddNewsFormSchema),
  })

  const closeModal = () => {
    setModalOpen(false)
  }

  useKeydownPress('Escape', () => {
    closeModal()
  })

  const submit: SubmitHandler<TAddNewsFormSchema> = async (formData) => {
    await createPost(formData)
    console.log(errors)
    closeModal()
    reset()
  }

  const modalRef = useOutClick(closeModal)

  return (
    <ModalOverlay>
      <ModalBox ref={modalRef}>
        <StyledHeadline1 fontSize="medium">Novo post</StyledHeadline1>
        <StyledParagraph onClick={closeModal}>X</StyledParagraph>
        <form onSubmit={handleSubmit(submit)}>
          <Input
            type="text"
            id="title"
            placeholder="Título"
            error={errors.title}
            {...register('title')}
          />
          <Input
            type="text"
            id="image"
            placeholder="Imagem em destaque"
            error={errors.image}
            {...register('image')}
          />
          <Textarea
            placeholder="Conteúdo do post"
            id="description"
            error={errors.description}
            {...register('description')}
          />
          <StyledButton ButtonSize="medium" ButtonStyle="solid" type="submit">
            Criar post
          </StyledButton>
        </form>
      </ModalBox>
    </ModalOverlay>
  )
}

export default DashboardModal
