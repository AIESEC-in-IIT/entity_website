import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Volunteering Opportunities',
  description:'Volunteer with AIESEC in IIT',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative-overflow-hidden">
          {children}
        </main>
        <Footer />
        </body>
    </html>
  )
}