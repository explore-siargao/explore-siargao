"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import { useRouter } from "next/navigation"
import { LINK_LOGIN } from "@/common/constants/links"
import SignupSocialForm from "../components/SignupSocialForm"

const CreateAccountSocial = () => {
  const router = useRouter()
  return (
    <AuthContainer
      title="Create account using your Google"
      onBack={() => router.push(LINK_LOGIN)}
    >
      <SignupSocialForm />
    </AuthContainer>
  )
}

export default CreateAccountSocial
