import { ThemeProvider } from "styled-components"
import theme from "./theme/getTheme"
import './style/main.scss'
import Home from "./pages/Home"

const App = () => (
    <ThemeProvider theme={theme}>
        <Home />
    </ThemeProvider>
)

export default App