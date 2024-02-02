import { create } from "zustand"
import { T_Session } from "@repo/contract"

type T_Session_Action = {
  update: (session: T_Session) => void
  remove: () => void
}

const useSessionStore = create<T_Session & T_Session_Action>((set) => ({
  id: null,
  email: null,
  profilePicture: null,
  registrationType: null,
  deactivated: null,
  changePasswordAt: null,
  role: null,
  personalInfo: null,
  update: (session: T_Session) => set(() => ({ ...session })),
  remove: () =>
    set({
      id: null,
      email: null,
      profilePicture: null,
      registrationType: null,
      deactivated: null,
      changePasswordAt: null,
      role: null,
      personalInfo: null,
    }),
}))

export default useSessionStore
