import { StyledCardList } from './StyledCardContainer'
import { StyledHeadline1, StyledParagraph } from '../../styles/typography'
import HomeImage from '../../assets/HomeImage.svg'

const SectionKenzieFeed = () => {
  return (
    <>
      <StyledCardList>
        <StyledParagraph fontSize="small">KENZIE FEED</StyledParagraph>
        <StyledHeadline1 fontSize="big">
          Seja muito bem vindo ao KenzieFeed
        </StyledHeadline1>
        <StyledParagraph>Fique por dentro das últimas notícias</StyledParagraph>
        <img src={HomeImage} alt="imagem teclado" />
      </StyledCardList>
    </>
  )
}

export default SectionKenzieFeed
