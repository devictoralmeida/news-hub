import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { NewsContextProvider } from './providers/NewsContext/NewsContext.tsx'
import { UserContextProvider } from './providers/UserContext/UserContext.tsx'
import { PostsProvider } from './providers/PostsContext/PostsContext.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <PostsProvider>
          <NewsContextProvider>
            <App />
          </NewsContextProvider>
        </PostsProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
