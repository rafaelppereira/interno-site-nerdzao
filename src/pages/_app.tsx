import type { AppProps } from "next/app";
import { Header } from "@/components/Header";

import "../styles/index.css";
import "swiper/css";
import "swiper/css/pagination";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
