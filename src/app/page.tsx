import Image from 'next/image'
import Hero from '@/app/components/hero'
import Newest from '@/app/components/newest'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-green-200">
        <Newest />
      </div>
    </>
  )
}
