import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/main.scss";
import Script from "next/script";
import AuthGuard from "@/components/AuthGuard";

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
      <body className={roboto.className}>
        <AuthGuard>
          <div className="tu-jif4">
            {children}
            <div id="widget"></div>
          </div>
          <Script
            src="https://cdn.globiance.com/widget/latest/widget.js"
            strategy="beforeInteractive"
          />
        </AuthGuard>
      </body>
    </html>
  );
}
