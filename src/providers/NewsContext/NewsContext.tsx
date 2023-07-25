import React, { createContext, useState } from 'react'
import { INews, INewsContextProvider, INewsContext } from './@types'
import { api } from '../../services/api'
import { toast } from 'react-toastify'

export const NewsContext = createContext({} as INewsContext)

export const NewsContextProvider = ({ children }: INewsContextProvider) => {
  const [allNewsList, setAllNewsList] = useState<INews[] | null>(null)

  const getAllNews = async (
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    try {
      if (setLoading) {
        setLoading(true)
      }
      const { data } = await api.get<INews[]>('/posts?_embed=likes')
      setAllNewsList(data)
    } catch (error) {
      toast.error(
        'Algo deu errado ao carregar a lista de notícias, tente novamente mais tarde',
        {
          className: 'toast-error',
        },
      )
    } finally {
      if (setLoading) {
        setLoading(false)
      }
    }
  }

  return (
    <NewsContext.Provider
      value={{
        getAllNews,
        allNewsList,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
