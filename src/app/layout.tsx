
import './styles/globals.css'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

const inter = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redbox mapping assistance',
  description: 'Redbox mapping assistance, commandes et FAQ',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <head>
        <base href='./'/>
      </head>
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
