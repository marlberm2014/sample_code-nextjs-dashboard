import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Marl Bermudo's Portfolio",
    default: "Marl Bermudo's Portfolio",
  },
  description: "A personal portfolio website designed and developed by Marl Bermudo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="A personal portfolio website designed and developed by Marl Bermudo." />
        <meta name="keywords" content="Marl Bermudo, Portfolio, React, NextJs, Postgres, Tailwind" />
        <meta property="og:title" content="Marl Bermudo's Portfolio" />
        <meta
          property="og:description"
          content="A personal portfolio website designed and developed by Marl Bermudo."
        />
        <meta property="og:image" content="/favicon-32x32.png" />
        <link rel="icon" href="/%PUBLIC_URL%/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        {/* 
          manifest.json provides metadata used when your web app is installed on a
          user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
        */}
        <link rel="manifest" href="/%PUBLIC_URL%/manifest.json" />

        <title>Marl Bermudo&apos;s Portfolio</title>
      </head>

      <body className={`${inter.className} antialiased bg-gray-100 text-gray-600`}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  );
}
