import { Dispatch } from "react"
import React from "react"
import {
  LucideBookOpen,
  LucideBriefcase,
  LucideClock,
  LucideGlobe2,
  LucideGraduationCap,
  LucideHeart,
  LucideLanguages,
  LucideLightbulb,
  LucideMusic,
  LucidePawPrint,
  LucidePencil,
  LucidePlus,
} from "lucide-react"
import Section from "./Section"
import SchoolContent from "./SchoolContent"
import PetsContent from "./PetsContent"
import ModalWork from "./ModalMyWork"
import ModalFunFact from "./ModalMyFunFact"
import ModalDecadeYouWereBorn from "./ModalDecadeYouWereBorn"
import ModalFavoriteSong from "./ModalFavoriteSongInHighSchool"
import ModalMyMostUselessSkill from "./ModalMyMostUselessSkill"
import ModalImObsessedWith from "./ModalImObsessedWith"
import ModalMyBiographyTitle from "./ModalMyBiographyTitle"
import ModalWhereILive from "./ModalWhereILive"
import ModalLanguageISpeak from "./ModalLanguageISpeak"
import ModalISpendTooMuchTime from "./ModalISpendTooMuchTime"

export type T_ModalContent = { setIsOpen: Dispatch<boolean> }

const menu = [
  {
    icon: <LucideGraduationCap />,
    title: "Where I went to school",
    modalContent: (props: T_ModalContent) => <SchoolContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideBriefcase />,
    title: "My work",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideGlobe2 />,
    title: "Where I live",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideLanguages />,
    title: "Languages you speak",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucidePlus />,
    title: "Decade you were born",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideMusic />,
    title: "My favorite song in high school",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideHeart />,
    title: "I'm obsessed with",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideLightbulb />,
    title: "My fun fact",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucidePencil />,
    title: "My most useless skill",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideBookOpen />,
    title: "My biography title would be",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucideClock />,
    title: "I spend too much time",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
  {
    icon: <LucidePawPrint />,
    title: "Pets",
    modalContent: (props: T_ModalContent) => <PetsContent setIsOpen={props.setIsOpen} />,
  },
]

const FirstLevel = () => {
  return (
    <div className="lg:grid grid-cols-2 md:grid grid-cols">
      {menu.map((item) => (
        <Section {...item} />
      ))}
    </div>
  )
}

export default FirstLevel
