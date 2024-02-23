import { create } from "zustand"
type T_FirstLevel = {
  schoolName: string
  workName: string
  favoriteSong: string
  obsessedWith: string
  decadeWereBorn: string
  funFact: string
  languageISpeak: string
  whereILive: string
  mostUselessSkill: string
  biography: string
  spendTooMuchTime: string
  pets: string
  setSchoolName: (newSchoolName: string) => void
  setWorkName: (newWorkName: string) => void
  setFavoriteSong: (newFavoriteSong: string) => void
  setDecadeWereBorn: (newDecadeWereBorn: string) => void
  setObsessedWith: (newObsessedWith: string) => void
  setFunFact: (newFunFact: string) => void
  setLanguageISpeak: (newLanguageISpeak: string) => void
  setMostUselessSkill: (newMostUselessSkill: string) => void
  setBiography: (newBiography: string) => void
  setSpendTooMuchTime: (newSpendTooMuchTime: string) => void
  setPets: (newPets: string) => void
  setWhereILive: (newPets: string) => void
}
const useFirstLevelStore = create<T_FirstLevel>((set) => ({
  schoolName: "",
  setSchoolName: (newSchoolName: string) => { 
    console.log("School:", newSchoolName)
    set(() => ({ schoolName: newSchoolName }))} ,

  workName: "",
  setWorkName: (newWorkName: string) => {
    console.log("Work:", newWorkName)
    set(() => ({ workName: newWorkName}))
},

  favoriteSong: "",
  setFavoriteSong: (newFavoriteSong: string) => {
    console.log("Favorite song:", newFavoriteSong)
    set(() => ({ favoriteSong: newFavoriteSong}))
},

decadeWereBorn: "Born in 90's",
setDecadeWereBorn: (newDecadeWereBorn: string) => {
  console.log("Decade were born:", newDecadeWereBorn)
  set(() => ({decadeWereBorn: newDecadeWereBorn}))
},

  obsessedWith: "",
  setObsessedWith: (newObsessedWith: string) => {
    console.log("Obsessed with:", newObsessedWith)
    set(() => ({ obsessedWith: newObsessedWith}))
},

languageISpeak: "",
setLanguageISpeak: (newLanguageISpeak: string) => {
  console.log("Languages I speak:", newLanguageISpeak)
  set(() => ({languageISpeak: newLanguageISpeak}))
},

  funFact: "",
  setFunFact: (newFunFact: string) => {
    console.log("Fun fact:", newFunFact)
    set(() => ({ funFact: newFunFact}))
},

  mostUselessSkill: "",
  setMostUselessSkill: (newMostUselessSkill: string) => {
    console.log("Most useless skill:", newMostUselessSkill)
    set(() => ({ mostUselessSkill: newMostUselessSkill}))
},

  biography: "",
  setBiography: (newBiography: string) => {
    console.log("Biography:", newBiography)
    set(() => ({biography: newBiography}))
},

  spendTooMuchTime: "",
  setSpendTooMuchTime: (newSpendTooMuchTime: string) => {
    console.log("I spend too much time:", newSpendTooMuchTime)
    set(() => ({spendTooMuchTime: newSpendTooMuchTime}))
},

pets: "",
setPets: (newPets: string) => {
  console.log("Pets:", newPets)
  set(() => ({pets: newPets}))
},

whereILive: "",
setWhereILive: (newWhereILive: string) => {
  console.log("Where I live:", newWhereILive)
  set(() => ({ whereILive: newWhereILive}))
}

  
}))

export default useFirstLevelStore
