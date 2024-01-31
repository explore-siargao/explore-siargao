import React from "react"

interface IconDescriptionProps {
  icon: React.ElementType
  desc: React.ReactNode
  isStrikeThrough?: boolean
}

const IconDescription: React.FC<IconDescriptionProps> = ({
  icon: Icon,
  desc,
  isStrikeThrough = false
}) => {
  const IconDescriptionStyle = isStrikeThrough
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
