export interface Product {
  id: string
  nameAr: string
  nameEn: string
  descriptionAr: string
  descriptionEn: string
  featuresAr: string[]
  featuresEn: string[]
  notesAr: string
  notesEn: string
  afterPurchaseNotesAr: string
  afterPurchaseNotesEn: string
  colors: string[]
  sizes: string[]
  mainImage: string
  additionalImages: string[]
  costPrice: number
  salePrice: number
  profit: number
  discount: number
  discountedPrice: number
  quantity: number
  alertQuantity: number
  tax: number
  isActive: boolean
  isFeatured: boolean
  category: string
  subCategory: string
  createdAt: Date
  updatedAt: Date
  productType: ProductType
  season?: "summer" | "winter" | "all" // Seasonal categorization
  salesCount?: number // Track number of sales for best sellers
  discountEndDate?: Date // For time-limited offers
  views?: number
  likes?: number
  likedBy?: string[] // Array of user IDs who liked the product
  tags?: string[] // Tags for smart matching
  relatedProductIds?: string[] // Manually selected related products
  outfitItems?: OutfitItem[]
  outfitSizeType?: "unified" | "individual" // unified = one size for all, individual = size per item
  bundleProductIds?: string[]
  bundleDiscount?: number
  giftCardValues?: number[]
  giftCardValidity?: number // days
  customOptions?: {
    nameAr: string
    nameEn: string
    type: "text" | "select" | "color"
    options?: string[]
    required: boolean
  }[]
  subscriptionPeriod?: "weekly" | "monthly" | "quarterly" | "yearly"
  subscriptionPrice?: number
}

export interface User {
  id: string
  email: string
  displayName: string
  photoURL: string
  phone: string
  address: string
  city: string
  country: string
  savedAddresses?: Address[]
  createdAt: Date
}

export interface CartItem {
  productId: string
  product: Product
  quantity: number
  selectedColor: string
  selectedSize: string
  outfitSizes?: { [itemIndex: number]: string }
  customValues?: { [optionName: string]: string }
  giftCardValue?: number
  giftCardRecipientEmail?: string
  giftCardMessage?: string
}

export interface Order {
  id: string
  userId: string
  userEmail: string
  userName: string
  userPhone: string
  userAddress: string
  items: CartItem[]
  subtotal: number
  tax: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered"
  createdAt: Date
  updatedAt: Date
}

export const CATEGORIES = [
  { id: "men", nameAr: "رجالي", nameEn: "Men" },
  { id: "women", nameAr: "حريمي", nameEn: "Women" },
  { id: "kids", nameAr: "أطفال", nameEn: "Kids" },
  { id: "youth", nameAr: "شبابي", nameEn: "Youth" },
  { id: "accessories", nameAr: "إكسسوارات", nameEn: "Accessories" },
  { id: "formal-wear", nameAr: "ملابس رسمية", nameEn: "Formal Wear" },
]

