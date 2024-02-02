"use client"
import AccountSettingWrapper from "@/common/components/AccountSettingWrapper"
import React, { useState } from "react"
import { Breadcrumb } from "@/common/components/ui/Breadcrumb"
import { Title } from "@/common/components/ui/Title"
import { LINK_ACCOUNT } from "@/common/constants/links"
import combineClasses from "@/common/helpers/combineClasses"
import Taxpayers from "./Taxpayers"
import TaxDocuments from "./TaxDocuments"
import useSessionStore from "@/common/store/useSessionStore"
import { useRouter } from "next/navigation"
import { E_UserRole } from "@repo/contract"

const Taxes = () => {
  const router = useRouter()
  const session = useSessionStore((state) => state)
  const [tableState, setTableState] = useState(0)

  if (session.role !== E_UserRole.Host) {
    router.push(LINK_ACCOUNT)
  }

  const TITLE = "Taxes"
  let content
  if (tableState === 0) {
    content = (
      <>
        <Taxpayers />
      </>
    )
  } else if (tableState === 1) {
    content = (
      <>
        <TaxDocuments />
      </>
    )
  }
  return (
    <AccountSettingWrapper>
      <div>
        <Breadcrumb home="Account" page={TITLE} link={LINK_ACCOUNT} />
        <Title>{TITLE}</Title>
      </div>
      <div className="hidden sm:block">
        <div className="flex border-b border-b-text-50">
          <button
            className={combineClasses(
              tableState === 0
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(0)}
          >
            Taxpayers
          </button>
          <button
            className={combineClasses(
              tableState === 1
                ? "border-text-900 text-text-900"
                : "border-transparent text-text-500 hover:border-text-300 hover:text-text-700",
              "whitespace-nowrap border-b-2 py-4 px-8 text-sm font-medium"
            )}
            onClick={() => setTableState(1)}
          >
            Tax Documents
          </button>
        </div>
        <div className="mt-6">{content}</div>
      </div>
    </AccountSettingWrapper>
  )
}

export default Taxes
