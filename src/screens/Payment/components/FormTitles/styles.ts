import { css, styled } from 'styled-components'

export const FormTitlesContainer = styled.strong`
  height: 1.5rem;
  width: auto;

  display: flex;
  gap: 31.25rem;
`
export const Title = styled.strong`
  height: 1.4375rem;
  width: 10.625rem;

  ${({ theme }) => css`
    size: ${theme.FONT_SIZE.TITLE_XS};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    color: ${theme['base-subtitle']};
  `}
`
