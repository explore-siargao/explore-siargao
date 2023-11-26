import { create } from "zustand"

interface Props {
  isLoginModalOpen: boolean
  isSignUpModalOpen: boolean
  isLogin: boolean
  closable: boolean
}
const useAuthModalStore = create<Props>((set) => ({
  isLoginModalOpen: false,
  isSignUpModalOpen: false,
  isLogin: true,
  closable: false,
  triggerLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  triggerSignUpModal: () => set((state) => ({ isSignUpModalOpen: !state.isSignUpModalOpen })),
  setIsLogin: () => set((state) => ({ isLogin: !state.isLogin })),
  setClosable: (val: boolean) => set(() => ({ closable: val }))
}))

export default useAuthModalStore
