import { Header } from '../../components/Header'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <IntroductionCoffee />
    </HomeContainer>
  )
}
