import { create } from 'zustand'

type User = {
  id: string
  name: string
  email: string
  avatar?: string
}

type AuthState = {
  user: User | null
  isAuthenticated: boolean
  signup: (data: {
    name: string
    email: string
    password: string
    confirmPassword: string
  }) => Promise<void>
  signin: (data: {
    email: string
    password: string
  }) => Promise<void>
  login: (userData: User, token?: string) => void
  logout: () => void
}

const BASE_URL = process.env
  .NEXT_PUBLIC_API_BASE_URL as string

export const useAuthStore = create<AuthState>(
  (set) => ({
    user:
      typeof window !== 'undefined'
        ? JSON.parse(
            localStorage.getItem('user') ||
              'null',
          )
        : null,
    isAuthenticated:
      typeof window !== 'undefined'
        ? !!localStorage.getItem('user')
        : false,

    // Signup logic inside store
    signup: async (data) => {
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

      if (!res.ok) {
        const error = await res.text()
        throw new Error(error || 'Signup failed')
      }

      const result = await res.json()

      if (result.token) {
        localStorage.setItem(
          'token',
          result.token,
        )
      }
      if (result.user) {
        localStorage.setItem(
          'user',
          JSON.stringify(result.user),
        )
        set({
          user: result.user,
          isAuthenticated: true,
        })
      }
    },

    // Login logic (reuse for email+password login or social login)
    signin: async (data) => {
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

      if (!res.ok) {
        const error = await res.text()
        throw new Error(error || 'Signin failed')
      }

      const result = await res.json()

      if (result.token) {
        localStorage.setItem(
          'token',
          result.token,
        )
      }
      if (result.user) {
        localStorage.setItem(
          'user',
          JSON.stringify(result.user),
        )
        set({
          user: result.user,
          isAuthenticated: true,
        })
      }
    },
    login: (userData, token) => {
      if (token)
        localStorage.setItem('token', token)
      localStorage.setItem(
        'user',
        JSON.stringify(userData),
      )
      set({
        user: userData,
        isAuthenticated: true,
      })
    },

    logout: () => {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      set({ user: null, isAuthenticated: false })
    },
  }),
)
