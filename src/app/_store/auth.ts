import { create } from 'zustand'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null

  login: (
    email: string,
    password: string,
  ) => Promise<void>
  logout: () => void
}

export const useAuthStore = create<AuthState>(
  (set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    login: async (email, password) => {
      set({ isLoading: true, error: null })

      try {
        // Fake API request
        await new Promise((resolve) =>
          setTimeout(resolve, 1500),
        )

        // Example user returned from backend
        const loggedInUser: User = {
          id: '1',
          name: 'Idris Balogun',
          email,
        }

        set({
          user: loggedInUser,
          isAuthenticated: true,
          isLoading: false,
        })
      } catch (err) {
        set({
          error: 'Invalid credentials',
          isLoading: false,
        })
      }
    },

    logout: () => {
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })
    },
  }),
)
