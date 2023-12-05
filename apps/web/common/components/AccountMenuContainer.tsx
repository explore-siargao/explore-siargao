"use client"
import Link from "next/link"
import { cn } from "@/common/helpers/cn"
import * as React from "react"

type Props = {
  title: string
  icon: React.ReactNode
  content: string
  link: string
  id?: string
  className?: string
}

const AccountMenuContainer = 
  ({ className, icon, title, content, link }: Props) => {
    return (
      <Link
        className={cn(`grid p-4 rounded-2xl gap-5 content-between select-none drop-shadow-xl border hover:shadow-lg transition`, className)}
        href={link}
      >
        {icon}
        <div>
          <h1 className="font-semibold">{title}</h1>
          <span className="text-text-300 text-sm">{content}</span>
        </div>
      </Link>
    )
  }

AccountMenuContainer.displayName = "AccountMenuContainer"

export { AccountMenuContainer }
