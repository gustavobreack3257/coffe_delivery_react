import { CoffeeCard } from './components/CoffeeCard'
import { FormAddress } from './components/FormAddress'
import { PaymentMethodSelection } from './components/PaymentMethodSelection'

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

          <PaymentMethodSelection />
        </S.SelectedOrderFormAndPaymentMethodContainer>

        <S.ConfirmationFormContainer>
          <CoffeeCard />
          <S.DesignLine />

          <CoffeeCard />
          <S.DesignLine />
        </S.ConfirmationFormContainer>
      </S.FormsContainer>
    </S.PaymentContainer>
  )
}
