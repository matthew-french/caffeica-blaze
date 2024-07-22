import Image from 'next/image'
import { client, urlFor } from '@/app/lib/sanity'
import Link from 'next/link'

import { Container, Flex, Heading, Text, Box } from '@radix-ui/themes'

async function getData() {
  // const query = ''
  const query = `*[_type == "heroImage"][0]`

  const data = await client.fetch(query)

  console.log(data)

  return data
}

export default async function Hero() {
  const data = await getData()

  if (!data) {
    console.log('No data')
  }

  return (
    <Container size="4" mt="2">
      <Flex direction={{ initial: 'column', md: 'row' }} px="12">
        <Flex
          direction="column"
          align={{ initial: 'start', md: 'center' }}
          width={{ initial: 'full', md: '1/3' }}
          mb={{ initial: '12', lg: '0' }}
          pt={{ initial: '12', lg: '48' }}
        >
          <Heading
            as="h1"
            size={{
              initial: '5',
              md: '7',
            }}
            weight="bold"
          >
            The perfect brew for your business is right here.
          </Heading>
          <Text
            size={{
              initial: '2',
              md: '5',
            }}
          >
            Welcome to Caffeica, your premier destination for commercial coffee
            machines and vending solutions. We offer top-quality refreshment
            services and beverage solutions available for cash purchase, lease,
            or rental. With our extensive range of hot drink machines and
            vending options, we have the perfect model to cater to the unique
            needs of any organisation.
          </Text>
        </Flex>
        <Flex
          width={{ initial: 'full', md: '2/3' }}
          mb={{ initial: '12', md: '16' }}
        >
          <div className="relative left-12 top-12 z-6 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>

          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="Great Photo"
              className="h-full w-full object-cover object-center"
              width={500}
              height={500}
              priority
            />
          </div>
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
    </Container>
  )
}
