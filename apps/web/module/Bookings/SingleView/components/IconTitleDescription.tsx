import React from "react"

interface IconTitleDescriptionProps {
  icon: React.ElementType
  title: string
  desc?: string
  className?: string
}

const IconTitleDescription: React.FC<IconTitleDescriptionProps> = ({
  icon: Icon,
  title,
  desc,
  className,
}) => {
  return (
    <div className={`flex items-center mb-2 gap-5 ${className}`}>
      {Icon && <Icon className="w-6 h-6" />}
      <div className="flex flex-col mt-1">
        <div className="flex">{title}</div>
        <div className="flex text-sm text-text-300">{desc}</div>
      </div>
    </div>
  )
}

export default IconTitleDescription
