import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from '../../../components/Input/Input'
import { StyledButton } from '../../../styles/button'
import { useUserContext } from '../../../hooks/useUserContext'
import { RegisterForm } from './RegisterForm'
import { StyledHeadline1, StyledParagraph } from '../../../styles/typography'
import {
  TRegisterSchema,
  RegisterSchema,
} from '../../../schemas/registerFormSchema'

export const FormRegister = () => {
  const { UserRegister } = useUserContext()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TRegisterSchema>({ resolver: zodResolver(RegisterSchema) })

  const submit: SubmitHandler<TRegisterSchema> = async (
    data: TRegisterSchema,
  ) => {
    await UserRegister(data)
    reset()
  }

  const isErros = Object.keys(errors).length >= 1

  return (
    <RegisterForm onSubmit={handleSubmit(submit)}>
      <div className="title__container">
        <StyledHeadline1 fontSize="medium">
          Cadastre um novo Usuário
        </StyledHeadline1>
        <StyledParagraph>
          Preencha os campos corretamente para fazer login
        </StyledParagraph>
      </div>
      <div className="input__container">
        <Input
          type="text"
          placeholder="Nome"
          id="name"
          error={errors.name}
          {...register('name')}
        />

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

        <Input
          type="password"
          placeholder="Confirmar senha"
          id="passwordConfirm"
          error={errors.confirm}
          {...register('confirm')}
        />
      </div>
      <StyledButton
        ButtonSize="big"
        ButtonStyle="solid"
        type="submit"
        disabled={isErros}
      >
        Cadastre-se
      </StyledButton>
    </RegisterForm>
  )
}
