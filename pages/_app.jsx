import '../styles/globals.css'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import Head from 'next/head'
import { Provider } from 'context/store'
import ResponsiveDrawer from 'components/navbar'
import { SnackbarProvider } from 'notistack';

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

        <title>{process.env.APP_NAME}</title>
        <meta name="description" content={process.env.APP_DESCRIPTION}></meta>
        <meta name="robots" content="index, follow" />

      </Head>
      <Provider>
        <SnackbarProvider maxSnack={3}>
          <ResponsiveDrawer>
            <Component {...pageProps} />
          </ResponsiveDrawer>
        </SnackbarProvider>
      </Provider>
    </>
  )
}

export default MyApp
