"use client"
import React from "react"
import { WidthWrapper } from "./WidthWrapper"
import { cn } from "@/utils/utils"

type Props = {
  children: React.ReactNode
  className?: string
}
const AccountSettingWrapper = ({ children, className }: Props) => {
  return (
    <WidthWrapper
      width="small"
      className={cn("mt-20 md:mt-32 lg:mt-48", className)}
    >
      {children}
    </WidthWrapper>
  )
}

export default AccountSettingWrapper
