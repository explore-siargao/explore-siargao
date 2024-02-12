import ModalContainer from "@/common/components/ModalContainer"
import { Title } from "@/common/components/ui/Title"
import { Typography } from "@/common/components/ui/Typography"
import IconDescription from "@/module/Bookings/SingleView/components/IconDescription"
import IconTitleDescription from "@/module/Bookings/SingleView/components/IconTitleDescription"
import { LucideIcon } from "lucide-react"
import React from "react"


interface IThingsToNote {
  id:number
  title:string,
  iconDesc:{
    id:number,
     icon:LucideIcon, 
    rule:string
  }[]
}

interface AddThingsToNoteModalProps {
  isOpen: boolean
  onClose: () => void
  groupRules: IThingsToNote[]
}

const AddThingsToNoteModal = ({
  isOpen,
  onClose,
  groupRules,
}: AddThingsToNoteModalProps) => {
  return (
    <ModalContainer onClose={onClose} isOpen={isOpen} size="sm">
      <div className="py-4 px-8 flex flex-col divide-text-100 overflow-y-auto h-[600px]">
        <Title className="flex text-xl font-semibold mb-1">House rules</Title>
        <h2 className="text-sm">
          You'll be staying in someone's home so treat it like a home
        </h2>
        {groupRules.map((gRule)=>(
          <div key={gRule.id}>
          <Typography variant={"h2"} >{gRule.title}</Typography>
          
            {gRule.iconDesc.map((item)=>(
              <div key={item.id}>
                <IconDescription icon={item.icon} desc={item.rule} />
              </div>
            ))}
         
          </div>
        ))}
      </div>
    </ModalContainer>
  )
}

export default AddThingsToNoteModal
