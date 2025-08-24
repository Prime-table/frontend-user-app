import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Satisfy } from 'next/font/google'

import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Prime Table App',
  description:
    'A platform for booking and managing restaurant reservations',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
