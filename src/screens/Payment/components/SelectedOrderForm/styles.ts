import styled, { css } from 'styled-components'

import { MapPinLine } from '@phosphor-icons/react'

export const FormsContainer = styled.main`
  height: 37rem;
  width: 70rem;

  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`

export const SelectedOrderFormAndPaymentMethodContainer = styled.div`
  height: 37rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`
export const BaseOrderForm = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
`
export const SelectedOrderForm = styled(BaseOrderForm)`
  height: 23.25rem;
  width: 40rem;

  display: flex;
  gap: 2rem;
`
export const FormOfPayment = styled(BaseOrderForm)`
  height: 12.9375rem;
  width: 40rem;
`

export const ConfirmationForm = styled(BaseOrderForm)`
  height: 31.125rem;
  width: 28rem;
`

export const LocationContainer = styled.header`
  height: 2.75rem;
  width: 35rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`

export const FormHeaderText = styled.header`
  height: 2.75rem;
  width: 33.125rem;

  display: flex;
  flex-direction: column;
`

export const addressTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_M}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme['base-subtitle']};
  `}
`

export const addressText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_S}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme['base-text']};
  `}
`

export const LocationIcon = styled(MapPinLine)`
  color: ${(props) => props.theme['yellow-dark']};
  size: 1.375rem;
`
