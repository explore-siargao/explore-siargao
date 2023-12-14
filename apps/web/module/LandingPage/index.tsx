"use client"
import React from "react"
import Header from "./components/Header"
import BottomNavBar from "../Authentication/components/BottomNavBar"
import Bookings from "../Bookings"

function LandingPage() {
  return (
    <>
      <Header />
      <Bookings />
      <BottomNavBar />
    </>
  )
}

export default LandingPage
