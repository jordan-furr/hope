import localFont from "next/font/local";

export const glacial = localFont({
  src: [
    {
      path: "../public/fonts/GlacialIndifference-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GlacialIndifference-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/GlacialIndifference-Italic.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
  display: "swap",
});