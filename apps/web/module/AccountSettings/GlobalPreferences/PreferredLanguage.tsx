import { Typography } from "@/common/components/ui/Typography"
import React from "react"
import useSessionStore from "../../../common/store/useSessionStore.ts"

const PreferredLanguage = () => {
  const language = useSessionStore((state) => state).personalInfo.language
  return (
    <div className="flex justify-between py-5">
      <div>
        <Typography variant="p">Preferred Language</Typography>
        <Typography fontWeight="light">{language}</Typography>
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
