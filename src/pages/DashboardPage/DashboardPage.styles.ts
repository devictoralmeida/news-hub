import styled from 'styled-components'

export const StyledDashboardMain = styled.main`
  background-color: var(--color-grey);
  min-height: calc(100vh - 161px);
  max-height: 1003px;
  min-width: 100vw;
  margin: 0 auto;

  .ContainerNewPost {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    gap: 30px;
    margin: 1.5rem 0;
    z-index: 0;
  }
`

export const StyledContainerToDashboard = styled.div`
  max-width: 79rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  padding-left: clamp(1rem, 3vw, 2rem);
  padding-right: clamp(1rem, 3vw, 2rem);

  h2 {
    text-align: center;
  }
`
