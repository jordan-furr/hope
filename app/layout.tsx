import type { Metadata } from "next";
import Header from "./components/header";
import { inter } from '@/app/ui/fonts';
import "./styles/globals.css";
import "./styles/header.css";

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
        url: 'https://www.hopeaccelerator.com/01.JPG',
        width: 1200,
        height: 630,
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
