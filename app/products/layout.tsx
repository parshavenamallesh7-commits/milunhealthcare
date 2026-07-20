import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://milunhealthcare.in"

export const metadata: Metadata = {
  title: "Our Products | Milun Healthcare",
  description:
    "Explore Milun Healthcare's pharmaceutical product range including maternal care, bone health, multivitamins, and pain management solutions.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Our Products | Milun Healthcare",
    description:
      "Explore Milun Healthcare's pharmaceutical product range including maternal care, bone health, multivitamins, and pain management solutions.",
    url: `${siteUrl}/products`,
    siteName: "Milun Healthcare",
    images: [
      {
        url: `${siteUrl}/logo.png`,
        width: 512,
        height: 512,
        alt: "Milun Healthcare Product Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Products | Milun Healthcare",
    description:
      "Explore Milun Healthcare's pharmaceutical product range including maternal care, bone health, multivitamins, and pain management solutions.",
    images: [`${siteUrl}/logo.png`],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children
}
