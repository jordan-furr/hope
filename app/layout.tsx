import type { Metadata } from "next";
import Header from "./components/header";
import "./styles/globals.css";
import "./styles/header.css";
import './styles/page.css'
import { glacial } from "./fonts";

export const metadata: Metadata = {
  title: "Hope Accelerator",
  description: "Retreats in Normandy",
  openGraph: {
    title: 'Hope Accelerator',
    description: 'Immersive retreats run on an ethos: the regenerative power of Nature heals systems and us.',
    url: 'https://www.hopeaccelerator.com/',
    siteName: 'Hope Accelerator',
    images: [
      {
        url: 'https://www.hopeaccelerator.com/hopeaccelerator.png',
        width: 1200,
        height: 800,
        alt: 'Hope Retreats in Normandy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
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
        <meta name="theme-color" content="#2E2823" />
      </head>
      
      <body className={glacial.variable}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
