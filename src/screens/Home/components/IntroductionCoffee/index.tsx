import {
  CoffeeIconContainer,
  IntroductionSubTitle,
  IntroductionTitle,
  MarketingContainer,
  PackageIconContainer,
  ShoppingCartIconContainer,
  ShoppingCartIcon,
  TimerIconContainer,
  PackageIcon,
  TimerIcon,
  CoffeeIcon,
} from './styles'

export function IntroductionCoffee() {
  return (
    <aside>
      <IntroductionTitle>
        Encontre o café perfeito para qualquer hora do dia
      </IntroductionTitle>

      <IntroductionSubTitle>
        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
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
    </aside>
  )
}
