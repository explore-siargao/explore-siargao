"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import { useParams, useRouter } from "next/navigation"
import { LINK_LOGIN } from "@/common/constants/links"
import SignupSocialForm from "../components/SignupSocialForm"
import { capitalizeFirstLetter } from "@/common/helpers/capitalizeFirstLetter"

const CreateAccountSocial = () => {
  const params = useParams()
  const router = useRouter()
  const capitalizedText = capitalizeFirstLetter(params.social as string)

  return (
    <AuthContainer
      title={`Create account using your ${capitalizedText}`}
      onBack={() => router.push(LINK_LOGIN)}
    >
      <SignupSocialForm />
    </AuthContainer>
  )
}

export default CreateAccountSocial
