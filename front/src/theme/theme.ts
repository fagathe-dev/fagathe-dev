import { Theme } from "./theme.type"

const defaultColors = {
    white: '#FFFFFF',
    black: '#212429',
}

const themeLight: Theme = {
    colors: {
        primary: {},
        secondary: {},
        tertiary: {},
        bg: '#f8fafc', 
        font: '#1c1917',
        ...defaultColors
    }
}

const themeDark: Theme = {
    colors: {
        primary: {},
        secondary: {},
        tertiary: {},
        font: '#f8fafc',
        bg: '#1c1917',
        ...defaultColors
    }
}

export {themeDark, themeLight}