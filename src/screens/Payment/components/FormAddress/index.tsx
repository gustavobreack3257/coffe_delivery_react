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
        <S.CepDataInput placeholder="Cep" />
        <S.StreetDataInput placeholder="Rua" />

        <S.NumberDataInputAndComplementContainer>
          <S.NumberDataInput placeholder="Numero" />

          <S.Alternative>
            <S.ComplementDataInput placeholder="Complemento" />

            <p>Opcional</p>
          </S.Alternative>
        </S.NumberDataInputAndComplementContainer>

        <S.NeighborhoodContainer>
          <S.NeighborhoodDataInput placeholder="Bairro" />
          <S.CityDataInput placeholder="Cidade" />
          <S.UFDataInput placeholder="UF" />
        </S.NeighborhoodContainer>
      </S.FormDataInputContainer>
    </S.FormAddressContainer>
  )
}
