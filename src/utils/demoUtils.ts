// import type { CommerceProduct } from "types"

export function getDemoProducts() {
  if (!isDemoMode())
    return { hits: [], totalPages: 0, facetDistribution: {}, totalHits: 0 }

  const allProducts = require('public/demo-data.json') as {
    results: any[]
    offset: number
    limit: number
    total: number
  }

  return {
    hits: allProducts.results,
    totalPages: 1,
    facetDistribution: {},
    totalHits: allProducts.results.length,
  }
}

export function getDemoSingleProduct(handle: string) {
  return getDemoProducts().hits.find((p) => p.handle === handle) || null
}

export function getDemoCategories() {
  return require('public/demo-categories-data.json')
}

export function getDemoSingleCategory(handle: string) {
  return (
    getDemoCategories().find((c: { handle: string }) => c.handle === handle) ||
    null
  )
}

export function getDemoProductReviews() {
  return require('public/demo-product-reviews-data.json')
}

export function isDemoMode(): boolean {
  return process.env.IS_DEMO_MODE === 'true'
}
