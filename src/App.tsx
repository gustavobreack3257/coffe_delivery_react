import { ThemeProvider } from 'styled-components'

import { defaultTheme } from '../src/styles/theme/default'
import { GlobalStyle } from '../src/styles/global'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <GlobalStyle />

        <p>Hello world</p>
      </div>
    </ThemeProvider>
  )
}
