import { Container, Flex, Text, Box, Heading } from '@radix-ui/themes'
import Image from 'next/image'

import '@/styles/strap.css'

export default function Strap() {
  return (
    <Container size="4" mt="4">
      <Flex direction="row" align="stretch" justify="between">
        <Box className="logo-box">
          <Image
            src="/images/caffeica-logo.png"
            alt="Hero"
            width={129}
            height={65}
          />
        </Box>

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
    </Container>
  )
}
