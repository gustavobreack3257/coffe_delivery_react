import Express from '../../assets/Expresso.svg'
import AmericanExpress from '../../assets/ExpressoAmericano.svg'
import ExpressCream from '../../assets/ExpressoCremoso.svg'
import Cubano from '../../assets/Cubano.svg'
import Capuccino from '../../assets/Capuccino.svg'
import IceExpress from '../../assets/CafeGelado.svg'
import CoffeeWitthMilk from '../../assets/CaféComLeite.svg'
import ChocolateHot from '../../assets/ChocolateQuente.svg'
import Havaiano from '../../assets/Havaiano.svg'
import Irland from '../../assets/Irlandês.svg'
import Latte from '../../assets/Latte.svg'
import Macchiato from '../../assets/Macchiato.svg'
import Mocaccino from '../../assets/Mochaccino.svg'
import Arabe from '../../assets/Árabe.svg'

import { useState } from 'react'

import { CoffeeProduct, ProductCard } from './components/ProductCard'
import { IntroductionCoffee } from './components/IntroductionCoffee'

import * as S from './styles'

interface CoffeeProductType {
  coffeeProduct: CoffeeProduct[]
  quantity: number
}

export function Home() {
  const [coffeeProduct, setCoffeeProduct] = useState<CoffeeProduct[]>([
    {
      id: '1',
      title: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      image: Express,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '2',
      title: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      image: AmericanExpress,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '3',
      title: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      image: ExpressCream,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '4',
      title: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      image: IceExpress,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '5',
      title: 'Café com leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      image: CoffeeWitthMilk,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '6',
      title: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      image: Latte,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '7',
      title: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      image: Capuccino,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '8',
      title: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      image: Macchiato,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '9',
      title: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      image: Mocaccino,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '10',
      title: 'Chocolate quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      image: ChocolateHot,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '11',
      title: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      image: Cubano,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '12',
      title: 'Havaiano',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      image: Havaiano,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '12',
      title: 'Árabe',
      description: 'Bebida adocicada preparada com café e leite de coco',
      image: Arabe,
      category: 'TRADICIONAL',
      price: '9,90',
    },
    {
      id: '13',
      title: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      image: Irland,
      category: 'TRADICIONAL',
      price: '9,90',
    },
  ])

  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeProductType[]>([])
  return (
    <S.HomeContainer>
      <IntroductionCoffee />

      <S.CatalogContainer>
        <strong>Nossos cafés</strong>

        <S.ProductContainer>
          {coffeeProduct.map((coffee) => (
            <ProductCard
              key={coffee.id}
              category={coffee.category}
              image={coffee.image}
              description={coffee.description}
              price={coffee.price}
              title={coffee.title}
            />
          ))}
        </S.ProductContainer>
      </S.CatalogContainer>
    </S.HomeContainer>
  )
}
