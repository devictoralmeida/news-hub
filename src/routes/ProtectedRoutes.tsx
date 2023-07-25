import { useUserContext } from '../hooks/useUserContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoutes = () => {
  const { user } = useUserContext()

  return user ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes
