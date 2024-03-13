import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"

const StatusVariants = cva("", {
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

export interface HostListingStatusProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    VariantProps<typeof StatusVariants> {
  children?: React.ReactNode
}

const Status = React.forwardRef<HTMLElement, HostListingStatusProps>(
  ({ variant, className, children }, ref) => {
    const PaymentStatusClass = StatusVariants({ variant, className })
    return (
      <span
        ref={ref}
        className={cn(
          "rounded-full w-2 h-2 inline-block mr-2",
          PaymentStatusClass
        )}
      >
        {children}
      </span>
    )
  }
)
Status.displayName = "Status"

export { Status, StatusVariants }
