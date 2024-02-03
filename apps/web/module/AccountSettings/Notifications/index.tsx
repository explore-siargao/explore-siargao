"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import OptIn from "./OptIn"

const Notifications = () => {
  const TITLE = "Notifications"
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home="Account" page={TITLE} link={LINK_ACCOUNT} />
        <Title>{TITLE}</Title>
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
