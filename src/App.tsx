import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/DefaultTheme"
import { Router } from "./Router"
import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/global"


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
