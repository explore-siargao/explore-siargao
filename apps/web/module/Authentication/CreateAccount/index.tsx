"use client"
import React from "react"
import AuthContainer from "@/common/components/AuthContainer"
import SignupInputs from "@/common/components/SignupInputs"
import { useRouter } from "next/navigation"
import { Checkbox } from "@/common/components/ui/Checkbox"

const CreateAccount = () => {
  const router = useRouter()
  return (
    <AuthContainer
      title="Create account using you email"
      onBack={() => router.push("/")}
    >
      <SignupInputs />
      <Checkbox checkboxId="IDKOTO" text="I don’t want to receive marketing messages from Explore Siargao" />
    </AuthContainer>
  )
}

export default CreateAccount
