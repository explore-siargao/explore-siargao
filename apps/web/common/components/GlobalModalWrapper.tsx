"use client"
import OptMessageModal from "@/module/Authentication/modal/OptMessageModal"
import React from "react"

const GlobalModalWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      {/* Add all auth modal here */}
      <OptMessageModal />
    </>
  )
}

export default GlobalModalWrapper
