import '@/styles/globals.css'
import '@/styles/contact.css'
import '@/styles/solution.css'
import '@/styles/new.css'
import "@/styles/OnDemand.css";
import { SessionProvider } from "next-auth/react"


export default function App({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}