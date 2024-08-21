import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/theme/default'
import { GlobalStyle } from '../src/styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />

        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}
