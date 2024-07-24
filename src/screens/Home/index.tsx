import { ProductCard } from './components/ProductCard'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import * as S from './styles'

export function Home() {
  return (
    <S.HomeContainer>
      <IntroductionCoffee />

      <S.CatalogContainer>
        <strong>Nossos cafés</strong>

        <S.ProductContainer>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />

          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </S.ProductContainer>
      </S.CatalogContainer>
    </S.HomeContainer>
  )
}
