import React from "react"
import Header from "../LandingPage/components/Header"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { AccountMenuContainer } from "@/common/components/AccountMenuContainer"
import {
  CreditCardIcon,
  IdentificationIcon,
  HeartIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline"

const AccountSettings = () => {
  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <h1 className="text-3xl font-semibold mb-3 text-text-500">Account</h1>
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
          <AccountMenuContainer
            icon={<IdentificationIcon className="h-8 w-auto text-primary-700" />}
            title="Personal Info"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="/"
          />
          <AccountMenuContainer
            icon={<ListBulletIcon className="h-8 w-auto text-primary-700" />}
            title="Bookings"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="/"
          />
          <AccountMenuContainer
            icon={<HeartIcon className="h-8 w-auto text-primary-700" />}
            title="Wishlists"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="/"
          />
          <AccountMenuContainer
            icon={<CreditCardIcon className="h-8 w-auto text-primary-700" />}
            title="Payments & payouts"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            link="/"
          />
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default AccountSettings
