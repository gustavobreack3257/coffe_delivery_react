import {
  MinusContainer,
  PlusContainer,
  SelectorButtonContainer,
} from './styles'

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
      <MinusContainer onClick={coffeeSubtracted} disabled={amountOfCoffee <= 1}>
        <Minus size={14} weight="bold" />
      </MinusContainer>

      <input type="number" readOnly value={amountOfCoffee} />

      <PlusContainer onClick={coffeeAdded}>
        <Plus size={14} weight="bold" />
      </PlusContainer>
    </SelectorButtonContainer>
  )
}
