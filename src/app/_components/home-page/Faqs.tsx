'use client'

import Image from 'next/image'
import React, { useState } from 'react'

import dropdown from '../../../../public/icons/dropdown.svg'

const faqsData = [
  {
    question: 'What is Prime Table?',
    answer:
      'Prime Table is a restaurant reservation platform that allows users to book tables at their favorite restaurants easily.',
  },
  {
    question: 'How do I make a reservation?',
    answer:
      'You can make a reservation by selecting a restaurant, choosing a date and time, and providing your contact information.',
  },
  {
    question: 'How can I enlist my restaurant?',
    answer:
      'To enlist your restaurant on Prime Table, please visit our website and fill out the restaurant registration form.',
  },
]

function Faqs() {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null)

  const handleToggle = (index: number) => {
    setOpenIndex(
      openIndex === index ? null : index,
    )
  }

  return (
    <section
      id="faqs"
      className="py-[49px] flex flex-col justify-center items-center"
    >
      <div className="container mb-[30px]">
        <h2 className="text-[40px] text-center leading-[100%] font-bold text-secondary mb-3">
          FAQs
        </h2>
        <p className="text-[16px] text-center leading-[100%] font-normal text-dark">
          Here you can find answers to the most
          common questions about our services.
        </p>
      </div>
      <div className="w-[982px] flex flex-col gap-6">
        {faqsData.map((faq, index) => (
          <div key={index} className=" ">
            <div className="h-[70px] rounded-[8px] px-6 py-[27px] flex justify-between items-center border border-[#E0E0E0]">
              <p className="text-[16px] leading-[100%] font-normal text-[#161515]">
                {faq.question}
              </p>
              <button
                onClick={() =>
                  handleToggle(index)
                }
              >
                <Image
                  src={dropdown}
                  alt="Dropdown Icon"
                  width={20}
                  height={10}
                />
              </button>
            </div>

            {openIndex === index && (
              <p className="ml-6 my-2 text-[16px] leading-[200%] font-normal text-dark">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-[71px] text-[#FFFFFF] text-center">
        <div className="bg-[#161515] w-[1039px] h-[388px] rounded-[8px] pt-[54px] px-[63px] pb-[144px] ">
          <h3 className="font-bold leading-[100%] text-[40px] mb-3">
            Get the best offers
          </h3>
          <p className="text-secondary mb-[42px]">
            Subscribe to our News Letter
          </p>
          <form
            action=""
            className="flex flex-row justify-between items-center gap-5"
          >
            <input
              type="text"
              placeholder="First Name"
              className="border border-[#FFFFFF] rounded-[4px] px-4 py-2  w-full"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#FFFFFF] rounded-[4px] px-4 py-2   w-full"
            />
            <button
              className="bg-secondary hover:bg-dark cursor-pointer text-white rounded-[8px] text-[16px] font-semibold leading-[100%] py-4 px-8"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Faqs
