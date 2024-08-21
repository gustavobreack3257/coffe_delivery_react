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
    <ProductContainer>
      <img src={`/coffees/${coffee.photo}`} alt="Imagem do produto" />

      <h5>
        {coffee.tags.map((tag) => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </h5>

      <h3>{coffee.name}</h3>

      <p>{coffee.description}</p>

      <PriceAndQuantityContainer>
        <span>
          R$ <strong>{formattedPrice}</strong>
        </span>

        <ProductQuantitySelector
          coffeeAdded={handleIncrease}
          coffeeSubtracted={handleDecrease}
          amountOfCoffee={quantity}
        />

        <ShoppingButton onClick={handleAddToCart}>
          <ShoppingIcon weight="fill" />
        </ShoppingButton>
      </PriceAndQuantityContainer>
    </ProductContainer>
  )
}
