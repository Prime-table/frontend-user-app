'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-6">
        {/* Logo and Copyright */}
        <div>
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.svg"
              alt="PrimeTable"
              width={40}
              height={40}
            />
            <span className="text-2xl font-semibold">
              PrimeTable
            </span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            © 2025 Prime Table
            <br /> All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-red-500" />
              <span>info@primetable.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-red-500" />
              <span>
                +577 898 898 • +577 898 898
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-red-500" />
              <span>
                2311 Hill Street Napoleon, OH
                43545
              </span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Social Community
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FaInstagram className="text-red-500 w-5 h-5" />
              <Link href="https://instagram.com">
                Instagram
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaTwitter className="text-red-500 w-5 h-5" />
              <Link href="https://twitter.com">
                Twitter
              </Link>
            </li>
            <li className="flex items-center space-x-2">
              <FaFacebookF className="text-red-500 w-5 h-5" />
              <Link href="https://facebook.com">
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative h-80 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.9038!2d-73.9500!3d40.6782"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          className="grayscale"
        ></iframe>

        {/* Marker Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-red-600 p-3 rounded-full">
            <Image
              src="/logo.svg"
              alt="Marker"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
