import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"

const NotFound = () => {
  return (
        <div className="w-full h-screen mx-auto text-center">
        <Typography variant="h1">404 | not found</Typography>
          <Link href="/">Go back</Link>
        </div>

  )
}

export default NotFound
