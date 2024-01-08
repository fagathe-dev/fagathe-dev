import { themeDark, themeLight } from "./theme"
import { Theme } from "./theme.type"

const getTheme = (): Theme => {
    const dark: boolean = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (dark) {
        return themeDark
    }

    return themeLight
}

const theme: Theme = getTheme()

export default theme