import styled from 'styled-components'

export const ProductContainer = styled.div`
  height: 19.5rem;
  width: 16rem;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.875rem;
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
  background-color: ${(props) => props.theme['base-card']};

  img {
    margin-top: calc(0px - 1.5rem - 4px);
  }
`
