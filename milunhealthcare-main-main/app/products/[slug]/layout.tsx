import type { Metadata } from "next"
import { getProductBySlug } from "@/lib/products"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const product = getProductBySlug(slug)

  if (!product) {
    return {
      title: "Product Not Found | Milun Healthcare",
      description: "The product you are looking for does not exist.",
    }
  }

  const canonicalUrl = `https://milunhealthcare.com/products/${product.slug}`
  const imageUrl = `https://milunhealthcare.com${product.images[0]?.src || "/logo.png"}`

  return {
    title: `${product.name} - ${product.tagline} | Milun Healthcare`,
    description: product.shortDescription,
    keywords: [
      product.name,
      product.brandName,
      product.genericName,
      product.category,
      "pharmaceutical",
      "health supplement",
      "medicine",
    ],
    authors: [{ name: "Milun Healthcare" }],
    creator: "Milun Healthcare",
    publisher: "Milun Healthcare",
    formatDetection: {
      email: false,
      telephone: false,
      address: false,
    },
    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: `${product.name} | Milun Healthcare`,
      description: product.shortDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.images[0]?.alt || product.name,
          type: "image/jpeg",
        },
      ],
      siteName: "Milun Healthcare",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Milun Healthcare`,
      description: product.shortDescription,
      images: [imageUrl],
      creator: "@MilunHealthcare",
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  }
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
