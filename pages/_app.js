import '../src/utils/styles.css'
import { TestsContextProvider } from '../src/context'

export default function MyApp({ Component, pageProps }) {
  return (
    <TestsContextProvider>
      <Component {...pageProps} />
    </TestsContextProvider>
  )
}
