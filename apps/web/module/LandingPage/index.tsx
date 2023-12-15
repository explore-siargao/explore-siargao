"use client"
import React from "react"
import BottomNavBar from "../Authentication/components/BottomNavBar"
import Bookings from "../Bookings"

function LandingPage() {
  return (
    <>
      <Bookings />
      <BottomNavBar />
    </>
  )
}

export default LandingPage
