import styled, { css } from 'styled-components'

export const PaymentContainer = styled.div`
  height: auto;
  width: auto;

  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1rem;
  padding: 2.5rem 10rem;
`

export const SectionSubTitleContainer = styled.strong`
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
