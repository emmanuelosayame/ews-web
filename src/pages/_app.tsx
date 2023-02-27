import "src/styles/globals.css";
import type { AppProps } from "next/app";
import font from "@next/font/local";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${poppins.style.fontFamily};
          }
        `}
      </style>
      <main className={` ${poppins.variable} h-full w-full`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
