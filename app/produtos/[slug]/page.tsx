import type { Metadata } from 'next'
import { SITE } from '@/lib/seo'
import { notFound } from "next/navigation"
import { products } from "@/lib/products"
import ProductClientPage from "@/components/product-client-page"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    return {
      title: `Produto não encontrado — ${SITE.shortName}`,
      description: SITE.description,
    }
  }

  const url = `${SITE.url}/produtos/${params.slug}`

  return {
    title: `${product.title} — ${SITE.shortName}`,
    description: product.description || product.fullDescription || SITE.description,
    openGraph: {
      title: product.title,
      description: product.description || SITE.description,
      url,
      images: [{ url: product.image, alt: product.title }],
      type: 'product',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.title,
      description: product.description || SITE.description,
      images: [product.image],
    },
    alternates: { canonical: url }
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  return <ProductClientPage product={product} slug={params.slug} />
}
