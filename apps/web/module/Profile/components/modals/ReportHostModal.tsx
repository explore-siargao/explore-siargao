import ModalContainer from "@/common/components/ModalContainer"
import { ReportHostModalProps } from "../../types/ReportHostModal"
import { Typography } from "@/common/components/ui/Typography"
import { Button } from "@/common/components/ui/Button"
import useReportHostStore from "@/common/store/useReportHostStore"
import { useEffect } from "react"
import { APP_NAME } from "@repo/constants"

const reportArr = [
  {
    index: 0,
    name: "I think they're scamming or spamming me",
    descriptions: [
      {
        reason: "They asked me to pay outside of " + APP_NAME,
        descSample: "Ex: Wire transfer, cash, bank transfer",
        descList: [
          "Bank or wire transfer",
          "Credit or debit card",
          "Cash",
          "Paypal",
          "Money Gram",
          "Western Union",
        ],
        displayTitle: "How did they ask you to pay?",
      },
      {
        reason: "They asked me to communicate outside of " + APP_NAME,
        descSample: "Ex: Email, phone, instant message app",
        descList: [
          "Photos",
          "Description",
          "House rules",
          APP_NAME + " message",
        ],
        displayTitle: "Where did they share their contact info?",
      },
      {
        reason: "They advertised or solicited something",
        descSample: "Ex: Other booking websites, hosting services",
        descList: [
          "Photos",
          "Description",
          "House rules",
          APP_NAME + " message",
        ],
        displayTitle: "Where did they advertise or solicit?",
      },
      {
        reason: "They collect fees or deposits outside of " + APP_NAME,
        descSample: "Ex: Additional security deposit or fees",
        readyToSubmit: true,
      },
      {
        reason: "They offered another listing",
        readyToSubmit: true,
      },
    ],
  },
  {
    index: 1,
    name: "They're being offensive",
    descriptions: [
      {
        reason: "They’re being discriminatory",
        descSample: "Ex: Racist, homophobic, sexist",
        displayTitle: "Describe how they’re being discriminatory",
        subtitle: "Please provide specific details.",
      },
      {
        reason: "They’re being inappropriate",
        descSample: "Ex: Sexually suggestive, graphic",
        displayTitle: "Describe how they’re being inappropriate",
        subtitle: "Please provide specific details.",
      },
      {
        reason: "They’re being abusive or hostile",
        descSample: "Ex: Bullying, threats, verbal assaults",
        displayTitle: "Describe how abusive or hostile",
        subtitle: "Please provide specific details.",
      },
    ],
  },
  {
    index: 2,
    name: "Something else",
    descriptions: [
      {
        reason: "The host is unresponsive",
        readyToSubmit: true,
      },
      {
        reason: "They collect fees or deposits outside of " + APP_NAME,
        readyToSubmit: true,
      },
      {
        reason: "My host is asking me to cancel",
        readyToSubmit: true,
      },
      {
        reason: "I’m concerned they’re hosting in my neighborhood",
        readyToSubmit: true,
      },
      {
        reason: "Something on this page is broken",
        readyToSubmit: true,
      },
    ],
  },
]

