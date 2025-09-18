import { create } from 'zustand'

interface MenuState {
  showAll: boolean
  toggleShowAll: () => void
  setShowAll: (value: boolean) => void
}

export const useMenuStore = create<MenuState>(
  (set) => ({
    showAll: false,
    setShowAll: (value) =>
      set({ showAll: value }),
    toggleShowAll: () =>
      set((state) => ({
        showAll: !state.showAll,
      })),
  }),
)
