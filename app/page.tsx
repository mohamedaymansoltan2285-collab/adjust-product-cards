import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CategoriesSection } from "@/components/categories-section"
import { SubCategoriesCarousel } from "@/components/subcategories-carousel"
import { NewsletterSection } from "@/components/newsletter-section"
import { ChatWidget } from "@/components/chat-widget"
import { FeaturedProductSection } from "@/components/featured-product-section"
import { FlashSaleSection } from "@/components/flash-sale-section"
import { NewArrivalsSection, BestSellersSection, OffersSection, SeasonalSection } from "@/components/smart-sections"
import { FloatingBackToTop } from "@/components/floating-back-to-top"
import { BrandStorySection } from "@/components/brand-story-section"
import { RecentlyViewedSection } from "@/components/recently-viewed-section"
import { InteractiveTimeline } from "@/components/interactive-timeline"
import { FloatingProductsShowcase } from "@/components/floating-products-showcase"
import { MoodBoardSection } from "@/components/mood-board-section"
import { ColorPaletteFinder } from "@/components/color-palette-finder"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <InteractiveTimeline />
      <CategoriesSection />
      <FloatingProductsShowcase />
      <SubCategoriesCarousel />
      <FeaturedProductSection />
      <BrandStorySection />
      <MoodBoardSection />
      <NewArrivalsSection />
      <FlashSaleSection />
      <ColorPaletteFinder />
      <OffersSection />
      <BestSellersSection />
      <SeasonalSection />
      <RecentlyViewedSection />
      <NewsletterSection />
      <Footer />
      <ChatWidget />
      <FloatingBackToTop />
    </main>
  )
}
