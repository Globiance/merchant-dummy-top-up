import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <div id="widget"></div>
        <Script
          src={process.env.NEXT_PUBLIC_WIDGET_CDN}
          strategy="beforeInteractive"
        />
      </body>
    </Html>
  );
}
