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
  return (
      <AccountSettingWrapper>
        <Title>Account</Title>
        {isPending ? (
          <Spinner />
        ) : (
          <div>
            <div className="flex space-x-2">
              <p>
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
              </p>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 my-14">
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
