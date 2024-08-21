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
export const BaseIconsStyled = styled.button`
  height: 2.5rem;

  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  border-width: 0;
`
export const MapPinStyledContainer = styled(BaseIconsStyled)`
  gap: 0.25rem;
  width: 10rem;
  cursor: pointer;

  background-color: ${(props) => props.theme['purple-ligth']};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

export const ShoppingCartStyledContainer = styled(BaseIconsStyled)`
  width: 2.5rem;

  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme['yellow-light']};

  &:hover {
    background-color: ${(props) => props.theme.yellow};
  }

  a {
    text-decoration: none;
  }

  span {
    width: 1.25rem;
    height: 1.25rem;

    border-radius: 50%;
    margin-top: calc(-1.5rem / 2);
    margin-right: calc(-1.5rem /);

    color: ${({ theme }) => theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;

    background-color: ${({ theme }) => theme['yellow-dark']};
  }
`
export const ShoppingCartStyled = styled(ShoppingCart)`
  color: ${(props) => props.theme['yellow-dark']};
`
export const MapPinStyled = styled(MapPin)`
  color: ${(props) => props.theme['purple-dark']};
`
