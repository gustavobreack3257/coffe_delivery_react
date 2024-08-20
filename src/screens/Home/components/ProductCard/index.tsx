import {
  PriceAndQuantityContainer,
  ProductContainer,
  ShoppingButton,
  ShoppingIcon,
} from './styles'

import { ProductQuantitySelector } from '../../../../components/ProductQuantitySelector'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export function ProductCard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    setQuantity((state) => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const formattedPrice = formatMoney(coffee.price)
  return (
    <ProductContainer id={id}>
      <img src={image} alt="Imagem do produto" />

      <h5>{category}</h5>

      <h3>{title}</h3>

      <p>{description}</p>

      <PriceAndQuantityContainer>
        <span>
          R$ <strong>{price}</strong>
        </span>

        <ProductQuantitySelector />

        <ShoppingButton>
          <ShoppingIcon weight="fill" />
        </ShoppingButton>
      </PriceAndQuantityContainer>
    </ProductContainer>
  )
}
