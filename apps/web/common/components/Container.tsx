"use client"
import React from "react"
type Props = {
  children: React.ReactNode
}
const Container = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-primary-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white shadow sm:rounded-2xl">
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Container
