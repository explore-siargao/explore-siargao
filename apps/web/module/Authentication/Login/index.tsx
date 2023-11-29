"use client"
import React from "react"
import LoginForm from "@/module/Authentication/components/LoginForm"
import AuthContainer from "@/common/components/AuthContainer"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"

const Login = () => {
  const router = useRouter()
  const { data: session, status } = useSession()
  console.log("dsds", session)
  return (
    <AuthContainer title="Login or sign up" onBack={() => router.push("/")}>
      <LoginForm />
    </AuthContainer>
  )
}

export default Login
