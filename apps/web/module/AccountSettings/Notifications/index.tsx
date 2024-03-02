"use client"
import AccountSettingWrapper from "@/module/AccountSettings/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import OptIn from "./OptIn"
import { ACCOUNT, NOTIFICATIONS } from "@/common/constants"

const Notifications = () => {
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home={ACCOUNT} page={NOTIFICATIONS} link={LINK_ACCOUNT} />
        <Title>{NOTIFICATIONS}</Title>
      </div>
      <div className="mt-4">
        <div className="divide-y">
          <OptIn />
        </div>
      </div>
    </AccountSettingWrapper>
  )
}

export default Notifications
