import React, { ReactNode } from 'react'

export interface ILike {
  userId: number
  postId: number
  id: number
}

export interface INews {
  title: string
  description: string
  owner: string
  userId: number
  image: string
  id: number
  likes: ILike[]
}

export interface INewsContext {
  getAllNews: (
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>,
  ) => Promise<void>
  allNewsList: INews[] | null
}

export interface INewsContextProvider {
  children: ReactNode
}
