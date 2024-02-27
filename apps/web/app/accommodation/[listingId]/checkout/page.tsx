import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"
import Checkout from "@/module/Accommodation/Checkout"
import AuthGuard from "@/common/components/AuthGuard"

export const metadata: Metadata = {
  title: `Checkout - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const CheckoutPage = () => {
  return (
    <AuthGuard>
      <Checkout />
    </AuthGuard>
  )
}

export default CheckoutPage
