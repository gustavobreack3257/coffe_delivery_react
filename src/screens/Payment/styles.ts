import styled, { css } from 'styled-components'

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

export const FormOfPaymentContainer = styled(BaseOrderForm)`
  height: 12.9375rem;
  width: 40rem;
`

export const ConfirmationFormContainer = styled(BaseOrderForm)`
  height: 31.125rem;
  width: 28rem;
`

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
