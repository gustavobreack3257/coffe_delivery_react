import { FormAddress } from './components/FormAddress'

import * as S from './styles'

export function Payment() {
  return (
    <S.PaymentContainer>
      <S.SectionSubTitleContainer>
        <S.Title>Complete seu pedido</S.Title>

        <S.Title>Cafés selecionados</S.Title>
      </S.SectionSubTitleContainer>

      <S.FormsContainer>
        <S.SelectedOrderFormAndPaymentMethodContainer>
          <FormAddress />

          <S.FormOfPaymentContainer>
            <p>ddfdfsdvfs</p>
          </S.FormOfPaymentContainer>
        </S.SelectedOrderFormAndPaymentMethodContainer>

        <S.ConfirmationFormContainer>
          <p>ytftf</p>
        </S.ConfirmationFormContainer>
      </S.FormsContainer>
    </S.PaymentContainer>
  )
}
