import { useParams } from "next/navigation"
import { Typography } from "@/common/components/ui/Typography"
import { format } from "date-fns"
import formatCurrency from "@/common/helpers/formatCurrency"
import { WidthWrapper } from "@/common/components/WidthWrapper"
import useGetThisMonthEarnings from "../hooks/useGetThisMonthEarnings"
import Chart, { ChartType } from "./components/Chart"
import Tabs from "@/common/components/Tabs"
import { BarChart2, Table } from "lucide-react"

const months = {
  january: 0,
  february: 1,
  march: 2,
  april: 3,
  may: 4,
  june: 5,
  july: 6,
  august: 7,
  september: 8,
  october: 9,
  november: 10,
  december: 11,
}

const EarningDetails = () => {
  const { type, date } = useParams<{ type: string; date: string }>()
  const [monthName, year] = date.toLowerCase().split("-")

  let dateObject = ""

  // @ts-expect-error
  const month = months[monthName]
  if (month !== undefined) {
    // @ts-expect-error
    dateObject = new Date(year, month)
  }

  const tabs = [
    {
      name: "Graph",
      icon: <BarChart2 className="h-4 w-4" />,
      link: `/hosting/earnings/${monthName}-${year}/graph`,
      isSelected: type === "graph",
    },
    {
      name: "Table",
      icon: <Table className="h-4 w-4" />,
      link: `/hosting/earnings/${monthName}-${year}/table`,
      isSelected: type === "table",
    },
  ]

  const { data: thisMonth, isPending: thisMonthIsPending } =
    useGetThisMonthEarnings()
  const summaryData = [
    ["Gross earnings", "Adjustments", "Service fee", "Taxes withheld"],
    [
      formatCurrency(94800, "Philippines"),
      formatCurrency(
        thisMonth?.item?.yearToDateSummary?.adjustment ?? "",
        "Philippines"
      ),
      formatCurrency(
        thisMonth?.item?.yearToDateSummary?.serviceFee ?? "",
        "Philippines"
      ),
      formatCurrency(
        thisMonth?.item?.yearToDateSummary?.tax ?? "",
        "Philippines"
      ),
    ],
  ]

  return (
    <WidthWrapper
      width="medium"
      className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-0 mt-28 md:mt-36"
    >
      <div className="lg:col-span-3">
        <Typography variant="h1" fontWeight="semibold">
          Earnings for {format(new Date(dateObject), "MMMM yyyy")}
        </Typography>
        {thisMonth?.item && thisMonth.item.days.length > 0 ? (
          <>
            <div className="mt-3 lg:pr-[89px]">
              <Tabs tabs={tabs}></Tabs>
            </div>
            {type === "graph" ? (
              <Chart
                data={thisMonth.item.days}
                isPending={thisMonthIsPending}
                width="100%"
                height={400}
                type={ChartType["this-month"]}
                earningType="daily"
              />
            ) : (
              <Typography fontWeight="semibold" variant="p" className="mt-8">
                This is table view of earnings.
              </Typography>
            )}
          </>
        ) : (
          <>
            <Typography fontWeight="semibold" variant="p" className="mt-2">
              No earnings at the moment.
            </Typography>
          </>
        )}
      </div>
      <div className="col-span-1 relative">
        <div className="bg-white rounded-lg shadow-lg p-8 sticky top-36">
          <Typography variant="h2" fontWeight="semibold">
            Summary
          </Typography>
          <Typography variant="p" className="text-gray-400 pb-4">
            {format(new Date(dateObject), "MMMM d")} -{" "}
            {format(
              // @ts-expect-error
              new Date(dateObject.getFullYear(), dateObject.getMonth() + 1, 0),
              "MMMM d, yyyy"
            )}
          </Typography>

          <div className="flex gap-4 justify-between pb-4">
            {summaryData.map((column) => (
              <div key={`column-${column}`} className="flex flex-col">
                {column.map((item) => (
                  <Typography
                    variant="p"
                    fontWeight="semibold"
                    key={`column-${column}-item-${item}`}
                    className="pt-2 text-sm"
                  >
                    {item}
                  </Typography>
                ))}
              </div>
            ))}
          </div>

          <div className="bottom-0 border-t flex gap-4 justify-between">
            <Typography className="pt-4" variant="p" fontWeight="semibold">
              Total
            </Typography>
            <Typography
              className="pt-4 text-sm"
              variant="p"
              fontWeight="semibold"
            >
              {formatCurrency(97800, "Philippines")}
            </Typography>
          </div>
        </div>
      </div>
    </WidthWrapper>
  )
}

export default EarningDetails
