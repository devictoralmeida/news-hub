import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import { useUserContext } from '../../hooks/useUserContext'
import { zodResolver } from '@hookform/resolvers/zod'

import { StyledFormLogin } from './FormLogin.styled'
import { StyledButton } from '../../styles/button'
import { TLoginSchema, LoginSchema } from '../../schemas/loginFormSchema'
import { StyledHeadline2, StyledParagraph } from '../../styles/typography'

export const FormLogin = () => {
  const { handleUserLogin } = useUserContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TLoginSchema>({ resolver: zodResolver(LoginSchema) })

  const submit: SubmitHandler<TLoginSchema> = async (data: TLoginSchema) => {
    await handleUserLogin(data)
    reset()
  }

  const isErros = Object.keys(errors).length >= 1

  return (
    <StyledFormLogin onSubmit={handleSubmit(submit)}>
      <StyledHeadline2 fontSize="medium">Acesse o KenzieFeed</StyledHeadline2>
      <StyledParagraph>
        Preencha os campos corretamente para fazer login
      </StyledParagraph>

      <Input
        type="email"
        placeholder="E-mail"
        id="email"
        error={errors.email}
        {...register('email')}
      />

      <Input
        type="password"
        placeholder="Senha"
        id="password"
        error={errors.password}
        {...register('password')}
      />

      <StyledButton
        ButtonSize="big"
        ButtonStyle="solid"
        type="submit"
        disabled={isErros}
      >
        Login
      </StyledButton>

      <StyledParagraph>Não é cadastrado?</StyledParagraph>
      <Link to="/register" className="redirect">
        Cadastre-se
      </Link>
    </StyledFormLogin>
  )
}
