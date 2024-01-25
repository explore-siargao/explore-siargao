"use client"
import React from "react"
import BottomNavBar from "../Authentication/components/BottomNavBar"
import AuthGuard from "@/common/components/AuthGuard"
import Bookings from "../Bookings"

function LandingPage() {
  return (
    <AuthGuard>
      <Bookings />
      <BottomNavBar />
    </AuthGuard>
  )
}

export default LandingPage
