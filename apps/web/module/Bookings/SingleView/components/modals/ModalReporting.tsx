import ModalContainer from "@/common/components/ModalContainer"
import RightRadioList from "@/common/components/RightRadioList"
import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import { useState } from "react"

interface ModalReportingProps {
  isOpen: boolean
  onClose: () => void
  reportListingArr: {
    name: string
    choices: { reason: string; description?: string }[]
  }[]
}

const ModalReporting = ({
  isOpen,
  onClose,
  reportListingArr,
}: ModalReportingProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const isNextButtonDisabled = currentPage === 1 && !selectedOption;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option)
  }
  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const selectedReport = reportListingArr.find(
    (report) => report.name === selectedOption
  )
  return (
    <ModalContainer size="sm" onClose={onClose} isOpen={isOpen}>
      <div className="p-6 flex flex-col divide-text-100 overflow-y-auto h-[500px]">
        <Title className="flex text-xl font-semibold mb-1">
          Why are you reporting this listing?
        </Title>
        <Title className="text-md font-semibold mt-2">
          This won't be shared with the Host.
        </Title>
        {currentPage === 1 && (
          <div>
            <form className="">
              <RightRadioList
                title=""
                lists={reportListingArr.map((report) => ({
                  id: report.name,
                  option: report.name,
                }))}
                onSelect={(option) => handleOptionSelect(option)}
              />
            </form>
            <div className="flex fixed bottom-0 right-0 pb-5 pr-5">
              <Button variant="default" onClick={nextPage} disabled={isNextButtonDisabled}>
                Next
              </Button>
            </div>
          </div>
        )}
        {currentPage === 2 && (
          <div className="">
            <form>
              <RightRadioList
                title=""
                lists={(selectedReport?.choices || []).map((choice) => ({
                  id: choice.reason,
                  option: choice.reason,
                  description: choice.description || "",
                }))}
                onSelect={() => ""}
              />
            </form>
            <div className=""></div>
            <div className="">
              <div className="flex fixed bottom-0 pb-5 pr-5">
                <Button variant="ghost" onClick={prevPage}>
                  Back
                </Button>
              </div>
              <div className="flex fixed bottom-0 right-0 pb-5 pr-5">
                <Button variant="default" onClick={nextPage}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  )
}

export default ModalReporting
