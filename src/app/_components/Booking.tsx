'use client'

import React, { useState } from 'react'
import { usePaymentRedirect } from '../_hooks/bookingRedirect'

export default function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    partySize: '',
    tableType: '',
  })

  const [errors, setErrors] = useState({
    date: '',
    time: '',
    partySize: '',
    tableType: '',
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
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = () => {
    let valid = true
    const newErrors = {
      date: '',
      time: '',
      partySize: '',
      tableType: '',
    }

    if (!formData.date) {
      newErrors.date = 'Date is required'
      valid = false
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date =
          'Date cannot be in the past'
        valid = false
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required'
      valid = false
    }

    if (!formData.partySize) {
      newErrors.partySize =
        'Party size is required'
      valid = false
    } else if (Number(formData.partySize) <= 0) {
      newErrors.partySize =
        'Party size must be greater than 0'
      valid = false
    }

    if (!formData.tableType) {
      newErrors.tableType =
        'Please select a table type'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (
    e: React.FormEvent,
  ) => {
    e.preventDefault()
    redirectTo('payment')

    // if (!validate()) return

    // try {
    //   const res = await fetch('/api/bookings', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   })

    //   if (!res.ok)
    //     throw new Error('Failed to book')

    //   alert('Booking successful!')
    //   setFormData({
    //     date: '',
    //     time: '',
    //     partySize: '',
    //     tableType: '',
    //   })
    // } catch (err) {
    //   console.error(err)
    //   alert('Booking failed!')
    // }
  }

  return (
    <>
      <h2 className="text-center font-medium text-[24px] leading-[100%] mb-[42px] ">
        Booking Form
      </h2>
      <form
        className="space-y-[27px] "
        onSubmit={handleSubmit}
      >
        {/* Date */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] font-normal mb-[8px]">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="h-[64px] border-[1px] border-[#ADADAD] rounded-[8px] p-5 outline-none focus-within:border-secondary focus:border-[1px]"
          />
          {errors.date && <p>{errors.date}</p>}
        </div>

        {/* Time */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] font-normal mb-[8px]">
            Time
          </label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="h-[64px] border-[1px] border-[#ADADAD] rounded-[8px] p-5 outline-none focus-within:border-secondary focus:border-[1px]"
          />
          {errors.time && <p>{errors.time}</p>}
        </div>

        {/* Party Size */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] font-normal mb-[8px]">
            Party Size
          </label>
          <input
            type="number"
            required
            className="h-[64px] border-[1px] border-[#ADADAD] rounded-[8px] p-5 outline-none focus-within:border-secondary focus:border-[1px]"
          />
          {errors.time && <p>{errors.time}</p>}
        </div>

        {/* Table Type */}
        <div className="flex flex-col w-full">
          <label className="text-[16px] font-normal mb-[8px]">
            Table Type
          </label>
          <select
            name="tableType"
            value={formData.tableType}
            onChange={handleChange}
            required
            className="h-[64px] border-[1px] border-[#ADADAD] rounded-[8px] p-5 outline-none focus-within:border-secondary focus:border-[1px]"
          >
            <option value="">
              Select a type
            </option>
            <option value="indoor">Indoor</option>
            <option value="outdoor">
              Outdoor
            </option>
            <option value="window">
              Window Seat
            </option>
            <option value="vip">VIP</option>
          </select>
          {errors.tableType && (
            <p>{errors.tableType}</p>
          )}
        </div>

        <div className="w-full">
          <button
            className="bg-secondary w-full h-[64px] rounded-[8px] text-white font-medium text-[18px] leading-[100%] hover:opacity-90"
            type="submit"
          >
            Book
          </button>
        </div>
      </form>
    </>
  )
}
