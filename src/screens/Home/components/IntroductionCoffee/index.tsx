import {
  CoffeeIconContainer,
  IntroductionTitle,
  IntroductionSubTitle,
  IntroductionHeader,
  MarketingContainer,
  PackageIconContainer,
  ShoppingCartIconContainer,
  ShoppingCartIcon,
  TimerIconContainer,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
  IntroductionContainer,
  IntroductionContent,
} from './styles'

import BackgroundContentCoffee from '../../../../assets/Background.svg'
import CoffeeSVG from '../../../../assets/IntroductionCoffee.svg'

export function IntroductionCoffee() {
  return (
    <IntroductionContainer>
      <img src={BackgroundContentCoffee} alt="" />

      <IntroductionContent>
        <IntroductionHeader>
          <IntroductionTitle>
            Encontre o café perfeito para qualquer hora do dia
          </IntroductionTitle>

          <IntroductionSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </IntroductionSubTitle>

          <MarketingContainer>
            <ShoppingCartIconContainer>
              <ShoppingCartIcon weight="fill" />
            </ShoppingCartIconContainer>
            <p>Compra simples e segura</p>

            <PackageIconContainer>
              <PackageIcon weight="fill" />
            </PackageIconContainer>
            <p>Embalagem mantém o café intacto</p>

            <TimerIconContainer>
              <TimerIcon />
            </TimerIconContainer>
            <p>Entrega rápida e rastreada</p>

            <CoffeeIconContainer>
              <CoffeeIcon />
            </CoffeeIconContainer>
            <p>O café chega fresquinho até você</p>
          </MarketingContainer>
        </IntroductionHeader>

        <div>
          <img src={CoffeeSVG} alt="" />
        </div>
      </IntroductionContent>
    </IntroductionContainer>
  )
}
