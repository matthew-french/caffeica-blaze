'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import NavigationMenuDemo from '@/app/components/radix-main-menu'

export default function MainMenu() {
  const isMobile = useMediaQuery('(max-width: 830px)')

  return (
    <header>
      {isMobile ? (
        <div>Mobile</div>
      ) : (
        <>
          <div className="max-w-6xl mx-auto w-screen p-2">
            <NavigationMenuDemo />
          </div>
        </>
      )}
    </header>
  )
}
