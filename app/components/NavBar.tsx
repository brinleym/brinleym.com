'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState, Fragment, useEffect } from 'react';

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

  const [navbarBackground, setNavbarBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setNavbarBackground(true);
      } else {
        setNavbarBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${navbarBackground && "bg-[var(--background)]"} p-8 sticky top-0 flex flex-row w-full items-center justify-between transition-colors`}>
      <HomeLink />
      <MobileMenu />
      <DesktopMenu />
    </nav>
  )
}

function HomeLink() {
  return (
    <Link href="/">
      <h1 className="text-3xl md:text-4xl">Brinley M.</h1>
    </Link> 
  )
}

function MobileMenu() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const currentRoute = usePathname();

  return (
    <div className="md:hidden">
      <button 
        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
      >
        {mobileMenuIsOpen ? "close" : "menu"}
      </button>
      {mobileMenuIsOpen &&
        <div className="bg-[var(--background)] text-[var(--on-background)] fixed p-8 top-0 left-0 w-full flex flex-col">
          <div className="mb-8 w-full flex flex-row justify-between items-center">
            <HomeLink />
            <button 
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            >
              {mobileMenuIsOpen ? "close" : "menu"}
            </button>    
          </div>
          {menuItems.map(({path, text}: MenuLink) => 
            <Fragment key={path}>
              <MobileMenuLink path={path} text={text} isCurrentRoute={currentRoute === path} />
            </Fragment>
          )}
        </div>
      }     
    </div>
  )
}

function MobileMenuLink( { path, text, isCurrentRoute }: MenuLinkProps) {
  return (
    <Link 
      className="text-3xl m-2 text-[var(--on-background)] py-2 hover:underline hover:underline-offset-2"
      href={path}
    >
      <h1>{isCurrentRoute ? `[ ${text} ]` : text}</h1>
    </Link>
  )
}

function DesktopMenu() {
  const currentRoute = usePathname();

  return (
    <div className="hidden md:block md:flex gap-8">
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
      {isCurrentRoute ? `[ ${text} ]` : text}
    </Link>
  )
}