import { create } from "zustand"

type T_ReportHostState = {
  pageLevel: number
  firstLevelIndex: number
  secondLevelIndex: number
  data: {
    name: string
    reason: string
    description: string
    listingId: number | null
    reportedBy: number | null
  }
  isReported: boolean
  increasePageLevel: () => void
  decreasePageLevel: () => void
  setFirstLevelIndex: (value: number) => void
  setSecondLevelIndex: (value: number) => void
  setFirstLevel: (value: string) => void
  setSecondLevel: (value: string) => void
  setDescription: (value: string) => void
  setMultipleDescription: (value: string) => void
  setRemoveDescription: (value: string) => void
  setClearDescription: () => void
  setIsReported: () => void
}

const useReportHostStore = create<T_ReportHostState>((set) => ({
  pageLevel: 1,
  firstLevelIndex: 0,
  secondLevelIndex: 0,
  data: {
    name: "",
    reason: "",
    description: "",
    listingId: null,
    reportedBy: null,
  },
  isReported: false,
  increasePageLevel: () => set((state) => ({ pageLevel: state.pageLevel + 1 })),
  decreasePageLevel: () => set((state) => ({ pageLevel: state.pageLevel - 1 })),
  setFirstLevelIndex: (value) => set((state) => ({ firstLevelIndex: value })),
  setSecondLevelIndex: (value) => set((state) => ({ secondLevelIndex: value })),
  setFirstLevel: (value) =>
    set((state) => ({
      data: {
        ...state.data,
        name: value,
      },
    })),
  setSecondLevel: (value) =>
    set((state) => ({
      data: {
        ...state.data,
        reason: value,
      },
    })),
  setDescription: (value) =>
    set((state) => ({
      data: {
        ...state.data,
        description: value,
      },
    })),
  setMultipleDescription: (value) =>
    set((state) => ({
      data: {
        ...state.data,
        description: state.data.description
          ? state.data.description + ", " + value
          : value,
      },
    })),
  setRemoveDescription: (value) =>
    set((state) => ({
      data: {
        ...state.data,
        description: state.data.description
          .split(", ")
          .filter((item) => item !== value)
          .join(", "),
      },
    })),
  setClearDescription: () =>
    set((state) => ({
      data: {
        ...state.data,
        description: "",
      },
    })),
  setIsReported: () =>
    set((state) => ({
      isReported: !state.isReported,
      pageLevel: 1,
    })),
}))

export default useReportHostStore
