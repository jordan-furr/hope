import type { Metadata } from "next";
import { SanityLive } from '@/sanity/lib/live'

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
        url: 'https://www.hopeaccelerator.com/Hope-Accelerator-France-Normandy.png',
        width: 1200,
        height: 630,
        alt: 'Hope Retreats in Normandy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function FrontendLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2E2823" />
      </head>
      {children}
      <SanityLive />
    </>
  );
}
