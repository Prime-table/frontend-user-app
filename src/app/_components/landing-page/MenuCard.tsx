import React from 'react'
import { MenuCardType } from '../menuData'
import Image from 'next/image'

type MenuCardProps = {
  card: MenuCardType
  handleSelectCard: (card: MenuCardType) => void
}

function MenuCard({
  card,
  handleSelectCard,
}: MenuCardProps) {
  return (
    <div
      key={card._id} // ✅ use _id from API
      className="flex flex-row gap-8 rounded-[8px] shadow-[0_2px_9px_0px_#00000040] cursor-pointer"
      onClick={() => handleSelectCard?.(card)}
    >
      <Image
        src={
          card.restaurantPhoto ||
          '/images/placeholder.png'
        } // ✅ use restaurantPhoto
        alt={card.restaurantName}
        width={270}
        height={318}
        className="rounded-l-[8px] object-cover"
      />

      <div className="flex flex-col gap-4 justify-center items-start p-4">
        <h3 className="text-[24px] leading-[100%] font-semibold text-header">
          {card.restaurantName}
        </h3>

        <p className="text-[16px] leading-[100%] font-normal text-dark">
          📍 {card.address}
        </p>

        <p className="text-[14px] leading-[100%] text-muted">
          ⏰ {card.openAt} - {card.closeAt}
        </p>

        <p className="text-[16px] leading-[100%] font-normal text-dark">
          {card.description}
        </p>

        <p className="text-secondary text-[20px] leading-[100%] font-semibold">
          {card.pricePerTable}
        </p>

        {card.premiumTable === 'yes' && (
          <span className="bg-yellow-100 text-yellow-700 px-2 py-1 text-xs rounded">
            ⭐ Premium Table
          </span>
        )}
      </div>
    </div>
  )
}

export default MenuCard
