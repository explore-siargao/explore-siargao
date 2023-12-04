"use client"
import React from "react"

type Props = {
  children: React.ReactNode
}
const AccountSettingWrapper = ({ children }: Props) => {
  return (
    <div className="my-40 justify-center sm:mx-auto sm:w-full sm:max-w-[1000px]">
      {children}
    </div>
  )
}

export default AccountSettingWrapper
