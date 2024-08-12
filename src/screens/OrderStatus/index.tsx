import * as S from './styles'

import Illustration from '../../assets/Illustration.svg'
import { IconInfo } from '../../components/IconInfo'
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
              <IconInfo iconType="MAPPIN" combinedText />
              <IconInfo iconType="TIMER" combinedText />
              <IconInfo iconType="CURRENCYDOLLAR" combinedText />
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
