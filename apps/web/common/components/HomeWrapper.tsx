import React from "react"
import { cn } from "../helpers/cn"

export interface Props extends React.DetailsHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}
const HomeWrapper = React.forwardRef<HTMLDivElement, Props>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex flex-col my-24 lg:my-32 px-4 lg:px-16 mx-auto w-full max-w-[2520px]",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

export default HomeWrapper
