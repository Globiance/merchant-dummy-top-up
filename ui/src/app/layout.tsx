/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "@/styles/main.scss";
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
      <body className={roboto.className}>
        <AuthGuard>
          <StyleGuard>{children}</StyleGuard>
        </AuthGuard>
      </body>
    </html>
  );
}
