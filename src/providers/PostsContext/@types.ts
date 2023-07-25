import React, { ReactNode } from 'react'
import { INews } from '../NewsContext/@types'
import { TEditNewsFormSchema } from '../../schemas/editNewsFormSchema'
import { TAddNewsFormSchema } from '../../schemas/addNewsFormSchema'

export interface IPostsProvider {
  children: ReactNode
}

export interface IListCard {
  postInList: {
    title: string
    image: string
    id: number
  }
}

export interface IPostsContext {
  getUserPostsList: (
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => Promise<void>
  handleDelete: (postId: number) => void
  createPost: (formData: TAddNewsFormSchema) => Promise<void>
  setUserPostList: React.Dispatch<React.SetStateAction<INews[] | null>>
  userPostList: INews[] | null
  modalOpen: boolean
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  handleEditPost: (
    postId: number,
    formData: TEditNewsFormSchema,
  ) => Promise<void>
}
