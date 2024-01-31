import React from "react"

interface IconTitleDescriptionProps {
  icon: React.ElementType
  title: string
  desc: string
}

const IconTitleDescription: React.FC<IconTitleDescriptionProps> = ({
  icon: Icon,
  title,
  desc,
}) => {
  return (
    <div className="flex items-center mb-2  gap-5">
      {Icon && <Icon className="w-6 h-6" />}
      <div className="flex flex-col mt-4">
        <div className="flex font-semibold">{title}</div>
        <div className="flex text-sm text-gray-500">{desc}</div>
      </div>
    </div>
  )
}

export default IconTitleDescription
