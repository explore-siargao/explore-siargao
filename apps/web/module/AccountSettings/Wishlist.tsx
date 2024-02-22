"use client"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import useWishGroupWithCount from "./hooks/useGetWishGroupWithCount"
import useSessionStore from "@/common/store/useSessionStore"
import { Spinner } from "@/common/components/ui/Spinner"
import { Typography } from "@/common/components/ui/Typography"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import { ACCOUNT, WISHLISTS } from "@/common/constants"

const Wishlist = () => {
  const session = useSessionStore((state) => state)
  const { data, isPending } = useWishGroupWithCount(session?.id as number)
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home={ACCOUNT} page={WISHLISTS} link={LINK_ACCOUNT} />
        <Title>{WISHLISTS}</Title>
      </div>
      <div className="mt-4">
        {isPending ? (
          <Spinner size={"md"}>Loading...</Spinner>
        ) : (
          <>
            {data?.item?.length !== 0 ? (
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-4">
                {data?.item?.map((data: any) => (
                  <WishlistBoxContainer
                    key={data?.id as number}
                    photo={data?.images[0].fileKey}
                    title={data?.title}
                    link={data?.title}
                    text={data?._count + " saved"}
                  />
                ))}
              </div>
            ) : (
              <div className="mt-4">
                <Typography variant={"h2"}>
                  Create your first wishlist
                </Typography>
                <Typography className="mt-2">
                  As you search, click the heart icon to save your favorite
                  places and Experiences to a wishlist.
                </Typography>
              </div>
            )}
          </>
        )}
      </div>
    </AccountSettingWrapper>
  )
}

export default Wishlist
