import {
  HeaderContainer,
  MapPinStyledContainer,
  ShoppingCartStyledContainer,
  ShoppingCartStyled,
  MapPinStyled,
} from './styled'

import LogCoffee from '../../assets/CoffeeLogo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogCoffee} alt="logotipo" />
      <nav>
        <MapPinStyledContainer>
          <MapPinStyled weight="fill" size={22} />
          <p>Porto Alegre, RS</p>
        </MapPinStyledContainer>

        <ShoppingCartStyledContainer>
          <ShoppingCartStyled weight="fill" size={22} />
        </ShoppingCartStyledContainer>
      </nav>
    </HeaderContainer>
  )
}
