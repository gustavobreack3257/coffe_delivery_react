import * as S from './styles'

export function PaymentMethodCard() {
  return (
    <S.PaymentMethodCardContainer>
      <S.BankIcon weight="regular" />

      <S.PaymentMethodTitle>CARTÃO DE DÉBITO</S.PaymentMethodTitle>
    </S.PaymentMethodCardContainer>
  )
}
