import * as S from './styles'

export function FormAddress() {
  return (
    <S.FormAddressContainer>
      <S.LocationContainer>
        <S.LocationIcon weight="regular" />
        <S.FormHeaderText>
          <S.addressTitle>Endereço de Entrega</S.addressTitle>

          <S.addressText>
            Informe o endereço onde deseja receber seu pedido
          </S.addressText>
        </S.FormHeaderText>
      </S.LocationContainer>

      <S.FormDataInputContainer>
        <S.CepDataInput />
      </S.FormDataInputContainer>
    </S.FormAddressContainer>
  )
}
