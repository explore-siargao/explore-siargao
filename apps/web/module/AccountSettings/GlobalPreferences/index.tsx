"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import PreferredLanguage from "./PreferredLanguage"
import PreferredCurrency from "./PreferredCurrency"
import { ACCOUNT, GLOBAL_PREFERENCES } from "@/common/constants"

const GlobalPreferences = () => {
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home={ACCOUNT}
          page={GLOBAL_PREFERENCES}
          link={LINK_ACCOUNT}
        />
        <Title>{GLOBAL_PREFERENCES}</Title>
      </div>
      <div className="mt-4">
        <div className="divide-y">
          <PreferredLanguage />
          <PreferredCurrency />
        </div>
      </div>
    </AccountSettingWrapper>
  )
}

export default GlobalPreferences
