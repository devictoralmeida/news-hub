import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://news-hub-api.onrender.com',
  timeout: 8000,
})
