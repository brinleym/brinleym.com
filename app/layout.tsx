import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google';
import { Jost } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Inter_Tight } from 'next/font/google';
import Navbar from './components/NavBar';

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap", 
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", 
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap", 
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
        ${spaceGrotesk.variable}
        ${jost.variable}
        ${inter.variable}
        ${interTight.variable}
      `}>
        <Navbar />
        <main className="z-0 mt-24 p-8 max-w-4xl mx-auto">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
