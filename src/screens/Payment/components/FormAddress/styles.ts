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
  gap: 1rem 0;
`

export const BaseInputData = styled.input`
  height: 2.625rem;

  border-radius: 0.25rem;
  padding: 0.75rem;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.ROBOTO};
    font-size: ${theme.FONT_SIZE.TEXT_S}px;
    font-weight: ${theme.FONT_WEIGHT.REGULAR};
    color: ${theme['base-text']};

    border: 1px solid ${theme['base-button']};
    background-color: ${theme['base-input']};

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme['yellow-dark']};
    }
    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  `}
`
export const CepDataInput = styled(BaseInputData)`
  width: 12.5rem;
`
export const StreetDataInput = styled(BaseInputData)`
  width: 35rem;
`

export const NumberDataInputAndComplementContainer = styled.div`
  height: 2.625rem;

  display: flex;
  flex: 1;
  flex-direction: row;
`
export const NumberDataInput = styled(BaseInputData)`
  width: 12.5rem;

  margin-right: 0.75rem;
`

export const Alternative = styled.div`
  height: 2.625rem;

  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding-right: 0.75rem;
  border-radius: 0.25rem;

  ${({ theme }) => css`
    border: 1px solid ${theme['base-button']};
    background-color: ${theme['base-input']};
  `}

  p {
    font-style: italic;
    ${({ theme }) => css`
      font-family: ${theme.FONT_FAMILY.ROBOTO};
      font-weight: ${theme.FONT_WEIGHT.REGULAR};
      font-size: ${theme.FONT_SIZE.TEXT_XS}px;

      color: ${theme['base-label']};
    `}
  }
`

export const ComplementDataInput = styled(BaseInputData)`
  width: 300px;

  border: 0;
`

export const NeighborhoodContainer = styled.div`
  height: 2.625rem;

  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 0.75rem;
`

export const NeighborhoodDataInput = styled(BaseInputData)`
  width: 12.5rem;
`
export const CityDataInput = styled(BaseInputData)`
  width: 19.25rem;
`

export const UFDataInput = styled(BaseInputData)`
  width: 3.75rem;
`
