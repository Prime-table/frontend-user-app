import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../../../public/icons/logo.svg'

function UserType() {
  return (
    <div className="pb-[30px] flex flex-col h-screen w-full items-center justify-center bg-[#ffffff]">
      <Image
        src={logo}
        alt="prime table logo"
        width={200}
        height={120}
      />
      <div className="shadow-[0px_2px_10px_0px_#00000080] flex flex-col gap-4 w-[500px] px-[30px] h-[557px] justify-center items-center border border-[#E0E0E0]">
        <Link
          className="bg-secondary hover:opacity-80 rounded-[8px] text-[#ffffff] w-full text-center py-5 font-semibold leading-[100%] "
          href="/user-type/customer-login"
        >
          Customer
        </Link>
        <Link
          className="bg-[#ffffff] hover:opacity-60 border border-secondary rounded-[8px] text-secondary w-full text-center py-5 font-semibold leading-[100%] "
          href="/partner-login"
        >
          Partner
        </Link>
      </div>
    </div>
  )
}

export default UserType
