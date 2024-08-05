import styled, { css } from 'styled-components'

import { CurrencyDollar } from '@phosphor-icons/react'

export const FormOfPaymentContainer = styled.div`
  height: 12.9375rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
`

const BaseIntroduction = styled.div`
  height: 2.75rem;

  display: flex;
  flex: 1;
`

export const HeaderContainer = styled(BaseIntroduction)`
  flex-direction: row;
  gap: 0.5rem;
`

export const DescriptionContainer = styled(BaseIntroduction)`
  flex-direction: column;

  h3 {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_M}px;

      color: ${theme['base-subtitle']};
    `}
  }

  p {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_S}px;

      color: ${theme['base-text']};
    `}
  }
`

export const CurrencyIcon = styled(CurrencyDollar)`
  size: 1.5rem;

  color: ${(props) => props.theme.purple};
`

export const PaymentMethodCardContainer = styled.main`
  height: 3.1875rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0.75rem;
`
