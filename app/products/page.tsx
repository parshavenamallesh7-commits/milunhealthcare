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
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductsPage(): ReactElement {
  const [currentImageIndex, setCurrentImageIndex] = useState({
    "mi-sum-vit": 0,
    "mi-red-z-one": 0,
    "mi-cal-zm": 0,
    "etomil-mr": 0,
    "mi-cal-k2": 0,
    "ferti-fa-q10": 0,
    "doxy-mil-od": 0,
    "etomil-90": 0,
  })

  const productImages = {
    "mi-sum-vit": [
      { src: "/products/mi-cal-zm-1.jpg", alt: "Mi Sum Vit Tablets - Front View" },
      { src: "/products/mi-cal-zm-2.jpg", alt: "Mi Sum Vit Tablets - Side View with Details" },
      { src: "/products/mi-cal-zm-3.jpg", alt: "Mi Sum Vit Tablets - With Blister Pack" },
    ],
    "mi-red-z-one": [
      { src: "/products/mi-red-z-one-1.jpg", alt: "Mi Red Z One Tablets - Front View" },
      { src: "/products/mi-red-z-one-2.jpg", alt: "Mi Red Z One Tablets - With Blister Pack" },
    ],
    "mi-cal-zm": [
      { src: "/products/mi-sum-vit-1.jpg", alt: "Mi Cal ZM Tablets - Front View" },
      { src: "/products/mi-sum-vit-2.jpg", alt: "Mi Cal ZM Tablets - Side View with Details" },
      { src: "/products/mi-sum-vit-3.jpg", alt: "Mi Cal ZM Tablets - With Blister Pack" },
    ],
    "etomil-mr": [
      { src: "/products/eto1.jpg", alt: "EtoMil MR Tablets - Front View" },
      { src: "/products/eto2.jpg", alt: "EtoMil MR Tablets - With Blister Pack" },
    ],
    "mi-cal-k2": [
      { src: "/products/mi1.jpg", alt: "Mi Cal K2 Tablets - Front View" },
      { src: "/products/mi2.jpg", alt: "Mi Cal K2 Tablets - Side View with Details" },
    ],
    "ferti-fa-q10": [{ src: "/products/fer1.jpg", alt: "Ferti Fa - Q10 Tablets - Front View" }],
    "doxy-mil-od": [
      { src: "/products/Doxy Mil-OD.jpeg", alt: "Doxy Mil-OD Tablets - Front View" },
      { src: "/products/Doxy Mil-od (2).jpeg", alt: "Doxy Mil-OD Tablets - Side View" },
    ],
    "etomil-90": [{ src: "/products/ETOMIL-90.jpeg", alt: "Etomil-90 Tablets - Front View" }],
  }

  type ProductKey = keyof typeof productImages;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF]">
      {/* Simple Header */}
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
              href="/"
              className="flex items-center text-[#007BFF] hover:text-[#28A745] transition-colors font-semibold"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Products Only */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-black text-[#003087] mb-4">
            Our <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-xl text-gray-600">High-Quality Pharmaceutical Products</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto w-full">
          {/* Mi Sum Vit Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 p-3 rounded-full">
                  <Pill className="text-[#28A745]" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#2fba04] mb-4 text-center">
                M<span className="text-[#ff0004]">i</span><span className="text-[#212a5c]"> S</span><span className="text-[#ff0004]">u</span><span className="text-[#d4c522]">m</span> <span className="text-[#22d4ce]">V</span><span className="text-[#212a5c]">i</span><span className="text-[#ff0004]">t</span>™ <span className="text-[#28A745]">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["mi-sum-vit"][currentImageIndex["mi-sum-vit"]].src}
                      alt={productImages["mi-sum-vit"][currentImageIndex["mi-sum-vit"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["mi-sum-vit"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("mi-sum-vit")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("mi-sum-vit")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Lycopene, Cyanocobalamin, Multimineral, Multivitamin & Antioxidants
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/mi-sum-vit">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Mi Red Z One Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-red-100 to-pink-100 p-3 rounded-full">
                  <Heart className="text-red-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                Mi<span className="text-[#ff0004]"> Red</span> Z One™ <span className="text-red-500">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["mi-red-z-one"][currentImageIndex["mi-red-z-one"]].src}
                      alt={productImages["mi-red-z-one"][currentImageIndex["mi-red-z-one"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["mi-red-z-one"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("mi-red-z-one")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("mi-red-z-one")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Ferrous Ascorbate, Folic Acid & Zinc Sulphate
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/mi-red-z-one">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Mi Cal ZM Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 rounded-full">
                  <Bone className="text-[#FF6200]" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                Mi Cal ZM™ <span className="text-[#FF6200]">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["mi-cal-zm"][currentImageIndex["mi-cal-zm"]].src}
                      alt={productImages["mi-cal-zm"][currentImageIndex["mi-cal-zm"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["mi-cal-zm"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("mi-cal-zm")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("mi-cal-zm")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Calcium Citrate Malate, Vitamin D3, Magnesium & Zinc Sulphate
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/mi-cal-zm">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* EtoMil MR Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full">
                  <Activity className="text-blue-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                EtoMil MR™ <span className="text-blue-600">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["etomil-mr"][currentImageIndex["etomil-mr"]].src}
                      alt={productImages["etomil-mr"][currentImageIndex["etomil-mr"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["etomil-mr"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("etomil-mr")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("etomil-mr")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Etoricoxib 60mg and Thiocolchicoside 4mg
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/etomil-mr">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Mi Cal K2 Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                  <Bone className="text-purple-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                Mi Cal K2™ <span className="text-purple-600">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["mi-cal-k2"][currentImageIndex["mi-cal-k2"]].src}
                      alt={productImages["mi-cal-k2"][currentImageIndex["mi-cal-k2"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["mi-cal-k2"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("mi-cal-k2")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("mi-cal-k2")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Calcium citrate malate, Calcitriol, Mg, Zink, Vitamin K2-7 & Methylcobalomine
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/mi-cal-k2">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Ferti Fa - Q10 Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-full">
                  <Dna className="text-green-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                Ferti Fa - Q10™ <span className="text-green-600">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["ferti-fa-q10"][currentImageIndex["ferti-fa-q10"]].src}
                      alt={productImages["ferti-fa-q10"][currentImageIndex["ferti-fa-q10"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["ferti-fa-q10"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("ferti-fa-q10")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("ferti-fa-q10")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Ubiquinol, Lycopene, L-Carnitine, L-Arginine, Folic Acid, Selenium & Astaxanthin
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/ferti-fa-q10">
                  <Button className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Doxy Mil-OD Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-pink-100 to-red-100 p-3 rounded-full">
                  <Heart className="text-pink-500" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#E91E63] mb-4 text-center">
                Doxy Mil-OD™ <span className="text-gray-700">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["doxy-mil-od"][currentImageIndex["doxy-mil-od"]].src}
                      alt={productImages["doxy-mil-od"][currentImageIndex["doxy-mil-od"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["doxy-mil-od"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("doxy-mil-od")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("doxy-mil-od")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Doxylamine Succinate, Pyridoxine Hydrochloride (Vitamin B6)
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/doxy-mil-od">
                  <Button className="bg-gradient-to-r from-[#E91E63] to-[#FF69B4] hover:from-[#FF69B4] hover:to-[#E91E63] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Etomil-90 Tablets */}
          <Card className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500">
            <CardContent className="p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-gradient-to-r from-purple-100 to-violet-100 p-3 rounded-full">
                  <Bone className="text-purple-600" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-black text-[#9333EA] mb-4 text-center">
                Etomil-90™ <span className="text-gray-700">Tablets</span>
              </h3>
              <div className="relative mb-4">
                <div className="flex justify-center">
                  <div className="relative group">
                    <Image
                      src={productImages["etomil-90"][currentImageIndex["etomil-90"]].src}
                      alt={productImages["etomil-90"][currentImageIndex["etomil-90"]].alt}
                      width={280}
                      height={280}
                      className="w-full max-w-[280px] h-auto rounded-xl shadow-lg"
                    />
                    {productImages["etomil-90"].length > 1 && (
                      <>
                        <button
                          onClick={() => prevImage("etomil-90")}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronLeft className="text-[#007BFF]" size={16} />
                        </button>
                        <button
                          onClick={() => nextImage("etomil-90")}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow"
                        >
                          <ChevronRight className="text-[#007BFF]" size={16} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-center text-sm">
                Etoricoxib 90 mg
              </p>
              <div className="mt-4 text-center">
                <Link href="/products/etomil-90">
                  <Button className="bg-gradient-to-r from-[#9333EA] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#9333EA] text-white px-6 py-2 rounded-xl font-bold">
                    View More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
