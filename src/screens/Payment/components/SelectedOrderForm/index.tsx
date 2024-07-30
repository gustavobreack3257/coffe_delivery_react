import { Input } from '../Input'
import * as S from './styles'

export function SelectedOrderForm() {
  return (
    <form action="">
      <S.FormsContainer>
        <S.SelectedOrderFormAndPaymentMethodContainer>
          <S.SelectedOrderForm>
            <S.LocationContainer>
              <S.LocationIcon weight="regular" />
              <S.FormHeaderText>
                <S.addressTitle>Endereço de Entrega</S.addressTitle>

                <S.addressText>
                  Informe o endereço onde deseja receber seu pedido
                </S.addressText>
              </S.FormHeaderText>
            </S.LocationContainer>

            <Input />
          </S.SelectedOrderForm>

          <S.FormOfPayment>
            <p>ddfdfsdvfs</p>
          </S.FormOfPayment>
        </S.SelectedOrderFormAndPaymentMethodContainer>

        <S.ConfirmationForm>
          <p>ytftf</p>
        </S.ConfirmationForm>
      </S.FormsContainer>
    </form>
  )
}
