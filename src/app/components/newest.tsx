import NextLink from 'next/link'
import { simplifiedProduct } from '../interface'
import { client } from '../lib/sanity'
import { ArrowRight } from 'lucide-react'

import ProductCard from './product-card'

import { Grid, Container, Section } from '@radix-ui/themes'

async function getData() {
  const query = `*[_type == "product" && feature == true][0...4] | order(_createdAt desc) {
        _id,
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
    <Section size="1">
      {/* <div className="flex justify-between items-center">
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
      </div> */}
      <Grid gap="4" columns={{ initial: '2', md: '4', lg: '4' }}>
        {data.map((product) => (
          <div key={product._id}>
            <ProductCard
              id={product._id}
              name={product.name}
              summary={product.summary}
              category={product.categoryName}
              image={product.imageUrl}
              slug={product.slug}
            />
          </div>
        ))}
      </Grid>
    </Section>
  )
}
