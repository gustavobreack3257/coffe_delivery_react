import styled, { css } from 'styled-components'
import {
  MapPin,
  ShoppingCart,
  Package,
  Timer,
  Coffee,
  CurrencyDollar,
} from '@phosphor-icons/react'

export const IconInfoContainer = styled.div`
  height: 2.625rem;
  width: 100%;

  gap: 0.75rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  p {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_M}px;

      color: ${theme['base-text']};
    `};
  }

  strong {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
      font-size: ${theme.FONT_SIZE.TEXT_M}px;

      color: ${theme['base-text']};
    `};
  }
`
const BG_ICONS_COLOR = {
  yellowDark: 'yellow-dark',
  baseGray: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

interface bgProps {
  bgIconColor: keyof typeof BG_ICONS_COLOR
}
export const IconContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => prop === 'bgIconColor' || prop === 'children',
})<bgProps>`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;

  background-color: ${(props) =>
    props.theme[BG_ICONS_COLOR[props.bgIconColor]]};
`

export const MapPinIcon = styled(MapPin)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`

export const PackageIcon = styled(Package)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`

export const TimerIcon = styled(Timer)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`

export const CoffeeIcon = styled(Coffee)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`

export const CurrencyDollarIcon = styled(CurrencyDollar)`
  size: 1rem;

  color: ${(props) => props.theme.background};
`
