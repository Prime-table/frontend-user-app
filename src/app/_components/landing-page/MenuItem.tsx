'use client'

import React from 'react'
import MenuCard from './MenuCard'
import { MenuCardType } from '../menuData'

function MenuItem({
  recommended,
}: {
  recommended: MenuCardType[]
}) {
  return (
    <div className="pt-[34px] pb-40 ">
      <div className="text-center mb-[45px]">
        <h3 className="text-secondary font-semibold text-[40px] leading-[100%]">
          Recommendation
        </h3>
        <p>Select and book any of the options</p>
      </div>

      <div className="grid grid-cols-2 justify-between gap-5">
        {recommended.map((rec) => (
          <MenuCard
            key={rec.id}
            card={rec}
            handleSelectCard={() => {}}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuItem
