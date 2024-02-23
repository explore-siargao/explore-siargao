import create from "zustand"

interface InputSetupProfileAboutYouStore {
  inputValue: string
  setInputValue: (value: string) => void
}

export const useInputSetupProfileAboutYouStore =
  create<InputSetupProfileAboutYouStore>((set) => ({
    inputValue: "",
    setInputValue: (value: string) => set({ inputValue: value }),
  }))
