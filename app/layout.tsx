import './globals.css'
import type { Metadata } from 'next'
import { Ibarra_Real_Nova } from 'next/font/google';
import { Inconsolata } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import { Unbounded } from 'next/font/google';
import { Exo } from 'next/font/google';
import { Lekton } from 'next/font/google';
import { Gloock } from 'next/font/google';
import { Marcellus } from 'next/font/google';
import { Overpass_Mono } from 'next/font/google';
import { Space_Mono } from 'next/font/google';
import { Jost } from 'next/font/google';
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap", 
});

const lekton = Lekton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lekton",
  display: "swap", 
});

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap", 
});

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock",
  display: "swap", 
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap", 
});

const overpassMono = Overpass_Mono({
  subsets: ["latin"],
  variable: "--font-overpass-mono",
  display: "swap", 
});

const spaceMono = Space_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap", 
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
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
        ${ibarraRealNova.variable}
        ${inconsolata.variable}
        ${spaceGrotesk.variable}
        ${unbounded.variable}
        ${exo.variable}
        ${lekton.variable}
        ${gloock.variable}
        ${marcellus.variable}
        ${overpassMono.variable}
        ${spaceMono.variable}
        ${jost.variable}
      `}>
        <Navbar />
        <main className="z-0 mt-24 p-8 max-w-4xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
