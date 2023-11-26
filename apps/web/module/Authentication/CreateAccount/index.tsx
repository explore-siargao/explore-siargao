"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import SignupInputs from "@/common/components/SignupInputs"
import { useRouter } from "next/navigation"

const CreateAccount = () => {
  const router = useRouter()
  return (
    <AuthContainer
      title="Create account using you email"
      onBack={() => router.push("/")}
    >
      <SignupInputs />
    </AuthContainer>
  )
}

export default CreateAccount
