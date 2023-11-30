import * as React from "react"
import { cn } from "@/common/helpers/cn"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputId: string
  inputLabel: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, inputId, inputLabel, ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative rounded-md px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-text-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-text-600",
          className
        )}
      >
        <label
          htmlFor={inputId}
          className="block text-xs font-medium text-text-900"
        >
          {inputLabel}
        </label>
        <input
          type={type}
          id={inputId}
          className="block w-full border-0 p-0 text-text-900 placeholder:text-text-400 focus:ring-0 sm:text-sm sm:leading-6 bg-transparent disabled:opacity-50"
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