const ReportHostModal = ({ isOpen, onClose }: ReportHostModalProps) => {
  const pageLevel = useReportHostStore((state) => state.pageLevel)
  const firstLevelIndex = useReportHostStore((state) => state.firstLevelIndex)
  const secondLevelIndex = useReportHostStore((state) => state.secondLevelIndex)
  const reportName = useReportHostStore((state) => state.data.name)
  const reportReason = useReportHostStore((state) => state.data.reason)
  const reportDesc = useReportHostStore((state) => state.data.description)
  const isReported = useReportHostStore((state) => state.isReported)
  const reportData = useReportHostStore((state) => state.data)
  const increasePageLevel = useReportHostStore(
    (state) => state.increasePageLevel
  )
  const decreasePageLevel = useReportHostStore(
    (state) => state.decreasePageLevel
  )
  const setFirstLevelIndex = useReportHostStore(
    (state) => state.setFirstLevelIndex
  )
  const setSecondLevelIndex = useReportHostStore(
    (state) => state.setSecondLevelIndex
  )
  const setFirstLevel = useReportHostStore((state) => state.setFirstLevel)
  const setSecondLevel = useReportHostStore((state) => state.setSecondLevel)
  const setDescription = useReportHostStore((state) => state.setDescription)
  const setMultipleDescription = useReportHostStore(
    (state) => state.setMultipleDescription
  )
  const setRemoveDescription = useReportHostStore(
    (state) => state.setRemoveDescription
  )
  const setClearDescription = useReportHostStore(
    (state) => state.setClearDescription
  )
  const setIsReported = useReportHostStore((state) => state.setIsReported)

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="sm">
      <div className="h-[60vh] overflow-y-auto">
        <div className="p-5">
          <Typography variant="h2" fontWeight="semibold">
            {isReported
              ? "We got your report"
              : // @ts-ignore
                pageLevel === 3
                ? reportArr[firstLevelIndex]?.descriptions[secondLevelIndex]
                    ?.displayTitle
                : "What's happening?"}
          </Typography>
          <Typography variant="h4" className={`${isReported && "mt-7"}`}>
            {isReported
              ? "Thanks for taking the time to let us know what's going on. Reports like yours " +
                "help keep the " +
                APP_NAME +
                " community safe and secure."
              : pageLevel === 3 &&
                  // @ts-ignore
                  reportArr[firstLevelIndex]?.descriptions[secondLevelIndex]
                    ?.subtitle
                ? // @ts-ignore
                  reportArr[firstLevelIndex]?.descriptions[secondLevelIndex]
                    ?.subtitle
                : "This will only be shared with " + APP_NAME + "."}
          </Typography>
        </div>
        {!isReported && (
          <fieldset className="px-5">
            <div
              className={`${
                pageLevel != 3
                  ? "divide-y divide-gray-200 border-gray-200"
                  : pageLevel === 3 &&
                      firstLevelIndex === 0 &&
                      secondLevelIndex <= 2
                    ? "grid grid-cols-2 gap-3"
                    : "mt-4"
              }`}
            >
              {
                // third level
                pageLevel === 3 ? (
                  firstLevelIndex === 0 && secondLevelIndex <= 2 ? (
                    reportArr[firstLevelIndex]?.descriptions[
                      secondLevelIndex
                      // @ts-ignore
                    ]?.descList.map((report, index) => (
                      <label
                        key={`third-level-con-${index}`}
                        className={`${reportDesc.includes(report) ? "ring-2 ring-gray-900" : "ring-1 ring-gray-300"} flex items-center px-4 py-2 rounded-full hover:ring-gray-900 cursor-pointer`}
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox  text-gray-900 hidden"
                          checked={reportDesc.includes(report)}
                          onChange={() => {
                            if (reportDesc.includes(report)) {
                              setRemoveDescription(report)
                            } else {
                              setMultipleDescription(report)
                            }
                          }}
                        />
                        <span className="ml-2">{report}</span>
                      </label>
                    ))
                  ) : (
                    <div>
                      <textarea
                        rows={4}
                        name="comment"
                        id="comment"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:leading-6"
                        defaultValue={""}
                        placeholder={`Ex: ${reportReason} because...`}
                        onChange={(e) => setDescription(e.currentTarget.value)}
                      />
                    </div>
                  )
                ) : // second level
                pageLevel === 2 ? (
                  reportArr[firstLevelIndex]?.descriptions.map(
                    (report, index) => (
                      <div
                        key={`second-level-con-${index}`}
                        className="relative flex items-start py-5"
                      >
                        <div className="min-w-0 flex-1 leading-6">
                          <label
                            htmlFor={`second-level-${index}`}
                            className="select-none"
                          >
                            {report.reason}
                          </label>
                          <Typography variant="h4" className="text-gray-500">
                            {
                              // @ts-ignore
                              report.descSample
                            }
                          </Typography>
                        </div>
                        <div className="ml-3 flex h-6 items-center">
                          <input
                            id={`second-level-${index}`}
                            name="plan"
                            type="radio"
                            defaultChecked={undefined}
                            checked={reportReason === report.reason}
                            className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                            onChange={() => {
                              setSecondLevelIndex(index)
                              setSecondLevel(report.reason)
                            }}
                          />
                        </div>
                      </div>
                    )
                  )
                ) : (
                  // first level
                  reportArr.map((report, index) => (
                    <div
                      key={`first-level-con-${index}`}
                      className="relative flex items-start py-5"
                    >
                      <div className="min-w-0 flex-1 leading-6">
                        <label
                          htmlFor={`first-level-${index}`}
                          className="select-none"
                        >
                          {report.name}
                        </label>
                      </div>
                      <div className="ml-3 flex h-6 items-center">
                        <input
                          id={`first-level-${index}`}
                          name="plan"
                          type="radio"
                          defaultChecked={undefined}
                          checked={reportName === report.name}
                          className="h-4 w-4 border-gray-300 text-primary-600 focus:ring-primary-600"
                          onChange={() => {
                            setFirstLevelIndex(index)
                            setFirstLevel(report.name)
                          }}
                        />
                      </div>
                    </div>
                  ))
                )
              }
            </div>
          </fieldset>
        )}
      </div>
      <div
        className={`${pageLevel > 1 && !isReported ? "justify-between" : "justify-end"} border-t border-gray-300 flex items-center`}
      >
        {pageLevel > 1 && !isReported && (
          <Button
            variant="ghost"
            className="ml-1 underline font-medium"
            onClick={() => {
              decreasePageLevel()
              setClearDescription()
            }}
          >
            Back
          </Button>
        )}
        <Button
          variant="default"
          className="mx-5 my-4 px-8  disabled:opacity-40"
          onClick={() => {
            isReported
              ? onClose()
              : (pageLevel === 2 &&
                    // @ts-ignore
                    reportArr[firstLevelIndex]?.descriptions[secondLevelIndex]
                      ?.readyToSubmit) ||
                  pageLevel === 3
                ? setIsReported()
                : increasePageLevel()
          }}
          disabled={
            (pageLevel === 1 && reportName === "") ||
            (pageLevel === 2 && reportReason === "") ||
            (pageLevel === 3 && reportDesc === "")
          }
        >
          {isReported
            ? "Ok"
            : pageLevel === 3
              ? "Submit"
              : pageLevel === 2
                ? "Next"
                : "Ok"}
        </Button>
      </div>
    </ModalContainer>
  )
}

export default ReportHostModal
