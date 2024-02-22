import { Title } from "@/common/components/ui/Title"
import { Dispatch, useState } from "react"
import React from "react"
import {
  LucideBookOpen,
  LucideBriefcase,
  LucideClock,
  LucideGlobe2,
  LucideGraduationCap,
  LucideHeart,
  LucideIcon,
  LucideLanguages,
  LucideLightbulb,
  LucideMusic,
  LucidePawPrint,
  LucidePencil,
  LucidePlus,
} from "lucide-react"
import SchoolContent from "./SchoolContent"
import ModalWork from "./ModalMyWork"
import ModalFunFact from "./ModalMyFunFact"
import PetsContent from "./PetsContent"
import ModalDecadeYouWereBorn from "./ModalDecadeYouWereBorn"
import ModalFavoriteSong from "./ModalFavoriteSongInHighSchool"
import ModalMyMostUselessSkill from "./ModalMyMostUselessSkill"
import ModalImObsessedWith from "./ModalImObsessedWith"
import ModalMyBiographyTitle from "./ModalMyBiographyTitle"
import ModalWhereILive from "./ModalWhereILive"
import ModalLanguageISpeak from "./ModalLanguageISpeak"
import ModalISpendTooMuchTime from "./ModalISpendTooMuchTime"
import Section from "./Section"

export type T_ModalContent = { setIsOpen: Dispatch<boolean> }

const menu = [
  {
    icon: <LucideGraduationCap />,
    title: "Where I went to school",
    modalContent: ({ setIsOpen }: T_ModalContent) => <SchoolContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideBriefcase />,
    title: "My work",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideGlobe2 />,
    title: "Where I live",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideLanguages />,
    title: "Languages you speak",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucidePlus />,
    title: "Decade you were born",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideMusic />,
    title: "My favorite song in high school",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideHeart />,
    title: "I'm obsessed with",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideLightbulb />,
    title: "My fun fact",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucidePencil />,
    title: "My most useless skill",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideBookOpen />,
    title: "My biography title would be",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucideClock />,
    title: "I spend too much time",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
  },
  {
    icon: <LucidePawPrint />,
    title: "Pets",
    modalContent: ({ setIsOpen }: T_ModalContent) => <PetsContent setIsOpen={setIsOpen} />,
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
