import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { StyledContainer } from '../../styles/grid'
import { FormLogin } from '../../components/FormLogin'
import img from '../../assets/ImgLogin.svg'
import { StyledMainLogin } from './LoginPage.styles'
import { useEffect } from 'react'

const LoginPage = () => {
  useEffect(() => {
    document.title = `Kenzie Feed - Login`
  }, [])

  return (
    <>
      <Header />
      <StyledContainer>
        <StyledMainLogin>
          <figure>
            <img
              src={img}
              alt="Imagem de um lápis sob um caderno de anotações aolado de uma xícara de café vazia e um laptop"
            />
          </figure>
          <FormLogin />
        </StyledMainLogin>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default LoginPage
