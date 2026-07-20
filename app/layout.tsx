import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milunhealthcare.in"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Milun Healthcare - Your Health is Our First Priority",
  description:
    "ISO, WHO, GMP & GLP Certified pharmaceutical company specializing in high-quality medicines and healthcare products.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Milun Healthcare - Your Health is Our First Priority",
    description:
      "ISO, WHO, GMP & GLP Certified pharmaceutical company specializing in high-quality medicines and healthcare products.",
    url: "/",
    siteName: "Milun Healthcare",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Milun Healthcare Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Milun Healthcare - Your Health is Our First Priority",
    description:
      "ISO, WHO, GMP & GLP Certified pharmaceutical company specializing in high-quality medicines and healthcare products.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "ashrit",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <style>{`
html {
  font-family: 'Poppins', sans-serif;
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
