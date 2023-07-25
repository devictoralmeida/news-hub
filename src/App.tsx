import { GlobalStyle } from './styles/globalStyles'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import RoutesMain from './routes/RoutesMain'
import { StyledLoaderContainer } from './styles/grid'
import { BounceLoader } from 'react-spinners'
import { useUserContext } from './hooks/useUserContext'

const App = () => {
  const { globalLoading } = useUserContext()

  return (
    <>
      {globalLoading ? (
        <StyledLoaderContainer>
          <BounceLoader color="#55A3FF" size={30} />
        </StyledLoaderContainer>
      ) : (
        <RoutesMain />
      )}
      <GlobalStyle />
      <ToastContainer />
    </>
  )
}

export default App
