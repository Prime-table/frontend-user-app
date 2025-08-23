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
    <nav className="bg-[#FAFAFA] shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2"
        >
          <Image
            src={logo}
            alt="PrimeTable Logo"
            width={32}
            height={32}
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-800 hover:text-red-600 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <Link
            href="/get-started"
            className="bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
