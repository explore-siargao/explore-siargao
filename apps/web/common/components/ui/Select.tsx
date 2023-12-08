import * as React from "react"
import { cn } from "@/common/helpers/cn"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  SelectId: string
  SelectValue?: string
}
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, SelectId, SelectValue, children, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          id={SelectId}
          ref={ref}
          className={cn(
            "w-full rounded-md border-text-50 px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-text-200 focus:z-10 focus:border-none focus-within:ring-inset focus:ring-2 focus:ring-text-600",
            className
          )}
          defaultValue={SelectValue}
          {...props}
        >
          {children}
        </select>
      </div>
    )
  }
)
Select.displayName = "Select"

export { Select }
