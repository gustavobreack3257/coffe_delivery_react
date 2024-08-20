import styled, { css } from 'styled-components'

export const SelectorButtonContainer = styled.div`
  height: 2.375rem;
  width: 4.5rem;

  display: flex;
  flex-direction: row;
  gap: 0.25rem;

  border-radius: 0.375rem;
  border-width: 0;

  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme['base-button']};

  p {
    height: 1.5rem;
    width: 1.25rem;

    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-size: ${theme.FONT_SIZE.TEXT_M};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
    `}
  }
`

export const CountButtonBase = styled.button`
  height: 0.875rm;
  width: 0.875rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0;

  color: ${(props) => props.theme.purple};
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const MinusContainer = styled(CountButtonBase)``
export const PlusContainer = styled(CountButtonBase)``
