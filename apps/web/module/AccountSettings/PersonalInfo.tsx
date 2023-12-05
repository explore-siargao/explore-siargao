"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { AccountSettingContainer } from "@/common/components/ui/AccountSettingContainer"
import { Input } from "@/common/components/ui/Input"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import Header from "@/module/LandingPage/components/Header"
import { ChevronRightIcon } from "@heroicons/react/20/solid"
import React, { useState } from "react"
import LegalName from "./components/LegalName"
import EmailAddress from "./components/EmailAddress"
import PhoneNumber from "./components/PhoneNumber"
import GovernmentId from "./components/GovernmentId"
import Address from "./components/Address"
import EmergencyContact from "./components/EmergencyContact"
import Title from "@/common/components/ui/Title"

const PersonalInfo = () => {
  return (
    <>
      <Header />
      <AccountSettingWrapper>
        <div className="mb-10">
          <div className="flex items-center text-text-400">
            <a
              href={LINK_ACCOUNT_SETTINGS}
              className="font-semibold hover:underline"
            >
              Account
            </a>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 mx-3"
              aria-hidden="true"
            />
            <p className="font-medium">Personal info</p>
          </div>
          <h1 className="text-4xl font-bold mt-3.5"></h1>
          <Title>Personal info</Title>
        </div>
        <div className="divide-y">
          <LegalName />
          <EmailAddress />
          <PhoneNumber />
          <GovernmentId />
          <Address />
          <EmergencyContact />
        </div>
      </AccountSettingWrapper>
    </>
  )
}

export default PersonalInfo
