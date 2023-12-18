import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"
const spinnerVariants = cva("font-bold", {
  variants: {
    variant: {
      default: "text-primary-300",
      primary: "text-primary-600",
      danger: "text-error-500",
      warning: "text-warning-500",
      success: "text-success-700",
      secondary: "text-secondary-500",
    },
    size: {
      sm: "w-4 h-4",
      md: "w-8 h-8",
      lg: "w-12 h-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "sm",
  },
})
export interface SpinnerProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof spinnerVariants> {}
const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ variant, className, size }, ref) => {
    return (
      <div
        ref={ref}
        className={`animate-spin border-2 border-current border-t-transparent rounded-full ${cn(
          spinnerVariants({ variant, size, className })
        )}`}
      >
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner, spinnerVariants }
