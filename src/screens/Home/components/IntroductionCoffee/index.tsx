import * as S from './styles'

import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'

import BackgroundContentCoffee from '../../../../assets/Background.svg'
import CoffeeSVG from '../../../../assets/IntroductionCoffee.svg'

export function IntroductionCoffee() {
  return (
    <S.IntroductionContainer>
      <img src={BackgroundContentCoffee} alt="" />

      <S.IntroductionContent>
        <S.IntroductionHeader>
          <S.IntroductionTitle>
            Encontre o café perfeito para qualquer hora do dia
          </S.IntroductionTitle>

          <S.IntroductionSubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.IntroductionSubTitle>

          <S.MarketingContainer>
            <S.MarketingContentContainer>
              <S.IconContainer bgIconColor="yellowDark">
                <ShoppingCart weight="fill" color="#FAFAFA" />
              </S.IconContainer>
              <p>Compra simples e segura</p>
            </S.MarketingContentContainer>

            <S.MarketingContentContainer>
              <S.IconContainer bgIconColor="baseGray">
                <Package weight="fill" color="#FAFAFA" />
              </S.IconContainer>
              <p>Compra simples e segura</p>
            </S.MarketingContentContainer>

            <S.MarketingContentContainer>
              <S.IconContainer bgIconColor="yellow">
                <Timer weight="fill" color="#FAFAFA" />
              </S.IconContainer>
              <p>Compra simples e segura</p>
            </S.MarketingContentContainer>

            <S.MarketingContentContainer>
              <S.IconContainer bgIconColor="purple">
                <Coffee weight="fill" color="#FAFAFA" />
              </S.IconContainer>
              <p>Compra simples e segura</p>
            </S.MarketingContentContainer>

            {/* <PackageS.IconContainer>
              <PackageIcon weight="fill" />
            </PackageS.IconContainer>
            <p>Embalagem mantém o café intacto</p>

            <TimerIconContainer>
              <TimerIcon />
            </TimerIconContainer>
            <p>Entrega rápida e rastreada</p>

            <CoffeeIconContainer>
              <CoffeeIcon />
            </CoffeeIconContainer>
            <p>O café chega fresquinho até você</p>
            */}
          </S.MarketingContainer>
        </S.IntroductionHeader>

        <div>
          <img src={CoffeeSVG} alt="" />
        </div>
      </S.IntroductionContent>
    </S.IntroductionContainer>
  )
}
