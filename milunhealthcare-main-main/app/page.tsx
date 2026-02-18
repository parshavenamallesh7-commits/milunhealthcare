"use client"

import React from "react"

import type { ReactElement } from "react"

import Link from "next/link"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Pill,
  Heart,
  Bone,
  Award,
  Globe,
  CheckCircle,
  FlaskRoundIcon as Flask,
  Menu,
  X,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Shield,
  Building,
  Stethoscope,
  Activity,
  Dna,
} from "lucide-react"

export default function MilunHealthcare(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({})
  const [currentImageIndex, setCurrentImageIndex] = useState({
    "mi-sum-vit": 0,
    "mi-red-z-one": 0,
    "mi-cal-zm": 0,
    "etomil-mr": 0,
    "mi-cal-k2": 0,
    "ferti-fa-q10": 0,
    "doxy-mil-od": 0,
    "etomil-90": 0,
    "eto-mil-mr": 0,
  })

  // Fixed product images mapping
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
    "etomil-90": [
      { src: "/products/ETOMIL-90.jpeg", alt: "Etomil-90 Tablets - Front View" },
    ],
    "eto-mil-mr": [
      { src: "/products/ETO MIL MR.jpeg", alt: "Eto Mil MR Tablets - Front View" },
    ],
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Milun Healthcare!")
    window.open(`https://wa.me/919490370472?text=${message}`, "_blank")
  }

  const nextImage = (productKey: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productKey]: (prev[productKey] + 1) % productImages[productKey].length,
    }))
  }

  const prevImage = (productKey: string) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [productKey]: prev[productKey] === 0 ? productImages[productKey].length - 1 : prev[productKey] - 1,
    }))
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E6F0FA]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Milun Healthcare Logo" width={55} height={55} className="rounded-full" />
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                Milun Healthcare
              </span>
              <p className="text-xs text-gray-500 font-medium">Your Health is Our Priority</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="relative text-[#007BFF] hover:text-[#28A745] transition-all duration-300 font-semibold group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-[#28A745] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#about-us"
              className="relative text-[#007BFF] hover:text-[#28A745] transition-all duration-300 font-semibold group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-[#28A745] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="relative text-[#28A745] hover:text-[#007BFF] transition-all duration-300 font-semibold group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#28A745] to-[#007BFF] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/#contact-us"
              className="relative text-[#007BFF] hover:text-[#28A745] transition-all duration-300 font-semibold group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#007BFF] to-[#28A745] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#007BFF] p-2 rounded-lg hover:bg-[#E6F0FA] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#E6F0FA]">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-[#007BFF] hover:text-[#28A745] transition-colors duration-300 font-semibold text-left py-2 px-4 rounded-lg hover:bg-[#E6F0FA]"
              >
                Home
              </Link>
              <Link
                href="/#about-us"
                className="text-[#007BFF] hover:text-[#28A745] transition-colors duration-300 font-semibold text-left py-2 px-4 rounded-lg hover:bg-[#E6F0FA]"
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="text-[#28A745] hover:text-[#007BFF] transition-colors duration-300 font-semibold text-left py-2 px-4 rounded-lg hover:bg-[#E6F0FA]"
              >
                Products
              </Link>
              <Link
                href="/#contact-us"
                className="text-[#007BFF] hover:text-[#28A745] transition-colors duration-300 font-semibold text-left py-2 px-4 rounded-lg hover:bg-[#E6F0FA]"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-br from-[#E6F0FA] via-white to-[#E6F0FA] py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23007BFF fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=4/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center justify-items-center">
            <div className={`space-y-8 ${isVisible["home"] ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 px-4 py-2 rounded-full border border-[#28A745]/20">
                  <Shield className="text-[#28A745]" size={16} />
                  <span className="text-sm font-semibold text-[#28A745]">ISO, WHO, GMP &amp; GLP Certified Products </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-[#007BFF] via-[#28A745] to-[#FF6200] bg-clip-text text-transparent">
                    Your Health
                  </span>
                  <br />
                  <span className="text-[#003087]">is Our First</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6200] to-[#007BFF] bg-clip-text text-transparent animate-pulse">
                    Priority
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                <span className="text-[#007BFF] font-bold">Milun Healthcare</span> - Excellence in pharmaceutical care
                with cutting-edge technology and unwavering commitment to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollToSection("products")}
                  className="bg-gradient-to-r from-[#28A745] to-[#007BFF] hover:from-[#007BFF] hover:to-[#28A745] text-white px-8 py-4 text-lg rounded-xl font-bold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Stethoscope className="mr-2" size={20} />
                  Explore Our Products
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-8 py-4 text-lg rounded-xl font-bold transform hover:scale-105 transition-all duration-300 bg-transparent"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Contact Us
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#007BFF]">2020</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#28A745]">4+</div>
                  <div className="text-sm text-gray-500">Certifications</div>
                </div>
              </div>
            </div>
            <div className={`flex justify-center ${isVisible["home"] ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#007BFF]/20 to-[#28A745]/20 rounded-3xl blur-3xl transform rotate-6"></div>
                <Image
                  src="https://media.istockphoto.com/id/1370358685/photo/multicolored-pills-scattered-from-white-plastic-medicine-container.jpg?s=612x612&w=0&k=20&c=zknrVfCELovlvvXKrAlWKLnFLfkMQF8nh9k2d97pJkE="
                  alt="Pharmaceutical Pills and Medicine Container"
                  width={500}
                  height={500}
                  className="relative rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                  <Star className="text-[#FF6200]" size={32} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-24 bg-white border-t-4 border-gradient-to-r from-[#007BFF] to-[#28A745]">
        <div className="container mx-auto px-4">
          <div className={`max-w-4xl mx-auto text-center flex flex-col items-center ${isVisible["about-us"] ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 px-6 py-3 rounded-full">
                  <Building className="text-[#007BFF]" size={20} />
                  <span className="text-lg font-bold text-[#007BFF]">About Milun Healthcare</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-[#003087] leading-tight">
                  Pioneering{" "}
                  <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                    Healthcare Excellence
                  </span>
                </h2>
              </div>

              <div className="bg-gradient-to-br from-[#E6F0FA] to-white p-8 rounded-2xl shadow-lg border border-[#007BFF]/10">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Founded  <span className="font-bold text-[#007BFF]">{""}</span> by visionary leaders{" "}
                  <span className="font-bold text-[#28A745]">Samala.S</span> and{" "}
                  <span className="font-bold text-[#28A745]">Anapuram Hareesha</span>, Milun Healthcare stands at the
                  forefront of pharmaceutical excellence.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We are a <span className="font-bold text-[#FF6200]">certified pharmaceutical products</span> with <span className="font-bold text-[#FF6200]"> ISO,
                  WHO, GMP, and GLP </span>certifications, committed to ensuring your health and well-being through innovative
                  medicine development and unwavering quality standards.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#007BFF] hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="text-[#FF6200]" size={28} />
                    <span className="text-lg font-bold text-gray-800">GST Registration</span>
                  </div>
                  <p className="text-gray-600 font-mono text-lg">36ACA***490N1ZQ</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#28A745] hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <Award className="text-[#FF6200]" size={28} />
                    <span className="text-lg font-bold text-gray-800">Drug License</span>
                  </div>
                  <p className="text-gray-600 font-mono text-lg">TG/MDL/20**-120***</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 flex flex-col items-center ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 px-6 py-3 rounded-full">
                <Pill className="text-[#28A745]" size={20} />
                <span className="text-lg font-bold text-[#28A745]">Our Product Range</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#003087] leading-tight">
                High-Quality{" "}
                <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                  Pharmaceutical Products
                </span>
              </h2>
              <p className="text-xl text-[#28A745] italic font-semibold">
                Crafted with Precision, Care & Scientific Excellence
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Mi Sum Vit Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-[#28A745]/20 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 p-3 rounded-full">
                    <Pill className="text-[#28A745]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#2fba04] mb-4 text-center">
                  M<span className="text-[#ff0004]">i</span><span className="text-[#212a5c]"> S</span><span className="text-[#ff0004]">u</span><span className="text-[#d4c522]">m</span> <span className="text-[#22d4ce]">V</span><span className="text-[#212a5c]">i</span><span className="text-[#ff0004]">t</span>™ <span className="text-[#28A745]">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["mi-sum-vit"][currentImageIndex["mi-sum-vit"]].src || "/placeholder.svg"}
                        alt={productImages["mi-sum-vit"][currentImageIndex["mi-sum-vit"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["mi-sum-vit"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("mi-sum-vit")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("mi-sum-vit")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["mi-sum-vit"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["mi-sum-vit"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "mi-sum-vit": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["mi-sum-vit"] === index
                              ? "bg-[#28A745] scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-[#28A745]/5 to-[#007BFF]/5 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    A <span className="font-bold text-[#28A745]">powerful blend</span> of Lycopene, Cyanocobalamin,
                    Multimineral, Multivitamin & Antioxidants for{" "}
                    <span className="font-bold text-[#007BFF]">comprehensive health support</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mi Red Z One Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-red-200 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-red-100 to-pink-100 p-3 rounded-full">
                    <Heart className="text-red-500 bg-transparent" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                  Mi<span className="text-[#ff0004]"> Red</span> Z One™ <span className="text-red-500">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["mi-red-z-one"][currentImageIndex["mi-red-z-one"]].src || "/placeholder.svg"}
                        alt={productImages["mi-red-z-one"][currentImageIndex["mi-red-z-one"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["mi-red-z-one"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("mi-red-z-one")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("mi-red-z-one")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["mi-red-z-one"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["mi-red-z-one"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "mi-red-z-one": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["mi-red-z-one"] === index
                              ? "bg-red-500 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    <span className="font-bold text-red-500">Ferrous Ascorbate, Folic Acid & Zinc Sulphate</span>{" "}
                    Tablets specially formulated to{" "}
                    <span className="font-bold text-[#007BFF]">support optimal blood health</span> and vitality.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mi Cal ZM Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-orange-200 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-orange-100 to-yellow-100 p-3 rounded-full">
                    <Bone className="text-[#FF6200]" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                  Mi Cal ZM™ <span className="text-[#FF6200]">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["mi-cal-zm"][currentImageIndex["mi-cal-zm"]].src || "/placeholder.svg"}
                        alt={productImages["mi-cal-zm"][currentImageIndex["mi-cal-zm"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["mi-cal-zm"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("mi-cal-zm")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("mi-cal-zm")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["mi-cal-zm"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["mi-cal-zm"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "mi-cal-zm": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["mi-cal-zm"] === index
                              ? "bg-[#FF6200] scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    <span className="font-bold text-[#FF6200]">
                      Calcium Citrate Malate, Vitamin D3, Magnesium &amp; Zinc Sulphate 
                    </span>
                    for <span className="font-bold text-[#007BFF]">pregnant and lactating women</span>.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* EtoMil MR Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-blue-200 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-3 rounded-full">
                    <Activity className="text-blue-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                  EtoMil MR™ <span className="text-blue-600">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["etomil-mr"][currentImageIndex["etomil-mr"]].src || "/placeholder.svg"}
                        alt={productImages["etomil-mr"][currentImageIndex["etomil-mr"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["etomil-mr"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("etomil-mr")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("etomil-mr")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["etomil-mr"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["etomil-mr"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "etomil-mr": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["etomil-mr"] === index
                              ? "bg-blue-600 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    A combination of{" "}
                    <span className="font-bold text-blue-600">Etoricoxib 60mg and Thiocolchicoside 4mg</span> for pain
                    relief. Supports{" "}
                    <span className="font-bold text-[#007BFF]">muscle relaxation and inflammation management</span>.
                    Designed for effective musculoskeletal treatment.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Mi Cal K2 Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-purple-200 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-3 rounded-full">
                    <Bone className="text-purple-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                  Mi Cal K2™ <span className="text-purple-600">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["mi-cal-k2"][currentImageIndex["mi-cal-k2"]].src || "/placeholder.svg"}
                        alt={productImages["mi-cal-k2"][currentImageIndex["mi-cal-k2"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["mi-cal-k2"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("mi-cal-k2")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("mi-cal-k2")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["mi-cal-k2"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["mi-cal-k2"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "mi-cal-k2": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["mi-cal-k2"] === index
                              ? "bg-purple-600 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    Contains{" "}
                    <span className="font-bold text-purple-600">
                      Calcium citrate malate 1250mg, Calcitriol 0.25 mcg, Mg 50 mg, Zink 7.5 Mg, Vitamin K2-7 45mcg, and
                      Methylcobalomine 1500 mcg
                    </span>
                    . Promotes <span className="font-bold text-[#007BFF]">bone health and strengthens immunity</span>.
                    Enriched with essential vitamins and minerals.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Ferti Fa - Q10 Tablets */}
            <Card
              className={`bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 border-2 border-transparent hover:border-green-200 ${isVisible["products"] ? "animate-fade-in" : "opacity-0"}`}
            >
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-full">
                    <Dna className="text-green-600" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-black text-[#007BFF] mb-4 text-center">
                  Ferti Fa - Q10™ <span className="text-green-600">Tablets</span>
                </h3>

                {/* Image Carousel */}
                <div className="relative mb-4">
                  <div className="flex justify-center">
                    <div className="relative group">
                      <Image
                        src={productImages["ferti-fa-q10"][currentImageIndex["ferti-fa-q10"]].src || "/placeholder.svg"}
                        alt={productImages["ferti-fa-q10"][currentImageIndex["ferti-fa-q10"]].alt}
                        width={300}
                        height={300}
                        className="w-full max-w-[300px] h-auto rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-300"
                      />
                      {productImages["ferti-fa-q10"].length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage("ferti-fa-q10")}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronLeft className="text-[#007BFF]" size={16} />
                          </button>
                          <button
                            onClick={() => nextImage("ferti-fa-q10")}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110"
                          >
                            <ChevronRight className="text-[#007BFF]" size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  {productImages["ferti-fa-q10"].length > 1 && (
                    <div className="flex justify-center mt-3 space-x-2">
                      {productImages["ferti-fa-q10"].map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex((prev) => ({ ...prev, "ferti-fa-q10": index }))}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentImageIndex["ferti-fa-q10"] === index
                              ? "bg-green-600 scale-125"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                  <p className="text-gray-700 text-center text-sm leading-relaxed">
                    Includes{" "}
                    <span className="font-bold text-green-600">
                      Ubiquinol 200 mg, Lycopene 5 mg, L-Carnitine 500 mg, L-Arginine 3000 mg, Folic Acid 400 mcg,
                      Selenium 40 mcg, and Astaxanthin 8 mg
                    </span>
                    . Enhances{" "}
                    <span className="font-bold text-[#007BFF]">fertility and overall reproductive health</span>. Packed
                    with antioxidants for cellular support.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section
        id="certifications"
        className="py-24 bg-white border-t-4 border-gradient-to-r from-[#28A745] to-[#007BFF]"
      >
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 flex flex-col items-center ${isVisible["certifications"] ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 px-6 py-3 rounded-full">
                <Shield className="text-[#28A745]" size={20} />
                <span className="text-lg font-bold text-[#28A745]">Quality Certifications</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#003087] leading-tight">
                Trusted{" "}
                <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                  Global Standards Products 
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full">
            {[
              { name: "ISO Certified", icon: Award, delay: "0s", color: "from-blue-500 to-blue-600" },
              { name: "WHO Certified", icon: Globe, delay: "0.2s", color: "from-green-500 to-green-600" },
              { name: "GMP Certified", icon: CheckCircle, delay: "0.4s", color: "from-orange-500 to-orange-600" },
              { name: "GLP Certified", icon: Flask, delay: "0.6s", color: "from-purple-500 to-purple-600" },
            ].map((cert, index) => (
              <div
                key={cert.name}
                className={`text-center p-8 bg-gradient-to-br from-[#E6F0FA] to-white rounded-2xl hover:bg-gradient-to-br hover:from-[#007BFF] hover:to-[#28A745] hover:text-white transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 group ${isVisible["certifications"] ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: cert.delay }}
              >
                <div
                  className={`bg-gradient-to-r ${cert.color} p-4 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {React.createElement(cert.icon, { size: 48, className: "text-white" })}
                </div>
                <h3 className="font-black text-xl">{cert.name}</h3>
                <p className="text-sm mt-2 opacity-75 group-hover:opacity-100">International Standard</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="py-24 bg-gradient-to-br from-[#E6F0FA] to-[#F8FBFF]">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-20 flex flex-col items-center ${isVisible["contact-us"] ? "animate-fade-in" : "opacity-0"}`}>
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 px-6 py-3 rounded-full">
                <Phone className="text-[#007BFF]" size={20} />
                <span className="text-lg font-bold text-[#007BFF]">Contact Information</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#003087] leading-tight">
                Get in{" "}
                <span className="bg-gradient-to-r from-[#007BFF] to-[#28A745] bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-xl text-gray-600">We're here to help with all your healthcare needs</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto w-full">
            <div className={`grid md:grid-cols-3 gap-12 w-full ${isVisible["contact-us"] ? "animate-fade-in" : "opacity-0"}`}>
              <Card className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#007BFF] group hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-[#007BFF]/10 to-[#28A745]/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="text-[#007BFF]" size={32} />
                  </div>
                  <h3 className="font-black text-xl text-[#003087]">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed">
                    H. No. 8-56, Road No. 5, Rampally, Keesara Mandal, Rangareddy, Hyderabad – 501301
                  </p>
                </div>
              </Card>

              <Card className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#28A745] group hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-[#28A745]/10 to-[#007BFF]/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    <Phone className="text-[#28A745]" size={32} />
                  </div>
                  <h3 className="font-black text-xl text-[#003087]">Call Us</h3>
                  <p className="text-gray-600 text-xl font-bold">+91 9490370472</p>
                  <p className="text-sm text-gray-500">Available 24/7</p>
                </div>
              </Card>

              <Card className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-l-4 border-[#FF6200] group hover:-translate-y-2">
                <div className="text-center space-y-4">
                  <div className="bg-gradient-to-r from-[#FF6200]/10 to-[#007BFF]/10 p-4 rounded-full inline-block group-hover:scale-110 transition-transform duration-300">
                    <Mail className="text-[#FF6200]" size={32} />
                  </div>
                  <h3 className="font-black text-xl text-[#003087]">Email Us</h3>
                  <a
                    href="mailto:milunhealthcare@gmail.com"
                    className="text-gray-600 hover:text-[#FF6200] transition-colors duration-300 cursor-pointer break-all"
                  >
                    milunhealthcare@gmail.com
                  </a>
                  <p className="text-sm text-gray-500">Quick Response</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-[#003087] via-[#004099] to-[#0056b3] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-12 w-full">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Image src="/logo.png" alt="Milun Healthcare Logo" width={50} height={50} className="rounded-full" />
                <div>
                  <h3 className="text-2xl font-bold">Milun Healthcare</h3>
                  <p className="text-blue-200 text-sm">Your Health is Our Priority</p>
                </div>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Leading pharmaceutical company committed to delivering high-quality medicines with international
                standards and certifications.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white/10 p-2 rounded-lg">
                  <Shield className="text-[#28A745]" size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <Award className="text-[#FF6200]" size={20} />
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <Star className="text-yellow-400" size={20} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "About Us", "Products", "Certifications"].map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => scrollToSection(link.toLowerCase().replace(" ", "-"))}
                      className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={16} />
                      <span>{link}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="text-[#28A745] mt-1" size={20} />
                  <p className="text-blue-200 text-sm leading-relaxed">
                    H. No. 8-56, Road No. 5, Rampally, Keesara Mandal, Rangareddy, Hyderabad – 501301
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="text-[#28A745]" size={20} />
                  <p className="text-blue-200">9490370472</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="text-[#28A745]" size={20} />
                  <p className="text-blue-200 text-sm">milunhealthcare@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications Bar */}
          <div className="border-t border-white/20 pt-8 mb-8 w-full">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              <div className="flex items-center space-x-2 text-blue-200">
                <Award size={16} />
                <span className="text-sm font-semibold">ISO Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Globe size={16} />
                <span className="text-sm font-semibold">WHO Approved</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <CheckCircle size={16} />
                <span className="text-sm font-semibold">GMP Certified</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Flask size={16} />
                <span className="text-sm font-semibold">GLP Certified</span>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-lg font-semibold">© 2024 Milun Healthcare. All Rights Reserved.</p>
                <p className="text-xl italic text-blue-200 mt-2">"Your Health is Our First Priority"</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-right">
                  <p className="text-sm text-blue-200">Connect with us</p>
                  <p className="text-xs text-blue-300">Available 24/7 for support</p>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="bg-[#25D366] hover:bg-[#128C7E] p-4 rounded-full transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl group"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle size={28} className="group-hover:animate-bounce" />
                </button>
              </div>
            </div>

            {/* Designer Watermark */}
            <div className="text-center mt-6 pt-4 border-t border-white/10">
              <p className="text-xs text-blue-300/70">
                Designed by <span className="font-semibold">Ashrith and Saketh</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
