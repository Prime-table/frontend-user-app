'use client'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'

import locationIcon from '../../../public/icons/location.svg'

type SearchProps = {
  query: string
  onSearch: (value: string) => void
}

function Search({
  query,
  onSearch,
}: SearchProps) {
  const [inputValue, setInputValue] =
    useState(query)

  useEffect(() => {
    setInputValue(query)
  }, [query])

  const handleSearch = () => {
    onSearch(inputValue)
  }

  return (
    <div className="bg-white focus-within:ring-[0.5px] focus-within:ring-secondary pt-[12px] pl-[26px] pb-[12px] pr-[12px] flex flex-row gap-2 w-[900px] h-[80px] items-center border-[0.1px] border-border shadow-[0px_12.3px_32.09px_0px_#00000040] rounded-[102px]">
      <Image
        src={locationIcon}
        alt="Location Icon"
        width={27}
        height={27}
      />
      <input
        type="text"
        placeholder="Find and book top-rated restaurants near you"
        className="w-full h-full outline-none"
        value={inputValue}
        onChange={(e) =>
          setInputValue(e.target.value)
        }
      />
      <button
        type="button"
        onClick={handleSearch}
        className="bg-secondary text-white w-[191px] h-[65px] rounded-[102px] py-[21px] px-[40px] cursor-pointer"
      >
        Search
      </button>
    </div>
  )
}

export default Search
