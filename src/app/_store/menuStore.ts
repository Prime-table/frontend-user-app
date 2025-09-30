import { create } from 'zustand'
import { MenuCardType } from '../_components/menuData' // adjust path
import { getMenu } from '../_lib/api'

interface MenuState {
  // UI state
  showAll: boolean
  toggleShowAll: () => void
  setShowAll: (value: boolean) => void

  // Data state
  menus: MenuCardType[]
  loading: boolean
  error: string | null
  fetchMenus: () => Promise<void>
}

export const useMenuStore = create<MenuState>(
  (set) => ({
    // UI state
    showAll: false,
    setShowAll: (value) =>
      set({ showAll: value }),
    toggleShowAll: () =>
      set((state) => ({
        showAll: !state.showAll,
      })),

    // Data state
    menus: [],
    loading: false,
    error: null,

    fetchMenus: async () => {
      set({ loading: true, error: null })
      try {
        const res = await getMenu() // API returns { success, count, data }
        set({ menus: res.data, loading: false })
      } catch (err: unknown) {
        set({
          error:
            err instanceof Error
              ? err.message
              : 'Failed to fetch menus',
          loading: false,
        })
      }
    },
  }),
)
