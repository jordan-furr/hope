import type { Metadata } from "next";
import Header from "./components/header";
import { inter } from '@/app/ui/fonts';
import "./styles/globals.css";
import './styles/header.css'

export const metadata: Metadata = {
  title: "Hope Accelerator",
  description: "Retreats in Normandy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <Header />
      <body className={`${inter.className} ${inter.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
