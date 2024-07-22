import NextLink from 'next/link'
import { simplifiedProduct } from '../interface'
import { client } from '../lib/sanity'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Heading,
  Link,
  Select,
  Separator,
  Text,
} from '@radix-ui/themes'

import { Label } from '@radix-ui/react-label'

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

        <Link className="text-primary flex items-center gap-x-1" href="/all">
          See All{' '}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <Card size="1">
          <Flex mb="2" position="relative">
            <img
              width="280"
              height="270"
              src="https://images.unsplash.com/photo-1577210897949-1f56f943bf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=560&h=540&q=80&crop=bottom"
              style={{ borderRadius: 'var(--radius-1)' }}
            />
          </Flex>

          <Flex align="end" justify="between" mb="2">
            <Box>
              <Flex mb="1">
                <Link
                  href="#"
                  underline="hover"
                  highContrast
                  size="2"
                  color="gray"
                >
                  Pants and jeans
                </Link>
              </Flex>

              <Heading as="h3" size="3">
                Jeans #7
              </Heading>
            </Box>

            {/* <Text as="div" size="6" weight="bold">
              $149
            </Text> */}
          </Flex>

          <Text as="p" size="2" color="gray" mb="4">
            Jeans with a sense of nostalgia, as if they carry whispered tales of
            past adventures.
          </Text>
        </Card>

        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Image
                src={product.imageUrl}
                alt="Product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                width={300}
                height={300}
              />
            </div>

            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <NextLink href={`/product/${product.slug}`}>
                    {product.name}
                  </NextLink>
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {product.categoryName}
                </p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
