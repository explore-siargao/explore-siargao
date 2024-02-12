import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { LucideIcon } from "lucide-react"
import React from "react"
import IconTitleDescription from "../IconTitleDescription"
import { Button } from "@/common/components/ui/Button"

interface ICancellationPolicy {
  id: number
  title: string
  iconDesc: {
    id: number
    icon: LucideIcon
    cancellationPolicy: string
    otherDescription?: string | undefined
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
    <ModalContainer onClose={onClose} isOpen={isOpen} size="md">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-1">
          Cancellation policy
        </Title>
        <Typography className="mb-5" variant={"h5"}>
          Before you book, make sure you're comfortable with this Host's
          cancellation policy. Keep in mind that Explore Siargao's
          <Button variant={"ghost"} className="underline font-semibold">Extenuating Circumstances policy</Button>
        </Typography>

        {groupCancellationPolicy.map((gCancellationPolicy) => (
          <div className="mt-5" key={gCancellationPolicy.id}>
            <Typography className="font-semibold mb-5" variant={"h3"}>
              {gCancellationPolicy.title}
            </Typography>

            {gCancellationPolicy.iconDesc.map((item) => (
              <div key={item.id}>
                <IconTitleDescription
                  className="mb-8 mt-5 "
                  title={item.cancellationPolicy}
                  icon={item.icon}
                  desc={item.otherDescription}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ModalContainer>
  )
}

export default CancellationPolicyModal
