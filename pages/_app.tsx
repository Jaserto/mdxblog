import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../site-settings/site-theme/default'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppLayout from '../layouts/app-layout'

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
