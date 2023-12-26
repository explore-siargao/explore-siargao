"use client"
import React from "react"
import useVerifySession from "@/common/hooks/useVerifySession"
import { useRouter, usePathname } from "next/navigation"
import useSessionStore from "../store/useSessionStore"
import WholePageLoading from "./WholePageLoading"
import { T_Session } from "@repo/contract"

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data, isLoading } = useVerifySession()
  const updateSession = useSessionStore((state) => state.update)
  const removeSession = useSessionStore((state) => state.remove)

  if (data && !data.error && data.item && data.item.email && !isLoading) {
    updateSession(data?.item as T_Session)
  } else if (data?.error && !isLoading) {
    const redirect = pathname !== "/" ? `?redirect_to=${pathname}` : ``
    removeSession()
    router.push(`/login${redirect}`)
  }

  if (isLoading) {
    return <WholePageLoading />
  }

  return <>{children}</>
}

export default AuthGuard
