import {
  HeaderContainer,
  MapPinStyledContainer,
  ShoppingCartStyledContainer,
  ShoppingCartStyled,
  MapPinStyled,
} from './styled'

import LogCoffee from '../../assets/CoffeeLogo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/" title="Home">
          <img src={LogCoffee} alt="logotipo" />
        </NavLink>
      </nav>
      <nav>
        <MapPinStyledContainer>
          <MapPinStyled weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </MapPinStyledContainer>

        <ShoppingCartStyledContainer>
          <NavLink to="/Payment" title="Payment">
            <ShoppingCartStyled weight="fill" size={22} />
          </NavLink>
        </ShoppingCartStyledContainer>
      </nav>
    </HeaderContainer>
  )
}
