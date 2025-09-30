'use client'

import Image from 'next/image'
import { useMemo } from 'react'

const images = [
  '/images/img1.svg',
  '/images/img2.svg',
  '/images/img3.svg',
  '/images/img4.svg',
  '/images/img5.svg',
  '/images/img6.svg',
  '/images/img7.svg',
  '/images/img8.svg',
  '/images/img9.svg',
]

// Predefined scattered positions
const positions = [
  { top: '10%', left: '0%' },
  { top: '5%', left: '25%' },
  { top: '20%', left: '45%' },
  { top: '40%', left: '10%' },
  { top: '35%', left: '35%' },
  { top: '50%', left: '60%' },
  { top: '15%', left: '70%' },
  { top: '55%', left: '25%' },
  { top: '65%', left: '90%' },
]

export default function ScatteredImages() {
  // 👇 Generate stable "random-like" rotations, same on SSR & client
  const rotations = useMemo(
    () =>
      images.map((_, i) => ((i * 13) % 10) - 5), // produces -5 to +5 deg
    [],
  )

  return (
    <div className="relative w-full h-[500px]">
      {images.map((src, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: positions[i].top,
            left: positions[i].left,
            transform: `rotate(${rotations[i]}deg)`,
          }}
        >
          <Image
            src={src}
            alt={`Scattered ${i}`}
            width={120}
            height={120}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      ))}
    </div>
  )
}
