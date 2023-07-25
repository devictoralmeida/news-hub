import NewsList from '../../components/NewsList/NewsList'
import { StyledHeadline2 } from '../../styles/typography'
import { StyledButton } from '../../styles/button'
import { StyledTitleAndButtonContainer } from './StyledCardContainer'
import { Link } from 'react-router-dom'

const SectionNews = () => {
  return (
    <>
      <StyledTitleAndButtonContainer>
        <StyledHeadline2 fontSize="medium">Últimas notícias</StyledHeadline2>
        <StyledButton ButtonStyle="solid" ButtonSize="small">
          <Link to="/all-news">Ver tudo</Link>
        </StyledButton>
      </StyledTitleAndButtonContainer>
      <NewsList />
    </>
  )
}

export default SectionNews
