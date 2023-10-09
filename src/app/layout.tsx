import './globals.css'
import type { Metadata } from 'next'
import ReservesProvider from '@/app/components/providers/ReservesProvider'
import HotelsFilterProvider from './components/providers/HotelsFilterProvider'

export const metadata: Metadata = {
  title: 'Book It!',
  description: 'Dummy Booking app using NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <HotelsFilterProvider>
          <ReservesProvider>
            {children}
          </ReservesProvider>
        </HotelsFilterProvider>
      </body>
    </html>
  )
}
