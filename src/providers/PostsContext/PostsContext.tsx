import React, { createContext, useState } from 'react'
import { IPostsProvider, IPostsContext } from './@types'
import { api } from '../../services/api'
import { useUserContext } from '../../hooks/useUserContext'
import { toast } from 'react-toastify'
import { INews } from '../NewsContext/@types'
import { TAddNewsFormSchema } from '../../schemas/addNewsFormSchema'
import { TEditNewsFormSchema } from '../../schemas/editNewsFormSchema'
import { useNavigate } from 'react-router-dom'

export const PostsContext = createContext({} as IPostsContext)

export const PostsProvider = ({ children }: IPostsProvider) => {
  const { user } = useUserContext()

  const [userPostList, setUserPostList] = useState<INews[] | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const token = localStorage.getItem('@TOKEN:KENZIE-FEED')

  const navigate = useNavigate()

  const getUserPostsList = async (
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (user) {
      try {
        if (setLoading) {
          setLoading(true)
        }
        const { data } = await api.get<INews[]>('/posts?_embed=likes')
        const filteredPostsList = data.filter((post) => post.userId === user.id)
        setUserPostList(filteredPostsList)
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
  }

  const createPost = async (formData: TAddNewsFormSchema) => {
    if (user) {
      try {
        const newPost = { ...formData, userId: user.id, owner: user.name }
        const { data } = await api.post('posts', newPost, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setUserPostList((userPostList) => [...userPostList!, data])
      } catch (error) {
        toast.error(
          'Oops! Algo deu errado ao criar a sua notícia, tente novamente mais tarde!',
          {
            className: 'toast-error',
          },
        )
      }
    }
  }

  const handleDelete = async (postId: number) => {
    const confirmDelete = window.confirm('Tem certeza que deseja excluir?')
    if (confirmDelete) {
      try {
        await api.delete(`posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        const newPostList = userPostList!.filter(
          (postInList) => postInList.id !== postId,
        )
        setUserPostList(newPostList)
      } catch (error) {
        toast.error(
          'Oops! Algo deu errado ao deletar a sua notícia, tente novamente mais tarde!',
          {
            className: 'toast-error',
          },
        )
      }
    }
  }

  const handleEditPost = async (
    postId: number,
    formData: TEditNewsFormSchema,
  ) => {
    if (user) {
      try {
        const allData = {
          ...formData,
          userId: user.id,
          owner: user.name,
        }

        const { data } = await api.put(`/posts/${postId}`, allData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        const newPostList = userPostList!.map((post) => {
          if (post.id === postId) {
            return { ...data }
          } else {
            return post
          }
        })
        setUserPostList(newPostList)
        navigate(`/dashboard/${user.id}`)
      } catch (error) {
        toast.error(
          'Oops! Algo deu errado ao editar a sua notícia, tente novamente mais tarde!',
          {
            className: 'toast-error',
          },
        )
      }
    }
  }

  return (
    <PostsContext.Provider
      value={{
        getUserPostsList,
        handleDelete,
        createPost,
        setUserPostList,
        userPostList,
        modalOpen,
        setModalOpen,
        handleEditPost,
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}
