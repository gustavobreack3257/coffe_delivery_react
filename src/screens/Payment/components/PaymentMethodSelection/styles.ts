import styled, { css } from 'styled-components'

export const FormOfPaymentContainer = styled.div`
  height: 12.9375rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
`
