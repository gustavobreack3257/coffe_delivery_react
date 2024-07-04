import styled from 'styled-components'

import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`
export const BaseIconsStyled = styled.div`
  display: flex;
  padding: 0.5rem;

  height: 2.5rem;
  border-radius: 6px;
`
export const MapPinStyledContainer = styled(BaseIconsStyled)`
  gap: 0.25rem;
  width: 10rem;

  background-color: ${(props) => props.theme['purple-ligth']};

  p {
    margin-top: 0.125rem;
  }
`

export const ShoppingCartStyledContainer = styled(BaseIconsStyled)`
  width: 2.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
`
export const ShoppingCartStyled = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const MapPinStyled = styled(MapPin)`
  color: ${(props) => props.theme['purple-dark']};
`
