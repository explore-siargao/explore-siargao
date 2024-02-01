import React from "react"

interface IconDescriptionProps {
  icon: React.ElementType
  desc: React.ReactNode
  isNotIncluded?: boolean
}

const IconDescription: React.FC<IconDescriptionProps> = ({
  icon: Icon,
  desc,
  isNotIncluded = false,
}) => {
  const IconDescriptionStyle = isNotIncluded
    ? { textDecoration: "line-through" }
    : {}

  return (
    <div className="flex items-center mb-5 gap-5">
      {Icon && <Icon className="w-6 h-6" />}
      <div className="flex" style={IconDescriptionStyle}>
        {desc}
      </div>
    </div>
  )
}

export default IconDescription
