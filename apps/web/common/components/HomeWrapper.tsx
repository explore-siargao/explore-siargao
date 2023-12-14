import React from "react"

type Props = {
  children: React.ReactNode
}
const HomeWrapper = ({ children }: Props) => {
  return (
    <div className="my-40 justify-center mx-10 md:px-8">
      {children}
    </div>
  )
}

export default HomeWrapper
