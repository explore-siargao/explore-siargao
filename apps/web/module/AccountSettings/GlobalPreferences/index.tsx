"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT_SETTINGS } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import useSessionStore from "@/common/store/useSessionStore"
import PreferredLanguage from "./PreferredLanguage"
import PreferredCurrency from "./PreferredCurrency"

const GlobalPreferences = () => {
  const session = useSessionStore((state) => state)
  const personalInfo = session?.personalInfo
  const TITLE = "Global Preferences"
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home="Account"
          page={TITLE}
          link={LINK_ACCOUNT_SETTINGS}
        />
        <Title>{TITLE}</Title>
      </div>
      <div className="mt-4">
        <div className="divide-y">
          <PreferredLanguage/>
          <PreferredCurrency/>
        </div>
      </div>
    </AccountSettingWrapper>
  )
}

export default GlobalPreferences
