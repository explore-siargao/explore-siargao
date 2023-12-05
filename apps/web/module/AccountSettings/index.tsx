import React from "react"
import Header from "../LandingPage/components/Header"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { AccountSettingContainer } from "@/common/components/ui/AccountSettingContainer"
import {
  CreditCardIcon,
  DocumentIcon,
  EyeIcon,
  IdentificationIcon,
  MegaphoneIcon,
  ShieldExclamationIcon,
} from "@heroicons/react/24/outline"
import { LINK_ACCOUNT_PERSONAL_INFO } from "@/common/constants/links"
import Title from "@/common/components/ui/Title"

const AccountSettings = () => {
  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <Title>Account</Title>
        <div className="flex space-x-2">
          <p>
            <span className="font-semibold">Full Name</span>, you@sample.com{" "}
            <span>•</span>{" "}
            <a href="#" className="font-semibold underline underline-offset-2">
              Go to profile
            </a>
          </p>
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 my-14">
          <AccountSettingContainer
            icon={<IdentificationIcon className="h-8 w-auto text-text-400" />}
            title="Personal Info"
            content="Labore est amet eiusmod proident."
            link={LINK_ACCOUNT_PERSONAL_INFO}
          />
          <AccountSettingContainer
            icon={
              <ShieldExclamationIcon className="h-8 w-auto text-text-400" />
            }
            title="Login & security"
            content="nisi non et consectetur Lorem eiusmod consequ"
            link="/"
          />
          <AccountSettingContainer
            icon={<CreditCardIcon className="h-8 w-auto text-text-400" />}
            title="Payments & payouts"
            content="Please provide personal info"
            link="/"
          />
          <AccountSettingContainer
            icon={<DocumentIcon className="h-8 w-auto text-text-400" />}
            title="Taxes"
            content=" nisi non et  adipisicing quis laborum deserunt veniam do esse sit do veniam."
            link="/"
          />
          <AccountSettingContainer
            icon={<MegaphoneIcon className="h-8 w-auto text-text-400" />}
            title="Notifications"
            content="nisi non et consectetur Lorem eiusmod consequ"
            link="/"
          />
          <AccountSettingContainer
            icon={<EyeIcon className="h-8 w-auto text-text-400" />}
            title="Privacy & sharing"
            content="Please provide personal info"
            link="/"
          />
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default AccountSettings
