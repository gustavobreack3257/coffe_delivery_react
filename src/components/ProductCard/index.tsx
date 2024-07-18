import { ProductContainer } from './styles'

import ExpressoCoffee from '../../assets/expresso.svg'

export function ProductCard() {
  return (
    <ProductContainer>
      <img src={ExpressoCoffee} alt="Imagem do produto" />

      <strong>Tradicional</strong>

      <title>Expresso Tradicional</title>

      <p>
        O tradicional café feito com água quente e grãos moídosO tradicional
        café feito com água quente e grãos moídos
      </p>
    </ProductContainer>
  )
}
