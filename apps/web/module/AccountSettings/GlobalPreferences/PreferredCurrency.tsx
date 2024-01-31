import { Typography } from '@/common/components/ui/Typography'
import React from 'react'
import useSessionStore from "../../../common/store/useSessionStore.ts"

const PreferredCurrency = () => {
  const currency = useSessionStore((state) => state).personalInfo.currency
  return (
    <div className="flex justify-between py-5">
      <div>
        <Typography variant="p">Preferred Currency</Typography>
        <Typography fontWeight="light">
          {currency}
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