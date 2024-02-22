import { Title } from "@/common/components/ui/Title"
import { useState } from "react"
import React from "react"

interface IProfileFirstLevel {
  modalComponent: any
  title: string
  icon: JSX.Element
}

interface ProfileFirstLevelProps {
  menu: IProfileFirstLevel[]
}

const ProfileFirstLevel: React.FC<ProfileFirstLevelProps> = ({ menu }) => {
  const [openModal, setOpenModal] = useState<string | null>(null)

  const handleItemClick = (title: string) => {
    setOpenModal(title)
  }

  return (
    <div className="lg:grid grid-cols-2 md:grid grid-cols">
      {menu.map((item) => (
        <div
          key={item.title}
          className="border-b flex items-center p-5  rounded-xl hover:bg-primary-100 cursor-pointer"
          onClick={() => handleItemClick(item.title)}
        >
          <div className="mr-2">{item.icon}</div>
          <Title size={"ContentTitle"} className="text-gray-500">
            {item.title}
          </Title>
        </div>
      ))}
      {menu.map((item) => (
        <React.Fragment key={item.title}>
          {openModal === item.title && (
            <item.modalComponent
              isOpen={true}
              onClose={() => setOpenModal(null)}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProfileFirstLevel
