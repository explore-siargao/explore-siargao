import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"
const typographyVariants = cva("font-bold", {
  variants: {
    variant: {
      p: "text-base",
      h1: "text-3xl font-bold",
      h2: "text-2xl font-bold",
      h3: "text-xl font-bold",
      h4: "text-lg font-bold",
      h5: "text-sm font-bold",
      h6: "text-xs font-bold",
    },
    fontWeight: {
      normal: "font-normal",
      bold: "font-bold",
      thin: "font-thin",
      light: "font-light",
      extralight: "font-extralight",
      semiBold: "font-semibold",
    },
  },
  defaultVariants: {
    variant: "p",
    fontWeight: "normal",
  },
})
export interface TypographyProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof typographyVariants> {
  children: React.ReactNode
}

const Typography = React.forwardRef<HTMLDivElement, TypographyProps>(
  ({ variant, fontWeight, className, children }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(typographyVariants({ variant, fontWeight, className }))}
      >
        {children}
      </p>
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyVariants }
