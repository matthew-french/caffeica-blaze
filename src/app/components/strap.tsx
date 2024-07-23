import { Container, Flex, Text, Section, Heading } from '@radix-ui/themes'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

import Image from 'next/image'

import '@/styles/strap.css'

export default function Strap() {
  return (
    <Container
      size="4"
      p="4"
      style={{
        backgroundColor: 'var(--gray-12)',
      }}
    >
      <Section size="1">
        <Flex direction="row" align="stretch" justify="between">
          <Heading as="h1">
            <Image
              src="/images/caffeica-logo.png"
              alt="Hero"
              width={129}
              height={65}
            />
            <VisuallyHidden.Root>
              Caffeica Commercial Coffee Machines
            </VisuallyHidden.Root>
          </Heading>

          <Flex direction="column" px="4" align="center" justify="end">
            <Text>Perfect for Offices, Restaurants & Cafe's</Text>
            <Text align="center">
              Flexible finance options to help you with your coffee or vending
              machine
            </Text>
          </Flex>
          <Flex direction="column" align="end" justify="end">
            <Text size="3">Contact us today</Text>
            <Text size="6">01993 776753</Text>
          </Flex>
        </Flex>
      </Section>
    </Container>
  )
}
