import { NavLink } from 'react-router-dom'
import * as S from './styles'

export function Button() {
  return (
    <nav>
      <S.ButtonContainer>
        <NavLink to="/Payment/OrderStatus" title="Pedido finalizado">
          <S.ButtonTitle>confirmar pedido</S.ButtonTitle>
        </NavLink>
      </S.ButtonContainer>
    </nav>
  )
}
