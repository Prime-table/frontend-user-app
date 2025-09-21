'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import logo from '../../../public/icons/logo.svg'
import { useAuthStore } from '../_store/auth'
import { usePathname } from 'next/navigation'
import Search from './Search'

const Navbar = () => {
  const { user, isAuthenticated, logout } =
    useAuthStore()

  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Our Partners', href: '#partners' },
    {
      name: 'How it works',
      href: '#how-it-works',
    },
    { name: 'Menu', href: '#menu' },
    {
      name: 'Testimonials',
      href: '#testimonials',
    },
    { name: 'About Us', href: '#about' },
    { name: 'FAQs', href: '#faqs' },
  ]

  const [activeSection, setActiveSection] =
    useState<string>('hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150 // offset for navbar height
      const sections = navLinks.map((link) => {
        const el = document.querySelector(
          link.href,
        ) as HTMLElement
        if (!el) return null
        return {
          id: link.href.replace('#', ''),
          top: el.offsetTop,
        }
      })

      const current = sections
        .filter((s) => s !== null)
        .reduce((acc, section) => {
          if (
            section &&
            scrollPosition >= section.top
          ) {
            return section.id
          }
          return acc
        }, 'hero')

      setActiveSection(current)
    }

    window.addEventListener(
      'scroll',
      handleScroll,
    )
    return () =>
      window.removeEventListener(
        'scroll',
        handleScroll,
      )
  }, [navLinks])

  return (
    <nav className="bg-[#FAFAFA] h-[112px] shadow-[0_2px_16.6px_0px_#00000040] fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="container mx-auto flex items-center justify-between py-4 px-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <Image
            src={logo}
            alt="PrimeTable Logo"
            width={111}
            height={132}
          />
        </Link>

        {/* Nav Links */}
        {pathname.startsWith('/more-menu') ? (
          <Search onSearch={() => {}} query="" />
        ) : (
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors ${
                  activeSection ===
                  link.href.replace('#', '')
                    ? 'text-red-600 font-semibold'
                    : 'text-background hover:text-red-600'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}

        {isAuthenticated && user?.avatar ? (
          <Image
            src={user.avatar}
            alt={user?.name || 'User avatar'}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <div>
            <Link
              href="/user-type"
              className="bg-secondary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-[187px] h-[64px]"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
