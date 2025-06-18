import type { Metadata } from "next";
import { inter } from '@/app/ui/fonts';
import "../styles/globals.css";

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
      <body className={`${inter.className} ${inter.className}`}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}