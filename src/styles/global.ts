import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
      }
    }

    ul {
      padding-left: 20px;
    }
    a {
      text-decoration: none;
      color: ${theme.colors.black};
    }

    img {
      display: block;
      max-width: 100%:
      height: auto;
    }
  `}
`

export default GlobalStyles

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0 ${theme.spacings.xsmall};
  `}
`
