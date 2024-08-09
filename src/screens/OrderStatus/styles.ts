import styled, { css } from 'styled-components'

export const OrderStatusContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 5rem 10rem;
`
export const ContentContainer = styled.div`
  width: 100%;
  height: 22.25rem;

  display: grid;
  grid-template-columns: 32.875rem 1fr;
  gap: 6.375rem;
`
const BaseOrderInfo = styled.div`
  display: flex;
  flex: 1;
`
export const OrderInfoContainer = styled(BaseOrderInfo)`
  gap: 2.5rem;
  flex-direction: column;
`
export const Illustration = styled(BaseOrderInfo)`
  align-items: flex-end;
`
export const TextOrderInfo = styled.div`
  height: 4.5rem;

  flex-direction: column;

  h3 {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.Baloo_2};
      font-weight: ${theme.FONT_WEIGHT.EXTRA_BOLD};
      font-size: ${theme.FONT_SIZE.TITLE_L}px;

      color: ${theme['yellow-dark']};
    `}
  }

  p {
    line-height: 130%;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_L}px;

      color: ${theme['base-subtitle']};
    `}
  }
`

export const OrderInfo = styled.div`
  height: 16.875rem;

  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;
  border: 1px solid;
  border-image: linear-gradient(
      to right,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    )
    1;
`
export const IconsInfoContainer = styled.div`
  width: 100%;
  height: 11.875rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const IconContentContainer = styled.div`
  height: 2.625rem;

  gap: 0.75rem;
  display: flex;
  flex-direction: row;
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
