import NextLink from 'next/link'
import { simplifiedProduct } from '../interface'
import { client } from '../lib/sanity'
import { ArrowRight } from 'lucide-react'
import ProductCard from './product-card'

import { Grid } from '@radix-ui/themes'
async function getData() {
  const query = `*[_type == "product" && feature == true][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`

  const data = await client.fetch(query)

  return data
}

export default async function Newest() {
  const data: simplifiedProduct[] = await getData()

  if (!data) {
    console.log('No data')

    return null
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Our Newest products
        </h2>

        <NextLink
          className="text-primary flex items-center gap-x-1"
          href="/all"
        >
          See All{' '}
          <span>
            <ArrowRight />
          </span>
        </NextLink>
      </div>

      <Grid columns={{ initial: '2', md: '4', lg: '6' }}>
        {data.map((product) => (
          <div key={product._id}>
            <ProductCard
              id={product._id}
              name={product.name}
              image={product.imageUrl}
              slug={product.slug}
            />
          </div>
        ))}
      </Grid>
    </div>
  )
}
