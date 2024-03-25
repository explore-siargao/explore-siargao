import React from "react"
import { Typography } from "@/common/components/ui/Typography"
import Link from "next/link"
import { Button } from "@/common/components/ui/Button"
import Image from "next/image"
import Logo from "@/common/assets/logo.png"
import { APP_NAME } from "@repo/constants"

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "95vh",
        overflow: "hidden",
      }}
    >
      <div
        className="mt-10"
        style={{ textAlign: "center", overflow: "hidden" }}
      >
        <Image
          className="h-12 w-auto mx-auto mb-5"
          src={Logo}
          width={500}
          height={700}
          alt={APP_NAME}
        />
        <Typography variant="h1" fontWeight="semibold">
          404 - Page Not Found
        </Typography>
        <Typography>
          Sorry, the page you're looking for does not exist.
        </Typography>
        <Link href="/">
          <Button variant="primary" className="mt-10">
            Go back
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound
