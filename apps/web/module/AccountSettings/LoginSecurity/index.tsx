"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import { LINK_ACCOUNT } from "@/common/constants/links"
import React from "react"
import { Title } from "@/common/components/ui/Title"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import UpdatePassword from "./UpdatePassword"
import DeactivateAccount from "./DeactivateAccount"
import { ACCOUNT, LOGIN_SECURITY } from "@/common/constants"

const LoginSecurity = () => {
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home={ACCOUNT} page={LOGIN_SECURITY} link={LINK_ACCOUNT} />
        <Title>{LOGIN_SECURITY}</Title>
      </div>
      <div className="mt-4">
        <UpdatePassword />
        <DeactivateAccount />
      </div>
    </AccountSettingWrapper>
  )
}

export default LoginSecurity