export const SUB_CATEGORIES = [
  { id: "shirts", nameAr: "قمصان", nameEn: "Shirts" },
  { id: "pants", nameAr: "بناطيل", nameEn: "Pants" },
  { id: "dresses", nameAr: "فساتين", nameEn: "Dresses" },
  { id: "jackets", nameAr: "جاكيتات", nameEn: "Jackets" },
  { id: "sweaters", nameAr: "سويترات", nameEn: "Sweaters" },
  { id: "tshirts", nameAr: "تيشيرتات", nameEn: "T-Shirts" },
  { id: "jeans", nameAr: "جينز", nameEn: "Jeans" },
  { id: "suits", nameAr: "بدل", nameEn: "Suits" },
  { id: "coats", nameAr: "معاطف", nameEn: "Coats" },
  { id: "shorts", nameAr: "شورتات", nameEn: "Shorts" },
  { id: "skirts", nameAr: "تنانير", nameEn: "Skirts" },
  { id: "underwear", nameAr: "ملابس داخلية", nameEn: "Underwear" },
  { id: "shoes", nameAr: "أحذية", nameEn: "Shoes" },
  { id: "bags", nameAr: "حقائب", nameEn: "Bags" },
  { id: "watches", nameAr: "ساعات", nameEn: "Watches" },
  { id: "belts", nameAr: "أحزمة", nameEn: "Belts" },
  { id: "scarves", nameAr: "أوشحة", nameEn: "Scarves" },
  { id: "hats", nameAr: "قبعات", nameEn: "Hats" },
  { id: "sunglasses", nameAr: "نظارات شمسية", nameEn: "Sunglasses" },
  { id: "jewelry", nameAr: "مجوهرات", nameEn: "Jewelry" },
  { id: "perfume", nameAr: "عطور", nameEn: "Perfume" },
  { id: "activewear", nameAr: "ملابس رياضية نشطة", nameEn: "Activewear" },
  { id: "swimwear", nameAr: "ملابس السباحة", nameEn: "Swimwear" },
  { id: "loungewear", nameAr: "ملابس الاسترخاء", nameEn: "Loungewear" },
  { id: "outfits", nameAr: "أطقم", nameEn: "Outfits" },
]

export const COLORS = [
  { id: "black", nameAr: "أسود", nameEn: "Black", hex: "#000000" },
  { id: "white", nameAr: "أبيض", nameEn: "White", hex: "#FFFFFF" },
  { id: "navy", nameAr: "كحلي", nameEn: "Navy", hex: "#1e3a8a" },
  { id: "blue", nameAr: "أزرق", nameEn: "Blue", hex: "#3b82f6" },
  { id: "sky-blue", nameAr: "أزرق سماوي", nameEn: "Sky Blue", hex: "#0ea5e9" },
  { id: "red", nameAr: "أحمر", nameEn: "Red", hex: "#ef4444" },
  { id: "dark-red", nameAr: "أحمر غامق", nameEn: "Dark Red", hex: "#991b1b" },
  { id: "green", nameAr: "أخضر", nameEn: "Green", hex: "#22c55e" },
  { id: "dark-green", nameAr: "أخضر غامق", nameEn: "Dark Green", hex: "#15803d" },
  { id: "teal", nameAr: "أزرق مخضر", nameEn: "Teal", hex: "#14b8a6" },
  { id: "gray", nameAr: "رمادي", nameEn: "Gray", hex: "#6b7280" },
  { id: "light-gray", nameAr: "رمادي فاتح", nameEn: "Light Gray", hex: "#d1d5db" },
  { id: "beige", nameAr: "بيج", nameEn: "Beige", hex: "#d4a574" },
  { id: "tan", nameAr: "بني فاتح", nameEn: "Tan", hex: "#d2b48c" },
  { id: "brown", nameAr: "بني", nameEn: "Brown", hex: "#92400e" },
  { id: "dark-brown", nameAr: "بني غامق", nameEn: "Dark Brown", hex: "#5a3a1a" },
  { id: "pink", nameAr: "وردي", nameEn: "Pink", hex: "#ec4899" },
  { id: "magenta", nameAr: "بنفسجي وردي", nameEn: "Magenta", hex: "#d946ef" },
  { id: "gold", nameAr: "ذهبي", nameEn: "Gold", hex: "#eab308" },
  { id: "silver", nameAr: "فضي", nameEn: "Silver", hex: "#c0c0c0" },
  { id: "orange", nameAr: "برتقالي", nameEn: "Orange", hex: "#f97316" },
  { id: "maroon", nameAr: "عنابي", nameEn: "Maroon", hex: "#800000" },
  { id: "cream", nameAr: "كريمي", nameEn: "Cream", hex: "#fffdd0" },
  { id: "charcoal", nameAr: "فحمي", nameEn: "Charcoal", hex: "#36454f" },
]

export const SIZES = ["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL", "Free Size"]

