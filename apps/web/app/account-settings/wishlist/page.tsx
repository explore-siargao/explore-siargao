import Wishlist from "@/module/AccountSettings/Wishlist"
import AuthGuard from "@/common/components/AuthGuard"
import { APP_NAME } from "@repo/constants"
import { WISHLISTS } from "@/common/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${WISHLISTS} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const WishlistPage = () => {
  return (
    <AuthGuard>
      <Wishlist />
    </AuthGuard>
  )
}

export default WishlistPage
