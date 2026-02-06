"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { Trophy, Package, Star, Award, Users, TrendingUp, Globe, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const milestones = [
  {
    id: 1,
    year: "2018",
    titleAr: "التأسيس",
    titleEn: "Foundation",
    descAr: "بداية رحلة Seven Blue في عالم الأزياء الفاخرة",
    descEn: "The beginning of Seven Blue's journey in luxury fashion",
    icon: Trophy,
    image: "/images/hero-banner.png",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    year: "2019",
    titleAr: "أول منتج",
    titleEn: "First Product",
    descAr: "إطلاق أول مجموعة من المنتجات الفاخرة",
    descEn: "Launch of the first luxury product collection",
    icon: Package,
    image: "/luxury-fashion-store-elegant-blue-theme-with-cloth.jpg",
    color: "from-amber-500 to-amber-600"
  },
  {
    id: 3,
    year: "2020",
    titleAr: "1000 عميل",
    titleEn: "1000 Customers",
    descAr: "الوصول إلى 1000 عميل راضٍ عن خدماتنا",
    descEn: "Reaching 1000 satisfied customers",
    icon: Users,
    image: "/premium-clothing-brand-showcase-navy-blue-elegant.jpg",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    year: "2021",
    titleAr: "جائزة التميز",
    titleEn: "Excellence Award",
    descAr: "الحصول على جائزة التميز في الموضة",
    descEn: "Receiving the Fashion Excellence Award",
    icon: Award,
    image: "/images/hero-banner.png",
    color: "from-rose-500 to-rose-600"
  },
  {
    id: 5,
    year: "2022",
    titleAr: "النمو السريع",
    titleEn: "Rapid Growth",
    descAr: "توسع كبير في الأسواق المحلية",
    descEn: "Major expansion in local markets",
    icon: TrendingUp,
    image: "/luxury-fashion-store-elegant-blue-theme-with-cloth.jpg",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    id: 6,
    year: "2023",
    titleAr: "التوسع العالمي",
    titleEn: "Global Expansion",
    descAr: "دخول الأسواق العالمية بقوة",
    descEn: "Strong entry into global markets",
    icon: Globe,
    image: "/premium-clothing-brand-showcase-navy-blue-elegant.jpg",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    id: 7,
    year: "2024",
    titleAr: "الابتكار المستمر",
    titleEn: "Continuous Innovation",
    descAr: "الريادة في تقديم تجارب تسوق مبتكرة",
    descEn: "Leading in innovative shopping experiences",
    icon: Sparkles,
    image: "/images/hero-banner.png",
    color: "from-pink-500 to-pink-600"
  }
]

export function InteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()
  const isInView = useInView(containerRef, { once: true, amount: 0.2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const parallaxY = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Elements */}
      <motion.div 
        style={{ y: parallaxY }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="h-1 w-20 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-serif bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            {t("رحلتنا عبر الزمن", "Our Journey Through Time")}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t(
              "من البداية المتواضعة إلى الريادة في عالم الأزياء الفاخرة",
              "From humble beginnings to leadership in luxury fashion"
            )}
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-20">
            <motion.div
              style={{ width: lineProgress }}
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-accent to-primary rounded-full"
            />
          </div>

          {/* Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => {
              const Icon = milestone.icon
              const isActive = activeIndex === index
              const isHovered = hoveredIndex === index

              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="cursor-pointer"
                >
                  <Card className={cn(
                    "relative overflow-hidden transition-all duration-500 hover:shadow-2xl",
                    isActive || isHovered ? "scale-105 shadow-xl" : "scale-100"
                  )}>
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={milestone.image}
                        alt={t(milestone.titleAr, milestone.titleEn)}
                        className="w-full h-full object-cover"
                        animate={{
                          scale: isActive || isHovered ? 1.1 : 1
                        }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className={cn(
                        "absolute inset-0 bg-gradient-to-t",
                        milestone.color,
                        "opacity-80"
                      )} />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Icon with Pulse Animation */}
                      <motion.div
                        animate={{
                          scale: isActive || isHovered ? [1, 1.2, 1] : 1
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: isActive || isHovered ? Infinity : 0,
                          repeatDelay: 1
                        }}
                        className={cn(
                          "inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-br",
                          milestone.color,
                          "text-white shadow-lg"
                        )}
                      >
                        <Icon className="h-8 w-8" />
                      </motion.div>

                      {/* Year Badge */}
                      <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold mb-3">
                        {milestone.year}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-2 font-serif">
                        {t(milestone.titleAr, milestone.titleEn)}
                      </h3>

                      {/* Description */}
                      <motion.p
                        animate={{
                          height: isActive || isHovered ? "auto" : "3rem"
                        }}
                        className="text-muted-foreground overflow-hidden"
                      >
                        {t(milestone.descAr, milestone.descEn)}
                      </motion.p>

                      {/* Decorative Line */}
                      <motion.div
                        animate={{
                          width: isActive || isHovered ? "100%" : "0%"
                        }}
                        transition={{ duration: 0.4 }}
                        className={cn(
                          "h-1 mt-4 rounded-full bg-gradient-to-r",
                          milestone.color
                        )}
                      />
                    </div>

                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: isActive || isHovered ? 1 : 0
                      }}
                      className={cn(
                        "absolute inset-0 pointer-events-none bg-gradient-to-br",
                        milestone.color,
                        "opacity-0 mix-blend-overlay"
                      )}
                    />
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Bottom Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 w-full bg-gradient-to-r from-transparent via-accent to-transparent rounded-full mt-16"
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>
    </section>
  )
}
