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
  login: (userData: User) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>(
  (set) => ({
    user: null,
    isAuthenticated: false,
    login: (userData) =>
      set({
        user: userData,
        isAuthenticated: true,
      }),
    logout: () =>
      set({ user: null, isAuthenticated: false }),
  }),
)
