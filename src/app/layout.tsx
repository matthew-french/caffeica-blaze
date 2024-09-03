import './globals.css'

import Script from 'next/script'

import type { Metadata } from 'next'

import { TopBar } from '@/components/TopBar/TopBar'

import { mobileInlineScript } from '@/components/NavigationBar/mobileInlineScript'
import { NavigationBar } from '@/components/NavigationBar/NavigationBar'
import { NavItem } from '@/components/NavigationBar/types'
import { Footer } from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Caffeica Enterprise Catalog',
  description: 'Caffeica Enterprise Catalog Powered by Sanity',
  metadataBase: new URL('http://localhost/:3000'),
}

const navigationItems: NavItem[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'Coffee Machines',
    href: '/category/coffee-machines',
    submenu: {
      variant: 'image-grid',
      items: [
        {
          href: '/category/coffee-machines?page=bean-to-cup',
          image: '/menu/electronics-1.png',
          text: 'Bean to Cup',
        },
        {
          href: '/category/coffee-machines?page=traditional-coffee-machines',
          image: '/menu/electronics-2.png',
          text: 'Traditional Coffee Machines',
        },
        {
          href: '/category/coffee-machines/instant-coffee-machines',
          image: '/menu/electronics-3.png',
          text: 'Instant Coffee Machines',
        },
        {
          href: '/category/coffee-machines/hot-drinks-vending-machines',
          image: '/menu/electronics-4.png',
          text: 'Hot Drinks Vending Machines',
        },
        {
          href: '/category/coffee-machines/filter-coffee-machines',
          image: '/menu/electronics-4.png',
          text: 'Grinders',
        },
      ],
    },
  },
  {
    text: 'Coffee',
    href: '/category/coffee',
    submenu: {
      variant: 'image-grid',
      items: [
        {
          href: '/category/coffee/coffee-beans',
          image: '/menu/electronics-1.png',
          text: 'Coffee Beans',
        },
        {
          href: '/category/coffee/instant-and-filter-coffee',
          image: '/menu/electronics-2.png',
          text: 'Instant & Filter Coffee',
        },
        {
          href: '/category/coffee/coffee-pods',
          image: '/menu/electronics-3.png',
          text: 'Coffee Pods',
        },
        {
          href: '/category/coffee/sachets',
          image: '/menu/electronics-4.png',
          text: 'Sachets',
        },
        {
          href: '/category/coffee/tea',
          image: '/menu/electronics-4.png',
          text: 'Tea',
        },
        {
          href: '/category/coffee/whiteners-and-chocolates',
          image: '/menu/electronics-4.png',
          text: 'Whiteners & Chocolates',
        },
      ],
    },
  },
  {
    text: 'Vending Machines',
    href: '/category/vending-machines',
    submenu: {
      variant: 'image-grid',
      items: [
        {
          href: '/category/vending-machines/hot-drinks-vending-machines',
          image: '/menu/electronics-1.png',
          text: 'Hot Drinks Vending Machines',
        },
        {
          href: '/category/vending-machines/snacks-and-drinks-vending-machines',
          image: '/menu/electronics-2.png',
          text: 'Snacks & Drinks Vending Machines',
        },
      ],
    },
  },
  {
    text: 'Water Dispensers',
    href: '/category/water-dispensers',
    submenu: {
      variant: 'image-grid',
      items: [
        {
          href: '/category/water-dispensers/bottled-water-coolers',
          image: '/menu/electronics-1.png',
          text: 'Instant Taps',
        },
        {
          href: '/category/water-dispensers/instant-taps',
          image: '/menu/electronics-2.png',
          text: 'Water Dispensers',
        },
      ],
    },
  },
  {
    text: 'Services',
    href: '/category/services',
    submenu: {
      variant: 'image-grid',
      items: [
        {
          href: '/category/services/installation-servicing-repairs',
          image: '/menu/electronics-1.png',
          text: 'Installation, servicing & repairs',
        },
        {
          href: '/category/services/leasing-and-rental',
          image: '/menu/electronics-2.png',
          text: 'Leasing & rental',
        },
      ],
    },
  },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script
          id="mobileMegaMenuLogic"
          strategy="lazyOnload"
        >{`${mobileInlineScript}`}</Script>

        <TopBar />

        <NavigationBar items={navigationItems} />

        {children}

        <Footer />
      </body>
    </html>
  )
}
