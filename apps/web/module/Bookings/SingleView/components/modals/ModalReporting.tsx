import ModalContainer from "@/common/components/ModalContainer"
import RightRadioList from "@/common/components/RightRadioList"
import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { ChangeEvent, useState } from "react"

interface ModalReportingProps {
  isOpen: boolean
  onClose: () => void
  reportListingArr: {
    name: string
    report?: { reportRes: string;  }[]
    choices?: {
      description: string; reason?: string; 
}[]
  }[]
}

const ModalReporting = ({
  isOpen,
  onClose,
  reportListingArr}: ModalReportingProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [selectedDescription, setSelectedDescription] = useState<string>("");
  const [isInaccurateSelected, setIsInaccurateSelected] = useState(false);
  const [isReport, setIsReport] = useState(false); 
  const [isScam, setIsScam] = useState(false); 
  const [isOffensive, setIsOffensive] = useState(false); 
  const [isSomethingElse, setIsSomethingElse] = useState(false);



  const isNextButtonDisabled = currentPage === 1 && !selectedOption;

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    setIsInaccurateSelected(option === "It's inaccurate or incorrect");
    setIsReport(option === "We got your report");
    setIsScam(option === "Why do you think it’s a scam?");
    setIsScam(option === "Why do you think it’s offensive?");
    setIsSomethingElse(option === "Why are you reporting this listing?");

    if (option === "It's inaccurate or incorrect") {
      setIsInaccurateSelected(true);
    }
     else if (option === "It’s not a real place to stay") {
      setIsReport(true);
    }
      else if (option === "It’s a scam") {
      setIsScam(true);
    }
    else if (option === "It’s offensive") {
      setIsOffensive(true);
    }
    else if (option === "It's something else") {
      setIsSomethingElse(true);
    }
  }




  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setIsInaccurateSelected(selectedOption === "It's inaccurate or incorrect");
    setIsReport(selectedOption === "It’s not a real place to stay");
    setIsScam(selectedOption === "It's a scam");
    setIsOffensive(selectedOption === "It's offensive");
    setIsSomethingElse(selectedOption === "It's something else");


  }
  const prevPage = () => {
    setCurrentPage(currentPage - 1)
  }
  const selectedReport = reportListingArr.find(
    (report) => report.name === selectedOption
  )
  
 const handleDescriptionChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
  setSelectedDescription(event.target.value);
};

  return (
    <ModalContainer size="sm" onClose={onClose} isOpen={isOpen}>
      <div className="p-6 flex flex-col divide-text-100 overflow-y-auto h-[400px]">
     
        {currentPage === 1 && (
           <>
           <Title className="flex text-xl font-semibold mb-1">
            {(currentPage === 1 || !isInaccurateSelected) ? "Why are you reporting this listing?" : "Describe how it's inaccurate or incorrect"}
          </Title>
          <Title className="text-md font-semibold mt-2">
              {(currentPage === 1 || !isScam) ? "This won't be shared with the Host." : ""}
            </Title>
            <div>
                <RightRadioList
                  title={""}
                  lists={reportListingArr.map((reportReason) => ({
                    id: reportReason.name,
                    option: reportReason.name,
                  }))}
                  onSelect={(option) => handleOptionSelect(option)} />
            </div></>
        )}
      {currentPage === 2 && (
      <>
         {isInaccurateSelected && (
            <Title className="flex text-xl font-semibold mb-1">
              Describe how it's inaccurate or incorrect
            </Title>
          )}
          {isReport && (
            <Title className="flex text-xl font-semibold mb-1 border-none">
              We got your report
            </Title>
          )}
          {isScam && (
            <Title className="flex text-xl font-semibold mb-1 border-none">
              Why do you think it's a scam?
            </Title>
          )}
          {isOffensive && (
            <Title className="flex text-xl font-semibold mb-1 border-none">
              Why do you think it's offensive
            </Title>
          )}
          {isSomethingElse && (
            <Title className="flex text-xl font-semibold mb-1 border-none">
              Why are you reporting this listing?
            </Title>
          )}

          {selectedOption === "It's inaccurate or incorrect" && (
              <textarea
                className=" p-2 border border-gray-300 rounded-md w-full h-32 mt-7"
                placeholder="Ex. This listing says it's an entire home but its actually a private room."
                value={selectedDescription}
                onChange={handleDescriptionChange}
              />
            )}
            
            {selectedOption === "It’s not a real place to stay" && (
              <div className="mt-7">
                 <Typography variant={"h3"} >
                  Thanks for taking the time to let us know what’s going on. Reports like yours help keep our community safe and secure.
                </Typography>
              </div>
            )}
             {selectedOption === "It’s a scam" && (
              <Title className="flex text-xl font-semibold mb-1">
                Why do you think it’s a scam?
              </Title>
            )}
             {selectedOption === "It’s offensive" && (
              <Title className="flex text-xl font-semibold mb-1">
                Why do you think it’s offensive?
              </Title>
            )}
             {selectedOption === "It’s something else" && (
              <Title className="flex text-xl font-semibold mb-1">
                Why are you reporting this listing?
              </Title>
            )}
           {/* //Page 2 ko to*/}
           {selectedReport?.choices && selectedReport.choices.length > 0 &&(
              <RightRadioList
                title=""
                lists={(selectedReport?.choices || []).map((choice, num) => ({
                  id: choice.reason || num.toString(),
                  option: choice.reason || "",
                  description: choice.description || "",
                  report: choice.reason || ""
                }))}
                onSelect={(report) => {(report); console.log(selectedReport)}
                }
              />
              
            )}
      </>
    )}
      {currentPage === 3 && (
      <>
            {selectedReport?.choices && selectedReport.choices.length > 0 && (
              <RightRadioList
                title=""
                lists={(selectedReport?.report || []).map((choice: { reportRes: any }) => ({
                  id: choice.reportRes,
                  option: choice.reportRes,
                  description: choice.reportRes || "",
                }))}
                onSelect={(report) => {
                  handleOptionSelect(report); //temporary changed lang para mawala error.
                  console.log(selectedReport);
                }}
              />
            )}
      </>
       )}
    </div>
   
    <div className="flex items-center p-4 md:p-5 bottom-0 border-t border-gray-200 rounded-b dark:border-gray-600">
      <div className="flex justify-between w-full">
      {currentPage === 1 && (
       <Button variant="default" onClick={nextPage} className="ml-auto">
       Next
     </Button>
      )}
      {currentPage === 2 && (
         <><Button variant="ghost" onClick={prevPage} className=" mr-2">
              Back
            </Button>
            <Button variant="default" onClick={nextPage} disabled={isNextButtonDisabled} className=" ml-2">
                Next
            </Button>
        </>
      )}
       {currentPage === 3 && (
         <><Button variant="ghost" onClick={prevPage} className=" mr-2">
              Back
            </Button>
            <Button variant="default" onClick={nextPage} disabled={isNextButtonDisabled} className=" ml-2">
                Next
            </Button>
        </>
      )}
       
      </div>
    </div>


    </ModalContainer>
  )
}

export default ModalReporting
