import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/main.scss";
import type { AppProps } from "next/app";
import AuthGuard from "@/components/AuthGuard";
import StyleGuard from "@/components/StyleGuard";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthGuard>
      <StyleGuard>
        <Component {...pageProps} />
      </StyleGuard>
    </AuthGuard>
  );
}
