"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Percent,
  Sun,
  ShoppingBag,
  Heart,
  Package,
  Settings,
  ChevronDown,
  ArrowRight,
  Truck,
  Shield,
  Headphones,
  ShieldCheck, // Added ShieldCheck import
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { CATEGORIES } from "@/lib/types"
import { useState } from "react"
import { cn } from "@/lib/utils"

const SMART_SECTIONS = [
  {
    id: "new-arrivals",
    nameAr: "جديدنا",
    nameEn: "New Arrivals",
    href: "/new-arrivals",
    icon: Sparkles,
  },
  {
    id: "best-sellers",
    nameAr: "الأكثر مبيعًا",
    nameEn: "Best Sellers",
    href: "/best-sellers",
    icon: TrendingUp,
  },
  {
    id: "offers",
    nameAr: "العروض",
    nameEn: "Offers",
    href: "/offers",
    icon: Percent,
  },
  {
    id: "seasonal",
    nameAr: "موسمي",
    nameEn: "Seasonal",
    href: "/seasonal",
    icon: Sun,
  },
]

export function Footer() {
  const { t, language } = useLanguage()
  const [openSections, setOpenSections] = useState<string[]>([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  const getMagneticOffset = (iconX: number, iconY: number) => {
    const distance = Math.sqrt(Math.pow(mousePos.x - iconX, 2) + Math.pow(mousePos.y - iconY, 2))
    if (distance < 100) {
      const strength = 0.3
      return {
        x: (mousePos.x - iconX) * strength,
        y: (mousePos.y - iconY) * strength,
      }
    }
    return { x: 0, y: 0 }
  }

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <footer className="relative bg-gradient-to-b from-stone-50 via-stone-100/60 to-amber-50/40 text-slate-600 overflow-hidden border-t border-stone-200/60">
      {/* Soft Background Effects with Beige Tones */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute top-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: "8s" }}
        />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl animate-pulse" 
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        />
      </div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12" viewBox="0 0 1440 100" preserveAspectRatio="none">
          <motion.path
            d="M0,50L80,53C160,56,320,62,480,60C640,58,800,48,960,46C1120,44,1280,50,1360,53L1440,56L1440,0L0,0Z"
            fill="#fafaf9"
            animate={{
              d: [
                "M0,50L80,53C160,56,320,62,480,60C640,58,800,48,960,46C1120,44,1280,50,1360,53L1440,56L1440,0L0,0Z",
                "M0,46L80,48C160,50,320,54,480,52C640,50,800,42,960,40C1120,38,1280,42,1360,44L1440,46L1440,0L0,0Z",
                "M0,50L80,53C160,56,320,62,480,60C640,58,800,48,960,46C1120,44,1280,50,1360,53L1440,56L1440,0L0,0Z",
              ],
            }}
            transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </svg>
      </div>

      {/* Minimal Logo Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
        <Image src="/images/image.png" alt="Seven Blue" width={500} height={500} className="animate-slow-spin" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10" onMouseMove={handleMouseMove}>
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="space-y-3">
              <Image
                src="/images/image.png"
                alt="Seven Blue"
                width={160}
                height={80}
                className="animate-fade-in opacity-90"
              />
              <div className="flex items-center gap-2 text-blue-500 font-light">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span className="text-xs tracking-wide">{t("للأناقة والجودة", "For Excellence")}</span>
              </div>
            </div>

            <p className="text-slate-500 leading-relaxed text-sm font-light">
              {t(
                "سفن بلو - براند ملابس راقية مصري متخصص في تقديم أفضل الأزياء العصرية بجودة عالية. نفخر بتقديم تجربة تسوق فريدة عبر الإنترنت مع خدمة توصيل سريعة في جميع أنحاء مصر.",
                "Seven Blue - An Egyptian premium clothing brand specializing in providing the finest modern fashion with high quality. We pride ourselves on offering a unique online shopping experience with fast delivery service across Egypt.",
              )}
            </p>

            {/* Contact Info */}
            <div className="space-y-2.5">
              <a
                href="tel:01500550388"
                className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100/80 transition-colors">
                  <Phone className="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span dir="ltr" className="font-light text-sm">015 00550388</span>
              </a>

              <a
                href="mailto:seven_blue1978@gmail.com"
                className="flex items-center gap-2.5 text-slate-500 hover:text-blue-500 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100/80 transition-colors">
                  <Mail className="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span className="break-all font-light text-sm">seven_blue1978@gmail.com</span>
              </a>

              <div className="flex items-start gap-2.5 text-slate-500">
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-500" />
                </div>
                <span className="font-light text-sm">{t("جمهورية مصر العربية", "Arab Republic of Egypt")}</span>
              </div>
            </div>

            {/* Social Media - Minimal & Soft Design */}
            <div className="pt-3">
              <p className="text-xs text-slate-400 font-light mb-2.5">{t("تابعنا على", "Follow Us")}</p>
              <div className="flex gap-2">
                {[
                  { href: "https://www.facebook.com/sevenblueonlinestore", icon: Facebook, bg: "bg-blue-50 hover:bg-blue-500", iconColor: "text-blue-500 group-hover:text-white" },
                  { href: "https://www.instagram.com/sevenblue_1978", icon: Instagram, bg: "bg-pink-50 hover:bg-gradient-to-br hover:from-pink-400 hover:to-purple-500", iconColor: "text-pink-500 group-hover:text-white" },
                  { href: "https://wa.me/201500550388", icon: MessageCircle, bg: "bg-green-50 hover:bg-green-500", iconColor: "text-green-500 group-hover:text-white" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group",
                      social.bg
                    )}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className={cn("h-4 w-4 transition-colors", social.iconColor)} />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-slate-700">
              <ShoppingBag className="w-4 h-4 text-blue-400" />
              {t("روابط سريعة", "Quick Links")}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <ArrowRight className={cn("w-3 h-3 transition-transform group-hover:translate-x-0.5", language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "")} />
                  {t("الرئيسية", "Home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <ArrowRight className={cn("w-3 h-3 transition-transform group-hover:translate-x-0.5", language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "")} />
                  {t("المتجر", "Shop")}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <ArrowRight className={cn("w-3 h-3 transition-transform group-hover:translate-x-0.5", language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "")} />
                  {t("من نحن", "About Us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <ArrowRight className={cn("w-3 h-3 transition-transform group-hover:translate-x-0.5", language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "")} />
                  {t("تواصل معنا", "Contact Us")}
                </Link>
              </li>
              <li>
                <Link
                  href="/wishlist"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <Heart className="w-3 h-3" />
                  {t("المفضلة", "Wishlist")}
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <ShoppingBag className="w-3 h-3" />
                  {t("السلة", "Cart")}
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <Package className="w-3 h-3" />
                  {t("حسابي", "My Account")}
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                >
                  <Settings className="w-3 h-3" />
                  {t("لوحة التحكم", "Dashboard")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Smart Sections - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-slate-700">
              <Sparkles className="w-4 h-4 text-blue-400" />
              {t("الأقسام الذكية", "Smart Sections")}
            </h3>
            <ul className="space-y-2">
              {SMART_SECTIONS.map((section) => (
                <li key={section.id}>
                  <Link
                    href={section.href}
                    className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                  >
                    <section.icon className="w-3 h-3" />
                    {t(section.nameAr, section.nameEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories - Desktop */}
          <div className="hidden md:block">
            <h3 className="text-sm font-medium mb-4 flex items-center gap-2 text-slate-700">
              <Package className="w-4 h-4 text-blue-400" />
              {t("الأقسام", "Categories")}
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/shop?category=${cat.id}`}
                    className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 group text-sm font-light"
                  >
                    <ArrowRight
                      className={cn(
                        "w-3 h-3 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5",
                        language === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : "",
                      )}
                    />
                    {t(cat.nameAr, cat.nameEn)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordions */}
          <div className="md:hidden space-y-2">
            {/* Quick Links Mobile */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleSection("links")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <span className="font-medium text-sm flex items-center gap-2 text-slate-700">
                  <ShoppingBag className="w-4 h-4 text-blue-400" />
                  {t("روابط سريعة", "Quick Links")}
                </span>
                <ChevronDown
                  className={cn("w-4 h-4 text-slate-400 transition-transform", openSections.includes("links") && "rotate-180")}
                />
              </button>
              {openSections.includes("links") && (
                <ul className="space-y-2 pb-3 ps-4">
                  <li>
                    <Link href="/" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("الرئيسية", "Home")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/shop" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("المتجر", "Shop")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("من نحن", "About Us")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("تواصل معنا", "Contact Us")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/wishlist" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("المفضلة", "Wishlist")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/cart" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("السلة", "Cart")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/profile" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("حسابي", "My Account")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/dashboard" className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light">
                      {t("لوحة التحكم", "Dashboard")}
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            {/* Smart Sections Mobile */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleSection("smart")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <span className="font-medium text-sm flex items-center gap-2 text-slate-700">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  {t("الأقسام الذكية", "Smart Sections")}
                </span>
                <ChevronDown
                  className={cn("w-4 h-4 text-slate-400 transition-transform", openSections.includes("smart") && "rotate-180")}
                />
              </button>
              {openSections.includes("smart") && (
                <ul className="space-y-2 pb-3 ps-4">
                  {SMART_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <Link
                        href={section.href}
                        className="text-slate-500 hover:text-blue-500 transition-colors flex items-center gap-1.5 text-sm font-light"
                      >
                        <section.icon className="w-3 h-3" />
                        {t(section.nameAr, section.nameEn)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Categories Mobile */}
            <div className="border-b border-slate-100">
              <button
                onClick={() => toggleSection("categories")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <span className="font-medium text-sm flex items-center gap-2 text-slate-700">
                  <Package className="w-4 h-4 text-blue-400" />
                  {t("الأقسام", "Categories")}
                </span>
                <ChevronDown
                  className={cn("w-4 h-4 text-slate-400 transition-transform", openSections.includes("categories") && "rotate-180")}
                />
              </button>
              {openSections.includes("categories") && (
                <ul className="space-y-2 pb-3 ps-4">
                  {CATEGORIES.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        href={`/shop?category=${cat.id}`}
                        className="text-slate-500 hover:text-blue-500 transition-colors block text-sm font-light"
                      >
                        {t(cat.nameAr, cat.nameEn)}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 space-y-6">
          {/* Brand Credentials Section - Minimal & Elegant */}
          <div className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-stone-200/60 shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-50/40 via-stone-50/20 to-amber-50/40" />
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-8">
              {/* Tax ID */}
              <div className="flex flex-col items-center gap-2.5 text-center group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 flex items-center justify-center border border-blue-100 group-hover:scale-105 transition-transform duration-300">
                  <Shield className="w-5 h-5 text-blue-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium block">
                    {t("الرقم الضريبي", "Tax Number")}
                  </span>
                  <p className="text-xl font-semibold text-slate-700 tracking-wide font-mono">
                    259-696-768
                  </p>
                </div>
              </div>

              {/* Commercial Record */}
              <div className="flex flex-col items-center gap-2.5 text-center group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-50 to-indigo-100/50 flex items-center justify-center border border-indigo-100 group-hover:scale-105 transition-transform duration-300">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium block">
                    {t("رقم السجل التجاري", "Commercial Registry")}
                  </span>
                  <p className="text-xl font-semibold text-slate-700 tracking-wide font-mono">
                    149369
                  </p>
                </div>
              </div>

              {/* Brand Name */}
              <div className="flex flex-col items-center gap-2.5 text-center group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100/50 flex items-center justify-center border border-slate-100 group-hover:scale-105 transition-transform duration-300">
                  <Sparkles className="w-5 h-5 text-slate-500" />
                </div>
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-slate-400 font-medium block">
                    {t("العلامة التجارية", "Brand")}
                  </span>
                  <p className="text-xl font-semibold text-slate-700">
                    {t("براند اون لاين", "Brand Online")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Store Features Section - Soft & Elegant */}
          <div className="flex flex-wrap items-center justify-center gap-4 pb-6 border-b border-stone-200/60">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              {/* Free Shipping */}
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-amber-50/60 rounded-xl hover:bg-amber-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white border border-amber-100/80 flex items-center justify-center shadow-sm group-hover:shadow transition-all">
                  <Truck className="w-5 h-5 text-amber-600" />
                </div>
                <div className="text-start">
                  <p className="text-sm font-medium text-slate-700">{t("شحن مجاني", "Free Shipping")}</p>
                  <p className="text-xs text-slate-500 font-light">{t("لجميع الطلبات", "On All Orders")}</p>
                </div>
              </div>

              {/* Guaranteed Quality */}
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-blue-50/60 rounded-xl hover:bg-blue-50 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white border border-blue-100/80 flex items-center justify-center shadow-sm group-hover:shadow transition-all">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-start">
                  <p className="text-sm font-medium text-slate-700">{t("ضمان الجودة", "Quality Guarantee")}</p>
                  <p className="text-xs text-slate-500 font-light">{t("منتجات أصلية 100%", "100% Authentic")}</p>
                </div>
              </div>

              {/* Customer Support */}
              <div className="flex items-center justify-center gap-3 px-4 py-3 bg-stone-100/70 rounded-xl hover:bg-stone-100 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-white border border-stone-200/80 flex items-center justify-center shadow-sm group-hover:shadow transition-all">
                  <Headphones className="w-5 h-5 text-stone-600" />
                </div>
                <div className="text-start">
                  <p className="text-sm font-medium text-slate-700">{t("دعم العملاء", "Customer Support")}</p>
                  <p className="text-xs text-slate-500 font-light">{t("متاح 24/7", "Available 24/7")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright & Developer Credit */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-400">
            <p className="text-center md:text-start font-light">
              © 2026 Seven Blue. {t("جميع الحقوق محفوظة", "All rights reserved")}.
            </p>
            <p className="text-center md:text-end flex items-center gap-2 font-light">
              <span>{t("تم التصميم والبرمجة بواسطة", "Designed & Developed by")}</span>
              <span className="text-blue-500 font-medium">{t("محمد أيمن", "Mohamed Ayman")}</span>
            </p>
          </div>

          {/* Store Status Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-full text-emerald-600 text-xs">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
              <span className="font-light">
                {t("المتجر مفتوح دائمًا - متاح أونلاين", "Always Open - Available Online")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
