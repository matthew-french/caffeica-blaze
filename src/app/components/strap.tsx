import { Container, Flex, Text, Strong, Heading } from '@radix-ui/themes'
import Image from 'next/image'

export default function Strap() {
  return (
    <Container size="4">
      <Flex direction="row" p="4" align="center">
        <Heading as="h1">
          <Image
            src="/images/caffeica-logo.png"
            alt="Hero"
            width={129}
            height={65}
          />
        </Heading>
        <Flex direction="column" p="4" align="center">
          <Text>Perfect for Offices, Restaurants & Cafe's</Text>
          <Text align="center">
            Flexible finance options to help you with your coffee or vending
            machine <Strong>01993 776753</Strong>
          </Text>
        </Flex>
      </Flex>
    </Container>
  )
}
