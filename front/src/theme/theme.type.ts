interface Colors {
    primary: Record<string, string>
    secondary: Record<string, string>
    tertiary: Record<string, string>
    white: string
    black: string
    font: string
    bg: string
}

interface Theme {
    colors: Colors
}

export type {Theme, Colors}