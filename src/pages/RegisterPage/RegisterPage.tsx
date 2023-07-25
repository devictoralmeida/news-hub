import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { FormRegister } from './FormRegister/FormRegister'
import { StyledContainer } from '../../styles/grid'
import { StyledMainContainer } from './main'
import { StyledLinkContainer } from './Link'
import { StyledParagraph } from '../../styles/typography'
import { ArrowLeft } from 'phosphor-react'
import { useEffect } from 'react'

const RegisterPage = () => {
  useEffect(() => {
    document.title = `Kenzie Feed - Cadastre-se`
  }, [])

  return (
    <>
      <Header />
      <StyledContainer>
        <Link to="/login">
          <StyledLinkContainer className="link__container">
            <ArrowLeft size={24} />
            <StyledParagraph>Voltar</StyledParagraph>
          </StyledLinkContainer>
        </Link>
        <StyledMainContainer>
          <FormRegister />
        </StyledMainContainer>
      </StyledContainer>
      <Footer />
    </>
  )
}

export default RegisterPage
