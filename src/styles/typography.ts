import styled, { css } from 'styled-components'

type THeadlineFontSize = 'big' | 'medium' | 'post' | 'small'

interface IHeadlineStyles {
  fontSize: THeadlineFontSize
}

interface IParagraphStyles {
  fontSize?: 'small'
}

export const HeadlineStyles = css<IHeadlineStyles>`
  font-family: var(--font-title);
  color: var(--color-black);
  font-weight: 700;
  ${({ fontSize }) => {
    switch (fontSize) {
      case 'big':
        return css`
          font-size: clamp(2.125rem, 7vw, 3.25rem);
        `
      case 'medium':
        return css`
          font-size: clamp(1.875rem, 7vw, 2.75rem);
        `
      case 'post':
        return css`
          font-size: clamp(1.75rem, 7vw, 2.25rem);
        `
      case 'small':
        return css`
          font-size: 1.4375rem;
        `
    }
  }}
`

export const StyledHeadline1 = styled.h1<IHeadlineStyles>`
  ${HeadlineStyles};
`

export const StyledHeadline2 = styled.h2<IHeadlineStyles>`
  ${HeadlineStyles};
`

export const StyledHeadline3 = styled.h3<IHeadlineStyles>`
  ${HeadlineStyles};
`

export const ParagraphStyles = css<IParagraphStyles>`
  font-family: var(--font-paragraph);
  color: var(--color-black);
  font-weight: 400;
  line-height: 1.6;
  text-align: justify;

  font-size: ${({ fontSize }) =>
    fontSize === 'small' ? '0.875rem' : 'clamp(1.0625rem, 7vw, 1.125rem)'};
`

export const StyledParagraph = styled.p<IParagraphStyles>`
  ${ParagraphStyles}
`

export const StyledSpan = styled.span`
  font-family: var(--font-paragraph);
  color: var(--color-negative);
  font-weight: 400;
  font-size: 0.875rem;
`
