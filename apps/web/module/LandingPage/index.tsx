"use client"
import React from "react"
import BottomNavBar from "../Authentication/components/BottomNavBar"
import AuthGuard from "@/common/components/AuthGuard"
import Bookings from "../Bookings"

function LandingPage() {
  return (
    <AuthGuard>
      <div className="min-h-screen">
        <Bookings />
        <BottomNavBar />
      </div>
    </AuthGuard>
  )
}

export default LandingPage
