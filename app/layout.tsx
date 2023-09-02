import './globals.css'
import type { Metadata } from 'next'
import { Ibarra_Real_Nova } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import Navbar from './components/NavBar';

/* Headings font */
const ibarraRealNova = Ibarra_Real_Nova({
  subsets: ['latin'],
  variable: '--font-ibarra-real-nova',
  display: 'swap',
});

/* Body text font */
const inconsolata = Inconsolata({
  subsets: ['latin'],
  variable: '--font-inconsolata',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Brinley Macnamara',
  description: 'Brinley\'s Personal Website and Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`
        p-8
        max-w-4xl
        mx-auto
        ${ibarraRealNova.variable}
        ${inconsolata.variable}
      `}>
        <Navbar />
        <div className="pt-24">
          {children}
        </div>
      </body>
    </html>
  )
}
