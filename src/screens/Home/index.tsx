import { ProductCard } from './components/ProductCard'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import * as S from './styles'
import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <S.HomeContainer>
      <IntroductionCoffee />

      <S.CatalogContainer>
        <strong>Nossos cafés</strong>

        <S.ProductContainer>
          {coffees.map((coffee) => (
            <ProductCard key={coffee.id} coffee={coffee} />
          ))}
        </S.ProductContainer>
      </S.CatalogContainer>
    </S.HomeContainer>
  )
}