export type NotificationType =
  | "welcome"
  | "order_confirmed"
  | "order_status"
  | "promotion"
  | "product"
  | "login"
  | "system"
  | "referral_success"
  | "points_earned"
  | "points_expiring"
  | "reward_redeemed"
  | "new_product"

export interface Notification {
  id: string
  userId: string
  type: NotificationType
  titleAr: string
  titleEn: string
  messageAr: string
  messageEn: string
  actionUrl?: string
  orderData?: Record<string, any>
  isRead: boolean
  createdAt: Date
  updatedAt?: Date
}

export interface Message {
  id: string
  conversationId: string
  senderId: string
  senderName: string
  senderRole: "user" | "admin"
  senderPhotoURL?: string
  content: string
  createdAt: Date
  isRead: boolean
  isTemporary?: boolean
}

export interface Conversation {
  id: string
  userId: string
  userName: string
  userEmail: string
  adminId?: string
  adminName?: string
  subject: string
  lastMessage: string
  lastMessageTime: Date
  isOpen: boolean
  unreadCount: number
  createdAt: Date
  updatedAt: Date
}

export interface Address {
  id: string
  label: string // "Home", "Work", "Other"
  street: string
  city: string
  phone: string
  secondPhone?: string
  isDefault: boolean
  latitude?: number
  longitude?: number
  createdAt: Date
}

export type ProductType = "single" | "outfit" | "bundle" | "gift" | "custom" | "subscription"

export const PRODUCT_TYPES = [
  { id: "single", nameAr: "منتج فردي", nameEn: "Single Product", icon: "Package" },
  { id: "outfit", nameAr: "طقم", nameEn: "Outfit / Set", icon: "Layers" },
  { id: "bundle", nameAr: "باقة", nameEn: "Bundle", icon: "Gift" },
  { id: "gift", nameAr: "بطاقة هدية", nameEn: "Gift Card", icon: "CreditCard" },
  { id: "custom", nameAr: "منتج مخصص", nameEn: "Custom Product", icon: "Wand2" },
  { id: "subscription", nameAr: "اشتراك", nameEn: "Subscription", icon: "RefreshCw" },
] as const

export interface OutfitItem {
  productId?: string // Optional - can be linked to existing product
  nameAr: string
  nameEn: string
  type: string // shirt, pants, etc.
  image?: string
}

export const OUTFIT_ITEM_TYPES = [
  { id: "shirt", nameAr: "قميص", nameEn: "Shirt" },
  { id: "pants", nameAr: "بنطلون", nameEn: "Pants" },
  { id: "jacket", nameAr: "جاكيت", nameEn: "Jacket" },
  { id: "tshirt", nameAr: "تيشيرت", nameEn: "T-Shirt" },
  { id: "sweater", nameAr: "سويتر", nameEn: "Sweater" },
  { id: "vest", nameAr: "فست/صدرية", nameEn: "Vest" },
  { id: "tie", nameAr: "ربطة عنق", nameEn: "Tie" },
  { id: "belt", nameAr: "حزام", nameEn: "Belt" },
  { id: "shoes", nameAr: "حذاء", nameEn: "Shoes" },
  { id: "accessory", nameAr: "إكسسوار", nameEn: "Accessory" },
  { id: "other", nameAr: "أخرى", nameEn: "Other" },
]

export const SEASONS = [
  { id: "all", nameAr: "كل المواسم", nameEn: "All Seasons" },
  { id: "summer", nameAr: "صيف", nameEn: "Summer" },
  { id: "winter", nameAr: "شتاء", nameEn: "Winter" },
] as const

