import "src/styles/globals.css";
import type { AppProps } from "next/app";
import font from "@next/font/local";
import { api } from "src/server/api";

const poppins = font({
  src: [
    {
      path: "../../public/fonts/Poppins-Regular.ttf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../public/fonts/Poppins-Medium.ttf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../public/fonts/Poppins-SemiBold.ttf",
      style: "normal",
      weight: "600",
    },
    {
      path: "../../public/fonts/Poppins-LightItalic.ttf",
      style: "italic",
      weight: "200",
    },
    {
      path: "../../public/fonts/Poppins-Bold.ttf",
      style: "normal",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});

const montserrat = font({
  src: [
    {
      path: "../../public/fonts/Montserrat-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/fonts/Montserrat-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-montserrat",
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <main
        className={` ${poppins.variable} ${montserrat.variable} h-full w-full bg-cwhite`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default api.withTRPC(App);
