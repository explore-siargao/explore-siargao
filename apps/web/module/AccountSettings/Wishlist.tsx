"use client"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import WishlistBoxContainer from "@/common/components/WishlistBoxContainer"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useWishGroupWithCount from "./hooks/useGetWishGroupWithCount"
import useSessionStore from "@/common/store/useSessionStore"
import { Spinner } from "@/common/components/ui/Spinner"
import { Typography } from "@/common/components/ui/Typography"
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
    <>
      <WidthWrapper className="my-24 lg:my-32">
        {isPending ? (
          <Spinner size={"md"}>Loading...</Spinner>
        ) : (
          <>
            {data?.item?.length !== 0 ? (
              <>
                <Title>Wishlists</Title>
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6">
                  {data?.item?.map((data: any, index: number) => (
                    <WishlistBoxContainer
                      key={data?.id as number}
                      photo={String(WishlistGroup[index]?.pic)}
                      title={data?.title}
                      link={data?.title}
                      text={data?._count + " saved"}
                    />
                  ))}
                </div>
              </>
            ) : (
              <WidthWrapper>
                <Typography variant={"h2"}>
                  Create your first wishlist
                </Typography>
                <br></br>
                <Typography>
                  As you search, click the heart icon to save your favorite
                  places and Experiences to a wishlist.
                </Typography>
              </WidthWrapper>
            )}
          </>
        )}
      </WidthWrapper>
    </>
  )
}

export default Wishlist
