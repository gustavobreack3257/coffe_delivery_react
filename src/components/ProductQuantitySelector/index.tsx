import {
  MinusContainer,
  PlusContainer,
  SelectorButtonContainer,
} from './styled'

import { Minus, Plus } from '@phosphor-icons/react'

export function ProductQuantitySelector() {
  return (
    <SelectorButtonContainer>
      <MinusContainer>
        <Minus size={14} weight="bold" />
      </MinusContainer>

      <p>1</p>

      <PlusContainer>
        <Plus size={14} weight="bold" />
      </PlusContainer>
    </SelectorButtonContainer>
  )
}
