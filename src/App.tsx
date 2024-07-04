import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/theme/default'
import { GlobalStyle } from '../src/styles/global'
import { Home } from './screens/Home'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />

        <Home />
      </div>
    </ThemeProvider>
  )
}
