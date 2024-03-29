import Logout from "@/common/components/Logout"
import { APP_NAME } from "@repo/constants"
import { LOGOUT } from "@/common/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${LOGOUT} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const LogoutPage = () => {
  return <Logout />
}

export default LogoutPage
