import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNav from '@/components/BottomNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Better ToDo',
  description: 'A better way to manage your tasks',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className={`${inter.className} h-full text-white overflow-x-hidden`}>
        <main className="min-h-full overflow-y-auto pb-24">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  )
}
