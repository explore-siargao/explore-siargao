import React from "react"
import Header from "../LandingPage/components/Header"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { AccountMenuContainer } from "@/common/components/AccountMenuContainer"
import {
  CreditCardIcon,
  IdentificationIcon,
  HeartIcon,
} from "@heroicons/react/24/outline"
import { LINK_ACCOUNT_PERSONAL_INFO } from "@/common/constants/links"
import Title from "@/common/components/ui/Title"

const AccountSettings = () => {
  const pages = [
    {
      icon: IdentificationIcon,
      title: "Personal Info",
      content: "Labore est amet eiusmod proident.",
      link: LINK_ACCOUNT_PERSONAL_INFO,
    },
    {
      icon: HeartIcon,
      title: "Wishlists",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/",
    },
    {
      icon: CreditCardIcon,
      title: "Payments & payouts",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/",
    },
  ]
  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <Title>Account</Title>
        <div className="flex space-x-2">
          <p>
            <span className="font-semibold">John Patrick Madrigal</span>,
            jepoyyy0225@gmail.com <span>•</span>{" "}
            <a href="#" className="font-semibold underline underline-offset-2">
              Go to profile
            </a>
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 my-14">
          {pages.map((page) => (
            <AccountMenuContainer
              icon={<page.icon className="h-8 w-auto text-primary-700" />}
              title="Personal Info"
              content="Labore est amet eiusmod proident."
              link={String(page.link)}
            />
          ))}
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default AccountSettings
