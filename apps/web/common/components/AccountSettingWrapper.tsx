"use client"
import React from "react"
import { WidthWrapper } from "./WidthWrapper"

type Props = {
  children: React.ReactNode
}
const AccountSettingWrapper = ({ children }: Props) => {
  return (
    <WidthWrapper width="small" className="mt-20 md:mt-32 lg:mt-48">
      {children}
    </WidthWrapper>
  )
}

export default AccountSettingWrapper
