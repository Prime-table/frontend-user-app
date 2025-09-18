'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { useMenuStore } from '@/app/_store/menuStore'
import {
  menuCards,
  MenuCardType,
} from '../menuData'
import MenuCard from './MenuCard'

function Menu() {
  const { showAll, setShowAll } = useMenuStore()

  const router = useRouter()

  const displayedCards = showAll
    ? menuCards
    : menuCards.slice(0, 6)

  const navigate = () => {
    router.push('/more-menu')
    setShowAll(true)
  }

  const handleSelectCard = (
    card: MenuCardType,
  ) => {
    router.push(`/more-menu/${card.id}`)
    console.log('Selected card:', card)
  }

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
          <MenuCard
            key={card.id}
            card={card}
            handleSelectCard={handleSelectCard}
          />
        ))}
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={navigate}
          className="bg-secondary text-white py-5 px-10 font-semibold leading-[100%] text-[16px]  rounded-[8px] cursor-pointer"
        >
          {showAll ? 'Show Less' : 'Show All'}
        </button>
      </div>
    </section>
  )
}

export default Menu
