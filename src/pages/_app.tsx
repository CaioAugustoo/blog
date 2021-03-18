import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Caio Augusto | Blog</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Blog pessoal onde são apresentados diversos posts dando dicas de conteúdos relacionados a programação"
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
