import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import styled from 'styled-components'

export const IntroductionContainer = styled.div`
  height: 34rem;
  width: 90rem;

  img {
    overflow: hidden;
    position: absolute;
  }
`

export const IntroductionContent = styled.aside`
  display: grid;
  grid-template-columns: 36.75rem 1fr;
  gap: 3.5rem;
  margin: 5.75rem 10rem;
  align-items: flex-start;
`

export const IntroductionHeader = styled.div`
  height: 12rem;
  width: 36.75rem;

  display: flex;
  flex-direction: column;
`

export const IntroductionTitle = styled.span`
  font-family: 'Baloo 2';
  font-size: 3rem;
  font-weight: 800;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};
`

export const IntroductionSubTitle = styled.p`
  font-size: 1.25rem;
  line-height: 130%;

  margin-top: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const MarketingContainer = styled.div`
  width: 35.5rem;
  height: 5.25rem;

  display: flex;
  flex: 1 1 50%;
  flex-wrap: wrap;

  margin-top: 4rem;
  gap: 0.75rem;

  p {
    margin-top: 0.5rem;
    margin-right: 1rem;
  }
`
export const IconBaseContainer = styled.div`
  height: 2rem;
  width: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1rem;
  border-width: none;
`
export const ShoppingCartIconContainer = styled(IconBaseContainer)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const ShoppingCartIcon = styled(ShoppingCart)`
  color: ${(props) => props.theme.white};
`

export const PackageIconContainer = styled(IconBaseContainer)`
  background: ${(props) => props.theme['base-text']};
`
export const PackageIcon = styled(Package)`
  color: ${(props) => props.theme.white};
`
export const TimerIconContainer = styled(IconBaseContainer)`
  background: ${(props) => props.theme.yellow};
`

export const TimerIcon = styled(Timer)`
  color: ${(props) => props.theme.white};
`
export const CoffeeIconContainer = styled(IconBaseContainer)`
  background: ${(props) => props.theme.purple};
`
export const CoffeeIcon = styled(Coffee)`
  color: ${(props) => props.theme.white};
`
