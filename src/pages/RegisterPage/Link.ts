import styled from 'styled-components'

export const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 2.6875rem;

  background-color: transparent;
  color: var(--color-blue);
  border: 1px solid var(--color-blue);
  border-radius: 4px;

  width: 6.6875rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  transition: 0.3s;

  p {
    font-size: 14px;
    font-weight: 700;
    color: var(--color-blue);
    text-align: center;
  }

  &:hover {
    transition: 0.3s;
    background-color: var(--color-blue);
    svg,
    p {
      color: var(--color-white);
    }
  }
`
