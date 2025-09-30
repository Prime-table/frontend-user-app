'use client'

import { Satisfy } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

import heroImage from '../../../../public/images/hero-image.svg'
import facebookIcon from '../../../../public/icons/facebook.svg'
import twitterIcon from '../../../../public/icons/twitter.svg'
import instagramIcon from '../../../../public/icons/instagram.svg'
import Link from 'next/link'
import Search from '../Search'

const satisfy = Satisfy({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const socials = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
    icon: facebookIcon,
  },
  {
    name: 'X',
    href: 'https://twitter.com',
    icon: twitterIcon,
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
    icon: instagramIcon,
  },
]

function Hero() {
  return (
    <section
      id="hero"
      className="w-full pt-[57px] pb-[96px] "
    >
      <div className="text-center font-bold text-[76px] mb-[76px]">
        <h1 className="text-header">
          Savor the Art of Fine Dining{' '}
        </h1>
        <span
          className={`text-secondary ${satisfy.className}`}
        >
          at Prime Table!
        </span>
      </div>
      <div className="relative">
        <Image
          src={heroImage}
          alt="Hero Image"
          layout="responsive"
          width={1920}
          height={650}
          className="w-full"
        />
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
          <Search
            query=""
            onSearch={(value) =>
              console.log(value)
            }
          />
        </div>
        <div className="absolute bottom-[61px] left-[calc(50%-194px)] w-[388px] h-10 flex justify-between space-x-4 py-4 bg-shadow">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex flex-row items-center gap-2 text-gray-600 hover:text-secondary transition-colors"
            >
              <Image
                src={social.icon}
                alt={`${social.name} Icon`}
                width={24}
                height={24}
              />
              <span className="text-[#ffffff]">
                {social.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
