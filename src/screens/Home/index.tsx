import { Header } from '../../components/Header'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import CoffeeSVG from '../../assets/IntroductionCoffee.svg'

import { HomeContainer, IntroductionContentContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />

      <IntroductionContentContainer>
        <IntroductionCoffee />

        <div>
          <img src={CoffeeSVG} alt="Imagem de publicidade" />
        </div>
      </IntroductionContentContainer>
    </HomeContainer>
  )
}
