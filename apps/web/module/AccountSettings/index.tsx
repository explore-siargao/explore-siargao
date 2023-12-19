"use client"
import React from "react"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { AccountMenuContainer } from "@/common/components/AccountMenuContainer"
import {
  CreditCardIcon,
  IdentificationIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import {
  LINK_ACCOUNT_PAYMENT_PAYOUT,
  LINK_ACCOUNT_PERSONAL_INFO,
  LINK_ACCOUNT_WISHLIST,
} from "@/common/constants/links"
import { Title } from "@/common/components/ui/Title"
import useGetPersonalInfo from "@/common/hooks/useGetPersonalInfo"
import { Spinner } from "@/common/components/ui/Spinner"
import { Typography } from "@/common/components/ui/Typography"
import { capitalizeFirstLetter } from "@/common/helpers/capitalizeFirstLetter"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

const pages = [
  {
    id: 1,
    icon: IdentificationIcon,
    title: "Personal Info",
    content: "Labore est amet eiusmod proident.",
    link: LINK_ACCOUNT_PERSONAL_INFO,
  },
  {
    id: 2,
    icon: HeartIcon,
    title: "Wishlists",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: LINK_ACCOUNT_WISHLIST,
  },
  {
    id: 3,
    icon: CreditCardIcon,
    title: "Payments & payouts",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    link: LINK_ACCOUNT_PAYMENT_PAYOUT,
  },
]
const AccountSettings = () => {
  const { data, isPending } = useGetPersonalInfo()
  const firstName = data?.item?.personalInfo?.firstName

  const firstCharOnly =
    typeof firstName === "string" && firstName.length > 0
      ? String(firstName.charAt(0)).toUpperCase()
      : ""
  const uppercaseFirstChar = capitalizeFirstLetter(firstName)
  return (
    <AccountSettingWrapper>
      <Title className="pb-5 md:pb-0">Account</Title>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="space-y-5">
          <Typography variant={"p"} className="pb-5 border-b md:border-none">
            <div className="hidden md:block">
              <span className="font-semibold">
                {data?.item?.personalInfo?.firstName +
                  " " +
                  data?.item?.personalInfo?.lastName}
              </span>
              ,{" " + data?.item?.email + " "}
              <span>•</span>{" "}
              <a
                href="#"
                className="font-semibold underline underline-offset-2"
              >
                Go to profile
              </a>
            </div>
            <Link
              href={"#"}
              className="flex md:hidden justify-between items-center"
            >
              <div className="flex space-x-4">
                <div className="flex h-12 w-12 bg-primary-500 rounded-full items-center text-center">
                  <Typography
                    variant={"p"}
                    className="w-full h-auto text-white"
                    fontWeight={"bold"}
                  >
                    {firstCharOnly}
                  </Typography>
                </div>
                <div className="flex flex-col">
                  <Typography variant={"h4"}>{uppercaseFirstChar} </Typography>
                  <Typography
                    variant={"p"}
                    fontWeight={"light"}
                    className="mt-0 text-sm"
                  >
                    Show profile
                  </Typography>
                </div>
              </div>
              <ChevronRightIcon className="h-5 w-auto" />
            </Link>
          </Typography>
          <div className="grid gap-2 md:gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => (
              <AccountMenuContainer
                key={page.id}
                icon={<page.icon className="h-8 w-auto text-primary-700" />}
                title={page.title}
                content={page.content}
                link={String(page.link)}
              />
            ))}
          </div>
        </div>
      )}
    </AccountSettingWrapper>
  )
}

export default AccountSettings
