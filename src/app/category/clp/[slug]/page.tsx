import type { Metadata } from 'next'

export const revalidate = 3600
export const dynamic = 'force-static'

interface CategoryPageProps {
  params: { slug: string }
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  return {
    title: `${params.slug} | Enterprise Commerce`,
    description: 'In excepteur elit mollit in.',
  }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  console.log(params)

  return (
    <>
      <h1>Category Page 1</h1>
      <p>{JSON.stringify(params)}</p>
    </>
  )
}
