import { PAYMENT_HISTORY } from "@/common/constants"
import TableTab from "@/module/Host/PaymentHistory/TableTab"

import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${PAYMENT_HISTORY} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const TablePage = () => {
  return <TableTab />
}

export default TablePage