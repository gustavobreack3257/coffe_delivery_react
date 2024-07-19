import { ProductCard } from './components/ProductCard'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import { CatalogContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <IntroductionCoffee />

      <CatalogContainer>
        <strong>Nossos cafés</strong>

        <ProductCard />
      </CatalogContainer>
    </HomeContainer>
  )
}
