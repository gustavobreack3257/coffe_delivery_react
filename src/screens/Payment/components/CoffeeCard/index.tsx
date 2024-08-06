import * as S from './styles'

import TraditionalCoffee from '../../../../assets/Expresso.svg'
import { ProductQuantitySelector } from '../../../../components/ProductQuantitySelector'
export function CoffeeCard() {
  return (
    <S.CoffeeCardContainer>
      <S.OrderContainer>
        <img src={TraditionalCoffee} alt="Imagem do produto" />

        <S.OrderDetailsContainer>
          <h4>Expresso Tradicional</h4>
          <S.SelectOrderQuantityAndDelete>
            <ProductQuantitySelector />

            <ProductQuantitySelector />
          </S.SelectOrderQuantityAndDelete>
        </S.OrderDetailsContainer>
      </S.OrderContainer>
      <p>R$9,90</p>
    </S.CoffeeCardContainer>
  )
}
