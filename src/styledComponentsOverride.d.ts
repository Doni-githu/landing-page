import { CSSProp } from 'styled-components'

interface MyTheme {
    max: number,
    scale: number,
    speed: number
}

declare module 'react' {
    interface Attributes {
        options?: MyTheme
    }
}