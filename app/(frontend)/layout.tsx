import type { Metadata } from "next";
import "../styles/globals.css";
import "../styles/header.css";
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
      {children}
      <SanityLive />
    </>
  );
}
