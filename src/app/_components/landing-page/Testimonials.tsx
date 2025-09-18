import Image from 'next/image'
import React from 'react'

import quote from '../../../../public/icons/quote.svg'
import profile from '../../../../public/icons/reviewer.svg'

const testimonialsCards = Array.from(
  { length: 4 },
  (_, i) => ({
    id: i + 1,
    name: `Ada Obi`,
    feedback:
      'Prime Table has completely changed the way Me and my Wife settle rifts, we just book a nice restaurant then show-up to enjoy our marriage.',
    location: 'Lagos, Nigeria',
  }),
)

const rating = Array(5).fill('⭐')

function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <h2 className="text-center text-[40px] leading-[100%] font-semibold text-secondary mb-3">
        What Customers Are Saying
      </h2>
      <p className="text-center text-[16px] font-normal text-dark mb-[113px]">
        A few of the feedbacks and reviews we have
        received
      </p>
      <div className="grid grid-cols-2 gap-[30px]">
        {testimonialsCards.map((card) => (
          <div
            key={card.id}
            className="  h-[324px] shadow-[0_2px_9px_0px_#00000040] rounded-[8px] p-6"
          >
            <div className=" mb-4 flex flex-row justify-between items-center">
              <Image
                src={quote}
                alt="quote icon"
                width={48}
                height={34}
                className=""
              />
              <p>
                {rating.map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </p>
            </div>

            <p className="text-[16px] font-normal text-dark leading-[200%] mb-11 mt-8 ">
              {card.feedback}
            </p>
            <div className="flex flex-row gap-4 items-center justify-start">
              <Image
                src={profile}
                alt="profile picture"
                width={70}
                height={70}
                className="rounded-full"
              />
              <div>
                <h4 className="text-[20px] font-semibold leading-[100%] text-dark mb-2">
                  {card.name}
                </h4>
                <p className="text-[16px] leading-[100%] font-normal text-[#717276]">
                  {card.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
