import { create } from 'zustand'

type User = {
  id: number
  name: string
  email: string
}

type State = {
  selectedUser: User | null
  setSelectedUser: (user: User) => void
}

export const useUserStore = create<State>((set) => ({
  selectedUser: null,
  setSelectedUser: (user) => set({ selectedUser: user }),
}))
