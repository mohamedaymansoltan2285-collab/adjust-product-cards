import { ProductContent } from "@/components/product-content"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { Metadata } from "next"
import type { Product } from "@/lib/types"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

// Generate dynamic metadata for Open Graph sharing
export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  
  try {
    const docRef = doc(db, "products", id)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
      const product = docSnap.data() as Product
      const title = product.nameAr || product.nameEn || "منتج"
      const description = product.descriptionAr || product.descriptionEn || "تسوق الآن من متجرنا"
      const price = product.discount > 0 ? product.discountedPrice : product.salePrice
      const priceText = `${price.toFixed(2)} ج.م`
      
      return {
        title: `${title} | المتجر`,
        description: `${description} - السعر: ${priceText}`,
        openGraph: {
          title: title,
          description: `${description} - السعر: ${priceText}`,
          images: product.mainImage ? [
            {
              url: product.mainImage,
              width: 800,
              height: 800,
              alt: title,
            }
          ] : [],
          type: "website",
          locale: "ar_EG",
        },
        twitter: {
          card: "summary_large_image",
          title: title,
          description: `${description} - السعر: ${priceText}`,
          images: product.mainImage ? [product.mainImage] : [],
        },
      }
    }
  } catch (error) {
    console.error("Error generating metadata:", error)
  }
  
  return {
    title: "المنتج | المتجر",
    description: "تسوق الآن من متجرنا",
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params

  return <ProductContent productId={id} />
}
