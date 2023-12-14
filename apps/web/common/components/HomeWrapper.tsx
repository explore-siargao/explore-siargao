import React from "react"

type Props = {
  children: React.ReactNode
}
const HomeWrapper = ({ children }: Props) => {
  return (
    <div className="my-40 justify-center mx-5 md:mx-20">
      {children}
    </div>
  )
}

export default HomeWrapper
