"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { SUB_CATEGORIES } from "@/lib/types"

const subCategoryImages: Record<string, string> = {
  shirts: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  pants: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
  dresses: "https://images.unsplash.com/photo-1595777707802-41d339d60b90?w=500&h=500&fit=crop",
  jackets: "https://images.unsplash.com/photo-1591047139829-74652a6c69a7?w=500&h=500&fit=crop",
  sweaters: "https://images.unsplash.com/photo-1572568933382-74d440642117?w=500&h=500&fit=crop",
  tshirts: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=500&fit=crop",
  jeans: "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=500&fit=crop",
  suits: "https://images.unsplash.com/photo-1591047139829-74652a6c69a7?w=500&h=500&fit=crop",
  coats: "https://images.unsplash.com/photo-1539533057440-7fc97eac5388?w=500&h=500&fit=crop",
  shorts: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=500&h=500&fit=crop",
  skirts: "https://images.unsplash.com/photo-1606664515524-2682850d9b0c?w=500&h=500&fit=crop",
  underwear: "https://images.unsplash.com/photo-1597696058658-3b3e02b37fcb?w=500&h=500&fit=crop",
  shoes: "https://images.unsplash.com/photo-1543163521-9145f3142e5d?w=500&h=500&fit=crop",
  bags: "https://images.unsplash.com/photo-1547949003-844edc619b8d?w=500&h=500&fit=crop",
  watches: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=500&h=500&fit=crop",
  belts: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
  scarves: "https://images.unsplash.com/photo-1595536686841-5b237f61c6e4?w=500&h=500&fit=crop",
  hats: "https://images.unsplash.com/photo-1588185038346-d4f4b4d8e2ac?w=500&h=500&fit=crop",
  sunglasses: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
  jewelry: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop",
  perfume: "https://images.unsplash.com/photo-1588405748557-fa631aacbcbe?w=500&h=500&fit=crop",
  activewear: "https://images.unsplash.com/photo-1511693130902-7d88edbd1134?w=500&h=500&fit=crop",
  swimwear: "https://images.unsplash.com/photo-1566599241849-e6ecd5a1bcfd?w=500&h=500&fit=crop",
  loungewear: "https://images.unsplash.com/photo-1501402093722-f46ccd8e0ee5?w=500&h=500&fit=crop",
  outfits: "https://images.unsplash.com/photo-1552062407-2e1edd93b94f?w=500&h=500&fit=crop",
}

export function SubCategoriesCarousel() {
  const { language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const itemsPerPage = 10
  const totalPages = Math.ceil(SUB_CATEGORIES.length / itemsPerPage)

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalPages)
        setIsTransitioning(false)
      }, 400)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoRotate, totalPages])

  const getVisibleItems = () => {
    const start = currentIndex * itemsPerPage
    return SUB_CATEGORIES.slice(start, start + itemsPerPage)
  }

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mb-4 tracking-tight">
            {language === "ar" ? "اكتشف الفئات" : "Discover Categories"}
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            {language === "ar"
              ? "استكشف مجموعتنا المنتقاة بعناية من الفئات الراقية والمتنوعة"
              : "Explore our carefully curated collections of premium fashion categories"}
          </p>
        </div>

        {/* Items Grid - 5 columns (2 rows of 5) */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5 transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {getVisibleItems().map((subCategory, idx) => (
            <Link
              key={subCategory.id}
              href={`/subcategory/${subCategory.id}`}
              className="group h-56 md:h-64 lg:h-72"
            >
              <div
                className="relative w-full h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
                style={{
                  animation: isTransitioning
                    ? "none"
                    : `slideInUp 0.6s ease-out ${idx * 50}ms backwards`,
                }}
              >
                {/* Image */}
                <Image
                  src={subCategoryImages[subCategory.id] || subCategoryImages.shirts}
                  alt={language === "ar" ? subCategory.nameAr : subCategory.nameEn}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Overlay Gradient - from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/30 to-transparent group-hover:from-slate-900/90 transition-all duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-5">
                  <h3 className="text-white text-center font-light text-sm md:text-base leading-tight tracking-wide group-hover:tracking-widest transition-all duration-300">
                    {language === "ar" ? subCategory.nameAr : subCategory.nameEn}
                  </h3>
                  <div className="mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-xs text-slate-200 font-light tracking-widest uppercase">
                      {language === "ar" ? "تصفح" : "Shop"}
                    </span>
                  </div>
                </div>

                {/* Subtle Border Hover */}
                <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-lg transition-colors duration-500" />
              </div>
            </Link>
          ))}
        </div>

        {/* Navigation Dots */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-14 md:mt-16">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true)
                  setTimeout(() => {
                    setCurrentIndex(idx)
                    setIsTransitioning(false)
                  }, 400)
                  setAutoRotate(false)
                  setTimeout(() => setAutoRotate(true), 5000)
                }}
                className={`transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? "w-8 h-2 bg-slate-900"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Auto-rotate Indicator */}
        {autoRotate && totalPages > 1 && (
          <p className="text-center text-xs md:text-sm text-slate-400 mt-6 font-light tracking-wide">
            {language === "ar" ? "تبديل تلقائي..." : "Auto-rotating..."}
          </p>
        )}
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
