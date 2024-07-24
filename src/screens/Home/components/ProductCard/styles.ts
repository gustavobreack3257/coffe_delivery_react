import styled, { css } from 'styled-components'

import { ShoppingCart } from '@phosphor-icons/react'
export const ProductContainer = styled.div`
  height: 19.5rem;
  width: 256px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  padding: 0 1.25rem;
  margin-top: 0.875rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: calc(0px - 1.25rem);
    margin-bottom: 0.75rem;
  }

  h5 {
    height: 1.25rem;
    width: 5rem;

    border-radius: 6.25rem;
    text-align: center;
    margin-top: 0.75rem;
    padding-top: 0.25rem;

    ${({ theme }) => css`
      background-color: ${theme['yellow-light']};
      color: ${theme['yellow-dark']};
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.BOLD};
      font-size: ${theme.FONT_SIZE.TAG}px;
    `}
  }

  h3 {
    display: flex;
    margin-top: 1rem;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.Baloo_2};
      font-size: ${theme.FONT_SIZE.TITLE_S}px;
      font-weight: ${theme.FONT_WEIGHT.BOLD};
      color: ${theme['base-subtitle']};
    `};
  }

  p {
    margin-top: 0.5rem;
    text-align: center;
    ${({ theme }) => css`
      color: ${theme['base-label']};
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_S}px;
    `}
  }
`

export const PriceAndQuantityContainer = styled.div`
  height: 2.5rem;
  width: 16rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2.125rem;
  padding: 0 1.25rem;

  span {
    height: 1.9375rem;
    width: 4.5rem;
    margin-right: 1.25rem;

    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_S}px;

      color: ${theme['base-text']};
    `}
  }

  strong {
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.Baloo_2};
      font-weight: ${theme.FONT_WEIGHT.EXTRA_BOLD};
      font-size: ${theme.FONT_SIZE.TITLE_M}px;

      color: ${theme['base-text']};
    `}
  }
`

export const ShoppingButton = styled.button`
  height: 2.375rem;
  width: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border-width: 0;

  background-color: ${(props) => props.theme['purple-dark']};

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`

export const ShoppingIcon = styled(ShoppingCart)`
  size: 22;

  color: ${(props) => props.theme['base-card']};
`
