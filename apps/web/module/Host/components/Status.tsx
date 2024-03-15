import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"

const StatusDotVariants = cva("", {
  variants: {
    variant: {
      Success: "bg-green-400",
      Warning: "bg-orange-400",
      Danger: "bg-red-500",
    },
  },
  defaultVariants: {
    variant: "Warning",
  },
})

export interface StatusDotProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    VariantProps<typeof StatusDotVariants> {
  children?: React.ReactNode
}

const StatusDot = React.forwardRef<
  HTMLElement,
  StatusDotProps
>(({ variant, className, children }, ref) => {
  const StatusDotClass = StatusDotVariants({
    variant,
    className,
  })
  return (
    <span
      ref={ref}
      className={cn(
        "rounded-full w-2 h-2 inline-block mr-2",
        StatusDotClass
      )}
    >
      {children}
    </span>
  )
})
StatusDot.displayName = "Status"

export { StatusDot, StatusDotVariants }
