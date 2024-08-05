import styled, { css } from 'styled-components'

import { Bank } from '@phosphor-icons/react'

export const PaymentMethodCardContainer = styled.button`
  height: 3.1875rem;
  width: 11.125rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  gap: 0.75rem;
  cursor: pointer;
  border: 0;
  border-radius: 0.375rem;

  ${({ theme }) => css`
    background-color: ${theme['base-button']};

    &:hover {
      background-color: ${theme['base-hover']};
    }

    &.active {
      background-color: ${theme['base-hover']};
    }

    &:focus {
      border: 1px solid ${theme.purple};
      background-color: ${theme['purple-ligth']};
    }
  `}
`

export const BankIcon = styled(Bank)`
  size: 1rem;
  color: ${(props) => props.theme.purple};
`

export const PaymentMethodTitle = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    font-size: ${theme.FONT_SIZE.TEXT_XS}px;

    color: ${theme['base-text']};
  `}
`
