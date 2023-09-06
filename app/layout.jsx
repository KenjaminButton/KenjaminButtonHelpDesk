import './globals.css'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Kenjamin Button Help Desk',
  description: 'NEXT JS Help Desk App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}
