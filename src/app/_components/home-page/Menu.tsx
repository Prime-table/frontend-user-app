'use client'

import React, { useState } from 'react'
import menuImage from '../../../../public/images/menu-image.svg'
import Image from 'next/image'

const menuCards = Array.from(
  { length: 30 },
  (_, i) => ({
    id: i + 1,
    title: `Italian Pasta ${i + 1}`,
    country: 'Italy',
    description:
      'Delicious pasta with marinara sauce',
    price: '$12.99',
    image: menuImage,
    rating: 9.5,
  }),
)

function Menu() {
  const [showAll, setShowAll] = useState(false)

  const displayedCards = showAll
    ? menuCards
    : menuCards.slice(0, 6)

  return (
    <section id="menu" className="py-10">
      <h2 className="text-center text-[40px] leading-[100%] font-semibold text-secondary mb-3">
        Menu
      </h2>
      <p className="text-center text-[16px] font-normal text-dark mb-11">
        Select and book any of the options
      </p>
      <div className="grid grid-cols-2 justify-between gap-5">
        {displayedCards.map((card) => (
          <div
            key={card.id}
            className="flex flex-row gap-8 rounded-[8px] shadow-[0_2px_9px_0px_#00000040]"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={270}
              height={318}
              className="rounded-l-[8px]"
            />
            <div className="flex flex-col gap-4 justify-center items-start">
              <p className="text-secondary text-[16px] leading-[10px] font-semibold border border-secondary p-[9px] rounded-[5px]">
                {card.rating}
              </p>
              <p className="text-[16px] leading-[100%] font-normal text-dark ">
                {card.country}
              </p>

              <h3 className="text-[32px] leading-[100%] font-semibold text-header">
                {card.title}
              </h3>
              <p className="text-[16px] leading-[100%] font-normal text-dark">
                {card.description}
              </p>
              <p className="text-muted text-[24px] leading-[100%] font-semibold">
                {card.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-secondary text-white py-5 px-10 font-semibold leading-[100%] text-[16px]  rounded-[8px] cursor-pointer"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  )
}

export default Menu
