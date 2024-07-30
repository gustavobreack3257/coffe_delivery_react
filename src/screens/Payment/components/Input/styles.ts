import styled, { css } from 'styled-components'

export const FormDataInputContainer = styled.div`
  height: 13.5rem;
  width: 35rem;

  display: flex;
  flex-direction: column;
  gap: 1rem 0.75rem;

  background-color: aquamarine;
`

export const InputContainer = styled.div`
  height: 2.625rem;
  width: 12.5rem;

  display: flex;
  border-radius: 0.25rem;
  border-width: 1px;

  ${({ theme }) => css`
    background-color: ${theme['base-input']};
    border-color: ${theme['base-button']};
  `}
`
