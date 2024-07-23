import Image from 'next/image'
import { client, urlFor } from '@/app/lib/sanity'
import Link from 'next/link'

import { Section, Flex, Heading, Text, Box } from '@radix-ui/themes'

async function getData() {
  // const query = ''
  const query = `*[_type == "heroImage"][0]`

  const data = await client.fetch(query)

  return data
}

export default async function Hero() {
  const data = await getData()

  if (!data) {
    console.log('No data')
  }

  return (
    <Section size="2" px="1">
      <Flex direction="row">
        <Flex direction="column" align="end" width="50%" justify="center">
          <Box>
            <Heading
              as="h1"
              size={{ initial: '5', md: '8' }}
              weight="bold"
              mb="2"
            >
              The perfect brew for your business is right here.
            </Heading>
            <Text size={{ initial: '2', md: '4' }}>
              Welcome to Caffeica, your premier destination for commercial
              coffee machines and vending solutions. We offer top-quality
              refreshment services and beverage solutions available for cash
              purchase, lease, or rental. With our extensive range of hot drink
              machines and vending options, we have the perfect model to cater
              to the unique needs of any organisation.
            </Text>
          </Box>
        </Flex>
        <Flex direction="column" width="50%" align="center" justify="center">
          <Box
            width="300px"
            height="300px"
            position="relative"
            left="120px"
            top="120px"
            overflow="hidden"
            style={{ borderRadius: 'var(--radius-5)' }}
          >
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              priority
              width={500}
              height={500}
            />
          </Box>

          <Box
            overflow="hidden"
            width="300px"
            height="300px"
            style={{ borderRadius: 'var(--radius-5)' }}
          >
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              width={500}
              height={500}
              priority
            />
          </Box>
        </Flex>
      </Flex>

      {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          <Link
            href="/Men"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Men
          </Link>
          <Link
            href="/Women"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Women
          </Link>
          <Link
            href="/Teens"
            className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
          >
            Teens
          </Link>
        </div>
      </div> */}
    </Section>
  )
}
