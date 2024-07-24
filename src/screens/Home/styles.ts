import styled from 'styled-components'
export const HomeContainer = styled.main`
  height: 100vh;
  width: 100%;
`

export const CatalogContainer = styled.div`
  height: 103rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2rem 10rem;

  strong {
    font-weight: bold;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ProductContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 16rem 16rem 16rem 16rem;
  gap: 2rem;
`
