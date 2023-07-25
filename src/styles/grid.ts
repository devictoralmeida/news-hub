import styled from 'styled-components'

export const StyledContainer = styled.div`
  width: 99vw;
  min-height: calc(100vh - 165px);
  max-width: 79rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding-left: clamp(1rem, 3vw, 2rem);
  padding-right: clamp(1rem, 3vw, 2rem);
  background-color: var(--color-white);
`

export const StyledLoaderContainer = styled.div`
  width: 99vw;
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
