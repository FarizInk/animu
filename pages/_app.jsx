import '../styles/globals.css'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import Head from 'next/head'

const theme = responsiveFontSizes(createMuiTheme())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
