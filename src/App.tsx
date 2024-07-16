import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/theme/default'
import { GlobalStyle } from '../src/styles/global'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />

        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}
