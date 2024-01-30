import * as React from "react"
import { cn } from "@/common/helpers/cn"
import { VariantProps, cva } from "class-variance-authority"
import { Typography } from "./Typography"
const titleVariants = cva("font-semibold", {
  variants: {
    size: {
      default: "text-4xl my-3.5",
      sub: "text-xl",
      ContentTitle: "text-lg",
    },
  },
  defaultVariants: {
    size: "default",
  },
})
export interface TitleProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof titleVariants> {
  children: string
}
const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ className, size, children }, ref) => {
    return (
      <Typography className={cn(titleVariants({ size, className }))}>
        {children} 
      </Typography>
    )
  }
)
Title.displayName = "Title"

export { Title, titleVariants }
