import { Typography } from "@/common/components/ui/Typography"
import React from "react"
interface Rules{
  id:number,
  rule:string
}
interface ThingsToKnowProps {
  title: string
  rules: Rules[]
}

const ThingsToKnow = ({ title, rules }:ThingsToKnowProps) => {
  return (
    <div>
      <Typography fontWeight={"semiBold"} className="px-1">
        {title}
      </Typography>
      <ul>
        {rules.map((rule: any) => (
          <li className="mt-2" key={rule.rule.id}>
            <Typography className="px-1">{rule.rule}</Typography>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ThingsToKnow
