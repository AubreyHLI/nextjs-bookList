import '../styles/global.css';
import SharedLayout from "../components/SharedLayout";

export default function App({ Component, pageProps }) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  )
   
}
