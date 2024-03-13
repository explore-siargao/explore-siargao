import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"

const PaymentHistoryStatusVariants = cva("", {
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

export interface PaymentHistoryStatusProps
  extends React.DetailsHTMLAttributes<HTMLElement>,
    VariantProps<typeof PaymentHistoryStatusVariants> {
  children?: React.ReactNode
}

const PaymentHistoryStatus = React.forwardRef<HTMLElement, PaymentHistoryStatusProps>(
  ({ variant, className, children }, ref) => {
    const PaymentHistoryStatusClass = PaymentHistoryStatusVariants({ variant, className })
    return (
      <span
        ref={ref}
        className={cn(
          "rounded-full w-2 h-2 inline-block mr-2",
          PaymentHistoryStatusClass
        )}
      >
        {children}
      </span>
    )
  }
)
PaymentHistoryStatus.displayName = "Status"

export { PaymentHistoryStatus, PaymentHistoryStatusVariants }
