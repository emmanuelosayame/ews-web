import "src/styles/globals.css";
import type { AppProps } from "next/app";
import font from "@next/font/local";

const migra = font({
  src: [
    {
      path: "../../public/fonts/Migra Extralight 200.otf",
      style: "normal",
      weight: "200",
    },
    {
      path: "../../public/fonts/Migra Extrabold 800.otf",
      style: "normal",
      weight: "800",
    },
    {
      path: "../../public/fonts/Migra Italic Extralight Italic 200.otf",
      style: "italic",
      weight: "200",
    },
    {
      path: "../../public/fonts/Migra Italic Extrabold Italic 800.otf",
      style: "normal",
      weight: "800",
    },
  ],
  variable: "--font-migra",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${migra.style.fontFamily};
          }
        `}
      </style>
      <main className={` ${migra.variable} bg-stone-200 h-screen`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
