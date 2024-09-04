import { BackButton } from '@/views/Product/BackButton'
import { slugToName } from '@/utils/slug-name'

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
      <main className="max-w-container-sm mx-auto">
        Prodduct Page - {slugToName(slug)}
      </main>
    </div>
  )
}
