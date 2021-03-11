import '../styles/globals.css'
import Header from './Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
  </>
  )
}

export default MyApp
