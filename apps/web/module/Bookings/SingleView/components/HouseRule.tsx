import { Typography } from '@/common/components/ui/Typography'
import React from 'react'



interface HouseRules {
  title: string;
  rules: string[];
}

const HouseRule: React.FC<HouseRules> = ({ title, rules }) => {

  return (
    <div>
       <Typography fontWeight={"semiBold"} className='px-10'>
            {title}
       </Typography>
       <Typography className='px-10'>
            <ul>
                {rules.map((rule, index) => (
                  // @ts-ignore
                <li className='mt-2' key={index}>{rule.rule}</li>
                ))}
            </ul>
       </Typography>
    </div>
  )
}

export default HouseRule