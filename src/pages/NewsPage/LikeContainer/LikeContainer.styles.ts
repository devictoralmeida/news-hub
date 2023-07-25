import styled from 'styled-components'

export const StyledLikeContainer = styled.div`
  display: flex;
  align-self: flex-start;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;

  svg {
    transition: 0.2s;
  }

  svg:hover {
    transition: 0.2s;
    transform: scale(1.15);
  }
`
