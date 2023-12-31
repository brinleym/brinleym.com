"use client";
import { Fragment } from "react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface DesktopMenuLinkProps {
  path: string,
  text: string,
  isCurrentRoute: boolean
}

interface MenuLink {
  path: string, 
  text: string,
}

interface MobileMenuProps {
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void
}

interface MobileMenuLinkProps {
  path: string,
  text: string,
  isCurrentRoute: boolean,
  setMobileMenuIsOpen: (arg0: false) => void
}

const menuItems: MenuLink[] = [
  { path: "/", text: "Home" },
  { path: "/freelance", text: "Freelance" },
  { path: "/projects", text: "Projects" },
  { path: "/blog", text: "Blog" }
]

export default function Navbar() {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [scrolledOnDesktop, setScrolledOnDesktop] = useState(false);

  const closeMobileMenuOnResize = () => {
    if (window.innerWidth >= 768) {
      setMobileMenuIsOpen(false);
      // setScrolledOnDesktop(false);
    }
  };

  const recolorDesktopMenuWhenScrolled = () => {
    if (window.scrollY > 10) {
      setScrolledOnDesktop(true);
    }
    else {
      setScrolledOnDesktop(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", closeMobileMenuOnResize);
    return () => {
      window.removeEventListener("resize", closeMobileMenuOnResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", recolorDesktopMenuWhenScrolled);
    return () => {
      window.removeEventListener("scroll", recolorDesktopMenuWhenScrolled);
    }
  }, []);

  return (
    <nav className={`z-50 p-8 fixed top-0 left-0 w-full ${scrolledOnDesktop || mobileMenuIsOpen ? "bg-[var(--background-variant)] shadow" : "bg-[var(--background)]"} transition-colors duration-300`}>
      <div className="flex flex-row items-center justify-between w-full">
        <HomeLink />
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          {mobileMenuIsOpen ? "close" : "menu"}
        </button>
        <DesktopMenu />
      </div>
      <MobileMenu isOpen={mobileMenuIsOpen} setIsOpen={setMobileMenuIsOpen} />
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

function MobileMenu( { isOpen, setIsOpen }: MobileMenuProps) {
  const currentRoute = usePathname();
  return (
    <>
      {isOpen &&
        <ul className="py-8 relative top-0 left-0 w-full flex flex-col gap-2">
          {menuItems.map(({path, text}: MenuLink) => 
            <li key={path}>
              <MobileMenuLink 
                path={path} 
                text={text} 
                isCurrentRoute={currentRoute === path} 
                setMobileMenuIsOpen={setIsOpen}
              />
            </li>
          )}
        </ul>
      }     
    </>
  )
}

function MobileMenuLink( { path, text, isCurrentRoute, setMobileMenuIsOpen }: MobileMenuLinkProps) {
  return (
    <Link 
      onClick={() => setMobileMenuIsOpen(false)}
      className={`${isCurrentRoute ? "underline" : ""} text-3xl text-[var(--on-background)] hover:underline hover:underline-offset-2`}
      href={path}
    >
      <h1>{text}</h1>
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

function DesktopMenuLink( { path, text, isCurrentRoute }: DesktopMenuLinkProps) {
  return (
    <Link 
      className={`${isCurrentRoute ? "underline underline-offset-2" : ""} text-[var(--on-background)] hover:underline hover:underline-offset-2`}
      href={path}
    >
      {text}
    </Link>
  )
}