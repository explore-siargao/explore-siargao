import ModalContainer from "@/common/components/ModalContainer"
import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import ToggleSwitch from "@/common/components/ui/Toggle"
import { Typography } from "@/common/components/ui/Typography"
import { useState } from "react"

interface ModalDecadeYouWereBornProps {
  isOpen: boolean
  onClose: () => void
  checked: boolean
  onChange: () => void
  initializeCheck: boolean
}

const ModalDecadeYouWereBorn = ({
  isOpen,
  onClose,
  initializeCheck,
}: ModalDecadeYouWereBornProps) => {
  const [checked, setChecked] = useState(initializeCheck)
  const handleToggleChange = () => {
    setChecked(!checked)
  }
  return (
    <div>
      <ModalContainer size="sm" isOpen={isOpen} onClose={onClose}>
        <div className="p-5">
          <Title size={"default"}>Decade you were born</Title>
          <div className="">
            <Typography variant={"h3"}>
              Don’t worry, other people won’t be able to see your exact
              birthday.{" "}
            </Typography>
          </div>
          <div className="flex mb-5 mt-5">
            <Title size={"sub"} className="text-gray-500 font-light">Show the decade I was born</Title>
            <div className="flex-grow"/>
            <div className="flex items-end justify-end ">
              <ToggleSwitch checked={checked} onChange={handleToggleChange} />
            </div>
          </div>

          <div className="flex items-end justify-end">
            <Button size={"lg"} variant={"primary"}>
              Save
            </Button>
          </div>
        </div>
      </ModalContainer>
    </div>
  )
}

export default ModalDecadeYouWereBorn
