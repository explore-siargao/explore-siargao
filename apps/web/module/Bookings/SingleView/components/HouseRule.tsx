import { Typography } from "@/common/components/ui/Typography"
import React from "react"

interface HouseRules {
  title: string
  rules: any
}

const HouseRule: React.FC<HouseRules> = ({ title, rules }) => {
  return (
    <div>
      <Typography fontWeight={"semiBold"} className="px-10">
        {title}
      </Typography>
      <ul>
        {rules.map((rule: any) => (
          <li className="mt-2" key={rule.rule.id}>
            <Typography className="px-10">{rule.rule}</Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HouseRule
