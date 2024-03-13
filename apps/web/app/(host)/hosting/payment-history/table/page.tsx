import { PAYMENT_HISTORY } from "@/common/constants"
import Table from "@/module/Host/PaymentHistory/components/Table"
import { APP_NAME } from "@repo/constants"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: `${PAYMENT_HISTORY} - ${APP_NAME}`,
  description: `Generated by ${APP_NAME}`,
}

const GraphPage = () => {
  return <Table />
}

export default GraphPage