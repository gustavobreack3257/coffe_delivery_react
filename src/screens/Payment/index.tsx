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
        </S.ConfirmationFormContainer>
      </S.FormsContainer>
    </S.PaymentContainer>
  )
}
