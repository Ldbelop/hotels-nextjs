import './globals.css'
import type { Metadata } from 'next'

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
        {children}
      </body>
    </html>
  )
}
