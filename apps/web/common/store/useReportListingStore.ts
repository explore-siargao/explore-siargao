import { create } from "zustand"

type T_ReportListingState = {
  currentContent: string | null
  output: string[]
  subTitle: string
  selectables: string[]
  setCurrentContent: (value: string | null) => void
  setOutput: (value: string[]) => void 
  removeLastValue: () => void
  setSubTitle: (value: string) => void
  setSelectables: (value: string[]) => void
}

const useReportListingStore = create<T_ReportListingState>((set) => ({
  currentContent: null,
  output: [],
  subTitle: "",
  selectables: [], 
  setCurrentContent: (value) => set(() => ({currentContent: value})),
  setOutput: (value) => set((state) => ({
    ...state.output,
    output: [...state.output, ...value]
  })),
  removeLastValue: () => set((state) => ({
    output: state.output.splice(0, state.output.length - 1)
  })),
  setSubTitle: (value) => set(() => ({
    subTitle: value
  })),
  setSelectables: (value) => set(() => ({
    selectables: value
  }))
}))

export default useReportListingStore