"use client"
import React from "react"
import useVerifySession from "@/common/hooks/useVerifySession"
import { useRouter, usePathname } from "next/navigation"
import useSessionStore from "../store/useSessionStore"
import { T_Session } from "@repo/contract"
import { Spinner } from "./ui/Spinner"

const AUTH_GUARDED_ROUTES = ["/account-settings"]

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const pathname = usePathname()
  const { data, isLoading } = useVerifySession()
  const updateSession = useSessionStore((state) => state.update)
  const removeSession = useSessionStore((state) => state.remove)

  const isRouteAuthGuarded =
    AUTH_GUARDED_ROUTES.filter((route) => pathname.includes(route)).length > 0

  if (data && !data.error && data.item && data.item.email && !isLoading) {
    updateSession(data?.item as T_Session)
  } else if (data?.error && !isLoading && isRouteAuthGuarded) {
    const redirect = pathname !== "/" ? `?redirect_to=${pathname}` : ``
    removeSession()
    router.push(`/login${redirect}`)
  }

  if (isLoading) {
    return <Spinner middle />
  }

  return <>{children}</>
}

export default AuthGuard
