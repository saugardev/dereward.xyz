import './globals.css'
import type { Metadata } from 'next'
import { Hanken_Grotesk } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const font = Hanken_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scratch',
  description: 'Breakthrough protocol using digital scratchable cards and Blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} bg-crudo font-medium `}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
