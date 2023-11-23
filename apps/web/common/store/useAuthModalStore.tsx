import { create } from "zustand"
interface Props{
    isLoginModalOpen:boolean
    isSignUpmodalOpen:boolean
}
const useAuthModalStore = create<Props>((set) => ({
 isLoginModalOpen: false,
 isSignUpmodalOpen: false,
triggerLoginModal: () => set((state:any) =>({isLoginModalOpen: !state.isLoginModalOpen}) ),
triggerSignUpModal: () => set((state:any) =>({isSignUpmodalOpen: !state.isSignUpmodalOpen}) ), 
}))

export default useAuthModalStore
