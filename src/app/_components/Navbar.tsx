'use client'

import Image from 'next/image'
import Link from 'next/link'

import logo from '../../../public/icons/logo.svg'

const Navbar = () => {
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

  return (
    <nav className="bg-[#FAFAFA] h-[112px] shadow-[0_2px_16.6px_0px_#00000040] fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="container mx-auto flex items-center justify-between py-4 px-20">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-background text-[16px]"
        >
          <Image
            src={logo}
            alt="PrimeTable Logo"
            width={111}
            height={132}
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-background hover:text-red-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/user-type"
            className="bg-secondary text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors w-[187px] h-[64px]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
