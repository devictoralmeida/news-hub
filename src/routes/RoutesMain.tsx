import { Routes, Route } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import DashboardPage from '../pages/DashboardPage/DashboardPage'
import EditNewsPage from '../pages/EditNewsPage/EditNewsPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import HomePage from '../pages/HomePage/HomePage'
import NewsPage from '../pages/NewsPage/NewsPage'
import AllNewsPage from '../pages/AllNewsPage/AllNewsPage'

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/all-news" element={<AllNewsPage />} />
      <Route path="/news/:id" element={<NewsPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/dashboard/:id" element={<DashboardPage />} />
        <Route path="/dashboard/edit-news/:id" element={<EditNewsPage />} />
      </Route>
    </Routes>
  )
}

export default RoutesMain
