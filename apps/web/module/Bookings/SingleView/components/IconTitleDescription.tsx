import { LucideProps, LucideWifi } from "lucide-react"
import React from "react"

interface IconTitleDescriptionProps {
  icon: string,
  title: string
  description?: string
  className?: string
}

const iconMap = {
  wifi: (props?: LucideProps) => <LucideWifi {...props} />
}

const IconTitleDescription: React.FC<IconTitleDescriptionProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div className={`flex items-center mb-2 gap-5 ${className}`}>
      {icon && iconMap["wifi"]()}
      <div className="flex flex-col mt-1">
        <div className="flex">{title}</div>
        <div className="flex text-sm text-text-300">{description}</div>
      </div>
    </div>
  )
}

export default IconTitleDescription
