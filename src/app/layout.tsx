import Footer from '@/Shared/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Note keeper',
  description: 'A full stack web app for keeping notes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className="text-center  text-2xl md:text-3xl lg:text-5xl font-bold mt-8">Note Trucker </h1>

          <div className="">
          {children}
          </div>
        <Footer/>
        </body>
    </html>
  )
}
