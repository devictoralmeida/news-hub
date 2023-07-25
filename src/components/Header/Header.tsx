import { StyledHeader, StyledHeaderContainer } from './Header.styles'
import Logo from '../../assets/news-hub.png'
import Logout from '../../assets/LogoutIcon.svg'
import { StyledButton } from '../../styles/button'
import { useUserContext } from '../../hooks/useUserContext'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const { user, handleUserLogout } = useUserContext()

  const navigate = useNavigate()

  return (
    <StyledHeaderContainer>
      <StyledHeader>
        {!user ? (
          <>
            <img src={Logo} className="logo" alt="News Hub Logo" />
            <StyledButton ButtonSize="small" ButtonStyle="solid">
              <Link to="/login">Acessar</Link>
            </StyledButton>
          </>
        ) : (
          <>
            <img src={Logo} className="logo" alt="News Hub Logo" />
            <div className="right-container">
              <div className="user-first-letter">{user.name[0]}</div>
              <StyledButton
                ButtonStyle="outline"
                ButtonSize="small"
                onClick={() => navigate(`/dashboard/${user.id}`)}
              >
                Dashboard
              </StyledButton>
              <img
                title="Deslogar"
                src={Logout}
                alt="Logout button"
                onClick={() => handleUserLogout()}
              />
            </div>
          </>
        )}
      </StyledHeader>
    </StyledHeaderContainer>
  )
}

export default Header

