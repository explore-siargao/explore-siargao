import React from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/common/helpers/cn"
import { Title } from "@/common/components/ui/Title"

const TitleWrapperProps = cva(
  "flex flex-col mx-auto w-full max-w-[2520px] justify-center",
  {
    variants: {
      size: {
        md: "px-4 2xl:px-40",
        lg: "max-w-full px-4",
      },
    },
    defaultVariants: {
      size: "large",
    },
  }
)

export interface TitleWrapperProps
  extends React.DetailsHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof TitleWrapperProps> {
  children: React.ReactNode
  title: string;
}
const TitleSection = React.forwardRef<HTMLDivElement, TitleWrapperProps>(
  ({ className, children, size, title, ...props }, ref) => {
    return (
      <div className={cn(TitleWrapperProps({ size, className}))}>
        <Title size="medium">{title}</Title>
        {children}
      </div>
    )
  }
)
TitleSection.displayName = "TitleSection"
export { TitleSection, TitleWrapperProps }
