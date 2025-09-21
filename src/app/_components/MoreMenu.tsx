'use client'
import React from 'react'
import Menu from './landing-page/Menu'
import Faqs from './landing-page/Faqs'

function MoreMenu() {
  return (
    <div className="w-full">
      {/* <div className="fixed z-10 left-1/2 -translate-x-1/2">
        <Search
          onSearch={(query) =>
            console.log('searching...', query)
          }
          query=""
        />
      </div> */}

      <Menu />
      <Faqs />
    </div>
  )
}

export default MoreMenu
