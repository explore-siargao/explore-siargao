import { FileWithPath } from "react-dropzone"
import { create } from "zustand"

interface InputSetupProfileAboutYouStore {
  inputValue: string
  imageFile: FileWithPath | null
  setInputValue: (value: string) => void
  setProfileImage: (value: FileWithPath | null) => void
}

export const useInputSetupProfileAboutYouStore =
  create<InputSetupProfileAboutYouStore>((set) => ({
    inputValue: "",
    imageFile: null,
    setInputValue: (value: string) => set({ inputValue: value }),
    setProfileImage: (value: FileWithPath | null) => set({ imageFile: value }),
  }))
