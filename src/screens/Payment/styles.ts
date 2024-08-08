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
export const FormsContainer = styled.main`
  height: 37rem;
  width: 70rem;

  display: grid;
  grid-template-columns: 40rem 1fr;
  gap: 2rem;
`

export const PaymentMethodAndAddressFormsContainer = styled.div`
  height: 37rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ConfirmationFormContainer = styled.aside`
  height: 31.25rem;
  width: 28rem;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;

  background-color: ${(props) => props.theme['base-card']};
`

export const DesignLine = styled.div`
  border-top: 1px solid ${(props) => props.theme['base-button']};
`

export const OrderSummaryContainer = styled.div`
  height: 5.75rem;
  width: 100%;

  display: grid;
  grid-template-columns: 6rem 5.0625rem;
  justify-content: space-between;

  h3 {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
      font-size: ${theme.FONT_SIZE.TEXT_L}px;

      color: ${theme['base-subtitle']};
    `}
  }
`
export const TextContainer = styled.div`
  height: 5.75rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const ValueContainer = styled.div`
  height: 5.75rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.75rem;
`

export const Text = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    font-size: ${theme.FONT_SIZE.TEXT_S}px;

    color: ${theme['base-text']};
  `}
`

export const Value = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    font-size: ${theme.FONT_SIZE.TEXT_M}px;

    color: ${theme['base-text']};
  `}
`
