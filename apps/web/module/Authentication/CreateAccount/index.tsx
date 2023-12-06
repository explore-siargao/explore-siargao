"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import SignUpForm from "@/module/Authentication/components/SignUpForm"
import { useRouter } from "next/navigation"

const CreateAccount = () => {
  const router = useRouter()
  return (
    <AuthContainer
      title="Create account using your email"
      onBack={() => router.push("/login")}
    >
      <SignUpForm />
    </AuthContainer>
  )
}

export default CreateAccount
