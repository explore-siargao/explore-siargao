"use client"
import { useRouter } from "next/navigation"
import * as React from "react"

export interface ToastProps
  extends React.DetailsHTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  title: string
  content: string
  link: string
  id?: string
}

const AccountSettingContainer = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, icon, title, id, content, link, ...props }, ref) => {
    const router = useRouter()
    const handleClick = () => {
      router.push(link)
    }
    return (
      <div
        className="grid p-4 shadow-lg rounded-2xl gap-5 content-between select-none"
        id={id}
        ref={ref}
        {...props}
        onClick={() => {
          handleClick()
        }}
        aria-hidden="true"
      >
        {icon}
        <div>
          <h1 className="font-semibold">{title}</h1>
          <span className="text-text-300 text-sm">{content}</span>
        </div>
      </div>
    )
  }
)
AccountSettingContainer.displayName = "AccountSettingContainer"

export { AccountSettingContainer }
