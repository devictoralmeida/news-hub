import styled from 'styled-components'

export const StyledCard = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 138px;
  align-items: center;
  gap: 1rem;

  .postImage {
    border-radius: 1.5625rem;
    width: 15%;
    min-width: 153px;
    height: 100%;
    object-fit: cover;

    @media (max-width: 748px) {
      justify-content: flex-start;
    }
  }

  .titleAndIcons {
    height: 100%;
    width: 84%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    h3 {
      font-size: clamp(0.8rem, 4vw, 1.4375rem);
    }

    @media (max-width: 748px) {
      width: fit-content;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      flex: 1;
    }
  }

  .container__icons-trash-pen {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
      cursor: pointer;
    }

    @media (max-width: 748px) {
      flex-direction: row;
    }
  }

  @media (max-width: 748px) {
    justify-content: flex-start;
  }
`
