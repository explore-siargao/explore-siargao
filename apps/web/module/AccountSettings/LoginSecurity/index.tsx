"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { ACCOUNT } from "@/common/constants"
import UpdatePassword from "./UpdatePassword"
import DeactivateAccount from "./DeactivateAccount"

const LoginSecurity = () => {
  const TITLE = "Login & Security"
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb
          home={ACCOUNT}
          page={TITLE}
          link={LINK_ACCOUNT}
        />
        <Title>{TITLE}</Title>
      </div>
      <div className="mt-4">
        <UpdatePassword/>
        <DeactivateAccount />
      </div>
    </AccountSettingWrapper>
  )
}

export default LoginSecurity
