import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import React from "react"
import { Button } from "@/common/components/ui/Button"
interface ICancellationPolicy {
  id: number
  title: string
  desc: {
    id: number
    cancellationPolicy: string
    otherDescription?: string
  }[]
}

interface CancellationPolicyProps {
  isOpen: boolean
  onClose: () => void
  groupCancellationPolicy: ICancellationPolicy[]
}

const CancellationPolicyModal = ({
  isOpen,
  onClose,
  groupCancellationPolicy,
}: CancellationPolicyProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="sm">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-1">
          Cancellation policy
        </Title>
        <Typography className="mb-5" variant={"h5"}>
          Before you book, make sure you're comfortable with this Host's
          cancellation policy. Keep in mind that Explore Siargao's{" "}
          <button className="font-semibold underline">
            Extenuating Circumstances policy{" "}
          </button>{" "}
          doesn't cover cancellations due to illness or travel disruptions
          caused by COVID-19.
        </Typography>

        {groupCancellationPolicy.map((gCancellationPolicy) => (
          <div className="mt-5" key={gCancellationPolicy.id}>
            <Typography className="font-semibold mb-5" variant={"h3"}>
              {gCancellationPolicy.title}
            </Typography>

            {gCancellationPolicy.desc.map((item) => (
              <div key={item.id}>
                <Typography variant="h5">{item.cancellationPolicy}</Typography>

                {item.otherDescription && (
                  <Typography className="flex" variant="h5">
                    {item.otherDescription}
                  </Typography>
                )}
                
              </div>
              
            ))}
          </div>
          
        ))}
      </div>
      <Button className="underline font-semibold" variant={"ghost"}>
                  Learn more about cancellation policies
                </Button>
    </ModalContainer>
  )
}

export default CancellationPolicyModal
