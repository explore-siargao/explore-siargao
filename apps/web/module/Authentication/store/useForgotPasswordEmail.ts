import { create } from "zustand"

type T_ForgotPasswordEmail = {
  email: string | null
  update: (email: string) => void
  remove: () => void
}

const useForgotPasswordEmail = create<T_ForgotPasswordEmail>((set) => ({
  email: null,
  update: (email: string) => set(() => ({ email })),
  remove: () => set({ email: null }),
}))

export default useForgotPasswordEmail
