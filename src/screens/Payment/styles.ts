import styled from 'styled-components'

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

  background-color: red;
`
export const BaseOrderForm = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
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

export const DesignLine = styled.div`
  margin: 1.5rem 0;
  border-top: 1px solid ${(props) => props.theme['base-button']};
`
