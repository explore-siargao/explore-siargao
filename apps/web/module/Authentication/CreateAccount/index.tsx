"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import SignUpForm from "@/module/Authentication/components/SignUpForm"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import PreSignUpForm from "../components/PreSignUpForm"
import useGlobalInputEmail from "../store/useGlobalInputEmail"

const CreateAccount = () => {
  const router = useRouter()
  const { data: session } = useSession()
  const createAccountEmail = useGlobalInputEmail((state) => state.email)

  return (
    <AuthContainer
      title="Create account using your email"
      onBack={() => router.push("/login")}
    >
      {session || createAccountEmail ? <SignUpForm /> : <PreSignUpForm/>}
    </AuthContainer>
  )
}

export default CreateAccount
