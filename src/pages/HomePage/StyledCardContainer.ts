import { styled } from 'styled-components'

export const StyledCardList = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 3rem;

  & > :nth-child(1) {
    font-weight: 700;
  }

  img {
    width: clamp(353px, 100%, 1232px);
    min-height: 236px;
    max-height: 384px;
    object-fit: cover;
    border-radius: 1.5625rem;
    margin-top: 1.5rem;
  }

  h1 {
    text-align: center;
  }
`

export const StyledTitleAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 450px) {
    button {
      display: none;
    }
  }
`
