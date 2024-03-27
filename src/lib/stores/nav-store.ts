import { create } from "zustand"

interface NavStore {
  isCollapsed: boolean
  setIsCollapsed: () => void
}

export const useNavStore = create<NavStore>()((set) => ({
  isCollapsed: false,
  setIsCollapsed: () => set(state => ({ isCollapsed: !state.isCollapsed }))
}))

