import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/main.scss";
import Script from "next/script";
import AuthGuard from "@/components/AuthGuard";
import StyleGuard from "@/components/StyleGuard";

const roboto = Roboto({ weight: "500", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wallet App",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        src={process.env.NEXT_PUBLIC_WIDGET_CDN}
        strategy="beforeInteractive"
      />

      <body className={roboto.className}>
        <AuthGuard>
          <StyleGuard>{children}</StyleGuard>
        </AuthGuard>
        <div id="widget"></div>
      </body>
    </html>
  );
}
