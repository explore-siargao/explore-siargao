import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/common/helpers/cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-900 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary-600 text-white hover:bg-primary-700 focus:ring-2 focus:ring-offset-2 focus:ring-primary-300",
        danger:
          "bg-error-500 text-white hover:bg-error-500 focus:ring-2 focus:ring-offset-2 focus:ring-error-300",
        warning:
          "bg-warning-500 text-white hover:bg-warning-600 focus:ring-2 focus:ring-offset-2 focus:ring-warning-300",
        success:
          "bg-success-500 text-white hover:bg-success-600 focus:ring-2 focus:ring-offset-2 focus:ring-success-300",
        outline:
          "border border-primary-600 bg-transparent hover:bg-primary-600 hover:text-white",
        secondary:
          "bg-accent text-white hover:bg-accent/80 focus:ring-2 focus:ring-offset-2 focus:ring-accent/60",
        ghost: "hover:bg-accent/80 hover:text-black",
        link: "text-primary-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  imagePosition?: Position
  icon?: React.ReactNode
}
enum Position {
  "end",
  "start",
}
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      icon,
      imagePosition,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {imagePosition === Position.start ? icon : null}
        {children}
        {imagePosition === Position.end ? icon : null}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
