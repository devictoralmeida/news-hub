import { createContext, useEffect, useMemo, useState } from 'react'
import {
  IGetUserResponse,
  IUser,
  IUserContext,
  IUserContextProvider,
  IUserRegisterResponse,
  IUserLoginResponse,
} from './@types'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { toast } from 'react-toastify'
import { TRegisterSchema } from '../../schemas/registerFormSchema'
import { TLoginSchema } from '../../schemas/loginFormSchema'

export const UserContext = createContext({} as IUserContext)

export const UserContextProvider = ({ children }: IUserContextProvider) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [globalLoading, setGlobalLoading] = useState(false)

  const navigate = useNavigate()

  const currentPath = useMemo(() => window.location.pathname, [])

  useEffect(() => {
    const localUserToken = localStorage.getItem('@TOKEN:KENZIE-FEED')
    const localUserId = localStorage.getItem('@ID:KENZIE-FEED')

    const loadUser = async () => {
      if (localUserId && localUserToken) {
        try {
          setGlobalLoading(true)
          const { data } = await api.get<IGetUserResponse>(
            `/users/${JSON.parse(localUserId)}`,
            {
              headers: {
                Authorization: `Bearer ${localUserToken}`,
              },
            },
          )
          setUser(data)
          navigate(currentPath)
        } catch (error) {
          handleUserLogout()
        } finally {
          setGlobalLoading(false)
        }
      }
    }
    loadUser()
  }, [])

  const UserRegister = async (data: TRegisterSchema) => {
    const newData = {
      email: data.email,
      password: data.password,
      name: data.name,
    }

    try {
      await api.post<IUserRegisterResponse>('/users', newData)
      toast.success('Usuário cadastrado com sucesso', {
        className: 'toast-sucess',
      })
      navigate('/login')
    } catch (error) {
      toast.error('E-mail já existe', {
        className: 'toast-error',
      })
    }
  }

  const handleUserLogin = async (data: TLoginSchema) => {
    const newData = {
      email: data.email,
      password: data.password,
    }

    try {
      const { data } = await api.post<IUserLoginResponse>('/login', newData)

      localStorage.setItem('@TOKEN:KENZIE-FEED', data.accessToken)
      localStorage.setItem('@ID:KENZIE-FEED', JSON.stringify(data.user.id))

      setUser(data.user)
      navigate(`/dashboard/${data.user.id}`)
    } catch (error) {
      toast.error('Usuário ou Senha incorreto', {
        className: 'toast-error',
      })
    }
  }

  const handleUserLogout = () => {
    setUser(null)
    localStorage.removeItem('@TOKEN:KENZIE-FEED')
    localStorage.removeItem('@ID:KENZIE-FEED')
    navigate('/')
  }

  return (
    <UserContext.Provider
      value={{
        user,
        globalLoading,
        handleUserLogin,
        handleUserLogout,
        UserRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
