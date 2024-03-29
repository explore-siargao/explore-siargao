import AuthGuard from "@/common/components/AuthGuard"
import Bookings from "@/module/Bookings"
import BottomNavBar from "@/module/Authentication/components/BottomNavBar"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import { HOME } from "@/common/constants"

export const metadata: Metadata = {
  title: `${HOME} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const HomePage = () => {
  return (
    <AuthGuard>
      <Bookings />
      <BottomNavBar />
    </AuthGuard>
  )
}

export default HomePage
