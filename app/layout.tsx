import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Milun Healthcare - Your Health is Our First Priority",
  description:
    "ISO, WHO, GMP & GLP Certified pharmaceutical company specializing in high-quality medicines and healthcare products.",
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
