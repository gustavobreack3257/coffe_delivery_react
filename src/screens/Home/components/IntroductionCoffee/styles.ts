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
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-top: 4rem;
  gap: 0.75rem;
`

export const MarketingContentContainer = styled.div`
  gap: 0.75rem;
  flex-basis: 48%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
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
