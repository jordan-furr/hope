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
      <Header />
      <body className={`${inter.className} ${inter.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
