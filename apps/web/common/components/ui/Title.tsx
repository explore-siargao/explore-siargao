import * as React from "react"
import { cn } from "@/common/helpers/cn"

export interface TitleProps
  extends React.DetailsHTMLAttributes<HTMLDivElement> {
  children: string
}
const Title = React.forwardRef<HTMLDivElement, TitleProps>(
  ({ className, children }, ref) => {
    return (
      <p className={cn("text-4xl font-bold my-3.5", className)}>{children}</p>
    )
  }
)

export default Title
