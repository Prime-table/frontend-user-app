'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useMenuStore } from '@/app/_store/menuStore'

import MenuCard from './MenuCard'
import { getMenus } from '@/app/_lib/api'
import { MenuCardType } from '../menuData'

function Menu() {
  const { showAll, setShowAll } = useMenuStore()
  const [menuCards, setMenuCards] =
    React.useState<MenuCardType[]>([])

  const router = useRouter()

  useEffect(() => {
    async function fetchMenus() {
      try {
        const res = await getMenus()
        // The API returns { success, count, data }
        setMenuCards(res.data)
      } catch (err) {
        console.error(
          'Failed to fetch menus:',
          err,
        )
      }
    }
    fetchMenus()
  }, [])

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
    router.push(`/more-menu/${card._id}`)
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
            key={card._id}
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
