import { PaymentMethodCard } from '../PaymentMethodCard'
import * as S from './styles'

export function PaymentMethodSelection() {
  return (
    <S.FormOfPaymentContainer>
      <S.HeaderContainer>
        <S.CurrencyIcon weight="regular" />
        <S.DescriptionContainer>
          <h3>Pagamento</h3>

          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </S.DescriptionContainer>
      </S.HeaderContainer>

      <S.PaymentMethodCardContainer>
        <PaymentMethodCard />
        <PaymentMethodCard />
        <PaymentMethodCard />
      </S.PaymentMethodCardContainer>
    </S.FormOfPaymentContainer>
  )
}
