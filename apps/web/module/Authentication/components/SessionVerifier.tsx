"use client"
import React from "react"
import { signOut, useSession } from "next-auth/react"
import useVerifySignIn from "@/common/hooks/useVerifySignIn"
import { useRouter, useParams, useSearchParams } from "next/navigation"
import toast from "react-hot-toast"
import WholePageLoading from "@/common/components/WholePageLoading"
import useOptMessageStore from "@/common/store/useOptMessageStore"
import { stat } from "fs"

const SessionVerifier = () => {
  const router = useRouter()
  const params = useParams()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirect_to")
  const { data: session } = useSession()
  const { data } = useVerifySignIn()
  const setIsOpen = useOptMessageStore((state)=>state.setIsOpen)
  const isOpen = useOptMessageStore((state)=>state.isOpen)
  console.log(isOpen)
  if (!session || (session && data && data.item)) {
    router.push(redirectTo ? redirectTo : "/")
    setIsOpen()
  } else if (session && data?.error) {
    // Adding id 1 to prevent duplicate toast
    toast.error(data.message, { id: "1", duration: 5000 })
    signOut({ redirect: false })
    router.push("/login")
  } else if (
    session &&
    data &&
    !data.error &&
    data.action.type === "SOCIAL_REGISTER" &&
    data.action.description === params.type
  ) {
    router.push(`/create-account/${params.type}`)
  }
  return <WholePageLoading />
}

export default SessionVerifier
