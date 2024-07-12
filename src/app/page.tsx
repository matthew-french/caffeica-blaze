import Image from 'next/image'
import Hero from '@/app/components/hero'
import Newest from '@/app/components/newest'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <Newest />
    </div>
  )
}
