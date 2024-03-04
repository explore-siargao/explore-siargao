import AuthGuard from "@/common/components/AuthGuard"
import WishlistsItem from "@/module/AccountSettings/Wishlist/WishlistsItem"
import React from "react"

const WishListItemPage = () => {
  return (
    <div className="h-screen overflow-hidden">
      <AuthGuard>
        <WishlistsItem />
      </AuthGuard>
    </div>
  )
}

export default WishListItemPage
