import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger-cx/bootstrap.js?v=1">

      <Component {...pageProps} />
    </>
  );
}
