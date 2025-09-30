const BASE_URL = process.env
  .NEXT_PUBLIC_API_BASE_URL as string

export interface BookingData {
  date: string
  time: string
  guests: number
  notes?: string
  [key: string]: unknown // fallback for optional props
}

/* ----------------- AUTH ----------------- */
export async function registerUser(data: {
  name: string
  email: string
  password: string
  confirmPassword: string
}) {
  const res = await fetch(
    `${BASE_URL}/user/register`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  if (!res.ok)
    throw new Error('Failed to register user')
  return res.json()
}

export async function loginUser(data: {
  email: string
  password: string
}) {
  const res = await fetch(
    `${BASE_URL}/user/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  if (!res.ok) throw new Error('Login failed')
  return res.json()
}

/* ----------------- MENUS ----------------- */
export async function getMenus() {
  const res = await fetch(`${BASE_URL}/menus`)
  if (!res.ok)
    throw new Error('Failed to fetch menus')
  return res.json()
}

export async function getMenuById(id: string) {
  const res = await fetch(
    `${BASE_URL}/user/menus/${id}`,
  )
  if (!res.ok)
    throw new Error('Failed to fetch menu')
  return res.json()
}

/* ----------------- BOOKINGS ----------------- */
export async function getBookingById(id: string) {
  const res = await fetch(
    `${BASE_URL}/user/bookings/${id}`,
  )
  if (!res.ok)
    throw new Error('Failed to fetch booking')
  return res.json()
}

export async function updateBooking(
  id: string,
  data: BookingData,
) {
  const res = await fetch(
    `${BASE_URL}/user/update-bookings/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
  if (!res.ok)
    throw new Error('Failed to update booking')
  return res.json()
}
export async function getMenu() {
  const res = await fetch(`${BASE_URL}/menus`)
  if (!res.ok)
    throw new Error('Failed to fetch menu')
  return res.json()
}

export async function subscribeNewsletter(
  firstname: string,
  email: string,
) {
  const res = await fetch(
    `${BASE_URL}/prime-table-user/newsletter`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, email }),
    },
  )
  if (!res.ok)
    throw new Error('Failed to subscribe')
  return res.json()
}

export async function getRestaurants() {
  const res = await fetch(
    `${BASE_URL}/prime-table-user/restaurant`,
  )
  if (!res.ok)
    throw new Error('Failed to fetch restaurants')
  return res.json()
}

export async function getRestaurantById(
  id: string,
) {
  const res = await fetch(
    `${BASE_URL}/prime-table-user/restaurant/${id}`,
  )
  if (!res.ok)
    throw new Error('Failed to fetch restaurant')
  return res.json()
}

export async function createBooking(
  restaurantId: string,
  bookingData: BookingData,
) {
  const res = await fetch(
    `${BASE_URL}/prime-table-user/booking/${restaurantId}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    },
  )
  if (!res.ok)
    throw new Error('Failed to create booking')
  return res.json()
}
