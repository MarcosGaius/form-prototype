import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Poppins } from "@next/font/google";
import Providers from "../providers";

const poppins = Poppins({
  variable: "--font-poppins",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable}`}>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </div>
  );
}
