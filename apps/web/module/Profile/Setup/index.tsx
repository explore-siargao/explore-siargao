"use client"

import { WidthWrapper } from "@/common/components/WidthWrapper"
import React from "react"
import FirstLevel from "./FirstLevel"
import SetUpProfileAboutYou from "./SetUpProfileAboutYou"
import ProfileFourthLevel from "./ProfileFourthLevel"
import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"
import toast from "react-hot-toast"
import useFirstLevelStore from "./store/useFirstLevelStore"
import { useInputSetupProfileAboutYouStore } from "./store/useSetupProfileAboutYouStore"
import SetupProfileImage from "@/module/HostProfile/Setup/SetupProfileImage"

const dest = [
  {
    year: "2000",
    destination: "Boracay",
  },
  {
    year: "2019",
    destination: "Coron, Palawan",
  },
  {
    year: "2020",
    destination: "La Union",
  },
  {
    year: "2021",
    destination: "Baler, Quezon",
  },
]

const index = () => {
  const imageFile = useInputSetupProfileAboutYouStore(
    (state) => state.imageFile
  )
  const school = useFirstLevelStore((state) => state.schoolName)
  const work = useFirstLevelStore((state) => state.workName)
  const favoriteSong = useFirstLevelStore((state) => state.favoriteSong)
  const born = useFirstLevelStore((state) => state.decadeWereBorn)
  const obsessedWith = useFirstLevelStore((state) => state.obsessedWith)
  const language = useFirstLevelStore((state) => state.languageISpeak)
  const funFact = useFirstLevelStore((state) => state.funFact)
  const uselessSkill = useFirstLevelStore((state) => state.mostUselessSkill)
  const biography = useFirstLevelStore((state) => state.biography)
  const spendTime = useFirstLevelStore((state) => state.spendTooMuchTime)
  const pets = useFirstLevelStore((state) => state.pets)
  const live = useFirstLevelStore((state) => state.whereILive)
  const aboutMe = useInputSetupProfileAboutYouStore((state) => state.inputValue)

  const save = () => {
    const savedInput = {
      imageKey: "",
      imageFile: imageFile,
      school: school,
      work: work,
      favoriteSong: favoriteSong,
      born: born,
      obsessedWith: obsessedWith,
      language: language,
      funFact: funFact,
      uselessSkill: uselessSkill,
      biography: biography,
      spendTime: spendTime,
      pets: pets,
      live: live,
      aboutMe: aboutMe,
    }

    console.log("savedInput: ", savedInput)
    toast.success("Data saved successfully")
  }

  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-36">
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto">
        <div className=" lg:col-span-1 mx-auto">
          <SetupProfileImage />
        </div>

        <div className="col-span-2">
          <div className="py-6">
            <Typography variant="h1" fontWeight="semibold">
              Your profile
            </Typography>
            <Typography className="pt-5 text-gray-500">
              The information you share will be used across Explore-Siargao to
              help other guests and Hosts get to know you.{" "}
              <Link href="" className="font-semibold underline">
                Learn more
              </Link>
            </Typography>
          </div>
          <div>
            <FirstLevel />
          </div>
          <div className="py-6">
            <SetUpProfileAboutYou />
          </div>
          <div className="border-t mt-5"></div>
          <div className="py-6">
            <ProfileFourthLevel description={dest} />
          </div>
          <div className="border-t mt-5"></div>
          <div className="flex justify-end sm:text-right pt-5">
            <Button variant="primary" onClick={save}>
              Done
            </Button>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default index
