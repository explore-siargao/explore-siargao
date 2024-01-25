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
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"

const WishlistGroup = [
  {
    id: 1,
    pic: "http://localhost:3000/2.jpg",
    name: "My Wishlist",
    text: "1 saved",
  },
  {
    id: 2,
    pic: "http://localhost:3000/3.jpg",
    name: "Vacation",
    text: "3 saved",
  },
  {
    id: 3,
    pic: "http://localhost:3000/4.jpg",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 4,
    pic: "http://localhost:3000/5.jpg",
    name: "Wanted",
    text: "2 saved",
  },
  {
    id: 5,
    pic: "http://localhost:3000/1.jpg",
    name: "Wanted",
    text: "2 saved",
  },
]

const Wishlist = () => {
  const session = useSessionStore((state) => state)
  const { data, isPending } = useWishGroupWithCount(session?.id as number)
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home="Account"
          page="Wishlists"
          link={LINK_ACCOUNT_SETTINGS}
        />
        <Title>Wishlists</Title>
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
                    photo={JSON.parse(data?.imageUrl)[0].fileKey}
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
