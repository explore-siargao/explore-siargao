import React from "react"
import { LucideProps, LucideWifi } from "lucide-react"

type T_IconDescriptionProps = {
  icon: string,
  description: string,
  isNotIncluded: boolean,
}

const iconMap = {
  wifi: (props?: LucideProps) => <LucideWifi {...props} />
}

const IconDescription: React.FC<T_IconDescriptionProps> = ({
  icon,
  description,
  isNotIncluded = false,
}) => {
  const IconDescriptionStyle = isNotIncluded
    ? { textDecoration: "line-through" }
    : {}

  return (
    <div className="flex items-center mb-5 gap-5">
      {icon && iconMap["wifi"]()}
      <div className="flex" style={IconDescriptionStyle}>
        {description}
      </div>
    </div>
  )
}

export default IconDescription
