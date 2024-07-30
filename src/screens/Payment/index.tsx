import { SelectedOrderForm } from './components/SelectedOrderForm'
import * as S from './styles'

export function Payment() {
  return (
    <S.PaymentContainer>
      <S.SectionSubTitleContainer>
        <S.Title>Complete seu pedido</S.Title>

        <S.Title>Cafés selecionados</S.Title>
      </S.SectionSubTitleContainer>

      <SelectedOrderForm />
    </S.PaymentContainer>
  )
}
