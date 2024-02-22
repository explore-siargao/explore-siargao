import { create } from "zustand"
type T_FirstLevel = {
  schoolName: string
  setSchoolName: (newSchoolName: string) => void
}
const useFirstLevelStore = create<T_FirstLevel>((set) => ({
  schoolName: "",
  setSchoolName: (newSchoolName: string) => set(() => ({ schoolName: newSchoolName })),
}))
export default useFirstLevelStore
