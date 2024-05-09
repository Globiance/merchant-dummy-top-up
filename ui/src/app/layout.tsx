import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/main.scss";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <div className="tu-jif4">
          {children}
          <div id="widget"></div>
          <Script
            src="https://cdn.globiance.com/widget/latest/widget.js"
            strategy="beforeInteractive"
          />
        </div>
      </body>
    </html>
  );
}
