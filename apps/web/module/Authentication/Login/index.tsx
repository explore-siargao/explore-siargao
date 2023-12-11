"use client"
import React, { useEffect } from "react"
import LoginForm from "@/module/Authentication/components/LoginForm"
import AuthContainer from "@/common/components/AuthContainer"
import { useRouter } from "next/navigation"

const Login = () => {
  const router = useRouter()

  return (
    <AuthContainer title="Login or sign up" onBack={() => router.push("/")}>
      <LoginForm />
    </AuthContainer>
  )
}

export default Login
