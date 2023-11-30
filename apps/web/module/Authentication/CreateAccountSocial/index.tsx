"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import { useParams, useRouter } from "next/navigation"
import { LINK_LOGIN } from "@/common/constants/links"
import { capitalizeFirstLetter } from "@/common/helpers/capitalizeFirstLetter"
import SignupForm from "@/module/Authentication/components/SignupForm"

const CreateAccountSocial = () => {
  const params = useParams()
  const router = useRouter()
  const capitalizedText = capitalizeFirstLetter(params.social as string)

  return (
    <AuthContainer
      title={`Create account using your ${capitalizedText}`}
      onBack={() => router.push(LINK_LOGIN)}
    >
      <SignupForm isSocial={true} />
    </AuthContainer>
  )
}

export default CreateAccountSocial
