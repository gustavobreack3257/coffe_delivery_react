import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  height: 48px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme.yellow};

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  a {
    text-decoration: none;
  }
`

export const ButtonTitle = styled.h4`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.BOLD};
    font-size: ${theme.FONT_SIZE.BUTTON_G}px;

    color: ${theme.white};
  `}
`
