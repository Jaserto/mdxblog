import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../styles/default'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../layouts/app-layout'

import "../styles/prism-night-owl.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
          <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  )
}
export default MyApp
