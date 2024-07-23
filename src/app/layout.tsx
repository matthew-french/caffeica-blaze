import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import '../styles/globals.css'
import '@radix-ui/themes/styles.css'

import { cn } from '@/lib/utils'

import { Theme } from '@radix-ui/themes'

import Strap from '@/app/components/strap'
import Header from '@/app/components/header'
import Footer from '@/app/components/footer'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Caffeica Commercial Coffee Machines',
  description: 'Caffeica Commercial Coffee Machines',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <body
        className={cn(
          'flex flex-col min-h-screen font-sans antialiased',
          fontSans.variable
        )}
      >
        <Theme
          accentColor="red"
          radius="medium"
          scaling="95%"
          appearance="light"
        >
          <Strap />
          <Header />

          {children}

          <Footer />
        </Theme>
      </body>
    </html>
  )
}
