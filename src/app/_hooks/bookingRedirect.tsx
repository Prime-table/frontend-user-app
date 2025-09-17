'use client'

import {
  useParams,
  useRouter,
} from 'next/navigation'

export function usePaymentRedirect() {
  const params = useParams()
  const router = useRouter()

  const redirectTo = (link: string) => {
    const bookingId = params?.id as string

    if (!bookingId) {
      console.error(
        'Booking ID not found in params.',
      )
      return
    }

    if (!link) {
      console.error(
        'Link is required for redirect.',
      )
      return
    }

    router.push(`/more-menu/${bookingId}/${link}`)
  }

  return { redirectTo }
}
