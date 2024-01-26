import { Typography } from '@/common/components/ui/Typography'
import React from 'react'

const PreferredCurrency = () => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <Typography variant="p">Preferred Currency</Typography>
        <Typography fontWeight="light">
          Philippine Peso
        </Typography>
      </div>
      <button
        disabled
        className="underline self-start select-none disabled:opacity-40"
      >
        Edit
      </button>
    </div>
  )
}

export default PreferredCurrency