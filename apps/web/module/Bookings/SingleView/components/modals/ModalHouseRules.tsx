import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import { LucideIcon } from "lucide-react"
import React from "react"
import IconTitleDescription from "../IconTitleDescription"

interface IHouseRules {
  id: number
  title: string
  iconDesc: {
    id: number
    icon: LucideIcon
    rule: string
    otherDescription?: string | undefined
  }[]
}

interface HouseRulesModalProps {
  isOpen: boolean
  onClose: () => void
  groupRules: IHouseRules[]
}

const HouseRulesModal = ({
  isOpen,
  onClose,
  groupRules,
}: HouseRulesModalProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="sm">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-1">House rules</Title>
        <Typography className="mb-5" variant={"h5"}>
          You'll be staying in someone's home so treat it like a home
        </Typography>
        {groupRules.map((gRule) => (
          <div key={gRule.id}>
            <Typography className="font-semibold mb-5" variant={"h3"}>
              {gRule.title}
            </Typography>
            {gRule.iconDesc.map((item) => (
              <div key={item.id}>
                <IconTitleDescription
                  title={item.rule}
                  icon={item.icon}
                  desc={item.otherDescription}
                />
                <div className="border-b mt-5 mb-5"></div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </ModalContainer>
  )
}

export default HouseRulesModal
