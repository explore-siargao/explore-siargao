"use client"
import React from "react"
import useVerifySession from "@/common/hooks/useVerifySession"
import { useRouter, usePathname } from "next/navigation"
import useSessionStore from "../store/useSessionStore"
import WholePageLoading from "./WholePageLoading"

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data, isLoading } = useVerifySession()
  const updateSession = useSessionStore((state) => state.update)
  const removeSession = useSessionStore((state) => state.remove)
  
  if (data && !data.error && data.item && data.item.email && !isLoading) {
    updateSession(data.item)
  } else if (data && data.error && !isLoading) {
    const redirect = pathname !== "/" ? `?redirect_to=${pathname}` : ``;
    removeSession()
    router.push(`/login${redirect}`)
  } 

  if (isLoading) {
    return (
      <WholePageLoading/>
    );
  }

  return (
    <>
      {children}
    </>
  )
}

export default AuthGuard
