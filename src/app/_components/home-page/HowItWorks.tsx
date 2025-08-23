import React from 'react'

import step1Image from '../../../../public/images/step-1-image.svg'
import step2Image from '../../../../public/images/step-2-image.svg'
import step3Image from '../../../../public/images/step-3-image.svg'

import step1Icon from '../../../../public/icons/step-1-icon.svg'
import step2Icon from '../../../../public/icons/step-2-icon.svg'
import step3Icon from '../../../../public/icons/step-3-icon.svg'
import Image from 'next/image'

const stepCard = [
  {
    label: 'Search  Restaurant',
    image: step1Image,
    icon: step1Icon,
    content:
      'Find a restaurant in no time! Simply input your desired cuisine and location, and we’ll take care of the rest.',
  },
  {
    label: 'Book  Restaurant',
    image: step2Image,
    icon: step2Icon,
    content:
      'Reserve a table in no time. Simply provide your restaurant and location details, and we’ll take care of everything else.',
  },
  {
    label: 'Show-up to Enjoy',
    image: step3Image,
    icon: step3Icon,
    content:
      'Welcome to our restaurant! Savor delightful dishes while creating unforgettable moments with your loved ones.',
  },
]

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mt-[54px] mb-[87px]"
    >
      <div className="text-center mb-[77px]">
        {' '}
        <h2 className=" mb-10 text-[40px] leading-[100%] font-semibold text-secondary">
          How It Works
        </h2>
        <p className="text-[16px] font-normal leading-0 text-dark">
          USING THIS PLARTFORM
        </p>
      </div>

      <div className="flex flex-row justify-between items-center gap-5">
        {' '}
        {stepCard.map((step, index) => (
          <div
            key={index}
            className="w-[413px] h-[500px] relative  rounded-tr-[25px] shadow-[0px_2px_9px_0px_#00000040]"
          >
            <Image
              src={step.image}
              alt={step.label}
              className="step-image rounded-tr-[25px] mb-[19px]"
              width={413}
              height={315}
            />
            <Image
              src={step.icon}
              alt={`${step.label} Icon`}
              width={100}
              height={100}
              className="absolute top-0 left-0"
            />
            <div className="px-2">
              <h3 className="mb-2 text-[23px] font-semibold text-[#161515]">
                {step.label}
              </h3>
              <p className="text-dark text-[16px] font-normal mb-[24px] leading-[140%] ">
                {step.content}
              </p>
              <button className=" w-full bg-secondary text-white text-[16px] leading-[100%] font-semibold  py-5 px-10 rounded-[8px] cursor-pointer ">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
