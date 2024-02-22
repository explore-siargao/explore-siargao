import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { LucideIcon } from "lucide-react"
import React from "react"
import IconTitleDescription from "../IconTitleDescription"

interface ISafetyProperty {
  id: number
  title: string
  iconDesc: {
    id: number
    icon: string
    safetyProperty: string
    otherDescription?: string
  }[]
}

interface SafetyPropertyProps {
  isOpen: boolean
  onClose: () => void
  groupSafetyProperty: ISafetyProperty[]
}

const SafetyPropertyModal = ({
  isOpen,
  onClose,
  groupSafetyProperty,
}: SafetyPropertyProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="sm">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title size={"ContentTitle"} className="flex font-semibold mb-1">
          Safety & property
        </Title>
        <Typography className="mb-5" variant={"h5"}>
          Avoid surprises by looking over these important details about your
          Host's property
        </Typography>

        {groupSafetyProperty.map((gSafetyProperty) => (
          <div className="mt-5" key={gSafetyProperty.id}>
            <Typography className="font-semibold mb-5" variant={"h4"}>
              {gSafetyProperty.title}
            </Typography>

            {gSafetyProperty.iconDesc.map((item) => (
              <div className="border-b" key={item.id}>
                <IconTitleDescription
                  className="mb-5 mt-5"
                  title={item.safetyProperty}
                  icon={item.icon}
                  description={item.otherDescription}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </ModalContainer>
  )
}

export default SafetyPropertyModal
