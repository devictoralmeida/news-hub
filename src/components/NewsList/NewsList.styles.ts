import styled from 'styled-components'

export const StyledNewsList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  // flex-wrap: wrap;

  @media (min-width: 748px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`
