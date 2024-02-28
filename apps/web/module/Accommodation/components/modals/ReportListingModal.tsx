import ModalContainer from "@/common/components/ModalContainer"
import useReportListingStore from "@/common/store/useReportListingStore"
import Inaccurate from "../ReportListing/Inaccurate"
import DefaultOption from "../ReportListing/DefaultOption"
import { useEffect } from "react"
import React from "react"
import Reported from "../ReportListing/Reported"
import Scam from "../ReportListing/Scam"
import ScamSelectables from "../ReportListing/ScamSelectables"
import Feedback from "../ReportListing/Feedback"
import Offensive from "../ReportListing/Offensive"
import OffensiveTextArea from "../ReportListing/OffensiveTextArea"
import SomethingElse from "../ReportListing/SomethingElse"

type ReportListingModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ReportListingModal = ({ isOpen, onClose }: ReportListingModalProps) => {
  const reportListings = [
    {
      name: null,
      content: () => <DefaultOption />,
    },
    {
      name: "inaccurate",
      content: () => <Inaccurate />,
    },
    {
      name: "scam",
      content: () => <Scam />,
    },
    {
      name: "scamSelectables",
      content: () => <ScamSelectables />,
    },
    {
      name: "offensive",
      content: () => <Offensive />,
    },
    {
      name: "offensiveTextArea",
      content: () => <OffensiveTextArea />,
    },
    {
      name: "somethingElse",
      content: () => <SomethingElse />,
    },
    {
      name: "submit",
      content: () => <Reported withFeedback={false} closeModal={onClose} />,
    },
    {
      name: "submitWithFeedback",
      content: () => <Reported withFeedback={true} closeModal={onClose} />,
    },
    {
      name: "feedback",
      content: () => <Feedback closeModal={onClose} />,
    },
  ]

  const currentContent = useReportListingStore((state) => state.currentContent)
  const output = useReportListingStore((state) => state.output)

  useEffect(() => {
    console.log(output)
  }, [output])

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="sm">
      {reportListings
        .find((listing) => currentContent === listing.name)
        ?.content()}
    </ModalContainer>
  )
}

export default ReportListingModal
