import { ReactNode } from 'react'
import { TRegisterSchema } from '../../schemas/registerFormSchema'
import { TLoginSchema } from '../../schemas/loginFormSchema'

export interface IUserContextProvider {
  children: ReactNode
}

export interface IUser {
  email: string
  name: string
  id: number
}

export interface IUserContext {
  user: IUser | null
  globalLoading: boolean
  handleUserLogout: () => void
  UserRegister: (data: TRegisterSchema) => Promise<void>
  handleUserLogin: (data: TLoginSchema) => Promise<void>
}

export interface IUserLoginResponse {
  accessToken: string
  user: IUser
}

export interface IUserRegisterResponse {
  accessToken: string
  user: IUser
}

export interface IGetUserResponse {
  email: string
  password: string
  name: string
  id: number
}
