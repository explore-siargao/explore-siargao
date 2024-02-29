import { APP_NAME } from "@repo/constants"
import { PROFILE } from "@/common/constants"
import { Metadata } from "next"
import SetupProfile from "@/module/Profile/Setup"

export const metadata: Metadata = {
  title: `${PROFILE} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const ProfileEditPage = () => {
  return <SetupProfile/>
}

export default ProfileEditPage
