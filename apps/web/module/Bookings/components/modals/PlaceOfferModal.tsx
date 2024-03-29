import ModalContainer from "@/common/components/ModalContainer"
import React from "react"
import { TitleSection } from "../../SingleView/components/TitleSection"
import IconDescription from "../../SingleView/components/IconDescription"

interface IIconDescription {
  id: number
  icon: React.ElementType
  desc: string
  isNotIncluded?: boolean
}
interface PlaceOffersProps {
  id: number
  title: string
  iconDesc: IIconDescription[]
}
interface PlaceOfferModalProps {
  isOpen: boolean
  onClose: () => void
  datas: PlaceOffersProps[]
}

const PlaceOfferModal = ({ isOpen, onClose, datas }: PlaceOfferModalProps) => {
  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} size="md">
      <div className="px-7 py-6 md:h-[700px] md:overflow-y-auto">
        <TitleSection title="What this place offers">
          {datas.map((data) => (
            <div className="py-2" key={data.id}>
              <TitleSection title={data.title}>
                {data.iconDesc.map((iconDesc) => (
                  <div className="pt-4 pb-0 border-b" key={iconDesc.id}>
                    <IconDescription
                      // @ts-ignore
                      icon={iconDesc.icon}
                      // @ts-ignore
                      desc={iconDesc.desc}
                      isNotIncluded={iconDesc.isNotIncluded}
                    />
                  </div>
                ))}
              </TitleSection>
            </div>
          ))}
        </TitleSection>
      </div>
    </ModalContainer>
  )
}

export default PlaceOfferModal
