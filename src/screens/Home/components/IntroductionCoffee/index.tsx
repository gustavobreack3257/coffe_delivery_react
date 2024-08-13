import * as S from './styles'

import BackgroundContentCoffee from '../../../../assets/Background.svg'
import CoffeeSVG from '../../../../assets/IntroductionCoffee.svg'
import { IconInfo } from '../../../../components/IconInfo'

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
              <IconInfo iconType="SHOPPING" text="Compra simples e segura" />
              <IconInfo
                iconType="PACKAGE"
                text="Embalagem mantém o café intacto"
              />
            </S.MarketingContentContainer>
          </S.MarketingContainer>

          <S.MarketingContainer>
            <S.MarketingContentContainer>
              <IconInfo iconType="TIMER" text="Entrega rápida e rastreada" />
              <IconInfo
                iconType="COFFEE"
                text="O café chega fresquinho até você"
              />
            </S.MarketingContentContainer>
          </S.MarketingContainer>
        </S.IntroductionHeader>

        <div>
          <img src={CoffeeSVG} alt="" />
        </div>
      </S.IntroductionContent>
    </S.IntroductionContainer>
  )
}
