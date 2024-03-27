import React from "react"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import { ACCOMODATION } from "@/common/constants"
import Accommodation from "@/module/Accommodation"
// import { getRequest } from "@/common/helpers/getRequest"

export const metadata: Metadata = {
  title: `${ACCOMODATION} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const AccommodationPage = async () => {
  // const booking = await getRequest(`/bookings/1`)
  return <Accommodation />
}

export default AccommodationPage
