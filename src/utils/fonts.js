import { Inter, Poppins } from 'next/font/google'

export const inter = Inter({
  weight: ['300','400','500'],
  subsets: ['latin'],
  variable: '--inter-font'
})

export const poppins = Poppins({
  weight: ['500','600'],
  subsets: ['latin'],
  variable: '--poppins-font'
})