"use client"
import React from "react"
import LoginInputs from "@/common/components/LoginInputs"
import AuthContainer from "@/common/components/AuthContainer"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()
  return (
    <AuthContainer title="Login or sign up" onBack={() => router.push("/")}>
      <LoginInputs />
    </AuthContainer>
  )
}

export default Login
