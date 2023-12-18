import { create } from "zustand"

type T_Session = {
  id: string | null
  email: string | null
  profilePicture: string | null
  registrationType: string | null
  deactivated: string | null
  role: string | null
}

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
  role: null,
  update: (session: T_Session) => set(() => ({ ...session })),
  remove: () =>
    set({
      id: null,
      email: null,
      profilePicture: null,
      registrationType: null,
      deactivated: null,
      role: null,
    }),
}))

export default useSessionStore
