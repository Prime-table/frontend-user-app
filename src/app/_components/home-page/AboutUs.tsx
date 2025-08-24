import Image from 'next/image'
import React from 'react'

import aboutImage from '../../../../public/images/about-image.svg'

function AboutUs() {
  return (
    <section
      id="about"
      className="py-[60px] flex flex-row justify-between items-start gap-[180px]"
    >
      <div className="container">
        <div>
          <h2 className=" text-[40px] leading-[100%] font-bold text-secondary mb-3">
            About Us
          </h2>
          <p className=" text-[16px] font-normal leading-[100%] text-dark mb-11">
            A Marketplace Built by Entrepreneurs
            for People Globally{' '}
          </p>
        </div>
        <div>
          <p className="text-justify text-[16px] leading-[200%] font-normal text-dark mb-11">
            Prime Table has completely changed the
            way Me and my Wife settle rifts, we
            just book a nice restaurant then
            show-up to enjoy our marriage. Prime
            Table has completely changed the way
            Me and my Wife settle rifts, we just
            book a nice restaurant then show-up to
            enjoy our marriage. Prime Table has
            completely changed the way Me and my
            Wife settle rifts, we just book a nice
            restaurant then show-up to enjoy our
            marriage. Prime Table has completely
            changed the way Me and my Wife settle
            rifts, we just book a nice restaurant
            then show-up to enjoy our marriage.
            Prime Table has completely changed the
            way Me and my Wife settle rifts, we
            just book a nice restaurant then
            show-up to enjoy our marriage.{' '}
          </p>
        </div>
      </div>
      <Image
        src={aboutImage}
        alt="About Us"
        width={500}
        height={500}
        className="max-w-[545px]"
      />
    </section>
  )
}

export default AboutUs
