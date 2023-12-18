"use client"
import React from "react"
import { WidthWrapper } from "./WidthWrapper"

type Props = {
  children: React.ReactNode
}
const AccountSettingWrapper = ({ children }: Props) => {
  return (
    <WidthWrapper width={"secondary"} className="my-24 lg:my-32">
      {children}
    </WidthWrapper>
  )
}

export default AccountSettingWrapper
