import { MapPinLine } from '@phosphor-icons/react'
import { css, styled } from 'styled-components'

export const FormAddressContainer = styled.div`
  height: 23.25rem;
  width: 40rem;

  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 0.375rem;

  background-color: ${(props) => props.theme['base-card']};
  gap: 2rem;
`

export const LocationContainer = styled.header`
  height: 2.75rem;
  width: 35rem;

  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  background-color: yellow;
`

export const FormHeaderText = styled.header`
  height: 2.75rem;
  width: 33.125rem;

  display: flex;
  flex-direction: column;
`

export const addressTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_M}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme['base-subtitle']};
  `}
`

export const addressText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.TEXT_S}px;
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme['base-text']};
  `}
`

export const LocationIcon = styled(MapPinLine)`
  color: ${(props) => props.theme['yellow-dark']};
  size: 1.375rem;
`

export const FormDataInputContainer = styled.main`
  height: 13.5rem;
  width: 35rem;

  display: flex;
  flex-direction: column;
  gap: 1rem 0.75rem;

  background-color: aquamarine;
`

export const BaseInputData = styled.input`
  border-radius: 0.25rem;
  padding: 0.75rem;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.TEXT_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    border: 1px solid ${theme['base-button']};

    background-color: ${theme['base-input']};
  `}
`
export const CepDataInput = styled(BaseInputData)`
  height: 2.625rem;
  width: 12.5rem;
`
