import React from "react"
import { cn } from "../helpers/cn"
import { VariantProps, cva } from "class-variance-authority"

const WidthWrapperVariants = cva(
  "flex flex-col mx-auto w-full max-w-[2520px] justify-center",
  {
    variants: {
      width: {
        primary: "px-4 lg:px-16",
        secondary: "px-4 lg:px-40",
      },
    },
    defaultVariants: {
      width: "primary",
    },
  }
)

export interface WidthWrapperProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof WidthWrapperVariants> {
  children: React.ReactNode
}
const WidthWrapper = React.forwardRef<HTMLDivElement, WidthWrapperProps>(
  ({ className, children, width, ...props }, ref) => {
    return (
      <div className={cn(WidthWrapperVariants({ width, className }))}>
        {children}
      </div>
    )
  }
)
WidthWrapper.displayName = "WidthWrapper"
export { WidthWrapper, WidthWrapperVariants }
