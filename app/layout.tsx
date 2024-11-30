import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import { COMPANY } from './constants/company'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${COMPANY.SHORT_NAME} - Solar & Security Solutions`,
  description: `${COMPANY.FULL_NAME} - Professional Solar, CCTV, Intercom, and Security Systems Installation`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col relative">
          <Background />
          <Navbar />
          <main className="flex-grow relative z-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
