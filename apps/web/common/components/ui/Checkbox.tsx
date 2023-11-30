import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/common/helpers/cn"

const checkboxVariants = cva(
  "rounded border-gray-400 text-secondary-600 focus:ring-transparent  tracking-tight",
  {
    variants: {
      size: {
        sm: "h-6 w-6 ",
        md: "h-7 w-7",
        lg: "h-10 w-10",
      },
      textSize: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-sm",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      size: "sm",
      textSize: "xs",
    },
  }
)

export interface ToastProps
  extends React.DetailsHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  text: string
  checkboxId: string
}

const Checkbox = React.forwardRef<HTMLInputElement, ToastProps>(
  ({ className, size, children, checkboxId, text, ...props }, ref) => {
    return (
      <div className="relative flex items-start mt-4">
        <div className="flex h-6 items-center">
          <input
            id={checkboxId}
            type="checkbox"
            className={cn(checkboxVariants({ size, className }))}
          />
        </div>
        <div className="ml-3 leading-6">
          <label
            htmlFor={checkboxId}
            className={cn(checkboxVariants({ size }), "text-gray-500")}
          >
            {text}
          </label>
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox, checkboxVariants }
