"use client"
import React from "react"
import LoginForm from "@/module/Authentication/components/LoginForm"
import AuthContainer from "@/common/components/AuthContainer"
import { useRouter } from "next/navigation"
import BottomNavBar from "../components/BottomNavBar"

const Login = () => {
  const router = useRouter()
  return (
    <AuthContainer title="Login or sign up" onBack={() => router.push("/")}>
      <LoginForm />
      <BottomNavBar />
    </AuthContainer>
  )
}

export default Login
