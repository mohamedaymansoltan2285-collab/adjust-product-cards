import type React from "react"
import type { Metadata } from "next"
import { Cairo, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/contexts/auth-context"
import { CartProvider } from "@/contexts/cart-context"
import { LanguageProvider } from "@/contexts/language-context"
import { ChatProvider } from "@/contexts/chat-context"
import { NotificationProvider } from "@/contexts/notification-context"
import { LoyaltyProvider } from "@/contexts/loyalty-context"
import { WelcomeModal } from "@/components/welcome-modal"
import { WelcomeBonusModal } from "@/components/welcome-bonus-modal"
import { ScrollToTop } from "@/components/scroll-to-top"
import { RecentlyViewedProvider } from "@/contexts/recently-viewed-context"
import { AIChatAssistant } from "@/components/ai-chat-assistant"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Seven Blue | متجر الأزياء الراقية",
  description: "Seven Blue - Wearing for you. اكتشف مجموعتنا الفاخرة من الملابس الراقية للرجال والنساء والأطفال",
  keywords: ["ملابس", "أزياء", "Seven Blue", "موضة", "ملابس رجالي", "ملابس حريمي"],
  authors: [{ name: "Seven Blue" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: "en_US",
    url: "https://sevenblue.store",
    siteName: "Seven Blue",
    title: "Seven Blue | متجر الأزياء الراقية",
    description: "Seven Blue - Wearing for you. اكتشف مجموعتنا الفاخرة من الملابس الراقية",
    images: [
      {
        url: "/images/605811209-122158818428830285-7412234705201285219-n-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "Seven Blue - Wearing for you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seven Blue | متجر الأزياء الراقية",
    description: "Seven Blue - Wearing for you. اكتشف مجموعتنا الفاخرة من الملابس الراقية",
    images: ["/images/605811209-122158818428830285-7412234705201285219-n-removebg-preview.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${playfair.variable} font-sans antialiased`}>
        <LanguageProvider>
          <AuthProvider>
            <NotificationProvider>
              <LoyaltyProvider>
                <RecentlyViewedProvider>
                  <CartProvider>
                    <ChatProvider>
                      <ScrollToTop />
                      {children}
                      <WelcomeModal />
                      <WelcomeBonusModal />
                      <AIChatAssistant />
                      <Toaster />
                    </ChatProvider>
                  </CartProvider>
                </RecentlyViewedProvider>
              </LoyaltyProvider>
            </NotificationProvider>
          </AuthProvider>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
