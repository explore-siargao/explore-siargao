"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import SignupForm from "@/module/Authentication/components/SignupForm"
import { useRouter } from "next/navigation"

const CreateAccount = () => {
  const router = useRouter()
  return (
    <AuthContainer
      title="Create account using you email"
      onBack={() => router.push("/login")}
    >
      <SignupForm />
    </AuthContainer>
  )
}

export default CreateAccount
