'use client'
import Image from 'next/image'
import React from 'react'

import logo from '../../../../public/icons/logo.svg'
import Link from 'next/link'

function Login() {
  return (
    <div className="pb-[30px] flex flex-col h-screen w-full items-center justify-center bg-[#ffffff]">
      <Image
        src={logo}
        alt="prime table logo"
        width={200}
        height={120}
      />
      <div className="shadow-[0px_2px_10px_0px_#00000080] flex flex-col gap-4 w-[500px] px-[60px] h-[557px] justify-center items-center border border-[#E0E0E0]">
        <div className="w-full">
          <p className="text-center text-[24px] font-medium leading-[100%] text-[#1F1E1E] mb-[30px]">
            Customer Login
          </p>
          <form
            action=""
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col w-full">
              <label
                className="text-[16px] font-normal leading-[100%] text-[#1F1E1E] mb-[4px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="border border-[#ADADAD] rounded-[8px] p-[12px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>
            <div className="flex flex-col w-full">
              <label
                className="text-[16px] font-normal leading-[100%] text-[#1F1E1E] mb-[4px]"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                className="border border-[#ADADAD] rounded-[8px] p-[12px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>
            <div className="flex flex-col">
              <button
                className="bg-secondary text-white font-semibold rounded-[8px] py-[12px] px-[16px] hover:opacity-80"
                type="submit"
              >
                Login
              </button>
              <Link
                href="/forgot-password"
                className="text-right "
              >
                Forgot password?
              </Link>
            </div>

            <p className="text-center text-[16px] font-normal leading-[100%] text-[#1F1E1E]">
              Don&apos;t have an account?{' '}
              <Link
                href="/signup"
                className="text-secondary"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
