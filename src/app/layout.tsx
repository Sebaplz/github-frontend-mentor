import Navbar from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GitHub Search',
  description: 'GitHub Search from frontend mentor',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-blue-100 dark:bg-[#141c2f] max-w-[850px] mx-auto`}>
        <div className='min-h-screen flex flex-col justify-center p-4 gap-4'>
        {children}
        </div>
      </body>
    </html>
  )
}
