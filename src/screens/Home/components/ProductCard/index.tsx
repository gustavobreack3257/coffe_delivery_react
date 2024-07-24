import {
  PriceAndQuantityContainer,
  ProductContainer,
  ShoppingButton,
  ShoppingIcon,
} from './styles'

import { ProductQuantitySelector } from '../../../../components/ProductQuantitySelector'

import ExpressoCoffee from '../../../../assets/Expresso.svg'

export function ProductCard() {
  return (
    <ProductContainer>
      <img src={ExpressoCoffee} alt="Imagem do produto" />

      <h5>Tradicional</h5>

      <h3>Expresso Tradicional</h3>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <PriceAndQuantityContainer>
        <span>
          R$ <strong>9,99</strong>
        </span>

        <ProductQuantitySelector />

        <ShoppingButton>
          <ShoppingIcon weight="fill" />
        </ShoppingButton>
      </PriceAndQuantityContainer>
    </ProductContainer>
  )
}
