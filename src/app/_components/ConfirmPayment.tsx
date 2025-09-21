import Link from 'next/link'
import React from 'react'

function ConfirmPayment() {
  return (
    <div className="w-full">
      <h2 className="text-center text-[24px] leading-[100%] font-medium mb-[22px]">
        Payment Confirmed!
      </h2>
      <div className="space-y-[22px] text-[16px] font-normal leading-[100%]">
        <p>Radison Avenue, Frankfurt</p>
        <div className="flex flex-row gap-[61px] items-center">
          <p>May 24, 2025</p> <p>10 PM</p>
        </div>
        <p>30 People</p>
        <p>Emerald</p>
        <p>$20,000.00</p>
        <div className="w-full ">
          <Link
            className="text-[16px] font-semibold bg-secondary text-white text-center flex justify-center items-center py-2 px-4 rounded-[8px] h-[64px] w-full"
            href="/more-menu/history"
          >
            View Booking History
          </Link>
        </div>

        <Link
          className="text-center flex justify-center items-center"
          href="/"
        >
          Home
        </Link>
      </div>
    </div>
  )
}

export default ConfirmPayment
