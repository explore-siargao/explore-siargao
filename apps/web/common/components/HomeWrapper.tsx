import React from "react"

type Props = {
  children: React.ReactNode
}
const HomeWrapper = ({ children }: Props) => {
  return (
    <div className="flex flex-col my-24 lg:my-32 px-4 lg:px-16 mx-auto w-full max-w-[2520px]">
      {children}
    </div>
  )
}

export default HomeWrapper
