import type { Metadata } from "next";
import "./globals.css";
import Header from "@/_components/header/header";
import NextThemeProvider from "./Provider";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "where in the world",
  description: "Created by Ankit Kumar",
};

const nunitoFont = Nunito({
  subsets: ["latin", "cyrillic", "latin-ext"],
  weight: ["300", "600", "800"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunitoFont.className}>
        <NextThemeProvider>
          <Header />
          {children}
        </NextThemeProvider>
      </body>
    </html>
  );
}
