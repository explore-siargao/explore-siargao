import * as React from "react"

import { cn } from "@/common/helpers/cn"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variants: InputVariants
}
enum InputVariants {
  "danger",
  "warning",
  "success",
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variants, ...props }, ref) => {
    const InputVariantsOption = () => {
      if (variants === InputVariants.warning) {
        return (
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-warning-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-warning-600 bg-warning-100">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-warning-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border-0 p-0 text-warning-700 placeholder:text-warning-400 focus:ring-0 sm:text-sm sm:leading-6 bg-warning-100"
              placeholder=""
            />
          </div>
        )
      } else if (variants === InputVariants.danger) {
        return (
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-error-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-error-600 bg-error-100">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-error-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border-0 p-0 text-warning-700 placeholder:text-error-400 focus:ring-0 sm:text-sm sm:leading-6 bg-error-100"
              placeholder=""
            />
          </div>
        )
      } else if (variants === InputVariants.success) {
        return (
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-success-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-success-600 bg-success-100">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-success-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border-0 p-0 text-success-700 placeholder:text-success-400 focus:ring-0 sm:text-sm sm:leading-6 bg-success-100"
              placeholder=""
            />
          </div>
        )
      } else {
        return (
          <div className="relative rounded-md rounded-b-none px-3 pb-1.5 pt-2.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-gray-600">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="you@example.com"
            />
          </div>
        )
      }
    }
    // return of the whole
    return(InputVariantsOption())
  }
)
Input.displayName = "Input"

export { Input }
