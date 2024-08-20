import {
  MinusContainer,
  PlusContainer,
  SelectorButtonContainer,
} from './styled'

import { Minus, Plus } from '@phosphor-icons/react'

interface CoffeeAmount {
  coffeeAdded?: () => void
  coffeeSubtracted?: () => void
  amountOfCoffee?: number
}

export function ProductQuantitySelector({
  amountOfCoffee = 1,
  coffeeAdded,
  coffeeSubtracted,
}: CoffeeAmount) {
  return (
    <SelectorButtonContainer>
      <MinusContainer onClick={coffeeSubtracted}>
        <Minus size={14} weight="bold" />
      </MinusContainer>

      <p>{amountOfCoffee}</p>

      <PlusContainer onClick={coffeeAdded}>
        <Plus size={14} weight="bold" />
      </PlusContainer>
    </SelectorButtonContainer>
  )
}
