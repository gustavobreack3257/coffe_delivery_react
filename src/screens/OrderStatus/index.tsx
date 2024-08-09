import * as S from './styles'

import Illustration from '../../assets/Illustration.svg'
import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
export function OrderStatus() {
  return (
    <S.OrderStatusContainer>
      <S.ContentContainer>
        <S.OrderInfoContainer>
          <S.TextOrderInfo>
            <h3>Uhu! Pedido confirmado</h3>

            <p>Agora é só aguardar que logo o café chegará até você</p>
          </S.TextOrderInfo>

          <S.OrderInfo>
            <S.IconsInfoContainer>
              <S.IconContentContainer>
                <S.IconContainer bgIconColor="purple">
                  <MapPin weight="fill" />
                </S.IconContainer>

                <p>
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>{' '}
                  Farrapos - Porto Alegre, RS
                </p>
              </S.IconContentContainer>
            </S.IconsInfoContainer>

            <S.IconsInfoContainer>
              <S.IconContentContainer>
                <S.IconContainer bgIconColor="yellow">
                  <Timer weight="fill" />
                </S.IconContainer>

                <p>
                  Previsão de entrega <strong>20 min - 30 min</strong>
                </p>
              </S.IconContentContainer>
            </S.IconsInfoContainer>

            <S.IconsInfoContainer>
              <S.IconContentContainer>
                <S.IconContainer bgIconColor="yellowDark">
                  <CurrencyDollar weight="fill" />
                </S.IconContainer>

                <p>
                  Pagamento na entrega <strong>Cartão de Crédito</strong>
                </p>
              </S.IconContentContainer>
            </S.IconsInfoContainer>
          </S.OrderInfo>
        </S.OrderInfoContainer>

        <S.Illustration>
          <img src={Illustration} alt="Ilustração" />
        </S.Illustration>
      </S.ContentContainer>
    </S.OrderStatusContainer>
  )
}
