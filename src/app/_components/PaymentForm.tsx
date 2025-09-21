'use client'

import Link from 'next/link'

import React, { useState } from 'react'
import { usePaymentRedirect } from '../_hooks/bookingRedirect'

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    amount: '',
    paymentMethod: '',
  })

  const [errors, setErrors] = useState({
    amount: '',
    paymentMethod: '',
  })

  const { redirectTo } = usePaymentRedirect()

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({ ...prev, [name]: '' })) // clear error on change
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    redirectTo('confirm-payment')

    // let valid = true
    // let newErrors = {
    //   amount: '',
    //   paymentMethod: '',
    // }

    // if (!formData.amount) {
    //   newErrors.amount = 'Amount is required'
    //   valid = false
    // }
    // if (!formData.paymentMethod) {
    //   newErrors.paymentMethod =
    //     'Select a payment method'
    //   valid = false
    // }

    // setErrors(newErrors)

    // if (valid) {
    //   console.log('Form submitted:', formData)
    //   // reset form if needed
    //   setFormData({
    //     amount: '',
    //     paymentMethod: '',
    //   })
    // }
  }

  return (
    <>
      <h2 className="text-center text-[24px] leading-[100%] font-medium mb-[22px]">
        Wallet Balance: $0.00
      </h2>
      <form
        className="space-y-7"
        onSubmit={handleSubmit}
      >
        <div className="text-[16px] leading-[100%] font-normal flex flex-col gap-2">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="border border-[#ADADAD] rounded-[8px] h-[64px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"
          />
          {errors.amount && (
            <p style={{ color: 'red' }}>
              {errors.amount}
            </p>
          )}
        </div>

        {/* Payment Method Select */}
        <div className="text-[16px] leading-[100%] font-normal flex flex-col gap-2">
          <label htmlFor="paymentMethod">
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="border border-[#ADADAD] rounded-[8px] h-[64px] px-3 py-2 focus:outline-none focus:ring-1 focus:ring-secondary"
          >
            <option value="">-- Select --</option>
            <option value="card">
              Credit/Debit Card
            </option>
            <option value="bank">
              Bank Transfer
            </option>
            <option value="wallet">
              Other Wallet
            </option>
          </select>
          {errors.paymentMethod && (
            <p style={{ color: 'red' }}>
              {errors.paymentMethod}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-secondary text-white rounded-[8px] h-[64px] w-full px-3 py-2"
        >
          Add Funds
        </button>
      </form>
      <Link
        href="/history"
        className="text-[16px] mt-4 block text-center "
      >
        View Transaction History
      </Link>
    </>
  )
}
