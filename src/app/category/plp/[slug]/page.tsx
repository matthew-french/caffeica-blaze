import type { Metadata } from 'next'

interface SearchParamsType {
  query: string
  page: number
}

interface ProductListingPageProps {
  searchParams: SearchParamsType
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: ProductListingPageProps): Promise<Metadata> {
  return {
    title: `${params.slug} | Enterprise Commerce`,
    description: 'In excepteur elit mollit in.',
  }
}

export default async function ProductListingPage({
  searchParams,
  params,
}: ProductListingPageProps) {
  return (
    <>
      <h1>PLP page</h1>
      <p>{JSON.stringify(searchParams)}</p>
      <p>{JSON.stringify(params)}</p>
    </>
  )
}
