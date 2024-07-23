import Hero from '@/app/components/hero'
import Newest from '@/app/components/newest'

import { Container } from '@radix-ui/themes'

export default function Home() {
  return (
    <>
      <Container size="4">
        <Hero />
        <Newest />
      </Container>
    </>
  )
}
