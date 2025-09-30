'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useAuthStore } from '@/app/_store/auth'
import logo from '../../../../public/icons/logo.svg'

function Signup() {
  const signup = useAuthStore(
    (state) => state.signup,
  )

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  async function handleSubmit(
    e: React.FormEvent,
  ) {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      setLoading(true)
      await signup({
        name: form.name,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirmPassword,
      })

      setSuccess(
        'Signup successful! Redirecting...',
      )
      // router.push("/dashboard") if needed
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="pb-[30px] flex flex-col h-screen w-full items-center justify-center bg-[#ffffff]">
      <Image
        src={logo}
        alt="prime table logo"
        width={200}
        height={120}
      />
      <div className="shadow-[0px_2px_10px_0px_#00000080] flex flex-col gap-4 w-[500px] px-[60px] py-[40px] justify-center items-center border border-[#E0E0E0]">
        <div className="w-full">
          <p className="text-center text-[24px] font-medium leading-[100%] text-[#1F1E1E] mb-[20px]">
            Create Account
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            {/* Name Field */}
            <div className="flex flex-col w-full">
              <label
                className="text-[16px] font-normal leading-[100%] text-[#1F1E1E] mb-[4px]"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm({
                    ...form,
                    name: e.target.value,
                  })
                }
                required
                className="border border-[#ADADAD] rounded-[8px] px-[6px] py-[4px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>

            {/* Email Field */}
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
                value={form.email}
                onChange={(e) =>
                  setForm({
                    ...form,
                    email: e.target.value,
                  })
                }
                required
                className="border border-[#ADADAD] rounded-[8px] px-[6px] py-[4px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>

            {/* Password Field */}
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
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
                required
                className="border border-[#ADADAD] rounded-[8px] px-[6px] py-[4px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>

            {/* Confirm Password Field */}
            <div className="flex flex-col w-full">
              <label
                className="text-[16px] font-normal leading-[100%] text-[#1F1E1E] mb-[4px]"
                htmlFor="confirm-password"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword:
                      e.target.value,
                  })
                }
                required
                className="border border-[#ADADAD] rounded-[8px] px-[6px] py-[4px] focus:outline-none focus:ring-1 focus:ring-secondary"
              />
            </div>

            {error && (
              <p className="text-red-600">
                {error}
              </p>
            )}
            {success && (
              <p className="text-green-600">
                {success}
              </p>
            )}

            <div className="flex flex-col mt-2">
              <button
                disabled={loading}
                className="bg-secondary text-white font-semibold rounded-[8px] py-[8px] px-[10px] hover:opacity-80 disabled:opacity-50"
                type="submit"
              >
                {loading
                  ? 'Signing up...'
                  : 'Signup'}
              </button>
              <Link
                href="/forgot-password"
                className="text-right text-sm mt-2"
              >
                Forgot password?
              </Link>
            </div>

            <p className="text-center text-[16px] font-normal leading-[100%] text-[#1F1E1E]">
              Already have an account?{' '}
              <Link
                href="/user-type/customer-login"
                className="text-secondary"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup
