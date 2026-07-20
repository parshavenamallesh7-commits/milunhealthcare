"use client"

import React from "react"
import type { ReactElement } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Pill,
  Heart,
  Bone,
  Activity,
  Dna,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  CheckCircle,
  Info,
  Target,
  Zap,
  Sun,
} from "lucide-react"
import { getProductBySlug } from "@/lib/products"

// Function to get icon component based on string name
function getIconComponent(iconName: string): React.ElementType {
  const icons: Record<string, React.ElementType> = {
    Pill,
    Heart,
    Bone,
    Activity,
    Dna,
    Sun,
  }
  return icons[iconName] || Pill
}

export default function ProductDetailPage(): ReactElement {
  const params = useParams()
  const slug = params?.slug as string
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const product = getProductBySlug(slug)

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#003087] mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link href="/products">
            <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] text-white px-6 py-3 rounded-xl font-bold">
              <ArrowLeft className="mr-2" size={20} />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const IconComponent = getIconComponent(product.icon)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF]">
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            image: product.images.map((img) => `https://milunhealthcare.com${img.src}`),
            brand: {
              "@type": "Brand",
              name: "Milun Healthcare",
              url: "https://milunhealthcare.com",
            },
            manufacturer: {
              "@type": "Organization",
              name: product.manufacturer || "Milun Pharmaceuticals Limited",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              price: "Contact for pricing",
            },
            category: product.category,
          }),
        }}
      />
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Milun Healthcare Logo" width={45} height={45} className="rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                Milun Healthcare
              </span>
            </Link>
            <Link
              href="/products"
              className="flex items-center text-[#007BFF] hover:text-[#28A745] transition-colors font-semibold"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Products
            </Link>
          </div>
        </div>
      </header>

      {/* Product Detail */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Product Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center mb-4">
              <div 
                className="p-4 rounded-full"
                style={{ backgroundColor: `${product.iconColor}20` }}
              >
                <IconComponent size={48} style={{ color: product.iconColor }} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-[#003087] mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-600">{product.tagline}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Section */}
            <div className="space-y-6">
              <Card className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="relative">
                    <div className="flex justify-center">
                      <div className="relative group">
                        <Image
                          src={product.images[currentImageIndex].src}
                          alt={product.images[currentImageIndex].alt}
                          width={400}
                          height={400}
                          className="w-full max-w-[400px] h-auto rounded-xl shadow-lg"
                        />
                        {product.images.length > 1 && (
                          <>
                            <button
                              onClick={prevImage}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            >
                              <ChevronLeft className="text-[#007BFF]" size={24} />
                            </button>
                            <button
                              onClick={nextImage}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                            >
                              <ChevronRight className="text-[#007BFF]" size={24} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                    {product.images.length > 1 && (
                      <div className="flex justify-center mt-4 space-x-2">
                        {product.images.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              currentImageIndex === index
                                ? "bg-[#28A745] scale-125"
                                : "bg-gray-300 hover:bg-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Composition Card */}
              <Card className="bg-white rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003087] mb-4 flex items-center">
                    <Info className="mr-2" size={24} />
                    Composition
                  </h3>
                  <p className="text-gray-700 text-lg">{product.composition}</p>
                </CardContent>
              </Card>
            </div>

            {/* Details Section */}
            <div className="space-y-6">
              {/* Description */}
              <Card className="bg-white rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003087] mb-4 flex items-center">
                    <Target className="mr-2" size={24} />
                    Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="bg-white rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003087] mb-4 flex items-center">
                    <Zap className="mr-2" size={24} />
                    Key Benefits
                  </h3>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#28A745] mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Indications */}
              <Card className="bg-white rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#003087] mb-4 flex items-center">
                    <Pill className="mr-2" size={24} />
                    Indications
                  </h3>
                  <ul className="space-y-3">
                    {product.indications.map((indication, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-[#007BFF] mr-3 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{indication}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Dosage & Storage */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-[#28A745]/10 to-[#007BFF]/10 rounded-2xl shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#003087] mb-3">Dosage</h3>
                    <p className="text-gray-700">{product.dosage}</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-[#FF6200]/10 to-[#007BFF]/10 rounded-2xl shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#003087] mb-3">Storage</h3>
                    <p className="text-gray-700">{product.storage}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Button */}
              <Card className="bg-white rounded-2xl shadow-xl">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <p className="text-gray-600 font-medium">
                      For more information or to place an order, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                      <Button
                        onClick={() => window.open("https://wa.me/919490370472?text=Hello%20Milun%20Healthcare!", "_blank")}
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center"
                      >
                        <Zap className="mr-2" size={20} />
                        WhatsApp Us
                      </Button>
                      <Link href="/#contact-us">
                        <Button
                          variant="outline"
                          className="border-2 border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-6 py-3 rounded-xl font-bold"
                        >
                          Contact Us
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
