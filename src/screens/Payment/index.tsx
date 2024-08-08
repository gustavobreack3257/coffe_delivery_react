import { Button } from './components/Button'
import { CoffeeCard } from './components/CoffeeCard'
import { FormAddress } from './components/FormAddress'
import { FormTitles } from './components/FormTitles'
import { PaymentMethodSelection } from './components/PaymentMethodSelection'

import * as S from './styles'

export function Payment() {
  return (
    <S.PaymentContainer>
      <FormTitles />
      <S.FormsContainer>
        <S.PaymentMethodAndAddressFormsContainer>
          <FormAddress />

          <PaymentMethodSelection />
        </S.PaymentMethodAndAddressFormsContainer>

        <S.ConfirmationFormContainer>
          <CoffeeCard />
          <S.DesignLine />

          <CoffeeCard />
          <S.DesignLine />

          <S.OrderSummaryContainer>
            <S.TextContainer>
              <S.Text>Total de itens</S.Text>
              <S.Text>Entrega</S.Text>
              <h3>Total</h3>
            </S.TextContainer>

            <S.ValueContainer>
              <S.Value>R$ 29,70</S.Value>
              <S.Value>R$ 3,50</S.Value>
              <h3>R$ 33,20</h3>
            </S.ValueContainer>
          </S.OrderSummaryContainer>

          <Button />
        </S.ConfirmationFormContainer>
      </S.FormsContainer>
    </S.PaymentContainer>
  )
}
