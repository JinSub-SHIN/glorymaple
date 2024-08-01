import { createGlobalStyle } from 'styled-components'

const fonts = {
	MapleLight: 'mapleLight',
}

const GlobalStyle = createGlobalStyle`
    * {
        font-family: ${fonts.MapleLight};
    }
`

export default GlobalStyle
