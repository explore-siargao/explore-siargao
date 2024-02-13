import create from 'zustand';

type T_FromTo ={
    fromDate?:string,
    toDate?:string
}
type T_FromTo_Action = {
    update: (fromTo: T_FromTo) => void
  }
  const today = new Date();
  const futureDate = new Date(today.setDate(today.getDate() + 5));
  const formattedFutureDate = futureDate.toLocaleDateString();

  const useCheckInOutDateStore = create<T_FromTo & T_FromTo_Action>((set) => ({
 fromDate:String((new Date).toLocaleDateString()),
 toDate:formattedFutureDate,
    update: (fromTo: T_FromTo) => set(() => ({ ...fromTo })),
    
  }))


export default useCheckInOutDateStore;