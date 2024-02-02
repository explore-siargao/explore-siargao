import React, { useState } from "react"
import { Button } from "@/common/components/ui/Button"
import AboutTitleDescriptionModal from "./AboutTitleDescription"
const description = {
  generalDes:"hello World Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! recusandae quibusdam odit adipisci in ducimus consectetur odio! quibusdam odit adipisci in ducimus consectetur odio!",
  aboutSpace: "Space information Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio!",
  otherThingsNote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magni, obcaecati sed enim odio illum porro tempora dignissimos ea incidunt. Delectus officiis recusandae quibusdam odit adipisci in ducimus consectetur odio!"
}

const AboutTitleDescTest = () => {
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => {
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <div>
      <AboutTitleDescriptionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        listingDesc={description}
      />
     
        
      <Button
        className="underline text-sm font-semibold"
        variant={"ghost"}
        onClick={openModal}
      >
        Show more &gt;
      </Button>
    </div>
  )
}

export default AboutTitleDescTest
