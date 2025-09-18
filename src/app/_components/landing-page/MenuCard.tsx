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
      key={card.id}
      className="flex flex-row gap-8 rounded-[8px] shadow-[0_2px_9px_0px_#00000040]"
      onClick={() => handleSelectCard?.(card)}
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
  )
}

export default MenuCard
