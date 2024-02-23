import { Button } from "@/common/components/ui/Button"
import { Title } from "@/common/components/ui/Title"
import ToggleSwitch from "@/common/components/ui/Toggle"
import { Typography } from "@/common/components/ui/Typography"
import { Dispatch, useState } from "react"
import useFirstLevelStore from "../store/useFirstLevelStore"
import toast from "react-hot-toast"

interface ModalDecadeYouWereBornProps {
  checked: boolean
  onChange: () => void
  initializeCheck?: boolean
  setIsOpen: Dispatch<boolean>
}

const ModalDecadeYouWereBorn = ({initializeCheck = false,setIsOpen}: ModalDecadeYouWereBornProps) => {
  const [checked, setChecked] = useState(initializeCheck)
  const handleToggleChange = () => {
    setChecked(!checked)
  }

  const [decadeWereBorn, setDecadeWereBorn] = useState("")
  const setDecadeWereBornStore = useFirstLevelStore((state) => state.setWorkName)
  const save = () => {
    if (decadeWereBorn) {
      setDecadeWereBornStore(decadeWereBorn)
      toast.success("Saved")
    } else {
      toast.error("Please fill out the form")
    }
  }
  return (
    <div>
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
            <Button size={"lg"} variant={"primary"} onClick={() => save()}>
              Save
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ModalDecadeYouWereBorn
