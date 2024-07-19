import styled from 'styled-components'
export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
`

export const CatalogContainer = styled.main`
  height: 103rem;

  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2.5rem;

  padding: 2rem 10rem 0;

  strong {
    font-weight: bold;
    font-size: 1.25rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
