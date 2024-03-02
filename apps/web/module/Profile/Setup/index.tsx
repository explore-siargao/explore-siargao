"use client"

import { WidthWrapper } from "@/common/components/WidthWrapper"
import React, { useEffect } from "react"
import FirstLevel from "./FirstLevel"
import SetUpProfileAboutYou from "./SetUpProfileAboutYou"
import ProfileFourthLevel from "./ProfileFourthLevel"
import { Button } from "@/common/components/ui/Button"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"
import toast from "react-hot-toast"
import SetupProfileImage from "@/module/HostProfile/Setup/SetupProfileImage"
import { APP_NAME } from "@repo/constants"
import useGetProfile from "../hooks/useGetProfile"
import useProfileEditStore from "./store/useProfileEditStore"

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

const Setup = () => {
  const { data } = useGetProfile(2)
  const profile = useProfileEditStore.getState()
  const { setProfileEdit } = useProfileEditStore((state) => state)
  useEffect(() => {
    if (data?.item) {
      setProfileEdit({ ...data?.item })
    }
  }, [data])
  const save = () => {
    console.log("savedInput: ", profile)
    toast.success("Data saved successfully")
  }
  return (
    <WidthWrapper width="small" className="mt-32 lg:mt-40">
      <div className="flex flex-col lg:flex-row gap-0 md:gap-8 mx-auto">
        <div className="w-72 mx-auto md:mx-none">
          <SetupProfileImage />
        </div>
        <div className="flex-1">
          <div>
            <Typography variant="h1" fontWeight="semibold">
              Your profile
            </Typography>
            <Typography className="pt-5 text-gray-500">
              The information you share will be used across {APP_NAME} to help
              other guests and Hosts get to know you.{" "}
              <Link href="" className="font-semibold underline">
                Learn more
              </Link>
            </Typography>
          </div>
          <div className="mt-2">
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

export default Setup
