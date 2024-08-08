import styled, { css } from 'styled-components'

export const CoffeeCardContainer = styled.aside`
  height: 6.5rem;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0.5rem 0.25rem;
  gap: 3rem;

  p {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
      font-size: ${theme.FONT_SIZE.TEXT_M}px;

      color: ${theme['base-text']};
    `}
  }
`

export const OrderContainer = styled.div`
  height: 4rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1.25rem;
`

export const OrderDetailsContainer = styled.div`
  height: 4rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.5rem;

  h4 {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_M}px;

      color: ${theme['base-subtitle']};
    `}
  }
`
export const SelectOrderQuantityAndDelete = styled.div`
  height: 2rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0.5rem;
`