export const SMART_SECTIONS = [
  {
    id: "new-arrivals",
    nameAr: "جديدنا",
    nameEn: "New Arrivals",
    descriptionAr: "أحدث المنتجات المضافة حديثاً",
    descriptionEn: "Latest products just arrived",
    icon: "Sparkles",
    color: "emerald",
  },
  {
    id: "best-sellers",
    nameAr: "الأكثر مبيعًا",
    nameEn: "Best Sellers",
    descriptionAr: "المنتجات الأعلى طلباً",
    descriptionEn: "Our most popular products",
    icon: "TrendingUp",
    color: "amber",
  },
  {
    id: "offers",
    nameAr: "العروض",
    nameEn: "Offers",
    descriptionAr: "خصومات حصرية لفترة محدودة",
    descriptionEn: "Exclusive limited-time discounts",
    icon: "Percent",
    color: "red",
  },
  {
    id: "seasonal",
    nameAr: "موسمي",
    nameEn: "Seasonal",
    descriptionAr: "تشكيلة الموسم الحالي",
    descriptionEn: "Current season collection",
    icon: "Sun",
    color: "blue",
  },
] as const

// ================== BLOG TYPES ==================
export interface BlogPost {
  id: string
  titleAr: string
  titleEn: string
  contentAr: string
  contentEn: string
  excerptAr: string
  excerptEn: string
  featuredImage: string
  authorName: string
  authorImage?: string
  category: BlogCategory
  tags: string[]
  views: number
  likes: number
  isPublished: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
}

export type BlogCategory =
  | "fashion-tips"
  | "styling"
  | "trends"
  | "brand-story"
  | "how-to"
  | "news"
  | "seasonal"

export const BLOG_CATEGORIES = [
  { id: "fashion-tips", nameAr: "نصائح الموضة", nameEn: "Fashion Tips", icon: "Lightbulb", color: "emerald" },
  { id: "styling", nameAr: "التنسيق", nameEn: "Styling", icon: "Sparkles", color: "purple" },
  { id: "trends", nameAr: "الترندات", nameEn: "Trends", icon: "TrendingUp", color: "pink" },
  { id: "brand-story", nameAr: "قصتنا", nameEn: "Brand Story", icon: "Heart", color: "blue" },
  { id: "how-to", nameAr: "إرشادات", nameEn: "How To", icon: "BookOpen", color: "amber" },
  { id: "news", nameAr: "أخبار", nameEn: "News", icon: "Newspaper", color: "cyan" },
  { id: "seasonal", nameAr: "موسمي", nameEn: "Seasonal", icon: "Calendar", color: "orange" },
] as const

// ================== LOOKBOOK TYPES ==================
export interface LookbookOutfit {
  id: string
  titleAr: string
  titleEn: string
  descriptionAr: string
  descriptionEn: string
  occasionAr: string // "كاجوال", "رسمي", "سهرة"
  occasionEn: string // "Casual", "Formal", "Evening"
  season: "summer" | "winter" | "all"
  mainImage: string
  additionalImages: string[]
  products: LookbookProduct[]
  totalPrice: number
  discountedPrice?: number
  discount?: number
  views: number
  likes: number
  saves: number // How many saved to wishlist
  isActive: boolean
  isFeatured: boolean
  createdAt: Date
  updatedAt: Date
}

export interface LookbookProduct {
  productId: string
  position: number // Order in the outfit
  nameAr: string
  nameEn: string
  categoryAr: string
  categoryEn: string
  price: number
  image: string
}

export const LOOKBOOK_OCCASIONS = [
  { id: "casual", nameAr: "كاجوال", nameEn: "Casual", icon: "Coffee", color: "blue" },
  { id: "formal", nameAr: "رسمي", nameEn: "Formal", icon: "Briefcase", color: "slate" },
  { id: "evening", nameAr: "سهرة", nameEn: "Evening", icon: "Moon", color: "purple" },
  { id: "sport", nameAr: "رياضي", nameEn: "Sport", icon: "Activity", color: "emerald" },
  { id: "work", nameAr: "عمل", nameEn: "Work", icon: "Building", color: "amber" },
  { id: "party", nameAr: "حفلات", nameEn: "Party", icon: "PartyPopper", color: "pink" },
  { id: "beach", nameAr: "شاطئي", nameEn: "Beach", icon: "Waves", color: "cyan" },
  { id: "wedding", nameAr: "زفاف", nameEn: "Wedding", icon: "Heart", color: "rose" },
] as const
