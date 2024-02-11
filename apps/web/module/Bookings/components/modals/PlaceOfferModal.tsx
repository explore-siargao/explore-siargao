import ModalContainer from "@/common/components/ModalContainer"
import React from "react"
import { TitleSection } from "../../SingleView/components/TitleSection"
import IconDescription from "../../SingleView/components/IconDescription"

interface IIconDescription {
  id: number
  icon: React.ElementType[]
  desc: string[]
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
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className="px-5 pt-4  md:h-[700px] md:overflow-y-auto">
        <TitleSection title="What this place offers">
          {datas.map((data) => (
            <div className="py-2" key={data.id}>
              <TitleSection title={data.title}>
                {data.iconDesc.map((iconDesc) => (
                  <div className="py-4 border-b" key={iconDesc.id}>
                    <IconDescription
                      // @ts-ignore
                      icon={iconDesc.icon}
                      // @ts-ignore
                      desc={iconDesc.desc}
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
