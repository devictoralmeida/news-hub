import { useContext } from 'react'
import { NewsContext } from '../providers/NewsContext/NewsContext'

export const useNewsContext = () => useContext(NewsContext)
