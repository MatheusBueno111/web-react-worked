import React from 'react'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { RouterProvider } from 'react-router-dom'
import { Router } from './Routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={Router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
