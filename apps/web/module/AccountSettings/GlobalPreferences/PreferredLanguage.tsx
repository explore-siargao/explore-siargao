import { Typography } from '@/common/components/ui/Typography'
import React from 'react'

const PreferredLanguage = () => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <Typography variant="p">Preferred Language</Typography>
        <Typography fontWeight="light">
          English
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

export default PreferredLanguage