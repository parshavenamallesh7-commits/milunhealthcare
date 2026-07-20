"use client"

import React from "react"
import type { ReactElement } from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Pill,
  Heart,
  Bone,
  Activity,
  Dna,
  Sun,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage(): ReactElement {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    "mi-sum-vit": 0,
    "boon-fol": 0,
    "mi-red-z-one": 0,
    "mi-cal-zm": 0,
    "etomil-mr": 0,
    "mi-cal-k2": 0,
    "glycy-max-d3": 0,
    "ferti-fa-q10": 0,
    "doxy-mil-od": 0,
    "etomil-90": 0,
  })

  const productImages = {
    "mi-sum-vit": [
      { src: "/products/my-sum-vit.jpeg", alt: "My Sum Vit Tablets - Front View" },
      { src: "/products/my-sum-vit-2.jpeg", alt: "My Sum Vit Tablets - Side View" },
    ],
    "boon-fol": [{ src: "/products/boon-fol.jpeg", alt: "Boon Fol Tablets - Front View" }],
    "mi-red-z-one": [
      { src: "/products/mi-red-z-one-1.jpg", alt: "Mi Red Z One Tablets - Front View" },
      { src: "/products/mi-red-z-one-2.jpg", alt: "Mi Red Z One Tablets - With Blister Pack" },
    ],
    "mi-cal-zm": [
      { src: "/products/mi-cal-zm.jpeg", alt: "Mi Cal ZM Tablets - Front View" },
      { src: "/products/mi-cal-zm-2.jpeg", alt: "Mi Cal ZM Tablets - Side View" },
      { src: "/products/mi-cal-zm-3.jpeg", alt: "Mi Cal ZM Tablets - With Blister Pack" },
    ],
    "etomil-mr": [{ src: "/products/eto-mil-mr.jpeg", alt: "EtoMil MR Tablets - Front View" }],
    "mi-cal-k2": [
      { src: "/products/mi1.jpg", alt: "Mi Cal K2 Tablets - Front View" },
      { src: "/products/mi2.jpg", alt: "Mi Cal K2 Tablets - Side View with Details" },
    ],
    "glycy-max-d3": [
      { src: "/products/glycy-max-d3.jpeg", alt: "GLYCY MAX D3 Tablets - Front View" },
      { src: "/products/glycy-max-d3-2.jpeg", alt: "GLYCY MAX D3 Tablets - Side View" },
    ],
    "ferti-fa-q10": [
      { src: "/products/must-q10.jpeg", alt: "MUST Q10 Tablets - Front View" },
      { src: "/products/must-q10-2.jpeg", alt: "MUST Q10 Tablets - Side View" },
    ],
    "doxy-mil-od": [
      { src: "/products/doxy-mil-od.jpeg", alt: "Doxy Mil-OD Tablets - Front View" },
      { src: "/products/doxy-mil-od-2.jpeg", alt: "Doxy Mil-OD Tablets - Side View" },
      { src: "/products/doxy-mil-od-3.jpeg", alt: "Doxy Mil-OD Tablets - With Blister Pack" },
    ],
    "etomil-90": [{ src: "/products/ETOMIL-90.jpeg", alt: "Etomil-90 Tablets - Front View" }],
  }

  type ProductKey = keyof typeof productImages

  const nextImage = (productKey: ProductKey) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productKey]: (prev[productKey] + 1) % productImages[productKey].length,
    }))
  }

  const prevImage = (productKey: ProductKey) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productKey]: prev[productKey] === 0 ? productImages[productKey].length - 1 : prev[productKey] - 1,
    }))
  }

  const products = [
    {
      key: "mi-sum-vit" as ProductKey,
      title: "My Sum Vit™",
      subtitle: "Tablets",
      icon: Pill,
      iconWrap: "from-[#28A745]/10 to-[#007BFF]/10",
      iconClass: "text-[#28A745]",
      titleClass: "text-[#2fba04]",
      subtitleClass: "text-[#28A745]",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Lycopene, Cyanocobalamin, Multimineral, Multivitamin & Antioxidants",
      href: "/products/mi-sum-vit",
    },
    {
      key: "boon-fol" as ProductKey,
      title: "Boon Fol™",
      subtitle: "Tablets",
      icon: Pill,
      iconWrap: "from-[#E6F0FA] to-[#F8FBFF]",
      iconClass: "text-[#007BFF]",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-[#28A745]",
      buttonClass: "from-[#007BFF] to-[#28A745] hover:from-[#28A745] hover:to-[#007BFF]",
      description: "Folic Acid for pregnancy support and daily wellness",
      href: "/products/boon-fol",
    },
    {
      key: "mi-red-z-one" as ProductKey,
      title: "Mi Red Z One™",
      subtitle: "Tablets",
      icon: Heart,
      iconWrap: "from-red-100 to-pink-100",
      iconClass: "text-red-500",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-red-500",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Ferrous Ascorbate, Folic Acid & Zinc Sulphate",
      href: "/products/mi-red-z-one",
    },
    {
      key: "mi-cal-zm" as ProductKey,
      title: "Mi Cal ZM™",
      subtitle: "Tablets",
      icon: Bone,
      iconWrap: "from-orange-100 to-yellow-100",
      iconClass: "text-[#FF6200]",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-[#FF6200]",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Calcium Citrate Malate, Vitamin D3, Magnesium & Zinc Sulphate",
      href: "/products/mi-cal-zm",
    },
    {
      key: "etomil-mr" as ProductKey,
      title: "EtoMil MR™",
      subtitle: "Tablets",
      icon: Activity,
      iconWrap: "from-blue-100 to-indigo-100",
      iconClass: "text-blue-600",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-blue-600",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Etoricoxib 60mg and Thiocolchicoside 4mg",
      href: "/products/etomil-mr",
    },
    {
      key: "mi-cal-k2" as ProductKey,
      title: "Mi Cal K2™",
      subtitle: "Tablets",
      icon: Bone,
      iconWrap: "from-purple-100 to-pink-100",
      iconClass: "text-purple-600",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-purple-600",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Calcium citrate malate, Calcitriol, Mg, Zink, Vitamin K2-7 & Methylcobalomine",
      href: "/products/mi-cal-k2",
    },
    {
      key: "glycy-max-d3" as ProductKey,
      title: "GLYCY MAX D3™",
      subtitle: "Tablets",
      icon: Sun,
      iconWrap: "from-[#E8F7EE] to-[#DDF5E8]",
      iconClass: "text-[#0F6B3F]",
      titleClass: "text-[#0F6B3F]",
      subtitleClass: "text-[#2B7A4B]",
      buttonClass: "from-[#0F6B3F] to-[#2B7A4B] hover:from-[#2B7A4B] hover:to-[#0F6B3F]",
      description: "Vitamin D3, Calcium & Glycine Complex",
      href: "/products/glycy-max-d3",
    },
    {
      key: "ferti-fa-q10" as ProductKey,
      title: "MUST Q10™",
      subtitle: "Tablets",
      icon: Dna,
      iconWrap: "from-green-100 to-emerald-100",
      iconClass: "text-green-600",
      titleClass: "text-[#007BFF]",
      subtitleClass: "text-green-600",
      buttonClass: "from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745]",
      description: "Ubiquinol, Lycopene, L-Carnitine, L-Arginine, Folic Acid, Selenium & Astaxanthin",
      href: "/products/ferti-fa-q10",
    },
    {
      key: "doxy-mil-od" as ProductKey,
      title: "Doxy Mil-OD™",
      subtitle: "Tablets",
      icon: Heart,
      iconWrap: "from-pink-100 to-red-100",
      iconClass: "text-pink-500",
      titleClass: "text-[#E91E63]",
      subtitleClass: "text-gray-700",
      buttonClass: "from-[#E91E63] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#E91E63]",
      description: "Doxylamine Succinate, Pyridoxine Hydrochloride (Vitamin B6)",
      href: "/products/doxy-mil-od",
    },
    {
      key: "etomil-90" as ProductKey,
      title: "Etomil-90™",
      subtitle: "Tablets",
      icon: Bone,
      iconWrap: "from-purple-100 to-violet-100",
      iconClass: "text-purple-600",
      titleClass: "text-[#9333EA]",
      subtitleClass: "text-gray-700",
      buttonClass: "from-[#9333EA] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#9333EA]",
      description: "Etoricoxib 90 mg",
      href: "/products/etomil-90",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FA] via-white to-[#F8FBFF]">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Milun Healthcare Logo" width={45} height={45} priority className="rounded-full" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                Milun Healthcare
              </span>
            </Link>
            <Link
              href="/"
              className="flex items-center text-[#007BFF] hover:text-[#28A745] transition-colors font-semibold"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <section className="relative overflow-hidden rounded-[32px] border border-[#E6F0FA] bg-white/80 px-6 py-8 shadow-[0_20px_60px_rgba(0,123,255,0.08)] backdrop-blur-sm md:px-8 md:py-10 lg:px-10 lg:py-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,123,255,0.08),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(40,167,69,0.08),_transparent_35%)]" />
          <div className="relative z-10 text-center">
            <div className="mx-auto inline-flex items-center rounded-full border border-[#28A745]/20 bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 px-4 py-2">
              <Shield className="mr-2 text-[#28A745]" size={16} />
              <span className="text-sm font-semibold text-[#28A745]">Trusted pharmaceutical portfolio</span>
            </div>
            <h1 className="mt-6 text-4xl font-black text-[#003087] md:text-5xl lg:text-6xl">
              Our <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">Products</span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              High-quality pharmaceutical products designed for modern healthcare needs.
            </p>
          </div>

          <div className="relative z-10 mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon
              const images = productImages[product.key]
              const currentImage = images[currentImageIndex[product.key]]

              return (
                <Card
                  key={product.key}
                  className="group h-full overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(0,123,255,0.12)]"
                >
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-5 flex justify-center">
                      <div className={`rounded-full bg-gradient-to-r ${product.iconWrap} p-3`}>
                        <Icon className={product.iconClass} size={32} />
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className={`text-xl font-black ${product.titleClass}`}>
                        {product.title} <span className={product.subtitleClass}>{product.subtitle}</span>
                      </h3>
                    </div>

                    <div className="relative my-5">
                      <div className="flex justify-center">
                        <div className="relative w-full max-w-[280px]">
                          <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            width={280}
                            height={280}
                            loading="lazy"
                            className="h-auto w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                          />
                          {images.length > 1 && (
                            <>
                              <button
                                onClick={() => prevImage(product.key)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-300 hover:scale-110"
                              >
                                <ChevronLeft className="text-[#007BFF]" size={16} />
                              </button>
                              <button
                                onClick={() => nextImage(product.key)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-lg transition-all duration-300 hover:scale-110"
                              >
                                <ChevronRight className="text-[#007BFF]" size={16} />
                              </button>
                            </>
                          )}
                        </div>
                      </div>

                      {images.length > 1 && (
                        <div className="mt-3 flex justify-center gap-2">
                          {images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [product.key]: index }))}
                              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                                currentImageIndex[product.key] === index ? "scale-125 bg-[#007BFF]" : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                    <p className="flex-1 text-center text-sm leading-relaxed text-gray-600">{product.description}</p>

                    <div className="mt-6 flex justify-center">
                      <Link href={product.href}>
                        <Button className={`bg-gradient-to-r ${product.buttonClass} text-white px-6 py-2.5 rounded-xl font-bold shadow-sm transition-all duration-300`}>
                          View More
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </section>
      </main>
    </div>
  )
}
