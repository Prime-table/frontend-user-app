import { satisfy } from '@/app/layout'
import Image from 'next/image'
import React from 'react'

import heroImage from '../../../../public/images/hero-image.svg'
import locationIcon from '../../../../public/icons/location.svg'
import facebookIcon from '../../../../public/icons/facebook.svg'
import twitterIcon from '../../../../public/icons/twitter.svg'
import instagramIcon from '../../../../public/icons/instagram.svg'
import Link from 'next/link'

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
          <div className="bg-white focus-within:ring-[0.5px] focus-within:ring-secondary pt-[12px] pl-[26px] pb-[12px] pr-[12px] flex flex-row gap-2 w-[900px] h-[80px] items-center border-[0.1px] border-border shadow-[0px_12.3px_32.09px_0px_#00000040] rounded-[102px]">
            <Image
              src={locationIcon}
              alt="Location Icon"
              width={27}
              height={27}
            />
            <input
              type="text"
              placeholder="Find and book top-rated restaurants near you"
              className="w-full h-full outline-none"
            />
            <button
              type="submit"
              className="bg-secondary text-white w-[191px] h-[65px] rounded-[102px] py-[21px] px-[40px] cursor-pointer"
            >
              Search
            </button>
          </div>
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
