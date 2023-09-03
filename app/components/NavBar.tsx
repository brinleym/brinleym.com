'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState, Fragment } from 'react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface MobileMenuProps {
  mobileMenuIsOpen: boolean,
  setMobileMenuIsOpen: (m: boolean) => void
}

interface MenuLinkProps {
  path: string,
  text: string,
  isCurrentRoute: boolean
}

interface MenuLink {
  path: string, 
  text: string,
}

const menuItems: MenuLink[] = [
  { path: "/", text: "Home" },
  { path: "/freelance", text: "Freelance" },
  { path: "/projects", text: "Projects" },
  { path: "/blog", text: "Blog" },
  { path: "/misc", text: "Misc." },
]

export default function Navbar() {
  const currentRoute = usePathname();
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="flex flex-row w-full items-center justify-between">
      <Link href="/">
        {/* <h1 className="text-4xl">{"Brinley" + currentRoute}</h1> */}
        <h1 className="text-4xl">Brinley M.</h1>
      </Link>
      {/* Mobile Menu */}
      <button 
        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        className="flex flex-col justify-between items-end md:hidden"
      >
        <Bars2Icon className="text-[var(--on-background)] w-8 h-8"/>
      </button>
      {mobileMenuIsOpen && 
        <div className="md:hidden">
          <MobileMenu 
            mobileMenuIsOpen={mobileMenuIsOpen}
            setMobileMenuIsOpen={setMobileMenuIsOpen}
          />
        </div>
      }
      {/* Desktop Menu */}
      <div className="hidden md:block">
        <DesktopMenu />
      </div>
    </nav>
  )
}

function MobileMenu({ mobileMenuIsOpen, setMobileMenuIsOpen }: MobileMenuProps) {
  const currentRoute = usePathname();

  return (
    <div className="rounded-l-lg fixed right-0 top-0 p-8 w-1/2 bg-[var(--background)] flex flex-col items-end">
      <button 
        className="mb-4"
        onClick={() => setMobileMenuIsOpen(false)}>
        <XMarkIcon className="w-8 h-8 text-[var(--on-background)]"/>
      </button>
      {menuItems.map(({path, text}: MenuLink) => 
        <Fragment key={path}>
          <MobileMenuLink path={path} text={text} isCurrentRoute={currentRoute === path} />
        </Fragment>
      )}
    </div>
  )
}

function MobileMenuLink( { path, text, isCurrentRoute }: MenuLinkProps) {
  return (
    <Link 
      className="text-xl m-2 text-[var(--on-background)] py-2 hover:underline hover:underline-offset-2"
      href={path}
    >
      {isCurrentRoute ? `{ ${text} }` : text}
    </Link>
  )
}

function DesktopMenu() {
  const currentRoute = usePathname();

  return (
    <div className="hidden md:flex gap-8">
      {menuItems.map(({path, text}: MenuLink) => 
        <Fragment key={path}>
          <DesktopMenuLink path={path} text={text} isCurrentRoute={currentRoute === path}/>
        </Fragment>
      )}
    </div>
  )
}

function DesktopMenuLink( { path, text, isCurrentRoute }: MenuLinkProps) {
  return (
    <Link 
      className={`text-[var(--on-background)] hover:underline hover:underline-offset-2`}
      href={path}
    >
      {isCurrentRoute ? `{ ${text} }` : text}
    </Link>
  )
}