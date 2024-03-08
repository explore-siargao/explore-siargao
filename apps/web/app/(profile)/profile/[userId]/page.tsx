import { APP_NAME } from "@repo/constants"
import { PROFILE } from "@/common/constants"
import { Metadata } from "next"
import Profile from "@/module/Profile"
import { getRequest } from "@/common/helpers/getRequest"

export const metadata: Metadata = {
  title: `${PROFILE} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const HostProfilePage = async () => {
  const userProfile = await getRequest(`/users/user-profile/1`)
  return <Profile profile={userProfile.item} />
}

export default HostProfilePage
