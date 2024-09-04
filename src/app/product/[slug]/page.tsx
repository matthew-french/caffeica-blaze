// import { notFound } from 'next/navigation'
import { Suspense } from 'react'
// import { getProduct, getProductReviews } from "app/actions/product.actions"
// import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs'

// import { getCombination, getOptionsFromUrl, hasValidOption, removeOptionsFromUrl } from "utils/productOptionsUtils"
import { BackButton } from '@/views/Product/BackButton'
// import { DetailsSection } from "views/Product/DetailsSection"
// import { FavoriteMarker } from "views/Product/FavoriteMarker"
// import { GallerySection } from '@/views/Product/GallerySection'
// import { InfoSection } from "views/Product/InfoSection"
// import { SimilarProductsSection } from "views/Product/SimilarProductsSection"
// import { SimilarProductsSectionSkeleton } from "views/Product/SimilarProductsSectionSkeleton"
// import { VariantsSection } from "views/Product/VariantsSection"
import { slugToName } from '@/utils/slug-name'

// import { generateJsonLd } from './metadata'

import { isDemoMode } from '@/utils/demoUtils'

// import { env } from 'env.mjs'

export const revalidate = 3600
export const dynamic = 'force-static'
export const dynamicParams = true

interface ProductProps {
  params: { slug: string }
}

export default async function Product({ params: { slug } }: ProductProps) {
  return (
    <div className="max-w-container-md relative mx-auto px-4 xl:px-0">
      <div className="mb:pb-8 relative w-fit py-4 md:pt-12">
        <BackButton className="mb-8 hidden md:block" />
      </div>
      <main className="max-w-container-sm mx-auto">Prodduct Page</main>
    </div>
  )
}
