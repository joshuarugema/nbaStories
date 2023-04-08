import { Mainlayout } from '@/src/layout/mainlayout'
import '@/styles/globals.css'
import '@/styles/home.sass'

export default function App({ Component, pageProps }) {
return(
  <>
  <Mainlayout>
   <Component {...pageProps} />
  </Mainlayout>
  </>
);
}
