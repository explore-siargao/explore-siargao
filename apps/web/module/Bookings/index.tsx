"use client"
import React, { useState } from "react"
import { Title } from "@/common/components/ui/Title"
import BookingBoxContainer from "@/common/components/BookingBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetAllBookings from "../LandingPage/hooks/useGetAllBookings"
import { Spinner } from "@/common/components/ui/Spinner"
import useSessionStore from "@/common/store/useSessionStore"
import Profile from "../HostProfile/Setup/FirstLevel"
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
import ModalSchool from "../HostProfile/Setup/ModalWhereIWentToSchool"
import ModalWork from "../HostProfile/Setup/ModalMyWork"
import ModalFunFact from "../HostProfile/Setup/ModalMyFunFact"
import ModalPets from "../HostProfile/Setup/ModalPets"
import ModalDecadeYouWereBorn from "../HostProfile/Setup/ModalDecadeYouWereBorn"
import ModalFavoriteSong from "../HostProfile/Setup/ModalFavoriteSongInHighSchool"
import ModalMyMostUselessSkill from "../HostProfile/Setup/ModalMyMostUselessSkill"
import ModalImObsessedWith from "../HostProfile/Setup/ModalImObsessedWith"
import ModalMyBiographyTitle from "../HostProfile/Setup/ModalMyBiographyTitle"
import ModalWhereILive from "../HostProfile/Setup/ModalWhereILive"
import ModalISpendTooMuchTime from "../HostProfile/Setup/ModalIspendTooMuchTime"
import ModalLanguageISpeak from "../HostProfile/Setup/ModalLanguageISpeak"

const menu = [
  {
    icon: <LucideGraduationCap />,
    title: "Where I went to school",
    modalComponent: ModalSchool,
  },
  {
    icon: <LucideBriefcase />,
    title: "My work",
    modalComponent: ModalWork,
  },
  {
    icon: <LucideGlobe2 />,
    title: "Where I live",
    modalComponent: ModalWhereILive,
  },
  {
    icon: <LucideLanguages />,
    title: "Languages you speak",
    modalComponent: ModalLanguageISpeak,
  },
  {
    icon: <LucidePlus />,
    title: "Decade you were born",
    modalComponent: ModalDecadeYouWereBorn,
  },
  {
    icon: <LucideMusic />,
    title: "My favorite song in high school",
    modalComponent: ModalFavoriteSong,
  },
  {
    icon: <LucideHeart />,
    title: "I'm obsessed with",
    modalComponent: ModalImObsessedWith,
  },
  {
    icon: <LucideLightbulb />,
    title: "My fun fact",
    modalComponent: ModalFunFact,
  },
  {
    icon: <LucidePencil />,
    title: "My most useless skill",
    modalComponent: ModalMyMostUselessSkill,
  },
  {
    icon: <LucideBookOpen />,
    title: "My biography title would be",
    modalComponent: ModalMyBiographyTitle,
  },
  {
    icon: <LucideClock />,
    title: "I spend too much time",
    modalComponent: ModalISpendTooMuchTime,
  },
  {
    icon: <LucidePawPrint />,
    title: "Pets",
    modalComponent: ModalPets,
  },
]

const Bookings = () => {
  const userId = useSessionStore((state) => state).id
  const { data, isPending } = useGetAllBookings()
  return (
    <WidthWrapper className="my-24 lg:my-32">
      {isPending ? (
        <Spinner className="mt-4" />
      ) : (
        <>
          <Title>Bookings</Title>
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 mx-auto w-full max-w-[2520px] justify-center">
            {data?.items?.map((item: any) => (
              <BookingBoxContainer
                key={item.id}
                listingId={item.id}
                location={item.address}
                date={item.description}
                distance={"100 kilometers away"}
                price={"₱" + item.price}
                imageKey={item.imageKey[0].fileKey as string}
                dayTime={item.price.isNight ? "Night" : ""}
                ratings={item.ratings}
                isHearted={
                  item.wishes.filter((value: any) => value.userId === userId)
                    .length !== 0
                }
              />
            ))}
          </ul>
          <Profile menu={menu} />
        </>
      )}
    </WidthWrapper>
  )
}

export default Bookings
